let headerCounter = document.querySelector('.js-header-cart-items');

localStorageCheckCart();

export function localStorageCheckCart() {
  try {
    const cartProducts = localStorage.getItem('cart');

    if (!cartProducts) {
      headerCounter.innerHTML = '0';
      return;
    }
    const itemsCartObj = JSON.parse(cartProducts);
    if (!Array.isArray(itemsCartObj)) {
      headerCounter.innerHTML = '0';
      return;
    }
    const flatProductsObj = itemsCartObj.flatMap(objs => objs._id);

    const uniqueProducts = flatProductsObj.filter(
      (product, index, arr) => arr.indexOf(product) === index
    );

    headerCounter.innerHTML = `${uniqueProducts.length}`;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
