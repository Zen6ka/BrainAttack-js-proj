import"./assets/styles-56715810.js";const n=document.querySelector(".js-cart-items-quantity"),g=document.querySelector(".js-cart-empty"),y=document.querySelector(".js-cart-container"),j=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const L=document.querySelector(".js-total-ordered-price"),M=document.querySelector(".js-email-form"),h=document.querySelector(".js-email-checkout"),p=document.querySelector(".input");console.log("Test start");v();l();function m(){const e=localStorage.getItem("cart");return JSON.parse(e)}const c=m();console.log(c);if(c===null||c.length<1)n.innerHTML="0",u(),l();else{n.innerHTML=c.length,v(),q();const e=c.map(t=>f(t._id,t.name,t.img,t.category,t.size,t.price)).join("");a.innerHTML=e,n.innerHTML=c.length,S(c),a.addEventListener("click",H)}function H(e){const t=e.target.closest("[id]"),o=t?t.id:null;if(console.log(o),e.target.closest(".cart-remove-product-btn")){const r=m().filter(i=>i._id!==o);if(console.log(r),r.length>0){localStorage.setItem("cart",JSON.stringify(r));const i=m().map(s=>f(s._id,s.name,s.img,s.category,s.size,s.price)).join("");a.innerHTML=i,S(r),n.innerHTML=r.length}else localStorage.removeItem("cart"),n.innerHTML="0",a.innerHTML="",u(),l()}}M.addEventListener("change",e=>{e.preventDefault(),console.log(p.value),p.value=""});h.addEventListener("click",e=>{e.preventDefault(),console.log("Submit successful"),u(),l(),n.innerHTML="0",a.innerHTML="",localStorage.removeItem("cart")});j.addEventListener("click",T);function T(e){e.preventDefault(),localStorage.removeItem("cart"),a.innerHTML="",l(),u(),n.innerHTML="0"}function S(e){const t=e.reduce((o,d)=>o+d.price,0).toFixed(2);L.innerHTML=`$${t}`}function f(e,t,o,d,r,i){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${o}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${d}</span> Size: <span class="js-item-product-descr">${r}</span></p>
        <p class="js-item-product-price">$${i}</p>
    </div>
</div>
<p class="underline"></p>
`}function u(){g.style.display="flex"}function v(){g.style.display="none"}function q(){y.style.display="flex"}function l(){y.style.display="none"}console.log("Test end");
//# sourceMappingURL=commonHelpers.js.map
