exports.logUsernames = (req, res) => {
    console.log("Usernames will be logged here - wip");
    res.render("index", { title: "All usernames" });
};

exports.createUsernameGet = (req, res) => {
    res.render("newUser", { title: "Create new username"})
};

exports.createUsernamePost = (req, res) => {
    console.log("Username to be saved: ", req.body.username);
    res.redirect("/");
};