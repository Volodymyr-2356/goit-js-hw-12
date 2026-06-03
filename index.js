import{a as f,S as p,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=f.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",image_type:"photo",orientation:"horizontal",safesearch:!0}}),h=n=>m.get("",{params:{q:n}}).then(o=>o.data),u=document.querySelector(".gallery"),d=document.querySelector(".loader");let l;function y(n){const o=n.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}"  />
          </a>

          <ul class="info">
            <p> Likes ${t.likes}</p>
            <p>Views ${t.views}</p>
            <p>Comments ${t.comments}</p>
            <p>Downloads ${t.downloads}</p>
          </ul>
        </li>
      `).join("");u.innerHTML=o,l?l.refresh():l=new p(".gallery a")}function g(){u.innerHTML=""}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",n=>{n.preventDefault();const o=c.elements["search-text"],t=o.value.trim();if(!t){a.show({title:"Warning",titleColor:"red",position:"topRight",message:"Please enter a search query"});return}g(),L(),h(t).then(s=>{if(s.hits.length===0){a.error({title:"No result",message:"Sorry, no images found. Try another search.",position:"topRight"});return}y(s.hits),o.value=""}).catch(s=>{console.error(s),a.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
