import{a as w,S as v,i}from"./assets/vendor-DcHCnVjq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const S=w.create({baseURL:"https://pixabay.com/api/",params:{key:"56004619-5e359d977e1c08efaf1a151d7",per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}}),h=async(s,o)=>(await S.get("",{params:{q:s,page:o}})).data,y=document.querySelector(".gallery"),p=document.querySelector(".loader");let u;function g(s){const o=s.map(r=>`
        <li class="gallery-item">
          <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}"  />
          </a>

          <ul class="info">
            <p> Likes ${r.likes}</p>
            <p>Views ${r.views}</p>
            <p>Comments ${r.comments}</p>
            <p>Downloads ${r.downloads}</p>
          </ul>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",o),u?u.refresh():u=new v(".gallery a")}function q(){y.innerHTML=""}function L(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}const m=document.querySelector(".form"),l=document.querySelector(".load-button");let a=1,b="",c=0;m.addEventListener("submit",async s=>{s.preventDefault();const o=m.elements["search-text"],r=o.value.trim();if(!r){i.show({title:"Warning",message:"Please enter a search query"});return}a=1,b=r,c=0,q(),l.classList.add("hidden"),L();try{const{hits:n,totalHits:e}=await h(r,a);if(!n.length){i.error({title:"No result",message:"Sorry, no images found."}),f();return}c=Math.ceil(e/15),g(n),a+=1,o.value="",a>c?(l.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."})):l.classList.remove("hidden")}catch(n){console.error(n),i.error({title:"Error",message:"Something went wrong"})}finally{f()}});l.addEventListener("click",async()=>{if(a>c){l.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."});return}L();try{const{hits:s}=await h(b,a);g(s),a+=1,a>c&&(l.classList.add("hidden"),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch(s){console.error(s),i.error({title:"Error",message:"Failed to load more images"})}finally{f()}});
//# sourceMappingURL=index.js.map
