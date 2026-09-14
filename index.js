import{a as $,S as B,i}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const E="57504971-0f19121609e97483ed2a79294",A="https://pixabay.com/api/";async function m(e,r=1){return(await $.get(A,{params:{key:E,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),I=new B(".gallery a",{captionsData:"alt",captionDelay:250});function L(e,r=!0){if(!e||e.length===0)return;const s=e.map(({webformatURL:n,largeImageURL:t,tags:o,likes:a,views:P,comments:M,downloads:R})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${n}"
              alt="${o}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                <span>${a}</span>
              </p>
              <p class="info-item">
                <b>Views</b>
                <span>${P}</span>
              </p>
              <p class="info-item">
                <b>Comments</b>
                <span>${M}</span>
              </p>
              <p class="info-item">
                <b>Downloads</b>
                <span>${R}</span>
              </p>
            </div>
          </a>
        </li>
      `).join("");r?u.insertAdjacentHTML("beforeend",s):u.innerHTML=s,I.refresh()}function O(){u.innerHTML=""}function b(){p.classList.add("is-visible")}function S(){p.classList.remove("is-visible")}function d(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const w=document.querySelector(".form"),q=document.querySelector(".gallery"),x=document.querySelector(".load-more"),v=15;let f="",c=1,g=0;w.addEventListener("submit",H);x.addEventListener("click",T);async function H(e){e.preventDefault();const r=e.currentTarget.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search query.",position:"topRight"});return}f=r,c=1,O(),l(),b();try{const s=await m(f,c);if(g=s.totalHits,!s.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits);const n=q.querySelectorAll(".gallery-item").length;s.hits.length<v||n>=g?(l(),h()):d()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S(),w.reset()}}async function T(){c+=1,l(),b();try{const e=await m(f,c);if(!e.hits.length){l(),h();return}L(e.hits);const r=q.querySelectorAll(".gallery-item").length;e.hits.length<v||r>=g?(l(),h()):d(),_()}catch{c-=1,i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{S()}}function h(){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function _(){const e=document.querySelector(".gallery-item");if(!e)return;const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
