'use strict';
const $h1 = document.querySelector('h1');
function updateMessage() {
  if (!$h1) throw new Error('$h1Element query failed');
  if ($h1.textContent === '4') {
    $h1.textContent = '3';
  } else if ($h1.textContent === '3') {
    $h1.textContent = '2';
  } else if ($h1.textContent === '2') {
    $h1.textContent = '1';
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
  stopUpdateMessage();
}
const intervalID = setInterval(updateMessage, 1000);
function stopUpdateMessage() {
  if (!$h1) throw new Error('$h1Element query failed');
  if ($h1.textContent === '~Earth Beeeelooowww Us~') {
    clearInterval(intervalID);
  }
}
