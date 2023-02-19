const productContainer = document.querySelector('#list-container');

const config = {
  type: 'carousel',
  perView: 4,
  gap: 15,
  /*   autoplay: 3000, */
  breakpoints: {
    992: {
      perView: 3
    },
    768: {
      perView: 2
    },
    576: {
      perView: 1
    }
  }
};

productContainer && new Glide('.product-carousel', config).mount();

const config2 = {
  type: 'carousel',
  perView: 4,
  gap: 15,
  //   autoplay: 3000,
  breakpoints: {
    992: {
      perView: 3
    },
    768: {
      perView: 2
    },
    576: {
      perView: 1
    }
  }
};

productContainer && new Glide('.product-carousel2', config2).mount();

const config3 = {
  perView: 5,

  breakpoints: {
    768: {
      perView: 3
    }
  }
};

new Glide('.product-thumb', config3).mount();
