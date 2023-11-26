// import { onOpenModal, onCloseModal,  } from "./modal.js";


const cartItemsQuantity = document.querySelector(".js-cart-items-quantity"); // Місце де буде оновлюватись кількість товарів в кошику
const cartEmpty = document.querySelector(".js-cart-empty");
const cartContainer = document.querySelector(".js-cart-container");
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const cartSelectedProducts = document.querySelector(".js-cart-selected-products");
const cartOrderDetails = document.querySelector(".js-cart-order-details");
const totalOrderedPrice = document.querySelector(".js-total-ordered-price");
const form = document.querySelector(".js-email-form");
const btnCheckout = document.querySelector(".js-email-checkout");
const input = document.querySelector(".input")

// const cartAmount = document.querySelector('.cart-amount')


console.log("Test start");
// За замовчуванням сторінка кошика буде пустою.
cartEmptyHidden();
cartContainerHidden();


// ФУНКЦІЯ ПЕРЕВІРКИ ЛОКАЛЬНОГО СХОВИЩА НА ВМІСТ ДАНИХ
function localStorageCheck() { // ****** пізніше підшаманити, щоб просто повертати результат сховище, а логіку відпрацьовувати далі поза функцією.
  const savedProducts = localStorage.getItem("cart");
  return   JSON.parse(savedProducts); //повертаю розпарсені дані з ЛС або null якщо там нічого не має
}
// savedProducts ?   : null

const parsedSavedProducts = localStorageCheck(); // результат повернення передаю змінній Розпарсених даних
console.log(parsedSavedProducts) //тест

//-----------------------------------------------------------------------------------------------------------------
// parsedSavedProducts повинен повернути ось це:
// const exampleLS = [
//   {category: "Fresh_Produce",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
//     is10PercentOff:    false,
//     name:    "Ackee",
//     popularity:    2099,
//     price:   8.99,
//     size:    "16 oz",
//     _id: "640c2dd963a319ea671e383b"},

//     { category: "Pantry_Items",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3814.png",
//     is10PercentOff:    false,
//     name:    "Almonds",
//     popularity:    616,
//     price:   8.99,
//     size:    "16 oz bag",
//     _id: "640c2dd963a319ea671e3814"},
    
//     { category: "Pantry_Items",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
//     is10PercentOff:    false,
//     name:    "Ackee",
//     popularity:    2099,
//     price:   8.99,
//     size:    "16 oz",
//     _id: "640c2dd963a319ea671e383b"},
//     { category: "Pantry_Items",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png"    ,
//     is10PercentOff:    false,
//     name:    "Apple Cider Vinegar"   ,
//     popularity:    435,
//     price:   6.99    ,
//     size:    "500 ml",
//     _id: "640c2dd963a319ea671e3660"},
//     { category: "Pantry_Items",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",
//     is10PercentOff:    false,
//     name:    "Ackee",
//     popularity:    2099,
//     price:   8.99,
//     size:    "16 oz",
//     _id: "640c2dd963a319ea671e383b"},
//     { category: "Pantry_Items",
//     img: "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3660.png"    ,
//     is10PercentOff:    false,
//     name:    "Apple Cider Vinegar"   ,
//     popularity:    435,
//     price:   6.99    ,
//     size:    "500 ml",
//     _id: "640c2dd963a319ea671e3660"}
//   ]
// console.log(parsedSavedProducts);


// НЕ ВИДАЛЯТИ!!!!!!!!!!!!!!!!!!!!!!
// // Функція перевірки об`єктів в масиві отриманого зі сховища і повернення лише унікальних значень. 
// const seen = new Set(); // Створюємо пустий Set для відстеження унікальних значень
// const uniqueProductsArray = parsedSavedProducts.filter(obj => {
//   const value = obj._id; // В нашому прикладі вибираємо значення "id" для порівняння унікальності
//   if (seen.has(value)) {
//     return false; // Значення вже було, це не унікальний об'єкт
//   }
//   seen.add(value); // Додаємо значення до Set, оскільки це унікальне
//   return true; // Об'єкт є унікальним і буде включений до результату
// });

// console.log(uniqueProductsArray);
// Якщо треба буде перевіряти масив зі сховища, щоб дані не повторювались, тоді використаю цю функцію, 
//а далі для роблти в решті коду буду передавати отриманий масив унікальних об`єктів (типу цей uniqueProductsArray).




