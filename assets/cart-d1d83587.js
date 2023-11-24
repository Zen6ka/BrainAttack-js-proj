(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const a=document.querySelector(".js-cart-items-quantity"),l=document.querySelector(".js-cart-empty"),p=document.querySelector(".js-cart-container"),f=document.querySelector(".js-delete-all-btn"),d=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const y=document.querySelector(".js-total-ordered-price");document.querySelector(".js-email-form");document.querySelector(".js-email-checkout");console.log("sdsd");function $(){const r=localStorage.getItem("cart-products");return r?JSON.parse(r):null}const n=$();console.log(n);if(n){a.innerHTML=n.length,b(),S();const{id:r,name:t,img:i,category:c,size:e,price:s}=n,o=u(r,t,i,c,e,s);d.innerHTML=o;const v=n.reduce((g,j)=>g+j.price,0);y.innerHTML=`$${v}`}else a.innerHTML=0,m();f.addEventListener("click",h);function h(r){r.preventDefault(),localStorage.removeItem("cart-products"),d.innerHTML="",q(),m()}function u(r,t,i,c,e,s){return`
<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>

<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>

<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>

<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>

<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>

<div class="selected-item">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${i}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${s}</p>
    </div>
</div>
`}function m(){l.style.display="flex"}function b(){l.style.display="none"}function S(){p.style.display="flex"}function q(){p.style.display="none"}console.log("qwewqe");const L={id:"640c2dd963a319ea671e383b",name:"Ackee",img:"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e383b.png",category:"Fresh_Produce",price:8.99,size:16},{id:P,name:M,img:O,category:H,price:_,size:T}=L,w=u(P,M,O,H,_,T);d.innerHTML=w;
//# sourceMappingURL=cart-d1d83587.js.map
