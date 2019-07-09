const invalidFeedback = document.querySelectorAll('.invalid-feedback');
const invalidAdd = document.querySelector('.invalid-feedback');

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip-code').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhoneNumber);

invalidFeedback.forEach(element => {
  element.style.display = 'none';
});

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  console.log(name.value);
  console.log(re.test(name.value));

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
    invalidAdd.style.display = 'block';
  } else {
    name.classList.remove('is-invalid');
    invalidAdd.style.display = 'none';
  }
}

function validateZipCode() {
  const zip = document.getElementById('zip-code');
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  console.log(zip.value);
  console.log(re.test(zip.value));

  if (!re.test(zip.value)) {
  } else {
  }
}

function validateEmail() {}

function validatePhoneNumber() {}