//ФУНКЦІЯ ПІДРАХУНКУ СУМИ i РЕНДЕРУ ЇЇ В HTML
function totalSumMarkup (array) {
    // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.
    const sumPrice = array.reduce((acc, currentProduct)=>{
      return acc + currentProduct.price;
        }, 0).toFixed(2);

      totalOrderedPrice.innerHTML = `$${sumPrice}`;
  }


  
    //  спосіб

    cartSelectedProducts.addEventListener('click', deleterProduct);

    function deleterProduct (event) {
            // console.log('i`m alive');
      
            if (event.target.closest('.cart-remove-product-btn')) {

              let cart = localStorageCheck();
              const { _id } = cart; 
              const refreshedArray = cart.filter(product => product._id !== _id);
 console.log(refreshedArray)

              if (refreshedArray > 0) {
                 localStorage.setItem('cart', JSON.stringify(refreshedArray));
                 const newMarkup = localStorageCheck();
                 const markup = selectedProductsMarkup(newMarkup);
                 cartSelectedProducts.innerHTML = markup;

                console.log('11111')
                // const refreshedArray = cart.splice(productIndex, 1)
                // localStorage.setItem('cart', JSON.stringify(refreshedArray))
              }
              console.log('2222');
             } else { 

              console.log('3333')
              return
             }

      }





// Всюди замість exampleLS треба використвувати оригінал, тобто parsedSavedProducts
if (parsedSavedProducts === null || parsedSavedProducts.length < 1) {
  cartItemsQuantity.innerHTML = '0';
  cartEmptyShow();
cartContainerHidden();
 } else {




cartItemsQuantity.innerHTML = parsedSavedProducts.length;

  // cartAmount.innerHTML = parsedSavedProducts.length;

  cartEmptyHidden();
  cartContainerShow();
  console.log('sdsdsd')

  //-------Тут треба буде глянути що саме повертається і в якому вигляді.
  const { _id, name, img, category, size, price } = parsedSavedProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.
//   const { ProductId, ProductName, ProductImg, ProductCategory, ProductSize, ProductPrice } = parsedSavedProducts; - або в такому вигляді буде повертатись.
  
// Повернення масиву об`єктів і відмальовування їх
  const productsArrayMarkup = parsedSavedProducts.map(el => {
    return selectedProductsMarkup(el._Id, el.name, el.img, el.category, el.size, el.price) 
    // return selectedProductsMarkup(el._id, el.Productame, el.ProductImg, el.ProductCategory, el.ProductSize, el.ProductPrice) -або так
  }).join('');
  
  console.log(productsArrayMarkup.length); // там 4435 цифра, але це всього лиш кількість символів які нам повернулись.
  // cartItemsQuantity.innerHTML = parsedSavedProducts.length;

  cartSelectedProducts.innerHTML = productsArrayMarkup;

  cartItemsQuantity.innerHTML = parsedSavedProducts.length;

  totalSumMarkup(parsedSavedProducts);

  // document.querySelector('.cart-remove-product-btn').addEventListener('click', deleterProduct); // після відмальовки розмітки вішаю слухача на копку закриття. Але через безпосередній пошук, бо змінна не підтягується з гори.
  cartSelectedProducts.addEventListener('click', deleterProduct);

// Поверення одного об`єкту і відмальовування його.
//   const productMarkup = selectedProductsMarkup(id, name, img, category, size, price);
//   cartSelectedProducts.innerHTML = productMarkup;
 }



    // Слухач на форму по сабміту а ще треба буде по кліку на кнопку
form.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(input.value) 
    input.value = "";
})
//Слухач на кнопку Сабміту
btnCheckout.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Submit successful')

  // після сабмі/замовлення можемо видалити дані зі сховища та приховати
  cartEmptyShow();
  cartContainerHidden();
  cartItemsQuantity.innerHTML = '0';
  // totalOrderedPrice.innerHTML = 0;
  cartSelectedProducts.innerHTML = "";

// потім тут прописати відкриття модалки про успішні закупи.


})





// Слухач на кнопку видалення всього
deleteAllBtn.addEventListener('click', removeLocalStorage);
// ФУНКЦІЯ ОЧИЩЕННЯ СХОВИЩА ВІД ВСІХ ПРОДУКТІВ
function removeLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem('cart'); // очищую сховище (за моїм ключем)
    // localStorage.clear(); - або все очистити 
    cartSelectedProducts.innerHTML = "";
    cartContainerHidden(); // приховую контейнер кошика
    cartEmptyShow();             // показую пустий кошик
// cartEmptyHidden();
// cartContainerHidden();
cartItemsQuantity.innerHTML = 0;
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
<p class="underline"></p>
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


console.log("Test end");








    
    








