import axios, { all } from 'axios';

export class RequestToTheServer {
    baseUrl = 'https://food-boutique.b.goit.study/api/'

    constructor(endPoint, filters, page, limit){
        this.endPoint = endPoint;
        this.filters = filters;
        this.page = page;
        this.limit = limit;
    }

    async fetchBreeds(){
    try{
        const response = await axios.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);
        console.log(response.data);
        return response.data
    } catch(error){
        console.error("Error:", error.message);
    }
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const searchForm = document.querySelector('.search-form');
const inputSearch = document.querySelector('.first-input-search');
const filtersResult = document.querySelector('.filters-result');
const firctSelectSearch = document.querySelector('.first-select-search-not-focus');
const buttonCategories = document.querySelector('.button-categories');
const spanButtonCategories = document.querySelector('.span-button-categories');
const cardList = document.querySelector('.card-list');


const products = "products";

let keyword = '';
let category = '';
let page = 1;
let limit = 6;
let productsHomePage ={};
let inputResultSearch = {};
let productsCategories = {};
let fullInputResultSearch ={};

function recordsDataForSearch(keyword, category, page, limit){
    localStorage.setItem('data-for-search', JSON.stringify(
        {
            keyword, 
            category,
            page,
            limit
        }
        ))
};

recordsDataForSearch(keyword, category, page, limit);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function search () {
    const letForSearch = JSON.parse(localStorage.getItem('data-for-search'));
    const filters = `keyword=${letForSearch.keyword}&category=${letForSearch.category}`;
        const classResultProductsWithFilters = new RequestToTheServer(products, filters, page, limit);
        fullInputResultSearch = await classResultProductsWithFilters.fetchBreeds();
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const messageForError = () => {
    const htmlError = `<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;
    filtersResult.innerHTML = htmlError;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// HOME /// PAGE ////////////////////////////////////////////////////////////
async function ifEmptyInput() {
    try {
        const storageDataHomePage = localStorage.getItem('products-home-page-filters');
        if (storageDataHomePage) {
            productsHomePage = JSON.parse(storageDataHomePage);
            // localStorage.removeItem('products-home-page-filters');
        } else {
            await search();
            productsHomePage = fullInputResultSearch.results;
            console.log(fullInputResultSearch);
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    console.log(productsHomePage);
    renderCards(productsHomePage)
    // localStorage.removeItem('products-home-page-filters');
}

ifEmptyInput();

//////////////////////////////////////// INPUT ////////////////////////////////////////////////////////////////////

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    keyword = inputSearch.value.trim();
    recordsDataForSearch(keyword, category, page, limit);
    await search();
    inputResultSearch = fullInputResultSearch.results;
    console.log(inputResultSearch);
    if(fullInputResultSearch.totalPages === 0){
        messageForError();
    }
});

////////////////////////////////////////// ALL CATEGORIES ////////////////////////////////////////////////////////////////////

async function ifEmptyCategories() {
    try {
        const storageDataCategories = localStorage.getItem('categories-filters');
        if (storageDataCategories) {
            productsCategories = JSON.parse(storageDataCategories);
            // localStorage.removeItem('categories-filters');
        } else {
            const filters = '';
            const firstProductsCategoriesFilters = `${products}/categories`;
            const classFirstCategoriesProducts = new RequestToTheServer(firstProductsCategoriesFilters, filters, page, limit);
            productsCategories = await classFirstCategoriesProducts.fetchBreeds();
            localStorage.setItem('categories-filters', JSON.stringify(productsCategories));
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    renderCategories(productsCategories);
}

ifEmptyCategories();

function renderCategories(productsCategories){
    const listCategories = [];
    productsCategories.forEach((productsCategorie) => {
        const itemCategories = `<li class="li-first-select-search"><button class="button-li-filters">${productsCategorie.replace(/_/g, ' ').replace(/&/g, '/')}</button></li>`;
        listCategories.push(itemCategories)
    });
    firctSelectSearch.insertAdjacentHTML('beforeend', listCategories.join(''));
    const buttonsLiFilters = document.querySelectorAll('.button-li-filters');
    addListenerLi(buttonsLiFilters)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

buttonCategories.addEventListener('click', () => addListenerButton(buttonCategories, firctSelectSearch));

function addListenerButton(button, buttonList) {
    buttonList.classList.add('first-select-search');
    document.addEventListener('click', (event) => workButtonMenu(event, button, buttonList));
};

function workButtonMenu(event, button, listButtonMenu) {
    if(!button.contains(event.target)&&!listButtonMenu.contains(event.target)){
        listButtonMenu.classList.remove('first-select-search')
    } else if(listButtonMenu.contains(event.target)){
        setTimeout(() => {
            listButtonMenu.classList.remove('first-select-search')
        }, 100)
    }
};

function addListenerLi(buttonsLiFilters){
    buttonsLiFilters.forEach((buttonLiFilters) => {
    buttonLiFilters.addEventListener('click', renderEndPoint)
})
};

function renderEndPoint(event){
    const nameCategoryForSelect = event.currentTarget.textContent;
    category = nameCategoryForSelect.replace(/ /g, '_').replace(/\//g, '&');
    spanButtonCategories.innerHTML = `${nameCategoryForSelect}`;
}

///////////////////////////////////////////////////////  RENDER  CARDS  /////////////////////////////////////////////////////////////

function renderCards(products) {
    const listResult = [];
    products.forEach((product) => {
        const itemResult = `<li class="card-list-item id-for-del" data-id=${product._id}>
                <div class = "div-img">
                <img src="${product.img}" loading="lazy" class="cardlist-img" alt="${product.name}" />
                </div>
                <h3 class="card-list-product">${product.name}</h3>
                <ul class="cardlist-descr">
                    <li class ="li-p-cards"><span class ="span-p-cards">Category: </span>${product.category.replace(/_/g, ' ').replace(/&/g, '/')}</li>
                    <li class ="li-p-cards"><span class ="span-p-cards">Size: </span>${product.size}</li>
                    <li class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${product.popularity}</li>
                </ul>
                <div class="cartlist-btn"><button class="cardlist-add-cart add-to-cart-product ">
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-ic_baseline-search#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                </li>`;
                listResult.push(itemResult)
    });
    cardList.innerHTML = listResult.join(" ")
};


