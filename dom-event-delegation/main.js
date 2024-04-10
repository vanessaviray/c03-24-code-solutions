'use strict';
const taskList = document.querySelector('.task-list');
if (!taskList) {
  throw new Error('Query for .task-list failed');
}
taskList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  console.log('event.target:', eventTarget);
  console.log('event.target.tagName:', eventTarget.tagName);
  if (eventTarget.tagName.toLowerCase() === 'button') {
    const listItem = eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item:', listItem);
    if (listItem) {
      listItem.remove();
    }
  }
});
