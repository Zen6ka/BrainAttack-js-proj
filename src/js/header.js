let headerCounter = document.querySelector('.js-header-cart-items');

let timeID = null;

localStorageCheckCart();

function localStorageCheckCart() {
  timeID = setInterval(() => {
    const cartProducts = localStorage.getItem('cart');
    const itemsCartObj = JSON.parse(cartProducts);

    if (itemsCartObj === null) {
      headerCounter.innerHTML = '0';
      return;
    }
    const flatProductsObj = itemsCartObj.flatMap(objs => objs._id);

    const uniqueProducts = flatProductsObj.filter(
      (product, index, arr) => arr.indexOf(product) === index
    );

    headerCounter.innerHTML = `${uniqueProducts.length}`;
  }, 1000);
}
