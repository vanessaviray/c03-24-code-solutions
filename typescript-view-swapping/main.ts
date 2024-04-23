const $tabContainer = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('the .tab-container query failed.');
if (!$tabList) throw new Error('the .tab query failed.');
if (!$viewList) throw new Error('the .view query failed.');

$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab') === true) {
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === $eventTarget) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
  }

  if ($eventTarget.className === 'tab active') {
    const $dataViewValue = $eventTarget.getAttribute('data-view');
    for (let i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === $dataViewValue) {
        $viewList[i].className = 'view';
      } else {
        $viewList[i].className = 'hidden';
      }
    }
  }
});
