const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../model/User");

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

  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // if user exists

      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // get user's gravatar

      // encrypt password

      // return json web token
      res.send("user route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
);

module.exports = router;
