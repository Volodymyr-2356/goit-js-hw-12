import{a as v,S as w,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S=v.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}}),m=async(a,t)=>(await S.get("",{params:{q:a,page:t}})).data,h=document.querySelector(".gallery"),y=document.querySelector(".loader");let u;function g(a){const t=a.map(s=>`
        <li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}"  />
          </a>

          <ul class="info">
            <li class="stat">
              <span class="label">Likes</span>
              <span class="value">${s.likes}</span>
            </li>

              <li class="stat">
                <span class="label">Views</span>
                <span class="value">${s.views}</span>
              </li>

              <li class="stat">
                <span class="label">Comments</span>
                <span class="value">${s.comments}</span>
              </li>

              <li class="stat">
                <span class="label">Downloads</span>
                <span class="value">${s.downloads}</span>
              </li>
</ul>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new w(".gallery a")}function q(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function f(){y.classList.add("hidden")}const p=document.querySelector(".form"),i=document.querySelector(".load-button");let o=1,b="",c=0;p.addEventListener("submit",async a=>{a.preventDefault();const t=p.elements["search-text"],s=t.value.trim();if(!s){l.show({title:"Warning",message:"Please enter a search query"});return}o=1,b=s,c=0,q(),i.classList.add("hidden"),L();try{const{hits:n,totalHits:e}=await m(s,o);if(!n.length){l.error({title:"No result",message:"Sorry, no images found."}),f();return}c=Math.ceil(e/15),g(n),o+=1,t.value="",o>c?(i.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."})):i.classList.remove("hidden")}catch(n){console.error(n),l.error({title:"Error",message:"Something went wrong"})}finally{f()}});i.addEventListener("click",async()=>{if(o>c){i.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."});return}L();try{const{hits:a}=await m(b,o);g(a);const t=document.querySelector(".gallery-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}o+=1,o>c&&(i.classList.add("hidden"),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(a){console.error(a),l.error({title:"Error",message:"Failed to load more images"})}finally{f()}});
//# sourceMappingURL=index.js.map
