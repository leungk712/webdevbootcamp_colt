# Git

# Introduction
* What is Git?
    - Git is a version control system designed to handle everything from small to large projects with speed and efficiency
    - It is a way to work with different version of our code and save diff. features and save diff. version (move forward and backwards)
* What is Github?
    - GIthub is a website/application that works with Git
* Why should you care?
* Novel Writing Analogy
* Installing Git(not really)

* Git is not the same as Github!!! Github is like a viewer of Git

# Git Basics
* Git Init
    - Git is not paying attention to every single file on our computer, we must tell it which files matter!
    - It only works 
    - You typically only have one repository for one project
    - When we run git init, it creates a hidden folder called .git that tracks all our changes. It's where all Git exists.
* Git Status 
    - Not really an action, it asks Git for a status. Our action depends on what the Git status returns. 
    - Even though you init a file, it doesn't know every single file that you're wanting to be tracked
* Git Add
    - Allows us to add what files need to be tracked (this does not mean it is committed yet, we still need to git commit to confirm files are being tracked)
* Git Commit
    - Making a check point in time with all the changes we've added
    - EVERY commit needs to have a message describing what changes are being made
    - Commit messages need to be in present tense (best practice (ex. add, not added)

# Git Checkout
* Git Log
    - Using this allows us to see a history of all that we have done 
* Git Checkout
    - This allows to check something out whether it's a branch or a previous commit 

* Git Revert
    git revert --no-commit _____..HEAD

Git Head = pointer in space/time (the current place you are at)

When it comes to reverting back to old code, developers typically don't abandon their current code.
A lot of developers are comfortable with the basic commands

# Cloning and Github Intro
* What is Github?
* Cloning an existing repo

# Pushing to Github
* Creating a repo in github
* Adding a remote
* Pushing to github