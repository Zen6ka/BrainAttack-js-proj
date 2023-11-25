var H=Object.defineProperty;var U=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(U(e,typeof t!="symbol"?t+"":t,s),s);import"./assets/cart-44ca5511.js";import{a as p}from"./assets/vendor-27c5a77b.js";class C{constructor(t,s,o,r){T(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=t,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const t=await p.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(t.data),t.data}catch(t){console.error("Error:",t.message)}}}const Q=document.querySelector(".search-form"),W=document.querySelector(".first-input-search"),J=document.querySelector(".filters-result"),_=document.querySelector(".first-select-search-not-focus"),x=document.querySelector(".button-categories"),G=document.querySelector(".span-button-categories"),A="products";let S="",g="",f=1,l=6,m={},v={},h={},d={},K=window.matchMedia("(min-width: 768px)").matches,V=window.matchMedia("(min-width: 1280px)").matches;V?l=9:K?l=8:l=6;function E(e,t,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:e,category:t,page:s,limit:o}))}E(S,g,f,l);async function b(){try{const e=JSON.parse(localStorage.getItem("data-for-search")),t=`keyword=${e.keyword}&category=${e.category}`;d=await new C(A,t,f,l).fetchBreeds()}catch(e){y(),console.error("Error:",e.message)}}const y=()=>{const e=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;J.innerHTML=e};async function X(){try{const e=localStorage.getItem("products-home-page-filters");if(e){const t=JSON.parse(e);t.length>=l?m=t.slice(0,l):(await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));I(m)}catch(e){y(),console.error("Error:",e.message)}}X();Q.addEventListener("submit",async e=>{e.preventDefault(),S=W.value.trim(),E(S,g,f,l),await b(),v=d.results,I(v),d.totalPages===0&&y()});async function Y(){try{const e=localStorage.getItem("categories-filters");if(e)h=JSON.parse(e);else{const t="",s=`${A}/categories`;h=await new C(s,t,f,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(h))}Z(h)}catch(e){y(),console.error("Error:",e.message)}}Y();function Z(e){const t=[];e.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;t.push(r)}),t.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),_.insertAdjacentHTML("beforeend",t.join(""));const s=document.querySelectorAll(".button-li-filters");se(s)}x.addEventListener("click",()=>ee(x,_));function ee(e,t){t.classList.add("first-select-search"),document.addEventListener("click",s=>te(s,e,t))}function te(e,t,s){!t.contains(e.target)&&!s.contains(e.target)?s.classList.remove("first-select-search"):s.contains(e.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function se(e){e.forEach(t=>{t.addEventListener("click",oe)})}async function oe(e){const t=e.currentTarget.textContent;g=t.replace(/ /g,"_").replace(/\//g,"&"),G.innerHTML=`${t}`,g==="Show_all"&&(g=""),E(S,g,f,l),await b(),v=d.results,I(v),d.totalPages===0&&y()}function I(e){const t=[];e.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;t.push(o)}else{const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;t.push(o)}}),J.innerHTML=`<ul class="card-list">${t.join(" ")}</ul>`,re(e)}function re(e){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=e.find(n=>n._id===r),a=localStorage.getItem("card");if(a){const n=JSON.parse(a);n.push(c),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",async function(){const e=new C("products/popular?limit=5");try{const t=ce();if(t)O(t);else{const s=await e.fetchBreeds();ae(s),O(s)}q()}catch(t){console.error("Error:",t)}});function ae(e){localStorage.setItem("popularProducts",JSON.stringify(e)),q()}function ce(){const e=localStorage.getItem("popularProducts");return e?JSON.parse(e):null}function O(e){const t=document.querySelectorAll(".product-template");t.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),e.slice(0,t.length).forEach((s,o)=>{const r=t[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){let P=[c];localStorage.setItem("popul",JSON.stringify(P))});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){ie(c),F()},n.setAttribute("data-product-id",s._id)})}function ie(e){let t=JSON.parse(localStorage.getItem("cart"))||[];const s=t.findIndex(o=>o._Id===e._Id);s!==-1?t.splice(s,1):t.push(e),localStorage.setItem("cart",JSON.stringify(t)),F(),q()}function q(){const e=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),a=e.some(n=>n._Id===o);r&&c&&(a?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}function F(){document.dispatchEvent(new CustomEvent("cartUpdated"))}document.addEventListener("cartUpdated",()=>{q()});const u={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};u.formSubscription.addEventListener("submit",ne);const $=new C;$.endPoint="subscription";function ne(e){e.preventDefault();const t=e.currentTarget.elements.email.value;le(t)}async function le(e){p.defaults.baseURL=$.baseUrl;const t={method:"post",url:$.endPoint,headers:{"Content-Type":"application/json"},data:{email:e}};try{return(await p.request(t)).data}catch(s){console.log(s)}}u.openModalPolicy.addEventListener("click",()=>{B(),u.closeModalPolicyBtn.addEventListener("click",B)});u.openModalTerms.addEventListener("click",()=>{M(),u.closeModalTermsBtn.addEventListener("click",M)});function B(){u.policyLink.classList.toggle("is-hidden-policy")}function M(){u.termsLink.classList.toggle("is-hidden-policy")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>me(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",k);i.backdrop.addEventListener("click",he);const de=document.querySelectorAll(".cardlist-img");de.forEach(e=>{e.addEventListener("click",t=>handleImageClick(t))});const ue="https://food-boutique.b.goit.study/api/";async function me(e){window.addEventListener("keydown",D),document.body.classList.add("show-modal"),await pe(e),z(e),j()}async function ge(e){try{return(await p.get(`${ue}products/${e}`)).data}catch(t){return console.error("Error:",t.message),null}}async function pe(e){const t=await ge(e);if(t){i.modalImg.src=t.img,i.modalImg.alt=t.name,i.modalTitle.textContent=t.name,i.modalCategory.textContent=t.category,i.modalSize.textContent=t.size,i.modalPopularity.textContent=t.popularity,i.modalDesc.textContent=t.desc,i.modalPrice.textContent=`$${t.price.toFixed(2)}`;const s=z(e),o=L().includes(e);w(s,o)}}function w(e,t){const s=e?"Remove from":t?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=e}function z(e){const s=L().includes(e);return i.addToCart.addEventListener("click",()=>{s?(ye(e),w(!1,!1)):(fe(e),w(!0,!0))}),s}function L(){return JSON.parse(localStorage.getItem("cart"))||[]}function fe(e){let t=L();t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function ye(e){let t=L();const s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function k(){window.removeEventListener("keydown",D),document.body.classList.remove("show-modal"),j()}function he(e){e.currentTarget===e.target&&k()}function D(e){e.code==="Escape"&&k()}function Se(){return document.body.classList.contains("show-modal")}function j(){document.body.style.overflow=Se()?"hidden":""}const ve=document.querySelector(".discount-container");let N=[];const be=e=>{if(localStorage.getItem("addedProducts")){const t=JSON.parse(localStorage.getItem("addedProducts"));t.includes(e)||(t.push(e),localStorage.setItem("addedProducts",JSON.stringify(t)))}else localStorage.setItem("addedProducts",JSON.stringify([e]))},Ce=e=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(e)?"icon-check":"icon-heroicons-solid_shopping-cart";async function qe(){try{let t=function(c){const{_id:a,name:n,img:P,price:R}=c;return`<div class="discount-card">
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
                      <p class="discount-card-text">$${R}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${Ce(a)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(t).join("")},o=function(){const c=s(N);ve.innerHTML=c};N=(await p.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{be(a.currentTarget.dataset.id)})})}catch(e){console.error("Error fetching discount products:",e.message)}}qe();const Le=document.querySelector("ul");let Pe=8;function $e(e,t){let s="",o,r=t-1,c=t;t>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${t-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>e||(a==0&&(a=a+1),t==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);t<e&&t<e&&(s+='<li class="dots"><span>...</span></li>',t<e+1&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>7</span></li>`,t<=e+2&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>8</span></li>`))),t<e&&(s+=`<li class="btn next"onclick="element(totalPages, ${t+1})"><span><i class="right"></i> > </span></li>`),Le.innerHTML=s}$e(Pe,2);
//# sourceMappingURL=commonHelpers2.js.map
