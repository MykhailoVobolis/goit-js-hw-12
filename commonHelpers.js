import{a as d,S as f,i as n}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function u(r){return r.map(t=>` <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              width="360"
              height="152"
          /></a>
          <div class="parameters-block">
            <div class="parameter">
              <h2 class="title">Likes</h2>
              <p class="amount">${t.likes}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Views</h2>
              <p class="amount">${t.views}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Comments</h2>
              <p class="amount">${t.comments}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Downloads</h2>
              <p class="amount">${t.downloads}</p>
            </div>
          </div>
        </li>`).join("")}async function p(r,t){const a="42417927-02b658e2f5610bf7e034ab0b0",o="https://pixabay.com/api/";return(await d.get(`${o}`,{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const c=document.querySelector(".gallery"),g=document.querySelector("form"),l=document.querySelector(".loader"),m=document.querySelector(".btn-load"),h=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let y=1;g.addEventListener("submit",b);async function b(r){r.preventDefault(),c.innerHTML="",m.classList.add("is-hidden"),l.classList.remove("is-hidden");const t=r.target.elements.search.value.trim();p(t,y).then(a=>{a.hits.length||n.error({message:"Sorry, there are no images matching your search query. Please try again!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432});const o=u(a.hits);c.insertAdjacentHTML("beforeend",o),h.refresh(),r.target.reset()}).catch(a=>{n.error({message:`${a}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:432})}).finally(()=>{l.classList.add("is-hidden"),m.classList.remove("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
