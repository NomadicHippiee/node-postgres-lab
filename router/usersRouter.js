const { Router } = require("express");
const usersController = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", usersController.logUsernames);
usersRouter.get("/new", usersController.createUsernameGet);
usersRouter.post("/new", usersController.createUsernamePost);

module.exports = usersRouter;
