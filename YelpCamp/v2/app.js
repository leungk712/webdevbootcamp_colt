var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
//         description: "This is a huge granite hill, no bathroom. No water. Beautiful granite!"
//     }, 
//     function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: ");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res){
    res.render("landing");
});

//INDEX ROUTE - show all campgrounds

app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB and then render
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
            res.render("index",{campgrounds: allCampgrounds});
       }
    });
});

//CREATE ROUTE - add new campgrounds

app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name
   var image = req.body.image
   var desc = req.body.description;
   var newCampground = {name: name, image:image, description: desc}
   //Create a new campground and save to database
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
            console.log(err);
       } else {
           //redirect back to campgrounds page
           res.redirect("/campgrounds");
       }
   }); 
});

//NEW - show form to create new campground

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW - shows more information about one campground

app.get("/campgrounds/:id", function(req, res){
    //find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err)
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});      
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started!"); 
});