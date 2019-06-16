# Authentication

# Intro to Auth
* What tools are we using?
    * Passport JS
    * Passport Local
    * Passport Local Mongoose
* Walk through auth flow
* Discuss sessions
    * Express-Session

- Passport JS is used quite a lot in the real world to implement their authentication

- Sessions! HTTP is a stateless protocol. Requests are a one-time interaction. 
- Sessions are a way to make HTTP non-stateless, to have state in our HTTP requests,
so we can send data, switch pages without any issues/being logged out each time, etc.

# Auth Code Along Part 1
* Set up folder structure
* Install needed packages
* Add root route and template
* Add secret route and template

# Auth Code Along Part 2
* Create user model
* Configure passport

# Auth Code Along Part 3
* Add Register Routes
* Add Register Form

# Auth Code Along Part 4
* Add Login Routes
* Add Login Form 

* Middleware - code that runs before our final route callback. You can have multiple
middleware. They sit at the beginning of your route, and at the end. 

# Auth Code Along Part 5
* Add Logout Route
* Add isLoggedIn middleware