// -----------------------------2variant-----------------------
const ulTag = document.querySelector("ul");
let totalPages = 8;

function element(totalPages, page){
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPades = page;
   if(page > 1){
     liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="left"></i> < </span></li>`;
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