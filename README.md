B Less MEAN
=======

Bad boys might be sexy but no one wants to work with them.


**Be Less Mean!**


B Less MEAN stack refers to:

- **B** rowserify
- **Less**
- **M** ongo
- **E** xpress
- **A** ngularjs
- **N** ode


Also we are going to be using:

- Karma
- Jade
- Gulp


Vision
======

I have a dream!

My dream is to create Single Page Apps in a really fun way.

My dream is to handle **all** my Javascript code with decent module system: `require('module')`

My dream is to work with best practices in a way that they are fun and easy to follow: testing, separating concerns, creating independent, composable modules, DRY, etc.

My dream is to use `Gulp` and not `Grunt`. This is related to my experience with both, and mainly with Gulp being fun, easy to write and to read, fast, compact, and always making sense.


My dream is to enforce Client-side Javascript to be engineered in such a way that you forget about Client-side Javascript limitations like the lack of a module system, global scopes, monolithic code, etc. 

My dream is to make things easier.


### Installing MongoDB

- Download [Mongo](http://www.mongodb.org/downloads)
- [Install Mongo](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
- Open up a CLI and run `"C:\Program Files\MongoDB 2.6 Standard\bin\mongod.exe"` (Windows). This will open the Server.
- Test with the client!: Open a CLI and run the client `"C:\Program Files\MongoDB 2.6 Standard\bin\mongo.exe"`

> Note: the CLI is the GIT BASH prefered

TODO:
====

- [x] Create a directory for front end sources
- [x] Compiled front end sources will go to `public/` directory
- [x] Install Angular and use it.
- [x] Install browserify and use it (source maps).
- [x] Create Gulp task to process Less into Css.
- [x] Create Gulp task to process JS with Browserify into a `main.js`
- [x] Gulp Clean tasks
- [x] Gulp Watch Task
- [x] Create an example Angular module to show browserify and Angular playing along
- [x] Create the templates workflow
- [ ] Create a watch task for templates
- [ ] Use ng-min
- [ ] Test angular parts(karma? Tape with testling?)
- [ ] See how easy is to use Ui-router or other modules
- [x] Install MongoDB.
- [x] Add Mongo DB and Mongoose and create a basic User model and use it!
- [x] Create a Sign in site
- [ ] Add password field to User model.
- [ ] Encrypt password in DB
- [ ] Create Seed files
- [x] Add authorization support
- [x] Logout
- [ ] Refactor, tidy up
- [ ] Add config directory to host all env configs
- [ ] Create a Sign up site
- [ ] Test express parts(tape?)
- [ ] Add single run versions of Gulp build tasks (`--prod` ?)
- [ ] Think about how to separate Routes from Controllers:
     - Option 1: Like Rails. `routes/index.js` route `/` maps to `controller/index/index.js`. `routes/user.js` route `/` maps to `controllers/user/index.js` and `routes/user.js` route `/login` maps to `controllers/user/login.js`



## Notes

- The basic directory layout was first made with express generator.
