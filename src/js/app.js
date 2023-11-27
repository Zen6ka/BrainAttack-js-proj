// -----------------------------2variant-----------------------
import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');
let totalPages = 8;

function element(totalPages, page) {
  let liTag = '';
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
    
    // onclick="element(totalPages, ${pageLength})"
    liTag += `<li class="numb button-pagination"               ><span>${pageLength}</span></li>`;
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
    buttonPagination.addEventListener('click', searchPagination)
  })
};

async function searchPagination(event){
  event.currentTarget.removeEventListener('click', searchPagination);

  event.currentTarget.classList.add('active');
  
  const dataFromLS = JSON.parse(localStorage.getItem('data-for-search'));
  let page = event.currentTarget.textContent;
  recordsDataForSearch(dataFromLS.keyword, dataFromLS.category, page, dataFromLS.limit);
  const resultSearch = await search();
  const searchResult = resultSearch.results;
  renderCards(searchResult);

  const buttonsPaginations = document.querySelectorAll('.button-pagination');
  [...buttonsPaginations].forEach((btn) => {
    const hasBtnActive = btn.classList.contains('active');
    if(hasBtnActive && btn.textContent !== page){
      btn.classList.remove('active');
      btn.addEventListener('click', searchPagination)
    }else if(!hasBtnActive){
      btn.addEventListener('click', searchPagination)
    }
  });
}
