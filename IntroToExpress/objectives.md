# Introduction to Express

* What is a framework? How is it different from a library?
- Library = code someone else wrote and we use in our projects
- Frameworks = code someone/group else wrote and we use in our projects
- The defining difference between libraries and framework is INVERSION OF CONTROL. 
- When dealing with libraries, we are in control. When dealing with frameworks,
 the framework calls us

- Frameworks help us prepackage the basics and allow us to not have to the do basic
groundwork each time. Allows us to focus on the important stuff. 

* What is Express?
- A web development framework

* Why are we using Express?
- Express is by far the most popular Node web development framework
- Express is a lightweight framework (you use Express and know what to expect)

* Heavyweight vs. Lightweight Frameworks
- Heavyweight already has a lot of stuff to fill out, only need to fill in minimal things
- Lightweight has a lot of empty spots that you need to put in yourself

# Our First Express App!!!!!
* Review an existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express App!

# NPM Init and Package.json (JSON = Javascript Object Notation)

* Use the `--save` flag to install packages
- It will take the package name and version and automatically save it in the package.json

* Explain what the package.json file does
- Every NPM package we use has a package.json file attached to it. JSON. It contains all
the meta-data about the particular application or package (description, name, contributors)

- 'Dependencies' contain all the packages needed for application to work

* Use `npm init` to create a new package.json

# More Routing!

* Show the `*` route matcher
- 

* Write routes containing route parameters
- You can write patterns. For example, Reddit has thousands of subreddit locations,
but they do not have a route for every single one of them (ex. app.get("/r/soccer/music/sports")
Instead, we use patterns using route parameters/route variables/path variables.

* Discuss route order
- Order of routes matter! `*` on top will be the top route. 