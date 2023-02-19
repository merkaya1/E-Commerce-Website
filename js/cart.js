let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const cartItems = document.querySelector('.header-cart-count');

console.log(subtotal);

function saveCartValue(cart) {
  const subtotal = document.querySelector('#subtotal');
  const cartTotal = document.querySelector('#total');
  const fastCargo = document.querySelector('#fast-cargo');
  let subtotalPriceArr = cart.map((product) => product.price.newPrice * product.quantity);
  let subtotalPrice = subtotalPriceArr.reduce((a, b) => a + b, 0);

  subtotal.textContent = cart.length > 0 ? `$${subtotalPrice.toFixed(2)}` : `$0`;
  cartTotal.textContent = cart.length > 0 ? `$${subtotalPrice.toFixed(2)}` : `$0`;

  const fastCargoPrice = 15;
  console.log(subtotalPrice);
  fastCargo.addEventListener('change', function () {
    if (this.checked) {
      cartTotal.textContent = `$${(subtotalPrice + fastCargoPrice).toFixed(2)}`;
    } else {
      cartTotal.textContent = `$${subtotalPrice.toFixed(2)}`;
    }
  });
}

function deleteCartItem() {
  let filteredProduct = cart.filter((product) => product.id !== Number(this.dataset.id));
  console.log(filteredProduct);
  cart = filteredProduct; // Spread ile dağıtsakta olur
  console.log(cart);
  displayCartProduct();
  localStorage.setItem('cart', JSON.stringify(filteredProduct));
  cartItems.textContent = cart.length;
}

function removeCartItem() {
  const btnDeleteCart = document.querySelectorAll('.delete-cart');
  console.log(btnDeleteCart);
  btnDeleteCart.forEach((btn) => {
    btn.addEventListener('click', deleteCartItem);
  });
}

function displayCartProduct() {
  const cartWrapper = document.querySelector('#cartWrapper');
  let cartText = '';

  cart.map((cartProduct) => {
    cartText += `
        <tr class="cart-item">
                            <td></td>
                            <td class="cart-image">
                              <img src=${cartProduct.img.singleImage} alt="">
                              <i class="bi bi-x delete-cart" data-id=${cartProduct.id}></i>
                            </td>
                            <td>${cartProduct.name}</td>
                            <td>$${cartProduct.price.newPrice.toFixed(2)}</td>
                            <td class="body-quantitiy">${cartProduct.quantity}</td>
                            <td class="body-subtotal">$${(cartProduct.quantity * cartProduct.price.newPrice).toFixed(
                              2
                            )}</td>
                          </tr>
        `;
  });
  cartWrapper.innerHTML = cartText;
  removeCartItem();
  saveCartValue(cart);
}

displayCartProduct();
