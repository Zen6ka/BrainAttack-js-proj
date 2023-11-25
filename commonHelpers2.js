var Q=Object.defineProperty;var W=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var _=(t,e,s)=>(W(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/cart-70eaffa1.js";import{a as y}from"./assets/vendor-27c5a77b.js";class P{constructor(e,s,o,r){_(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const e=await y.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const G=document.querySelector(".search-form"),K=document.querySelector(".first-input-search"),F=document.querySelector(".filters-result"),z=document.querySelector(".first-select-search-not-focus"),M=document.querySelector(".button-categories"),V=document.querySelector(".span-button-categories"),D="products";let b="",p="",h=1,l=6,m={},C={},v={},d={},X=window.matchMedia("(min-width: 768px)").matches,Y=window.matchMedia("(min-width: 1280px)").matches;Y?l=9:X?l=8:l=6;function T(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}T(b,p,h,l);async function q(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;d=await new P(D,e,h,l).fetchBreeds()}catch(t){S(),console.error("Error:",t.message)}}const S=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;F.innerHTML=t};async function Z(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=l?m=e.slice(0,l):(await q(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await q(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));x(m)}catch(t){S(),console.error("Error:",t.message)}}Z();G.addEventListener("submit",async t=>{t.preventDefault(),b=K.value.trim(),T(b,p,h,l),await q(),C=d.results,x(C),d.totalPages===0&&S()});async function tt(){try{const t=localStorage.getItem("categories-filters");if(t)v=JSON.parse(t);else{const e="",s=`${D}/categories`;v=await new P(s,e,h,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(v))}et(v)}catch(t){S(),console.error("Error:",t.message)}}tt();function et(t){const e=[];t.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(r)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),z.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");rt(s)}M.addEventListener("click",()=>st(M,z));function st(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>ot(s,t,e))}function ot(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function rt(t){t.forEach(e=>{e.addEventListener("click",ct)})}async function ct(t){const e=t.currentTarget.textContent;p=e.replace(/ /g,"_").replace(/\//g,"&"),V.innerHTML=`${e}`,p==="Show_all"&&(p=""),T(b,p,h,l),await q(),C=d.results,x(C),d.totalPages===0&&S()}function x(t){const e=[];t.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;e.push(o)}}),F.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,at(t)}function at(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=t.find(n=>n._id===r),a=localStorage.getItem("card");if(a){const n=JSON.parse(a);n.push(c),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>O(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",B);i.backdrop.addEventListener("click",gt);const it=document.querySelectorAll(".cardlist-img");it.forEach(t=>{t.addEventListener("click",e=>nt(e))});function nt(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;O(e)}const lt="https://food-boutique.b.goit.study/api/";async function O(t){window.addEventListener("keydown",R),document.body.classList.add("show-modal"),await ut(t),j(t),H()}async function dt(t){try{return(await y.get(`${lt}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function ut(t){const e=await dt(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=j(t),o=L().includes(t);k(s,o)}}function k(t,e){const s=t?"Remove from":e?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=t}function j(t){const s=L().includes(t);return i.addToCart.addEventListener("click",()=>{s?(pt(t),k(!1,!1)):(mt(t),k(!0,!0))}),s}function L(){return JSON.parse(localStorage.getItem("cart"))||[]}function mt(t){let e=L();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function pt(t){let e=L();const s=e.indexOf(t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function B(){window.removeEventListener("keydown",R),document.body.classList.remove("show-modal"),H()}function gt(t){t.currentTarget===t.target&&B()}function R(t){t.code==="Escape"&&B()}function ft(){return document.body.classList.contains("show-modal")}function H(){document.body.style.overflow=ft()?"hidden":""}document.addEventListener("DOMContentLoaded",async function(){const t=new P("products/popular?limit=5");try{const e=ht();if(e)N(e);else{const s=await t.fetchBreeds();yt(s),N(s)}$()}catch(e){console.error("Error:",e)}});function yt(t){localStorage.setItem("popularProducts",JSON.stringify(t)),$()}function ht(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function N(t){const e=document.querySelectorAll(".product-template");e.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((s,o)=>{const r=e[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){let g=[c];localStorage.setItem("popul",JSON.stringify(g)),O(c._Id)});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){St(c),U()},n.setAttribute("data-product-id",s._id)})}function St(t){let e=JSON.parse(localStorage.getItem("cart"))||[];const s=e.findIndex(o=>o._Id===t._Id);s!==-1?e.splice(s,1):e.push(t),localStorage.setItem("cart",JSON.stringify(e)),U(),$()}function $(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),a=t.some(n=>n._Id===o);r&&c&&(a?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}function U(){document.dispatchEvent(new CustomEvent("cartUpdated"))}document.addEventListener("cartUpdated",()=>{$()});const u={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};u.formSubscription.addEventListener("submit",vt);const I=new P;I.endPoint="subscription";function vt(t){t.preventDefault();const e=t.currentTarget.elements.email.value;bt(e)}async function bt(t){y.defaults.baseURL=I.baseUrl;const e={method:"post",url:I.endPoint,headers:{"Content-Type":"application/json"},data:{email:t}};try{return(await y.request(e)).data}catch(s){console.log(s)}}u.openModalPolicy.addEventListener("click",()=>{J(),u.closeModalPolicyBtn.addEventListener("click",J)});u.openModalTerms.addEventListener("click",()=>{A(),u.closeModalTermsBtn.addEventListener("click",A)});function J(){u.policyLink.classList.toggle("is-hidden-policy")}function A(){u.termsLink.classList.toggle("is-hidden-policy")}const Ct=document.querySelector(".discount-container");let E=[],f=[];const qt=t=>{f.find(s=>s._id===t._id)||(f.push(t),localStorage.setItem("addedProducts",JSON.stringify(f)))},Pt=t=>f.some(e=>e._id===t);async function Lt(){try{let e=function(c){const{_id:a,name:n,img:g,price:w}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${g}" alt="${n}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${n}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${w}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${Pt(a)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},o=function(){const c=s(E);Ct.innerHTML=c};E=(await y.get("https://food-boutique.b.goit.study/api/products/discount")).data,f=JSON.parse(localStorage.getItem("addedProducts"))||[],o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{const n=a.currentTarget.dataset.id,g=E.find(w=>w._id===n);qt(g),o()})})}catch(t){console.error("Error fetching discount products:",t.message)}}Lt();const $t=document.querySelector("ul");let wt=8;function Et(t,e){let s="",o,r=e-1,c=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),$t.innerHTML=s}Et(wt,2);
//# sourceMappingURL=commonHelpers2.js.map
