import axios from 'axios';
import { cartButtonStyle } from './popular';
import { renderCards } from './filters';
import { localStorageCheckCart } from './header';

const refs = {
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  addToCart: document.querySelector('.modal-btn-sabmit'),
  discountProduct: document.querySelector('.modal-discount-svg'),
  onCart: document.querySelector('.modal-btn-sabmit-span'),
  modalImg: document.querySelector('.modal-img img'),
  modalTitle: document.querySelector('.modal-title'),
  modalCategory: document.querySelector(
    '.modal-list li:nth-child(1) .modal-item-span'
  ),
  modalSize: document.querySelector(
    '.modal-list li:nth-child(2) .modal-item-span'
  ),
  modalPopularity: document.querySelector(
    '.modal-list li:nth-child(3) .modal-item-span'
  ),
  modalDesc: document.querySelector('.modal-info-taxt'),
  modalPrice: document.querySelector('.modal-price'),
};

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Слухачі

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
//
const cardImages = document.querySelectorAll('.cardlist-img');
cardImages.forEach(img => {
  img.addEventListener('click', event => handleImageClick(event));
});
export function handleImageClick(event) {
  const productId = event.currentTarget.closest('.card-list-item').dataset.id;
  onOpenModal(productId);
}
//
const cardImagesPopular = document.querySelectorAll('.product-image');
cardImagesPopular.forEach(img => {
  img.addEventListener('click', event => handleImageClickPopular(event));
});
function handleImageClickPopular(event) {
  const productId =
    event.currentTarget.closest('.product-image-container').dataset.product -
    id;
  onOpenModal(productId);
}
//
const discountCardImages = document.querySelectorAll('.discount-card-image');
discountCardImages.forEach(image => {
  image.addEventListener('click', event => {
    const discountCard = event.currentTarget.closest('.discount-card');

    if (discountCard) {
      const dataId = discountCard.querySelector('.discount-card-button').dataset
        .id;
      onOpenModal(dataId);
    }
  });
});

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Зовнішній URL для запитів
const baseUrl = 'https://food-boutique.b.goit.study/api/';

// Запит за допомогою Axios
async function fetchProductById(productId) {
  try {
    const response = await axios.get(`${baseUrl}products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Відмальовка в модалку
async function handleProductDetails(productId) {
  const productDetails = await fetchProductById(productId);

  if (productDetails) {
    refs.modalImg.src = productDetails.img;
    refs.modalImg.alt = productDetails.name;
    refs.modalTitle.textContent = productDetails.name;
    refs.modalCategory.textContent = productDetails.category;
    refs.modalSize.textContent = productDetails.size;
    refs.modalPopularity.textContent = productDetails.popularity;
    refs.modalDesc.textContent = productDetails.desc;
    refs.modalPrice.textContent = `$${productDetails.price.toFixed(2)}`;

    // Перевіряємо чи продукт в корзині
    const isInCart = checkIfProductInCart(productDetails);

    // Оновлюємо текст кнопки
    updateAddToCartButton(isInCart, productDetails);

    if (productDetails.is10PercentOff) {
      refs.discountProduct.classList.remove('hidden');
    } else {
      refs.discountProduct.classList.add('hidden');
    }
  } else {
    console.error('Product details not available.');
  }
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Міняю текст кнопки в залежності чи в корзині продукт
let lastClickListener = null;

function updateAddToCartButton(isInCart, productDetails) {
  const buttonText = isInCart ? 'Remove from' : 'Add to';
  refs.addToCart.querySelector('.modal-btn-sabmit-span').textContent =
    buttonText;
  refs.addToCart.disabled = false;

  if (lastClickListener) {
    refs.addToCart.removeEventListener('click', lastClickListener);
  }

  const clickListener = () => {
    onClickAddToCart(productDetails, isInCart);
  };

  refs.addToCart.addEventListener('click', clickListener);
  lastClickListener = clickListener;
}

// Перевіряєм чи продукт вже в корзині
function checkIfProductInCart(productDetails) {
  let cart = getCartFromStorage();
  const isInCart = cart.some(obj => obj._id === productDetails._id);

  return isInCart;
}

// Функція для отримання корзини з локального сховища
function getCartFromStorage() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

function onClickAddToCart(productDetails, isInCart) {
  const productId = productDetails._id;
  if (isInCart) {
    // Видалення товару з корзини
    removeFromCart(productDetails._id);
    // Оновлюємо текст кнопки та робимо її неактивною
    updateAddToCartButton(false, productDetails);
  } else {
    // Товару немає в кошику, додаємо
    addToCart(productDetails);
    // Оновлюємо текст кнопки
    cartButtonStyle();
    updateAddToCartButton(true, productDetails);
  }
  renderCards();
  localStorageCheckCart();
  cartButtonStyle();
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Функція для додавання продукту до корзини в локальному сховищі
function addToCart(productDetails) {
  let cart = getCartFromStorage();
  const index = cart.findIndex(obj => obj._id === productDetails._id);

  if (index !== -1) {
    // Продукт вже є в кошику, оновлюємо його
    cart[index] = { ...productDetails };
  } else {
    // Продукта немає в кошику, додаємо його
    cart.push({ ...productDetails });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

// Функція для видалення продукту з корзини в локальному сховищі
function removeFromCart(productId) {
  let cart = getCartFromStorage();
  const updatedCart = cart.filter(item => item._id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
}
// ////////////////////////////////////////////////////////////////////////////////////////////////
// Оновлюємо інтерфейс модального вікна при відкритті
export function onOpenModal(productId) {
  // Додаємо слухач
  window.addEventListener('keydown', onCloseByEsc);
  document.body.classList.add('show-modal');

  // Перевіряємо, чи продукт вже в корзині
  checkIfProductInCart(productId);
  clearModal();
  handleProductDetails(productId);
  toggleBodyScroll();
}
function clearModal() {
  refs.modalImg.src = '';
  refs.modalImg.alt = '';
  refs.modalTitle.textContent = '';
  refs.modalCategory.textContent = '';
  refs.modalSize.textContent = '';
  refs.modalPopularity.textContent = '';
  refs.modalDesc.textContent = '';
  refs.modalPrice.textContent = '';
  refs.discountProduct.classList.add('hidden');
}

// Закритя модального вікна
function onCloseModal() {
  // Зняв слухач
  window.removeEventListener('keydown', onCloseByEsc);
  document.body.classList.remove('show-modal');
  toggleBodyScroll();
}

// Закритя модального вікна по кліку за модалку (на темний фон)
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// Закритя модального вікна по Esc
function onCloseByEsc(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function isModalOpen() {
  return document.body.classList.contains('show-modal');
}

function toggleBodyScroll() {
  document.body.style.overflow = isModalOpen() ? 'hidden' : '';
}
