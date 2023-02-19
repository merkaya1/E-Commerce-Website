const modalDialog = () => {
  const btnCloseDialog = document.querySelector('.modal-dialog .modal-close');
  const modalDialog = document.querySelector('.modal-dialog');
  const modalContent = document.querySelector('.modal-dialog .modal-content');

  document.addEventListener('click', function (e) {
    if (!e.composedPath().includes(modalContent)) {
      modalDialog.classList.remove('show');
    }
  });

  btnCloseDialog.addEventListener('click', function () {
    modalDialog.classList.remove('show');
  });

  setTimeout(() => {
    modalDialog.classList.add('show');
  }, 1500);
};

export default modalDialog;
