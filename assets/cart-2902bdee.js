(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector(".js-cart-items-quantity"),f=document.querySelector(".js-cart-empty"),g=document.querySelector(".js-cart-container"),L=document.querySelector(".js-delete-all-btn"),i=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const h=document.querySelector(".js-total-ordered-price"),j=document.querySelector(".js-email-form"),M=document.querySelector(".js-email-checkout"),m=document.querySelector(".input");console.log("Test start");S();a();function u(){const t=localStorage.getItem("cart");return JSON.parse(t)}const s=u();console.log(s);function q(t){const r=t.reduce((n,c)=>n+c.price,0).toFixed(2);h.innerHTML=`$${r}`}i.addEventListener("click",y);function y(t){if(t.target.closest(".cart-remove-product-btn")){let r=u();const{_id:n}=r,c=r.filter(e=>e._id!==n);if(console.log(c),c>0){localStorage.setItem("cart",JSON.stringify(c));const e=u(),o=v(e);i.innerHTML=o,console.log("11111")}console.log("2222")}else{console.log("3333");return}}if(s===null||s.length<1)l.innerHTML="0",p(),a();else{l.innerHTML=s.length,S(),P(),console.log("sdsdsd");const t=s.map(r=>v(r._Id,r.name,r.img,r.category,r.size,r.price)).join("");console.log(t.length),i.innerHTML=t,l.innerHTML=s.length,q(s),i.addEventListener("click",y)}j.addEventListener("change",t=>{t.preventDefault(),console.log(m.value),m.value=""});M.addEventListener("click",t=>{t.preventDefault(),console.log("Submit successful"),p(),a(),l.innerHTML="0",i.innerHTML=""});L.addEventListener("click",H);function H(t){t.preventDefault(),localStorage.removeItem("cart"),i.innerHTML="",a(),p(),l.innerHTML=0}function v(t,r,n,c,e,o){return`
<div class="selected-item" id="${t}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${n}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${r}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${e}</span></p>
        <p class="js-item-product-price">$${o}</p>
    </div>
</div>
<p class="underline"></p>
`}function p(){f.style.display="flex"}function S(){f.style.display="none"}function P(){g.style.display="flex"}function a(){g.style.display="none"}console.log("Test end");
//# sourceMappingURL=cart-2902bdee.js.map
