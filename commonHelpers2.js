var et=Object.defineProperty;var st=(t,e,s)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var D=(t,e,s)=>(st(t,typeof e!="symbol"?e+"":e,s),s);import{s as m}from"./assets/icons-b5e68f18.js";import{a as v}from"./assets/vendor-27c5a77b.js";const i={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.closeModalBtn.addEventListener("click",M);i.backdrop.addEventListener("click",mt);const ot=document.querySelectorAll(".cardlist-img");ot.forEach(t=>{t.addEventListener("click",e=>R(e))});function R(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;A(e)}const at=document.querySelectorAll(".product-image");at.forEach(t=>{t.addEventListener("click",e=>rt(e))});function rt(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;A(e)}const ct=document.querySelectorAll(".discount-card-image");ct.forEach(t=>{t.addEventListener("click",Q)});const nt="https://food-boutique.b.goit.study/api/";async function it(t){try{return(await v.get(`${nt}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function lt(t){const e=await it(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=U(t),a=T().includes(t);x(s,a),e.is10PercentOff?i.discountProduct.classList.remove("hidden"):i.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function x(t,e){const s=t?"Remove from":e?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=t}function U(t){const s=T().some(a=>a._id===t);return i.addToCart.addEventListener("click",()=>{Q(t,s)}),s}function T(){return JSON.parse(localStorage.getItem("cart"))||[]}function Q(t,e){e?(ut(t),x(!1,!1)):(dt(t),x(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(o=>o.id===t).forEach(o=>o.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="./img/icons.svg#icon-check"></use> 
  </svg>`)}function dt(t){let e=T();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function ut(t){let e=T();const s=e.findIndex(a=>a._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function A(t){window.addEventListener("keydown",W),document.body.classList.add("show-modal"),U(t),lt(t),G()}function M(){window.removeEventListener("keydown",W),document.body.classList.remove("show-modal"),G()}function mt(t){t.currentTarget===t.target&&M()}function W(t){t.code==="Escape"&&M()}function gt(){return document.body.classList.contains("show-modal")}function G(){document.body.style.overflow=gt()?"hidden":""}const pt=document.querySelector(".pagination-page-list");function b(t,e){let s="",a=e-1,o=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=a;r<=o;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),e<t&&(s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'),pt.innerHTML=s;const c=document.querySelector(".left-arrow-pagination"),n=document.querySelector(".right-arrow-pagination");c.addEventListener("click",()=>{b(t,e-1)}),n.addEventListener("click",()=>{b(t,e+1)}),ft()}function ft(){const t=document.querySelectorAll(".button-pagination"),e=JSON.parse(localStorage.getItem("data-for-search")).page;[...t].filter(a=>a.textContent===String(e)).map(a=>a.classList.add("active")),[...t].forEach(a=>{a.addEventListener("click",w)})}async function w(t){t.currentTarget.removeEventListener("click",w),t.currentTarget.classList.add("active");const e=JSON.parse(localStorage.getItem("data-for-search"));let s=t.currentTarget.textContent;I(e.keyword,e.category,s,e.limit);const o=(await P()).results;q(o),[...document.querySelectorAll(".button-pagination")].forEach(n=>{const r=n.classList.contains("active");r&&n.textContent!==s?(n.classList.remove("active"),n.addEventListener("click",w)):r||n.addEventListener("click",w)})}class N{constructor(e,s,a,o){D(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=a,this.limit=o}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await v.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const ht=document.querySelector(".search-form"),yt=document.querySelector(".first-input-search"),K=document.querySelector(".filters-result"),V=document.querySelector(".first-select-search-not-focus"),H=document.querySelector(".button-categories"),St=document.querySelector(".span-button-categories"),X="products";let E="",p="",L=1,g=6,u="",f={},k={},$={},l={},vt=window.matchMedia("(min-width: 768px)").matches,bt=window.matchMedia("(min-width: 1440px)").matches;bt?g=9:vt?g=8:g=6;function I(t,e,s,a){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:a}))}I(E,p,L,g);async function P(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new N(X,e,t.page,t.limit).fetchBreeds(),l}catch(t){h(),console.error("Error:",t.message)}}const h=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;K.innerHTML=t};async function Lt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);u=JSON.parse(e),s.length>=g?f=s.slice(0,g):(await P(),f=l.results,u=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(u)))}else await P(),f=l.results,u=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(f)),localStorage.setItem("all-pages-result",JSON.stringify(u));q(f),b(u,2),l.totalPages===0&&h()}catch(t){h(),console.error("Error:",t.message)}}Lt();ht.addEventListener("submit",async t=>{t.preventDefault(),E=yt.value.trim(),L=1,I(E,p,L,g),await P(),k=l.results,u=l.totalPages,q(k),b(u,2),l.totalPages===0&&h()});async function Pt(){try{const t=localStorage.getItem("categories-filters");if(t)$=JSON.parse(t);else{const e="",s=`${X}/categories`;$=await new N(s,e,L,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify($))}Ct($)}catch(t){h(),console.error("Error:",t.message)}}Pt();function Ct(t){const e=[];t.forEach(a=>{let o="";a!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${a.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${a}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),V.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Et(s)}H.addEventListener("click",()=>$t(H,V));function $t(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>wt(s,t,e))}function wt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Et(t){t.forEach(e=>{e.addEventListener("click",kt)})}async function kt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?p=e.replace(/ /g,"_").replace(/\//g,"&"):p=e,St.innerHTML=`${e}`,p==="Show_all"&&(p=""),I(E,p,L,g),await P(),k=l.results,u=l.totalPages,q(k),b(u,2),l.totalPages===0&&h()}function q(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let c="",n="icon-heroicons-solid_shopping-cart",r=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?r=o.category:r=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(y=>y._id===o._id)?n="icon-check":n="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?c=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${r}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${n}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`:c=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img filters-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${r}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${n}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(c)}),K.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Tt(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",c=>R(c))})}function Tt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",a=>{const o=a.currentTarget.getAttribute("id"),c=t.find(r=>r._id===o),n=localStorage.getItem("cart");if(n){const r=JSON.parse(n);r.push(c),localStorage.setItem("cart",JSON.stringify(r))}else localStorage.setItem("cart",JSON.stringify([c]));a.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${m}#icon-check"></use>
            </svg>`,a.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){J();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(Z(e),Y()):It()});async function It(){const t=new N("products/popular","",1,5);try{const e=await t.fetchBreeds();_t(e);const s=e.slice(0,5);Z(s),Y()}catch(e){console.error("Error:",e)}}function Y(){J()}const qt=document.querySelector(".products-container");function _t(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function Z(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${m}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${m}#icon-check"></use>
</svg>

      </button>
    `,qt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){A(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){Bt(e)}})}function Bt(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(a=>a&&a._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),J()}function J(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const a=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),n=t.some(r=>r&&r._id===a);o&&c&&(n?(s.classList.add("added-to-cart"),o.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",c.style.display="block"))})}const Ot=document.querySelector(".discount-container");let B=[],S=[];const xt=t=>{S.find(s=>s._id===t._id)||(S.push(t),localStorage.setItem("cart",JSON.stringify(S)))},At=t=>S.some(e=>e._id===t);async function Mt(){try{let e=function(c){const{_id:n,name:r,img:C,price:y}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="${m}#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${C}" alt="${r}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${r}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${y}</p>
  
                      <button class="discount-card-button" type="button" data-id=${n}>
                      <svg class="">
                          <use href="${m}#${At(n)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},a=function(){const c=s(B);Ot.innerHTML=c};B=(await v.get("https://food-boutique.b.goit.study/api/products/discount")).data,S=JSON.parse(localStorage.getItem("cart"))||[],a();const o=document.querySelectorAll(".discount-card-button");Array.from(o).forEach(c=>{c.addEventListener("click",n=>{const r=n.currentTarget.dataset.id,C=B.find(y=>y._id===r);xt(C),a()})})}catch(t){console.error("Error fetching discount products:",t.message)}}Mt();const d={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};d.formSubscription.addEventListener("submit",Nt);function Nt(t){t.preventDefault();const e=t.currentTarget.elements.email.value;Jt(e),t.currentTarget.reset()}async function Jt(t){v.defaults.baseURL="https://food-boutique.b.goit.study/api/";const e={method:"post",url:"subscription",headers:{"Content-Type":"application/json"},data:{email:t}};try{const s=await v.request(e);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}d.openModalPolicy.addEventListener("click",()=>{tt(d.policyLink),Ft(),window.addEventListener("keydown",_)});d.openModalTerms.addEventListener("click",()=>{tt(d.termsLink),Dt(),window.addEventListener("keydown",_)});function tt(t){t.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function Ft(){d.closeModalPolicyBtn.addEventListener("click",F)}function F(){d.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),jt()}function jt(){d.closeModalPolicyBtn.removeEventListener("click",F),window.removeEventListener("keydown",_)}function Dt(){d.closeModalTermsBtn.addEventListener("click",j)}function j(){d.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),Ht()}function Ht(){d.closeModalTermsBtn.removeEventListener("click",j),window.removeEventListener("keydown",_)}function _({code:t}){t==="Escape"&&(F(),j())}let z=document.querySelector(".js-header-cart-items"),O=null;zt();function zt(){setInterval(()=>{const t=localStorage.getItem("cart");if(O=JSON.parse(t),O===null){z.innerHTML="0";return}z.innerHTML=`${O.length}`},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
