document.getElementById('signin-form').addEventListener('submit', signIn);
document.getElementById('signup-form').addEventListener('submit', signUp);

function signIn(e) {
  e.preventDefault();
  var email = document.getElementById('signin-email').value;
  var password = document.getElementById('signin-password').value;
  
  // Perform sign-in logic, e.g., make an API request
  
  console.log('Signing in...');
  console.log('Email:', email);
  console.log('Password:', password);
}

function signUp(e) {
  e.preventDefault();
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;
  
  // Perform sign-up logic, e.g., make an API request
  
  console.log('Signing up...');
  console.log('Email:', email);
  console.log('Password:', password);
}
