const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim(); // <--- this is the line that is causing the error???
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Log in failed');
    }
  }
};

document.querySelector('#login-form').addEventListener('submit', login);
