const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  // title: String,
  text1: String,
  text2: String,
  text3: String,
  text4: String,
  text5: String,
  text6: String,
  text7: String,
  text8: String,
  number1: Number,
  number2: Number,
  number3: Number,
  number4: Number,
  number5: Number,
  number6: Number,
  // category: String, //assigned by user to all of them //I think that should go somewhere else
  date1: String,
  date2: String,
  image: String,
  collectionId: String
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
