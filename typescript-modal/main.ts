const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal) throw new Error('The .open-modal query failed');
if (!$dismissModal) throw new Error('The .dismiss-modal query failed');
if (!$dialog) throw new Error('The dialog query failed');

$openModal.addEventListener('click', () => {
  $dialog.showModal();
});

$dismissModal.addEventListener('click', () => {
  $dialog.close();
});
