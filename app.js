const express = require("express");
const path = require("node:path");
const app = express();
const usersRouter = require("./router/usersRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use("/", usersRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));
