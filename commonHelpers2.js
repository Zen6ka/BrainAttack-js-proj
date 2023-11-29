var rt=Object.defineProperty;var lt=(t,e,s)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var G=(t,e,s)=>(lt(t,typeof e!="symbol"?e+"":e,s),s);import{s as y}from"./assets/icons-24b70d6c.js";import{a as j}from"./assets/vendor-27c5a77b.js";document.addEventListener("DOMContentLoaded",function(){k();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(Z(e),X()):dt()});async function dt(){const t=new Y("products/popular","",1,5);try{const e=await t.fetchBreeds();gt(e);const s=e.slice(0,5);Z(s),X()}catch(e){console.error("Error:",e)}}function X(){k()}const ut=document.querySelector(".products-container");function gt(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function Z(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${y}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${y}#icon-check"></use>
</svg>

      </button>
    `,ut.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){_(e._id)});const a=s.querySelector(".add-to-cart-btn");a.onclick=function(){mt(e)}})}function mt(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),k()}function k(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),a=s.querySelector(".icon-off"),r=s.querySelector(".icon-on"),l=t.some(p=>p&&p._id===o);a&&r&&(l?(s.classList.add("added-to-cart"),a.style.display="block",r.style.display="none"):(s.classList.remove("added-to-cart"),a.style.display="none",r.style.display="block"))})}const H=document.getElementById("scroll-up");function pt(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<600?H.style.display="block":H.style.display="none"}window.addEventListener("scroll",pt);H.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const i={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};i.closeModalBtn.addEventListener("click",Q);i.backdrop.addEventListener("click",wt);const ft=document.querySelectorAll(".cardlist-img");ft.forEach(t=>{t.addEventListener("click",e=>tt(e))});function tt(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;_(e)}const ht=document.querySelectorAll(".product-image");ht.forEach(t=>{t.addEventListener("click",e=>yt(e))});function yt(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;_(e)}const vt=document.querySelectorAll(".discount-card-image");vt.forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.closest(".discount-card");if(s){const o=s.querySelector(".discount-card-button").dataset.id;_(o)}})});const bt="https://food-boutique.b.goit.study/api/";async function St(t){try{const e=await j.get(`${bt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function Ct(t){const e=await St(t);if(e){i.modalImg.src=e.img,i.modalImg.alt=e.name,i.modalTitle.textContent=e.name,i.modalCategory.textContent=e.category,i.modalSize.textContent=e.size,i.modalPopularity.textContent=e.popularity,i.modalDesc.textContent=e.desc,i.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=et(e);R(s,e),e.is10PercentOff?i.discountProduct.classList.remove("hidden"):i.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}let F=null;function R(t,e){const s=t?"Remove from":"Add to";i.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,i.addToCart.disabled=!1,F&&i.addToCart.removeEventListener("click",F);const o=()=>{Lt(e,t)};i.addToCart.addEventListener("click",o),F=o}function et(t){return U().some(o=>o._id===t._id)}function U(){return JSON.parse(localStorage.getItem("cart"))||[]}function Lt(t,e){const s=t._id;e?(It(t._id),R(!1,t)):($t(t),k(),R(!0,t)),[...document.querySelectorAll(".cardlist-add-cart")].filter(r=>r.id===s).forEach(r=>r.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${y}#icon-check"></use> 
  </svg>`)}function $t(t){let e=U();const s=e.findIndex(o=>o._id===t._id);s!==-1?e[s]={...t}:e.push({...t}),localStorage.setItem("cart",JSON.stringify(e))}function It(t){const s=U().filter(o=>o._id!==t);localStorage.setItem("cart",JSON.stringify(s))}function _(t){window.addEventListener("keydown",st),document.body.classList.add("show-modal"),et(t),Et(),Ct(t),at()}function Et(){i.modalImg.src="",i.modalImg.alt="",i.modalTitle.textContent="",i.modalCategory.textContent="",i.modalSize.textContent="",i.modalPopularity.textContent="",i.modalDesc.textContent="",i.modalPrice.textContent="",i.discountProduct.classList.add("hidden")}function Q(){window.removeEventListener("keydown",st),document.body.classList.remove("show-modal"),at()}function wt(t){t.currentTarget===t.target&&Q()}function st(t){t.code==="Escape"&&Q()}function Tt(){return document.body.classList.contains("show-modal")}function at(){document.body.style.overflow=Tt()?"hidden":""}const M=document.querySelector(".pagination-page-list");let g="",m="";function W(t,e){if(t<1){M.innerHTML="";return}let s="",o=e-1,a=e;if(t>5){s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>',s+='<li class="dots dots-before"><span>...</span></li>';for(let n=o;n<=a;n++)n>t||(n==0&&(n=n+1),s+=`<li id="${n}"><button class="numb button-pagination"><span>${n}</span></button></li>`);s+='<li class="dots dots-pagination"><span>...</span></li>',e<t+1&&(s+=`<li id="${t-1}"><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li id="${t}"><button class="numb button-pagination"><span>${t}</span></button></li>`)),s+='<li class="dots dots-after"><span>...</span></li>',s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'}else{s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>';for(let n=1;n<=t;n++)s+=`<li id="${n}"><button class="numb button-pagination"><span>${n}</span></button></li>`;s+=`<li class="dots dots-pagination"><span>...</span></li>
        <li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>`}M.innerHTML=s,g=document.querySelector(".left-arrow-pagination"),m=document.querySelector(".right-arrow-pagination");const r=document.querySelectorAll(".button-pagination"),l=document.querySelector(".dots-pagination"),p=document.querySelector(".dots-before"),J=document.querySelector(".dots-after");p.classList.add("visually-hidden"),J.classList.add("visually-hidden"),t<=3&&l.classList.add("visually-hidden");let d=[...r];d.forEach(n=>{n.addEventListener("click",h=>E(h,t))}),g.addEventListener("click",async()=>{const n=d.find(c=>c.classList.contains("active")),h=Number(n.textContent);h==2?(g.classList.add("inactive-button"),g.disabled=!0):h!=t-1&&(m.classList.remove("inactive-button"),m.disabled=!1),n.classList.remove("active"),n.disabled=!1;const C=d.find(c=>c.textContent===String(h-1));if(C)C.classList.add("active"),C.disabled=!0;else{const c=document.createElement("li");c.setAttribute("id",`${h-1}`);const u=document.createElement("button");u.classList.add("numb","active","button-pagination"),u.disabled=!0,u.innerHTML=`<span>${h-1}</span>`,c.appendChild(u),l.insertAdjacentElement("afterend",c),d.unshift(u),u.addEventListener("click",v=>E(v,t))}const A=d.find(c=>c.classList.contains("active")).textContent;if(await z(A),d.length>4){let c=d[0];for(let v=0;v<d.length;v++)d[v].textContent>c.textContent&&(c=d[v]);const u=document.getElementById(`${c.textContent}`);M.removeChild(u),d=d.filter(v=>v.textContent!==c.textContent),J.classList.remove("visually-hidden")}}),m.addEventListener("click",async()=>{const n=d.find(c=>c.classList.contains("active")),h=Number(n.textContent);h==t-1?(m.classList.add("inactive-button"),m.disabled=!0):h!=2&&(g.classList.remove("inactive-button"),g.disabled=!1),n.classList.remove("active"),n.disabled=!1;const C=d.find(c=>c.textContent===String(h+1));if(C)C.classList.add("active"),C.disabled=!0;else{const c=document.createElement("li"),u=document.createElement("button");u.classList.add("numb","active","button-pagination"),u.disabled=!0,u.innerHTML=`<span>${h+1}</span>`,c.appendChild(u),l.insertAdjacentElement("beforebegin",c),d.push(u),u.addEventListener("click",v=>E(v,t))}const A=d.find(c=>c.classList.contains("active")).textContent;await z(A)}),Pt(g,m,d,t)}function Pt(t,e,s,o){const a=JSON.parse(localStorage.getItem("data-for-search")).page;s.filter(l=>l.textContent===String(a)).map(l=>{l.classList.add("active"),l.disabled=!0,l.textContent==="1"&&l.textContent===String(o)?(t.classList.add("inactive-button"),e.classList.add("inactive-button"),t.disabled=!0,e.disabled=!0):l.textContent==="1"?(t.classList.add("inactive-button"),t.disabled=!0):l.textContent===String(o)&&(e.classList.add("inactive-button"),e.disabled=!0)})}async function E(t,e){t.currentTarget.removeEventListener("click",E),t.currentTarget.disabled=!0,t.currentTarget.classList.add("active"),t.currentTarget.textContent==="1"&&t.currentTarget.textContent===String(e)?(g.classList.add("inactive-button"),m.classList.add("inactive-button"),g.disabled=!0,m.disabled=!0):t.currentTarget.textContent==="1"?(g.classList.add("inactive-button"),m.classList.remove("inactive-button"),g.disabled=!0,m.disabled=!1):t.currentTarget.textContent===String(e)?(m.classList.add("inactive-button"),g.classList.remove("inactive-button"),g.disabled=!1,m.disabled=!0):(m.classList.remove("inactive-button"),g.classList.remove("inactive-button"),g.disabled=!1,m.disabled=!1);let s=t.currentTarget.textContent;await z(s),[...document.querySelectorAll(".button-pagination")].forEach(a=>{const r=a.classList.contains("active");r&&a.textContent!==s?(a.classList.remove("active"),a.disabled=!1,a.addEventListener("click",E)):r||a.addEventListener("click",E)})}async function z(t){const e=JSON.parse(localStorage.getItem("data-for-search"));O(e.keyword,e.category,t,e.limit);const o=(await P()).results;localStorage.setItem("resultProductsFilrers",JSON.stringify(o)),N()}class Y{constructor(e,s,o,a){G(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=a}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await j.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const kt=document.querySelector(".search-form"),xt=document.querySelector(".first-input-search"),ot=document.querySelector(".filters-result"),it=document.querySelector(".first-select-search-not-focus"),V=document.querySelector(".button-categories"),qt=document.querySelector(".span-button-categories"),nt="products";let q="",L="",T=1,S=6,b="",$={},B={},x={},f={},Bt=window.matchMedia("(min-width: 768px)").matches,_t=window.matchMedia("(min-width: 1440px)").matches;_t?S=9:Bt?S=8:S=6;function O(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}O(q,L,T,S);async function P(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return f=await new Y(nt,e,t.page,t.limit).fetchBreeds(),f}catch(t){w(),console.error("Error:",t.message)}}const w=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;ot.innerHTML=t};async function Ot(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);b=JSON.parse(e),s.length>=S?$=s.slice(0,S):(await P(),$=f.results,b=f.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify($)),localStorage.setItem("all-pages-result",JSON.stringify(b)))}else await P(),$=f.results,b=f.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify($)),localStorage.setItem("all-pages-result",JSON.stringify(b));localStorage.setItem("resultProductsFilrers",JSON.stringify($)),N(),W(b,2),f.totalPages===0&&w()}catch(t){w(),console.error("Error:",t.message)}}Ot();kt.addEventListener("submit",async t=>{t.preventDefault(),q=xt.value.trim(),T=1,O(q,L,T,S),await P(),B=f.results,b=f.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(B)),N(),W(b,2),f.totalPages===0&&w()});async function Nt(){try{const t=localStorage.getItem("categories-filters");if(t)x=JSON.parse(t);else{const e="",s=`${nt}/categories`;x=await new Y(s,e,T,S).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(x))}Jt(x)}catch(t){w(),console.error("Error:",t.message)}}Nt();function Jt(t){const e=[];t.forEach(o=>{let a="";o!=="Pantry_Items"?a=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:a=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(a)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),it.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Mt(s)}V.addEventListener("click",()=>At(V,it));function At(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Ft(s,t,e))}function Ft(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Mt(t){t.forEach(e=>{e.addEventListener("click",Ht)})}async function Ht(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?L=e.replace(/ /g,"_").replace(/\//g,"&"):L=e,qt.innerHTML=`${e}`,L==="Show_all"&&(L=""),O(q,L,T,S),await P(),B=f.results,b=f.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(B)),N(),W(b,2),f.totalPages===0&&w()}function N(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(a=>{let r="",l=`<button class="cardlist-add-cart cardlist-add-cart-for-active" id=${a._id}>
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${y}#icon-heroicons-solid_shopping-cart"></use>
        </svg>
        </button>`,p=a.category.replace(/_/g," ").replace(/&/g,"/");a.category=="Pantry_Items"?p=a.category:p=a.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(d=>d._id===a._id)?l=`<button class="cardlist-add-cart" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${y}#icon-check"></use>
                </svg>
                </button>`:l=`<button class="cardlist-add-cart cardlist-add-cart-for-active" id=${a._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${y}#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>`),a.is10PercentOff?r=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${p}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn">
                ${l}
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${y}#icon-discount-1"></use>
                </svg>
                </li>`:r=`<li class="card-list-item id-for-del" data-id=${a._id}>
                <div class = "div-img">
                <img src="${a.img}" loading="lazy" class="cardlist-img filters-img" alt="${a.name}" />
                </div>
                <h3 class="card-list-product">${a.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${p}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${a.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${a.popularity}</p>
                </div>
                <div class="cartlist-btn">
                ${l}
                </div>
                <p class ="price-for-cards">$${a.price}</p>
                <svg  class="visually-hidden">
                <use href="${y}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(r)}),ot.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Rt(t),document.querySelectorAll(".filters-img").forEach(a=>{a.addEventListener("click",r=>tt(r))})}function Rt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const a=o.currentTarget.getAttribute("id"),r=t.find(p=>p._id===a),l=localStorage.getItem("cart");if(l){const p=JSON.parse(l);p.push(r),localStorage.setItem("cart",JSON.stringify(p))}else localStorage.setItem("cart",JSON.stringify([r]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${y}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true"),o.currentTarget.classList.remove("cardlist-add-cart-for-active"),k()})})}const zt=document.querySelector(".discount-container"),D="cart";let K=[],I=[];const Dt=t=>{I=JSON.parse(localStorage.getItem(D))||[],I.find(s=>s._id===t._id)||(I.push(t),localStorage.setItem(D,JSON.stringify(I)),ct())},jt=t=>I.some(e=>e._id===t),ct=()=>{const t=Qt(K);zt.innerHTML=t,Yt()},Ut=t=>{const e=t.currentTarget.dataset.id,s=K.find(o=>o._id===e);Dt(s)},Qt=t=>t.slice(0,2).map(Wt).join(""),Wt=t=>{const{_id:e,name:s,img:o,price:a}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${y}#icon-discount-1" width="60" height="60"></use>
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
                      <use href="${y}#${jt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`},Yt=()=>{document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",Ut)})},Kt=async()=>{try{K=(await j.get("https://food-boutique.b.goit.study/api/products/discount")).data,I=JSON.parse(localStorage.getItem(D))||[],ct()}catch(t){console.error("Error fetching discount products:",t.message)}};Kt();
//# sourceMappingURL=commonHelpers2.js.map
