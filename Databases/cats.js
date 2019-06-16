var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true});

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//Adding a new cat to the DB

// var george = new Cat({
//   name: "Mrs.Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong!");
//     } else {
//         console.log("we just saved a cat to the database")
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log("Error")
    } else {
        console.log(cat);
    }
});

//Retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, error!");
        console.log(err);
    } else {
        console.log("All the cats....");
        console.log(cats);
    }
});