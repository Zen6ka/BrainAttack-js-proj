import{s as y}from"./assets/icons-bdf70574.js";console.log(y);const s=document.querySelector(".js-cart-items-quantity"),f=document.querySelector(".js-cart-empty"),S=document.querySelector(".js-cart-container"),M=document.querySelector(".js-delete-all-btn"),a=document.querySelector(".js-cart-selected-products");document.querySelector(".js-cart-order-details");const H=document.querySelector(".js-total-ordered-price"),g=document.querySelector(".js-email-form"),T=document.querySelector(".input");console.log("Test start");L();l();function d(){const e=localStorage.getItem("cart");return JSON.parse(e)}const m=d();console.log(m);const p=h(m);s.innerHTML=p.length;const q=p.map(e=>j(e._id,e.name,e.img,e.category,e.size,e.price)).join("");a.innerHTML=q;v(p);a.addEventListener("click",P);function h(e){if(e===null||e.length<1)return s.innerHTML="0",u(),l(),console.log("Error array"),[];L(),E();const t=new Set,o=m.filter(c=>{const r=c._id;return t.has(r)?!1:(t.add(r),!0)});return console.log(o),o}function P(e){const t=e.target.closest("[id]"),o=t?t.id:null;if(console.log(o),e.target.closest(".cart-remove-product-btn")){const r=d().filter(i=>i._id!==o);if(console.log(r),r.length>0){localStorage.setItem("cart",JSON.stringify(r));const i=d().map(n=>j(n._id,n.name,n.img,n.category,n.size,n.price)).join("");a.innerHTML=i,v(r),s.innerHTML=r.length}else localStorage.removeItem("cart"),s.innerHTML="0",a.innerHTML="",u(),l()}}g.addEventListener("submit",e=>{e.preventDefault();const t=T.value;console.log(`Ordered by: ${t}`),console.log("Submit successful"),u(),l(),s.innerHTML="0",a.innerHTML="",localStorage.removeItem("cart"),g.reset()});M.addEventListener("click",$);function $(e){e.preventDefault(),localStorage.removeItem("cart"),a.innerHTML="",l(),u(),s.innerHTML="0"}function v(e){const t=e.reduce((o,c)=>o+c.price,0).toFixed(2);H.innerHTML=`$${t}`}function j(e,t,o,c,r,i){return`
<div class="selected-item" id="${e}">
    <button class="cart-remove-product-btn"><svg class="js-delete-product-icon"><use href='${y}#icon-ion_close-sharp'></use></svg></button>
    <div class="js-selected-item-img"><img class='js-product-item-img' src="${o}" alt="Product"></div>
    <div class="js-selected-item-descroption">
        <p class="js-item-product-name">${t}</p>
        <p class="js-item-product-properties">Category: <span class="js-item-product-descr">${c}</span> Size: <span class="js-item-product-descr">${r}</span></p>
        <p class="js-item-product-price">$${i}</p>
    </div>
</div>
<p class="underline"></p>
`}function u(){f.style.display="flex"}function L(){f.style.display="none"}function E(){S.style.display="flex"}function l(){S.style.display="none"}console.log("Test end");
//# sourceMappingURL=commonHelpers.js.map
