import{a as L,S as b,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function u(s){return s.map(e=>` <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
              width="360"
              height="152"
          /></a>
          <div class="parameters-block">
            <div class="parameter">
              <h2 class="title">Likes</h2>
              <p class="amount">${e.likes}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Views</h2>
              <p class="amount">${e.views}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Comments</h2>
              <p class="amount">${e.comments}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Downloads</h2>
              <p class="amount">${e.downloads}</p>
            </div>
          </div>
        </li>`).join("")}const v="42417927-02b658e2f5610bf7e034ab0b0",w="https://pixabay.com/api/";async function p(s,e,a){return(await L.get(`${w}`,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:a}})).data}const m=document.querySelector(".gallery"),I=document.querySelector("form"),l=document.querySelector(".loader"),o=document.querySelector(".btn-load"),S=document.querySelector(".gallery"),y=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let f="";const h=15;let i=1,g=0;I.addEventListener("submit",x);o.addEventListener("click",H);async function x(s){s.preventDefault(),m.innerHTML="",i=1,o.classList.add("is-hidden"),l.classList.remove("is-hidden"),f=s.target.elements.search.value.trim();try{const e=await p(f,h,i);if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});return}g=Math.ceil(e.totalHits/h),i===g?n.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}):o.classList.remove("is-hidden");const a=u(e.hits);m.insertAdjacentHTML("beforeend",a),y.refresh()}catch(e){n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}finally{l.classList.add("is-hidden"),s.target.reset()}}async function H(s){o.classList.add("is-hidden"),l.classList.remove("is-hidden"),i+=1;try{const e=await p(f,h,i),a=u(e.hits);m.insertAdjacentHTML("beforeend",a),y.refresh(),o.classList.remove("is-hidden"),P(),i===g&&(n.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}),o.classList.add("is-hidden"))}catch(e){n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}finally{l.classList.add("is-hidden")}}function P(){let s=S.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
