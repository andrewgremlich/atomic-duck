(()=>{let f$=Object.hasOwnProperty,h$={},j$,k$=a$=>{let b$=h$[a$];return b$||(b$=h$[a$]={exports:{}},j$[a$](b$.exports,b$)),b$.exports},l$=a$=>{if(a$&&a$.__esModule)return a$;let b$={};for(let c$ in a$)f$.call(a$,c$)&&(b$[c$]=a$[c$]);return b$.default=a$,b$},p$=a$=>l$(k$(a$));j$={1(){const o=(a,f,c)=>{var d;return function(){var e=this,g=arguments,h=function(){d=null,c||a.apply(e,g)},i=c&&!d;clearTimeout(d),d=setTimeout(h,f),i&&a.apply(e,g)}},j=(a,f)=>{const c=document.createElement(a),d=document.createTextNode(f);return c.appendChild(d),c},p=(a,f)=>(f.forEach(c=>{a.appendChild(c)}),a);const l=document.getElementById("searchContainer"),q=document.getElementById("searchArea"),k=document.getElementById("searchBar"),b=document.createElement("aside");b.id="searchResultsPreview";const r=a=>{b.innerHTML="",a.length>0&&a.forEach(({name:f,relPermalink:c,description:d,date:e})=>{const g=document.createElement("div"),h=document.createElement("p"),i=j("a",f),[s]=c.split("index.json");i.href=s,h.appendChild(i);const m=j("p",e.toString().substring(0,10));m.classList.add("small-text");const n=j("p",d);n.classList.add("small-text"),p(g,[h,m,n]),b.appendChild(g)})};(async()=>{const{href:a}=location,f=await fetch(a+"index.json"),c=await f.json(),d=o(e=>{const g=e.target.value.toLowerCase();if(g.length>3){l.appendChild(b),b.classList.add("appear");const h=c.data.filter(i=>{if(i.name.toLowerCase().includes(g))return!0});r(h)}else b.children.length&&(b.innerHTML="",l.removeChild(b))},500);k.addEventListener("keyup",d),k.addEventListener("click",d),k.addEventListener("search",()=>b.innerHTML=""),document.addEventListener("click",e=>{b.children.length&&!e.target.closest("#searchContainer")&&(b.innerHTML="")}),q.addEventListener("submit",e=>e.preventDefault())})()}};return k$(1)})();
