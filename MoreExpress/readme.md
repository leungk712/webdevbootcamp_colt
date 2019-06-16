# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
- Express looks to the "views" directory for our ejs files

* Explain what EJS is and why we use it
- EJS stands for Embedded JavaScript which allows us to embed code, variables,
loops inside HTML. It allows us to make dynamic websites. 

* Pass variables to EJS templates

# EJS Control Flow
* Show examples of control flow in EJS templates
* Write if statements in an EJS file
* Write loops in an EJS file

# %= vs. %

<%= %> --> Value that is returned is rendered to the page, added to HTML

<% %> --> if statements/loops, etc. should not be added to HTML. It is purely
logic. Logic, control flow, if statements, loops are NO equal sign


# Styles and Partials

* Show how to properly include public assets

* Properly configure our app to use EJS

* Use partials to dry up our code!
- Files/Templates we can create and use in other files without having to continue to
copy and paste on every single page (ex. header & footer). DRY Code!!!

# Post Requests!!!

* Write post routes, and test them with Postman
- Post route anytime we are ADDING data to something. Whenever we want to add data
to a database whether it's a sign up form, contact list, creating a new comment/post, etc.
a post route makes the most sense (not the only option, but for now, best option).

* Use a form to send a post request
- Remember, you need a method("POST") and action

* Use body parser to get form data
- When you submit data, it goes to the req body. You still need to draw that data 
outside so you can use it. Body parser helps take the data from the req body and parse
it into a Javascript object we can then use and access. 