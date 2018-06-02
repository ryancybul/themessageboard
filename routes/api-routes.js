var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
    //creating the user! TRON
    app.post("/api/createuser", function(req, res) {
    //In jquery pass this information as an object.
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then((dbUsers) => {
            res.json(dbUsers);
        });
    })

    app.post("/api/getusers", function(req, res){
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    //Create board
    app.post("/api/createboard", function(req, res){
        //Create an if statement to see if the user is an admin
        db.Board.create({
            title: req.body.title,
            description: req.body.description
        }).then((dbBoard) => {
            res.json(dbBoard);
        });
    });

    //Create topic
    app.post("/api/createtopic", function(req, res){
        console.log(req.body);
        //We need to pass through the object containing the below case sensitive fields in JSON format.
        db.Topic.create({
            topicName: req.body.topicName,
            UserId: req.body.UserId,
            BoardId: req.body.BoardId
        }).then((dbTopic) => {
            res.json(dbTopic);
        });
    });

    //Create post
    app.post("/api/createpost", function(req, res){
    //We need to pass through the object containing the below case sensitive fields in JSON format.
        db.Post.create({
            content: req.body.content,
            UserId: req.body.UserId,
            TopicId: req.body.TopicId
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });
}