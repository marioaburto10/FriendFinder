//Dependencies
var path = require('path');
var friendList = require('../data/friends.js');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  app.use('/api/friends', function(req,res){
  res.send('Helloooo');
  });

  // app.get('/api/friends', function(req,res){
  // res.json(friendList);
  // });
};
