var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
        {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2947/15215548990_efc53d32b6.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
        {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2947/15215548990_efc53d32b6.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
        {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2947/15215548990_efc53d32b6.jpg"},
        {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
        res.render("campgrounds",{campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array
   var name = req.body.name
   var image = req.body.image
   var newCampground = {name: name, image:image}
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Has Started!"); 
});