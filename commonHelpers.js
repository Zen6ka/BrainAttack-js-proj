import{l as d,i as E}from"./assets/icons-d36006f6.js";import"./assets/vendor-27c5a77b.js";const i=document.querySelector(".js-cart-items-quantity"),S=document.querySelector(".js-cart-empty"),g=document.querySelector(".js-cart-container"),H=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const v=document.querySelector(".js-total-ordered-price"),f=document.querySelector(".js-email-form"),T=document.querySelector(".cart-input");b();u();let $=1;function m(){const e=localStorage.getItem("cart");return JSON.parse(e)}const j=m(),p=P(j);i.innerHTML=p.length;d();const w=p.map(e=>k(e._id,e.name,e.img,e.category,e.size,e.price)).join("");a.innerHTML=w;L(p);a.addEventListener("click",I);function P(e){if(e===null||e.length<1)return i.innerHTML="0",l(),u(),[];b(),O();const n=new Set;return j.filter(c=>{const t=c._id;return n.has(t)?!1:(n.add(t),!0)})}function I(e){const n=e.target.closest("[id]"),r=n?n.id:null;if(e.target.closest(".cart-remove-product-btn")){const t=m().filter(o=>o._id!==r);if(t.length>0){localStorage.setItem("cart",JSON.stringify(t));const o=m().map(s=>k(s._id,s.name,s.img,s.category,s.size,s.price)).join("");a.innerHTML=o,d(),L(t),i.innerHTML=t.length}else localStorage.removeItem("cart"),i.innerHTML="0",a.innerHTML="",l(),u(),d()}}f.addEventListener("submit",e=>{e.preventDefault(),T.value,A(),localStorage.removeItem("cart"),f.reset()});H.addEventListener("click",B);function B(e){e.preventDefault(),localStorage.removeItem("cart"),a.innerHTML="",u(),l(),d(),i.innerHTML="0"}function L(e){if(e.every(r=>typeof r=="number")){const r=e.reduce((c,t)=>c+t,0).toFixed(2);v.innerHTML=`$${r}`}else{const r=e.reduce((c,t)=>c+t.price,0).toFixed(2);v.innerHTML=`$${r}`}}function k(e,n,r,c,t,o){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${E}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${r}" alt="Product"></div>
    <div class="js-selected-item-description">
        <p class="js-item-product-name">${n}</p>
<div class="js-item-description-section">
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> </p> <p class="js-item-product-properties">Size: <span class="js-item-product-descr">${t}</span></p>
        </div>
        <div class="js-price-count-section"><p data-price="${o}" class="js-item-product-price">$<span class="js-price-value">${o}</span></p>
        <div class="js-counter-section">
        <button type="button" class="btn-count-minus">-</button>
        <p class="count-product">${$}</p>
       
        <button type="button" class="btn-count-plus">+</button>
        </div>
        </div>
    </div>
</div>
<div class="underline-container">
<p class="underline"></p>
</div>
`}function l(){S.style.display="flex"}function b(){S.style.display="none"}function O(){g.style.display="flex"}function u(){g.style.display="none"}function A(){_()}async function _(){window.addEventListener("keydown",h),document.body.classList.add("show-ordered-modal"),C(),document.querySelector(".js-backdrop-ordered").addEventListener("click",q),document.querySelector('[data-action="close-modal-cart"]').addEventListener("click",M)}function h(e){e.code==="Escape"&&y()}function M(){y()}function y(){window.removeEventListener("keydown",h),document.body.classList.remove("show-ordered-modal"),document.querySelector(".js-backdrop-ordered").removeEventListener("click",q),document.querySelector('[data-action="close-modal-cart"]').removeEventListener("click",M),C(),l(),u(),d(),i.innerHTML="0",a.innerHTML=""}function q(e){e.currentTarget===e.target&&y()}function x(){return document.body.classList.contains("show-modal")}function C(){document.body.style.overflow=x()?"hidden":""}
//# sourceMappingURL=commonHelpers.js.map
