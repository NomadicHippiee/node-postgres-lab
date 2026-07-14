const db = require("../db/queries");

exports.logUsernames = async (req, res) => {
    const usernames = req.query.search 
    ? await db.searchUsernames(req.query.search)
    : await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.createUsernameGet = (req, res) => {
    res.render("newUser", { title: "Create new username"})
};

exports.createUsernamePost = async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
};