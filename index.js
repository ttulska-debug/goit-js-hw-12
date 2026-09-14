import{a as E,S as $,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const B="57504971-0f19121609e97483ed2a79294",R="https://pixabay.com/api/";async function g(t,r=1){return(await E.get(R,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const h=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more"),y=document.querySelector(".end-message"),A=new $(".gallery a",{captionsData:"alt",captionDelay:250});function L(t){const r=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:n,comments:M,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                <span>${o}</span>
              </p>
              <p class="info-item">
                <b>Views</b>
                <span>${n}</span>
              </p>
              <p class="info-item">
                <b>Comments</b>
                <span>${M}</span>
              </p>
              <p class="info-item">
                <b>Downloads</b>
                <span>${P}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",r),A.refresh()}function O(){h.innerHTML=""}function b(){f.classList.add("is-visible")}function S(){f.classList.remove("is-visible")}function d(){p.classList.remove("is-hidden")}function c(){p.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}function x(){y.classList.add("is-hidden")}const q=document.querySelector(".form"),I=document.querySelector(".gallery"),_=document.querySelector(".load-more"),v=15;let u="",a=1,m=0;q.addEventListener("submit",D);_.addEventListener("click",G);async function D(t){t.preventDefault();const r=t.currentTarget.elements["search-text"].value.trim();if(r===""){l.error({message:"Please enter a search query.",position:"topRight"});return}u=r,a=1,O(),c(),x(),b();try{const s=await g(u,a);if(m=s.totalHits,s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits),s.hits.length<v||s.hits.length>=m?(c(),w()):d()}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),q.reset()}}async function G(){a+=1,c(),b();try{const t=await g(u,a);L(t.hits);const r=I.querySelectorAll(".gallery-item").length;t.hits.length<v||r>=m||t.hits.length===0?(c(),w()):d(),H()}catch{a-=1,l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{S()}}function H(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
