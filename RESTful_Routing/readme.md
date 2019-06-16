# RESTful Routing 

# Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD (create, read, update, destroy)

REST is a convention - It is a pattern of routes we follow to structure our routes. 

Ex. blog

CREATE
READ /allblogs
UPDATE /updateBlog/:id
DESTROY /destroyBlog/:id

You make RESTful routes because it is conventional and it is reliable so other
people who are working on your code or when you're working with APIs, if something
is RESTful then it can be followed more easily

7 RESTful Routes / HTTP Verb
Index / GET
New / GET
Create / POST
Show / GET
Edit / GET
Update / PUT
Destroy / DELETE

# Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

# Basic Layout
* Add header and Footer Partials
* Include Semantic UI
* Add simple nav

# SHOWtime 
* Add show route
* Add show template
* Add links to show page
* Style show template

# Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

# Destroy
* Add Destroy Route
* Add Edit and Destroy Links

# Final Updates
* Sanitize blog body
* Style Index
* Update REST Table