// function deleterProduct (event){
//   console.log("11111")
//     const clickedRemoveBtn = event.currentTarget;
//     const itemId = clickedRemoveBtn.getAttribute("data-id");
//     const cartArray = localStorageCheck();
    
//     const newCartArray = cartArray.filter(product => product._id !== itemId);
//     localStorage.setItem('cart', JSON.stringify(newCartArray));
    
//     if (newCartArray.length > 0) {
//       console.log("22222");
//       localStorage.setItem('cart', JSON.stringify(newCartArray));
//       cartSelectedProducts.innerHTML = localStorageCheck();


//         return newCartArray;
//     } else { console.log("3333")
//         cartSelectedProducts.innerHTML = "";
//         cartContainerHidden(); // приховую контейнер кошика
//         cartEmptyShow();             // показую пустий кошик
//     }



//         };







    
//     function deleterProduct (event) {
//       console.log('i`m alive');

//       if (event.target.closest('.cart-remove-product-btn')) { // перевіряю чи поточний елемент на який відбувється кліє не є кнопкою, якщо правда, то виходимо з функції одразу, якщо це кнопка, то йдемо далі.
  
//         console.log('try2')

//         const clickedRemoveBtn = event.target;
//         const itemId = clickedRemoveBtn.getAttribute("data-id");
//         const cartArray = localStorageCheck();
//         console.log(cartArray);

//         const itemIndexToRemove = cartArray.findIndex(product => product.id === itemId);

//         if (itemIndexToRemove !== -1) {
//             // Видаляємо елемент за індексом
//             const newArr = cartArray.splice(itemIndexToRemove, 1);
//             totalSumMarkup(newArr);
    
//             // Оновлюємо localStorage один раз після видалення всіх потрібних елементів
//             localStorage.setItem('cart', JSON.stringify(newArr));
//         }

//         if (cartArray.length > 0) {
// //Якщо елементи є в масиві тоді перераховуємо суму 
// totalSumMarkup(cartArray);
//             // Якщо є елементи у кошику
            
//             return cartArray;
//         } else {
//             cartSelectedProducts.innerHTML = "";
//             cartContainerHidden(); // приховую контейнер кошика
//             cartEmptyShow();       // показую пустий кошик
//             cartItemsQuantity.innerHTML = '0';
//         }




// } 
// return

//     };
     






























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











// // Тест----------------------------------------------------------
// const testObject = [ { 
//   id: '640c2dd963a319ea671e383b',
//   name: 'Ackee', 
//   img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
//   category: 'Fresh_Produce',
//   price: 8.99, 
//   size: 16 
// }, 
// { 
//     id: '640c2dd963a319ea671e383b',
//     name: 'Ackee', 
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
//     category: 'Fresh_Produce',
//     price: 8.99, 
//     size: 16 
//   }, 
//   { 
//     id: '640c2dd963a319ea671e383b',
//     name: 'Ackee', 
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
//     category: 'Fresh_Produce',
//     price: 8.99, 
//     size: 16 
//   }, 
//   { 
//     id: '640c2dd963a319ea671e383b',
//     name: 'Ackee', 
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
//     category: 'Fresh_Produce',
//     price: 8.99, 
//     size: 16 
//   }, 
//   { 
//     id: '640c2dd963a319ea671e383b',
//     name: 'Ackee', 
//     img: 'https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png', 
//     category: 'Fresh_Produce',
//     price: 8.99, 
//     size: 16 
//   }
// ] 



// const { id, name, img, category, price, size} = testObject;
//    const markup  = selectedProductsMarkup(id, name, img, category, price, size);
  
//    const productsArrayMarkup = testObject.map(el => {
    
//     return selectedProductsMarkup(el.id, el.name, el.img, el.category, el.size, el.price)
//   }).join('');

//   cartSelectedProducts.innerHTML = productsArrayMarkup;

//   cartSelectedProducts.addEventListener('click', deleterProduct);

// totalSumMarkup(testObject);
// cartItemsQuantity.innerHTML = testObject.length
// localStorageCheck();







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

















// НА РАЗІ ЦЕ НЕ ПОТРІБНО БО МИ БУДЕМО ПРИХОВУВАТИ УВЕСЬ КОНТЕЙНЕР
// // ФУНКЦІЯ ПРИХОВУВАННЯ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsHidden() {
//   cartOrderDetails.style.display = "none";
// }
// // ФУНКЦІЯ ПОКАЗУ ДЕТАЛЕЙ ЗАМОВЛЕННЯ
// function orderDetailsShow() {
//   cartOrderDetails.style.display = "block";
// }