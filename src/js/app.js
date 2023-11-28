// -----------------------------2variant-----------------------
import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');
let leatArrowPagination = '';
let rigthArrowPagination = '';


export function element(totalPages, page) {
  if(totalPages < 1){
    ulTag.innerHTML = '';
    return
  }
  let liTag = '';
  let beforePages = page - 1;
  let afterPades = page;
  
  

  
    if (totalPages > 5) {
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
      liTag += `<li class="dots dots-pagination"><span>...</span></li>`;
      if (page < totalPages + 1) {
        liTag += `<li><button class="numb button-pagination"><span>${totalPages-1}</span></button></li>`;
        if (page <= totalPages + 2) {
          liTag += `<li><button class="numb button-pagination"><span>${totalPages}</span></button></li>`;
        }
      }
      liTag += `<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`;
    } else {
        liTag += `<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>`
        for(let i = 1; i<=totalPages; i++){
          liTag += `<li><button class="numb button-pagination"><span>${i}</span></button></li>`;
        }
        
        liTag += `<li class="dots dots-pagination"><span>...</span></li>
        <li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`;
    } 
  
  
  
  
  ulTag.innerHTML = liTag;
  
  leatArrowPagination = document.querySelector('.left-arrow-pagination');
  rigthArrowPagination = document.querySelector('.right-arrow-pagination');
  const buttonsPagination = document.querySelectorAll('.button-pagination');
  const threeDots = document.querySelector('.dots-pagination');

  if(totalPages <= 3){
    threeDots.classList.add('visually-hidden');
  };

  const massifButtonsPagination = [...buttonsPagination];
  massifButtonsPagination.forEach((buttonPagination) => {
    buttonPagination.addEventListener('click', (event) => searchPagination(event, totalPages))
  });

  leatArrowPagination.addEventListener('click', async () => {
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    if(numbActiveBtn == 2){
      leatArrowPagination.classList.add('inactive-button');
      leatArrowPagination.disabled = true;
    } else if(numbActiveBtn != totalPages - 1){
      rigthArrowPagination.classList.remove('inactive-button');
      rigthArrowPagination.disabled = false;
    }
    
    activeBtn.classList.remove('active');
    activeBtn.disabled = false;
    const preActiveBth = massifButtonsPagination.find(btn => btn.textContent === String(numbActiveBtn - 1));
    if(preActiveBth){
      preActiveBth.classList.add('active');
      preActiveBth.disabled = true;
    } else{
      const newLi = document.createElement('li');
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.disabled = true;
      newBtn.innerHTML = `<span>${numbActiveBtn - 1}</span>`;
      newLi.appendChild(newBtn);
      threeDots.insertAdjacentElement('afterend', newLi);
      massifButtonsPagination.push(newBtn);
      newBtn.addEventListener('click', (event) => searchPagination(event, totalPages));
    }
    const activePage = massifButtonsPagination.find(btn => btn.classList.contains('active')).textContent;
    await searchForPagination(activePage);
    });

  rigthArrowPagination.addEventListener('click', async () => {
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    if(numbActiveBtn == totalPages - 1){
      rigthArrowPagination.classList.add('inactive-button');
      rigthArrowPagination.disabled = true;
    } else if(numbActiveBtn != 2){
      leatArrowPagination.classList.remove('inactive-button');
      leatArrowPagination.disabled = false;
    }
    activeBtn.classList.remove('active');
    activeBtn.disabled = false;
    const preActiveBth = massifButtonsPagination.find(btn => btn.textContent === String(numbActiveBtn + 1));
    if(preActiveBth){
      preActiveBth.classList.add('active');
      preActiveBth.disabled = true;
    } else{
      const newLi = document.createElement('li');
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.disabled = true;
      newBtn.innerHTML = `<span>${numbActiveBtn + 1}</span>`;
      newLi.appendChild(newBtn);
      threeDots.insertAdjacentElement('beforebegin', newLi);
      massifButtonsPagination.push(newBtn);
      newBtn.addEventListener('click', (event) => searchPagination(event, totalPages));
    }
    const activePage = massifButtonsPagination.find(btn => btn.classList.contains('active')).textContent;
    await searchForPagination(activePage);
    });
  workButtonPagination(leatArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages)
}

// element(totalPages, 2);



function workButtonPagination(leatArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages) {
  
  const numberStartPage = JSON.parse(localStorage.getItem('data-for-search')).page;
  const btnStartPage = massifButtonsPagination.filter(btn => btn.textContent === String(numberStartPage));
  btnStartPage.map((btn) => {
    btn.classList.add('active');
    btn.disabled = true;
    
    if(btn.textContent === '1' && btn.textContent === String(totalPages)){
      leatArrowPagination.classList.add('inactive-button');
      rigthArrowPagination.classList.add('inactive-button');
      leatArrowPagination.disabled = true;
      rigthArrowPagination.disabled = true;
    }else if(btn.textContent === '1'){
      leatArrowPagination.classList.add('inactive-button');
      leatArrowPagination.disabled = true;
    }else if(btn.textContent === String(totalPages)){
      rigthArrowPagination.classList.add('inactive-button');
      rigthArrowPagination.disabled = true;
    } 
  });
};

async function searchPagination(event, totalPages){
  event.currentTarget.removeEventListener('click', searchPagination);
  event.currentTarget.disabled = true;
  event.currentTarget.classList.add('active');

  if(event.currentTarget.textContent === '1' && event.currentTarget.textContent === String(totalPages)){
    leatArrowPagination.classList.add('inactive-button');
    rigthArrowPagination.classList.add('inactive-button');
    leatArrowPagination.disabled = true;
    rigthArrowPagination.disabled = true;
  }else if(event.currentTarget.textContent === '1'){
    leatArrowPagination.classList.add('inactive-button');
    rigthArrowPagination.classList.remove('inactive-button');
    leatArrowPagination.disabled = true;
    rigthArrowPagination.disabled = false;
  }else if(event.currentTarget.textContent === String(totalPages)){
    rigthArrowPagination.classList.add('inactive-button');
    leatArrowPagination.classList.remove('inactive-button');
    leatArrowPagination.disabled = false;
    rigthArrowPagination.disabled = true;
  }else{
    rigthArrowPagination.classList.remove('inactive-button');
    leatArrowPagination.classList.remove('inactive-button');
    leatArrowPagination.disabled = false;
    rigthArrowPagination.disabled = false;
  }  
  
  
  let page = event.currentTarget.textContent;
  await searchForPagination(page);
  const buttonsPaginations = document.querySelectorAll('.button-pagination');
  [...buttonsPaginations].forEach((btn) => {
    const hasBtnActive = btn.classList.contains('active');
    if(hasBtnActive && btn.textContent !== page){
      btn.classList.remove('active');
      btn.disabled = false;
      btn.addEventListener('click', searchPagination)
    }else if(!hasBtnActive){
      btn.addEventListener('click', searchPagination)
    }
  });
}

async function searchForPagination(page){
  const dataFromLS = JSON.parse(localStorage.getItem('data-for-search'));
  recordsDataForSearch(dataFromLS.keyword, dataFromLS.category, page, dataFromLS.limit);
  const resultSearch = await search();
  const searchResult = resultSearch.results;
  localStorage.setItem('resultProductsFilrers', JSON.stringify(searchResult));
  renderCards();
}

