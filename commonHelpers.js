import{a as u,S as b,i as o}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function p(t){return t.map(e=>` <li class="gallery-item">
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
        </li>`).join("")}u.defaults.baseURL="https://pixabay.com/api/";const v="42417927-02b658e2f5610bf7e034ab0b0";async function y(t,e,a){return(await u.get("",{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:a}})).data}const m=document.querySelector(".gallery"),w=document.querySelector("form"),c=document.querySelector(".loader"),i=document.querySelector(".btn-load"),I=document.querySelector(".gallery"),L=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l="";const g=15;let n=1,h=0;w.addEventListener("submit",S);i.addEventListener("click",x);async function S(t){if(t.preventDefault(),m.innerHTML="",n=1,i.classList.add("is-hidden"),l=t.target.elements.search.value.trim(),l===""){o.warning({message:"The search query cannot be empty",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#FF8C00",progressBar:!1,position:"topRight",maxWidth:432});return}c.classList.remove("is-hidden");try{const e=await y(l,g,n);if(!e.hits.length){o.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});return}h=Math.ceil(e.totalHits/g),n===h?o.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}):i.classList.remove("is-hidden");const a=p(e.hits);m.insertAdjacentHTML("beforeend",a),L.refresh()}catch(e){o.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}finally{c.classList.add("is-hidden"),t.target.reset()}}async function x(t){i.classList.add("is-hidden"),c.classList.remove("is-hidden"),n+=1;try{const e=await y(l,g,n),a=p(e.hits);m.insertAdjacentHTML("beforeend",a),L.refresh(),i.classList.remove("is-hidden"),C(),n===h&&(o.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}),i.classList.add("is-hidden"))}catch(e){o.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}finally{c.classList.add("is-hidden")}}function C(){let t=I.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*3,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
