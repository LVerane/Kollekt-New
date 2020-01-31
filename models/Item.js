const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  // title: String,
  text0: String,
  text1: String,
  text2: String,
  text3: String,
  text4: String,
  text5: String,
  text6: String,
  text7: String,
  number0: Number,
  number1: Number,
  number2: Number,
  number3: Number,
  number4: Number,
  number5: Number,
  // category: String, //assigned by user to all of them //I think that should go somewhere else
  date0: String,
  date1: String,
  image: String,
  collectionId: String
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
