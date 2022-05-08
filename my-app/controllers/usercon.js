var asyn=require("async");
var user=require("../models/usermodel");
const {body, validationResult}=require("express-validator");
exports.create_user_post =  [

  // Validate and sanitize the name field.
  body('username', 'Username Required').trim().isLength({ min: 1 }).escape(),
  body('first_name', 'first_name Required').trim().isLength({ min: 1 }).escape(),
  body('last_name', 'Last name  Required').trim().isLength({ min: 1 }).escape(),
  body('password', 'Password Required').trim().isLength({ min: 8 }).escape(),
  body('email', 'Email Required').trim().isLength({ min: 5 }).escape(),
  body('tel', 'Tel Required').trim().isLength({ min: 10 }).escape(),
  body('date_of_birth', 'date_of_birth Required').trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a user object with escaped and trimmed data.
    var user = new User(
      { username: req.body.username },
      { email: req.body.email },
      { tel: req.body.tel },
      { last_name: req.body.last_name },
      { first_name: req.body.first_name },
      { date_of_birth: req.body.date_of_birth },
    );

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render('signup', { errors: errors.array()});
      return;
    }
    else {
      // Data from form is valid.
      // Check if User with same name already exists.
      User.findOne({ 'username': req.body.username })
        .exec( function(err, found_user) {
           if (err) { return next(err); }

           if (found_user) {
             // User exists, redirect to its detail page.
             res.render('signup', { errors: ["username already taken"]});
     
    }
           
           else {

             user.save(function (err) {
               if (err) { return next(err); }
               // User saved. Redirect to user detail page.
               //res.render("home");
             });
  }

         });
    }
  }
];
exports.login={};



























