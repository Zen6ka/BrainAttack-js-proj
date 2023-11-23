import { RequestToTheServer } from './js/filtrues';

document.addEventListener('DOMContentLoaded', async function () {
  const request = new RequestToTheServer('products/popular?limit=5');

  try {
    // Спробуйте отримати дані з локального сховища
    const productsData = getProductsFromLocalStorage();

    if (!productsData) {
      // Якщо дані відсутні в локальному сховищі, отримуйте їх з сервера
      const fetchedData = await request.fetchBreeds();

      // Збережіть отримані дані в локальному сховищі
      saveProductsToLocalStorage(fetchedData);

      // Використовуйте отримані дані для відображення продуктів
      displayProducts(fetchedData);
    } else {
      // Використовуйте дані з локального сховища для відображення продуктів
      displayProducts(productsData);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Змінена функція для відображення популярних продуктів
async function displayProducts(products) {
  const productsContainer = document.querySelector('.products-container');
  const template = document.querySelector('.product-template');

  products.forEach(product => {
    const productClone = template.cloneNode(true);
    productClone.style.display = 'flex';
    productClone.querySelector('.product-image').src = product.img;
    productClone.querySelector('.product-name').textContent = product.name;

    // Заповнюємо дані з сервера в спани
    productClone.querySelector('.category-value').textContent =
      product.category.replace('_', ' ');
    productClone.querySelector('.size-value').textContent = product.size;
    productClone.querySelector('.popularity-value').textContent =
      product.popularity;

    const addToCartBtn = productClone.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      addToCart(product._id);
    };

    productsContainer.appendChild(productClone);
  });
}

// Функція збереження продуктів в локальному сховищі
function saveProductsToLocalStorage(products) {
  localStorage.setItem('popularProducts', JSON.stringify(products));
}

// Функція отримання продуктів з локального сховища
function getProductsFromLocalStorage() {
  const storedData = localStorage.getItem('popularProducts');
  return storedData ? JSON.parse(storedData) : null;
}

// Змінена функція для додавання продукту в кошик
function addToCart(productId) {
  console.log('Додавання продукту в кошик:', productId);
  // Тут буде функціонал для додавання продукту в кошик
}
