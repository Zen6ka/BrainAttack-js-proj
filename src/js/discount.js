// import axios from 'axios';
// import sprite from '../img/icons.svg';

// const discountEl = document.querySelector('.discount-container');

// let products = [];
// let addedProducts = [];

// const addProductToStorage = product => {
//   const existingProduct = addedProducts.find(p => p._id === product._id);
//   if (!existingProduct) {
//     addedProducts.push(product);
//     localStorage.setItem('cart', JSON.stringify(addedProducts));
//   }
// };

// const isProductInCart = id => {
//   return addedProducts.some(product => product._id === id);
// };

// async function getDiscountProduct() {
//   try {
//     const res = await axios.get(
//       'https://food-boutique.b.goit.study/api/products/discount'
//     );

//     products = res.data;

//     function productTemplate(product) {
//       const { _id, name, img, price } = product;

//       return `<div class="discount-card">
//                   <div class="discount-logo">
//                   <svg class="logo">
//                       <use href="${sprite}#icon-discount-1" width="60" height="60"></use>
//                   </svg>
//                   </div>
//                   <div class="discount-card-image">
//                   <img src="${img}" alt="${name}" width="114" height="'114" />
//                   </div>
//                   <div class="discount-card-info">
//                   <div class="discount-card-name">
//                       <p class="discount-card-text">${name}</p>
//                   </div>

//                   <div class="discount-card-price">
//                       <p class="discount-card-text">$${price}</p>

//                       <button class="discount-card-button" type="button" data-id=${_id}>
//                       <svg class="">
//                           <use href="${sprite}#${
//         isProductInCart(_id)
//           ? 'icon-check'
//           : 'icon-heroicons-solid_shopping-cart'
//       }"></use>
//                       </svg>
//                       </button>
//                   </div>
//                   </div>
//               </div>`;
//     }

//     function productsTemplate(products) {
//       return products.slice(0, 2).map(productTemplate).join('');
//     }

//     function renderProducts() {
//       const markup = productsTemplate(products);
//       discountEl.innerHTML = markup;
//     }

//     addedProducts = JSON.parse(localStorage.getItem('cart')) || [];

//     renderProducts();

//     const cartButtons = document.querySelectorAll('.discount-card-button');
//     Array.from(cartButtons).forEach(el => {
//       el.addEventListener('click', ev => {
//         const productId = ev.currentTarget.dataset.id;
//         const selectedProduct = products.find(p => p._id === productId);
//         addProductToStorage(selectedProduct);
//         renderProducts();
//       });
//     });
//   } catch (error) {
//     console.error('Error fetching discount products:', error.message);
//   }
// }

// getDiscountProduct();

/*--------------------------------------------------------------------------*/

import axios from 'axios';
import sprite from '../img/icons.svg';

const discountEl = document.querySelector('.discount-container');
const CART_KEY = 'cart';

let products = [];
let addedProducts = [];

const addToCart = product => {
  addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existingProduct = addedProducts.find(p => p._id === product._id);

  if (!existingProduct) {
    addedProducts.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
    renderProducts();
  }
};

// const addToCart = product => {
//   const existingProduct = addedProducts.find(p => p._id === product._id);

//   if (!existingProduct) {
//     addedProducts.push(product);
//     localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
//     renderProducts();
//   }
// };

const isProductAlreadyInCart = id => {
  return addedProducts.some(product => product._id === id);
};

const renderProducts = () => {
  const markup = productsTemplate(products);
  discountEl.innerHTML = markup;
  attachButtonClickHandlers();
};

const handleButtonClick = ev => {
  const productId = ev.currentTarget.dataset.id;
  const selectedProduct = products.find(p => p._id === productId);
  addToCart(selectedProduct);
};

const productsTemplate = products => {
  return products.slice(0, 2).map(productTemplate).join('');
};

const productTemplate = product => {
  const { _id, name, img, price } = product;
  return `<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${sprite}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
                <img src="${img}" alt="${name}" width="114" height="'114" />
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
};

const attachButtonClickHandlers = () => {
  const cartButtons = document.querySelectorAll('.discount-card-button');
  cartButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
};

const init = async () => {
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
};

init();
