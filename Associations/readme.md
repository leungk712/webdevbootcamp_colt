# Associations

# Intro to Associations
* Define associations
- Associations allow us to have multiple pieces of data, multiple collections in
our database that are related to one another

* Discuss one:one, one:many, and many: many relationships
- One:One = simplest relationships
    One entity related to another entity. One book has one title, one book has one publisher

- One: Many 
    Facebook - one user can have multiple photos that belong to user

- Many: Many
    Students and courses - student can sign up for multiple courses and other students can be signed up as well
    Author can have many books - a book can have many authors

Ex. Facebook
- User
- Post(when I create a post, it is related to me)
- Photos (when I post a photo, it is related to me)
- Albums
- Comments
- Tags
- Likes
- Groups

# Embedding Data
User  
Post

# Referencing Data
- Depends when you embed data and when you use object ID references

# Module.Exports
* Introduce module.exports
- Module.exports allows us to clean up our code & shorten it by putting it in different files
- It allows our code to be modular (if we want to use this code for another app, we don't have to duplicate it)
- module.exports is like a return value for our files (like return values in a function, nothing is returned unless we explicably tell JS what we want)

* Move our models into seperate files
