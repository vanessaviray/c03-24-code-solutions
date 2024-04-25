// current letter is either black with underline or red with underline

// correct/wrong function

const $spanList = document.querySelectorAll('span');
if (!$spanList) throw new Error('span query failed');

let count = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === $spanList[count].textContent) {
    $spanList[count].className = 'correct';
    count++;
  } else {
    $spanList[count].className = 'wrong';
  }
});
