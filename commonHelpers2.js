var V=Object.defineProperty;var X=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(X(t,typeof e!="symbol"?e+"":e,s),s);import{s as g}from"./assets/icons-bdf70574.js";import{a as v}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",B);n.backdrop.addEventListener("click",ce);const Y=document.querySelectorAll(".cardlist-img");Y.forEach(t=>{t.addEventListener("click",e=>J(e))});function J(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;j(e)}const Z="https://food-boutique.b.goit.study/api/";async function j(t){window.addEventListener("keydown",z),document.body.classList.add("show-modal"),await te(t),D(t),H()}async function ee(t){try{return(await v.get(`${Z}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function te(t){const e=await ee(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=D(t),c=w().includes(t);I(s,c),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}}function I(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function D(t){const s=w().includes(t);return n.addToCart.addEventListener("click",()=>{s?(oe(t),I(!1,!1)):(se(t),I(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===t).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
    <use href="./img/icons.svg#icon-check"></use> 
    </svg>`)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function se(t){let e=w();e.some(s=>s.id===t.id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)),console.log("Added to cart:",t),console.log("Cart:",e))}function oe(t){let e=w();const s=e.findIndex(c=>c.id===t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)),console.log("Removed from cart:",removedProduct),console.log("Cart:",e))}function B(){window.removeEventListener("keydown",z),document.body.classList.remove("show-modal"),H()}function ce(t){t.currentTarget===t.target&&B()}function z(t){t.code==="Escape"&&B()}function re(){return document.body.classList.contains("show-modal")}function H(){document.body.style.overflow=re()?"hidden":""}class k{constructor(e,s,c,o){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=c,this.limit=o}async fetchBreeds(){try{return(await v.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`)).data}catch(e){console.error("Error:",e.message)}}}const ae=document.querySelector(".search-form"),ie=document.querySelector(".first-input-search"),R=document.querySelector(".filters-result"),U=document.querySelector(".first-select-search-not-focus"),N=document.querySelector(".button-categories"),ne=document.querySelector(".span-button-categories"),Q="products";let $="",m="",S=1,d=6,p={},P={},L={},u={},le=window.matchMedia("(min-width: 768px)").matches,de=window.matchMedia("(min-width: 1440px)").matches;de?d=9:le?d=8:d=6;function _(t,e,s,c){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:c}))}_($,m,S,d);async function C(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;u=await new k(Q,e,S,d).fetchBreeds()}catch(t){f(),console.error("Error:",t.message)}}const f=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;R.innerHTML=t};async function ue(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=d?p=e.slice(0,d):(await C(),p=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(p)))}else await C(),p=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(p));M(p),u.totalPages===0&&f()}catch(t){f(),console.error("Error:",t.message)}}ue();ae.addEventListener("submit",async t=>{t.preventDefault(),$=ie.value.trim(),_($,m,S,d),await C(),P=u.results,M(P),u.totalPages===0&&f()});async function me(){try{const t=localStorage.getItem("categories-filters");if(t)L=JSON.parse(t);else{const e="",s=`${Q}/categories`;L=await new k(s,e,S,d).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(L))}ge(L)}catch(t){f(),console.error("Error:",t.message)}}me();function ge(t){const e=[];t.forEach(c=>{let o="";c!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${c.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${c}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),U.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");ye(s)}N.addEventListener("click",()=>pe(N,U));function pe(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>fe(s,t,e))}function fe(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function ye(t){t.forEach(e=>{e.addEventListener("click",he)})}async function he(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,ne.innerHTML=`${e}`,m==="Show_all"&&(m=""),_($,m,S,d),await C(),P=u.results,M(P),u.totalPages===0&&f()}function M(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let r="",a="icon-heroicons-solid_shopping-cart",i=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?i=o.category:i=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(y=>y._id===o._id)?a="icon-check":a="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${g}#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${g}#icon-discount-1"></use>
                </svg>
                </li>`:r=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img filters-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${g}#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="${g}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),R.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,ve(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",r=>J(r))})}function ve(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("id"),r=t.find(i=>i._id===o),a=localStorage.getItem("cart");if(a){const i=JSON.parse(a);i.push(r),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([r]));c.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${g}#icon-check"></use>
            </svg>`,c.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){x();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(G(e),W()):Se()});async function Se(){const t=new k("products/popular","",1,5);try{const e=await t.fetchBreeds();Le(e);const s=e.slice(0,5);G(s),W()}catch(e){console.error("Error:",e)}}function W(){x()}const be=document.querySelector(".products-container");function Le(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function G(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${g}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${g}#icon-check"></use>
</svg>

      </button>
    `,be.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){j(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){$e(e)}})}function $e(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(c=>c&&c._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),x()}function x(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const c=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),a=t.some(i=>i&&i._id===c);o&&r&&(a?(s.classList.add("added-to-cart"),o.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",r.style.display="block"))})}console.log("hello");const l={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};l.formSubscription.addEventListener("submit",Pe);const q=new k;q.endPoint="subscription";function Pe(t){t.preventDefault();const e=t.currentTarget.elements.email.value;Ce(e),t.currentTarget.reset()}async function Ce(t){v.defaults.baseURL=q.baseUrl;const e={method:"post",url:q.endPoint,headers:{"Content-Type":"application/json"},data:{email:t}};try{const s=await v.request(e);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}l.openModalPolicy.addEventListener("click",()=>{K(l.policyLink),we(),window.addEventListener("keydown",E)});l.openModalTerms.addEventListener("click",()=>{K(l.termsLink),Ee(),window.addEventListener("keydown",E)});function K(t){t.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function we(){l.closeModalPolicyBtn.addEventListener("click",O)}function O(){l.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),ke()}function ke(){l.closeModalPolicyBtn.removeEventListener("click",O),window.removeEventListener("keydown",E)}function Ee(){l.closeModalTermsBtn.addEventListener("click",A)}function A(){l.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),Te()}function Te(){l.closeModalTermsBtn.removeEventListener("click",A),window.removeEventListener("keydown",E)}function E({code:t}){t==="Escape"&&(O(),A())}const Ie=document.querySelector(".discount-container");let T=[],h=[];const qe=t=>{h.find(s=>s._id===t._id)||(h.push(t),localStorage.setItem("cart",JSON.stringify(h)))},Be=t=>h.some(e=>e._id===t);async function _e(){try{let e=function(r){const{_id:a,name:i,img:b,price:y}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${b}" alt="${i}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${i}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${y}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="./img/icons.svg#${Be(a)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(e).join("")},c=function(){const r=s(T);Ie.innerHTML=r};T=(await v.get("https://food-boutique.b.goit.study/api/products/discount")).data,h=JSON.parse(localStorage.getItem("cart"))||[],c();const o=document.querySelectorAll(".discount-card-button");Array.from(o).forEach(r=>{r.addEventListener("click",a=>{const i=a.currentTarget.dataset.id,b=T.find(y=>y._id===i);qe(b),c()})})}catch(t){console.error("Error fetching discount products:",t.message)}}_e();const Me=document.querySelector(".pagination-page-list");let xe=8;function Oe(t,e){let s="",c,o=e-1,r=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=o;a<=r;a++)a>t||(a==0&&(a=a+1),e==a?c="active":c="",s+=`<li class="numb ${c}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),Me.innerHTML=s}Oe(xe,2);
//# sourceMappingURL=commonHelpers2.js.map
