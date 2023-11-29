import { recordsDataForSearch, search, renderCards } from "./filters";

const ulTag = document.querySelector('.pagination-page-list');
let leftArrowPagination = '';
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
      liTag += `<li><button class="numb first-static-button-pagination visually-hidden"><span>1</span></button></li>`;
      liTag += `<li class="dots dots-before visually-hidden"><span>...</span></li>`;

  for (let pageLength = beforePages; pageLength <= afterPades; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    
    liTag += `<li id="${pageLength}"><button class="numb button-pagination"><span>${pageLength}</span></button></li>`;
  }
      liTag += `<li class="dots dots-pagination"><span>...</span></li>`;
      if (page < totalPages + 1) {
        liTag += `<li id="${totalPages-1}"><button class="numb button-pagination"><span>${totalPages-1}</span></button></li>`;
        if (page <= totalPages + 2) {
          liTag += `<li id="${totalPages}"><button class="numb button-pagination"><span>${totalPages}</span></button></li>`;
        }
      }
      liTag += `<li class="dots dots-after visually-hidden"><span>...</span></li>`;
      liTag += `<li><button class="numb last-static-button-pagination visually-hidden"><span>${totalPages}</span></button></li>`;
      liTag += `<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`;
    } else {
        liTag += `<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>`
        liTag += `<li class="dots dots-before visually-hidden"><span>...</span></li>`;
        liTag += `<li class="dots dots-pagination visually-hidden"><span>...</span></li>`;

        for(let i = 1; i<=totalPages; i++){
          liTag += `<li id="${i}"><button class="numb button-pagination"><span>${i}</span></button></li>`;
        }

        liTag += `<li class="dots dots-after visually-hidden"><span>...</span></li>`;
        liTag += `<li><button class="btn prev right-arrow-pagination"><span><i class="left"></i> > </span></button></li>`;
    } 
  
  
  
  
  ulTag.innerHTML = liTag;
  
  leftArrowPagination = document.querySelector('.left-arrow-pagination');
  rigthArrowPagination = document.querySelector('.right-arrow-pagination');
  const buttonsPagination = document.querySelectorAll('.button-pagination');
  const threeDots = document.querySelector('.dots-pagination');
  const dotsBefore = document.querySelector('.dots-before');
  const dotsAfter = document.querySelector('.dots-after');
  const firstStaticButtonPagination = document.querySelector('.first-static-button-pagination');
  const lastStaticButtonPagination =document.querySelector('.last-static-button-pagination'); 

  let massifButtonsPagination = [...buttonsPagination];

  let littleNumber = massifButtonsPagination[0];
  let littleNumberPlusOne = '';

  for (let i = 0; i < massifButtonsPagination.length; i++){
    if(Number(massifButtonsPagination[i].textContent) < Number(littleNumber.textContent)){
      littleNumber = massifButtonsPagination[i];
    } else if(Number(massifButtonsPagination[i].textContent) - 1 === Number(littleNumber.textContent)){
      littleNumberPlusOne = massifButtonsPagination[i];
    }};
    
    let littleNumberMass = [littleNumber, littleNumberPlusOne];

    let bigNumber = massifButtonsPagination[0];
    let bigNumberMinusOne = '';

    for (let i = 0; i < massifButtonsPagination.length; i++){
      if(Number(massifButtonsPagination[i].textContent) > Number(bigNumber.textContent)){
        bigNumber = massifButtonsPagination[i];
      }};

    for (let i = 0; i < massifButtonsPagination.length; i++){
      if(Number(massifButtonsPagination[i].textContent) + 1 === Number(bigNumber.textContent)){
        bigNumberMinusOne = massifButtonsPagination[i];
      }};

    let bigNumberMass = [bigNumberMinusOne, bigNumber];

  massifButtonsPagination.forEach((buttonPagination) => {
    buttonPagination.addEventListener('click', (event) => searchPagination(event, totalPages))
  });

  ///////////////////////////////  LEFT BUTTON ///////////////////////////////////////////////////////////////////////////////////////

  leftArrowPagination.addEventListener('click', async () => {
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    if(numbActiveBtn == 2){
      leftArrowPagination.classList.add('inactive-button');
      leftArrowPagination.disabled = true;
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
      if(!dotsAfter.classList.contains('visually-hidden')){
        threeDots.classList.add('visually-hidden');
      };
    } else{
      threeDots.classList.remove('visually-hidden');
      const newLi = document.createElement('li');
      newLi.setAttribute('id', `${numbActiveBtn - 1}`);
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.disabled = true;
      newBtn.innerHTML = `<span>${numbActiveBtn - 1}</span>`;
      newLi.appendChild(newBtn);
      
      if(!dotsBefore.classList.contains('visually-hidden') && littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        dotsBefore.insertAdjacentElement('afterend', newLi);
      } else if(!dotsBefore.classList.contains('visually-hidden') && !littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        threeDots.insertAdjacentElement('afterend', newLi);
      } else if(dotsBefore.classList.contains('visually-hidden') && !littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        threeDots.insertAdjacentElement('afterend', newLi);
      } else{
        threeDots.insertAdjacentElement('beforebegin', newLi);
      }
      massifButtonsPagination.unshift(newBtn);

      if(littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        littleNumberMass.unshift(newBtn);
      } else{
        bigNumberMass.unshift(newBtn);
      };
      newBtn.addEventListener('click', (event) => searchPagination(event, totalPages));
    }
    const activePage = massifButtonsPagination.find(btn => btn.classList.contains('active')).textContent;
    await searchForPagination(activePage);

    if(littleNumberMass.some(obj => Number(obj.textContent) === Number(activePage))){
      
      if(massifButtonsPagination.length > 4){
        let numberBtnForDelete = massifButtonsPagination[0];
      for (let i = 0; i < littleNumberMass.length; i++){
        if(Number(littleNumberMass[i].textContent) > Number(numberBtnForDelete.textContent)){
          numberBtnForDelete = littleNumberMass[i];
        }};

        const buttonForDelete = document.getElementById(`${numberBtnForDelete.textContent}`);
        ulTag.removeChild(buttonForDelete);
        massifButtonsPagination = massifButtonsPagination.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        
        littleNumberMass = littleNumberMass.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
      };
    } else{
      if(massifButtonsPagination.length > 4){
        let numberBtnForDelete = massifButtonsPagination[0];
      for (let i = 0; i < bigNumberMass.length; i++){
        if(Number(bigNumberMass[i].textContent) > Number(numberBtnForDelete.textContent)){
          numberBtnForDelete = bigNumberMass[i];
        }};
      
      
        const buttonForDelete = document.getElementById(`${numberBtnForDelete.textContent}`);
        ulTag.removeChild(buttonForDelete);
        massifButtonsPagination = massifButtonsPagination.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        
        bigNumberMass = bigNumberMass.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        
        dotsAfter.classList.remove('visually-hidden');
      };
    };

    if(massifButtonsPagination.some(obj => Number(obj.textContent) === 1)){
      dotsBefore.classList.add('visually-hidden');
    };
    });

  //////////////////////////////////  RIGTH BUTTON  ////////////////////////////////////////////////////////////////////////////////  

  rigthArrowPagination.addEventListener('click', async () => {
    const activeBtn = massifButtonsPagination.find(btn => btn.classList.contains('active'));
    
    const numbActiveBtn = Number(activeBtn.textContent);
    if(numbActiveBtn == totalPages - 1){
      rigthArrowPagination.classList.add('inactive-button');
      rigthArrowPagination.disabled = true;
    } else if(numbActiveBtn != 2){
      leftArrowPagination.classList.remove('inactive-button');
      leftArrowPagination.disabled = false;
    }
    activeBtn.classList.remove('active');
    activeBtn.disabled = false;
    const preActiveBth = massifButtonsPagination.find(btn => btn.textContent === String(numbActiveBtn + 1));
    if(preActiveBth){
      preActiveBth.classList.add('active');
      preActiveBth.disabled = true;
      if(!dotsBefore.classList.contains('visually-hidden')){
        threeDots.classList.add('visually-hidden');
      };
    } else{
      threeDots.classList.remove('visually-hidden');
      const newLi = document.createElement('li');
      newLi.setAttribute('id', `${numbActiveBtn + 1}`);
      const newBtn = document.createElement('button');
      newBtn.classList.add('numb', 'active', 'button-pagination');
      newBtn.disabled = true;
      newBtn.innerHTML = `<span>${numbActiveBtn + 1}</span>`;
      newLi.appendChild(newBtn);
      if(!dotsAfter.classList.contains('visually-hidden') && littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        threeDots.insertAdjacentElement('beforebegin', newLi);
      } else if(!dotsAfter.classList.contains('visually-hidden') && !littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        dotsAfter.insertAdjacentElement('beforebegin', newLi);
      } else if(dotsAfter.classList.contains('visually-hidden') && littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        threeDots.insertAdjacentElement('beforebegin', newLi);
      } else{
        dotsAfter.insertAdjacentElement('beforebegin', newLi);
      };
      massifButtonsPagination.push(newBtn);

      if(littleNumberMass.some(obj => Number(obj.textContent) === numbActiveBtn)){
        littleNumberMass.push(newBtn);
      } else{
        bigNumberMass.push(newBtn);
      };

      newBtn.addEventListener('click', (event) => searchPagination(event, totalPages));
    }
    const activePage = massifButtonsPagination.find(btn => btn.classList.contains('active')).textContent;
    await searchForPagination(activePage);

    if(littleNumberMass.some(obj => Number(obj.textContent) === Number(activePage))){
      
      if(massifButtonsPagination.length > 4){
        let numberBtnForDelete = massifButtonsPagination[0];
      for (let i = 0; i < littleNumberMass.length; i++){
        if(Number(littleNumberMass[i].textContent) < Number(numberBtnForDelete.textContent)){
          numberBtnForDelete = littleNumberMass[i];
        }};

        const buttonForDelete = document.getElementById(`${numberBtnForDelete.textContent}`);
        ulTag.removeChild(buttonForDelete);
        massifButtonsPagination = massifButtonsPagination.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        
        littleNumberMass = littleNumberMass.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        
        dotsBefore.classList.remove('visually-hidden');
      };
    } else{
      if(massifButtonsPagination.length > 4){
        let numberBtnForDelete = bigNumberMass[0];

      for (let i = 0; i < bigNumberMass.length; i++){
        if(Number(bigNumberMass[i].textContent) < Number(numberBtnForDelete.textContent)){
          numberBtnForDelete = bigNumberMass[i];
        }
      };
  
        const buttonForDelete = document.getElementById(`${numberBtnForDelete.textContent}`);
        ulTag.removeChild(buttonForDelete);
        massifButtonsPagination = massifButtonsPagination.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
        bigNumberMass = bigNumberMass.filter(obj => obj.textContent !== numberBtnForDelete.textContent);
      };
    }

    if(massifButtonsPagination.some(obj => Number(obj.textContent) === totalPages)){
      dotsAfter.classList.add('visually-hidden');
    };
    });
  workButtonPagination(leftArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages)
};



