import { RequestToTheServer } from './filters';

document.addEventListener('DOMContentLoaded', async function () {
  const request = new RequestToTheServer('products/popular?limit=5');

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

    const addToCartBtn = container.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      addToCart(product._id);
    };
  });
}
