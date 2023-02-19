const sizeActiveFunc = () => {
  const sizes = document.querySelectorAll('.values-list span');

  sizes.forEach((item) => {
    item.addEventListener('click', () => {
      sizes.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
    });
  });
};

export default sizeActiveFunc;
