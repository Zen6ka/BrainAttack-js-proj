import"./assets/styles-a2b85789.js";const l=document.querySelector(".js-cart-items-quantity"),m=document.querySelector(".js-cart-empty"),g=document.querySelector(".js-cart-container"),S=document.querySelector(".js-delete-all-btn"),n=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const j=document.querySelector(".js-total-ordered-price"),L=document.querySelector(".js-email-form"),M=document.querySelector(".js-email-checkout"),p=document.querySelector(".input");console.log("Test start");f();i();function d(){const e=localStorage.getItem("cart");return JSON.parse(e)}const o=d();console.log(o);function h(e){const t=e.reduce((r,c)=>r+c.price,0).toFixed(2);j.innerHTML=`$${t}`}n.addEventListener("click",y);function y(e){if(e.target.closest(".cart-remove-product-btn")){let t=d();const{_id:r}=t,c=t.filter(s=>s._id!==r);if(console.log(c),c>0){localStorage.setItem("cart",JSON.stringify(c));const s=d(),a=v(s);n.innerHTML=a,console.log("11111")}console.log("2222")}else{console.log("3333");return}}if(o===null||o.length<1)l.innerHTML="0",u(),i();else{l.innerHTML=o.length,f(),H(),console.log("sdsdsd");const e=o.map(t=>v(t._Id,t.name,t.img,t.category,t.size,t.price)).join("");console.log(e.length),n.innerHTML=e,l.innerHTML=o.length,h(o),n.addEventListener("click",y)}L.addEventListener("change",e=>{e.preventDefault(),console.log(p.value),p.value=""});M.addEventListener("click",e=>{e.preventDefault(),console.log("Submit successful"),u(),i(),l.innerHTML="0",n.innerHTML=""});S.addEventListener("click",k);function k(e){e.preventDefault(),localStorage.removeItem("cart"),n.innerHTML="",i(),u(),l.innerHTML=0}function v(e,t,r,c,s,a){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href="./img/icons.svg#icon-ion_close-sharp"></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${r}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${s}</span></p>
        <p class="js-item-product-price">$${a}</p>
    </div>
</div>
<p class="underline"></p>
`}function u(){m.style.display="flex"}function f(){m.style.display="none"}function H(){g.style.display="flex"}function i(){g.style.display="none"}console.log("Test end");
//# sourceMappingURL=commonHelpers.js.map
