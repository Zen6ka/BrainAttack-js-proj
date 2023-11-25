async function getData() {
  const response = await fetch('/https://food-boutique.b.goit.study/api/products');
  const data = await response.json();
  return data;
}

async function main() {
  const productsData = await getData();
  let currentPage = 1;
  let rows = 9;
//   ------------ вывод информации ----------
  
  function displayList(arrData, rowPerPage, page) {
    const productsEl = document.querySelector('.products');
    postsEl.innerHTML = "";
    page--;
// вывод послдоватльно каждые 9 страниц
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((el) => {
      const productEl = document.createElement("div");
      productEl.classList.add("product");
      productEl.innerText = `${el.title}`;
      productsEl.appendChild(productEl);
    })
  }
//   ------------ пагинация ----------
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
  //   const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const totalPages = 8;
    const ulEl = document.createElement("ul");
    ulEl.classList.add('pagination');

    for (let i = 1; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl)
    }
    paginationEl.appendChild(ulEl)
  }
//   ------------ адресация кнопок ----------
  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add('pagination')
    liEl.innerText = page

    if (currentPage == page) liEl.classList.add('pagination--active');

    liEl.addEventListener('click', () => {
      currentPage = page
      displayList(postsData, rows, currentPage)

      let currentItemLi = document.querySelector('li.pagination__item--active');
      currentItemLi.classList.remove('pagination__item--active');

      liEl.classList.add('pagination__item--active');
    })

    return liEl;
  }

  //  displayList(postsData, rows, currentPage);
  displayPagination(postsData, rows);
}


// -----------------------------2var-----------------------
const ulTag = document.querySelector("btns");
let totalPages = 8;

function element(totalPages, page){
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPades = page;
   if(page > 1){
     liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="left"></i> < </span></li>`;
   }
    for (let pageLength = beforePages; pageLength <= afterPades; pageLength++){
    if(pageLength > totalPages){
      continue;
    }
    if(pageLength == 0){
      pageLength = pageLength + 1;
    }
    if(page == pageLength){
      activeLi = "active";
    }else{
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}"onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }
  if(page < totalPages){
    if(page < totalPages){
    liTag += `<li class="dots"><span>...</span></li>`;
    if(page < totalPages + 1){
      liTag += `<li class="numb" onclick="element(totalPages, ${page})"><span>7</span></li>`;  
    if(page <= totalPages +2){
      liTag += `<li class="numb" onclick="element(totalPages, ${page})"><span>8</span></li>`;
    }
  }
 }
  }
   if(page < totalPages){
     liTag += `<li class="btn next"onclick="element(totalPages, ${page +1})"><span><i class="right"></i> > </span></li>`;
   }
  ulTag.innerHTML = liTag;
}

element(totalPages, 2);