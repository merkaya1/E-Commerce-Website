const zoomFunc = () => {
  const singleImage = document.querySelector('#single-img');
  const singleImageWrapper = document.querySelector('.product-gallery .single-image-wrapper');

  singleImageWrapper.addEventListener('mousemove', function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    singleImage.style.transformOrigin = `${x}px ${y}px`;
    singleImage.style.transform = 'scale(2.5)';
  });

  singleImageWrapper.addEventListener('mouseleave', function () {
    singleImage.style.transform = 'scale(1)';
  });
};

export default zoomFunc;
