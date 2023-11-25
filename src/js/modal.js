import axios from 'axios';

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
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

// Слухачі
refs.openModalBtn.addEventListener('click', () =>
  onOpenModal(refs.openModalBtn.dataset.productId)
);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

const cardImages = document.querySelectorAll('.cardlist-img');
cardImages.forEach(img => {
  img.addEventListener('click', event => handleImageClick(event));
});

// Зовнішній URL для запитів
const baseUrl = 'https://food-boutique.b.goit.study/api/';

// Оновлюємо інтерфейс модального вікна при відкритті
export async function onOpenModal(productId) {
  // Додаємо слухач
  window.addEventListener('keydown', onCloseByEsc);
  document.body.classList.add('show-modal');

  // Перевіряємо, чи продукт вже в корзині
  await handleProductDetails(productId);
  checkIfProductInCart(productId);
  toggleBodyScroll();
}

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
    const isInCart = checkIfProductInCart(productId);
    const isAdded = getCartFromStorage().includes(productId);

    // Оновлюємо текст кнопки
    updateAddToCartButton(isInCart, isAdded);
  }
}

// Міняю текст кнопки в залежності чи в корзині продукт
function updateAddToCartButton(isInCart, isAdded) {
  const buttonText = isInCart ? 'Remove from' : isAdded ? 'Added to' : 'Add to';
  refs.addToCart.querySelector('.modal-btn-sabmit-span').textContent =
    buttonText;
  refs.addToCart.disabled = isInCart; // кнопка не активна якщо товар в корзині
}

// Перевіряєм чи продукт вже в корзині
function checkIfProductInCart(productId) {
  let cart = getCartFromStorage();
  const isInCart = cart.includes(productId);

  // Додавання слухача для кнопки
  refs.addToCart.addEventListener('click', () => {
    if (isInCart) {
      // Видалення товару з корзини
      removeFromCart(productId);
      // Оновлюємо текст кнопки та робимо її неактивною
      updateAddToCartButton(false, false);
    } else {
      // Товару немає в кошику, додаємо
      addToCart(productId);
      // Оновлюємо текст кнопки
      updateAddToCartButton(true, true);
    }
  });

  return isInCart;
}

// Функція для отримання корзини з локального сховища
function getCartFromStorage() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart;
}

// Функція для додавання продукту до корзини в локальному сховищі
function addToCart(productId) {
  let cart = getCartFromStorage();
  if (!cart.includes(productId)) {
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Функція для видалення продукту з корзини в локальному сховищі
function removeFromCart(productId) {
  let cart = getCartFromStorage();
  const index = cart.indexOf(productId);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
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
