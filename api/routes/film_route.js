var express = require('express');
var router = express.Router();

const Film = require("../models/film");
const data = require('../data/data');

router.route("/getFilms").get(function(req,res){
    Film.find({}, function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
  })
  
router.route("/addFilm").post(function(req,res){
    Film.insertMany(data.films, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

var query_s = {name:"The Nun"}
router.route("/deleteFilm").delete(function(req,res){
    Film.deleteMany(query_s, function(err,result){
        if (err) res.send(err);
        else res.send(result);
    })
})

var value_s = {name:"Home"}
var newValue_s = { $set: {duration: 90} };
router.route("/updateFilm").put(function(req,res){
    Film.updateOne(value_s,newValue_s,function(err,result){
        if(err) res.send(err);
        else res.send(result);
    })
})
module.exports = router;