// import axios from 'axios';
// import { onCloseModal, onOpenOrderedModal, onCheckoutButtonClick,  onBackdropClick,  onCloseByEsc,  isModalOpen,  toggleBodyScroll } from "./modal.js";

import {localStorageCheckCart} from './header.js'
import './footer.js';
import './header.js'

import spriteIcons from '../img/icons.svg';
console.log(spriteIcons)

const cartItemsQuantity = document.querySelector(".js-cart-items-quantity"); // Місце де буде оновлюватись кількість товарів в кошику
const cartEmpty = document.querySelector(".js-cart-empty");
const cartContainer = document.querySelector(".js-cart-container");
const deleteAllBtn = document.querySelector('.js-delete-all-btn');
const cartSelectedProducts = document.querySelector(".js-cart-selected-products");
const cartOrderDetails = document.querySelector(".js-cart-order-details");
const totalOrderedPrice = document.querySelector(".js-total-ordered-price");
const form = document.querySelector(".js-email-form");
// const btnCheckout = document.querySelector(".js-email-checkout");
const input = document.querySelector(".cart-input")


let conterProduct = 1;

// console.log("Test start");
// За замовчуванням сторінка кошика буде пустою.
cartEmptyHidden();
cartContainerHidden();


// ФУНКЦІЯ ПЕРЕВІРКИ ЛОКАЛЬНОГО СХОВИЩА НА ВМІСТ ДАНИХ
function localStorageCheck() { // ****** пізніше підшаманити, щоб просто повертати результат сховище, а логіку відпрацьовувати далі поза функцією.
  const savedProducts = localStorage.getItem("cart");
  return   JSON.parse(savedProducts); //повертаю розпарсені дані з ЛС або null якщо там нічого не має
}  // savedProducts ?   : null

const parsedSavedProducts = localStorageCheck(); // результат повернення передаю змінній Розпарсених даних
// console.log(parsedSavedProducts) // Масив всіх об`єктів з ЛС за ключем cart


// Основна логіка запиту
const uniqProducts = uniqProductsArray(parsedSavedProducts); // Ортримані дані зі сховища фільтрую на унікальність і присвоюю новій змінній відфільрований масив 
cartItemsQuantity.innerHTML = uniqProducts.length; // після чого одразу записую на сторінці кількість товарів в кошику
localStorageCheckCart(); // Перевіряю і відмальовую кількість товарів у хедері. 
  // const { _id, name, img, category, size, price } = uniqProducts; // повинен повертатись об`єкт за запитом до сховища. Тому одразу роблю його деструктуризацію, щоб потім відмальовувати розмітку.
  
// Повернення масиву об`єктів і відмальовування їх
  const productsArrayMarkup = uniqProducts.map(el => {
    return selectedProductsMarkup(el._id, el.name, el.img, el.category, el.size, el.price) 
  }).join('');
 
  cartSelectedProducts.innerHTML = productsArrayMarkup;// відмальовую отриманий результат на сторінці
   totalSumMarkup(uniqProducts); // Також одразу рахую суму та відмальовую її на сторінці (все це виконує функція, тому я просто її викликаю передаючи наш масив унікальних об`єктів)


/// слухач на форму форму продуктів які ми отримали з ЛС
  cartSelectedProducts.addEventListener('click', deleterProduct);


  
// Функція перевірки об`єктів в масиві отриманого зі сховища і повернення лише унікальних значень. 
function uniqProductsArray (baseArray) {
  if((baseArray === null || baseArray.length < 1)){
    cartItemsQuantity.innerHTML = '0';
    cartEmptyShow();
  cartContainerHidden();
  console.log('Error array')
  return [];
  }

  cartEmptyHidden();
  cartContainerShow();

const seen = new Set(); // Створюємо пустий Set для відстеження унікальних значень
const uniqueProductsArray = parsedSavedProducts.filter(obj => {
  const value = obj._id; // В нашому прикладі вибираємо значення "id" для порівняння унікальності
  if (seen.has(value)) {
    return false; // Значення вже було, це не унікальний об'єкт
  }
  seen.add(value); // Додаємо значення до Set, оскільки це унікальне
  return true; // Об'єкт є унікальним і буде включений до результату
});

console.log(uniqueProductsArray); //  Масив унікальних об`єктів з ЛС за ключем cart

return uniqueProductsArray;
}



    // ФУНКЦІЯ ВИДАЛЕННЯ ПРОДУКТУ З НАШОГО ПЕРЕЛІКУ 
    function deleterProduct (event) {
      const currentElementId = event.target.closest('[id]');
      const actualId = currentElementId ? currentElementId.id : null;
      
console.log(actualId)

            if (event.target.closest('.cart-remove-product-btn')) {
              let cart = localStorageCheck();

              const refreshedArray = cart.filter(product => product._id !== actualId);
 console.log(refreshedArray)

              if (refreshedArray.length > 0) {
                           localStorage.setItem('cart', JSON.stringify(refreshedArray));

                const refreshedMarkup = localStorageCheck().map(el => {
                  return selectedProductsMarkup(el._id, el.name, el.img, el.category, el.size, el.price) 
                  // return selectedProductsMarkup(el._id, el.Productame, el.ProductImg, el.ProductCategory, el.ProductSize, el.ProductPrice) -або так
                }).join('');
                  

                 cartSelectedProducts.innerHTML = refreshedMarkup;
                 localStorageCheckCart(); // Також тут викликаю Функцію Наталі з хедера, для перевірки і оновлення інформації у віконці хедера.

                 totalSumMarkup(refreshedArray);
                 cartItemsQuantity.innerHTML = refreshedArray.length;

              } else {
              localStorage.removeItem('cart');

              cartItemsQuantity.innerHTML = '0';
              cartSelectedProducts.innerHTML = "";
    
              cartEmptyShow();
              cartContainerHidden();
              localStorageCheckCart(); // і знову функцією Наталі відмальовую відповідне значення в хедері якщо нуль.
            }
             } 
            return
           
      }



    // Слухач на форму по сабміту а ще треба буде по кліку на кнопку

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = input.value;

  console.log(`Ordered by: ${email}`)
