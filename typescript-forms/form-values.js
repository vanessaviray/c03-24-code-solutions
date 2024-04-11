'use strict';
const $contactForm = document.querySelector('#contact-form');
if (!$contactForm) throw new Error('failed');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const $formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log($formData);
  $contactForm.reset();
});
