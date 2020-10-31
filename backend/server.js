const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("./database/mongoose");

// const user = require('./routes/userRoutes') // Imports routes for the user

const User = require("./database/models/userModel")

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', user);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT , PATCH, DELETE");
    res.header("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");

    next();
});

app.get("/test", (req, res) => {
    res.send("Server works!!!")
});

app.get('/user', (req, res) => {
    User.find({})
        .then(user => res.send(user))
        .catch((error) => console.log(error));
});

app.get('/user/:userId', (req, res) => {
    User.findById({'_id': req.params.userId})
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
})

app.post('/create_user', (req, res) => {
    let user = new User(
        {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            isMember: req.body.isMember,
            organization: req.body.organization,
            sector: req.body.sector,
            address: req.body.address,
            contact_number: req.body.contact_number,
            email_alerts: req.body.email_alerts,
            sms_alerts: req.body.sms_alerts,
        }
    );
    user.save()
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
});

app.patch('/user/:userId', (req, res) => {
    User.findOneAndUpdate({'_id': req.params.userId}, {$set: req.body})
        .then((user) => res.send(user))
        .catch((error) => console.log(error));

});

app.delete('/user/:userId', (req, res) => {
    User.findByIdAndDelete(req.params.userId)
        .then((user) => res.send(user))
        .catch((error) => console.log(error));
});

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});