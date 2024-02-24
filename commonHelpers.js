import{a as p,S as y,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();function m(r){return r.map(e=>` <li class="gallery-item">
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
        </li>`).join("")}async function u(r,e){const i="42417927-02b658e2f5610bf7e034ab0b0",o="https://pixabay.com/api/";return(await p.get(`${o}`,{params:{key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const c=document.querySelector(".gallery"),L=document.querySelector("form"),l=document.querySelector(".loader"),a=document.querySelector(".btn-load"),f=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let h=1;L.addEventListener("submit",b);a.addEventListener("click",v);let g="";function b(r){r.preventDefault(),c.innerHTML="",a.classList.add("is-hidden"),l.classList.remove("is-hidden"),g=r.target.elements.search.value.trim(),u(g,h).then(e=>{if(!e.hits.length){a.classList.add("is-hidden"),n.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});return}const i=m(e.hits);c.insertAdjacentHTML("beforeend",i),f.refresh(),r.target.reset(),a.classList.remove("is-hidden")}).catch(e=>{n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432}),a.classList.add("is-hidden")}).finally(()=>{l.classList.add("is-hidden")})}function v(r){a.classList.add("is-hidden"),l.classList.remove("is-hidden"),h+=1,u(g,h).then(e=>{if(e.hits.length<15){n.info({message:"We're sorry, but you've reached the end of search results.",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#0099FF",progressBar:!1,position:"topRight",maxWidth:432});const o=m(e.hits);c.insertAdjacentHTML("beforeend",o),f.refresh(),a.classList.add("is-hidden");return}const i=m(e.hits);c.insertAdjacentHTML("beforeend",i),f.refresh(),a.classList.remove("is-hidden")}).catch(e=>{n.error({message:`${e}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}).finally(()=>{l.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
