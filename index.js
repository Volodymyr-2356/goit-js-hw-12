import{a as b,S as v,i}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const S=b.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}}),p=async(o,s)=>(await S.get("",{params:{q:o,page:s}})).data,y=document.querySelector(".gallery"),h=document.querySelector(".loader");let u;function g(o){const s=o.map(t=>`
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
      `).join("");y.insertAdjacentHTML("beforeend",s),u?u.refresh():u=new v(".gallery a")}function q(){y.innerHTML=""}function L(){h.classList.remove("hidden")}function f(){h.classList.add("hidden")}const m=document.querySelector(".form"),l=document.querySelector(".load-button");let a=1,w="",c=0;m.addEventListener("submit",async o=>{o.preventDefault();const s=m.elements["search-text"],t=s.value.trim();if(!t){i.show({title:"Warning",message:"Please enter a search query"});return}a=1,w=t,c=0,q(),l.classList.add("hidden"),L();try{const{hits:n,totalHits:e}=await p(t,a);if(!n.length){i.error({title:"No result",message:"Sorry, no images found."}),f();return}c=Math.ceil(e/15),g(n),a+=1,s.value="",a<=c&&l.classList.remove("hidden")}catch(n){console.error(n),i.error({title:"Error",message:"Something went wrong"})}finally{f()}});l.addEventListener("click",async()=>{if(a>c){l.classList.add("hidden");return}L();try{const{hits:o}=await p(w,a);g(o),a+=1,a>c&&(l.classList.add("hidden"),i.info({message:"No more images"}))}catch(o){console.error(o),i.error({title:"Error",message:"Failed to load more images"})}finally{f()}});
//# sourceMappingURL=index.js.map
