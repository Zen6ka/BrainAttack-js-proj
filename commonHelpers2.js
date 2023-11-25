var j=Object.defineProperty;var H=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var I=(t,e,s)=>(H(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/cart-85e27a4b.js";import{a as q}from"./assets/vendor-27c5a77b.js";class ${constructor(e,s,o,r){I(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const e=await q.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const R=document.querySelector(".search-form"),U=document.querySelector(".first-input-search"),M=document.querySelector(".filters-result"),N=document.querySelector(".first-select-search-not-focus"),E=document.querySelector(".button-categories"),Q=document.querySelector(".span-button-categories"),J="products";let h="",m="",p=1,l=6,u={},S={},y={},d={},W=window.matchMedia("(min-width: 768px)").matches,G=window.matchMedia("(min-width: 1280px)").matches;G?l=9:W?l=8:l=6;function P(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}P(h,m,p,l);async function v(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;d=await new $(J,e,p,l).fetchBreeds()}catch(t){f(),console.error("Error:",t.message)}}const f=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;M.innerHTML=t};async function K(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=l?u=e.slice(0,l):(await v(),u=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(u)))}else await v(),u=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(u));L(u)}catch(t){f(),console.error("Error:",t.message)}}K();R.addEventListener("submit",async t=>{t.preventDefault(),h=U.value.trim(),P(h,m,p,l),await v(),S=d.results,L(S),d.totalPages===0&&f()});async function V(){try{const t=localStorage.getItem("categories-filters");if(t)y=JSON.parse(t);else{const e="",s=`${J}/categories`;y=await new $(s,e,p,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(y))}X(y)}catch(t){f(),console.error("Error:",t.message)}}V();function X(t){const e=[];t.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(r)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),N.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");tt(s)}E.addEventListener("click",()=>Y(E,N));function Y(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Z(s,t,e))}function Z(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function tt(t){t.forEach(e=>{e.addEventListener("click",et)})}async function et(t){const e=t.currentTarget.textContent;m=e.replace(/ /g,"_").replace(/\//g,"&"),Q.innerHTML=`${e}`,m==="Show_all"&&(m=""),P(h,m,p,l),await v(),S=d.results,L(S),d.totalPages===0&&f()}function L(t){const e=[];t.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${s._id}>
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
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${s._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${s.price}</p>
                <svg  class="visually-hidden">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`;e.push(o)}}),M.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,st(t)}function st(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=t.find(n=>n._id===r),a=localStorage.getItem("card");if(a){const n=JSON.parse(a);n.push(c),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",async function(){const t=new $("products/popular?limit=5");try{const e=rt();if(e)T(e);else{const s=await t.fetchBreeds();ot(s),T(s)}w()}catch(e){console.error("Error:",e)}});function ot(t){localStorage.setItem("popularProducts",JSON.stringify(t)),w()}function rt(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function T(t){const e=document.querySelectorAll(".product-template");e.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((s,o)=>{const r=e[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={productId:s._id,productName:s.name,productImg:s.img,productCategory:s.category,productPrice:s.price,productSize:s.size,productIs10PercentOff:s.is10PercentOff,productPopularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){localStorage.setItem("popul",JSON.stringify(c))});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){ct(c)},n.setAttribute("data-product-id",s._id)})}function ct(t){let e=JSON.parse(localStorage.getItem("cart"))||{};e[t.productId]?delete e[t.productId]:e[t.productId]=t,localStorage.setItem("cart",JSON.stringify(e)),w()}function w(){const t=JSON.parse(localStorage.getItem("cart"))||{};document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on");r&&c&&(t[o]?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}const g={openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};g.openModalPolicy.addEventListener("click",()=>{O(),g.closeModalPolicyBtn.addEventListener("click",O)});g.openModalTerms.addEventListener("click",()=>{x(),g.closeModalTermsBtn.addEventListener("click",x)});function O(){g.policyLink.classList.toggle("is-hidden-policy")}function x(){g.termsLink.classList.toggle("is-hidden-policy")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>nt(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",k);i.backdrop.addEventListener("click",gt);const at=document.querySelectorAll(".cardlist-img");at.forEach(t=>{t.addEventListener("click",e=>handleImageClick(e))});const it="https://food-boutique.b.goit.study/api/";async function nt(t){window.addEventListener("keydown",A),document.body.classList.add("show-modal"),await dt(t),_(t),F()}async function lt(t){try{return(await q.get(`${it}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function dt(t){const e=await lt(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=_(t),o=b().includes(t);C(s,o)}}function C(t,e){const s=t?"Remove from":e?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=t}function _(t){const s=b().includes(t);return i.addToCart.addEventListener("click",()=>{s?(mt(t),C(!1,!1)):(ut(t),C(!0,!0))}),s}function b(){return JSON.parse(localStorage.getItem("cart"))||[]}function ut(t){let e=b();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function mt(t){let e=b();const s=e.indexOf(t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function k(){window.removeEventListener("keydown",A),document.body.classList.remove("show-modal"),F()}function gt(t){t.currentTarget===t.target&&k()}function A(t){t.code==="Escape"&&k()}function pt(){return document.body.classList.contains("show-modal")}function F(){document.body.style.overflow=pt()?"hidden":""}const ft=document.querySelector(".discount-container");let B=[];const yt=t=>{if(localStorage.getItem("addedProducts")){const e=JSON.parse(localStorage.getItem("addedProducts"));e.includes(t)||(e.push(t),localStorage.setItem("addedProducts",JSON.stringify(e)))}else localStorage.setItem("addedProducts",JSON.stringify([t]))},ht=t=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(t)?"icon-check":"icon-heroicons-solid_shopping-cart";async function St(){try{let e=function(c){const{_id:a,name:n,img:z,price:D}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${z}" alt="${n}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${n}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${D}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${ht(a)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},o=function(){const c=s(B);ft.innerHTML=c};B=(await q.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{yt(a.currentTarget.dataset.id)})})}catch(t){console.error("Error fetching discount products:",t.message)}}St();const vt=document.querySelector("ul");let bt=8;function Ct(t,e){let s="",o,r=e-1,c=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),vt.innerHTML=s}Ct(bt,1);
//# sourceMappingURL=commonHelpers2.js.map
