var express = require('express');
var router = express.Router();

const User_Review = require("../models/user_review");
const data = require('../data/data');

router.route("/addUserReview").post(function(req,res){
    User_Review.insertMany(data.user_review, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

var value_s = {id_user:1}
var newValue_s = { $set: {review: "Nothing"} };
router.route("/updateUserReview").put(function(req,res){
    User_Review.updateOne(value_s,newValue_s,function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
})

var query_s = {id_user:1}
router.route("/deleteUserReview").delete(function(req,res){
    User_Review.deleteMany(query_s, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

router.route("/getUsersReviews").get(function(req,res){
    User_Review.find({}, function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
  })

module.exports = router;