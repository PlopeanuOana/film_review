var express = require('express');
var router = express.Router();

const User = require("../models/users");
const data = require('../data/data');

router.route("/getUsers").get(function(req,res){
    User.find({}, function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
  })
  
router.route("/addUser").post(function(req,res){
    User.insertMany(data.users, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

var query_s = {firstName:"Roxana"}
router.route("/deleteUser").delete(function(req,res){
    User.deleteMany(query_s, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

var value_s = {firstName:"Oana"}
var newValue_s = { $set: {_id: 1} };
router.route("/updateUser").put(function(req,res){
    User.updateOne(value_s,newValue_s,function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
})
module.exports = router;