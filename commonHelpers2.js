var X=Object.defineProperty;var Y=(t,e,s)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(Y(t,typeof e!="symbol"?e+"":e,s),s);import{s as u}from"./assets/icons-5aa88d78.js";import{a as A}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",N);n.backdrop.addEventListener("click",nt);const Z=document.querySelectorAll(".cardlist-img");Z.forEach(t=>{t.addEventListener("click",e=>D(e))});function D(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;k(e)}const tt=document.querySelectorAll(".product-image");tt.forEach(t=>{t.addEventListener("click",e=>et(e))});function et(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;k(e)}const st=document.querySelectorAll(".discount-card");st.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),k(s)})});const at="https://food-boutique.b.goit.study/api/";async function ot(t){try{const e=await A.get(`${at}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function rt(t){const e=await ot(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=R(e),o=T().includes(t);O(s,o),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function O(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function R(t){const s=T().some(o=>o._id===t._id);return n.addToCart.removeEventListener("click",M),s||n.addToCart.addEventListener("click",()=>{M(t,s)}),s}function T(){return JSON.parse(localStorage.getItem("cart"))||[]}function M(t,e){const s=t._id;e?(it(t._id),O(!1,!1)):(ct(t),O(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${u}#icon-check"></use> 
  </svg>`)}function ct(t){let e=T();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function it(t){let e=T();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function k(t){window.addEventListener("keydown",j),document.body.classList.add("show-modal"),R(t),rt(t),U()}function N(){window.removeEventListener("keydown",j),document.body.classList.remove("show-modal"),U()}function nt(t){t.currentTarget===t.target&&N()}function j(t){t.code==="Escape"&&N()}function lt(){return document.body.classList.contains("show-modal")}function U(){document.body.style.overflow=lt()?"hidden":""}const H=document.querySelector(".pagination-page-list");let h="",y="";function C(t,e){if(t<1){H.innerHTML="";return}let s="",o=e-1,a=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),e<t&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),H.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),y=document.querySelector(".right-arrow-pagination"),h.addEventListener("click",()=>{C(t,e-1)}),y.addEventListener("click",()=>{C(t,e+1)}),dt(h,y,t)}function dt(t,e,s){const o=document.querySelectorAll(".button-pagination"),a=JSON.parse(localStorage.getItem("data-for-search")).page;[...o].filter(i=>i.textContent===String(a)).map(i=>{i.classList.add("active"),i.textContent==="1"?t.classList.add("visually-hidden"):i.textContent===String(s)&&e.classList.add("visually-hidden")}),[...o].forEach(i=>{i.addEventListener("click",c=>P(c,s))})}async function P(t,e){t.currentTarget.removeEventListener("click",P),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"?(h.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(y.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let o=t.currentTarget.textContent;q(s.keyword,s.category,o,s.limit);const r=(await I()).results;_(r),[...document.querySelectorAll(".button-pagination")].forEach(c=>{const m=c.classList.contains("active");m&&c.textContent!==o?(c.classList.remove("active"),c.addEventListener("click",P)):m||c.addEventListener("click",P)})}class J{constructor(e,s,o,a){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await A.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const ut=document.querySelector(".search-form"),gt=document.querySelector(".first-input-search"),Q=document.querySelector(".filters-result"),W=document.querySelector(".first-select-search-not-focus"),z=document.querySelector(".button-categories"),mt=document.querySelector(".span-button-categories"),G="products";let w="",p="",$=1,g=6,d="",f={},E={},L={},l={},pt=window.matchMedia("(min-width: 768px)").matches,ft=window.matchMedia("(min-width: 1440px)").matches;ft?g=9:pt?g=8:g=6;function q(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}q(w,p,$,g);async function I(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new J(G,e,t.page,t.limit).fetchBreeds(),l}catch(t){S(),console.error("Error:",t.message)}}const S=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Q.innerHTML=t};async function ht(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);d=JSON.parse(e),s.length>=g?f=s.slice(0,g):(await I(),f=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await I(),f=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(d));_(f),C(d,2),l.totalPages===0&&S()}catch(t){S(),console.error("Error:",t.message)}}ht();ut.addEventListener("submit",async t=>{t.preventDefault(),w=gt.value.trim(),$=1,q(w,p,$,g),await I(),E=l.results,d=l.totalPages,_(E),C(d,2),l.totalPages===0&&S()});async function yt(){try{const t=localStorage.getItem("categories-filters");if(t)L=JSON.parse(t);else{const e="",s=`${G}/categories`;L=await new J(s,e,$,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(L))}St(L)}catch(t){S(),console.error("Error:",t.message)}}yt();function St(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),W.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Ct(s)}z.addEventListener("click",()=>vt(z,W));function vt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>bt(s,t,e))}function bt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Ct(t){t.forEach(e=>{e.addEventListener("click",$t)})}async function $t(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?p=e.replace(/ /g,"_").replace(/\//g,"&"):p=e,mt.innerHTML=`${e}`,p==="Show_all"&&(p=""),q(w,p,$,g),await I(),E=l.results,d=l.totalPages,_(E),C(d,2),l.totalPages===0&&S()}function _(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let r="",i="icon-heroicons-solid_shopping-cart",c=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?c=a.category:c=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(v=>v._id===a._id)?i="icon-check":i="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${u}#${i}"></use>
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
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${u}#${i}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="visually-hidden">
                <use href="${u}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),Q.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,It(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",r=>D(r))})}function It(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),r=t.find(c=>c._id===a),i=localStorage.getItem("cart");if(i){const c=JSON.parse(i);c.push(r),localStorage.setItem("cart",JSON.stringify(c))}else localStorage.setItem("cart",JSON.stringify([r]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){B();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(V(e),K()):Lt()});async function Lt(){const t=new J("products/popular","",1,5);try{const e=await t.fetchBreeds();wt(e);const s=e.slice(0,5);V(s),K()}catch(e){console.error("Error:",e)}}function K(){B()}const Pt=document.querySelector(".products-container");function wt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function V(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,Pt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){k(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){Et(e)}})}function Et(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),B()}function B(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),i=t.some(c=>c&&c._id===o);a&&r&&(i?(s.classList.add("added-to-cart"),a.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",r.style.display="block"))})}const Tt=document.querySelector(".discount-container");let x=[],b=[];const kt=t=>{b.find(s=>s._id===t._id)||(b.push(t),localStorage.setItem("cart",JSON.stringify(b)))},qt=t=>b.some(e=>e._id===t);async function _t(){try{let e=function(r){const{_id:i,name:c,img:m,price:v}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="${u}#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${m}" alt="${c}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${c}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${v}</p>
  
                      <button class="discount-card-button" type="button" data-id=${i}>
                      <svg class="">
                          <use href="${u}#${qt(i)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(e).join("")},o=function(){const r=s(x);Tt.innerHTML=r};x=(await A.get("https://food-boutique.b.goit.study/api/products/discount")).data,b=JSON.parse(localStorage.getItem("cart"))||[],o();const a=document.querySelectorAll(".discount-card-button");Array.from(a).forEach(r=>{r.addEventListener("click",i=>{const c=i.currentTarget.dataset.id,m=x.find(v=>v._id===c);kt(m),o()})})}catch(t){console.error("Error fetching discount products:",t.message)}}_t();
//# sourceMappingURL=commonHelpers2.js.map