// localStorage.clear()









// const allValueInputLS = localStorage.getItem('all-value-input');

// async function functionInputSearch(textInputFilters, allValueInputLS, nameCategory){
    // let resultSearch = localStorage.getItem('result-search-filters');
    // if(!textInputFilters && nameCategory === ''){
    //     ifEmptyInput();
    //     filtersResult.innerHTML = '';
    // } else if(allValueInputLS){
    //         const allValueInput = JSON.parse(allValueInputLS);
    //         allValueInput.push(textInputFilters)
    //         const uniqueAllValueInput = allValueInput.filter(
    //             (value, index, array) => array.indexOf(value) === index
    //         );
    //         localStorage.setItem('all-value-input', JSON.stringify(uniqueAllValueInput));
    //         // localStorage.removeItem('all-value-input');
    //         console.log(uniqueAllValueInput);
    //         if(allValueInput.find(value => value === textInputFilters) && resultSearch){
    //             const massOldResult = JSON.parse(resultSearch);
    //             inputResultSearch = massOldResult.filter(
    //                 obj => obj.name.toLowerCase().includes(textInputFilters.toLowerCase())
    //                 ).filter(obj => obj.category === nameCategory);
    //             if(Object.keys(inputResultSearch).length === 0){
    //                 await searchWithFilters(resultSearch, textInputFilters, nameCategory)
    //             }
    //             console.log(inputResultSearch);
    //         } else {
    //             searchWithFilters(resultSearch, textInputFilters, nameCategory)
    //         }
    //     } else {
    //         console.log([textInputFilters]);
    //         localStorage.setItem('all-value-input', JSON.stringify([textInputFilters]));
    //         searchWithFilters(resultSearch, textInputFilters, nameCategory)
    // }
    // };











// const productsFromTheLS = JSON.parse(localStorage.getItem('products-home-page-filters')).results;
// resultSearch = localStorage.getItem('result-search-filters');
//             const resultSearchFromTheLS = JSON.parse(resultSearch);
//             resultSearchFromTheLS.forEach((resultObject) => {
//                 if(!productsFromTheLS.find(newResult => newResult._id === resultObject._id)){
//                     productsFromTheLS.push(resultObject);
//                 }
//             });






// async function searchWithFilters(textInputFilters, nameCategory) {
    



//         if(fullInputResultSearch.totalPages === 0){
//             messageForError();
//         } else {
//             if(resultSearch){
//                 const resultNewResultSearch = JSON.parse(resultSearch);
//                 const resultInputResultSearch = inputResultSearch;
//                 resultInputResultSearch.forEach((resultObject) => {
//                     if(!resultNewResultSearch.find(newResult => newResult._id === resultObject._id)){
//                         resultNewResultSearch.push(resultObject);
//                     }
//                 });
//                 localStorage.setItem('result-search-filters', JSON.stringify(resultNewResultSearch));
//                 // localStorage.removeItem('result-search-filters');
//                 console.log(resultNewResultSearch);
//             } else {
//                 console.log(inputResultSearch);
//                 localStorage.setItem('result-search-filters', JSON.stringify(inputResultSearch));
//             };
//         }
//         console.log(inputResultSearch)
// }