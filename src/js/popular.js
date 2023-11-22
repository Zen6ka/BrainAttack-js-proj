import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
  // Додавання слухача подій DOMContentLoaded для завантаження сторінки
  const productsData = getProductsFromLocalStorage();
  if (productsData) {
    displayProducts(productsData);
  } else {
    fetchPopularProducts();
  }
});

function fetchPopularProducts() {
  axios
    .get('https://food-boutique.b.goit.study/api/products/popular?limit=5')
    .then(response => {
      // Виконано запит до сервера та відображення популярних продуктів
      displayProducts(response.data);
      saveProductsToLocalStorage(response.data);
    })
    .catch(error => console.error('Error:', error));
}

function saveProductsToLocalStorage(products) {
  //  Збереження популярних продуктів в локальне сховище
  localStorage.setItem('popularProducts', JSON.stringify(products));
}

function getProductsFromLocalStorage() {
  //  Отримання популярних продуктів з локального сховища
  const storedData = localStorage.getItem('popularProducts');
  return storedData ? JSON.parse(storedData) : null;
}

function displayProducts(products) {
  const productsContainer = document.querySelector('.products-container');
  const template = document.querySelector('.product-template');

  products.forEach(product => {
    const productClone = template.cloneNode(true);
    productClone.style.display = 'flex';
    productClone.querySelector('.product-image').src = product.img;
    productClone.querySelector('.product-name').textContent = product.name;

    //  Відображення продуктів на сторінці з даними з сервера
    productClone.querySelector('.category-value').textContent =
      product.category.replace('_', ' ');
    productClone.querySelector('.size-value').textContent = product.size;
    productClone.querySelector('.popularity-value').textContent =
      product.popularity;

    const addToCartBtn = productClone.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      //  Додавання продукту до кошика за допомогою кнопки
      addToCart(product._id);
    };

    productsContainer.appendChild(productClone);
  });
}

function addToCart(productId) {
  console.log('Додавання продукту в кошик:', productId);
  // Тут буде функціонал для додавання продукту в кошик
}
