let headerCounter = document.querySelector('.js-header-cart-items');

let timeID = null;
let numberItemsCart = null;

localStorageCheckCart();

function localStorageCheckCart() {
  timeID = setInterval(() => {
    const itemsCartObj = localStorage.getItem('cart');
    numberItemsCart = JSON.parse(itemsCartObj);

    if (numberItemsCart === null) {
      headerCounter.innerHTML = '0';
      return;
    }
    headerCounter.innerHTML = `${numberItemsCart.length}`;
  }, 1000);
}
