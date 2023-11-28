var ot=Object.defineProperty;var at=(t,e,s)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var D=(t,e,s)=>(at(t,typeof e!="symbol"?e+"":e,s),s);import{s as m}from"./assets/icons-72887bcc.js";import{a as F}from"./assets/vendor-27c5a77b.js";const d={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};d.closeModalBtn.addEventListener("click",H);d.backdrop.addEventListener("click",pt);const ct=document.querySelectorAll(".cardlist-img");ct.forEach(t=>{t.addEventListener("click",e=>W(e))});function W(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;x(e)}const rt=document.querySelectorAll(".product-image");rt.forEach(t=>{t.addEventListener("click",e=>nt(e))});function nt(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;x(e)}const it=document.querySelectorAll(".discount-card");it.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),x(s)})});const lt="https://food-boutique.b.goit.study/api/";async function dt(t){try{const e=await F.get(`${lt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function ut(t){const e=await dt(t);if(e){d.modalImg.src=e.img,d.modalImg.alt=e.name,d.modalTitle.textContent=e.name,d.modalCategory.textContent=e.category,d.modalSize.textContent=e.size,d.modalPopularity.textContent=e.popularity,d.modalDesc.textContent=e.desc,d.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=Y(e),a=q().includes(t);A(s,a),e.is10PercentOff?d.discountProduct.classList.remove("hidden"):d.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function A(t,e){const s=t?"Remove from":e?"Added to":"Add to";d.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,d.addToCart.disabled=t}function Y(t){const s=q().some(a=>a._id===t._id);return d.addToCart.removeEventListener("click",j),s||d.addToCart.addEventListener("click",()=>{j(t,s)}),s}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}function j(t,e){const s=t._id;e?(mt(t._id),A(!1,!1)):(gt(t),A(!0,!0)),[...document.querySelectorAll(".cardlist-add-cart")].filter(n=>n.id===s).forEach(n=>n.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${m}#icon-check"></use> 
  </svg>`)}function gt(t){let e=q();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function mt(t){let e=q();const s=e.findIndex(a=>a._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function x(t){window.addEventListener("keydown",K),document.body.classList.add("show-modal"),Y(t),ut(t),G()}function H(){window.removeEventListener("keydown",K),document.body.classList.remove("show-modal"),G()}function pt(t){t.currentTarget===t.target&&H()}function K(t){t.code==="Escape"&&H()}function ft(){return document.body.classList.contains("show-modal")}function G(){document.body.style.overflow=ft()?"hidden":""}const U=document.querySelector(".pagination-page-list");let S="",v="";function M(t,e){if(t<1){U.innerHTML="";return}let s="",a=e-1,o=e;s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>';for(let i=a;i<=o;i++)i>t||(i==0&&(i=i+1),s+=`<li><button class="numb button-pagination"><span>${i}</span></button></li>`);5<t&&e<t&&(s+='<li class="dots dots-pagination"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`))),s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>',U.innerHTML=s,S=document.querySelector(".left-arrow-pagination"),v=document.querySelector(".right-arrow-pagination");const n=document.querySelectorAll(".button-pagination"),r=document.querySelector(".dots-pagination"),c=[...n];S.addEventListener("click",()=>{const i=c.find(l=>l.classList.contains("active")),h=Number(i.textContent);i.classList.remove("active");const I=c.find(l=>l.textContent===String(h-1));if(I)I.classList.add("active");else{const l=document.createElement("li"),p=document.createElement("button");p.classList.add("numb","active","button-pagination"),p.innerHTML=`<span>${h-1}</span>`,l.appendChild(p),r.insertAdjacentElement("afterend",l),c.push(p),console.log(c)}console.log(c.find(l=>l.classList.contains("active")))}),v.addEventListener("click",()=>{const i=c.find(l=>l.classList.contains("active")),h=Number(i.textContent);i.classList.remove("active");const I=c.find(l=>l.textContent===String(h+1));if(I)I.classList.add("active");else{const l=document.createElement("li"),p=document.createElement("button");p.classList.add("numb","active","button-pagination"),p.innerHTML=`<span>${h+1}</span>`,l.appendChild(p),r.insertAdjacentElement("beforebegin",l),c.push(p),console.log(c)}console.log(c.find(l=>l.classList.contains("active")))}),ht(S,v,c,t)}function ht(t,e,s,a){const o=JSON.parse(localStorage.getItem("data-for-search")).page;s.filter(r=>r.textContent===String(o)).map(r=>{r.classList.add("active"),r.textContent==="1"&&r.textContent===String(a)?(t.classList.add("visually-hidden"),e.classList.add("visually-hidden")):r.textContent==="1"?t.classList.add("visually-hidden"):r.textContent===String(a)&&e.classList.add("visually-hidden")}),s.forEach(r=>{r.addEventListener("click",c=>P(c,a))})}async function P(t,e){t.currentTarget.removeEventListener("click",P),t.currentTarget.classList.add("active"),console.log(e),t.currentTarget.textContent==="1"&&t.currentTarget.textContent===String(e)?(S.classList.add("visually-hidden"),v.classList.add("visually-hidden")):t.currentTarget.textContent==="1"?(S.classList.add("visually-hidden"),v.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(v.classList.add("visually-hidden"),S.classList.remove("visually-hidden")):(v.classList.remove("visually-hidden"),S.classList.remove("visually-hidden"));const s=JSON.parse(localStorage.getItem("data-for-search"));let a=t.currentTarget.textContent;B(s.keyword,s.category,a,s.limit);const n=(await w()).results;localStorage.setItem("resultProductsFilrers",JSON.stringify(n)),O(),[...document.querySelectorAll(".button-pagination")].forEach(c=>{const i=c.classList.contains("active");i&&c.textContent!==a?(c.classList.remove("active"),c.addEventListener("click",P)):i||c.addEventListener("click",P)})}document.addEventListener("DOMContentLoaded",function(){_();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(X(e),V()):yt()});async function yt(){const t=new R("products/popular","",1,5);try{const e=await t.fetchBreeds();vt(e);const s=e.slice(0,5);X(s),V()}catch(e){console.error("Error:",e)}}function V(){_()}const St=document.querySelector(".products-container");function vt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function X(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
    `,St.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){x(e._id)});const o=s.querySelector(".add-to-cart-btn");o.onclick=function(){bt(e)}})}function bt(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(a=>a&&a._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),_()}function _(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const a=s.getAttribute("data-product-id"),o=s.querySelector(".icon-off"),n=s.querySelector(".icon-on"),r=t.some(c=>c&&c._id===a);o&&n&&(r?(s.classList.add("added-to-cart"),o.style.display="block",n.style.display="none"):(s.classList.remove("added-to-cart"),o.style.display="none",n.style.display="block"))})}const N=document.getElementById("scroll-up");function Ct(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<100?N.style.display="block":N.style.display="none"}window.addEventListener("scroll",Ct);N.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});class R{constructor(e,s,a,o){D(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=a,this.limit=o}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await F.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const Lt=document.querySelector(".search-form"),It=document.querySelector(".first-input-search"),Z=document.querySelector(".filters-result"),tt=document.querySelector(".first-select-search-not-focus"),Q=document.querySelector(".button-categories"),$t=document.querySelector(".span-button-categories"),et="products";let T="",y="",$=1,f=6,g="",b={},k={},E={},u={},wt=window.matchMedia("(min-width: 768px)").matches,Et=window.matchMedia("(min-width: 1440px)").matches;Et?f=9:wt?f=8:f=6;function B(t,e,s,a){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:a}))}B(T,y,$,f);async function w(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return u=await new R(et,e,t.page,t.limit).fetchBreeds(),u}catch(t){L(),console.error("Error:",t.message)}}const L=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;Z.innerHTML=t};async function Pt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);g=JSON.parse(e),s.length>=f?b=s.slice(0,f):(await w(),b=u.results,g=u.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(b)),localStorage.setItem("all-pages-result",JSON.stringify(g)))}else await w(),b=u.results,g=u.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(b)),localStorage.setItem("all-pages-result",JSON.stringify(g));localStorage.setItem("resultProductsFilrers",JSON.stringify(b)),O(),M(g,2),u.totalPages===0&&L()}catch(t){L(),console.error("Error:",t.message)}}Pt();Lt.addEventListener("submit",async t=>{t.preventDefault(),T=It.value.trim(),$=1,B(T,y,$,f),await w(),k=u.results,g=u.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(k)),O(),M(g,2),u.totalPages===0&&L()});async function Tt(){try{const t=localStorage.getItem("categories-filters");if(t)E=JSON.parse(t);else{const e="",s=`${et}/categories`;E=await new R(s,e,$,f).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(E))}kt(E)}catch(t){L(),console.error("Error:",t.message)}}Tt();function kt(t){const e=[];t.forEach(a=>{let o="";a!=="Pantry_Items"?o=`<li class="li-first-select-search"><button class="button-li-filters">${a.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:o=`<li class="li-first-select-search"><button class="button-li-filters">${a}</button></li>`,e.push(o)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),tt.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");_t(s)}Q.addEventListener("click",()=>qt(Q,tt));function qt(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>xt(s,t,e))}function xt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function _t(t){t.forEach(e=>{e.addEventListener("click",Bt)})}async function Bt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?y=e.replace(/ /g,"_").replace(/\//g,"&"):y=e,$t.innerHTML=`${e}`,y==="Show_all"&&(y=""),B(T,y,$,f),await w(),k=u.results,g=u.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(k)),O(),M(g,2),u.totalPages===0&&L()}function O(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(o=>{let n="",r="icon-heroicons-solid_shopping-cart",c=o.category.replace(/_/g," ").replace(/&/g,"/");o.category=="Pantry_Items"?c=o.category:c=o.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(h=>h._id===o._id)?r="icon-check":r="icon-heroicons-solid_shopping-cart"),o.is10PercentOff?n=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`:n=`<li class="card-list-item id-for-del" data-id=${o._id}>
                <div class = "div-img">
                <img src="${o.img}" loading="lazy" class="cardlist-img filters-img" alt="${o.name}" />
                </div>
                <h3 class="card-list-product">${o.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${c}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${o.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${o.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${o._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${m}#${r}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${o.price}</p>
                <svg  class="visually-hidden">
                <use href="${m}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(n)}),Z.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Ot(t),document.querySelectorAll(".filters-img").forEach(o=>{o.addEventListener("click",n=>W(n))})}function Ot(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",a=>{const o=a.currentTarget.getAttribute("id"),n=t.find(c=>c._id===o),r=localStorage.getItem("cart");if(r){const c=JSON.parse(r);c.push(n),localStorage.setItem("cart",JSON.stringify(c))}else localStorage.setItem("cart",JSON.stringify([n]));a.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${m}#icon-check"></use>
            </svg>`,a.currentTarget.setAttribute("disabled","true"),_()})})}const At=document.querySelector(".discount-container"),J="cart";let z=[],C=[];const Nt=t=>{C=JSON.parse(localStorage.getItem(J))||[],C.find(s=>s._id===t._id)||(C.push(t),localStorage.setItem(J,JSON.stringify(C)),st())},Jt=t=>C.some(e=>e._id===t),st=()=>{const t=Ht(z);At.innerHTML=t,Rt()},Ft=t=>{const e=t.currentTarget.dataset.id,s=z.find(a=>a._id===e);Nt(s)},Ht=t=>t.slice(0,2).map(Mt).join(""),Mt=t=>{const{_id:e,name:s,img:a,price:o}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${m}#icon-discount-1" width="60" height="60"></use>
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
                      <use href="${m}#${Jt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},Rt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Ft)})},zt=async()=>{try{z=(await F.get("https://food-boutique.b.goit.study/api/products/discount")).data,C=JSON.parse(localStorage.getItem(J))||[],st()}catch(t){console.error("Error fetching discount products:",t.message)}};zt();
//# sourceMappingURL=commonHelpers2.js.map