function workButtonPagination(leftArrowPagination, rigthArrowPagination, massifButtonsPagination, totalPages) {
  
  let numberStartPage = '';
  if(localStorage.getItem('data-for-search')){
    numberStartPage = JSON.parse(localStorage.getItem('data-for-search')).page;
  } else{
    numberStartPage = '1';
  };
  const btnStartPage = massifButtonsPagination.filter(btn => btn.textContent === String(numberStartPage));
  btnStartPage.map((btn) => {
    btn.classList.add('active');
    btn.disabled = true;
    
    if(btn.textContent === '1' && btn.textContent === String(totalPages)){
      leftArrowPagination.classList.add('inactive-button');
      rigthArrowPagination.classList.add('inactive-button');
      leftArrowPagination.disabled = true;
      rigthArrowPagination.disabled = true;
    }else if(btn.textContent === '1'){
      leftArrowPagination.classList.add('inactive-button');
      leftArrowPagination.disabled = true;
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
    leftArrowPagination.classList.add('inactive-button');
    rigthArrowPagination.classList.add('inactive-button');
    leftArrowPagination.disabled = true;
    rigthArrowPagination.disabled = true;
  }else if(event.currentTarget.textContent === '1'){
    leftArrowPagination.classList.add('inactive-button');
    rigthArrowPagination.classList.remove('inactive-button');
    leftArrowPagination.disabled = true;
    rigthArrowPagination.disabled = false;
  }else if(event.currentTarget.textContent === String(totalPages)){
    rigthArrowPagination.classList.add('inactive-button');
    leftArrowPagination.classList.remove('inactive-button');
    leftArrowPagination.disabled = false;
    rigthArrowPagination.disabled = true;
  }else{
    rigthArrowPagination.classList.remove('inactive-button');
    leftArrowPagination.classList.remove('inactive-button');
    leftArrowPagination.disabled = false;
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
};

