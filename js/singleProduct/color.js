const colorActive = () => {
  const colorWrapper = document.querySelectorAll('.color-wrapper');
  colorWrapper.forEach((item) => {
    item.addEventListener('click', function (e) {
      let elems = document.querySelector('.color-wrapper.active');
      console.log(elems);
      if (elems !== null) {
        elems.classList.remove('active');
      }
      this.classList.add('active');
    });
  });
};

export default colorActive;
