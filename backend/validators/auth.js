const {check} = require('express-validator')

exports.userSignupValidator = [ 
    check('name').not()
                .isEmpty()
                .withMessage('Name is Required'), 

    check('email').not()
            .isEmail()
            .withMessage('Must be valid email address'),
    check('password').not()
            .isLength({min: 6})
            .withMessage('Password must be at least 6'),
]