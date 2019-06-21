const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: String,
  //   comments: [Comment],
  comments: [
    {
      _id: false,
      userName: String,
      rating: Number,
      body: String,
      submit_date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  ratings: [Number],
  calculatedRating: {
    type: Number,
    default: 0
  }
});

module.exports = Book = mongoose.model("book", BookSchema);
