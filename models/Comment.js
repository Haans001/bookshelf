const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    userName: String,
    rating: Number,
    body: String,
    submit_date: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);

module.exports = Comment = CommentSchema;
