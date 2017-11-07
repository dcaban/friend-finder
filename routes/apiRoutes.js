var friendData = require("../data/friendData");

module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {


               console.log("im running");
                   var newFriend = req.body;
                   console.log(friendData);
                   var newName = newFriend.name;
                   var newScore = friendData.scores;
                   var totalScore = parseInt(newFriend.totalScore);


        var newBff = {
            name: "",
            photo: "",
            friendDifference: 100
        };

                   console.log("work damnit " + totalScore);
                   // for (var i = 0; i < 9; i++) {
                   //     var newScores = parseInt(newFriend[i].scores[i]);
                   //     console.log(newScores)
                  // }


           var difference = 0;


                   for (var i = 0; i < (friendData.length); i++) {


                         for (var j = 0; j < friendData[i].scores[j]; j++){

                             difference += Math.abs(totalScore-
                                 parseInt(friendData[i].scores[j]));

                             newBff.name = friendData.name;
                             newBff.photo = friendData.photo;
                             newBff.friendDifference = difference;
                             console.log("best match   " + JSON.stringify(newBff));

                             console.log("testio"+ totalScore);


                   }
                   }

        friendData.push(req.body);

        res.json(newBff)
    });
};