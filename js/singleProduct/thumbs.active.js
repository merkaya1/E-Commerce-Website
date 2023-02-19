const thumbsActiveFunc = () => {
  const thumbs = document.querySelectorAll('.gallery-thums img');
  const singleImage = document.querySelector('#single-img');

  thumbs.forEach((item) => {
    item.addEventListener('click', function () {
      /* 
      let elems = document.querySelector('.active');
      if (elems !== null) {
        elems.classList.remove('active');
      }
      bu kodda olur   */
      thumbs.forEach((item) => item.classList.remove('active'));
      singleImage.src = item.src;
      item.classList.add('active');
    });
  });
};

export default thumbsActiveFunc;
