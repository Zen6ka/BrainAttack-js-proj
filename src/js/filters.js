import axios from 'axios';

export class RequestToTheServer {
    baseUrl = 'https://food-boutique.b.goit.study/api/'

    constructor(endPoint){
        this.endPoint = endPoint;
    }

    async fetchBreeds(){
    try{
        const response = await axios.get(`${this.baseUrl}${this.endPoint}?limit=10`);
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

let productsHomePage ={};
let productsCategories = {};

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

async function ifEmptyInput() {
    try {
        const storageDataHomePage = localStorage.getItem('products-home-page-filters');
        if (storageDataHomePage) {
            productsHomePage = JSON.parse(storageDataHomePage);
            // localStorage.removeItem('products-home-page-filters');
        } else {
            const firstProductsFilters = "products";
            const classFirstProducts = new RequestToTheServer(firstProductsFilters);
            productsHomePage = await classFirstProducts.fetchBreeds();
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    console.log(productsHomePage);
}

ifEmptyInput();










searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const textInputFilters = inputSearch.value.trim();
    if(!textInputFilters){
        ifEmptyInput();
        filtersResult.innerHTML = '';
    } else{
        const valueFilters = `products?keyword=${textInputFilters}`;
            const classResultProductsWithFilters = new RequestToTheServer(valueFilters);
            productsHomePage = await classResultProductsWithFilters.fetchBreeds();
            // localStorage.setItem('products-with-filters', JSON.stringify(productsHomePage));
            if(productsHomePage.totalPages === 0){
                messageForError();
            }
    }
    console.log(productsHomePage.totalPages);
})



//////////////////////////////////////////////////////////////////////////////////////////////////////////////





async function ifEmptyCategories() {
    try {
        const storageDataCategories = localStorage.getItem('categories-filters');
        if (storageDataCategories) {
            productsCategories = JSON.parse(storageDataCategories);
            // localStorage.removeItem('categories-filters');
        } else {
            const firstProductsCategoriesFilters = "products/categories";
            const classFirstCategoriesProducts = new RequestToTheServer(firstProductsCategoriesFilters);
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
    console.log(2);
    const nameCategoty = event.currentTarget.textContent;
    console.log(nameCategoty);
    console.log(1)
}

