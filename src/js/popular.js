import { RequestToTheServer } from './filters';
import { onOpenModal } from './modal';
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
    cartButtonStyle();
  } catch (error) {
    console.error('Error:', error);
  }
});

function saveProductsToLocalStorage(products) {
  //  Збереження продуктів в локальне сховище
  localStorage.setItem('popularProducts', JSON.stringify(products));
  cartButtonStyle();
}

function getProductsFromLocalStorage() {
  //  Отримання  продуктів з локального сховища
  const storedData = localStorage.getItem('popularProducts');
  return storedData ? JSON.parse(storedData) : null;
}

function displayProducts(products) {
  const productContainers = document.querySelectorAll('.product-template');

  // Очистити вміст всіх блоків "product-template"
  productContainers.forEach(container => {
    container.querySelector('.product-image').src = '';
    container.querySelector('.product-name').textContent = '';
    container.querySelector('.category-value').textContent = '';
    container.querySelector('.size-value').textContent = '';
    container.querySelector('.popularity-value').textContent = '';
  });

  products.slice(0, productContainers.length).forEach((product, index) => {
    const container = productContainers[index];
    container.style.display = 'flex';

    // Заповнити дані блоку з даними з сервера
    container.querySelector('.product-image').src = product.img;
    container.querySelector('.product-name').textContent = product.name;
    container.querySelector('.category-value').textContent =
      product.category.replace('_', ' ');
    container.querySelector('.size-value').textContent = product.size;
    container.querySelector('.popularity-value').textContent =
      product.popularity;
    const productInfo = {
      _Id: product._id,
      name: product.name,
      img: product.img,
      category: product.category,
      price: product.price,
      size: product.size,
      is10PercentOff: product.is10PercentOff,
      popularity: product.popularity,
    };

    const addIdImg = container.querySelector('.product-image-container');
    addIdImg.addEventListener('click', function () {
      // Створюємо масив з одного елемента - нової інформації про продукт
      let populArray = [productInfo];

      // Зберігаємо оновлений масив у локальне сховище
      localStorage.setItem('popul', JSON.stringify(populArray));

      // Викликаємо onOpenModal з ID продукту
      onOpenModal(productInfo._Id);
    });
    // Налаштування слухача подій для кліку на кнопку "Додати в кошик"
    const addToCartBtn = container.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      addToCart(productInfo);
      updateCart();
    };
    addToCartBtn.setAttribute('data-product-id', product._id);
  });
}

// Функція для додавання продукту в кошик
export function addToCart(productInfo) {
  // Отримуємо масив продуктів з локального сховища
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Перевіряємо, чи товар вже є в кошику
  const existingProductIndex = cart.findIndex(
    item => item._Id === productInfo._Id
  );

  if (existingProductIndex !== -1) {
    // Якщо товар вже є в кошику, видаляємо його
    cart.splice(existingProductIndex, 1);
  } else {
    // Якщо товару немає в кошику, додаємо його
    cart.push(productInfo);
  }

  // Оновлюємо кошик у локальному сховищі
  localStorage.setItem('cart', JSON.stringify(cart));

  // Оновлюємо стиль кнопок після зміни кошика
  cartButtonStyle();
}

// Функція для оновлення стилю кнопок
export function cartButtonStyle() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const addToCartButtons = document.querySelectorAll('.cart-btn');

  addToCartButtons.forEach(btn => {
    const _Id = btn.getAttribute('data-product-id');
    const iconInCart = btn.querySelector('.icon-off');
    const iconAddToCart = btn.querySelector('.icon-on');
    const isProductInCart = cart.some(item => item._Id === _Id);

    if (iconInCart && iconAddToCart) {
      if (isProductInCart) {
        btn.classList.add('added-to-cart');
        iconInCart.style.display = 'block';
        iconAddToCart.style.display = 'none';
      } else {
        btn.classList.remove('added-to-cart');
        iconInCart.style.display = 'none';
        iconAddToCart.style.display = 'block';
      }
    }
  });
}
