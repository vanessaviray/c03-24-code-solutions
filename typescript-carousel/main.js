'use strict';
// QUERIED ELEMENTS
const $images = document.querySelectorAll('.images-container img');
const $circles = document.querySelectorAll('#circles i');
const $leftChevron = document.querySelector('.fa-chevron-left');
const $rightChevron = document.querySelector('.fa-chevron-right');
if (!$images) throw new Error('$images query failed');
if (!$circles) throw new Error('$circles query failed');
if (!$leftChevron) throw new Error('$leftChevron query failed');
if (!$rightChevron) throw new Error('$rightChevron query failed');
// GLOBAL VARIABLE
let currentIndex = 0;
// FUNCTION: to show a specific image and update the active circle indicator
function showImage(index) {
  // Hide all images
  for (let i = 0; i < $images.length; i++) {
    const img = $images[i];
    img.classList.add('hidden');
  }
  // Remove active class from all circles
  for (let i = 0; i < $circles.length; i++) {
    const circle = $circles[i];
    circle.classList.remove('fa-solid');
    circle.classList.add('fa-regular');
  }
  // Show the selected image
  $images[index].classList.remove('hidden');
  // Update the active circle indicator
  $circles[index].classList.remove('fa-regular');
  $circles[index].classList.add('fa-solid');
}
// FUNCTION: to show the next image
function nextImage() {
  if (currentIndex < $images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; /* this is to reset for the first image */
  }
  showImage(currentIndex);
}
// FUNCTION: to show the previous image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = $images.length - 1; /* this is to access the last image */
  }
  showImage(currentIndex);
}
// EVENT LISTENERS: for left and right arrow clicks
$leftChevron.addEventListener('click', prevImage);
$rightChevron.addEventListener('click', nextImage);
// FUNCTION: to handle circle click event
function circleClick(index) {
  currentIndex = index;
  showImage(currentIndex);
}
// EVENT LISTENERS: for circle indicators
for (let i = 0; i < $circles.length; i++) {
  const circle = $circles[i];
  circle.addEventListener('click', () => circleClick(i));
}
// Show the initial image
showImage(currentIndex);
// FUNCTION: to auto advance to the next image
function startCarousel() {
  setInterval(nextImage, 3000);
}
startCarousel();
