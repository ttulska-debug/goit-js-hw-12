import{a as P,S as E,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const $="57504971-0f19121609e97483ed2a79294",B="https://pixabay.com/api/";async function g(t,r=1){return(await P.get(B,{params:{key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),y=document.querySelector(".end-message"),I=new E(".gallery a",{captionsData:"alt",captionDelay:250});function L(t){const r=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:a,comments:v,downloads:M})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${e}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                <span>${o}</span>
              </p>
              <p class="info-item">
                <b>Views</b>
                <span>${a}</span>
              </p>
              <p class="info-item">
                <b>Comments</b>
                <span>${v}</span>
              </p>
              <p class="info-item">
                <b>Downloads</b>
                <span>${M}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r),I.refresh()}function R(){p.innerHTML=""}function b(){f.classList.add("is-visible")}function S(){f.classList.remove("is-visible")}function d(){h.classList.remove("is-hidden")}function c(){h.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}function A(){y.classList.add("is-hidden")}const q=document.querySelector(".form"),O=document.querySelector(".gallery");let u="",i=1,m=0;const x=15;q.addEventListener("submit",D);const _=document.querySelector(".load-more");_.addEventListener("click",G);async function D(t){t.preventDefault();const n=t.currentTarget.elements["search-text"].value.trim();if(n===""){l.error({message:"Please enter a search query.",position:"topRight"});return}u=n,i=1,R(),c(),A(),b();try{const s=await g(u,i);if(m=s.totalHits,s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits),s.hits.length>=m?(c(),w()):d()}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),q.reset()}}async function G(){i+=1,c(),b();try{const t=await g(u,i);L(t.hits);const r=O.querySelectorAll(".gallery-item").length;t.hits.length===0||r>=m||t.hits.length<x?(c(),w()):d(),H()}catch{i-=1,l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{S()}}function H(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
