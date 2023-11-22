import axios from 'axios';


export class RequestToTheServer {
    baseUrl = 'https://food-boutique.b.goit.study/api/'

    constructor(endPoint){
        this.endPoint = endPoint;
    }

    async fetchBreeds(){
    try{
        const response = await axios.get(`${this.baseUrl}${this.endPoint}`);
        console.log(response.data);
        return response.data
    } catch(error){
        console.error("Error:", error.message);
    }
    }
};


const inputSearch = document.querySelector('.input-search');
const buttonSearch = document.querySelector('.button-search');
let productsHomePage ={};

async function ifEmptyInput() {
    try {
        const storageDataHomePage = localStorage.getItem('products-home-page-filters');
        if (storageDataHomePage) {
            productsHomePage = JSON.parse(storageDataHomePage);
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










buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    const textInputFilters = inputSearch.value.trim();
    if(!textInputFilters){
        ifEmptyInput();
    } else{
        console.log(textInputFilters);
    }
})