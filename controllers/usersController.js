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

exports.deleteAllUsernames = async (req, res) => {
    if (req.query.confirm === "true") {
        await db.deleteAllUsernames();
        res.send("All usernames deleted successfully");
    } else {
        res.send("Confirmation required. Add ?confirm=true to delete all usernames");
    }
};