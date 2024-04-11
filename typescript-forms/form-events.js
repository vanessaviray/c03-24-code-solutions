'use strict';
function handleFocus(event) {
  console.log(`The 'focus' event was fired`);
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleBlur(event) {
  console.log(`The 'blur' event was fired`);
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('eventTarget.name:', eventTarget.name);
  console.log(eventTarget.value);
}
const $input = document.querySelector('#user-name');
const $input2 = document.querySelector('#user-email');
const $textarea = document.querySelector('#user-message');
if (!$input) throw new Error('the input query failed');
if (!$input2) throw new Error('the input query failed');
if (!$textarea) throw new Error('the textarea query failed');
$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);
$input2.addEventListener('focus', handleFocus);
$input2.addEventListener('blur', handleBlur);
$input2.addEventListener('input', handleInput);
$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
