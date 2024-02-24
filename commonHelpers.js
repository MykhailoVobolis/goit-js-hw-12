import{a as L,S as b,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();function u(r){return r.map(e=>` <li class="gallery-item">
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
        </li>`).join("")}async function p(r,e,a){const l="42417927-02b658e2f5610bf7e034ab0b0",t="https://pixabay.com/api/";return(await L.get(`${t}`,{params:{key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:a}})).data}const m=document.querySelector(".gallery"),v=document.querySelector("form"),c=document.querySelector(".loader"),o=document.querySelector(".btn-load"),y=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let f="";const h=15;let i=1,g=0;v.addEventListener("submit",w);o.addEventListener("click",I);function w(r){r.preventDefault(),m.innerHTML="",i=1,o.classList.add("is-hidden"),c.classList.remove("is-hidden"),f=r.target.elements.search.value.trim(),p(f,h,i).then(e=>{if(!e.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});return}g=Math.ceil(e.totalHits/h),i===g?n.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}):o.classList.remove("is-hidden");const a=u(e.hits);m.insertAdjacentHTML("beforeend",a),y.refresh(),r.target.reset()}).catch(e=>{n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432}),o.classList.add("is-hidden")}).finally(()=>{c.classList.add("is-hidden")})}function I(r){o.classList.add("is-hidden"),c.classList.remove("is-hidden"),i+=1,p(f,h,i).then(e=>{const a=u(e.hits);m.insertAdjacentHTML("beforeend",a),y.refresh(),o.classList.remove("is-hidden"),S(),i===g&&(n.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432}),o.classList.add("is-hidden"))}).catch(e=>{n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}).finally(()=>{c.classList.add("is-hidden")})}function S(){let e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
