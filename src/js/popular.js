import { RequestToTheServer } from './filters';
import { onOpenModal } from './modal';
import sprite from '../img/icons.svg';
document.addEventListener('DOMContentLoaded', function () {
  // Оновити стиль кнопок при завантаженні сторінки
  cartButtonStyle();

  const savedProducts = JSON.parse(localStorage.getItem('popularProducts'));
  let localProducts;

  if (savedProducts && savedProducts.length >= 5) {
    localProducts = savedProducts.slice(0, 5);
  } else {
    localProducts = [];
  }
  if (localProducts.length > 0) {
    createAndAppendProductElements(localProducts);
    addFunctionalityToElements();
  } else {
    fetchProductsFromServer();
  }
});

async function fetchProductsFromServer() {
  const request = new RequestToTheServer('products/popular', '', 1, 5);

  try {
    const fetchedData = await request.fetchBreeds();

    saveProductsToLocalStorage(fetchedData);

    const productsToDisplay = fetchedData.slice(0, 5);

    createAndAppendProductElements(productsToDisplay);

    addFunctionalityToElements();
  } catch (error) {
    console.error('Error:', error);
  }
}
function addFunctionalityToElements() {
  cartButtonStyle();
}
const productsContainer = document.querySelector('.products-container');

function saveProductsToLocalStorage(products) {
  // Збереження продуктів в локальне сховище
  localStorage.setItem('popularProducts', JSON.stringify(products));
}

function createAndAppendProductElements(products) {
  products.forEach(product => {
    // Створити контейнер для продукту
    const productTemplate = document.createElement('div');
    productTemplate.classList.add('product-template');

    // Створити розмітку продукту
    productTemplate.innerHTML = `
      <div class="popular-con">
          <div class="product-image-container" data-product-id="${
            product._id
          }"> <img src="${product.img}" alt="" class="product-image"></div>
          <div class="product-text">
              <h3 class="product-name">${product.name}</h3>
              <p class="product margin">
                  Category: <span class="category-value">${product.category.replace(
                    '_',
                    ' '
                  )}</span><br>
                  Size: <span class="size-value">${product.size}</span><br>
                  Popularity: <span class="popularity-value">${
                    product.popularity
                  }</span>
              </p>
          </div>
      </div>
      <button class="add-to-cart-btn cart-btn" data-product-id="${product._id}">
      <svg class="ico icon-on">
      <use href="${sprite}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${sprite}#icon-check"></use>
</svg>

      </button>
    `;
    // Налаштувати подію для кнопки "Додати в кошик І модалки"
    productsContainer.appendChild(productTemplate);
    const addToCartImg = productTemplate.querySelector(
      '.product-image-container'
    );
    addToCartImg.addEventListener('click', function () {
      onOpenModal(product._id);
    });

    const addToCartBtn = productTemplate.querySelector('.add-to-cart-btn');
    addToCartBtn.onclick = function () {
      addToCart(product);
    };
  });
}

// Функція для додавання або видалення товару з кошика
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingProductIndex = cart.findIndex(
    item => item && item._id === product._id
  );
  if (existingProductIndex !== -1) {
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  cartButtonStyle();
}

// Функція для оновлення стилю кнопок
export function cartButtonStyle() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const addToCartButtons = document.querySelectorAll('.cart-btn');

  addToCartButtons.forEach(btn => {
    const productId = btn.getAttribute('data-product-id');
    const iconInCart = btn.querySelector('.icon-off');
    const iconAddToCart = btn.querySelector('.icon-on');
    const isProductInCart = cart.some(item => item && item._id === productId);

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
///////////////////////
const scrollUpButton = document.getElementById('scroll-up');

function checkScroll() {
  const totalPageHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollRemaining = totalPageHeight - window.scrollY - viewportHeight;
  if (scrollRemaining < 100) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
}
window.addEventListener('scroll', checkScroll);

scrollUpButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
//Кнопка scroll-up   <a href="#" class="top" id="scroll-up" style="display: none;">Back to Top &#8593;</a>
// .top {
//   background-color: #000000;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 50px;
//   cursor: pointer;
//   font-size: 16px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: background-color 0.3s;
//   opacity: 0.7;
// }
// .top:hover {
//   opacity: 0.9;
//   background-color: #000000;
// }
