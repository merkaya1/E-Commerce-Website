const sliderLeftBtn = document.querySelector('.slider-buttons .left');
const sliderRightBtn = document.querySelector('.slider-buttons .right');
const dots = document.querySelectorAll('.slidet-dot');
let slideIndex = 1;

showSlides();

setInterval(() => {
  plusSlide(1);
  console.log('slider otomatik değişti');
}, 5000);

function plusSlide(n) {
  showSlides((slideIndex += n));
  // console.log(slideIndex);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const sliders = document.querySelectorAll('.slider-item');

  let slider = Array.from(sliders).map((item) => {
    return item;
  });

  let dot = Array.from(dots).map((dot) => dot.firstElementChild);

  if (n > slider.length) {
    slideIndex = 1;
  } else if (n === 0) {
    slideIndex = slider.length;
  }

  slider.map((element) => {
    element.style.display = 'none';
  });
  // dotslardan active classını her fonksiyon çalıştığında kaldırır
  dot.map((clas) => {
    clas.className = clas.className.replace('active', '');
  });

  slider[slideIndex - 1].style.display = 'flex';
  dot[slideIndex - 1].classList.add('active'); // dot'a active clası ekler
  // console.log(dot);
}

// button events
sliderLeftBtn.addEventListener('click', function () {
  plusSlide(-1);
});
sliderRightBtn.addEventListener('click', function () {
  plusSlide(1);
});
dots.forEach((dot, index) =>
  dot.addEventListener('click', function () {
    showSlides((slideIndex = index + 1));
  })
);
