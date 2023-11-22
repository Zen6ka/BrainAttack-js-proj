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

const searchForm = document.querySelector('.search-form');
const inputSearch = document.querySelector('.input-search');
const buttonSearch = document.querySelector('.button-search');
const filtersResult = document.querySelector('.filters-result');
let productsHomePage ={};

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

async function ifEmptyInput() {
    try {
        const storageDataHomePage = localStorage.getItem('products-home-page-filters');
        if (storageDataHomePage) {
            productsHomePage = JSON.parse(storageDataHomePage);
            // localStorage.removeItem('products-home-page-filters');
        } else {
            console.log(1);
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



