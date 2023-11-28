// -----------------------------2variant-----------------------
import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');
let leatArrowPagination = '';
let rigthArrowPagination = '';

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
  if(totalPages < 1){
    ulTag.innerHTML = '';
    return
  }
  let liTag = '';
  let beforePages = page - 1;
  let afterPades = page;
  
  liTag += `<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>`;
  
  for (let pageLength = beforePages; pageLength <= afterPades; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    
    liTag += `<li><button class="numb button-pagination"><span>${pageLength}</span></button></li>`;
  }
  if (5 < totalPages) {
    if (page < totalPages) {
      liTag += `<li class="dots dots-pagination"><span>...</span></li>`;
      if (page < totalPages + 1) {
        liTag += `<li><button class="numb button-pagination"><span>${totalPages-1}</span></button></li>`;
        if (page <= totalPages + 2) {
          liTag += `<li><button class="numb button-pagination"><span>${totalPages}</span></button></li>`;
        }
      }
    }
  }
  
  liTag += `<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`;
  
  ulTag.innerHTML = liTag;
  
  leatArrowPagination = document.querySelector('.left-arrow-pagination');
  rigthArrowPagination = document.querySelector('.right-arrow-pagination');
  const buttonsPagination = document.querySelectorAll('.button-pagination');
  const threeDots = document.querySelector('.dots-pagination');

  const massifButtonsPagination = [...buttonsPagination];

  leatArrowPagination.addEventListener('click', () => {
    // element(totalPages, page - 1);
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    activeBtn.classList.remove('active');
    const preActiveBth = massifButtonsPagination.find(btn => btn.textContent === String(numbActiveBtn - 1));
    if(preActiveBth){
      preActiveBth.classList.add('active');
    } else{
      const newLi = document.createElement('li');
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.innerHTML = `<span>${numbActiveBtn - 1}</span>`;
      newLi.appendChild(newBtn);
      threeDots.insertAdjacentElement('afterend', newLi);
      massifButtonsPagination.push(newBtn);
      console.log(massifButtonsPagination);
    }
    
    console.log(massifButtonsPagination.find(btn => btn.classList.contains('active')));
  });

  rigthArrowPagination.addEventListener('click', () => {
    // element(totalPages, page + 1);
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    activeBtn.classList.remove('active');
    const preActiveBth = massifButtonsPagination.find(btn => btn.textContent === String(numbActiveBtn + 1));
    if(preActiveBth){
      preActiveBth.classList.add('active');
    } else{
      const newLi = document.createElement('li');
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.innerHTML = `<span>${numbActiveBtn + 1}</span>`;
      newLi.appendChild(newBtn);
      threeDots.insertAdjacentElement('beforebegin', newLi);
      massifButtonsPagination.push(newBtn);
      console.log(massifButtonsPagination);
    }
    
    console.log(massifButtonsPagination.find(btn => btn.classList.contains('active')));
  });
  workButtonPagination(leatArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages)
}

// element(totalPages, 2);



function workButtonPagination(leatArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages) {
  
  const numberStartPage = JSON.parse(localStorage.getItem('data-for-search')).page;
  const btnStartPage = massifButtonsPagination.filter(btn => btn.textContent === String(numberStartPage));
  btnStartPage.map((btn) => {
    btn.classList.add('active')
    
    if(btn.textContent === '1' && btn.textContent === String(totalPages)){
      leatArrowPagination.classList.add('visually-hidden');
      rigthArrowPagination.classList.add('visually-hidden');
    }else if(btn.textContent === '1'){
      leatArrowPagination.classList.add('visually-hidden');
    }else if(btn.textContent === String(totalPages)){
      rigthArrowPagination.classList.add('visually-hidden');
    } 
  });
  
  massifButtonsPagination.forEach((buttonPagination) => {
    buttonPagination.addEventListener('click', (event) => searchPagination(event, totalPages))
  })
};

async function searchPagination(event, totalPages){
  event.currentTarget.removeEventListener('click', searchPagination);

  event.currentTarget.classList.add('active');

  console.log(totalPages);

  if(event.currentTarget.textContent === '1' && event.currentTarget.textContent === String(totalPages)){
    leatArrowPagination.classList.add('visually-hidden');
    rigthArrowPagination.classList.add('visually-hidden');
  }else if(event.currentTarget.textContent === '1'){
    leatArrowPagination.classList.add('visually-hidden');
    rigthArrowPagination.classList.remove('visually-hidden');
  }else if(event.currentTarget.textContent === String(totalPages)){
    rigthArrowPagination.classList.add('visually-hidden');
    leatArrowPagination.classList.remove('visually-hidden');
  }else{
    rigthArrowPagination.classList.remove('visually-hidden');
    leatArrowPagination.classList.remove('visually-hidden');
  }  
  
  const dataFromLS = JSON.parse(localStorage.getItem('data-for-search'));
  let page = event.currentTarget.textContent;
  recordsDataForSearch(dataFromLS.keyword, dataFromLS.category, page, dataFromLS.limit);
  const resultSearch = await search();
  const searchResult = resultSearch.results;
  localStorage.setItem('resultProductsFilrers', JSON.stringify(searchResult));
  renderCards();
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

