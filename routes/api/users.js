const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register User
// @access  Public

router.post(
  "/",
  [
    // username must be required
    check("name", "Name is required").not().isEmpty(),
    // email must be of email format/valid
    check("email", "Please enter a valid email").isEmail(),
    //password must be of length 6 characters at minimum
    check(
      "password",
      "Please enter password of length greater than 6",
    ).isLength({
      min: 6,
    }),
  ],

  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("user route");
    console.log(req.body);
  },
);

module.exports = router;
