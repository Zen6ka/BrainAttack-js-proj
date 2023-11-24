import axios, { all } from 'axios';

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
let inputResultSearch = {};
let productsCategories = {};
let nameCategory = '';

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
            const fullProductsHomePage = await classFirstProducts.fetchBreeds();
            productsHomePage = fullProductsHomePage.results;
            localStorage.setItem('products-home-page-filters', JSON.stringify(productsHomePage));
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
    console.log(productsHomePage);
}

ifEmptyInput();




//////////////////////////////////////// INPUT ////////////////////////////////////////////////////////////////////





searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInputFilters = inputSearch.value.trim();
    const allValueInputLS = localStorage.getItem('all-value-input');
    
    functionInputSearch(textInputFilters, allValueInputLS, nameCategory)
});



async function functionInputSearch(textInputFilters, allValueInputLS, nameCategory){
let resultSearch = localStorage.getItem('result-search-filters');
if(!textInputFilters && nameCategory === ''){
    ifEmptyInput();
    filtersResult.innerHTML = '';
} else if(allValueInputLS){
        const allValueInput = JSON.parse(allValueInputLS);
        allValueInput.push(textInputFilters)
        const uniqueAllValueInput = allValueInput.filter(
            (value, index, array) => array.indexOf(value) === index
        );
        localStorage.setItem('all-value-input', JSON.stringify(uniqueAllValueInput));
        // localStorage.removeItem('all-value-input');
        console.log(uniqueAllValueInput);
        if(allValueInput.find(value => value === textInputFilters) && resultSearch){
            const massOldResult = JSON.parse(resultSearch);
            inputResultSearch = massOldResult.filter(
                obj => obj.name.toLowerCase().includes(textInputFilters.toLowerCase())
                ).filter(obj => obj.category === nameCategory);
            if(Object.keys(inputResultSearch).length === 0){
                await searchWithFilters(resultSearch, textInputFilters, nameCategory)
            }
            console.log(inputResultSearch);
        } else {
            searchWithFilters(resultSearch, textInputFilters, nameCategory)
        }
    } else {
        console.log([textInputFilters]);
        localStorage.setItem('all-value-input', JSON.stringify([textInputFilters]));
        searchWithFilters(resultSearch, textInputFilters, nameCategory)
}
};


async function searchWithFilters(resultSearch, textInputFilters, nameCategory) {
    filters = `keyword=${textInputFilters}&category=${nameCategory}`;
        const classResultProductsWithFilters = new RequestToTheServer(products, filters);
        const fullInputResultSearch = await classResultProductsWithFilters.fetchBreeds();
        inputResultSearch = fullInputResultSearch.results;
        console.log(inputResultSearch);
        if(fullInputResultSearch.totalPages === 0){
            messageForError();
        } else {
            if(resultSearch){
                const resultNewResultSearch = JSON.parse(resultSearch);
                const resultInputResultSearch = inputResultSearch;
                resultInputResultSearch.forEach((resultObject) => {
                    if(!resultNewResultSearch.find(newResult => newResult._id === resultObject._id)){
                        resultNewResultSearch.push(resultObject);
                    }
                });
                localStorage.setItem('result-search-filters', JSON.stringify(resultNewResultSearch));
                // localStorage.removeItem('result-search-filters');
                console.log(resultNewResultSearch);
            } else {
                console.log(inputResultSearch);
                localStorage.setItem('result-search-filters', JSON.stringify(inputResultSearch));
            };
        }
        console.log(inputResultSearch)
}



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
    const nameCategoryForSelect = event.currentTarget.textContent;
    nameCategory = nameCategoryForSelect.replace(/ /g, '_').replace(/\//g, '&');
    spanButtonCategories.innerHTML = `${nameCategoryForSelect}`;
}

// localStorage.clear()










// const productsFromTheLS = JSON.parse(localStorage.getItem('products-home-page-filters')).results;
// resultSearch = localStorage.getItem('result-search-filters');
//             const resultSearchFromTheLS = JSON.parse(resultSearch);
//             resultSearchFromTheLS.forEach((resultObject) => {
//                 if(!productsFromTheLS.find(newResult => newResult._id === resultObject._id)){
//                     productsFromTheLS.push(resultObject);
//                 }
//             });