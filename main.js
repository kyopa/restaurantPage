(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("tab");const n=document.createElement("img");n.src="https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",n.style.width="400px",n.classList.add("img");const o=document.createElement("p");o.textContent="In the little village where i was born, life moved at a slower pace. Yet, felt all the richer for it. There, my two uncles were known far and wide for their delicious cooking. They seasoned their zesty chicken, using only the freshest herbs, and spices! People call them: Los Pollos Hermanos; The Chicken Brothers. Today we carry on their tradition in a manner that would make my uncles proud. The finest ingredients are brought together with love and care, then... slow-cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it... One taste, and you'll know.",o.style.width="400px",t.appendChild(n),t.appendChild(o),e.appendChild(t)}const t=document.querySelector("#content"),n=(e,n)=>{const o=document.createElement(e);return o.textContent=n,t.appendChild(o),o},o=n("button","HOME"),l=n("button","MENU"),c=n("button","CONTACT US");let a;e(),o.addEventListener("click",(()=>{a=document.querySelectorAll(".tab"),a.forEach((e=>{e.style.display="none"})),e()})),l.addEventListener("click",(()=>{a=document.querySelectorAll(".tab"),a.forEach((e=>{e.style.display="none"})),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("tab");const n=document.createElement("h1");n.textContent="MENU",t.appendChild(n),e.appendChild(t)}()})),c.addEventListener("click",(()=>{a=document.querySelectorAll(".tab"),a.forEach((e=>{e.style.display="none"})),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("tab");const n=document.createElement("h2");n.textContent="CONTACT US",n.style.color="blue",t.appendChild(n),e.appendChild(t)}()}))})();