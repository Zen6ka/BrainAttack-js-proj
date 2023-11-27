var Z=Object.defineProperty;var tt=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(tt(t,typeof e!="symbol"?e+"":e,s),s);import{s as u}from"./assets/icons-5aa88d78.js";import{a as O}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",A);n.backdrop.addEventListener("click",dt);const et=document.querySelectorAll(".cardlist-img");et.forEach(t=>{t.addEventListener("click",e=>R(e))});function R(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;w(e)}const st=document.querySelectorAll(".product-image");st.forEach(t=>{t.addEventListener("click",e=>at(e))});function at(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;w(e)}const ot=document.querySelectorAll(".discount-card");ot.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),w(s)})});const rt="https://food-boutique.b.goit.study/api/";async function ct(t){try{const e=await O.get(`${rt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function it(t){const e=await ct(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=D(e),o=E().includes(t);_(s,o),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function _(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function D(t){const s=E().some(o=>o._id===t._id);return n.addToCart.removeEventListener("click",M),s||n.addToCart.addEventListener("click",()=>{M(t,s)}),s}function E(){return JSON.parse(localStorage.getItem("cart"))||[]}function M(t,e){const s=t._id;e?(lt(t._id),_(!1,!1)):(nt(t),_(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${u}#icon-check"></use> 
  </svg>`)}function nt(t){let e=E();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function lt(t){let e=E();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function w(t){window.addEventListener("keydown",j),document.body.classList.add("show-modal"),D(t),it(t),U()}function A(){window.removeEventListener("keydown",j),document.body.classList.remove("show-modal"),U()}function dt(t){t.currentTarget===t.target&&A()}function j(t){t.code==="Escape"&&A()}function ut(){return document.body.classList.contains("show-modal")}function U(){document.body.style.overflow=ut()?"hidden":""}const H=document.querySelector(".pagination-page-list");let h="",y="";function v(t,e){if(t<1){H.innerHTML="";return}let s="",o=e-1,a=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),e<t&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),H.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),y=document.querySelector(".right-arrow-pagination"),h.addEventListener("click",()=>{v(t,e-1)}),y.addEventListener("click",()=>{v(t,e+1)}),gt(h,y,t)}function gt(t,e,s){const o=document.querySelectorAll(".button-pagination"),a=JSON.parse(localStorage.getItem("data-for-search")).page;[...o].filter(i=>i.textContent===String(a)).map(i=>{i.classList.add("active"),i.textContent==="1"?t.classList.add("visually-hidden"):i.textContent===String(s)&&e.classList.add("visually-hidden")}),[...o].forEach(i=>{i.addEventListener("click",c=>I(c,s))})}async function I(t,e){t.currentTarget.removeEventListener("click",I),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"?(h.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(y.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let o=t.currentTarget.textContent;T(s.keyword,s.category,o,s.limit);const r=(await C()).results;k(r),[...document.querySelectorAll(".button-pagination")].forEach(c=>{const q=c.classList.contains("active");q&&c.textContent!==o?(c.classList.remove("active"),c.addEventListener("click",I)):q||c.addEventListener("click",I)})}class N{constructor(e,s,o,a){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await O.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const mt=document.querySelector(".search-form"),pt=document.querySelector(".first-input-search"),Q=document.querySelector(".filters-result"),W=document.querySelector(".first-select-search-not-focus"),z=document.querySelector(".button-categories"),ft=document.querySelector(".span-button-categories"),K="products";let L="",m="",b=1,g=6,d="",p={},P={},$={},l={},ht=window.matchMedia("(min-width: 768px)").matches,yt=window.matchMedia("(min-width: 1440px)").matches;yt?g=9:ht?g=8:g=6;function T(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}T(L,m,b,g);async function C(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new N(K,e,t.page,t.limit).fetchBreeds(),l}catch(t){S(),console.error("Error:",t.message)}}const S=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Q.innerHTML=t};async function St(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);d=JSON.parse(e),s.length>=g?p=s.slice(0,g):(await C(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await C(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d));k(p),v(d,2),l.totalPages===0&&S()}catch(t){S(),console.error("Error:",t.message)}}St();mt.addEventListener("submit",async t=>{t.preventDefault(),L=pt.value.trim(),b=1,T(L,m,b,g),await C(),P=l.results,d=l.totalPages,k(P),v(d,2),l.totalPages===0&&S()});async function vt(){try{const t=localStorage.getItem("categories-filters");if(t)$=JSON.parse(t);else{const e="",s=`${K}/categories`;$=await new N(s,e,b,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify($))}bt($)}catch(t){S(),console.error("Error:",t.message)}}vt();function bt(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),W.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");It(s)}z.addEventListener("click",()=>Ct(z,W));function Ct(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>$t(s,t,e))}function $t(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function It(t){t.forEach(e=>{e.addEventListener("click",Lt)})}async function Lt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,ft.innerHTML=`${e}`,m==="Show_all"&&(m=""),T(L,m,b,g),await C(),P=l.results,d=l.totalPages,k(P),v(d,2),l.totalPages===0&&S()}function k(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let r="",i="icon-heroicons-solid_shopping-cart",c=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?c=a.category:c=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(X=>X._id===a._id)?i="icon-check":i="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${a._id}>
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
                </li>`,e.push(r)}),Q.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Pt(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",r=>R(r))})}function Pt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),r=t.find(c=>c._id===a),i=localStorage.getItem("cart");if(i){const c=JSON.parse(i);c.push(r),localStorage.setItem("cart",JSON.stringify(c))}else localStorage.setItem("cart",JSON.stringify([r]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){B();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(G(e),Y()):Et()});async function Et(){const t=new N("products/popular","",1,5);try{const e=await t.fetchBreeds();Tt(e);const s=e.slice(0,5);G(s),Y()}catch(e){console.error("Error:",e)}}function Y(){B()}const wt=document.querySelector(".products-container");function Tt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function G(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,wt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){w(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){kt(e)}})}function kt(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),B()}function B(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),i=t.some(c=>c&&c._id===o);a&&r&&(i?(s.classList.add("added-to-cart"),a.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",r.style.display="block"))})}const qt=document.querySelector(".discount-container"),x="cart";let J=[],f=[];const _t=t=>{f=JSON.parse(localStorage.getItem(x))||[],f.find(s=>s._id===t._id)||(f.push(t),localStorage.setItem(x,JSON.stringify(f)),V())},xt=t=>f.some(e=>e._id===t),V=()=>{const t=At(J);qt.innerHTML=t,Bt()},Ot=t=>{const e=t.currentTarget.dataset.id,s=J.find(o=>o._id===e);_t(s)},At=t=>t.slice(0,2).map(Nt).join(""),Nt=t=>{const{_id:e,name:s,img:o,price:a}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${u}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
                <img src="${o}" alt="${s}" width="114" height="'114" />
              </div>
              <div class="discount-card-info">
                <div class="discount-card-name">
                  <p class="discount-card-text">${s}</p>
                </div>
                <div class="discount-card-price">
                  <p class="discount-card-text">$${a}</p>
                  <button class="discount-card-button" type="button" data-id=${e}>
                    <svg class="">
                      <use href="${u}#${xt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},Bt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Ot)})},Jt=async()=>{try{J=(await O.get("https://food-boutique.b.goit.study/api/products/discount")).data,f=JSON.parse(localStorage.getItem(x))||[],V()}catch(t){console.error("Error fetching discount products:",t.message)}};Jt();
//# sourceMappingURL=commonHelpers2.js.map
