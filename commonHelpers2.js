var V=Object.defineProperty;var X=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var B=(t,e,s)=>(X(t,typeof e!="symbol"?e+"":e,s),s);import{s as u}from"./assets/icons-c7d36446.js";import{a as O}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",A);n.backdrop.addEventListener("click",it);const Y=document.querySelectorAll(".cardlist-img");Y.forEach(t=>{t.addEventListener("click",e=>H(e))});function H(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;x(e)}const Z=document.querySelectorAll(".product-image");Z.forEach(t=>{t.addEventListener("click",e=>tt(e))});function tt(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;x(e)}const et=document.querySelectorAll(".discount-card-image");et.forEach(t=>{t.addEventListener("click",z)});const st="https://food-boutique.b.goit.study/api/";async function at(t){try{return(await O.get(`${st}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function ot(t){const e=await at(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=D(t),o=w().includes(t);_(s,o),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function _(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function D(t){const s=w().some(o=>o._id===t);return n.addToCart.addEventListener("click",()=>{z(t,s)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function z(t,e){e?(ct(t),_(!1,!1)):(rt(t),_(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(a=>a.id===t).forEach(a=>a.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="./img/icons.svg#icon-check"></use> 
  </svg>`)}function rt(t){let e=w();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function ct(t){let e=w();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function x(t){window.addEventListener("keydown",R),document.body.classList.add("show-modal"),D(t),ot(t),j()}function A(){window.removeEventListener("keydown",R),document.body.classList.remove("show-modal"),j()}function it(t){t.currentTarget===t.target&&A()}function R(t){t.code==="Escape"&&A()}function nt(){return document.body.classList.contains("show-modal")}function j(){document.body.style.overflow=nt()?"hidden":""}const lt=document.querySelector(".pagination-page-list");function S(t,e){let s="",o=e-1,a=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),e<t&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),lt.innerHTML=s;const c=document.querySelector(".left-arrow-pagination"),i=document.querySelector(".right-arrow-pagination");c.addEventListener("click",()=>{S(t,e-1)}),i.addEventListener("click",()=>{S(t,e+1)}),dt()}function dt(){const t=document.querySelectorAll(".button-pagination"),e=JSON.parse(localStorage.getItem("data-for-search")).page;[...t].filter(o=>o.textContent===String(e)).map(o=>o.classList.add("active")),[...t].forEach(o=>{o.addEventListener("click",P)})}async function P(t){t.currentTarget.removeEventListener("click",P),t.currentTarget.classList.add("active");const e=JSON.parse(localStorage.getItem("data-for-search"));let s=t.currentTarget.textContent;E(e.keyword,e.category,s,e.limit);const a=(await b()).results;T(a),[...document.querySelectorAll(".button-pagination")].forEach(i=>{const r=i.classList.contains("active");r&&i.textContent!==s?(i.classList.remove("active"),i.addEventListener("click",P)):r||i.addEventListener("click",P)})}class N{constructor(e,s,o,a){B(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await O.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const ut=document.querySelector(".search-form"),gt=document.querySelector(".first-input-search"),U=document.querySelector(".filters-result"),Q=document.querySelector(".first-select-search-not-focus"),F=document.querySelector(".button-categories"),mt=document.querySelector(".span-button-categories"),W="products";let I="",m="",v=1,g=6,d="",p={},L={},C={},l={},pt=window.matchMedia("(min-width: 768px)").matches,ft=window.matchMedia("(min-width: 1440px)").matches;ft?g=9:pt?g=8:g=6;function E(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}E(I,m,v,g);async function b(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new N(W,e,t.page,t.limit).fetchBreeds(),l}catch(t){f(),console.error("Error:",t.message)}}const f=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;U.innerHTML=t};async function ht(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);d=JSON.parse(e),s.length>=g?p=s.slice(0,g):(await b(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await b(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d));T(p),S(d,2),l.totalPages===0&&f()}catch(t){f(),console.error("Error:",t.message)}}ht();ut.addEventListener("submit",async t=>{t.preventDefault(),I=gt.value.trim(),v=1,E(I,m,v,g),await b(),L=l.results,d=l.totalPages,T(L),S(d,2),l.totalPages===0&&f()});async function yt(){try{const t=localStorage.getItem("categories-filters");if(t)C=JSON.parse(t);else{const e="",s=`${W}/categories`;C=await new N(s,e,v,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(C))}St(C)}catch(t){f(),console.error("Error:",t.message)}}yt();function St(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),Q.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");$t(s)}F.addEventListener("click",()=>vt(F,Q));function vt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>bt(s,t,e))}function bt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function $t(t){t.forEach(e=>{e.addEventListener("click",Ct)})}async function Ct(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,mt.innerHTML=`${e}`,m==="Show_all"&&(m=""),E(I,m,v,g),await b(),L=l.results,d=l.totalPages,T(L),S(d,2),l.totalPages===0&&f()}function T(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let c="",i="icon-heroicons-solid_shopping-cart",r=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?r=a.category:r=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(h=>h._id===a._id)?i="icon-check":i="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?c=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${r}</p>
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
                </li>`:c=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img filters-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${r}</p>
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
                </li>`,e.push(c)}),U.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Pt(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",c=>H(c))})}function Pt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),c=t.find(r=>r._id===a),i=localStorage.getItem("cart");if(i){const r=JSON.parse(i);r.push(c),localStorage.setItem("cart",JSON.stringify(r))}else localStorage.setItem("cart",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){J();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(K(e),G()):It()});async function It(){const t=new N("products/popular","",1,5);try{const e=await t.fetchBreeds();wt(e);const s=e.slice(0,5);K(s),G()}catch(e){console.error("Error:",e)}}function G(){J()}const Lt=document.querySelector(".products-container");function wt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function K(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,Lt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){x(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){Et(e)}})}function Et(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),J()}function J(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),i=t.some(r=>r&&r._id===o);a&&c&&(i?(s.classList.add("added-to-cart"),a.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",c.style.display="block"))})}const Tt=document.querySelector(".discount-container");let k=[],y=[];const kt=t=>{y.find(s=>s._id===t._id)||(y.push(t),localStorage.setItem("cart",JSON.stringify(y)))},qt=t=>y.some(e=>e._id===t);async function _t(){try{let e=function(c){const{_id:i,name:r,img:$,price:h}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="${u}#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${$}" alt="${r}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${r}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${h}</p>
  
                      <button class="discount-card-button" type="button" data-id=${i}>
                      <svg class="">
                          <use href="${u}#${qt(i)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},o=function(){const c=s(k);Tt.innerHTML=c};k=(await O.get("https://food-boutique.b.goit.study/api/products/discount")).data,y=JSON.parse(localStorage.getItem("cart"))||[],o();const a=document.querySelectorAll(".discount-card-button");Array.from(a).forEach(c=>{c.addEventListener("click",i=>{const r=i.currentTarget.dataset.id,$=k.find(h=>h._id===r);kt($),o()})})}catch(t){console.error("Error fetching discount products:",t.message)}}_t();let M=document.querySelector(".js-header-cart-items"),q=null;Ot();function Ot(){setInterval(()=>{const t=localStorage.getItem("cart");if(q=JSON.parse(t),q===null){M.innerHTML="0";return}M.innerHTML=`${q.length}`},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
