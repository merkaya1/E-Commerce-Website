import data from './data.json' assert { type: 'json' };
import './header.js';
import productFunc from './product.js';
import searchFunc from './search.js';
import modalDialog from './modalDialog.js';
// import Slider from './slider.js'; // çalışıyor

//! local
//add product to ls

function getData() {
  console.log(data);

  data ? localStorage.setItem('Product', JSON.stringify(data)) : [];

  productFunc(data);
  searchFunc(data);
  modalDialog();
}
const cartItems = document.querySelector('.header-cart-count');

cartItems.textContent = `${localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : '0'}`;

getData();
