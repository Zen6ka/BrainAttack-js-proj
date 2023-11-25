const cartItemsQuantity = document.querySelector(".js-cart-items-quantity"); // Місце де буде оновлюватись кількість товарів в кошику
const cartEmpty = document.querySelector(".js-cart-empty");
const cartContainer = document.querySelector(".js-cart-container");
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const cartSelectedProducts = document.querySelector(".js-cart-selected-products");
const cartOrderDetails = document.querySelector(".js-cart-order-details");
const totalOrderedPrice = document.querySelector(".js-total-ordered-price");
const form = document.querySelector(".js-email-form");
const btnCheckout = document.querySelector(".js-email-checkout");
const cartRemoveProductBtn = document.querySelector('.cart-remove-product-btn');

console.log("sdsd");
// За замовчуванням сторінка кошика буде пустою.
// cartEmptyHidden();
// cartContainerHidden();

// ФУНКЦІЯ ПЕРЕВІРКИ ЛОКАЛЬНОГО СХОВИЩА НА ВМІСТ ДАНИХ
function localStorageCheck() { // ****** пізніше підшаманити, щоб просто повертати результат сховище, а логіку відпрацьовувати далі поза функцією.
  const savedProducts = localStorage.getItem("cart");
  return  savedProducts ? JSON.parse(savedProducts) : null; //повертаю розпарсені дані з ЛС або null якщо там нічого не має
}

const parsedSavedProducts = localStorageCheck(); // результат повернення передаю змінній Розпарсених даних
console.log(parsedSavedProducts) //тест

 

//ФУНКЦІЯ ПІДРАХУНКУ СУМИ i РЕНДЕРУ ЇЇ В HTML
function totalSumMarkup (array) {
    // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.
    const sumPrice = array.reduce((acc, currentProduct)=>{
      return acc + currentProduct.price;
        }, 0).toFixed(2);
      totalOrderedPrice.innerHTML = `$${sumPrice}`;
  }



if (parsedSavedProducts) {
  cartItemsQuantity.innerHTML = parsedSavedProducts.length;
  cartEmptyHidden();
  cartContainerShow();
  //-------Тут треба буде глянути що саме повертається і в якому вигляді.
  const { id, name, img, category, size, price } = parsedSavedProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.
//   const { ProductId, ProductName, ProductImg, ProductCategory, ProductSize, ProductPrice } = parsedSavedProducts; - або в такому вигляді буде повертатись.
  
// Повернення масиву об`єктів і відмальовування їх
  const productsArrayMarkup = parsedSavedProducts.map(el => {
    return selectedProductsMarkup(el.ProductId, el.name, el.img, el.category, el.size, el.price)
    // return selectedProductsMarkup(el.id, el.ProductName, el.ProductImg, el.ProductCategory, el.ProductSize, el.ProductPrice) - або так
  }).join('');
  cartSelectedProducts.innerHTML = productsArrayMarkup;
  cartItemsQuantity.innerHTML = productsArrayMarkup.length;
// Поверення одного об`єкту і відмальовування його.
//   const productMarkup = selectedProductsMarkup(id, name, img, category, size, price);
//   cartSelectedProducts.innerHTML = productMarkup;

 } else {
  cartItemsQuantity.innerHTML = 0;
  cartEmptyShow();
// cartContainerHidden();
 }



//     // Слухач на форму по сабміту а ще треба буде по кліку на кнопку
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
// })
//   }






deleteAllBtn.addEventListener('click', removeLocalStorage);
// ФУНКЦІЯ ОЧИЩЕННЯ СХОВИЩА ВІД ВСІХ ПРОДУКТІВ
function removeLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem('cart'); // очищую сховище
    cartSelectedProducts.innerHTML = "";
    cartContainerHidden(); // приховую контейнер кошика
    cartEmptyShow();             // показую пустий кошик
// cartEmptyHidden();
// cartContainerHidden();
}


// ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ОБРАНИХ ТОВАРІВ
function selectedProductsMarkup(
  productId,
  productName,
  productImg,
  productCategory,
  productSize,
  productPrice
) {
  return `
<div class="selected-item" id="${productId}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${productImg}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${productName}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${productCategory}</span> Size: <span class="js-item-product-descr">${productSize}</span></p>
        <p class="js-item-product-price">$${productPrice}</p>
    </div>
</div>
`
}




// функції помічники які будуть викликатись навзаєм в залежності від того чи в локальному сховищі щось є

// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyShow () {
    cartEmpty.style.display = 'flex';
}
// ФУНКЦІЯ ПРИХОВУВАННЯ ПОРОЖНЬОГО КОШИКА - EMPTY
function cartEmptyHidden () {
    cartEmpty.style.display = 'none';
}


// ФУНКЦІЯ ПОКАЗУ ПОРОЖНЬОГО КОНТЕЙНЕРУ
function cartContainerShow () {
    cartContainer.style.display = 'flex';
}
// ФУНКЦІЯ Приховування ПОРОЖНЬОГО КОНТЕЙНЕРУ
// --------- буду викликати функцію яка приховує вміст коли отриманий результат запиту буде не порожнім
function cartContainerHidden () {
    cartContainer.style.display = 'none';
}


console.log("qwewqe");









// Тест----------------------------------------------------------
const testObject = [ { 
  id: '640c2dd963a319ea671e383b',
  name: 'Ackee', 
  img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
  category: 'Fresh_Produce',
  price: 8.99, 
  size: 16 
}, 
{ 
    id: '640c2dd963a319ea671e383b',
    name: 'Ackee', 
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
    category: 'Fresh_Produce',
    price: 8.99, 
    size: 16 
  }, 
  { 
    id: '640c2dd963a319ea671e383b',
    name: 'Ackee', 
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
    category: 'Fresh_Produce',
    price: 8.99, 
    size: 16 
  }, 
  { 
    id: '640c2dd963a319ea671e383b',
    name: 'Ackee', 
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
    category: 'Fresh_Produce',
    price: 8.99, 
    size: 16 
  }, 
  { 
    id: '640c2dd963a319ea671e383b',
    name: 'Ackee', 
    img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
    category: 'Fresh_Produce',
    price: 8.99, 
    size: 16 
  }
] 

const { id, name, img, category, price, size} = testObject;
   const markup  = selectedProductsMarkup(id, name, img, category, price, size);
   cartSelectedProducts.innerHTML = markup;

   const productsArrayMarkup = testObject.map(el => {
    return selectedProductsMarkup(el.id, el.name, el.img, el.category, el.size, el.price)
  }).join('');
  cartSelectedProducts.innerHTML = productsArrayMarkup;


//   const summary = testObject.reduce((acc, currentProduct)=>{
//     return acc + currentProduct.price;
//       }, 0).toFixed(2);
//     totalOrderedPrice.innerHTML = `$${summary}`;
totalSumMarkup(testObject);

cartItemsQuantity.innerHTML = testObject.length

localStorageCheck();


    // 2 спосіб

    cartRemoveProductBtn.addEventListener('click', (event) => {
        const clickedRemoveBtn = event.currentTarget;
        const itemId = clickedRemoveBtn.getAttribute("data-id");
        const cartArray = localStorageCheck();
        
        const itemIndexToRemove = cartArray.findIndex(product => product.id === itemId);

        if (itemIndexToRemove !== -1) {
            // Видаляємо елемент за індексом
            cartArray.splice(itemIndexToRemove, 1);
    
            // Оновлюємо localStorage один раз після видалення всіх потрібних елементів
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }

        if (cartArray.length > 0) {
//Якщо елементи є в масиві тоді перераховуємо суму 
totalSumMarkup(cartArray);
            // Якщо є елементи у кошику
            
            return cartArray;
        } else {
            cartSelectedProducts.innerHTML = "";
            cartContainerHidden(); // приховую контейнер кошика
            cartEmptyShow();       // показую пустий кошик
            cartItemsQuantity.innerHTML = 0;
        }
    });
     




































