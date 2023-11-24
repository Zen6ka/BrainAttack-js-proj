import { RequestToTheServer } from './filters';

document.addEventListener('DOMContentLoaded', async function () {
  const request = new RequestToTheServer('products/popular?limit=5');
  updateAddToCartButtonStyle();
  try {
    //  отримати дані з локального сховища
    const productsData = getProductsFromLocalStorage();

    if (!productsData) {
      // Якщо дані відсутні в локальному сховищі, отримуйте їх з сервера
      const fetchedData = await request.fetchBreeds();

      // Збереження  в локальному сховищі
      saveProductsToLocalStorage(fetchedData);

      // отримані дані для відображення продуктів
      displayProducts(fetchedData);
    } else {
      // дані з локального сховища для відображення продуктів
      displayProducts(productsData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function saveProductsToLocalStorage(products) {
  //  Збереження продуктів в локальне сховище
  localStorage.setItem('popularProducts', JSON.stringify(products));
}

function getProductsFromLocalStorage() {
  //  Отримання  продуктів з локального сховища
  const storedData = localStorage.getItem('popularProducts');
  return storedData ? JSON.parse(storedData) : null;
}

function displayProducts(products) {
  const productContainers = document.querySelectorAll('.product-template'); // Знайти всі блоки "product-template"

  // Очистити вміст всіх блоків "product-template"
  productContainers.forEach(container => {
    container.style.display = 'none'; // Приховати блоки
    container.querySelector('.product-image').src = '';
    container.querySelector('.product-name').textContent = '';
    container.querySelector('.category-value').textContent = '';
    container.querySelector('.size-value').textContent = '';
    container.querySelector('.popularity-value').textContent = '';
  });

  products.slice(0, productContainers.length).forEach((product, index) => {
    const container = productContainers[index]; // Вибрати поточний блок
    container.style.display = 'flex'; // Показати блок

    // Заповнити дані блоку з даними з сервера
    container.querySelector('.product-image').src = product.img;
    container.querySelector('.product-name').textContent = product.name;
    container.querySelector('.category-value').textContent =
      product.category.replace('_', ' ');
    container.querySelector('.size-value').textContent = product.size;
    container.querySelector('.popularity-value').textContent =
      product.popularity;
    const productInfo = {
      productId: product._id,
      productName: product.name,
      productImg: product.img,
      productCategory: product.category,
      productPrice: product.price,
      productSize: product.size,
      productIs10PercentOff: product.is10PercentOff,
      productPopularity: product.popularity,
    };
    const addToCartBtn = container.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      addToCartBtn.setAttribute('data-product-id', product._id);
      addToCart(productInfo);
    };
  });
}

// Функція для додавання продукту в кошик
function addToCart(productInfo) {
  // Отримуємо дані про кошик з локального сховища
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  // Перевіряємо, чи товар вже є в кошику за його ідентифікатором
  if (cart[productInfo.productId]) {
    // Якщо товар вже є в кошику, видаляємо його
    delete cart[productInfo.productId];
  } else {
    // Якщо товару немає в кошику, додаємо його
    cart[productInfo.productId] = productInfo;
  }

  // Оновлюємо кошик у локальному сховищі
  localStorage.setItem('cart', JSON.stringify(cart));

  // Оновлюємо стиль кнопок після зміни кошика
  updateAddToCartButtonStyle();
}

const productId = '';
const addToCartBtn = document.querySelector(
  `button[data-product-id="${productId}"]`
);
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    addToCart(productId);
  });
}
function updateAddToCartButtonStyle() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const addToCartButtons = document.querySelectorAll('.cart-btn');

  addToCartButtons.forEach(btn => {
    const productId = btn.getAttribute('data-product-id');
    const icon = btn.querySelector('svg > use');

    if (cart[productId]) {
      btn.classList.add('added-to-cart');
      icon.setAttribute('href', '../img/icons.svg#icon-check'); // Іконка "вже в кошику"
    } else {
      btn.classList.remove('added-to-cart');
      icon.setAttribute(
        'href',
        '../img/icons.svg#icon-heroicons-solid_shopping-cart'
      ); // Звичайна іконка кошика
    }
  });
}
