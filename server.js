var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

//load in all scraped articles
app.get("/", function (req, res) {
    db.Article.find({"saved": false}, function (err, data) {
        res.render("home", { articles: data });
    })
});

//load in all saved articles
app.get("/saved", function (req, res) {
    db.Article.find({"saved": true}, function (err, data) {
        res.render("saved", { savedArticles: data });
    })
});

//scrape the artnews site for current articles
app.get("/scrape", function (req, res) {
    request("http://www.artnews.com/category/news/", function (error, response, html) {
        var $ = cheerio.load(html);
        $("h2.entry-title").each(function (i, element) {
            var result = {};
            var summary = $(this).siblings("div.entry-summary").children("p").text();
            var regex = /Read More/gi;
            summary.replace(regex, "")
            console.log(summary);
            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");
            result.summary = $(this).siblings("div.entry-summary").children("p").text();
            result.saved = false;
            db.Article.create(result)
                .then(function (dbArticle) {
                    res.json({message:"Scrape Complete"});
                })
                .catch(function (err) {
                    //return res.json(err);
                });
        });
    });
});

//clear all articles from the db
app.get("/clearall", function (req, res){
    db.Article.remove({})
    .then(function (data){
        res.json({message:"All Articles Cleared"});
    })
    .catch(function (err){
        console.log(err);
    })
});

//save an article
app.post("/articles/save/:id", function (req, res){
    db.Article.findOneAndUpdate({_id: req.params.id}, {saved: true})
    .then(function (dbArticle){
        console.log(dbArticle);
        res.json({message:"Article Saved"});
    })
    .catch(function (err){
        console.log(err);
    });
});

//remove article from saved
app.post("/articles/remove/:id", function (req, res){
    db.Article.findOneAndUpdate({_id: req.params.id}, {saved: false})
    .then(function (dbArticle){
        console.log(dbArticle);
        res.json({message:"Article Removed"});
    })
    .catch(function (err){

    })
});

//get all the notes associated with an article
app.get("/articles/:id", function (req, res){
    db.Article.findOne({_id: req.params.id})
    .populate("notes")
    .then(function (dbArticle){
        console.log(dbArticle)
        res.json(dbArticle);
    })
    .catch(function (err){

    })
})

//add a note
app.post("/notes/:id", function (req, res){
    console.log(req.body);
    var note = {
        title: req.body.title,
        body: req.body.body
    };
    db.Note.create(note)
    .then(function (dbNote){
       return db.Article.findOneAndUpdate({_id: req.params.id}, {$push: {notes: dbNote._id}}, {new: true});
    })   
    .then(function(dbArticle){
        res.json(dbArticle);
    })
    .catch(function (err){
        res.json(err);
    })  
});

//update a note - to be finished later
app.post("/notes/edit/:id", function (req, res){
    
})

//delete a note
app.post("/notes/delete/:id", function (req, res){
    db.Note.findOneAndRemove({_id: req.params.id})
    .then(function(dbNote){
        console.log(dbNote);
        res.json({message:"Note Deleted"});
    })
})

app.listen(process.env.PORT || 3000, function () {
    console.log("App running on port " + PORT + "!");
});