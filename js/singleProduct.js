import thumbsActiveFunc from './singleProduct/thumbs.active.js';
import zoomFunc from './singleProduct/zoom.js';
import colorActive from './singleProduct/color.js';
import sizeActiveFunc from './singleProduct/size.js';
import tabsFunc from './singleProduct/tabs.js';
import commentsFunc from './singleProduct/comment.js';

const singleProductContainer = document.querySelector('#single-product-container');
const singleProductTopbar = document.querySelector('#single-topbar');

let products = localStorage.getItem('Product') ? JSON.parse(localStorage.getItem('Product')) : [];
let id = localStorage.getItem('productId') ? JSON.parse(localStorage.getItem('productId')) : null;
let singleCart = products.find((item) => item.id === Number(id));

singleProductTopbar.innerHTML = `
<nav class="breadcrumb">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#">${singleCart.gender}</a></li>
              <li><a href="#">${singleCart.type}</a></li>
              <li>${singleCart.name}</li>
            </ul>
          </nav>
`;

singleProductContainer.innerHTML = `
    <main class="site-main" >
            <div class="product-gallery">
              <div class="single-image-wrapper">
                <img src=${singleCart.img.thumbs[0]} id="single-img"alt="">
              </div>
              <div class="product-thumb " >
                <div class="glide__track" data-glide-el="track">
                    <ol class="gallery-thums glide__slides">
                        <li class="glide__slide ">
                            <img src=${singleCart.img.thumbs[0]} class="active" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src=${singleCart.img.thumbs[1]} alt="">
                        </li>
                        <li class="glide__slide">
                            <img src=${singleCart.img.thumbs[2]}  alt="">
                        </li>
                  </ol>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                  <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="bi bi-chevron-left"></i></button>
                  <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="bi bi-chevron-right"></i></button>
                </div>
              </div>
            </div>
            <div class="product-info">
              <h2 class="product-title">
                ${singleCart.name}
              </h2>
              <div class="product-review">
                <ul class="product-stars">
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-fill"></i></li>
                  <li><i class="bi bi-star-half"></i></li>
                </ul>
                <span>2 reviews</span>
              </div>
              <div class="product-price">
                <s>$${singleCart.price.oldPrice.toFixed(2)}</s>
                <strong>$${singleCart.price.newPrice.toFixed(2)}</strong>
              </div>
              <p class="product-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque id, exercitationem deleniti
                blanditiis architecto?
              </p>
              <form class="variations-form">
                <div class="variations">
                  <div class="colors">
                    <div class="colors-label">
                      <span>Color</span>
                    </div>
                    <div class="colors-wrapper">
                      <div class="color-wrapper active">
                        <label class="blue-color">
                          <input type="radio" name="product-color">
                        </label>
                      </div>
                      <div class="color-wrapper ">
                        <label class="red-color">
                          <input type="radio" name="product-color">
                        </label>
                      </div>
                      <div class="color-wrapper">
                        <label class="yellow-color">
                          <input type="radio" name="product-color">
                        </label>
                      </div>
                      <div class="color-wrapper">
                        <label class="black-color">
                          <input type="radio" name="product-color">
                        </label>
                      </div>
                      <div class="color-wrapper">
                        <label class="purple-color">
                          <input type="radio" name="product-color">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="values">
                    <div class="values-label">
                      <span>Size</span>
                    </div>
                    <div class="values-list">
                      <span class="active">XS</span>
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                    </div>
                  </div>
                  <div class="cart-button" >
                    <input type="number" id="quantity" value="1" min="1">
                    <button class="btn btn-lg btn-primary" id="add-to-cart" type="button">Add to cart</button>
                  </div>
                  <div class="product-extra-buttons">
                    <a href="#">
                      <i class="bi bi-globe"></i>
                      <span>Size Guide</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-heart"></i>
                      <span>Add to Wishlist</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-share"></i>
                      <span>Share is Product</span>
                    </a>
                  </div>
                </div>
              </form>
              <div class="product-meta">
                <div class="product-sku">
                  <span>SKU:</span>
                  <strong>BE45GTV</strong>
                </div>
                <div class="product-categories">
                  <span>Categories:</span>
                  <strong>Pants, Man</strong>
                </div>
                <div class="product-tags">
                  <span>Tags:</span>
                  <a href="#">red</a>,
                  <a href="#">white</a>
                </div>
              </div>
            </div>
          </main>
    `;

thumbsActiveFunc();
zoomFunc();
colorActive();
sizeActiveFunc();
tabsFunc();
commentsFunc();

const cartDisabled = () => {
  const cartBtn = document.querySelector('#add-to-cart');
  const quantity = document.querySelector('#quantity');
  const cartItems = document.querySelector('.header-cart-count');
  console.log(quantity);
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const findCart = cart.find((item) => item.id === singleCart.id);

  if (findCart) {
    cartBtn.disabled = true;
  } else {
    cartBtn.addEventListener('click', function () {
      singleCart.quantity = Number(quantity.value);
      cart.push(singleCart);
      localStorage.setItem('cart', JSON.stringify(cart));
      cartBtn.disabled = true;
      quantity.value = 0;
      cartItems.textContent = cart.length;
    });
  }
};
cartDisabled();
