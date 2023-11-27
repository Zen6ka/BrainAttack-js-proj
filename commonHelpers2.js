var Y=Object.defineProperty;var Z=(t,e,s)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(Z(t,typeof e!="symbol"?e+"":e,s),s);import{s as u}from"./assets/icons-9c5ec44c.js";import{a as A}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",N);n.backdrop.addEventListener("click",lt);const tt=document.querySelectorAll(".cardlist-img");tt.forEach(t=>{t.addEventListener("click",e=>R(e))});function R(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;k(e)}const et=document.querySelectorAll(".product-image");et.forEach(t=>{t.addEventListener("click",e=>st(e))});function st(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;k(e)}const at=document.querySelectorAll(".discount-card");at.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),k(s)})});const ot="https://food-boutique.b.goit.study/api/";async function rt(t){try{const e=await A.get(`${ot}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function ct(t){const e=await rt(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=j(e),o=T().includes(t);x(s,o),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function x(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function j(t){const s=T().some(o=>o._id===t._id);return n.addToCart.removeEventListener("click",M),s||n.addToCart.addEventListener("click",()=>{M(t,s)}),s}function T(){return JSON.parse(localStorage.getItem("cart"))||[]}function M(t,e){const s=t._id;e?(nt(t._id),x(!1,!1)):(it(t),x(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${u}#icon-check"></use> 
  </svg>`)}function it(t){let e=T();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function nt(t){let e=T();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function k(t){window.addEventListener("keydown",U),document.body.classList.add("show-modal"),j(t),ct(t),Q()}function N(){window.removeEventListener("keydown",U),document.body.classList.remove("show-modal"),Q()}function lt(t){t.currentTarget===t.target&&N()}function U(t){t.code==="Escape"&&N()}function dt(){return document.body.classList.contains("show-modal")}function Q(){document.body.style.overflow=dt()?"hidden":""}const H=document.querySelector(".pagination-page-list");let h="",y="";function C(t,e){if(t<1){H.innerHTML="";return}let s="",o=e-1,a=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),e<t&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),H.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),y=document.querySelector(".right-arrow-pagination"),h.addEventListener("click",()=>{C(t,e-1)}),y.addEventListener("click",()=>{C(t,e+1)}),ut(h,y,t)}function ut(t,e,s){const o=document.querySelectorAll(".button-pagination"),a=JSON.parse(localStorage.getItem("data-for-search")).page;[...o].filter(c=>c.textContent===String(a)).map(c=>{c.classList.add("active"),c.textContent==="1"?t.classList.add("visually-hidden"):c.textContent===String(s)&&e.classList.add("visually-hidden")}),[...o].forEach(c=>{c.addEventListener("click",i=>P(i,s))})}async function P(t,e){t.currentTarget.removeEventListener("click",P),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"?(h.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(y.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let o=t.currentTarget.textContent;q(s.keyword,s.category,o,s.limit);const r=(await I()).results;_(r),[...document.querySelectorAll(".button-pagination")].forEach(i=>{const m=i.classList.contains("active");m&&i.textContent!==o?(i.classList.remove("active"),i.addEventListener("click",P)):m||i.addEventListener("click",P)})}class J{constructor(e,s,o,a){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await A.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const gt=document.querySelector(".search-form"),mt=document.querySelector(".first-input-search"),W=document.querySelector(".filters-result"),G=document.querySelector(".first-select-search-not-focus"),z=document.querySelector(".button-categories"),pt=document.querySelector(".span-button-categories"),K="products";let w="",p="",$=1,g=6,d="",f={},E={},L={},l={},ft=window.matchMedia("(min-width: 768px)").matches,ht=window.matchMedia("(min-width: 1440px)").matches;ht?g=9:ft?g=8:g=6;function q(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}q(w,p,$,g);async function I(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new J(K,e,t.page,t.limit).fetchBreeds(),l}catch(t){S(),console.error("Error:",t.message)}}const S=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;W.innerHTML=t};async function yt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);d=JSON.parse(e),s.length>=g?f=s.slice(0,g):(await I(),f=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await I(),f=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(d));_(f),C(d,2),l.totalPages===0&&S()}catch(t){S(),console.error("Error:",t.message)}}yt();gt.addEventListener("submit",async t=>{t.preventDefault(),w=mt.value.trim(),$=1,q(w,p,$,g),await I(),E=l.results,d=l.totalPages,_(E),C(d,2),l.totalPages===0&&S()});async function St(){try{const t=localStorage.getItem("categories-filters");if(t)L=JSON.parse(t);else{const e="",s=`${K}/categories`;L=await new J(s,e,$,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(L))}vt(L)}catch(t){S(),console.error("Error:",t.message)}}St();function vt(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),G.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");$t(s)}z.addEventListener("click",()=>bt(z,G));function bt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Ct(s,t,e))}function Ct(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function $t(t){t.forEach(e=>{e.addEventListener("click",It)})}async function It(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?p=e.replace(/ /g,"_").replace(/\//g,"&"):p=e,pt.innerHTML=`${e}`,p==="Show_all"&&(p=""),q(w,p,$,g),await I(),E=l.results,d=l.totalPages,_(E),C(d,2),l.totalPages===0&&S()}function _(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let r="",c="icon-heroicons-solid_shopping-cart",i=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?i=a.category:i=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(v=>v._id===a._id)?c="icon-check":c="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${u}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${u}#icon-discount-1"></use>
                </svg>
                </li>`:r=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img filters-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${u}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="visually-hidden">
                <use href="${u}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),W.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Lt(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",r=>R(r))})}function Lt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),r=t.find(i=>i._id===a),c=localStorage.getItem("cart");if(c){const i=JSON.parse(c);i.push(r),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([r]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){B();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(X(e),V()):Pt()});async function Pt(){const t=new J("products/popular","",1,5);try{const e=await t.fetchBreeds();Et(e);const s=e.slice(0,5);X(s),V()}catch(e){console.error("Error:",e)}}function V(){B()}const wt=document.querySelector(".products-container");function Et(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function X(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
      <div class="popular-con">
          <div class="product-image-container" data-product-id="${e._id}"> <img src="${e.img}" alt="" class="product-image"></div>
          <div class="product-text">
              <h3 class="product-name">${e.name}</h3>
              <p class="product margin">
                  Category: <span class="category-value">${e.category.replace("_"," ")}</span><br>
                  Size: <span class="size-value">${e.size}</span><br>
                  Popularity: <span class="popularity-value">${e.popularity}</span>
              </p>
          </div>
      </div>
      <button class="add-to-cart-btn cart-btn" data-product-id="${e._id}">
      <svg class="ico icon-on">
      <use href="${u}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${u}#icon-check"></use>
</svg>

      </button>
    `,wt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){k(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){Tt(e)}})}function Tt(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),B()}function B(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),c=t.some(i=>i&&i._id===o);a&&r&&(c?(s.classList.add("added-to-cart"),a.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",r.style.display="block"))})}const kt=document.querySelector(".discount-container");let O=[],b=[];const qt=t=>{b.find(s=>s._id===t._id)||(b.push(t),localStorage.setItem("cart",JSON.stringify(b)))},_t=t=>b.some(e=>e._id===t);async function Ot(){try{let e=function(r){const{_id:c,name:i,img:m,price:v}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="${u}#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${m}" alt="${i}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${i}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${v}</p>
  
                      <button class="discount-card-button" type="button" data-id=${c}>
                      <svg class="">
                          <use href="${u}#${_t(c)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(e).join("")},o=function(){const r=s(O);kt.innerHTML=r};O=(await A.get("https://food-boutique.b.goit.study/api/products/discount")).data,b=JSON.parse(localStorage.getItem("cart"))||[],o();const a=document.querySelectorAll(".discount-card-button");Array.from(a).forEach(r=>{r.addEventListener("click",c=>{const i=c.currentTarget.dataset.id,m=O.find(v=>v._id===i);qt(m),o()})})}catch(t){console.error("Error fetching discount products:",t.message)}}Ot();let D=document.querySelector(".js-header-cart-items");xt();function xt(){setInterval(()=>{const t=localStorage.getItem("cart"),e=JSON.parse(t);if(e===null){D.innerHTML="0";return}const o=e.flatMap(a=>a._id).filter((a,r,c)=>c.indexOf(a)===r);D.innerHTML=`${o.length}`},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
