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


TODO:
====

- [x] Create a directory for front end sources
- [ ] Compiled front end sources will go to `public/` directory
- [x] Install Angular and use it.
- [ ] Install browserify and use it (source maps).
- [ ] Create Gulp task to process Less into Css.
- [ ] Create Gulp task to process JS with Browserify into a `bundle.js`
- [ ] Add Mongo DB and Mongoose and create a basic User model and use it!
- [ ] Add config directory to host all env configs
- [ ] Create a Sign in site
- [ ] Create a Sign up site
- [ ] Think about how to separate Routes from Controllers:
     - Option 1: Like Rails. `routes/index.js` route `/` maps to `controller/index/index.js`. `routes/user.js` route `/` maps to `controllers/user/index.js` and `routes/user.js` route `/login` maps to `controllers/user/login.js`



## Notes

- The basic directory layout was first made with express generator.
