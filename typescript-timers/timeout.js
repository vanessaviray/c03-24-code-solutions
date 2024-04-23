'use strict';
const $h1Element = document.querySelector('h1');
function helloThereMessage() {
  if (!$h1Element) throw new Error('$h1Element query failed');
  $h1Element.textContent = 'Hello There';
}
setTimeout(helloThereMessage, 2000);
