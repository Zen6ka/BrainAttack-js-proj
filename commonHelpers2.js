var nt=Object.defineProperty;var ct=(t,e,s)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Q=(t,e,s)=>(ct(t,typeof e!="symbol"?e+"":e,s),s);import{s as f}from"./assets/icons-28fcd426.js";import{a as M}from"./assets/vendor-27c5a77b.js";document.addEventListener("DOMContentLoaded",function(){P();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(V(e),G()):rt()});async function rt(){const t=new j("products/popular","",1,5);try{const e=await t.fetchBreeds();dt(e);const s=e.slice(0,5);V(s),G()}catch(e){console.error("Error:",e)}}function G(){P()}const lt=document.querySelector(".products-container");function dt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function V(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${f}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${f}#icon-check"></use>
</svg>

      </button>
    `,lt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){x(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){ut(e)}})}function ut(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),P()}function P(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),n=s.querySelector(".icon-on"),c=t.some(i=>i&&i._id===o);a&&n&&(c?(s.classList.add("added-to-cart"),a.style.display="block",n.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",n.style.display="block"))})}const A=document.getElementById("scroll-up");function gt(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<100?A.style.display="block":A.style.display="none"}window.addEventListener("scroll",gt);A.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};d.closeModalBtn.addEventListener("click",z);d.backdrop.addEventListener("click",Ct);const mt=document.querySelectorAll(".cardlist-img");mt.forEach(t=>{t.addEventListener("click",e=>X(e))});function X(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;x(e)}const pt=document.querySelectorAll(".product-image");pt.forEach(t=>{t.addEventListener("click",e=>ft(e))});function ft(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;x(e)}const ht=document.querySelectorAll(".discount-card");ht.forEach(t=>{t.querySelector(".discount-card-image img").addEventListener("click",()=>{const s=t.querySelector(".discount-card-button").dataset.id;console.log("Clicked on Discount Card, Product ID:",s),console.log("Image clicked"),x(s)})});const yt="https://food-boutique.b.goit.study/api/";async function vt(t){try{const e=await M.get(`${yt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function St(t){const e=await vt(t);if(e){d.modalImg.src=e.img,d.modalImg.alt=e.name,d.modalTitle.textContent=e.name,d.modalCategory.textContent=e.category,d.modalSize.textContent=e.size,d.modalPopularity.textContent=e.popularity,d.modalDesc.textContent=e.desc,d.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=Z(e);J(s,e),e.is10PercentOff?d.discountProduct.classList.remove("hidden"):d.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}function J(t,e){const s=t?"Remove from":"Add to";d.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,d.addToCart.disabled=!1,d.addToCart.removeEventListener("click",()=>{W(e,t)}),d.addToCart.addEventListener("click",()=>{W(e,t)})}function Z(t){return R().some(o=>o._id===t._id)}function R(){return JSON.parse(localStorage.getItem("cart"))||[]}function W(t,e){const s=t._id;e?(Lt(t._id),J(!1,t)):(bt(t),P(),J(!0,t)),[...document.querySelectorAll(".cardlist-add-cart")].filter(n=>n.id===s).forEach(n=>n.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${f}#icon-check"></use> 
  </svg>`)}function bt(t){let e=R();e.some(s=>s._id===t._id)||(e.push(t),localStorage.setItem("cart",JSON.stringify(e)))}function Lt(t){let e=R();const s=e.findIndex(o=>o._id===t);s!==-1&&(e[s],e.splice(s,1),localStorage.setItem("cart",JSON.stringify(e)))}function x(t){window.addEventListener("keydown",tt),document.body.classList.add("show-modal"),Z(t),St(t),et()}function z(){window.removeEventListener("keydown",tt),document.body.classList.remove("show-modal"),et()}function Ct(t){t.currentTarget===t.target&&z()}function tt(t){t.code==="Escape"&&z()}function It(){return document.body.classList.contains("show-modal")}function et(){document.body.style.overflow=It()?"hidden":""}const Y=document.querySelector(".pagination-page-list");let h="",y="";function D(t,e){if(t<1){Y.innerHTML="";return}let s="",o=e-1,a=e;if(t>5){s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>';for(let r=o;r<=a;r++)r>t||(r==0&&(r=r+1),s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`);s+='<li class="dots dots-pagination"><span>...</span></li>',e<t+1&&(s+=`<li><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li><button class="numb button-pagination"><span>${t}</span></button></li>`)),s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'}else{s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>';for(let r=1;r<=t;r++)s+=`<li><button class="numb button-pagination"><span>${r}</span></button></li>`;s+=`<li class="dots dots-pagination"><span>...</span></li>
        <li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`}Y.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),y=document.querySelector(".right-arrow-pagination");const n=document.querySelectorAll(".button-pagination"),c=document.querySelector(".dots-pagination");t<=3&&c.classList.add("visually-hidden");const i=[...n];i.forEach(r=>{r.addEventListener("click",u=>I(u,t))}),h.addEventListener("click",async()=>{const r=i.find(l=>l.classList.contains("active")),u=Number(r.textContent);u==2?h.classList.add("visually-hidden"):u!=t-1&&y.classList.remove("visually-hidden"),r.classList.remove("active"),r.disabled=!1;const S=i.find(l=>l.textContent===String(u-1));if(S)S.classList.add("active"),S.disabled=!0;else{const l=document.createElement("li"),g=document.createElement("button");g.classList.add("numb","active","button-pagination"),g.disabled=!0,g.innerHTML=`<span>${u-1}</span>`,l.appendChild(g),c.insertAdjacentElement("afterend",l),i.push(g),g.addEventListener("click",N=>I(N,t))}const O=i.find(l=>l.classList.contains("active")).textContent;await F(O)}),y.addEventListener("click",async()=>{const r=i.find(l=>l.classList.contains("active")),u=Number(r.textContent);u==t-1?y.classList.add("visually-hidden"):u!=2&&h.classList.remove("visually-hidden"),r.classList.remove("active"),r.disabled=!1;const S=i.find(l=>l.textContent===String(u+1));if(S)S.classList.add("active"),S.disabled=!0;else{const l=document.createElement("li"),g=document.createElement("button");g.classList.add("numb","active","button-pagination"),g.disabled=!0,g.innerHTML=`<span>${u+1}</span>`,l.appendChild(g),c.insertAdjacentElement("beforebegin",l),i.push(g),g.addEventListener("click",N=>I(N,t))}const O=i.find(l=>l.classList.contains("active")).textContent;await F(O)}),$t(h,y,i,t)}function $t(t,e,s,o){const a=JSON.parse(localStorage.getItem("data-for-search")).page;s.filter(c=>c.textContent===String(a)).map(c=>{c.classList.add("active"),c.disabled=!0,c.textContent==="1"&&c.textContent===String(o)?(t.classList.add("visually-hidden"),e.classList.add("visually-hidden")):c.textContent==="1"?t.classList.add("visually-hidden"):c.textContent===String(o)&&e.classList.add("visually-hidden")})}async function I(t,e){t.currentTarget.removeEventListener("click",I),t.currentTarget.disabled=!0,t.currentTarget.classList.add("active"),t.currentTarget.textContent==="1"&&t.currentTarget.textContent===String(e)?(h.classList.add("visually-hidden"),y.classList.add("visually-hidden")):t.currentTarget.textContent==="1"?(h.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):t.currentTarget.textContent===String(e)?(y.classList.add("visually-hidden"),h.classList.remove("visually-hidden")):(y.classList.remove("visually-hidden"),h.classList.remove("visually-hidden"));let s=t.currentTarget.textContent;await F(s),[...document.querySelectorAll(".button-pagination")].forEach(a=>{const n=a.classList.contains("active");n&&a.textContent!==s?(a.classList.remove("active"),a.disabled=!1,a.addEventListener("click",I)):n||a.addEventListener("click",I)})}async function F(t){const e=JSON.parse(localStorage.getItem("data-for-search"));B(e.keyword,e.category,t,e.limit);const o=(await E()).results;localStorage.setItem("resultProductsFilrers",JSON.stringify(o)),_()}class j{constructor(e,s,o,a){Q(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await M.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const wt=document.querySelector(".search-form"),Et=document.querySelector(".first-input-search"),st=document.querySelector(".filters-result"),at=document.querySelector(".first-select-search-not-focus"),K=document.querySelector(".button-categories"),Pt=document.querySelector(".span-button-categories"),ot="products";let k="",b="",w=1,v=6,p="",L={},q={},T={},m={},Tt=window.matchMedia("(min-width: 768px)").matches,kt=window.matchMedia("(min-width: 1440px)").matches;kt?v=9:Tt?v=8:v=6;function B(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}B(k,b,w,v);async function E(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return m=await new j(ot,e,t.page,t.limit).fetchBreeds(),m}catch(t){$(),console.error("Error:",t.message)}}const $=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;st.innerHTML=t};async function qt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);p=JSON.parse(e),s.length>=v?L=s.slice(0,v):(await E(),L=m.results,p=m.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(L)),localStorage.setItem("all-pages-result",JSON.stringify(p)))}else await E(),L=m.results,p=m.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(L)),localStorage.setItem("all-pages-result",JSON.stringify(p));localStorage.setItem("resultProductsFilrers",JSON.stringify(L)),_(),D(p,2),m.totalPages===0&&$()}catch(t){$(),console.error("Error:",t.message)}}qt();wt.addEventListener("submit",async t=>{t.preventDefault(),k=Et.value.trim(),w=1,B(k,b,w,v),await E(),q=m.results,p=m.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(q)),_(),D(p,2),m.totalPages===0&&$()});async function xt(){try{const t=localStorage.getItem("categories-filters");if(t)T=JSON.parse(t);else{const e="",s=`${ot}/categories`;T=await new j(s,e,w,v).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(T))}Bt(T)}catch(t){$(),console.error("Error:",t.message)}}xt();function Bt(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),at.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Nt(s)}K.addEventListener("click",()=>_t(K,at));function _t(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Ot(s,t,e))}function Ot(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Nt(t){t.forEach(e=>{e.addEventListener("click",At)})}async function At(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?b=e.replace(/ /g,"_").replace(/\//g,"&"):b=e,Pt.innerHTML=`${e}`,b==="Show_all"&&(b=""),B(k,b,w,v),await E(),q=m.results,p=m.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(q)),_(),D(p,2),m.totalPages===0&&$()}function _(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let n="",c="icon-heroicons-solid_shopping-cart",i=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?i=a.category:i=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(u=>u._id===a._id)?c="icon-check":c="icon-heroicons-solid_shopping-cart"),a.is10PercentOff?n=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${f}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${f}#icon-discount-1"></use>
                </svg>
                </li>`:n=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img filters-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${i}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn"><button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${f}#${c}"></use>
                </svg>
                </button>
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="visually-hidden">
                <use href="${f}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(n)}),st.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Jt(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",n=>X(n))})}function Jt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),n=t.find(i=>i._id===a),c=localStorage.getItem("cart");if(c){const i=JSON.parse(c);i.push(n),localStorage.setItem("cart",JSON.stringify(i))}else localStorage.setItem("cart",JSON.stringify([n]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${f}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true"),P()})})}const Ft=document.querySelector(".discount-container"),H="cart";let U=[],C=[];const Ht=t=>{C=JSON.parse(localStorage.getItem(H))||[],C.find(s=>s._id===t._id)||(C.push(t),localStorage.setItem(H,JSON.stringify(C)),it())},Mt=t=>C.some(e=>e._id===t),it=()=>{const t=zt(U);Ft.innerHTML=t,jt()},Rt=t=>{const e=t.currentTarget.dataset.id,s=U.find(o=>o._id===e);Ht(s)},zt=t=>t.slice(0,2).map(Dt).join(""),Dt=t=>{const{_id:e,name:s,img:o,price:a}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${f}#icon-discount-1" width="60" height="60"></use>
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
                      <use href="${f}#${Mt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},jt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Rt)})},Ut=async()=>{try{U=(await M.get("https://food-boutique.b.goit.study/api/products/discount")).data,C=JSON.parse(localStorage.getItem(H))||[],it()}catch(t){console.error("Error fetching discount products:",t.message)}};Ut();
//# sourceMappingURL=commonHelpers2.js.map
