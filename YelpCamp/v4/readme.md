# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name    url             verb    description 
=============================================
INDEX   /dogs           GET     Display a list of all dogs
NEW     /dogs/new       GET     Display form to make a new dog 
CREATE  /dogs           POST    Add new dog to database
SHOW    /dogs/:id       GET     Shows info about one dog


# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

# Add Seed Files
* Add seeds.js file
- The point of a seeds file is that we can run it and seed our database with data. 

* Run the seeds file every time the server starts

# Add the comment model!
* Make our errors go away!
* Display comments on campground show page!

# Comment New/Create
* Discuss nested routes
- We have the ability to combine RESTful routes together. For example, we need to combine
our comments with our campgrounds. Needs to be an association with both. 
* Add the comment new and create routes
* Add the new comment form


INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST