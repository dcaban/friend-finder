var friendData = require("../data/friendData");

module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

               console.log("im running");
                   var newFriend = req.body;
                   console.log(friendData);
                   var newName = newFriend.name;
                   var newScore = req.body.q1;

                   console.log("work damnit " + newScore);
                   // for (var i = 0; i < 9; i++) {
                   //     var newScores = parseInt(newFriend[i].scores[i]);
                   //     console.log(newScores)
                  // }


           var difference = 0;


                   // for (var i = 0; i < (friendData.length); i++) {
                   //
                   //     console.log(friendData[i].name);
                   //
                   //       for (var j=0; j< friendData[i].scores[j]; j++){
                   //           console.log("testio"+ friendData[i].scores[j]);
                   //           // console.log(friendsData[i].scores[x]);
                   //
                   // }
                   // }

        friendData.push(req.body);

        res.json(newFriend)
    });
};