var G=Object.defineProperty;var K=(e,t,s)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var A=(e,t,s)=>(K(e,typeof t!="symbol"?t+"":t,s),s);import"./assets/cart-2902bdee.js";import{a as S}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",T);n.backdrop.addEventListener("click",se);const V=document.querySelectorAll(".cardlist-img");V.forEach(e=>{e.addEventListener("click",t=>F(t))});function F(e){const t=e.currentTarget.closest(".card-list-item").dataset.id;z(t)}const X="https://food-boutique.b.goit.study/api/";async function z(e){window.addEventListener("keydown",j),document.body.classList.add("show-modal"),await Z(e),D(e),R()}async function Y(e){try{return(await S.get(`${X}products/${e}`)).data}catch(t){return console.error("Error:",t.message),null}}async function Z(e){const t=await Y(e);if(t){n.modalImg.src=t.img,n.modalImg.alt=t.name,n.modalTitle.textContent=t.name,n.modalCategory.textContent=t.category,n.modalSize.textContent=t.size,n.modalPopularity.textContent=t.popularity,n.modalDesc.textContent=t.desc,n.modalPrice.textContent=`$${t.price.toFixed(2)}`;const s=D(e),r=w().includes(e);$(s,r),t.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}}function $(e,t){const s=e?"Remove from":t?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=e}function D(e){const s=w().includes(e);return n.addToCart.addEventListener("click",()=>{s?(te(e),$(!1,!1)):(ee(e),$(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(c=>c.id===e).forEach(c=>c.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
    <use href="./img/icons.svg#icon-check"></use> 
    </svg>`)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function ee(e){let t=w();t.some(s=>s.id===e.id)||(t.push(e),localStorage.setItem("cart",JSON.stringify(t)),console.log("Added to cart:",e),console.log("Cart:",t))}function te(e){let t=w();const s=t.findIndex(r=>r.id===e);s!==-1&&(t.splice(s,1),localStorage.setItem("cart",JSON.stringify(t)),console.log("Removed from cart:",removedProduct),console.log("Cart:",t))}function T(){window.removeEventListener("keydown",j),document.body.classList.remove("show-modal"),R()}function se(e){e.currentTarget===e.target&&T()}function j(e){e.code==="Escape"&&T()}function oe(){return document.body.classList.contains("show-modal")}function R(){document.body.style.overflow=oe()?"hidden":""}class q{constructor(t,s,r,o){A(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=t,this.filters=s,this.page=r,this.limit=o}async fetchBreeds(){try{return(await S.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`)).data}catch(t){console.error("Error:",t.message)}}}const re=document.querySelector(".search-form"),ce=document.querySelector(".first-input-search"),H=document.querySelector(".filters-result"),U=document.querySelector(".first-select-search-not-focus"),N=document.querySelector(".button-categories"),ae=document.querySelector(".span-button-categories"),Q="products";let L="",m="",v=1,d=6,f={},C={},b={},u={},ie=window.matchMedia("(min-width: 768px)").matches,ne=window.matchMedia("(min-width: 1440px)").matches;ne?d=9:ie?d=8:d=6;function x(e,t,s,r){localStorage.setItem("data-for-search",JSON.stringify({keyword:e,category:t,page:s,limit:r}))}x(L,m,v,d);async function P(){try{const e=JSON.parse(localStorage.getItem("data-for-search")),t=`keyword=${e.keyword}&category=${e.category}`;u=await new q(Q,t,v,d).fetchBreeds()}catch(e){p(),console.error("Error:",e.message)}}const p=()=>{const e=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;H.innerHTML=e};async function le(){try{const e=localStorage.getItem("products-home-page-filters");if(e){const t=JSON.parse(e);t.length>=d?f=t.slice(0,d):(await P(),f=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(f)))}else await P(),f=u.results,localStorage.setItem("products-home-page-filters",JSON.stringify(f));B(f),u.totalPages===0&&p()}catch(e){p(),console.error("Error:",e.message)}}le();re.addEventListener("submit",async e=>{e.preventDefault(),L=ce.value.trim(),x(L,m,v,d),await P(),C=u.results,B(C),u.totalPages===0&&p()});async function de(){try{const e=localStorage.getItem("categories-filters");if(e)b=JSON.parse(e);else{const t="",s=`${Q}/categories`;b=await new q(s,t,v,d).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(b))}ue(b)}catch(e){p(),console.error("Error:",e.message)}}de();function ue(e){const t=[];e.forEach(r=>{let o="";r!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${r.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${r}</button></li>`,t.push(o)}),t.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),U.insertAdjacentHTML("beforeend",t.join(""));const s=document.querySelectorAll(".button-li-filters");fe(s)}N.addEventListener("click",()=>me(N,U));function me(e,t){t.classList.add("first-select-search"),document.addEventListener("click",s=>ge(s,e,t))}function ge(e,t,s){!t.contains(e.target)&&!s.contains(e.target)?s.classList.remove("first-select-search"):s.contains(e.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function fe(e){e.forEach(t=>{t.addEventListener("click",pe)})}async function pe(e){const t=e.currentTarget.textContent;t!=="Pantry Items"?m=t.replace(/ /g,"_").replace(/\//g,"&"):m=t,ae.innerHTML=`${t}`,m==="Show_all"&&(m=""),x(L,m,v,d),await P(),C=u.results,B(C),u.totalPages===0&&p()}function B(e){const t=[],s=JSON.parse(localStorage.getItem("cart"));e.forEach(o=>{let c="",a="icon-heroicons-solid_shopping-cart",i=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?i=o.category:i=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(y=>y._id===o._id)?a="icon-check":a="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?c=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="./img/icons.svg#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="./img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`:c=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="./img/icons.svg#${a}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="./img/icons.svg#icon-discount-1"></use>
                </svg>
                </li>`,t.push(c)}),H.innerHTML=`<ul class="card-list">${t.join(" ")}</ul>`,ye(e),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",c=>F(c))})}function ye(e){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",r=>{const o=r.currentTarget.getAttribute("id"),c=e.find(i=>i._id===o),a=localStorage.getItem("cart");if(a){const i=JSON.parse(a);i.push(c),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([c]));r.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="./img/icons.svg#icon-check"></use>
            </svg>`,r.currentTarget.setAttribute("disabled","true")})})}document.addEventListener("DOMContentLoaded",async function(){const e=new q("products/popular?limit=5");try{const t=Se();if(t)J(t);else{const s=await e.fetchBreeds();he(s),J(s)}_()}catch(t){console.error("Error:",t)}});function he(e){localStorage.setItem("popularProducts",JSON.stringify(e)),_()}function Se(){const e=localStorage.getItem("popularProducts");return e?JSON.parse(e):null}function J(e){const t=document.querySelectorAll(".product-template");t.forEach(s=>{s.querySelector(".product-image").src="",s.querySelector(".product-name").textContent="",s.querySelector(".category-value").textContent="",s.querySelector(".size-value").textContent="",s.querySelector(".popularity-value").textContent=""}),e.slice(0,t.length).forEach((s,r)=>{const o=t[r];o.style.display="flex",o.querySelector(".product-image").src=s.img,o.querySelector(".product-name").textContent=s.name,o.querySelector(".category-value").textContent=s.category.replace("_"," "),o.querySelector(".size-value").textContent=s.size,o.querySelector(".popularity-value").textContent=s.popularity;const c={_Id:s._id,name:s.name,img:s.img,category:s.category,price:s.price,size:s.size,is10PercentOff:s.is10PercentOff,popularity:s.popularity};o.querySelector(".product-image-container").addEventListener("click",function(){let g=[c];localStorage.setItem("popul",JSON.stringify(g)),z(c._Id)});const i=o.querySelector(".add-to-cart-btn");i.onclick=function(){ve(c),updateCart()},i.setAttribute("data-product-id",s._id)})}function ve(e){let t=JSON.parse(localStorage.getItem("cart"))||[];const s=t.findIndex(r=>r._Id===e._Id);s!==-1?t.splice(s,1):t.push(e),localStorage.setItem("cart",JSON.stringify(t)),_()}function _(){const e=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const r=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),c=s.querySelector(".icon-on"),a=e.some(i=>i._Id===r);o&&c&&(a?(s.classList.add("added-to-cart"),o.style.display="block",c.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",c.style.display="block"))})}console.log("hello");const l={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};l.formSubscription.addEventListener("submit",be);const E=new q;E.endPoint="subscription";function be(e){e.preventDefault();const t=e.currentTarget.elements.email.value;Le(t),e.currentTarget.reset()}async function Le(e){S.defaults.baseURL=E.baseUrl;const t={method:"post",url:E.endPoint,headers:{"Content-Type":"application/json"},data:{email:e}};try{const s=await S.request(t);alert(s.data.message)}catch(s){alert(s.response.data.message),console.log(s)}}l.openModalPolicy.addEventListener("click",()=>{W(l.policyLink),Ce(),window.addEventListener("keydown",I)});l.openModalTerms.addEventListener("click",()=>{W(l.termsLink),we(),window.addEventListener("keydown",I)});function W(e){e.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function Ce(){l.closeModalPolicyBtn.addEventListener("click",O)}function O(){l.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),Pe()}function Pe(){l.closeModalPolicyBtn.removeEventListener("click",O),window.removeEventListener("keydown",I)}function we(){l.closeModalTermsBtn.addEventListener("click",M)}function M(){l.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),qe()}function qe(){l.closeModalTermsBtn.removeEventListener("click",M),window.removeEventListener("keydown",I)}function I({code:e}){e==="Escape"&&(O(),M())}const Ie=document.querySelector(".discount-container");let k=[],h=[];const ke=e=>{h.find(s=>s._id===e._id)||(h.push(e),localStorage.setItem("addedProducts",JSON.stringify(h)))},$e=e=>h.some(t=>t._id===e);async function Ee(){try{let t=function(c){const{_id:a,name:i,img:g,price:y}=c;return`<div class="discount-card">
                  <div class="discount-logo">
                  <svg class="logo">
                      <use href="../img/icons.svg#icon-discount-1" width="60" height="60"></use>
                  </svg>
                  </div>
                  <div class="discount-card-image">
                  <img src="${g}" alt="${i}" width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                  <div class="discount-card-name">
                      <p class="discount-card-text">${i}</p>
                  </div>
  
                  <div class="discount-card-price">
                      <p class="discount-card-text">$${y}</p>
  
                      <button class="discount-card-button" type="button" data-id=${a}>
                      <svg class="">
                          <use href="../img/icons.svg#${$e(a)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                      </svg>
                      </button>
                  </div>
                  </div>
              </div>`},s=function(c){return c.slice(0,2).map(t).join("")},r=function(){const c=s(k);Ie.innerHTML=c};k=(await S.get("https://food-boutique.b.goit.study/api/products/discount")).data,h=JSON.parse(localStorage.getItem("addedProducts"))||[],r();const o=document.querySelectorAll(".discount-card-button");Array.from(o).forEach(c=>{c.addEventListener("click",a=>{const i=a.currentTarget.dataset.id,g=k.find(y=>y._id===i);ke(g),r()})})}catch(e){console.error("Error fetching discount products:",e.message)}}Ee();const Te=document.querySelector("ul");let xe=8;function Be(e,t){let s="",r,o=t-1,c=t;t>1&&(s+=`<li class="btn prev" onclick="element(totalPages, ${t-1})"><span><i class="left"></i> < </span></li>`);for(let a=o;a<=c;a++)a>e||(a==0&&(a=a+1),t==a?r="active":r="",s+=`<li class="numb ${r}"onclick="element(totalPages, ${a})"><span>${a}</span></li>`);t<e&&t<e&&(s+='<li class="dots"><span>...</span></li>',t<e+1&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>7</span></li>`,t<=e+2&&(s+=`<li class="numb" onclick="element(totalPages, ${t})"><span>8</span></li>`))),t<e&&(s+=`<li class="btn next"onclick="element(totalPages, ${t+1})"><span><i class="right"></i> > </span></li>`),Te.innerHTML=s}Be(xe,2);
//# sourceMappingURL=commonHelpers2.js.map
