var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

mongoose.connect('mongodb://localhost:27017/user_manage');
var db = mongoose.connection;
db.on('error', function () {
    console.log("Error happens!!");
});
db.on('open', function () {
    console.log("Connection established!!!");
});

var user_schema = mongoose.Schema({
    username: String,
    location: String
});
var user_model = mongoose.model('users', user_schema);


app.get('/getusers', function (req, res) {
    user_model.find({}, function (err, users) {
        if(!err) {
            res.send(users);
        }
    })
});

app.get('/deleteuser', function (req, res) {
    user_model.remove({'username': req.query.username}, function (err) {
        if(!err) {
            res.send(req.query.username);
        }
    })
});

app.post('/createuser', function (req, res) {
    console.log(req.body);
    var new_user = user_model(req.body);
    new_user.save(function (err) {
        if(!err) {
            res.send({
                flg: true
            })
        }
    })
});

app.get('/fetchuser', function (req, res) {
   user_model.findOne({'username': req.query.username}, function (err, user) {
       if(!err) {
           console.log(user);
           res.send(user);
       }
   })
});

app.listen(4000, function () {
    console.log("Sever running @ localhost:4000");
});
