var Y=Object.defineProperty;var Z=(t,e,s)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(Z(t,typeof e!="symbol"?e+"":e,s),s);import{s as g}from"./assets/icons-bdf70574.js";import{a as v}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",_);n.backdrop.addEventListener("click",le);const ee=document.querySelectorAll(".cardlist-img");ee.forEach(t=>{t.addEventListener("click",e=>D(e))});function D(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;q(e)}const te=document.querySelectorAll(".product-image");te.forEach(t=>{t.addEventListener("click",e=>se(e))});function se(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;q(e)}const oe=document.querySelectorAll(".discount-card-image");oe.forEach(t=>{t.addEventListener("click",z)});const ce="https://food-boutique.b.goit.study/api/";async function re(t){try{return(await v.get(`${ce}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function ae(t){const e=await re(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=H(t),c=k().includes(t);I(s,c),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function I(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function H(t){const s=k().some(c=>c._id===t);return n.addToCart.addEventListener("click",()=>{z(t,s)}),s}function k(){return JSON.parse(localStorage.getItem("cart"))||[]}function z(t,e){e?(ne(t),I(!1,!1)):(ie(t),I(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(o=>o.id===t).forEach(o=>o.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="./img/icons.svg#icon-check"></use> 
  </svg>`)}function ie(t){let e=k();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function ne(t){let e=k();const s=e.findIndex(c=>c._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e))),console.log("Cart:",e)}function q(t){window.addEventListener("keydown",R),document.body.classList.add("show-modal"),H(t),ae(t),U()}function _(){window.removeEventListener("keydown",R),document.body.classList.remove("show-modal"),U()}function le(t){t.currentTarget===t.target&&_()}function R(t){t.code==="Escape"&&_()}function de(){return document.body.classList.contains("show-modal")}function U(){document.body.style.overflow=de()?"hidden":""}class B{constructor(e,s,c,o){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=c,this.limit=o}async fetchBreeds(){try{return(await v.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`)).data}catch(e){console.error("Error:",e.message)}}}const ue=document.querySelector(".search-form"),me=document.querySelector(".first-input-search"),Q=document.querySelector(".filters-result"),W=document.querySelector(".first-select-search-not-focus"),J=document.querySelector(".button-categories"),ge=document.querySelector(".span-button-categories"),G="products";let C="",m="",S=1,d=6,p={},$={},L={},u={},pe=window.matchMedia("(min-width: 768px)").matches,fe=window.matchMedia("(min-width: 1440px)").matches;fe?d=9:pe?d=8:d=6;function M(t,e,s,c){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:c}))}M(C,m,S,d);async function P(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;u=await new B(G,e,S,d).fetchBreeds()}catch(t){f(),console.error("Error:",t.message)}}const f=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Q.innerHTML=t};async function he(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=d?p=e.slice(0,d):(await P(),p=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(p)))}else await P(),p=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(p));O(p),u.totalPages===0&&f()}catch(t){f(),console.error("Error:",t.message)}}he();ue.addEventListener("submit",async t=>{t.preventDefault(),C=me.value.trim(),M(C,m,S,d),await P(),$=u.results,O($),u.totalPages===0&&f()});async function ye(){try{const t=localStorage.getItem("categories-filters");if(t)L=JSON.parse(t);else{const e="",s=`${G}/categories`;L=await new B(s,e,S,d).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(L))}ve(L)}catch(t){f(),console.error("Error:",t.message)}}ye();function ve(t){const e=[];t.forEach(c=>{let o="";c!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${c.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${c}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),W.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Le(s)}J.addEventListener("click",()=>Se(J,W));function Se(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>be(s,t,e))}function be(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Le(t){t.forEach(e=>{e.addEventListener("click",Ce)})}async function Ce(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,ge.innerHTML=`${e}`,m==="Show_all"&&(m=""),M(C,m,S,d),await P(),$=u.results,O($),u.totalPages===0&&f()}function O(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let a="",r="icon-heroicons-solid_shopping-cart",i=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?i=o.category:i=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(h=>h._id===o._id)?r="icon-check":r="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?a=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="${g}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${g}#icon-discount-1"></use>
                </svg>
                </li>`:a=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="${g}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="${g}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(a)}),Q.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,$e(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",a=>D(a))})}function $e(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("id"),a=t.find(i=>i._id===o),r=localStorage.getItem("cart");if(r){const i=JSON.parse(r);i.push(a),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([a]));c.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${g}#icon-check"></use>
            </svg>`,c.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){x();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(V(e),K()):Pe()});async function Pe(){const t=new B("products/popular","",1,5);try{const e=await t.fetchBreeds();we(e);const s=e.slice(0,5);V(s),K()}catch(e){console.error("Error:",e)}}function K(){x()}const ke=document.querySelector(".products-container");function we(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function V(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,ke.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){q(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){Ee(e)}})}function Ee(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(c=>c&&c._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),x()}function x(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const c=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),a=s.querySelector(".icon-on"),r=t.some(i=>i&&i._id===c);o&&a&&(r?(s.classList.add("added-to-cart"),o.style.display="block",a.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",a.style.display="block"))})}const Te=document.querySelector(".discount-container");let E=[],y=[];const Ie=t=>{y.find(s=>s._id===t._id)||(y.push(t),localStorage.setItem("cart",JSON.stringify(y)))},qe=t=>y.some(e=>e._id===t);async function _e(){try{let e=function(a){const{_id:r,name:i,img:b,price:h}=a;return`<div class="discount-card">
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
                      <p class="discount-card-text">$${h}</p>
  
                      <button class="discount-card-button" type="button" data-id=${r}>
                      <svg class="">
                          <use href="./img/icons.svg#${qe(r)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(a){return a.slice(0,2).map(e).join("")},c=function(){const a=s(E);Te.innerHTML=a};E=(await v.get("https://food-boutique.b.goit.study/api/products/discount")).data,y=JSON.parse(localStorage.getItem("cart"))||[],c();const o=document.querySelectorAll(".discount-card-button");Array.from(o).forEach(a=>{a.addEventListener("click",r=>{const i=r.currentTarget.dataset.id,b=E.find(h=>h._id===i);Ie(b),c()})})}catch(t){console.error("Error fetching discount products:",t.message)}}_e();const Be=document.querySelector(".pagination-page-list");let Me=8;function Oe(t,e){let s="",c,o=e-1,a=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),e==r?c="active":c="",s+=`<li class="numb ${c}"onclick="element(totalPages, ${r})"><span>${r}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),Be.innerHTML=s}Oe(Me,2);const l={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};l.formSubscription.addEventListener("submit",xe);function xe(t){t.preventDefault();const e=t.currentTarget.elements.email.value;Ae(e),t.currentTarget.reset()}async function Ae(t){v.defaults.baseURL="https://food-boutique.b.goit.study/api/";const e={method:"post",url:"subscription",headers:{"Content-Type":"application/json"},data:{email:t}};try{const s=await v.request(e);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}l.openModalPolicy.addEventListener("click",()=>{X(l.policyLink),Ne(),window.addEventListener("keydown",w)});l.openModalTerms.addEventListener("click",()=>{X(l.termsLink),Je(),window.addEventListener("keydown",w)});function X(t){t.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function Ne(){l.closeModalPolicyBtn.addEventListener("click",A)}function A(){l.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),Fe()}function Fe(){l.closeModalPolicyBtn.removeEventListener("click",A),window.removeEventListener("keydown",w)}function Je(){l.closeModalTermsBtn.addEventListener("click",N)}function N(){l.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),je()}function je(){l.closeModalTermsBtn.removeEventListener("click",N),window.removeEventListener("keydown",w)}function w({code:t}){t==="Escape"&&(A(),N())}let j=document.querySelector(".js-header-cart-items"),T=null;De();function De(){setInterval(()=>{const t=localStorage.getItem("cart");if(T=JSON.parse(t),T===null){j.innerHTML="0";return}j.innerHTML=`${T.length}`},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
