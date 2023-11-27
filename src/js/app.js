// -----------------------------2variant-----------------------
import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');

// export function renderPagination(totalPages) {
//   let liTag = '';
//   if (page > 1) {
//     liTag += `<li class="btn prev" onclick="element(totalPages, ${
//       page - 1
//     })"><span><i class="left"></i> < </span></li>`;
//   }
//   ulTag.innerHTML = liTag;
  
//   workButtonPagination()
// }

export function element(totalPages, page) {
  let liTag = '';
  let beforePages = page - 1;
  let afterPades = page;
  if (page > 1) {
    liTag += `<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>`;
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
    
    liTag += `<li><button class="numb button-pagination"><span>${pageLength}</span></button></li>`;
  }
  if (page < totalPages) {
    if (page < totalPages) {
      liTag += `<li class="dots"><span>...</span></li>`;
      if (page < totalPages + 1) {
        liTag += `<li><button class="numb button-pagination"><span>${totalPages-1}</span></button></li>`;
        if (page <= totalPages + 2) {
          liTag += `<li><button class="numb button-pagination"><span>${totalPages}</span></button></li>`;
        }
      }
    }
  }
  if (page < totalPages) {
    liTag += `<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`;
  }
  ulTag.innerHTML = liTag;
  
  const leatArrowPagination = document.querySelector('.left-arrow-pagination');
  const rigthArrowPagination = document.querySelector('.right-arrow-pagination');

  leatArrowPagination.addEventListener('click', () => {
    element(totalPages, page - 1)
  });
  rigthArrowPagination.addEventListener('click', () => {
    element(totalPages, page + 1)
  });
  workButtonPagination(leatArrowPagination)
}

// element(totalPages, 2);



function workButtonPagination(leatArrowPagination) {
  const buttonsPagination = document.querySelectorAll('.button-pagination');
  const numberStartPage = JSON.parse(localStorage.getItem('data-for-search')).page;
  // [...buttonsPagination].forEach(btn => console.log(btn.textContent));
  const btnStartPage = [...buttonsPagination].filter(btn => btn.textContent === String(numberStartPage));
  btnStartPage.map((btn) => {
    btn.classList.add('active')
    if(btn.textContent === '1'){
      leatArrowPagination.classList.add('visually-hidden')
    }
  });
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
