import{a as w,S,i as l}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const q=w.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}}),p=async(a,s)=>(await q.get("",{params:{q:a,page:s}})).data,h=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-button");let d;function b(a){const s=a.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}"  />
          </a>

          <ul class="info">
            <li class="stat">
              <span class="label">Likes</span>
              <span class="value">${t.likes}</span>
            </li>

              <li class="stat">
                <span class="label">Views</span>
                <span class="value">${t.views}</span>
              </li>

              <li class="stat">
                <span class="label">Comments</span>
                <span class="value">${t.comments}</span>
              </li>

              <li class="stat">
                <span class="label">Downloads</span>
                <span class="value">${t.downloads}</span>
              </li>
            </ul>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new S(".gallery a")}function $(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function f(){y.classList.add("hidden")}function M(){g.classList.remove("hidden")}function i(){g.classList.add("hidden")}const m=document.querySelector(".form"),O=document.querySelector(".load-button");let o=1,v="",c=0;m.addEventListener("submit",async a=>{a.preventDefault();const s=m.elements["search-text"],t=s.value.trim();if(!t){l.show({title:"Warning",message:"Please enter a search query"});return}o=1,v=t,c=0,$(),i(),L();try{const{hits:n,totalHits:e}=await p(t,o);if(!n.length){l.error({title:"No result",message:"Sorry, no images found."}),f();return}c=Math.ceil(e/15),b(n),o+=1,s.value="",o>c?(i(),l.info({message:"We're sorry, but you've reached the end of search results."})):M()}catch(n){console.error(n),l.error({title:"Error",message:"Something went wrong"})}finally{f()}});O.addEventListener("click",async()=>{if(o>c){i(),l.info({message:"We're sorry, but you've reached the end of search results."});return}i(),L();try{const{hits:a}=await p(v,o);b(a);const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}o+=1,o>c&&(i(),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(a){console.error(a),l.error({title:"Error",message:"Failed to load more images"})}finally{f()}});
//# sourceMappingURL=index.js.map
