import axios from 'axios';

export class RequestToTheServer {
    baseUrl = 'https://food-boutique.b.goit.study/api/'

    constructor(endPoint, filters){
        this.endPoint = endPoint;
        this.filters = filters;
    }

    async fetchBreeds(){
    try{
        const response = await axios.get(`${this.baseUrl}${this.endPoint}?${this.filters}&limit=10`);
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


const products = "products";

let filters = "";
let productsHomePage ={};
let productsCategories = {};
let nameCategoty = '';

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
            const classFirstProducts = new RequestToTheServer(products, filters);
            productsHomePage = await classFirstProducts.fetchBreeds();
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    console.log(productsHomePage);
}

ifEmptyInput();




//////////////////////////////////////// INPUT ////////////////////////////////////////////////////////////////////





searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const productsFromTheLS = JSON.parse(localStorage.getItem('products-home-page-filters')).results;
    let resultSearch = localStorage.getItem('result-search-filters');
    const textInputFilters = inputSearch.value.trim();
    if(!textInputFilters && nameCategoty === ''){
        ifEmptyInput();
        filtersResult.innerHTML = '';
    } else if(!textInputFilters){
        console.log(productsHomePage);
        
        productsFromTheLS
        
        
        
    } else{
            filters = `keyword=${textInputFilters}&category=${nameCategoty}`;
            const classResultProductsWithFilters = new RequestToTheServer(products, filters);
            const inputResultSearch = await classResultProductsWithFilters.fetchBreeds();
            if(inputResultSearch.totalPages === 0){
                messageForError();
            } else {
                if(resultSearch){
                    const resultNewResultSearch = JSON.parse(resultSearch);
                    const resultInputResultSearch = inputResultSearch.results;
                    resultInputResultSearch.forEach((resultObject) => {
                        if(!resultNewResultSearch.find(newResult => newResult._id === resultObject._id)){
                            resultNewResultSearch.push(resultObject);
                        }
                    });
                    localStorage.setItem('result-search-filters', JSON.stringify(resultNewResultSearch));
                    // localStorage.removeItem('result-search-filters');
                    console.log(resultNewResultSearch);
                } else {
                    console.log(inputResultSearch.results);
                    localStorage.setItem('result-search-filters', JSON.stringify(inputResultSearch.results));
                };
                resultSearch = localStorage.getItem('result-search-filters');
                const resultSearchFromTheLS = JSON.parse(resultSearch);
                resultSearchFromTheLS.forEach((resultObject) => {
                    if(!productsFromTheLS.find(newResult => newResult._id === resultObject._id)){
                        productsFromTheLS.push(resultObject);
                    }
                });
            }
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
            const firstProductsCategoriesFilters = `${products}/categories`;
            const classFirstCategoriesProducts = new RequestToTheServer(firstProductsCategoriesFilters, filters);
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
    const nameCategotyForSelect = event.currentTarget.textContent;
    nameCategoty = nameCategotyForSelect.replace(/ /g, '_').replace(/\//g, '&');
    spanButtonCategories.innerHTML = `${nameCategotyForSelect}`;
    console.log(nameCategoty);
}

