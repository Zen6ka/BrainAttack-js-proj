var K=Object.defineProperty;var V=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var J=(e,t,s)=>(V(e,typeof t!="symbol"?t+"":t,s),s);import{s as u}from"./assets/icons-c7d36446.js";import{a as O}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",x);n.backdrop.addEventListener("click",ct);const X=document.querySelectorAll(".cardlist-img");X.forEach(e=>{e.addEventListener("click",t=>H(t))});function H(e){const t=e.currentTarget.closest(".card-list-item").dataset.id;E(t)}const Y=document.querySelectorAll(".product-image");Y.forEach(e=>{e.addEventListener("click",t=>Z(t))});function Z(e){const t=e.currentTarget.closest(".product-image-container").dataset.product-id;E(t)}const tt=document.querySelectorAll(".discount-card");tt.forEach(e=>{e.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=e.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),E(s)})});const et="https://food-boutique.b.goit.study/api/";async function st(e){try{const t=await O.get(`${et}products/${e}`),s=t.data;return console.log("Product Details:",s),t.data}catch(t){return console.error("Error:",t.message),null}}async function at(e){const t=await st(e);if(t){n.modalImg.src=t.img,n.modalImg.alt=t.name,n.modalTitle.textContent=t.name,n.modalCategory.textContent=t.category,n.modalSize.textContent=t.size,n.modalPopularity.textContent=t.popularity,n.modalDesc.textContent=t.desc,n.modalPrice.textContent=`$${t.price.toFixed(2)}`;const s=z(t),o=w().includes(e);_(s,o),t.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function _(e,t){const s=e?"Remove from":t?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=e}function z(e){const s=w().some(o=>o._id===e._id);return n.addToCart.removeEventListener("click",B),s||n.addToCart.addEventListener("click",()=>{B(e,s)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function B(e,t){const s=e._id;t?(rt(e._id),_(!1,!1)):(ot(e),_(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${u}#icon-check"></use> 
  </svg>`)}function ot(e){let t=w();t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function rt(e){let t=w();const s=t.findIndex(o=>o._id===e);s!==-1&&(t[s],t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function E(e){window.addEventListener("keydown",D),document.body.classList.add("show-modal"),z(e),at(e),R()}function x(){window.removeEventListener("keydown",D),document.body.classList.remove("show-modal"),R()}function ct(e){e.currentTarget===e.target&&x()}function D(e){e.code==="Escape"&&x()}function it(){return document.body.classList.contains("show-modal")}function R(){document.body.style.overflow=it()?"hidden":""}const nt=document.querySelector(".pagination-page-list");function S(e,t){let s="",o=t-1,a=t;t>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let c=o;c<=a;c++)c>e||(c==0&&(c=c+1),s+=`<li><button class="numb button-pagination"><span>${c}</span></button></li>`);t<e&&t<e&&(s+='<li class="dots"><span>...</span></li>',t<e+1&&(s+=`<li><button class="numb button-pagination"><span>${e-1}</span></button></li>`,t<=e+2&&(s+=`<li><button class="numb button-pagination"><span>${e}</span></button></li>`))),t<e&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),nt.innerHTML=s;const r=document.querySelector(".left-arrow-pagination"),i=document.querySelector(".right-arrow-pagination");r.addEventListener("click",()=>{S(e,t-1)}),i.addEventListener("click",()=>{S(e,t+1)}),lt()}function lt(){const e=document.querySelectorAll(".button-pagination"),t=JSON.parse(localStorage.getItem("data-for-search")).page;[...e].filter(o=>o.textContent===String(t)).map(o=>o.classList.add("active")),[...e].forEach(o=>{o.addEventListener("click",P)})}async function P(e){e.currentTarget.removeEventListener("click",P),e.currentTarget.classList.add("active");const t=JSON.parse(localStorage.getItem("data-for-search"));let s=e.currentTarget.textContent;T(t.keyword,t.category,s,t.limit);const a=(await b()).results;k(a),[...document.querySelectorAll(".button-pagination")].forEach(i=>{const c=i.classList.contains("active");c&&i.textContent!==s?(i.classList.remove("active"),i.addEventListener("click",P)):c||i.addEventListener("click",P)})}class A{constructor(t,s,o,a){J(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=t,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const t=await O.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(t.data),t.data}catch(t){console.error("Error:",t.message)}}}const dt=document.querySelector(".search-form"),ut=document.querySelector(".first-input-search"),j=document.querySelector(".filters-result"),U=document.querySelector(".first-select-search-not-focus"),F=document.querySelector(".button-categories"),gt=document.querySelector(".span-button-categories"),Q="products";let I="",m="",v=1,g=6,d="",p={},L={},$={},l={},mt=window.matchMedia("(min-width: 768px)").matches,pt=window.matchMedia("(min-width: 1440px)").matches;pt?g=9:mt?g=8:g=6;function T(e,t,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:e,category:t,page:s,limit:o}))}T(I,m,v,g);async function b(){try{const e=JSON.parse(localStorage.getItem("data-for-search")),t=`keyword=${e.keyword}&category=${e.category}`;return l=await new A(Q,t,e.page,e.limit).fetchBreeds(),l}catch(e){f(),console.error("Error:",e.message)}}const f=()=>{const e=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;j.innerHTML=e};async function ft(){try{const e=localStorage.getItem("products-home-page-filters"),t=localStorage.getItem("all-pages-result");if(e&&t){const s=JSON.parse(e);d=JSON.parse(t),s.length>=g?p=s.slice(0,g):(await b(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await b(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d));k(p),S(d,2),l.totalPages===0&&f()}catch(e){f(),console.error("Error:",e.message)}}ft();dt.addEventListener("submit",async e=>{e.preventDefault(),I=ut.value.trim(),v=1,T(I,m,v,g),await b(),L=l.results,d=l.totalPages,k(L),S(d,2),l.totalPages===0&&f()});async function ht(){try{const e=localStorage.getItem("categories-filters");if(e)$=JSON.parse(e);else{const t="",s=`${Q}/categories`;$=await new A(s,t,v,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify($))}yt($)}catch(e){f(),console.error("Error:",e.message)}}ht();function yt(e){const t=[];e.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,t.push(a)}),t.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),U.insertAdjacentHTML("beforeend",t.join(""));const s=document.querySelectorAll(".button-li-filters");bt(s)}F.addEventListener("click",()=>St(F,U));function St(e,t){t.classList.add("first-select-search"),document.addEventListener("click",s=>vt(s,e,t))}function vt(e,t,s){!t.contains(e.target)&&!s.contains(e.target)?s.classList.remove("first-select-search"):s.contains(e.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function bt(e){e.forEach(t=>{t.addEventListener("click",Ct)})}async function Ct(e){const t=e.currentTarget.textContent;t!=="Pantry Items"?m=t.replace(/ /g,"_").replace(/\//g,"&"):m=t,gt.innerHTML=`${t}`,m==="Show_all"&&(m=""),T(I,m,v,g),await b(),L=l.results,d=l.totalPages,k(L),S(d,2),l.totalPages===0&&f()}function k(e){const t=[],s=JSON.parse(localStorage.getItem("cart"));e.forEach(a=>{let r="",i="icon-heroicons-solid_shopping-cart",c=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?c=a.category:c=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(h=>h._id===a._id)?i="icon-check":i="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${a._id}>
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
                </li>`,t.push(r)}),j.innerHTML=`<ul class="card-list">${t.join(" ")}</ul>`,$t(e),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",r=>H(r))})}function $t(e){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),r=e.find(c=>c._id===a),i=localStorage.getItem("cart");if(i){const c=JSON.parse(i);c.push(r),localStorage.setItem("cart",JSON.stringify(c))}else localStorage.setItem("cart",JSON.stringify([r]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){N();const e=JSON.parse(localStorage.getItem("popularProducts"));let t;e&&e.length>=5?t=e.slice(0,5):t=[],t.length>0?(G(t),W()):Pt()});async function Pt(){const e=new A("products/popular","",1,5);try{const t=await e.fetchBreeds();Lt(t);const s=t.slice(0,5);G(s),W()}catch(t){console.error("Error:",t)}}function W(){N()}const It=document.querySelector(".products-container");function Lt(e){localStorage.setItem("popularProducts",JSON.stringify(e))}function G(e){e.forEach(t=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
      <div class="popular-con">
          <div class="product-image-container" data-product-id="${t._id}"> <img src="${t.img}" alt="" class="product-image"></div>
          <div class="product-text">
              <h3 class="product-name">${t.name}</h3>
              <p class="product margin">
                  Category: <span class="category-value">${t.category.replace("_"," ")}</span><br>
                  Size: <span class="size-value">${t.size}</span><br>
                  Popularity: <span class="popularity-value">${t.popularity}</span>
              </p>
          </div>
      </div>
      <button class="add-to-cart-btn cart-btn" data-product-id="${t._id}">
      <svg class="ico icon-on">
      <use href="${u}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${u}#icon-check"></use>
