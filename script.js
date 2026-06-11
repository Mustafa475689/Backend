const express = require("express");
const app = express();

app.use(function (req, res, next){
    console.log("middleware working");
    next();
});

app.get("/", function (req, res) {
    res.send("hello");
});

app.get("/profile", function (req, res) {
    res.send("hello from profile");
});

app.get("/profile/:username", function (req, res) { // is main jo : ke baad likha ha wo params kehlata ha
    res.send(`hello from profile ${req.params.username}`); // url se kuch bhi acess krna ha tu wo milega req se. 
});


app.listen(3000);