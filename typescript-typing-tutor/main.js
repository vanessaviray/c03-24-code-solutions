'use strict';
const $spanList = document.querySelectorAll('span');
if (!$spanList) throw new Error('span query failed');
let count = 0;
document.addEventListener('keydown', (event) => {
  if (event.key === $spanList[count].textContent) {
    $spanList[count].className = 'correct';
    count++;
    console.log(event.key);
    $spanList[count].className = 'indicator';
  } else {
    $spanList[count].className = 'wrong';
  }
});
