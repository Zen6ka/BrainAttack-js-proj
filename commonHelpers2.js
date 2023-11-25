var D=Object.defineProperty;var j=(t,e,s)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var P=(t,e,s)=>(j(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/cart-894ab5dc.js";import{a as S}from"./assets/vendor-27c5a77b.js";class v{constructor(e,s,o,c){P(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=c}async fetchBreeds(){try{const e=await S.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const A=document.querySelector(".search-form"),R=document.querySelector(".first-input-search"),w=document.querySelector(".filters-result"),x=document.querySelector(".first-select-search-not-focus"),L=document.querySelector(".button-categories"),H=document.querySelector(".span-button-categories"),O="products";let h="",C="",p=1,g=6,d={},f={},m={},u={};function B(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}B(h,C,p,g);async function N(){const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;u=await new v(O,e,p,g).fetchBreeds()}const U=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;w.innerHTML=t};async function W(){try{const t=localStorage.getItem("products-home-page-filters");t?d=JSON.parse(t):(await N(),d=u.results,console.log(u),localStorage.setItem("products-home-page-filters",JSON.stringify(d)))}catch(t){console.error("Error:",t.message)}console.log(d),J(d)}W();A.addEventListener("submit",async t=>{t.preventDefault(),h=R.value.trim(),B(h,C,p,g),await N(),f=u.results,console.log(f),J(f),u.totalPages===0&&U()});async function G(){try{const t=localStorage.getItem("categories-filters");if(t)m=JSON.parse(t);else{const e="",s=`${O}/categories`;m=await new v(s,e,p,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(m))}}catch(t){console.error("Error:",t.message)}K(m)}G();function K(t){const e=[];t.forEach(o=>{const c=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(c)}),x.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");X(s)}L.addEventListener("click",()=>Q(L,x));function Q(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>V(s,t,e))}function V(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function X(t){t.forEach(e=>{e.addEventListener("click",Y)})}function Y(t){const e=t.currentTarget.textContent;C=e.replace(/ /g,"_").replace(/\//g,"&"),H.innerHTML=`${e}`}function J(t){const e=[];t.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
                <div class = "div-img">
                <img src="${s.img}" loading="lazy" class="cardlist-img" alt="${s.name}" />
                </div>
                <h3 class="card-list-product">${s.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${s.category.replace(/_/g," ").replace(/&/g,"/")}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${s.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${s.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart add-to-cart-product ">
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${s.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`;e.push(o)}else{const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
                <div class = "div-img">
                <img src="${s.img}" loading="lazy" class="cardlist-img" alt="${s.name}" />
                </div>
                <h3 class="card-list-product">${s.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${s.category.replace(/_/g," ").replace(/&/g,"/")}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${s.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${s.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart add-to-cart-product ">
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${s.price}</p>
                <svg  class="visually-hidden">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`;e.push(o)}}),w.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`}document.addEventListener("DOMContentLoaded",async function(){const t=new v("products/popular?limit=5");try{const e=tt();if(e)k(e);else{const s=await t.fetchBreeds();Z(s),k(s)}b()}catch(e){console.error("Error:",e)}});function Z(t){localStorage.setItem("popularProducts",JSON.stringify(t)),b()}function tt(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function k(t){const e=document.querySelectorAll(".product-template");e.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((s,o)=>{const c=e[o];c.style.display="flex",c.querySelector(".product-image").src=s.img,c.querySelector(".product-name").textContent=s.name,c.querySelector(".category-value").textContent=s.category.replace("_"," "),c.querySelector(".size-value").textContent=s.size,c.querySelector(".popularity-value").textContent=s.popularity;const r={productId:s._id,productName:s.name,productImg:s.img,productCategory:s.category,productPrice:s.price,productSize:s.size,productIs10PercentOff:s.is10PercentOff,productPopularity:s.popularity};c.querySelector(".product-image-container").addEventListener("click",function(){localStorage.setItem("popul",JSON.stringify(r))});const l=c.querySelector(".add-to-cart-btn");l.onclick=function(){et(r)},l.setAttribute("data-product-id",s._id)})}function et(t){const e=JSON.parse(localStorage.getItem("cart"))||{};e[t.productId]?delete e[t.productId]:e[t.productId]=t,localStorage.setItem("cart",JSON.stringify(e)),b()}function b(){const t=JSON.parse(localStorage.getItem("cart"))||{};document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),c=s.querySelector(".icon-off"),r=s.querySelector(".icon-on");c&&r&&(t[o]?(s.classList.add("added-to-cart"),c.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),c.style.display="none",r.style.display="block"))})}const n={openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};n.openModalPolicy.addEventListener("click",()=>{E(),n.closeModalPolicyBtn.addEventListener("click",E)});n.openModalTerms.addEventListener("click",()=>{I(),n.closeModalTermsBtn.addEventListener("click",I)});function E(){n.policyLink.classList.toggle("is-hidden-policy")}function I(){n.termsLink.classList.toggle("is-hidden-policy")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",ot);i.closeModalBtn.addEventListener("click",$);i.backdrop.addEventListener("click",nt);const st="https://food-boutique.b.goit.study/api/";async function ot(){const t=this.dataset.productId;await rt(t),window.addEventListener("keydown",F),document.body.classList.add("show-modal"),M(t)}async function ct(t){try{return(await S.get(`${st}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function rt(t){const e=await ct(t);e&&(i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`,M(t))}function y(t){const e=t?"Remove from":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=e,i.addToCart.disabled=t}function M(t){const s=q().includes(t);y(s),i.addToCart.addEventListener("click",()=>{s?(it(t),y(!1),i.addToCart.removeEventListener("click",null)):(at(t),y(!0))})}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}function at(t){let e=q();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function it(t){let e=q();const s=e.indexOf(t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function $(){window.removeEventListener("keydown",F),document.body.classList.remove("show-modal")}function nt(t){t.currentTarget===t.target&&$()}function F(t){t.code==="Escape"&&$()}const lt=document.querySelector(".discount-container");let T=[];const dt=t=>{if(localStorage.getItem("addedProducts")){const e=JSON.parse(localStorage.getItem("addedProducts"));e.includes(t)||(e.push(t),localStorage.setItem("addedProducts",JSON.stringify(e)))}else localStorage.setItem("addedProducts",JSON.stringify([t]))},ut=t=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(t)?"icon-check":"icon-heroicons-solid_shopping-cart";async function mt(){try{let e=function(r){const{_id:a,name:l,img:z,price:_}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${z}" alt="${l}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${l}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${_}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${ut(a)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(e).join("")},o=function(){const r=s(T);lt.innerHTML=r};T=(await S.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const c=document.querySelectorAll(".discount-card-button");Array.from(c).forEach(r=>{r.addEventListener("click",a=>{dt(a.currentTarget.dataset.id)})})}catch(t){console.error("Error fetching discount products:",t.message)}}mt();const pt=document.querySelector("ul");let gt=8;function ft(t,e){let s="",o,c=e-1,r=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=c;a<=r;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),pt.innerHTML=s}ft(gt,1);
//# sourceMappingURL=commonHelpers2.js.map
