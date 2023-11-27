var K=Object.defineProperty;var V=(t,e,s)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var A=(t,e,s)=>(V(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/styles-f1301bca.js";import{a as h}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",q);n.backdrop.addEventListener("click",oe);const X=document.querySelectorAll(".cardlist-img");X.forEach(t=>{t.addEventListener("click",e=>N(e))});function N(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;J(e)}const Y="https://food-boutique.b.goit.study/api/";async function J(t){window.addEventListener("keydown",D),document.body.classList.add("show-modal"),await ee(t),j(t),z()}async function Z(t){try{return(await h.get(`${Y}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function ee(t){const e=await Z(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=j(t),c=w().includes(t);T(s,c),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}}function T(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function j(t){const s=w().includes(t);return n.addToCart.addEventListener("click",()=>{s?(se(t),T(!1,!1)):(te(t),T(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===t).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
    <use href="./img/icons.svg#icon-check"></use> 
    </svg>`)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function te(t){let e=w();e.some(s=>s.id===t.id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)),console.log("Added to cart:",t),console.log("Cart:",e))}function se(t){let e=w();const s=e.findIndex(c=>c.id===t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)),console.log("Removed from cart:",removedProduct),console.log("Cart:",e))}function q(){window.removeEventListener("keydown",D),document.body.classList.remove("show-modal"),z()}function oe(t){t.currentTarget===t.target&&q()}function D(t){t.code==="Escape"&&q()}function ce(){return document.body.classList.contains("show-modal")}function z(){document.body.style.overflow=ce()?"hidden":""}class ${constructor(e,s,c,o){A(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=c,this.limit=o}async fetchBreeds(){try{return(await h.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`)).data}catch(e){console.error("Error:",e.message)}}}const re=document.querySelector(".search-form"),ae=document.querySelector(".first-input-search"),H=document.querySelector(".filters-result"),R=document.querySelector(".first-select-search-not-focus"),F=document.querySelector(".button-categories"),ie=document.querySelector(".span-button-categories"),U="products";let L="",m="",v=1,d=6,g={},P={},b={},u={},ne=window.matchMedia("(min-width: 768px)").matches,le=window.matchMedia("(min-width: 1440px)").matches;le?d=9:ne?d=8:d=6;function B(t,e,s,c){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:c}))}B(L,m,v,d);async function C(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;u=await new $(U,e,v,d).fetchBreeds()}catch(t){p(),console.error("Error:",t.message)}}const p=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;H.innerHTML=t};async function de(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=d?g=e.slice(0,d):(await C(),g=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(g)))}else await C(),g=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(g));_(g),u.totalPages===0&&p()}catch(t){p(),console.error("Error:",t.message)}}de();re.addEventListener("submit",async t=>{t.preventDefault(),L=ae.value.trim(),B(L,m,v,d),await C(),P=u.results,_(P),u.totalPages===0&&p()});async function ue(){try{const t=localStorage.getItem("categories-filters");if(t)b=JSON.parse(t);else{const e="",s=`${U}/categories`;b=await new $(s,e,v,d).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(b))}me(b)}catch(t){p(),console.error("Error:",t.message)}}ue();function me(t){const e=[];t.forEach(c=>{let o="";c!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${c.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${c}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),R.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");fe(s)}F.addEventListener("click",()=>ge(F,R));function ge(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>pe(s,t,e))}function pe(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function fe(t){t.forEach(e=>{e.addEventListener("click",ye)})}async function ye(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,ie.innerHTML=`${e}`,m==="Show_all"&&(m=""),B(L,m,v,d),await C(),P=u.results,_(P),u.totalPages===0&&p()}function _(t){const e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let r="",a="icon-heroicons-solid_shopping-cart",i=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?i=o.category:i=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(f=>f._id===o._id)?a="icon-check":a="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="../img/icons.svg#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="../img/icons.svg#icon-discount-1"></use>
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
                <use href="../img/icons.svg#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="../img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),H.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,he(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",r=>N(r))})}function he(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",c=>{const o=c.currentTarget.getAttribute("id"),r=t.find(i=>i._id===o),a=localStorage.getItem("cart");if(a){const i=JSON.parse(a);i.push(r),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([r]));c.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,c.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",function(){M();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(W(e),Q()):ve()});async function ve(){const t=new $("products/popular?limit=5");try{const e=await t.fetchBreeds();be(e);const s=e.slice(0,5);W(s),Q()}catch(e){console.error("Error:",e)}}function Q(){M()}const Se=document.querySelector(".products-container");function be(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function W(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
              <use href="./img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
          </svg>
          <svg class="ico icon-off" style="display: none;">
              <use href="./img/icons.svg#icon-check"></use>
          </svg>
      </button>
    `,Se.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){J(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){Le(e)}})}function Le(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(c=>c&&c._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),M()}function M(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const c=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),a=t.some(i=>i&&i._id===c);o&&r&&(a?(s.classList.add("added-to-cart"),o.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",r.style.display="block"))})}console.log("hello");const l={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};l.formSubscription.addEventListener("submit",Pe);const I=new $;I.endPoint="subscription";function Pe(t){t.preventDefault();const e=t.currentTarget.elements.email.value;Ce(e),t.currentTarget.reset()}async function Ce(t){h.defaults.baseURL=I.baseUrl;const e={method:"post",url:I.endPoint,headers:{"Content-Type":"application/json"},data:{email:t}};try{const s=await h.request(e);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}l.openModalPolicy.addEventListener("click",()=>{G(l.policyLink),we(),window.addEventListener("keydown",k)});l.openModalTerms.addEventListener("click",()=>{G(l.termsLink),ke(),window.addEventListener("keydown",k)});function G(t){t.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function we(){l.closeModalPolicyBtn.addEventListener("click",x)}function x(){l.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),$e()}function $e(){l.closeModalPolicyBtn.removeEventListener("click",x),window.removeEventListener("keydown",k)}function ke(){l.closeModalTermsBtn.addEventListener("click",O)}function O(){l.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),Ee()}function Ee(){l.closeModalTermsBtn.removeEventListener("click",O),window.removeEventListener("keydown",k)}function k({code:t}){t==="Escape"&&(x(),O())}const Te=document.querySelector(".discount-container");let E=[],y=[];const Ie=t=>{y.find(s=>s._id===t._id)||(y.push(t),localStorage.setItem("cart",JSON.stringify(y)))},qe=t=>y.some(e=>e._id===t);async function Be(){try{let e=function(r){const{_id:a,name:i,img:S,price:f}=r;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${S}" alt="${i}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${i}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${f}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="./img/icons.svg#${qe(a)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(r){return r.slice(0,2).map(e).join("")},c=function(){const r=s(E);Te.innerHTML=r};E=(await h.get("https://food-boutique.b.goit.study/api/products/discount")).data,y=JSON.parse(localStorage.getItem("cart"))||[],c();const o=document.querySelectorAll(".discount-card-button");Array.from(o).forEach(r=>{r.addEventListener("click",a=>{const i=a.currentTarget.dataset.id,S=E.find(f=>f._id===i);Ie(S),c()})})}catch(t){console.error("Error fetching discount products:",t.message)}}Be();const _e=document.querySelector(".pagination-page-list");let Me=8;function xe(t,e){let s="",c,o=e-1,r=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=o;a<=r;a++)a>t||(a==0&&(a=a+1),e==a?c="active":c="",s+=`<li class="numb ${c}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),_e.innerHTML=s}xe(Me,2);
//# sourceMappingURL=commonHelpers2.js.map
