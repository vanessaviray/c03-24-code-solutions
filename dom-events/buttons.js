'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The $clickButton query failed');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButton.addEventListener('click', handleClick);
const $mouseover = document.querySelector('.hover-button');
if (!$mouseover) throw new Error('The $mouseover query failed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$mouseover.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('The $doubleClick query failed');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