</svg>

      </button>
    `,It.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){E(t._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){wt(t)}})}function wt(e){let t=JSON.parse(localStorage.getItem("cart"))||[];t.findIndex(o=>o&&o._id===e._id)!==-1||t.push(e),localStorage.setItem("cart",JSON.stringify(t)),N()}function N(){const e=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),i=e.some(c=>c&&c._id===o);a&&r&&(i?(s.classList.add("added-to-cart"),a.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",r.style.display="block"))})}const Et=document.querySelector(".discount-container");let q=[],y=[];const Tt=e=>{y.find(s=>s._id===e._id)||(y.push(e),localStorage.setItem("cart",JSON.stringify(y)))},kt=e=>y.some(t=>t._id===e);async function qt(){try{let t=function(r){const{_id:i,name:c,img:C,price:h}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="${u}#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${C}" alt="${c}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${c}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${h}</p>
  
                      <button class="discount-card-button" type="button" data-id=${i}>
                      <svg class="">
                          <use href="${u}#${kt(i)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(t).join("")},o=function(){const r=s(q);Et.innerHTML=r};q=(await O.get("https://food-boutique.b.goit.study/api/products/discount")).data,y=JSON.parse(localStorage.getItem("cart"))||[],o();const a=document.querySelectorAll(".discount-card-button");Array.from(a).forEach(r=>{r.addEventListener("click",i=>{const c=i.currentTarget.dataset.id,C=q.find(h=>h._id===c);Tt(C),o()})})}catch(e){console.error("Error fetching discount products:",e.message)}}qt();let M=document.querySelector(".js-header-cart-items");_t();function _t(){setInterval(()=>{const e=localStorage.getItem("cart"),t=JSON.parse(e);if(t===null){M.innerHTML="0";return}const o=t.flatMap(a=>a._id).filter((a,r,i)=>i.indexOf(a)===r);M.innerHTML=`${o.length}`},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
