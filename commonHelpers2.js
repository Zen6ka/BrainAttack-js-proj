var R=Object.defineProperty;var H=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var I=(t,e,s)=>(H(t,typeof e!="symbol"?e+"":e,s),s);import"./assets/cart-025a4366.js";import{a as p}from"./assets/vendor-27c5a77b.js";class C{constructor(e,s,o,r){I(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const e=await p.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const U=document.querySelector(".search-form"),Q=document.querySelector(".first-input-search"),N=document.querySelector(".filters-result"),J=document.querySelector(".first-select-search-not-focus"),T=document.querySelector(".button-categories"),W=document.querySelector(".span-button-categories"),_="products";let S="",g="",f=1,l=6,m={},v={},h={},d={},G=window.matchMedia("(min-width: 768px)").matches,K=window.matchMedia("(min-width: 1280px)").matches;K?l=9:G?l=8:l=6;function $(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}$(S,g,f,l);async function b(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;d=await new C(_,e,f,l).fetchBreeds()}catch(t){y(),console.error("Error:",t.message)}}const y=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;N.innerHTML=t};async function V(){try{const t=localStorage.getItem("products-home-page-filters");if(t){const e=JSON.parse(t);e.length>=l?m=e.slice(0,l):(await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));w(m)}catch(t){y(),console.error("Error:",t.message)}}V();U.addEventListener("submit",async t=>{t.preventDefault(),S=Q.value.trim(),$(S,g,f,l),await b(),v=d.results,w(v),d.totalPages===0&&y()});async function X(){try{const t=localStorage.getItem("categories-filters");if(t)h=JSON.parse(t);else{const e="",s=`${_}/categories`;h=await new C(s,e,f,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(h))}Y(h)}catch(t){y(),console.error("Error:",t.message)}}X();function Y(t){const e=[];t.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;e.push(r)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),J.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");et(s)}T.addEventListener("click",()=>Z(T,J));function Z(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>tt(s,t,e))}function tt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function et(t){t.forEach(e=>{e.addEventListener("click",st)})}async function st(t){const e=t.currentTarget.textContent;g=e.replace(/ /g,"_").replace(/\//g,"&"),W.innerHTML=`${e}`,g==="Show_all"&&(g=""),$(S,g,f,l),await b(),v=d.results,w(v),d.totalPages===0&&y()}function w(t){const e=[];t.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;e.push(o)}}),N.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,ot(t)}function ot(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),c=t.find(n=>n._id===r),a=localStorage.getItem("card");if(a){const n=JSON.parse(a);n.push(c),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([c]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",async function(){const t=new C("products/popular?limit=5");try{const e=ct();if(e)O(e);else{const s=await t.fetchBreeds();rt(s),O(s)}k()}catch(e){console.error("Error:",e)}});function rt(t){localStorage.setItem("popularProducts",JSON.stringify(t)),k()}function ct(){const t=localStorage.getItem("popularProducts");return t?JSON.parse(t):null}function O(t){const e=document.querySelectorAll(".product-template");e.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),t.slice(0,e.length).forEach((s,o)=>{const r=e[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const c={productId:s._id,productName:s.name,productImg:s.img,productCategory:s.category,productPrice:s.price,productSize:s.size,productIs10PercentOff:s.is10PercentOff,productPopularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){localStorage.setItem("popul",JSON.stringify(c))});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){at(c)},n.setAttribute("data-product-id",s._id)})}function at(t){let e=JSON.parse(localStorage.getItem("cart"))||{};e[t.productId]?delete e[t.productId]:e[t.productId]=t,localStorage.setItem("cart",JSON.stringify(e)),k()}function k(){const t=JSON.parse(localStorage.getItem("cart"))||{};document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),c=s.querySelector(".icon-on");r&&c&&(t[o]?(s.classList.add("added-to-cart"),r.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",c.style.display="block"))})}const u={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};u.formSubscription.addEventListener("submit",it);const P=new C;P.endPoint="subscription";function it(t){t.preventDefault();const e=t.currentTarget.elements.email.value;nt(e)}async function nt(t){p.defaults.baseURL=P.baseUrl;const e={method:"post",url:P.endPoint,headers:{"Content-Type":"application/json"},data:{email:t}};try{return(await p.request(e)).data}catch(s){console.log(s)}}u.openModalPolicy.addEventListener("click",()=>{x(),u.closeModalPolicyBtn.addEventListener("click",x)});u.openModalTerms.addEventListener("click",()=>{B(),u.closeModalTermsBtn.addEventListener("click",B)});function x(){u.policyLink.classList.toggle("is-hidden-policy")}function B(){u.termsLink.classList.toggle("is-hidden-policy")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>ut(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",E);i.backdrop.addEventListener("click",yt);const lt=document.querySelectorAll(".cardlist-img");lt.forEach(t=>{t.addEventListener("click",e=>handleImageClick(e))});const dt="https://food-boutique.b.goit.study/api/";async function ut(t){window.addEventListener("keydown",F),document.body.classList.add("show-modal"),await gt(t),A(t),z()}async function mt(t){try{return(await p.get(`${dt}products/${t}`)).data}catch(e){return console.error("Error:",e.message),null}}async function gt(t){const e=await mt(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=A(t),o=q().includes(t);L(s,o)}}function L(t,e){const s=t?"Remove from":e?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=t}function A(t){const s=q().includes(t);return i.addToCart.addEventListener("click",()=>{s?(ft(t),L(!1,!1)):(pt(t),L(!0,!0))}),s}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}function pt(t){let e=q();e.includes(t)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function ft(t){let e=q();const s=e.indexOf(t);s!==-1&&(e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function E(){window.removeEventListener("keydown",F),document.body.classList.remove("show-modal"),z()}function yt(t){t.currentTarget===t.target&&E()}function F(t){t.code==="Escape"&&E()}function ht(){return document.body.classList.contains("show-modal")}function z(){document.body.style.overflow=ht()?"hidden":""}const St=document.querySelector(".discount-container");let M=[];const vt=t=>{if(localStorage.getItem("addedProducts")){const e=JSON.parse(localStorage.getItem("addedProducts"));e.includes(t)||(e.push(t),localStorage.setItem("addedProducts",JSON.stringify(e)))}else localStorage.setItem("addedProducts",JSON.stringify([t]))},bt=t=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(t)?"icon-check":"icon-heroicons-solid_shopping-cart";async function Ct(){try{let e=function(c){const{_id:a,name:n,img:D,price:j}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${D}" alt="${n}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${n}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${j}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${bt(a)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(e).join("")},o=function(){const c=s(M);St.innerHTML=c};M=(await p.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(c=>{c.addEventListener("click",a=>{vt(a.currentTarget.dataset.id)})})}catch(t){console.error("Error fetching discount products:",t.message)}}Ct();const qt=document.querySelector("ul");let Pt=8;function Lt(t,e){let s="",o,r=e-1,c=e;e>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${e-1})"><span><i class="left"></i> < </span></li>`);for(let a=r;a<=c;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>7</span></li>`,e<=t+2&&(s+=`<li class="numb" onclick="element(totalPages, ${e})"><span>8</span></li>`))),e<t&&(s+=`<li class="btn next"onclick="element(totalPages, ${e+1})"><span><i class="right"></i> > </span></li>`),qt.innerHTML=s}Lt(Pt,2);
//# sourceMappingURL=commonHelpers2.js.map
