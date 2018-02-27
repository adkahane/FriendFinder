
var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  // Push a friend object to the friendArray
  app.post("/api/friends", function(req, res) {
    
    var lowestDif = 1000;
    var bestMatch;
    for(var i = 0; i < friends.length; i++) {
      var totalDif = 0;
      var difArray = [];
      for(var c = 0; c < friends[i].scores.length; c++) {
        difArray.push(Math.abs(parseInt(friends[i].scores[c]-req.body.scores[c])));
      }
      for(var p = 0; p < difArray.length; p++) {
        totalDif += difArray[p];
      }
      if(totalDif < lowestDif) {
        lowestDif = totalDif;
        bestMatch = friends[i];
      }
    }

    friends.push(req.body);
    res.json(bestMatch);
  });
};