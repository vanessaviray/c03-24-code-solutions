let toggleCount = 0;

const toggle = document.querySelector('.circle');
const toggleShadow = document.querySelector('.circle-border');
const toggleBackground = document.querySelector('.container');

if (!toggle) throw new Error('The .circle query failed');
if (!toggleShadow) throw new Error('The .circle-border query failed');
if (!toggleBackground) throw new Error('The .container query failed');

toggle.addEventListener('click', () => {
  toggleCount++;

  if (toggleCount % 2 === 0) {
    toggle.className = 'circle';
    toggleShadow.className = 'circle-border';
    toggleBackground.className = 'container';
  } else {
    toggle.className = 'circle off';
    toggleShadow.className = 'circle-border off';
    toggleBackground.className = 'container off';
  }
});