console.log('Submit successful')

//  відкриття модалки про успішні закупи при сабміті
onCheckoutButtonClick()

  // після сабміту замовлення можемо видалити дані зі сховища та приховати ---------AЛЕ Я ЦЕ ДОДАВ У ФУНКЦІЮ ЗАКРИТТЯ, 
  //ЩОБ ВОНО ПЕРЕМАЛЬОВУВАЛОСЬ КОЛИ МОДАЛКА ЗНИКАЄ
  // cartEmptyShow();
  // cartContainerHidden();
  // cartItemsQuantity.innerHTML = '0';
  // cartSelectedProducts.innerHTML = "";

  localStorage.removeItem('cart'); // Видаяю ключ зі сховища

  form.reset(); // Очищую форму
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
    localStorageCheckCart(); // Викликаю функцію Наталі функцію Наталі відмальовую відповідне значення в хедері якщо нуль.

// cartEmptyHidden();
// cartContainerHidden();
cartItemsQuantity.innerHTML = '0';
}




// //ФУНКЦІЯ ПІДРАХУНКУ СУМИ i РЕНДЕРУ ЇЇ В HTML (Використовується і в додатковому функціоналі також)
function totalSumMarkup (array) {
  // Для додаткового функціоналу: Перевірка чи елементи масиву який предаються є числом:
  const arrayCheck = array.every(element => typeof element === 'number');
  // console.log(arrayCheck)
  
  if (arrayCheck) { // Якщо так, тоді виконується підрахунок і відмальовка за Додатковим функціоналом, а якщо ні, тоді за базовим (через об`єкт)
    // console.log(arrayCheck)
  // метод редюс буде рахувати мені суму цін за всі продукти. Потім цей результат я буду передавати в Тотал під час перевірки.

    const sumPrice = array.reduce((acc, currentProduct)=>{
      return acc + currentProduct; //порахував ціну
        }, 0).toFixed(2); //заокруглив до сотих
  
      totalOrderedPrice.innerHTML = `$${sumPrice}`; // відмалював

  } else { // повторюємо те ж саме, але для об`єкту

    const sumPrice = array.reduce((acc, currentProduct)=>{
      return acc + currentProduct.price;
        }, 0).toFixed(2);
  
      totalOrderedPrice.innerHTML = `$${sumPrice}`;
    }
  
}






