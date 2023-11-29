/*--------------------------------------------------------------------------*/
import axios from 'axios';
import sprite from '../img/icons.svg';
import { renderCards } from './filters';
import { localStorageCheckCart } from './header';
import { onOpenModal } from './modal';
const discountEl = document.querySelector('.discount-container');
const CART_KEY = 'cart';

let products = [];
let addedProducts = [];

function addToCart(product) {
  addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existingProduct = addedProducts.find(p => p._id === product._id);

  if (!existingProduct) {
    addedProducts.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
    renderProducts();
  }
}

function isProductAlreadyInCart(id) {
  const addedProducts = JSON.parse(localStorage.getItem('cart')) || [];
  return addedProducts.some(product => product._id === id);
}

function renderProducts() {
  discountEl.innerHTML = productsTemplate(products);
  attachButtonClickHandlers();
}

function productsTemplate(products) {
  return products.slice(0, 2).map(productTemplate).join('');
}

function productTemplate(product) {
  const { _id, name, img, price } = product;
  return `<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${sprite}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
              <img src="${img}" alt="${name}" data-id=${_id} width="114" height="'114" />
              </div>
              <div class="discount-card-info">
                <div class="discount-card-name">
                  <p class="discount-card-text">${name}</p>
                </div>
                <div class="discount-card-price">
                  <p class="discount-card-text">$${price}</p>
                  <button class="discount-card-button" type="button" data-id=${_id}>
                    <svg class="">
                      <use href="${sprite}#${
    isProductAlreadyInCart(_id)
      ? 'icon-check'
      : 'icon-heroicons-solid_shopping-cart'
  }"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`;
}
discountEl.addEventListener('click', event => {
  const imageEl = event.target.closest('.discount-card-image img');
  const productId = imageEl.dataset.id;
  onOpenModal(productId);
});
export function handleButtonClick(ev) {
  const productId = ev.currentTarget.dataset.id;
  const selectedProduct = products.find(p => p._id === productId);
  addToCart(selectedProduct);
  renderCards();
  localStorageCheckCart();
}

function attachButtonClickHandlers() {
  const cartButtons = document.querySelectorAll('.discount-card-button');
  cartButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
}

async function init() {
  try {
    const res = await axios.get(
      'https://food-boutique.b.goit.study/api/products/discount'
    );
    products = res.data;
    addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    renderProducts();
  } catch (error) {
    console.error('Error fetching discount products:', error.message);
  }
}

init();
