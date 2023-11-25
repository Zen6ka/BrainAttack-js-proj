var U=Object.defineProperty;var Q=(t,e,s)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>(Q(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/cart-e0e8fada.js";import{a as p}from"./assets/vendor-27c5a77b.js";class C{constructor(e,s,o,r){x(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const e=await p.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const W=document.querySelector(".search-form"),G=document.querySelector(".first-input-search"),J=document.querySelector(".filters-result"),A=document.querySelector(".first-select-search-not-focus"),O=document.querySelector(".button-categories"),K=document.querySelector(".span-button-categories"),F="products";let S="",g="",f=1,l=6,m={},v={},h={},d={},V=window.matchMedia("(min-width: 768px)").matches,X=window.matchMedia("(min-width: 1280px)").matches;X?l=9:V?l=8:l=6;function I(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}I(S,g,f,l);async function b(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;d=await new C(F,e,f,l).fetchBreeds()}catch(t){y(),console.error("Error:",t.message)}}const y=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;J.innerHTML=t};async function Y(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=l?m=e.slice(0,l):(await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));E(m)}catch(t){y(),console.error("Error:",t.message)}}Y();W.addEventListener("submit",async t=>{t.preventDefault(),S=G.value.trim(),I(S,g,f,l),await b(),v=d.results,E(v),d.totalPages===0&&y()});async function Z(){try{const t=localStorage.getItem("categories-filters");if(t)h=JSON.parse(t);else{const e="",s=`${F}/categories`;h=await new C(s,e,f,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(h))}tt(h)}catch(t){y(),console.error("Error:",t.message)}}Z();function tt(t){const e=[];t.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(r)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),A.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");ot(s)}O.addEventListener("click",()=>et(O,A));function et(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>st(s,t,e))}function st(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function ot(t){t.forEach(e=>{e.addEventListener("click",rt)})}async function rt(t){const e=t.currentTarget.textContent;g=e.replace(/ /g,"_").replace(/\//g,"&"),K.innerHTML=`${e}`,g==="Show_all"&&(g=""),I(S,g,f,l),await b(),v=d.results,E(v),d.totalPages===0&&y()}function E(t){const e=[];t.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;e.push(o)}}),J.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,ct(t)}function ct(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=t.find(n=>n._id===r),a=localStorage.getItem("card");if(a){const n=JSON.parse(a);n.push(c),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>k(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",T);i.backdrop.addEventListener("click",gt);const at=document.querySelectorAll(".cardlist-img");at.forEach(t=>{t.addEventListener("click",e=>it(e))});function it(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;k(e)}const nt="https://food-boutique.b.goit.study/api/";async function k(t){window.addEventListener("keydown",D),document.body.classList.add("show-modal"),await dt(t),z(t),j()}async function lt(t){try{return(await p.get(`${nt}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function dt(t){const e=await lt(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=z(t),o=q().includes(t);$(s,o)}}function $(t,e){const s=t?"Remove from":e?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=t}function z(t){const s=q().includes(t);return i.addToCart.addEventListener("click",()=>{s?(mt(t),$(!1,!1)):(ut(t),$(!0,!0))}),s}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}function ut(t){let e=q();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function mt(t){let e=q();const s=e.indexOf(t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function T(){window.removeEventListener("keydown",D),document.body.classList.remove("show-modal"),j()}function gt(t){t.currentTarget===t.target&&T()}function D(t){t.code==="Escape"&&T()}function pt(){return document.body.classList.contains("show-modal")}function j(){document.body.style.overflow=pt()?"hidden":""}document.addEventListener("DOMContentLoaded",async function(){const t=new C("products/popular?limit=5");try{const e=yt();if(e)B(e);else{const s=await t.fetchBreeds();ft(s),B(s)}L()}catch(e){console.error("Error:",e)}});function ft(t){localStorage.setItem("popularProducts",JSON.stringify(t)),L()}function yt(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function B(t){const e=document.querySelectorAll(".product-template");e.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((s,o)=>{const r=e[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){let P=[c];localStorage.setItem("popul",JSON.stringify(P)),k(c._Id)});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){ht(c),R()},n.setAttribute("data-product-id",s._id)})}function ht(t){let e=JSON.parse(localStorage.getItem("cart"))||[];const s=e.findIndex(o=>o._Id===t._Id);s!==-1?e.splice(s,1):e.push(t),localStorage.setItem("cart",JSON.stringify(e)),R(),L()}function L(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),a=t.some(n=>n._Id===o);r&&c&&(a?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}function R(){document.dispatchEvent(new CustomEvent("cartUpdated"))}document.addEventListener("cartUpdated",()=>{L()});const u={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};u.formSubscription.addEventListener("submit",St);const w=new C;w.endPoint="subscription";function St(t){t.preventDefault();const e=t.currentTarget.elements.email.value;vt(e)}async function vt(t){p.defaults.baseURL=w.baseUrl;const e={method:"post",url:w.endPoint,headers:{"Content-Type":"application/json"},data:{email:t}};try{return(await p.request(e)).data}catch(s){console.log(s)}}u.openModalPolicy.addEventListener("click",()=>{M(),u.closeModalPolicyBtn.addEventListener("click",M)});u.openModalTerms.addEventListener("click",()=>{N(),u.closeModalTermsBtn.addEventListener("click",N)});function M(){u.policyLink.classList.toggle("is-hidden-policy")}function N(){u.termsLink.classList.toggle("is-hidden-policy")}const bt=document.querySelector(".discount-container");let _=[];const Ct=t=>{if(localStorage.getItem("addedProducts")){const e=JSON.parse(localStorage.getItem("addedProducts"));e.includes(t)||(e.push(t),localStorage.setItem("addedProducts",JSON.stringify(e)))}else localStorage.setItem("addedProducts",JSON.stringify([t]))},qt=t=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(t)?"icon-check":"icon-heroicons-solid_shopping-cart";async function Lt(){try{let e=function(c){const{_id:a,name:n,img:P,price:H}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${P}" alt="${n}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${n}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${H}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${qt(a)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},o=function(){const c=s(_);bt.innerHTML=c};_=(await p.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{Ct(a.currentTarget.dataset.id)})})}catch(t){console.error("Error fetching discount products:",t.message)}}Lt();const Pt=document.querySelector("ul");let $t=8;function wt(t,e){let s="",o,r=e-1,c=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),Pt.innerHTML=s}wt($t,2);
//# sourceMappingURL=commonHelpers2.js.map
