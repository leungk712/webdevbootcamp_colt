# Databases

# Intro to Databases
* What is a database?
    - A database is a collection of information/data
    - Has an interface interacting with data (adding info, removing, editing)
    - ? what does interface mean? It means we can write code to interact with it

* SQL (relational database) vs. NoSQL (non-relational database)
    - SQL databases have been around the longest
    - SQL are tabular databases (flat) (you have to define a table ahead of time, not flexible)

* NoSQL Databases
    - You don't need to define databases ahead of them, they are flexible
    - No tables, looks more like JS objects w/ key:value pairs

# Intro to MongoDB
* What is MongoDB?
- MongoDB is a NoSQL database (will look like JS Objects that we store in database)

* Why are we using it?
- Mongo is currently the most popular database with Node JS 
- Popular stack called MEAN stack (Mongo, Express, Angular, Node)
- 

* Let's Install it!

# Our First Mongo Commands
* mongod (starts the demon, we need it running to run Mongo at all)
* mongo (opens the shell)
* help
* show dbs (important, shows all dbs we have)
* use (so we can use one of the dbs ex. demo)
* insert
* find / reading
* update
* remove

* CRUD = create, read, update, destroy

# Mongoose
* What is Mongoose?
- Mongoose is an object modeling for node.js. A tool/package that helps us interact
with MongoDB inside our Javascript files. Mongoose helps us interact with MongoDB 
database easier, but it is not necessary (ex. jQuery helps, but is not necessary for
DOM manipulation)
- Mongoose is an Object Data Mapper - a way for us to write JS in our files that 
will interact with our database

* Why are we using it?
-

* Interact with a Mongo Database using Mongoose
- Anytime we use Mongoose, we will be using callback functions. Why? Because
Javascript needs to communicate with the DB and see if things executed properly or
not.