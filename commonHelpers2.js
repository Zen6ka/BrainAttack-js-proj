var at=Object.defineProperty;var ot=(t,e,s)=>e in t?at(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var D=(t,e,s)=>(ot(t,typeof e!="symbol"?e+"":e,s),s);import{s as m}from"./assets/icons-88579523.js";import{a as J}from"./assets/vendor-27c5a77b.js";document.addEventListener("DOMContentLoaded",function(){E();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(Y(e),W()):ct()});async function ct(){const t=new R("products/popular","",1,5);try{const e=await t.fetchBreeds();nt(e);const s=e.slice(0,5);Y(s),W()}catch(e){console.error("Error:",e)}}function W(){E()}const rt=document.querySelector(".products-container");function nt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function Y(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,rt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){x(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){it(e)}})}function it(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),E()}function E(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),n=s.querySelector(".icon-on"),r=t.some(c=>c&&c._id===o);a&&n&&(r?(s.classList.add("added-to-cart"),a.style.display="block",n.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",n.style.display="block"))})}const O=document.getElementById("scroll-up");function lt(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<100?O.style.display="block":O.style.display="none"}window.addEventListener("scroll",lt);O.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};d.closeModalBtn.addEventListener("click",H);d.backdrop.addEventListener("click",vt);const dt=document.querySelectorAll(".cardlist-img");dt.forEach(t=>{t.addEventListener("click",e=>K(e))});function K(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;x(e)}const ut=document.querySelectorAll(".product-image");ut.forEach(t=>{t.addEventListener("click",e=>gt(e))});function gt(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;x(e)}const mt=document.querySelectorAll(".discount-card");mt.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),x(s)})});const pt="https://food-boutique.b.goit.study/api/";async function ft(t){try{const e=await J.get(`${pt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function ht(t){const e=await ft(t);if(e){d.modalImg.src=e.img,d.modalImg.alt=e.name,d.modalTitle.textContent=e.name,d.modalCategory.textContent=e.category,d.modalSize.textContent=e.size,d.modalPopularity.textContent=e.popularity,d.modalDesc.textContent=e.desc,d.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=G(e);N(s,e),e.is10PercentOff?d.discountProduct.classList.remove("hidden"):d.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function N(t,e){const s=t?"Remove from":"Add to";d.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,d.addToCart.disabled=!1,d.addToCart.removeEventListener("click",()=>{j(e,t)}),d.addToCart.addEventListener("click",()=>{j(e,t)})}function G(t){return F().some(o=>o._id===t._id)}function F(){return JSON.parse(localStorage.getItem("cart"))||[]}function j(t,e){const s=t._id;e?(St(t._id),N(!1,t)):(yt(t),E(),N(!0,t)),[...document.querySelectorAll(".cardlist-add-cart")].filter(n=>n.id===s).forEach(n=>n.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${m}#icon-check"></use> 
  </svg>`)}function yt(t){let e=F();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function St(t){let e=F();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function x(t){window.addEventListener("keydown",V),document.body.classList.add("show-modal"),G(t),ht(t),X()}function H(){window.removeEventListener("keydown",V),document.body.classList.remove("show-modal"),X()}function vt(t){t.currentTarget===t.target&&H()}function V(t){t.code==="Escape"&&H()}function bt(){return document.body.classList.contains("show-modal")}function X(){document.body.style.overflow=bt()?"hidden":""}const U=document.querySelector(".pagination-page-list");let S="",v="";function M(t,e){if(t<1){U.innerHTML="";return}let s="",o=e-1,a=e;s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>';for(let i=o;i<=a;i++)i>t||(i==0&&(i=i+1),s+=`<li><button class="numb button-pagination"><span>${i}</span></button></li>`);5<t&&e<t&&(s+='<li class="dots dots-pagination"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>',U.innerHTML=s,S=document.querySelector(".left-arrow-pagination"),v=document.querySelector(".right-arrow-pagination");const n=document.querySelectorAll(".button-pagination"),r=document.querySelector(".dots-pagination"),c=[...n];S.addEventListener("click",()=>{const i=c.find(l=>l.classList.contains("active")),h=Number(i.textContent);i.classList.remove("active");const I=c.find(l=>l.textContent===String(h-1));if(I)I.classList.add("active");else{const l=document.createElement("li"),p=document.createElement("button");p.classList.add("numb","active","button-pagination"),p.innerHTML=`<span>${h-1}</span>`,l.appendChild(p),r.insertAdjacentElement("afterend",l),c.push(p),console.log(c)}console.log(c.find(l=>l.classList.contains("active")))}),v.addEventListener("click",()=>{const i=c.find(l=>l.classList.contains("active")),h=Number(i.textContent);i.classList.remove("active");const I=c.find(l=>l.textContent===String(h+1));if(I)I.classList.add("active");else{const l=document.createElement("li"),p=document.createElement("button");p.classList.add("numb","active","button-pagination"),p.innerHTML=`<span>${h+1}</span>`,l.appendChild(p),r.insertAdjacentElement("beforebegin",l),c.push(p),console.log(c)}console.log(c.find(l=>l.classList.contains("active")))}),Ct(S,v,c,t)}function Ct(t,e,s,o){const a=JSON.parse(localStorage.getItem("data-for-search")).page;s.filter(r=>r.textContent===String(a)).map(r=>{r.classList.add("active"),r.textContent==="1"&&r.textContent===String(o)?(t.classList.add("visually-hidden"),e.classList.add("visually-hidden")):r.textContent==="1"?t.classList.add("visually-hidden"):r.textContent===String(o)&&e.classList.add("visually-hidden")}),s.forEach(r=>{r.addEventListener("click",c=>T(c,o))})}async function T(t,e){t.currentTarget.removeEventListener("click",T),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"&&t.currentTarget.textContent===String(e)?(S.classList.add("visually-hidden"),v.classList.add("visually-hidden")):t.currentTarget.textContent==="1"?(S.classList.add("visually-hidden"),v.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(v.classList.add("visually-hidden"),S.classList.remove("visually-hidden")):(v.classList.remove("visually-hidden"),S.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let o=t.currentTarget.textContent;_(s.keyword,s.category,o,s.limit);const n=(await w()).results;localStorage.setItem("resultProductsFilrers",JSON.stringify(n)),B(),[...document.querySelectorAll(".button-pagination")].forEach(c=>{const i=c.classList.contains("active");i&&c.textContent!==o?(c.classList.remove("active"),c.addEventListener("click",T)):i||c.addEventListener("click",T)})}class R{constructor(e,s,o,a){D(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await J.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const Lt=document.querySelector(".search-form"),It=document.querySelector(".first-input-search"),Z=document.querySelector(".filters-result"),tt=document.querySelector(".first-select-search-not-focus"),Q=document.querySelector(".button-categories"),$t=document.querySelector(".span-button-categories"),et="products";let k="",y="",$=1,f=6,g="",b={},q={},P={},u={},wt=window.matchMedia("(min-width: 768px)").matches,Et=window.matchMedia("(min-width: 1440px)").matches;Et?f=9:wt?f=8:f=6;function _(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}_(k,y,$,f);async function w(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return u=await new R(et,e,t.page,t.limit).fetchBreeds(),u}catch(t){L(),console.error("Error:",t.message)}}const L=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Z.innerHTML=t};async function Pt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);g=JSON.parse(e),s.length>=f?b=s.slice(0,f):(await w(),b=u.results,g=u.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(b)),localStorage.setItem("all-pages-result",JSON.stringify(g)))}else await w(),b=u.results,g=u.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(b)),localStorage.setItem("all-pages-result",JSON.stringify(g));localStorage.setItem("resultProductsFilrers",JSON.stringify(b)),B(),M(g,2),u.totalPages===0&&L()}catch(t){L(),console.error("Error:",t.message)}}Pt();Lt.addEventListener("submit",async t=>{t.preventDefault(),k=It.value.trim(),$=1,_(k,y,$,f),await w(),q=u.results,g=u.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(q)),B(),M(g,2),u.totalPages===0&&L()});async function Tt(){try{const t=localStorage.getItem("categories-filters");if(t)P=JSON.parse(t);else{const e="",s=`${et}/categories`;P=await new R(s,e,$,f).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(P))}kt(P)}catch(t){L(),console.error("Error:",t.message)}}Tt();function kt(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),tt.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");_t(s)}Q.addEventListener("click",()=>qt(Q,tt));function qt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>xt(s,t,e))}function xt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function _t(t){t.forEach(e=>{e.addEventListener("click",Bt)})}async function Bt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?y=e.replace(/ /g,"_").replace(/\//g,"&"):y=e,$t.innerHTML=`${e}`,y==="Show_all"&&(y=""),_(k,y,$,f),await w(),q=u.results,g=u.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(q)),B(),M(g,2),u.totalPages===0&&L()}function B(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let n="",r="icon-heroicons-solid_shopping-cart",c=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?c=a.category:c=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(h=>h._id===a._id)?r="icon-check":r="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?n=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`:n=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img filters-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="visually-hidden">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(n)}),Z.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Ot(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",n=>K(n))})}function Ot(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),n=t.find(c=>c._id===a),r=localStorage.getItem("cart");if(r){const c=JSON.parse(r);c.push(n),localStorage.setItem("cart",JSON.stringify(c))}else localStorage.setItem("cart",JSON.stringify([n]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${m}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true"),E()})})}const Nt=document.querySelector(".discount-container"),A="cart";let z=[],C=[];const At=t=>{C=JSON.parse(localStorage.getItem(A))||[],C.find(s=>s._id===t._id)||(C.push(t),localStorage.setItem(A,JSON.stringify(C)),st())},Jt=t=>C.some(e=>e._id===t),st=()=>{const t=Ht(z);Nt.innerHTML=t,Rt()},Ft=t=>{const e=t.currentTarget.dataset.id,s=z.find(o=>o._id===e);At(s)},Ht=t=>t.slice(0,2).map(Mt).join(""),Mt=t=>{const{_id:e,name:s,img:o,price:a}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${m}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
                <img src="${o}" alt="${s}" width="114" height="'114" />
              </div>
              <div class="discount-card-info">
                <div class="discount-card-name">
                  <p class="discount-card-text">${s}</p>
                </div>
                <div class="discount-card-price">
                  <p class="discount-card-text">$${a}</p>
                  <button class="discount-card-button" type="button" data-id=${e}>
                    <svg class="">
                      <use href="${m}#${Jt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},Rt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Ft)})},zt=async()=>{try{z=(await J.get("https://food-boutique.b.goit.study/api/products/discount")).data,C=JSON.parse(localStorage.getItem(A))||[],st()}catch(t){console.error("Error fetching discount products:",t.message)}};zt();
//# sourceMappingURL=commonHelpers2.js.map
