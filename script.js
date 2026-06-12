const express = require("express");
const app = express();

app.set("view engine", "ejs"); // configure ejs

app.use(express.static('./public')); // express static file setup

app.use(function (req, res, next){
    console.log("middleware working");
    next();
});



app.get("/", function (req, res) {
    res.render("index"); // ejs bnany ke baad res.send ko res.render se replace krna ha 
    // render krty hui views folder ke andar ki kisi file ka name likhy or eske sath .ejs na likhy
});

app.get("/profile", function (req, res) {
    res.render("profile");
});

app.get("/profile/:username", function (req, res) { // is main jo : ke baad likha ha wo params kehlata ha
    res.send(`hello from profile ${req.params.username}`); // url se kuch bhi acess krna ha tu wo milega req se. 
});

app.get('/error', function(req, res, next){
    throw Error("Somthing went wrong");
})

// Error handling
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}); ///...........

app.listen(3000);