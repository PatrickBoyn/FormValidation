document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip-code').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2, 10}$/;
  if (!re.test(name.value)) {
  } else {
  }
}

function validateZipCode() {}

function validateEmail() {}

function validatePhoneNumber() {}
