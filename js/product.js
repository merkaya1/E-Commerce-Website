const productContainer = document.querySelector('#list-container');
const productListTwo = document.querySelector('#list-container-two');

// let product = localStorage.getItem('Product') ? JSON.parse(localStorage.getItem('Product')) : [];
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function addToCart(data) {
  const cartItems = document.querySelector('.header-cart-count');

  const buttons = document.querySelectorAll('.add-to-cart');
  console.log('Buttonnnnn', buttons);
  buttons.forEach((item) => {
    const inCart = cart.find((product) => product.id === Number(item.dataset.id));
    if (inCart) {
      item.setAttribute('disabled', 'disabled');
    } else {
      item.addEventListener('click', function () {
        const findProduct = data.find((product) => product.id === Number(this.dataset.id));
        cart.push({ ...findProduct, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        item.setAttribute('disabled', 'disabled');
        cartItems.textContent = cart.length;
      });
    }
  });
}

function productRoute() {
  const productLink = document.querySelectorAll('.product-link');
  productLink.forEach((icon) =>
    icon.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      localStorage.setItem('productId', JSON.stringify(id));
      window.location.href = 'single-product.html';
    })
  );
}

function productFunc(data) {
  let results = document.createElement('ul');
  results.className = `product-list glide__slides`;

  data.map((item) => {
    results.innerHTML += `
        <li class="product-item glide__slide">
                <div class="product-img">
                    <a href="#">
                    <img src=${item.img.thumbs[0]} class="img1" alt="" />
                    <img src=${item.img.thumbs[1]} class="img2" alt="" />
                    </a>
                </div>
                <div class="product-info">
                    <a href="#" class="product-title">${item.name}</a>
                    <ul class="product-star">
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-fill"></i></li>
                        <li><i class="bi bi-star-half"></i></li>
                    </ul>
                    <div class="product-prices">
                    
                        <span>$${item.price.oldPrice.toFixed(2)}</span>
                        <strong>$${item.price.newPrice.toFixed(2)}</strong>
                    </div>
                    <span class="product-discount">-${item.discount}%</span>
                    <div class="product-links">
                        <button class="add-to-cart" data-id=${item.id}>
                            <i class="bi bi-basket-fill "></i>
                        </button>
                        <button>
                            <i class="bi bi-heart-fill"></i>
                        </button>
                        <a href="#" class="product-link" data-id=${item.id}>
                            <i class="bi bi-eye-fill"></i>
                        </a>
                        <a href="#">
                            <i class="bi bi-share-fill"></i>
                        </a>
                    </div>
                </div>
                </li>
    `;
  });

  productContainer ? productContainer.appendChild(results) : '';
  addToCart(data);
  productRoute();
}

export default productFunc;
