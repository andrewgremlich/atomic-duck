(()=>{var u=(t,r,n)=>{var a;return function(){var s=this,c=arguments,o=function(){a=null,n||t.apply(s,c)},d=n&&!a;clearTimeout(a),a=setTimeout(o,r),d&&t.apply(s,c)}},i=(t,r)=>{let n=document.createElement(t),a=document.createTextNode(r);return n.appendChild(a),n},m=(t,r)=>(r.forEach(n=>{t.appendChild(n)}),t);var f=document.getElementById("searchContainer"),v=document.getElementById("searchArea"),l=document.getElementById("searchBar"),e=document.createElement("aside");e.id="searchResultsPreview";e.style.display="none";var C=t=>{e.innerHTML="",t.length>0&&t.forEach(({name:r,relPermalink:n,description:a,date:s})=>{let c=document.createElement("div"),o=document.createElement("p"),d=i("a",r),[g]=n.split("index.json");d.href=g,o.appendChild(d);let p=i("p",s.toString().substring(0,10));p.classList.add("small-text");let h=i("p",a);h.classList.add("small-text"),m(c,[o,p,h]),e.appendChild(c)})};(async()=>{let{href:t}=location,n=await(await fetch(t+"index.json")).json(),a=u(s=>{let c=s.target.value.toLowerCase();if(c.length>3){f.appendChild(e),e.classList.add("appear");let o=n.data.filter(d=>{if(d.name.toLowerCase().includes(c))return!0});e.style.display="block",C(o)}else e.children.length&&(e.innerHTML="",f.removeChild(e))},500);l.addEventListener("keyup",a),l.addEventListener("click",a),l.addEventListener("search",()=>e.innerHTML=""),document.addEventListener("click",s=>{e.children.length&&!s.target.closest("#searchContainer")&&(e.innerHTML="")}),v.addEventListener("submit",s=>s.preventDefault())})();})();
