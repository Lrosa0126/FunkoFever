const login = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      document.location.replace('/'); // Redirect user to home page
    } else {
      alert('Failed to log-in.'); // Alert user that sign-up failed
    }
  }
};

document.querySelector('#login-form').addEventListener('submit', login);