// const localStorageResult = parsedSavedProducts ? parsedSavedProducts.length : 0; // Далі умова, якщо після парсингу дані є, то записую їх кількість в змінну, але якщо немає, тоді записую нуль. 
//   cartItemsQuantity.innerHTML = localStorageResult; //отриманий результат передаю в HTML
  // На разі закоментую
  // const { name, img, category, size, price } = parsedSavedProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.
  // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.
//   const sumPrice = parsedSavedProducts.reduce((acc, currentProduct)=>{
// return acc + currentPrice.price;
//   }  , 0) 

//   if (savedProducts.length === 0) {
//     // або пустий масив/об`єкт null/undefined (потім подивитись що повертається і підкорегувати логіку)
//     // ТОДІ виклик функції яка покаже нашу порожню розмітку пустого кошику і приховає розмітку товарів.
// // cartEmptyShow();
// // cartContainerHidden();
//   } else {
//     // Якщо масив не порожній, тоді приховуємо розмітку порожнього масиву і показужмо розмітку товарів.
// //     cartEmptyHidden();
// // cartContainerShow();

//     //     // виклик функції з відмалюванням даних продукту i передача її результату в дівчик
//     //     const productMarkup = selectedProductsMarkup();
//     //     cartSelectedProducts.innerHTML = productMarkup;
//     //Реалізую переший варіант і просто буду показувати або приховувати цей блок в залежності від результату ( і буду викликати функцію показу (треба її ще написати))
//     // // виклик функції з відмальовуванням даних замовлення і передача її результату в дівчик
//     // const detailsMarkup = orderDetailsMarkup ();
//     // cartOrderDetails.innerHTML = detailsMarkup;


// // передаємо суму цін в Тотал
//     // totalOrderedPrice.innerHTML = `$${sumPrice}`;

















// function removeProductLocalStorage (productItemId) {
//     cartSelectedProducts.innerHTML = ""; // очищення розмітки при виклику функції
//  // Отримуємо дані про кошик з локального сховища

// const cartCheck = JSON.parse(localStorage.getItem('cart')) || {};

// // const itemId = cartRemoveProductBtn.getAttribute("data-id");
// // const productIndexRemove = cartSelectedProducts.findIndex()

// }

// const productIndexRemove = cartSelectedProducts.findIndex()













// На разі закую її просто в розмітку і буду приховувати або показувати в залежності від результату
// // ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsMarkup (totalPrice) { // в totalPrice буде передватись результат редьюсу який я вирахую пізніше.
// return `
// <h2><b>YOUR ORDER</b></h2>
// <div>
// <h3><b>Total</b></h3>
// <p>Sum: <h2>$${totalPrice}</h2></p>
// </div>
// <input type="text" placeholder="Mail: Enter your email" pattern="[a-zA-Z0-9\-.]+">
// <button type="submit">Checkout</button>
// `
// }










// 1 спосіб
//ФУНКЦІЯ ВИДАЛЕННЯ ОДНОГО ПРОДУКТУ З КОШИКУ

// cartRemoveProductBtn.addEventListener('click', (event) => {
//     const clickedRemoveBtn = event.currentTarget;
//     const itemId = clickedRemoveBtn.getAttribute("data-id");
//     const cartArray = localStorageCheck();
    
//     const newCartArray = cartArray.filter(product => product.id !== itemId);
//     localStorage.setItem('cart', JSON.stringify(newCartArray));
    
//     if (newCartArray.length > 0) {
//         return newCartArray;
//     } else {
//         cartSelectedProducts.innerHTML = "";
//         cartContainerHidden(); // приховую контейнер кошика
//         cartEmptyShow();             // показую пустий кошик
//     }
//         });










// НА РАЗІ ЦЕ НЕ ПОТРІБНО БО МИ БУДЕМО ПРИХОВУВАТИ УВЕСЬ КОНТЕЙНЕР
// // ФУНКЦІЯ ПРИХОВУВАННЯ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsHidden() {
//   cartOrderDetails.style.display = "none";
// }
// // ФУНКЦІЯ ПОКАЗУ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsShow() {
//   cartOrderDetails.style.display = "block";
// }