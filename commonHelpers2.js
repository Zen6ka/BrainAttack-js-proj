var ht=Object.defineProperty;var bt=(t,e,s)=>e in t?ht(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var nt=(t,e,s)=>(bt(t,typeof e!="symbol"?e+"":e,s),s);import{s as S,l as Y}from"./assets/icons-5573770d.js";import{a as K}from"./assets/vendor-27c5a77b.js";document.addEventListener("DOMContentLoaded",function(){O();const t=JSON.parse(localStorage.getItem("popularProducts"));let e;t&&t.length>=5?e=t.slice(0,5):e=[],e.length>0?(ot(e),it()):vt()});async function vt(){const t=new Z("products/popular","",1,5);try{const e=await t.fetchBreeds();St(e);const s=e.slice(0,5);ot(s),it()}catch(e){console.error("Error:",e)}}function it(){O()}const yt=document.querySelector(".products-container");function St(t){localStorage.setItem("popularProducts",JSON.stringify(t))}function ot(t){t.forEach(e=>{const s=document.createElement("div");s.classList.add("product-template"),s.innerHTML=`
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
      <use href="${S}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
          
  <svg class="ico icon-off" style="display: none;">
  <use href="${S}#icon-check"></use>
</svg>

      </button>
    `,yt.appendChild(s),s.querySelector(".product-image-container").addEventListener("click",function(){_(e._id)});const i=s.querySelector(".add-to-cart-btn");i.onclick=function(){Ct(e)}})}function Ct(t){let e=JSON.parse(localStorage.getItem("cart"))||[];e.findIndex(o=>o&&o._id===t._id)!==-1||e.push(t),localStorage.setItem("cart",JSON.stringify(e)),Y(),O()}function O(){const t=JSON.parse(localStorage.getItem("cart"))||[];document.querySelectorAll(".cart-btn").forEach(s=>{const o=s.getAttribute("data-product-id"),i=s.querySelector(".icon-off"),m=s.querySelector(".icon-on"),l=t.some(p=>p&&p._id===o);i&&m&&(l?(s.classList.add("added-to-cart"),i.style.display="block",m.style.display="none"):(s.classList.remove("added-to-cart"),i.style.display="none",m.style.display="block"))})}const z=document.getElementById("scroll-up");function Lt(){const t=document.documentElement.scrollHeight,e=window.innerHeight;t-window.scrollY-e<600?z.style.display="flex":z.style.display="none"}window.addEventListener("scroll",Lt);z.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const u={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),addToCart:document.querySelector(".modal-btn-sabmit"),discountProduct:document.querySelector(".modal-discount-svg"),onCart:document.querySelector(".modal-btn-sabmit-span"),modalImg:document.querySelector(".modal-img img"),modalTitle:document.querySelector(".modal-title"),modalCategory:document.querySelector(".modal-list li:nth-child(1) .modal-item-span"),modalSize:document.querySelector(".modal-list li:nth-child(2) .modal-item-span"),modalPopularity:document.querySelector(".modal-list li:nth-child(3) .modal-item-span"),modalDesc:document.querySelector(".modal-info-taxt"),modalPrice:document.querySelector(".modal-price")};u.closeModalBtn.addEventListener("click",V);u.backdrop.addEventListener("click",Ot);const xt=document.querySelectorAll(".cardlist-img");xt.forEach(t=>{t.addEventListener("click",e=>rt(e))});function rt(t){const e=t.currentTarget.closest(".card-list-item").dataset.id;_(e)}const $t=document.querySelectorAll(".product-image");$t.forEach(t=>{t.addEventListener("click",e=>Et(e))});function Et(t){const e=t.currentTarget.closest(".product-image-container").dataset.product-id;_(e)}const It=document.querySelectorAll(".discount-card-image");It.forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.closest(".discount-card");if(s){const o=s.querySelector(".discount-card-button").dataset.id;_(o)}})});const Nt="https://food-boutique.b.goit.study/api/";async function wt(t){try{const e=await K.get(`${Nt}products/${t}`),s=e.data;return console.log("Product Details:",s),e.data}catch(e){return console.error("Error:",e.message),null}}async function Pt(t){const e=await wt(t);if(e){u.modalImg.src=e.img,u.modalImg.alt=e.name,u.modalTitle.textContent=e.name,u.modalCategory.textContent=e.category,u.modalSize.textContent=e.size,u.modalPopularity.textContent=e.popularity,u.modalDesc.textContent=e.desc,u.modalPrice.textContent=`$${e.price.toFixed(2)}`;const s=ct(e);U(s,e),e.is10PercentOff?u.discountProduct.classList.remove("hidden"):u.discountProduct.classList.add("hidden")}else console.error("Product details not available.")}let R=null;function U(t,e){const s=t?"Remove from":"Add to";u.addToCart.querySelector(".modal-btn-sabmit-span").textContent=s,u.addToCart.disabled=!1,R&&u.addToCart.removeEventListener("click",R);const o=()=>{Tt(e,t)};u.addToCart.addEventListener("click",o),R=o}function ct(t){return G().some(o=>o._id===t._id)}function G(){return JSON.parse(localStorage.getItem("cart"))||[]}function Tt(t,e){const s=t._id;e?(qt(t._id),U(!1,t)):(kt(t),O(),U(!0,t)),[...document.querySelectorAll(".cardlist-add-cart")].filter(m=>m.id===s).forEach(m=>m.innerHTML=`<svg class="cardlist-svg" weight="18" height="18"> 
  <use href="${S}#icon-check"></use> 
  </svg>`)}function kt(t){let e=G();const s=e.findIndex(o=>o._id===t._id);s!==-1?e[s]={...t}:e.push({...t}),localStorage.setItem("cart",JSON.stringify(e))}function qt(t){const s=G().filter(o=>o._id!==t);localStorage.setItem("cart",JSON.stringify(s))}function _(t){window.addEventListener("keydown",lt),document.body.classList.add("show-modal"),ct(t),Bt(),Pt(t),dt()}function Bt(){u.modalImg.src="",u.modalImg.alt="",u.modalTitle.textContent="",u.modalCategory.textContent="",u.modalSize.textContent="",u.modalPopularity.textContent="",u.modalDesc.textContent="",u.modalPrice.textContent="",u.discountProduct.classList.add("hidden")}function V(){window.removeEventListener("keydown",lt),document.body.classList.remove("show-modal"),dt()}function Ot(t){t.currentTarget===t.target&&V()}function lt(t){t.code==="Escape"&&V()}function _t(){return document.body.classList.contains("show-modal")}function dt(){document.body.style.overflow=_t()?"hidden":""}const I=document.querySelector(".pagination-page-list");let h="",b="";function X(t,e){if(t<1){I.innerHTML="";return}let s="",o=e-1,i=e;if(t>5){s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>',s+='<li class="dots dots-before visually-hidden"><span>...</span></li>';for(let c=o;c<=i;c++)c>t||(c==0&&(c=c+1),s+=`<li id="${c}"><button class="numb button-pagination"><span>${c}</span></button></li>`);s+='<li class="dots dots-pagination"><span>...</span></li>',e<t+1&&(s+=`<li id="${t-1}"><button class="numb button-pagination"><span>${t-1}</span></button></li>`,e<=t+2&&(s+=`<li id="${t}"><button class="numb button-pagination"><span>${t}</span></button></li>`)),s+='<li class="dots dots-after visually-hidden"><span>...</span></li>',s+='<li><button class="btn next right-arrow-pagination"><span><i class="right"></i> > </span></button></li>'}else{s+='<li><button class="btn prev left-arrow-pagination"><span><i class="left"></i> < </span></button></li>',s+='<li class="dots dots-before visually-hidden"><span>...</span></li>',s+='<li class="dots dots-pagination visually-hidden"><span>...</span></li>';for(let c=1;c<=t;c++)s+=`<li id="${c}"><button class="numb button-pagination"><span>${c}</span></button></li>`;s+='<li class="dots dots-after visually-hidden"><span>...</span></li>',s+='<li><button class="btn prev right-arrow-pagination"><span><i class="left"></i> > </span></button></li>'}I.innerHTML=s,h=document.querySelector(".left-arrow-pagination"),b=document.querySelector(".right-arrow-pagination");const m=document.querySelectorAll(".button-pagination"),l=document.querySelector(".dots-pagination"),p=document.querySelector(".dots-before"),L=document.querySelector(".dots-after");let r=[...m],F=r[0],et="";for(let c=0;c<r.length;c++)Number(r[c].textContent)<Number(F.textContent)?F=r[c]:Number(r[c].textContent)-1===Number(F.textContent)&&(et=r[c]);let g=[F,et],J=r[0],st="";for(let c=0;c<r.length;c++)Number(r[c].textContent)>Number(J.textContent)&&(J=r[c]);for(let c=0;c<r.length;c++)Number(r[c].textContent)+1===Number(J.textContent)&&(st=r[c]);let v=[st,J];r.forEach(c=>{c.addEventListener("click",f=>w(f,t))}),h.addEventListener("click",async()=>{const c=r.find(n=>n.classList.contains("active")),f=Number(c.textContent);f==2?(h.classList.add("inactive-button"),h.disabled=!0):f!=t-1&&(b.classList.remove("inactive-button"),b.disabled=!1),c.classList.remove("active"),c.disabled=!1;const $=r.find(n=>n.textContent===String(f-1));if($)$.classList.add("active"),$.disabled=!0,L.classList.contains("visually-hidden")||l.classList.add("visually-hidden");else{l.classList.remove("visually-hidden");const n=document.createElement("li");n.setAttribute("id",`${f-1}`);const d=document.createElement("button");d.classList.add("numb","active","button-pagination"),d.disabled=!0,d.innerHTML=`<span>${f-1}</span>`,n.appendChild(d),!p.classList.contains("visually-hidden")&&g.some(a=>Number(a.textContent)===f)?p.insertAdjacentElement("afterend",n):!p.classList.contains("visually-hidden")&&!g.some(a=>Number(a.textContent)===f)||p.classList.contains("visually-hidden")&&!g.some(a=>Number(a.textContent)===f)?l.insertAdjacentElement("afterend",n):l.insertAdjacentElement("beforebegin",n),r.unshift(d),g.some(a=>Number(a.textContent)===f)?g.unshift(d):v.unshift(d),d.addEventListener("click",a=>w(a,t))}const T=r.find(n=>n.classList.contains("active")).textContent;if(await Q(T),g.some(n=>Number(n.textContent)===Number(T))){if(r.length>4){let n=r[0];for(let a=0;a<g.length;a++)Number(g[a].textContent)>Number(n.textContent)&&(n=g[a]);const d=document.getElementById(`${n.textContent}`);I.removeChild(d),r=r.filter(a=>a.textContent!==n.textContent),g=g.filter(a=>a.textContent!==n.textContent)}}else if(r.length>4){let n=r[0];for(let a=0;a<v.length;a++)Number(v[a].textContent)>Number(n.textContent)&&(n=v[a]);const d=document.getElementById(`${n.textContent}`);I.removeChild(d),r=r.filter(a=>a.textContent!==n.textContent),v=v.filter(a=>a.textContent!==n.textContent),L.classList.remove("visually-hidden")}r.some(n=>Number(n.textContent)===1)&&p.classList.add("visually-hidden")}),b.addEventListener("click",async()=>{const c=r.find(n=>n.classList.contains("active")),f=Number(c.textContent);f==t-1?(b.classList.add("inactive-button"),b.disabled=!0):f!=2&&(h.classList.remove("inactive-button"),h.disabled=!1),c.classList.remove("active"),c.disabled=!1;const $=r.find(n=>n.textContent===String(f+1));if($)$.classList.add("active"),$.disabled=!0,p.classList.contains("visually-hidden")||l.classList.add("visually-hidden");else{l.classList.remove("visually-hidden");const n=document.createElement("li");n.setAttribute("id",`${f+1}`);const d=document.createElement("button");d.classList.add("numb","active","button-pagination"),d.disabled=!0,d.innerHTML=`<span>${f+1}</span>`,n.appendChild(d),!L.classList.contains("visually-hidden")&&g.some(a=>Number(a.textContent)===f)?l.insertAdjacentElement("beforebegin",n):!L.classList.contains("visually-hidden")&&!g.some(a=>Number(a.textContent)===f)?L.insertAdjacentElement("beforebegin",n):L.classList.contains("visually-hidden")&&g.some(a=>Number(a.textContent)===f)?l.insertAdjacentElement("beforebegin",n):L.insertAdjacentElement("beforebegin",n),r.push(d),g.some(a=>Number(a.textContent)===f)?g.push(d):v.push(d),d.addEventListener("click",a=>w(a,t))}const T=r.find(n=>n.classList.contains("active")).textContent;if(await Q(T),g.some(n=>Number(n.textContent)===Number(T))){if(r.length>4){let n=r[0];for(let a=0;a<g.length;a++)Number(g[a].textContent)<Number(n.textContent)&&(n=g[a]);const d=document.getElementById(`${n.textContent}`);I.removeChild(d),r=r.filter(a=>a.textContent!==n.textContent),g=g.filter(a=>a.textContent!==n.textContent),p.classList.remove("visually-hidden")}}else if(r.length>4){let n=v[0];for(let a=0;a<v.length;a++)Number(v[a].textContent)<Number(n.textContent)&&(n=v[a]);const d=document.getElementById(`${n.textContent}`);I.removeChild(d),r=r.filter(a=>a.textContent!==n.textContent),v=v.filter(a=>a.textContent!==n.textContent)}r.some(n=>Number(n.textContent)===t)&&L.classList.add("visually-hidden")}),At(h,b,r,t)}function At(t,e,s,o){const i=JSON.parse(localStorage.getItem("data-for-search")).page;s.filter(l=>l.textContent===String(i)).map(l=>{l.classList.add("active"),l.disabled=!0,l.textContent==="1"&&l.textContent===String(o)?(t.classList.add("inactive-button"),e.classList.add("inactive-button"),t.disabled=!0,e.disabled=!0):l.textContent==="1"?(t.classList.add("inactive-button"),t.disabled=!0):l.textContent===String(o)&&(e.classList.add("inactive-button"),e.disabled=!0)})}async function w(t,e){t.currentTarget.removeEventListener("click",w),t.currentTarget.disabled=!0,t.currentTarget.classList.add("active"),t.currentTarget.textContent==="1"&&t.currentTarget.textContent===String(e)?(h.classList.add("inactive-button"),b.classList.add("inactive-button"),h.disabled=!0,b.disabled=!0):t.currentTarget.textContent==="1"?(h.classList.add("inactive-button"),b.classList.remove("inactive-button"),h.disabled=!0,b.disabled=!1):t.currentTarget.textContent===String(e)?(b.classList.add("inactive-button"),h.classList.remove("inactive-button"),h.disabled=!1,b.disabled=!0):(b.classList.remove("inactive-button"),h.classList.remove("inactive-button"),h.disabled=!1,b.disabled=!1);let s=t.currentTarget.textContent;await Q(s),[...document.querySelectorAll(".button-pagination")].forEach(i=>{const m=i.classList.contains("active");m&&i.textContent!==s?(i.classList.remove("active"),i.disabled=!1,i.addEventListener("click",w)):m||i.addEventListener("click",w)})}async function Q(t){const e=JSON.parse(localStorage.getItem("data-for-search"));j(e.keyword,e.category,t,e.limit);const o=(await B()).results;localStorage.setItem("resultProductsFilrers",JSON.stringify(o)),A()}class Z{constructor(e,s,o,i){nt(this,"baseUrl","https://food-boutique.b.goit.study/api/");this.endPoint=e,this.filters=s,this.page=o,this.limit=i}async fetchBreeds(){try{console.log(`${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);const e=await K.get(`${this.baseUrl}${this.endPoint}?${this.filters}&page=${this.page}&limit=${this.limit}`);return console.log(e.data),e.data}catch(e){console.error("Error:",e.message)}}}const Ft=document.querySelector(".search-form"),Jt=document.querySelector(".first-input-search"),ut=document.querySelector(".filters-result"),mt=document.querySelector(".first-select-search-not-focus"),at=document.querySelector(".button-categories"),Mt=document.querySelector(".span-button-categories"),gt="products";let H="",E="",q=1,x=6,C="",N={},D={},M={},y={},Ht=window.matchMedia("(min-width: 768px)").matches,Dt=window.matchMedia("(min-width: 1440px)").matches;Dt?x=9:Ht?x=8:x=6;function j(t,e,s,o){localStorage.setItem("data-for-search",JSON.stringify({keyword:t,category:e,page:s,limit:o}))}j(H,E,q,x);async function B(){try{const t=JSON.parse(localStorage.getItem("data-for-search")),e=`keyword=${t.keyword}&category=${t.category}`;return y=await new Z(gt,e,t.page,t.limit).fetchBreeds(),y}catch(t){P(),console.error("Error:",t.message)}}const P=()=>{const t=`<div class="error">
    <p class="title-error">
        Nothing was found for the selected <span><a class="a-title-error" href="">filters...</a></span>
    </p>
    <p class="p-error">
        Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.
    </p>
</div>`;ut.innerHTML=t};async function jt(){try{const t=localStorage.getItem("products-home-page-filters"),e=localStorage.getItem("all-pages-result");if(t&&e){const s=JSON.parse(t);C=JSON.parse(e),s.length>=x?N=s.slice(0,x):(await B(),N=y.results,C=y.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(N)),localStorage.setItem("all-pages-result",JSON.stringify(C)))}else await B(),N=y.results,C=y.totalPages,localStorage.setItem("products-home-page-filters",JSON.stringify(N)),localStorage.setItem("all-pages-result",JSON.stringify(C));localStorage.setItem("resultProductsFilrers",JSON.stringify(N)),A(),X(C,2),y.totalPages===0&&P()}catch(t){P(),console.error("Error:",t.message)}}jt();Ft.addEventListener("submit",async t=>{t.preventDefault(),H=Jt.value.trim(),q=1,j(H,E,q,x),await B(),D=y.results,C=y.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(D)),A(),X(C,2),y.totalPages===0&&P()});async function Rt(){try{const t=localStorage.getItem("categories-filters");if(t)M=JSON.parse(t);else{const e="",s=`${gt}/categories`;M=await new Z(s,e,q,x).fetchBreeds(),localStorage.setItem("categories-filters",JSON.stringify(M))}zt(M)}catch(t){P(),console.error("Error:",t.message)}}Rt();function zt(t){const e=[];t.forEach(o=>{let i="";o!=="Pantry_Items"?i=`<li class="li-first-select-search"><button class="button-li-filters">${o.replace(/_/g," ").replace(/&/g,"/")}</button></li>`:i=`<li class="li-first-select-search"><button class="button-li-filters">${o}</button></li>`,e.push(i)}),e.push('<li class="li-first-select-search"><button class="button-li-filters">Show all</button></li>'),mt.insertAdjacentHTML("beforeend",e.join(""));const s=document.querySelectorAll(".button-li-filters");Wt(s)}at.addEventListener("click",()=>Ut(at,mt));function Ut(t,e){e.classList.add("first-select-search"),document.addEventListener("click",s=>Qt(s,t,e))}function Qt(t,e,s){!e.contains(t.target)&&!s.contains(t.target)?s.classList.remove("first-select-search"):s.contains(t.target)&&setTimeout(()=>{s.classList.remove("first-select-search")},100)}function Wt(t){t.forEach(e=>{e.addEventListener("click",Yt)})}async function Yt(t){const e=t.currentTarget.textContent;e!=="Pantry Items"?E=e.replace(/ /g,"_").replace(/\//g,"&"):E=e,Mt.innerHTML=`${e}`,E==="Show_all"&&(E=""),j(H,E,q,x),await B(),D=y.results,C=y.totalPages,localStorage.setItem("resultProductsFilrers",JSON.stringify(D)),A(),X(C,2),y.totalPages===0&&P()}function A(){const t=JSON.parse(localStorage.getItem("resultProductsFilrers")),e=[],s=JSON.parse(localStorage.getItem("cart"));t.forEach(i=>{let m="",l=`<button class="cardlist-add-cart cardlist-add-cart-for-active" id=${i._id}>
        <svg class="cardlist-svg" weight="18" height="18">
        <use href="${S}#icon-heroicons-solid_shopping-cart"></use>
        </svg>
        </button>`,p=i.category.replace(/_/g," ").replace(/&/g,"/");i.category=="Pantry_Items"?p=i.category:p=i.category.replace(/_/g," ").replace(/&/g,"/"),s&&(s.some(r=>r._id===i._id)?l=`<button class="cardlist-add-cart" id=${i._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${S}#icon-check"></use>
                </svg>
                </button>`:l=`<button class="cardlist-add-cart cardlist-add-cart-for-active" id=${i._id}>
                <svg class="cardlist-svg" weight="18" height="18">
                <use href="${S}#icon-heroicons-solid_shopping-cart"></use>
                </svg>
                </button>`),i.is10PercentOff?m=`<li class="card-list-item id-for-del" data-id=${i._id}>
                <div class = "div-img">
                <img src="${i.img}" loading="lazy" class="cardlist-img" alt="${i.name}" />
                </div>
                <h3 class="card-list-product">${i.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${p}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${i.size}</p>
                </div>
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${i.popularity}</p>
                </div>
                <div class="cartlist-btn">
                ${l}
                </div>
                <p class ="price-for-cards">$${i.price}</p>
                <svg  class="discount-for-filter-cards">
                <use href="${S}#icon-discount-1"></use>
                </svg>
                </li>`:m=`<li class="card-list-item id-for-del" data-id=${i._id}>
                <div class = "div-img">
                <img src="${i.img}" loading="lazy" class="cardlist-img filters-img" alt="${i.name}" />
                </div>
                <h3 class="card-list-product">${i.name}</h3>
                <div class="cardlist-descr">
                <div class="two-items">
                    <p class ="li-p-cards"><span class ="span-p-cards">Category: </span>${p}</p>
                    <p class ="li-p-cards"><span class ="span-p-cards">Size: </span>${i.size}</p>
                </div>    
                    <p class ="li-p-cards"><span class ="span-p-cards">Popularity: </span>${i.popularity}</p>
                </div>
                <div class="cartlist-btn">
                ${l}
                </div>
                <p class ="price-for-cards">$${i.price}</p>
                <svg  class="visually-hidden">
                <use href="${S}#icon-discount-1"></use>
                </svg>
                </li>`,e.push(m)}),ut.innerHTML=`<ul class="card-list">${e.join(" ")}</ul>`,Kt(t),document.querySelectorAll(".filters-img").forEach(i=>{i.addEventListener("click",m=>rt(m))})}function Kt(t){[...document.querySelectorAll(".cardlist-add-cart")].forEach(s=>{s.addEventListener("click",o=>{const i=o.currentTarget.getAttribute("id"),m=t.find(p=>p._id===i),l=localStorage.getItem("cart");if(l){const p=JSON.parse(l);p.push(m),localStorage.setItem("cart",JSON.stringify(p))}else localStorage.setItem("cart",JSON.stringify([m]));o.currentTarget.innerHTML=`<svg class="cardlist-svg" weight="18" height="18">
            <use href="${S}#icon-check"></use>
            </svg>`,o.currentTarget.setAttribute("disabled","true"),o.currentTarget.classList.remove("cardlist-add-cart-for-active"),O(),Y()})})}const ft=document.querySelector(".discount-container"),W="cart";let tt=[],k=[];function Gt(t){k=JSON.parse(localStorage.getItem(W))||[],k.find(s=>s._id===t._id)||(k.push(t),localStorage.setItem(W,JSON.stringify(k)),pt())}function Vt(t){return(JSON.parse(localStorage.getItem("cart"))||[]).some(s=>s._id===t)}function pt(){ft.innerHTML=Xt(tt),ee()}function Xt(t){return t.slice(0,2).map(Zt).join("")}function Zt(t){const{_id:e,name:s,img:o,price:i}=t;return`<div class="discount-card">
              <div class="discount-logo">
                <svg class="logo">
                  <use href="${S}#icon-discount-1" width="60" height="60"></use>
                </svg>
              </div>
              <div class="discount-card-image">
              <img src="${o}" alt="${s}" data-id=${e} width="114" height="'114" />
              </div>
              <div class="discount-card-info">
                <div class="discount-card-name">
                  <p class="discount-card-text">${s}</p>
                </div>
                <div class="discount-card-price">
                  <p class="discount-card-text">$${i}</p>
                  <button class="discount-card-button" type="button" data-id=${e}>
                    <svg class="">
                      <use href="${S}#${Vt(e)?"icon-check":"icon-heroicons-solid_shopping-cart"}"></use>
                    </svg>
                  </button>
                </div>
              </div>
          </div>`}ft.addEventListener("click",t=>{const s=t.target.closest(".discount-card-image img").dataset.id;_(s)});function te(t){const e=t.currentTarget.dataset.id,s=tt.find(o=>o._id===e);Gt(s),A(),Y()}function ee(){document.querySelectorAll(".discount-card-button").forEach(e=>{e.addEventListener("click",te)})}async function se(){try{tt=(await K.get("https://food-boutique.b.goit.study/api/products/discount")).data,k=JSON.parse(localStorage.getItem(W))||[],pt()}catch(t){console.error("Error fetching discount products:",t.message)}}se();
//# sourceMappingURL=commonHelpers2.js.map
