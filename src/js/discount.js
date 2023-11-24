import axios from 'axios';

const discountEl = document.querySelector('.discount-container');

let products = [];

const addIdToStorage = id => {
  if (localStorage.getItem('addedProducts')) {
    const item = JSON.parse(localStorage.getItem('addedProducts'));
    // console.log(item.includes(id));
    if (!item.includes(id)) {
      item.push(id);
      //   console.log(item);
      localStorage.setItem('addedProducts', JSON.stringify(item));
    }
  } else {
    localStorage.setItem('addedProducts', JSON.stringify([id]));
  }

  //   console.log(document.querySelector(`[data-id="${id}"]`).querySelector('use'));
};

const buttonIcon = id => {
  if (localStorage.getItem('addedProducts')) {
    return JSON.parse(localStorage.getItem('addedProducts')).includes(id)
      ? 'icon-check'
      : 'icon-heroicons-solid_shopping-cart';
  }
  return 'icon-heroicons-solid_shopping-cart';
};

async function getDiscountProduct() {
  try {
    const res = await axios.get(
      'https://food-boutique.b.goit.study/api/products/discount'
    );
    products = res.data;
    // console.log(products);

    function productTemplate(product) {
      const { _id, name, img, price } = product;

      return `<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
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
                          <use href="../img/icons.svg#${buttonIcon(_id)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`;
    }

    function productsTemplate(products) {
      return products.slice(0, 2).map(productTemplate).join('');
    }

    function renderProducts() {
      const markup = productsTemplate(products);
      discountEl.innerHTML = markup;
    }

    renderProducts();

    const cartButtons = document.querySelectorAll('.discount-card-button');
    Array.from(cartButtons).forEach(el => {
      el.addEventListener('click', ev => {
        // console.log(ev.currentTarget.dataset.id);
        addIdToStorage(ev.currentTarget.dataset.id);
      });
    });
  } catch (error) {
    console.error('Error fetching discount products:', error.message);
  }
}

getDiscountProduct();