// ФУНКЦІЯ ВІДМАЛЬОВУВАННЯ ОБРАНИХ ТОВАРІВ
function selectedProductsMarkup(
  productId,
  productName,
  productImg,
  productCategory,
  productSize,
  productPrice,
) {

  return `
<div class="selected-item" id="${productId}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${spriteIcons}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${productImg}" alt="Product"></div>
    <div class="js-selected-item-description">
        <p class="js-item-product-name">${productName}</p>
<div class="js-item-description-section">
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${productCategory}</span> </p> <p class="js-item-product-properties">Size: <span class="js-item-product-descr">${productSize}</span></p>
        </div>
        <div class="js-price-count-section"><p data-price="${productPrice}" class="js-item-product-price">$<span class="js-price-value">${productPrice}</span></p>
        <div class="js-counter-section">
        <button type="button" class="btn-count-minus">-</button>
        <p class="count-product">${conterProduct}</p>
       
        <button type="button" class="btn-count-plus">+</button>
        </div>
        </div>
    </div>
</div>
<div class="underline-container">
<p class="underline"></p>
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

console.log("Test end");




// МОДАЛЬНІ ПОМІЧНИЧКИ

function onCheckoutButtonClick() {
  onOpenOrderedModal();
}

 async function onOpenOrderedModal() {
  window.addEventListener('keydown', onCloseByEsc);
  document.body.classList.add('show-ordered-modal');
  toggleBodyScroll();
  document.querySelector('.js-backdrop-ordered').addEventListener('click', onBackdropClick);
  document.querySelector('[data-action="close-modal-cart"]').addEventListener('click', onCloseByClick)
}
// Закритя модального вікна по Esc
function onCloseByEsc(event) {
  if (event.code === 'Escape') {
    onCloseModalCart();
  }
}
// Закриття модального вікна натисканням кнопки
function onCloseByClick () {
      onCloseModalCart();
 }   

// Закритя модального вікна
 function onCloseModalCart() {
  // Зняв слухач
  window.removeEventListener('keydown', onCloseByEsc);
  document.body.classList.remove('show-ordered-modal');
  document.querySelector('.js-backdrop-ordered').removeEventListener('click', onBackdropClick);
  document.querySelector('[data-action="close-modal-cart"]').removeEventListener('click', onCloseByClick);
  toggleBodyScroll();

  cartEmptyShow(); // Коли закривється тоді приховую конейнер і показую пороженій кошик
  cartContainerHidden();
  localStorageCheckCart(); //Викликаю Функцію Наталі і відмальовую відповідне значення в хедері якщо нуль.

  cartItemsQuantity.innerHTML = '0';
  cartSelectedProducts.innerHTML = "";
 console.log('closed')
}

// Закритя модального вікна по кліку за модалку (на темний фон)
 function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalCart();
  }
}


 function isModalOpen() {
  return document.body.classList.contains('show-modal');
}

 function toggleBodyScroll() {
  document.body.style.overflow = isModalOpen() ? 'hidden' : '';
}









/////////////////// Додатковий функціонал /////////////////////////////////




const buttonMinus = document.querySelector('.btn-count-minus');
const buttonPlus = document.querySelector('.btn-count-plus');
const countValue = document.querySelector('.count-product')
const itemProductPrice = document.querySelector('.js-price-value')
const itemAllProductsPrice = document.querySelectorAll('.js-price-value');



// СЛУХАЧ ДЛЯ ДОДАВАННЯ ТОВАРІВ ЗА КНОПКОЮ
buttonPlus.addEventListener('click', couterIncrease);

// ФУНКЦІЯ ДЛЯ ДОДАВАННЯ КІЛЬКОСТІ ТОВАРІВ
function couterIncrease (event) {
  conterProduct = conterProduct +=1;
  countValue.textContent = conterProduct;

  const itemPrice = document.querySelector('[data-price]');
  const dataPriceProduct = itemPrice.dataset.price  * conterProduct;
 console.log(dataPriceProduct)
 productPriceRender(dataPriceProduct); //Перемальовую ціну за один товар
const productPriceValue = productPriceValueArray();
totalSumMarkup(productPriceValue);
productPriceRender(dataPriceProduct);

const currentElementId = event.target.closest('[id]');
const actualId = currentElementId ? currentElementId.id : null;

console.log(event.target)

const currentElementPrice = event.target.closest('.js-price-value');
const actualPrice = currentElementPrice ? currentElementPrice.value : null;

// if (event.turget === currentElementPrice.currentTarget) {
//   console.log(actualPrice.value)
//   console.log('sdsdsd')
// }
// console.log(actualPrice.value)



};

// СЛУХАЧ ДЛЯ ВІДНІМАННЯ ТОВАРІВ ЗА КНОПКОЮ
buttonMinus.addEventListener('click', conterDecrease);

//ФУНКЦІЯ ДЛЯ ВІДНІМАННЯ КІЛЬКОСТІ ТОВАРІВ
function conterDecrease () {
  console.log(conterProduct)
  const itemPrice = document.querySelector('[data-price]');
let dataPriceProduct = itemPrice.dataset.price  * conterProduct;
console.log(dataPriceProduct);

  if (conterProduct <= 1) {
       return;
      } else {
        conterProduct = conterProduct -=1;
        countValue.textContent = conterProduct;
        dataPriceProduct = itemPrice.dataset.price  * conterProduct;
        console.log(dataPriceProduct)
        productPriceRender(dataPriceProduct); //Перемальовую ціну за один товар
        
        const productPriceValue = productPriceValueArray();
        console.log(productPriceValue);
        totalSumMarkup(productPriceValue);
        productPriceRender(dataPriceProduct);
      }
    }


    //Функція перемальовки ціни за одиницю продукту
function productPriceRender (amount){
  itemProductPrice.innerHTML = `${amount}`;
}



//ФУНКЦІЯ ПОВЕРНЕННЯ ЕЛЕМЕНТІВ З DOM-ДЕРЕВА ЗА КЛАСОМ ПЕРЕДАНИМ В ЗМІННУ itemAllProductsPrice
function productPriceValueArray() {
const productPricesArray = Array.from(itemAllProductsPrice).map(el => { // приводжу мої елемени до масиву.
  return Number(el.textContent); // проганяю через map дістаючи їх вміст (через textContent) приводячи одразу до числа
});
console.log(productPricesArray);
return productPricesArray; //Повертаю новостворений масив
}

