const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    // Create a new user with the password and username from the req.body object
    const userData = await User.create(req.body);

    // Save the session for the new user, and set loggedIn to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Send the response with the user data and a success status
      res.status(200).json(userData);
    });
  } catch (err) {
    // If there is an error, send the error response with a 400 status
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted username
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      // If there is no user with that username, send an error response
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Verify the posted password with the password stored for the user found
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      // If the password is invalid, send an error response
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Otherwise, save the session, and set loggedIn to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Send the response with the user data and a success status
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    // If there is an error, send the error response with a 400 status
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // When the session is destroyed, send the response with a success status
      res.status(204).end();
    });
  } else {
    // If there is no session, then the logout request was invalid, so send back a 404
    res.status(404).end();
  }
});

module.exports = router;

// do not use code

/*const signup = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/'); // Redirect user to home page
    } else {
      alert('Failed to sign up.'); // Alert user that sign-up failed
    }
  }
};



document.querySelector('#signup-form').addEventListener('submit', signup);

//copied from public\js\login.js */
