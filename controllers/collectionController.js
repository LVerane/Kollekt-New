const db = require("../models");
// const Profile = require("../models/Profile");
//edit the functions as we go
module.exports = {
  findByType: function(req, res) {
    console.log("findByType with req.params.type = " + req.params.type);
    db.Collection.find({ type: req.params.type, isPrivate: false })
      .select({ name: 1, type: 1, image: 1 })
      .then(dbCollection => res.json(dbCollection))
      .catch(err => res.status(422).json(err));
  },
  findOneByType: function(req, res) {
    console.log("findOneByType with req.params.type = " + req.params.type);
    db.Collection.findOne({ type: req.params.type, isPrivate: false })
      .select({ name: 1, type: 1, image: 1 })
      .then(dbCollection => res.json(dbCollection))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    console.log("hit findAll");
    db.Collection.find({ isPrivate: false }) //maybe this should be a parameter passed
      .then(dbCollection => res.json(dbCollection))
      .catch(err => res.status(422).json(err));
  },
  // findAllInUser: function(req, res) {
  //   db.Collection.find(req.query) //req.query would be the filter for the user. get all collections from the user and don't fill them
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllPublicWithQuery: function(req, res) {
  //   db.Collection.find(req.query) //req.query would have { isPrivate : false, [key] : [value]}, where [key] : [value] are the search parameters
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    console.log("findById with req.params.id = " + req.params.id);
    db.Collection.find({ _id: req.params.id }) //get one collection by id and fill it with all items
      .populate("items")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //CREATE AND ASSOCIATE WITH USER
  // create: function(req, res) {
  //   db.Collection.create(req.body)
  //     .then(function(dbCollection) {
  //       return db.User.findOneAndUpdate(
  //         //do I keep the return?
  //         //probably actually set this differently
  //         { id: SOME_ID_PARAMETER }, //get the id from the User I'm adding the Collection to
  //         { $push: { collections: dbCollection._id } },
  //         { new: true }
  //       );
  //     })
  //     .then(function(dbUser) {
  //       res.json(dbUser);
  //     })
  //     .catch(function(err) {
  //       res.json(err);
  //     });
  // }
  //CREATE NOT ASSOCIATED
  create: function(req, res) {
    db.Collection.create(req.body)
      .then(function(dbCollection) {
        return db.Profile.findOneAndUpdate(
          { _id: req.body.profileId },
          { $push: { collections: dbCollection._id } },
          { new: true }
        )
          .then(function(dbProfile) {
            res.json(dbProfile);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  // update: function(req, res) {
  //   db.Collection.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  // remove: function(req, res) {
  //   db.Collection.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  //using profileId on remove to make sure it only deletes collections from the right profile, just in case two collections have the same id
  remove: function(req, res) {
    db.Profile.updateOne(
      { collections: req.params.collectionId, _id: req.params.profileId },
      { $pull: { collections: req.params.collectionId } }
    ).then(console.log("profile update happens"));
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
    //delete collections and items only if there is only one with a matching id, just in case two collections have the same id
    db.Collection.find({ _id: req.params.collectionId }).then(async res => {
      console.log("collection find happens");
      if (res.length === 1) {
        //do the thing
        await db.Item.deleteMany({
          collectionId: req.params.collectionId
        })
          .then(async res => {
            console.log("delete many items happens");
            //using profileId on remove to make sure it only deletes collections from the right profile, just in case two collections have the same id
            //redundant with the previous check for only one collection
            await db.Collection.deleteOne({
              _id: req.params.collectionId,
              profileId: req.params.profileId
            })
              .then(res => {
                console.log("delete one collection happens");
                return "test";
              })
              // .then(dbModel => res.json(dbModel))
              .catch(err => console.log(err));
          })
          // .then(dbModel => res.json(dbModel));
          .catch(err => console.log(err));
        // } else {
        //   res.json({
        //     msg:
        //       "Internal error: multiple collections have the same id. Collections and Items cannot be deleted for safety reasons"
        //   });
      }
      return "test";
    });
  },
  update: function(req, res) {
    console.log(req.body);
    console.log(req.params);
    db.Collection.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
