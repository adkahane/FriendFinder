
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  // Push a friend object to the friendArray
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
  });
};