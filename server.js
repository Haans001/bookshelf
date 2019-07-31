const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/config.js");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: "bookshelf"
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(express.json());

// routes
app.use("/auth", require("./routes/auth"));
app.use("/books", require("./routes/books"));
app.use("/collections", require("./routes/collections"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => console.log("server running"));
