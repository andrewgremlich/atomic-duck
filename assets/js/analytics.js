(()=>{const h=a=>{const b=a.split(/\n/g);return b.reduce((c,d)=>{const[e,j]=d.split("=");return{...c,[e]:j}},{})},i=()=>navigator.language,f=async()=>{const a=await fetch("https://www.cloudflare.com/cdn-cgi/trace"),b=await a.text(),c=h(b);return{...c,lang:i()}};const g=async(a,b)=>{if(navigator.doNotTrack!=="1"){const{loc:c,colo:d,lang:e}=await f();setTimeout(()=>{fetch(`https://lite-analytics.netlify.app/.netlify/functions/index/analytics/recordVisit/${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loc:c,colo:d,lang:e,page:location.pathname})})},b.delay)}else setTimeout(()=>{fetch(`https://lite-analytics.netlify.app/.netlify/functions/index/analytics/recordVisit/${a}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loc:"N/A",colo:"N/A",lang:"N/A",page:location.pathname})})},b.delay)};window.liteAnalytics=g;})();