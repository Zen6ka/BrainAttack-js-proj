// -----------------------------2variant-----------------------
import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');
let totalPages = 8;
let fullInputResultSearch ={};
let searchResult = {};

function element(totalPages, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPades = page;
  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(totalPages, ${
      page - 1
    })"><span><i class="left"></i> < </span></li>`;
  }
  // if(page > 1){
  //   if(page < totalPages + 1)
  //   liTag += `<li class="numb" onclick="element(totalPages, ${page})"><span>1</span></li>`;
  //      if(page > 2){
  //     liTag += `<li class="numb" onclick="element(totalPages, ${page})"><span>2</span></li>`;
  //     if(page > totalPages - 8){
  //     liTag += `<li class="dots"><span>...</span></li>`;
  //    }
  //   }
  // }
  for (let pageLength = beforePages; pageLength <= afterPades; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    // onclick="element(totalPages, ${pageLength})"
    liTag += `<li class="numb button-pagination ${activeLi}"               ><span>${pageLength}</span></li>`;
  }
  if (page < totalPages) {
    if (page < totalPages) {
      liTag += `<li class="dots"><span>...</span></li>`;
      if (page < totalPages + 1) {
        liTag += `<li class="numb button-pagination" onclick="element(totalPages, ${page})"><span>7</span></li>`;
        if (page <= totalPages + 2) {
          liTag += `<li class="numb button-pagination" onclick="element(totalPages, ${page})"><span>8</span></li>`;
        }
      }
    }
  }
  if (page < totalPages) {
    liTag += `<li class="btn next"onclick="element(totalPages, ${
      page + 1
    })"><span><i class="right"></i> > </span></li>`;
  }
  ulTag.innerHTML = liTag;
  workButtonPagination()
}

element(totalPages, 2);

function workButtonPagination() {
  const buttonsPagination = document.querySelectorAll('.button-pagination');
  [...buttonsPagination].forEach((buttonPagination) => {
    buttonPagination.addEventListener('click', async (event) => {
      const dataFromLS = JSON.parse(localStorage.getItem('data-for-search'));
      console.log(dataFromLS);
      let page = event.currentTarget.textContent;
      console.log(page);
      recordsDataForSearch(dataFromLS.keyword, dataFromLS.category, page, dataFromLS.limit);
      let resultSearch = await search();
      console.log(resultSearch);
      searchResult = resultSearch.results;
      renderCards(searchResult);
    })
  })
};
