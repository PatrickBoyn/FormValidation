const invalidFeedback = document.querySelectorAll('.invalid-feedback');

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip-code').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

// Ensures that the warnings are hidden on page load.
invalidFeedback.forEach(element => {
  element.style.display = 'none';
});
// None of this validates if the form is empty when submitted.
function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  console.log(name.value);
  console.log(re.test(name.value));

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
    invalidFeedback[0].style.display = 'block';
  } else {
    name.classList.remove('is-invalid');
    invalidFeedback[0].style.display = 'none';
  }
}

function validateZipCode() {
  const zip = document.getElementById('zip-code');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  console.log(zip.value);
  console.log(re.test(zip.value));

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
    invalidFeedback[1].style.display = 'block';
  } else {
    zip.classList.remove('is-invalid');
    invalidFeedback[1].style.display = 'none';
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  // Should match most email addresses.
  const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.[a-zA-z]{2,5}$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
    invalidFeedback[2].style.display = 'block';
  } else {
    email.classList.remove('is-invalid');
    invalidFeedback[2].style.display = 'none';
  }
}

function validatePhoneNumber() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
    invalidFeedback[3].style.display = 'block';
  } else {
    phone.classList.remove('is-invalid');
    invalidFeedback[3].style.display = 'none';
  }
}
