import{a as u}from"./vendor-27c5a77b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const t={formSubscription:document.querySelector(".footer-form"),openModalPolicy:document.querySelector(".js-modal-policy-open"),openModalTerms:document.querySelector(".js-modal-terms-open"),closeModalPolicyBtn:document.querySelector(".js-policy-close"),closeModalTermsBtn:document.querySelector(".js-terms-close"),policyLink:document.querySelector(".js-policy"),termsLink:document.querySelector(".js-terms")};t.formSubscription.addEventListener("submit",p);function p(s){s.preventDefault();const n=s.currentTarget.elements.email.value;y(n),s.currentTarget.reset()}async function y(s){u.defaults.baseURL="https://food-boutique.b.goit.study/api/";const n={method:"post",url:"subscription",headers:{"Content-Type":"application/json"},data:{email:s}};try{const r=await u.request(n);alert(r.data.message)}catch(r){alert(r.response.data.message),console.log(r)}}t.openModalPolicy.addEventListener("click",()=>{m(t.policyLink),f(),window.addEventListener("keydown",i)});t.openModalTerms.addEventListener("click",()=>{m(t.termsLink),v(),window.addEventListener("keydown",i)});function m(s){s.classList.remove("is-hidden-policy"),document.body.classList.add(".no-scroll")}function f(){t.closeModalPolicyBtn.addEventListener("click",l)}function l(){t.policyLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),L()}function L(){t.closeModalPolicyBtn.removeEventListener("click",l),window.removeEventListener("keydown",i)}function v(){t.closeModalTermsBtn.addEventListener("click",d)}function d(){t.termsLink.classList.add("is-hidden-policy"),document.body.classList.remove(".no-scroll"),g()}function g(){t.closeModalTermsBtn.removeEventListener("click",d),window.removeEventListener("keydown",i)}function i({code:s}){s==="Escape"&&(l(),d())}const h="/BrainAttack-js-proj/assets/icons-617986b7.svg";export{h as s};
//# sourceMappingURL=icons-c7d36446.js.map