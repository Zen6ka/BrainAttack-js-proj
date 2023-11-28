var Z=Object.defineProperty;var tt=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var F=(t,e,s)=>(tt(t,typeof e!="symbol"?e+"":e,s),s);import{s as u}from"./assets/icons-952a36af.js";import{a as N}from"./assets/vendor-27c5a77b.js";const n={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};n.closeModalBtn.addEventListener("click",A);n.backdrop.addEventListener("click",dt);const et=document.querySelectorAll(".cardlist-img");et.forEach(t=>{t.addEventListener("click",e=>z(e))});function z(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;E(e)}const st=document.querySelectorAll(".product-image");st.forEach(t=>{t.addEventListener("click",e=>ot(e))});function ot(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;E(e)}const at=document.querySelectorAll(".discount-card");at.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),E(s)})});const rt="https://food-boutique.b.goit.study/api/";async function ct(t){try{const e=await N.get(`${rt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function it(t){const e=await ct(t);if(e){n.modalImg.src=e.img,n.modalImg.alt=e.name,n.modalTitle.textContent=e.name,n.modalCategory.textContent=e.category,n.modalSize.textContent=e.size,n.modalPopularity.textContent=e.popularity,n.modalDesc.textContent=e.desc,n.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=D(e),a=w().includes(t);_(s,a),e.is10PercentOff?n.discountProduct.classList.remove("hidden"):n.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function _(t,e){const s=t?"Remove from":e?"Added to":"Add to";n.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,n.addToCart.disabled=t}function D(t){const s=w().some(a=>a._id===t._id);return n.addToCart.removeEventListener("click",H),s||n.addToCart.addEventListener("click",()=>{H(t,s)}),s}function w(){return JSON.parse(localStorage.getItem("cart"))||[]}function H(t,e){const s=t._id;e?(lt(t._id),_(!1,!1)):(nt(t),_(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${u}#icon-check"></use> 
  </svg>`)}function nt(t){let e=w();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function lt(t){let e=w();const s=e.findIndex(a=>a._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function E(t){window.addEventListener("keydown",j),document.body.classList.add("show-modal"),D(t),it(t),U()}function A(){window.removeEventListener("keydown",j),document.body.classList.remove("show-modal"),U()}function dt(t){t.currentTarget===t.target&&A()}function j(t){t.code==="Escape"&&A()}function ut(){return document.body.classList.contains("show-modal")}function U(){document.body.style.overflow=ut()?"hidden":""}const M=document.querySelector(".pagination-page-list");let h="",y="";function v(t,e){if(t<1){M.innerHTML="";return}let s="",a=e-1,o=e;e>1&&(s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>');for(let r=a;r<=o;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);e<t&&e<t&&(s+='<li class="dots"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>',M.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),y=document.querySelector(".right-arrow-pagination"),h.addEventListener("click",()=>{v(t,e-1)}),y.addEventListener("click",()=>{v(t,e+1)}),gt(h,y,t)}function gt(t,e,s){const a=document.querySelectorAll(".button-pagination"),o=JSON.parse(localStorage.getItem("data-for-search")).page;[...a].filter(c=>c.textContent===String(o)).map(c=>{c.classList.add("active"),c.textContent==="1"?t.classList.add("visually-hidden"):c.textContent===String(s)&&e.classList.add("visually-hidden")}),[...a].forEach(c=>{c.addEventListener("click",i=>$(i,s))})}async function $(t,e){t.currentTarget.removeEventListener("click",$),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"?(h.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(y.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let a=t.currentTarget.textContent;k(s.keyword,s.category,a,s.limit),(await C()).results,q(),[...document.querySelectorAll(".button-pagination")].forEach(c=>{const i=c.classList.contains("active");i&&c.textContent!==a?(c.classList.remove("active"),c.addEventListener("click",$)):i||c.addEventListener("click",$)})}document.addEventListener("DOMContentLoaded",function(){T();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(W(e),Q()):mt()});async function mt(){const t=new J("products/popular","",1,5);try{const e=await t.fetchBreeds();ft(e);const s=e.slice(0,5);W(s),Q()}catch(e){console.error("Error:",e)}}function Q(){T()}const pt=document.querySelector(".products-container");function ft(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function W(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${u}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${u}#icon-check"></use>
</svg>

      </button>
    `,pt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){E(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){ht(e)}})}function ht(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(a=>a&&a._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),T()}function T(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const a=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),c=t.some(i=>i&&i._id===a);o&&r&&(c?(s.classList.add("added-to-cart"),o.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",r.style.display="block"))})}const O=document.getElementById("scroll-up");function yt(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<100?O.style.display="block":O.style.display="none"}window.addEventListener("scroll",yt);O.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});class J{constructor(e,s,a,o){F(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=a,this.limit=o}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await N.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const St=document.querySelector(".search-form"),vt=document.querySelector(".first-input-search"),Y=document.querySelector(".filters-result"),K=document.querySelector(".first-select-search-not-focus"),R=document.querySelector(".button-categories"),bt=document.querySelector(".span-button-categories"),G="products";let L="",m="",b=1,g=6,d="",p={},P={},I={},l={},Ct=window.matchMedia("(min-width: 768px)").matches,It=window.matchMedia("(min-width: 1440px)").matches;It?g=9:Ct?g=8:g=6;function k(t,e,s,a){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:a}))}k(L,m,b,g);async function C(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return l=await new J(G,e,t.page,t.limit).fetchBreeds(),l}catch(t){S(),console.error("Error:",t.message)}}const S=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Y.innerHTML=t};async function $t(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);d=JSON.parse(e),s.length>=g?p=s.slice(0,g):(await C(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d)))}else await C(),p=l.results,d=l.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(p)),localStorage.setItem("all-pages-result",JSON.stringify(d));localStorage.setItem("resultProductsFilrers",JSON.stringify(p)),q(),v(d,2),l.totalPages===0&&S()}catch(t){S(),console.error("Error:",t.message)}}$t();St.addEventListener("submit",async t=>{t.preventDefault(),L=vt.value.trim(),b=1,k(L,m,b,g),await C(),P=l.results,d=l.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(P)),q(),v(d,2),l.totalPages===0&&S()});async function Lt(){try{const t=localStorage.getItem("categories-filters");if(t)I=JSON.parse(t);else{const e="",s=`${G}/categories`;I=await new J(s,e,b,g).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(I))}Pt(I)}catch(t){S(),console.error("Error:",t.message)}}Lt();function Pt(t){const e=[];t.forEach(a=>{let o="";a!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${a.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${a}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),K.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Tt(s)}R.addEventListener("click",()=>wt(R,K));function wt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Et(s,t,e))}function Et(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Tt(t){t.forEach(e=>{e.addEventListener("click",kt)})}async function kt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?m=e.replace(/ /g,"_").replace(/\//g,"&"):m=e,bt.innerHTML=`${e}`,m==="Show_all"&&(m=""),k(L,m,b,g),await C(),P=l.results,d=l.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(P)),q(),v(d,2),l.totalPages===0&&S()}function q(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let r="",c="icon-heroicons-solid_shopping-cart",i=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?i=o.category:i=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(X=>X._id===o._id)?c="icon-check":c="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${o._id}>
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
                <use href="${u}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${u}#icon-discount-1"></use>
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
                <use href="${u}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="${u}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),Y.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,qt(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",r=>z(r))})}function qt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",a=>{const o=a.currentTarget.getAttribute("id"),r=t.find(i=>i._id===o),c=localStorage.getItem("cart");if(c){const i=JSON.parse(c);i.push(r),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([r]));a.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${u}#icon-check"></use>
            </svg>`,a.currentTarget.setAttribute("disabled","true"),T()})})}const _t=document.querySelector(".discount-container"),x="cart";let B=[],f=[];const Ot=t=>{f=JSON.parse(localStorage.getItem(x))||[],f.find(s=>s._id===t._id)||(f.push(t),localStorage.setItem(x,JSON.stringify(f)),V())},xt=t=>f.some(e=>e._id===t),V=()=>{const t=At(B);_t.innerHTML=t,Bt()},Nt=t=>{const e=t.currentTarget.dataset.id,s=B.find(a=>a._id===e);Ot(s)},At=t=>t.slice(0,2).map(Jt).join(""),Jt=t=>{const{_id:e,name:s,img:a,price:o}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${u}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
                <img src="${a}" alt="${s}" width="114" height="'114" />
              </div>
              <div class="discount-card-info">
                <div class="discount-card-name">
                  <p class="discount-card-text">${s}</p>
                </div>
                <div class="discount-card-price">
                  <p class="discount-card-text">$${o}</p>
                  <button class="discount-card-button" type="button" data-id=${e}>
                    <svg class="">
                      <use href="${u}#${xt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},Bt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Nt)})},Ft=async()=>{try{B=(await N.get("https://food-boutique.b.goit.study/api/products/discount")).data,f=JSON.parse(localStorage.getItem(x))||[],V()}catch(t){console.error("Error fetching discount products:",t.message)}};Ft();
//# sourceMappingURL=commonHelpers2.js.map
