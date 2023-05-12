document.getElementById('login-form').addEventListener('submit', function(event) {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
  
    if (!usernameInput.value) {
      usernameInput.classList.add('is-invalid');
      document.querySelector('label[for="username"]').classList.add('is-invalid');
    } else {
      usernameInput.classList.remove('is-invalid');
      document.querySelector('label[for="username"]').classList.remove('is-invalid');
    }
  
    if (!passwordInput.value) {
      passwordInput.classList.add('is-invalid');
      document.querySelector('label[for="password"]').classList.add('is-invalid');
    } else {
      passwordInput.classList.remove('is-invalid');
      document.querySelector('label[for="password"]').classList.remove('is-invalid');
    }
  
    if (!usernameInput.value || !passwordInput.value) {
      event.preventDefault();
    }
  });
  