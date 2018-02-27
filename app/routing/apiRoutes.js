
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  // Push a friend object to the friendArray
  app.post("/api/friends", function(req, res) {
    var difArray = [];
    var totalDif;
    var highestDif = 0;
    var bestMatch;
    console.log(req.body);
    console.log(friends);
    for(var i = 0; i < friends.length; i++) {
      for(var c = 0; c < friends[i].scores.length; c++) {
        difArray.push(Math.abs(friends[i].scores[c]-req.body.scores[c]));
      }
      for(var p = 0; p < difArray.length; p++) {
        totalDif += difArray[p];
      }
      if(totalDif > highestDif) {
        highestDif = totalDif;
        bestMatch = friends[i];
      }
    }

    friends.push(req.body);
    //logic
    res.json(bestMatch);
  });
};