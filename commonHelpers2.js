var U=Object.defineProperty;var Q=(e,t,s)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(Q(e,typeof t!="symbol"?t+"":t,s),s);import"./assets/cart-e0e8fada.js";import{a as p}from"./assets/vendor-27c5a77b.js";class C{constructor(t,s,o,r){T(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=t,this.filters=s,this.page=o,this.limit=r}async fetchBreeds(){try{const t=await p.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(t.data),t.data}catch(t){console.error("Error:",t.message)}}}const W=document.querySelector(".search-form"),G=document.querySelector(".first-input-search"),_=document.querySelector(".filters-result"),J=document.querySelector(".first-select-search-not-focus"),x=document.querySelector(".button-categories"),K=document.querySelector(".span-button-categories"),A="products";let S="",g="",f=1,l=6,m={},v={},h={},d={},V=window.matchMedia("(min-width: 768px)").matches,X=window.matchMedia("(min-width: 1280px)").matches;X?l=9:V?l=8:l=6;function I(e,t,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:e,category:t,page:s,limit:o}))}I(S,g,f,l);async function b(){try{const e=JSON.parse(localStorage.getItem("data-for-search")),t=`keyword=${e.keyword}&category=${e.category}`;d=await new C(A,t,f,l).fetchBreeds()}catch(e){y(),console.error("Error:",e.message)}}const y=()=>{const e=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;_.innerHTML=e};async function Y(){try{const e=localStorage.getItem("products-home-page-filters");if(e){const t=JSON.parse(e);t.length>=l?m=t.slice(0,l):(await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m)))}else await b(),m=d.results,localStorage.setItem("products-home-page-filters",JSON.stringify(m));E(m)}catch(e){y(),console.error("Error:",e.message)}}Y();W.addEventListener("submit",async e=>{e.preventDefault(),S=G.value.trim(),I(S,g,f,l),await b(),v=d.results,E(v),d.totalPages===0&&y()});async function Z(){try{const e=localStorage.getItem("categories-filters");if(e)h=JSON.parse(e);else{const t="",s=`${A}/categories`;h=await new C(s,t,f,l).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(h))}ee(h)}catch(e){y(),console.error("Error:",e.message)}}Z();function ee(e){const t=[];e.forEach(o=>{const r=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`;t.push(r)}),t.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),J.insertAdjacentHTML("beforeend",t.join(""));const s=document.querySelectorAll(".button-li-filters");oe(s)}x.addEventListener("click",()=>te(x,J));function te(e,t){t.classList.add("first-select-search"),document.addEventListener("click",s=>se(s,e,t))}function se(e,t,s){!t.contains(e.target)&&!s.contains(e.target)?s.classList.remove("first-select-search"):s.contains(e.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function oe(e){e.forEach(t=>{t.addEventListener("click",re)})}async function re(e){const t=e.currentTarget.textContent;g=t.replace(/ /g,"_").replace(/\//g,"&"),K.innerHTML=`${t}`,g==="Show_all"&&(g=""),I(S,g,f,l),await b(),v=d.results,E(v),d.totalPages===0&&y()}function E(e){const t=[];e.forEach(s=>{if(s.is10PercentOff){const o=`<li class="card-list-item id-for-del" data-id=${s._id}>
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
                </li>`;t.push(o)}}),_.innerHTML=`<ul class="card-list">${t.join(" ")}</ul>`,ae(e)}function ae(e){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("id"),a=e.find(n=>n._id===r),c=localStorage.getItem("card");if(c){const n=JSON.parse(c);n.push(a),localStorage.setItem("card",JSON.stringify(n))}else localStorage.setItem("card",JSON.stringify([a]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="../img/icons.svg#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true")})})}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.openModalBtn.addEventListener("click",()=>F(i.openModalBtn.dataset.productId));i.closeModalBtn.addEventListener("click",k);i.backdrop.addEventListener("click",me);const ce=document.querySelectorAll(".cardlist-img");ce.forEach(e=>{e.addEventListener("click",t=>handleImageClick(t))});const ie="https://food-boutique.b.goit.study/api/";async function F(e){window.addEventListener("keydown",D),document.body.classList.add("show-modal"),await le(e),z(e),j()}async function ne(e){try{return(await p.get(`${ie}products/${e}`)).data}catch(t){return console.error("Error:",t.message),null}}async function le(e){const t=await ne(e);if(t){i.modalImg.src=t.img,i.modalImg.alt=t.name,i.modalTitle.textContent=t.name,i.modalCategory.textContent=t.category,i.modalSize.textContent=t.size,i.modalPopularity.textContent=t.popularity,i.modalDesc.textContent=t.desc,i.modalPrice.textContent=`$${t.price.toFixed(2)}`;const s=z(e),o=q().includes(e);$(s,o)}}function $(e,t){const s=e?"Remove from":t?"Added to":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=e}function z(e){const s=q().includes(e);return i.addToCart.addEventListener("click",()=>{s?(ue(e),$(!1,!1)):(de(e),$(!0,!0))}),s}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}function de(e){let t=q();t.includes(e)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)))}function ue(e){let t=q();const s=t.indexOf(e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)))}function k(){window.removeEventListener("keydown",D),document.body.classList.remove("show-modal"),j()}function me(e){e.currentTarget===e.target&&k()}function D(e){e.code==="Escape"&&k()}function ge(){return document.body.classList.contains("show-modal")}function j(){document.body.style.overflow=ge()?"hidden":""}document.addEventListener("DOMContentLoaded",async function(){const e=new C("products/popular?limit=5");try{const t=fe();if(t)O(t);else{const s=await e.fetchBreeds();pe(s),O(s)}L()}catch(t){console.error("Error:",t)}});function pe(e){localStorage.setItem("popularProducts",JSON.stringify(e)),L()}function fe(){const e=localStorage.getItem("popularProducts");return e?JSON.parse(e):null}function O(e){const t=document.querySelectorAll(".product-template");t.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),e.slice(0,t.length).forEach((s,o)=>{const r=t[o];r.style.display="flex",r.querySelector(".product-image").src=s.img,r.querySelector(".product-name").textContent=s.name,r.querySelector(".category-value").textContent=s.category.replace("_"," "),r.querySelector(".size-value").textContent=s.size,r.querySelector(".popularity-value").textContent=s.popularity;const a={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};r.querySelector(".product-image-container").addEventListener("click",function(){let P=[a];localStorage.setItem("popul",JSON.stringify(P)),F(a._Id)});const n=r.querySelector(".add-to-cart-btn");n.onclick=function(){ye(a),R()},n.setAttribute("data-product-id",s._id)})}function ye(e){let t=JSON.parse(localStorage.getItem("cart"))||[];const s=t.findIndex(o=>o._Id===e._Id);s!==-1?t.splice(s,1):t.push(e),localStorage.setItem("cart",JSON.stringify(t)),R(),L()}function L(){const e=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),r=s.querySelector(".icon-off"),a=s.querySelector(".icon-on"),c=e.some(n=>n._Id===o);r&&a&&(c?(s.classList.add("added-to-cart"),r.style.display="block",a.style.display="none"):(s.classList.remove("added-to-cart"),r.style.display="none",a.style.display="block"))})}function R(){document.dispatchEvent(new CustomEvent("cartUpdated"))}document.addEventListener("cartUpdated",()=>{L()});const u={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};u.formSubscription.addEventListener("submit",he);const w=new C;w.endPoint="subscription";function he(e){e.preventDefault();const t=e.currentTarget.elements.email.value;Se(t)}async function Se(e){p.defaults.baseURL=w.baseUrl;const t={method:"post",url:w.endPoint,headers:{"Content-Type":"application/json"},data:{email:e}};try{return(await p.request(t)).data}catch(s){console.log(s)}}u.openModalPolicy.addEventListener("click",()=>{B(),u.closeModalPolicyBtn.addEventListener("click",B)});u.openModalTerms.addEventListener("click",()=>{M(),u.closeModalTermsBtn.addEventListener("click",M)});function B(){u.policyLink.classList.toggle("is-hidden-policy")}function M(){u.termsLink.classList.toggle("is-hidden-policy")}const ve=document.querySelector(".discount-container");let N=[];const be=e=>{if(localStorage.getItem("addedProducts")){const t=JSON.parse(localStorage.getItem("addedProducts"));t.includes(e)||(t.push(e),localStorage.setItem("addedProducts",JSON.stringify(t)))}else localStorage.setItem("addedProducts",JSON.stringify([e]))},Ce=e=>localStorage.getItem("addedProducts")&&JSON.parse(localStorage.getItem("addedProducts")).includes(e)?"icon-check":"icon-heroicons-solid_shopping-cart";async function qe(){try{let t=function(a){const{_id:c,name:n,img:P,price:H}=a;return`<div class="discount-card">
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
  
                      <button class="discount-card-button" type="button" data-id=${c}>
                      <svg class="">
                          <use href="../img/icons.svg#${Ce(c)}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(a){return a.slice(0,2).map(t).join("")},o=function(){const a=s(N);ve.innerHTML=a};N=(await p.get("https://food-boutique.b.goit.study/api/products/discount")).data,o();const r=document.querySelectorAll(".discount-card-button");Array.from(r).forEach(a=>{a.addEventListener("click",c=>{be(c.currentTarget.dataset.id)})})}catch(e){console.error("Error fetching discount products:",e.message)}}qe();const Le=document.querySelector("ul");let Pe=8;function $e(e,t){let s="",o,r=t-1,a=t;t>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${t-1})"><span><i class="left"></i> < </span></li>`);for(let c=r;c<=a;c++)c>e||(c==0&&(c=c+1),t==c?o="active":o="",s+=`<li class="numb ${o}"onclick="element(totalPages, ${c})"><span>${c}</span></li>`);t<e&&t<e&&(s+='<li class="dots"><span>...</span></li>',t<e+1&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>7</span></li>`,t<=e+2&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>8</span></li>`))),t<e&&(s+=`<li class="btn next"onclick="element(totalPages, ${t+1})"><span><i class="right"></i> > </span></li>`),Le.innerHTML=s}$e(Pe,2);
//# sourceMappingURL=commonHelpers2.js.map
