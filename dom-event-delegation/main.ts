const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('The .task-list query failed');

$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('event.target:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);
  if ($eventTarget.tagName.toLowerCase() === 'button') {
    const $listItem = $eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item:', $listItem);
    if ($listItem) {
      $listItem.remove();
    }
  }
});
