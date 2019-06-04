const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;

app.use(express.static("client/build"));

app.listen(port, () => `Server running on port ${port}`);
