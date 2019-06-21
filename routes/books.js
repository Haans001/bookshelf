const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const fetch = require("node-fetch");
// mongo models
const Book = require("../models/Book");

// @route   POST books/submit_comment
// @desc    Submit a comment
// @access  Private
router.post("/submit_comment", auth, (req, res) => {
  const { book_id } = req.body;
  Book.findById(book_id).exec((err, book) => {
    if (err) throw err;
    // Creating a new book in DB if it didnt found record with served id
    if (!book) {
      new Book({
        _id: book_id
      })
        .save()
        .then(book => {
          saveComment(book, req.body);
        })
        .catch(err => res.status(404).json({ msg: "error" }));
    }
    // Adding a comment
    else {
      saveComment(book, req.body);
    }
  });
  return res.status(200).json(req.body);
});

function saveComment(book, comment) {
  book.comments.push({ ...comment });
  book.ratings.push(comment.rating);
  book.calculatedRating =
    book.ratings.length > 1
      ? book.ratings.reduce((a, b) => a + b) / book.ratings.length
      : comment.rating;

  book.save();
}

// @route   GET books/get/:book_id
// @desc    Submit a comment
// @access  Private
router.get("/get/:book_id", (req, res) => {
  const book_id = req.params.book_id;

  Book.findById(book_id)
    .select("-ratings")
    .then(book => {
      fetch(`https://www.googleapis.com/books/v1/volumes/${book_id}`)
        .then(data => data.json())
        .then(jsonData => {
          jsonData["comments"] = book;
          return res.status(200).json(jsonData);
        });
    });
});

module.exports = router;
