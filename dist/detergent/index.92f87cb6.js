var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire2d1f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequire2d1f=o),o("fmRoT");new Event("loading-screen",{cancelable:!0,bubbles:!0,composed:!0}),new Event("end-load",{cancelable:!0,bubbles:!0,composed:!0});const s=document.getElementById("loader-wrapper");window.addEventListener("loading-screen",(()=>{s.classList.remove("fadeout"),s.classList.remove("hide")}),!1),window.addEventListener("end-load",(()=>s.classList.add("hide","fadeout")),!1);const l=e=>{const t=document.getElementById("alertMessage"),n=document.createElement("p");e.err?n.textContent="Message was not sent":n.textContent="Message Sent Succesfully",t.appendChild(n),e.err?t.classList.add("alert-danger"):t.classList.add("alert-success"),t.classList.remove("d-none"),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value="",setTimeout((()=>{t.classList.add("d-none"),t.classList.remove("alert-success")}),3e3)},a=e=>{const t=[];return Object.entries(e).forEach((e=>{const[n,o]=e;o||t.push(n.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))+" field cannot be left empty")})),t.length>0?{err:t}:{...e}};const d=document.querySelectorAll(".slide"),r=document.querySelector("#next"),c=document.querySelector("#prev");let i;const u=()=>{const e=document.querySelector(".current");e.nextElementSibling?e.nextElementSibling.classList.add("current"):d[0].classList.add("current"),setTimeout((()=>e.classList.remove("current")),200)};r.addEventListener("click",(()=>{u(),clearInterval(i),i=setInterval(u,6e3)})),c.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".current");e.previousElementSibling?e.previousElementSibling.classList.add("current"):d[d.length-1].classList.add("current"),setTimeout((()=>e.classList.remove("current")),200)})(),clearInterval(i),i=setInterval(u,6e3)})),i=setInterval(u,6e3),document.getElementById("content").style.opacity=0,document.onreadystatechange=function(){var e=document.readyState;"interactive"==e||"complete"==e&&setTimeout((function(){document.getElementById("content").classList.add("fadein"),document.getElementById("loader-wrapper").classList.add("fadeout","hide"),document.getElementById("content").style.opacity=1}),1e3)},window.addEventListener("scroll",(function(e){window.scrollY>1?document.getElementById("detergent-nav").classList.add("bg-light-blue"):document.getElementById("detergent-nav").classList.remove("bg-light-blue")})),AOS.init();document.getElementById("contact-form").addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("name").value,n=document.getElementById("email").value,o=document.getElementById("message").value,s=a({name:t,email:n,message:o});if(s.err){const e=document.getElementById("alertMessage");s.err.map((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e.classList.add("alert-danger"),e.classList.remove("d-none")}else window.dispatchEvent(loadEvent),axios.post("./contactForm.php",s,{headers:{"Content-Type":"application/json"}}).then((e=>{const{data:t}=e;l(t),window.dispatchEvent(endLoadEvent)})).catch((e=>console.log(e)))}));const m=document.querySelectorAll(".line"),p=(document.querySelector(".factory-banner"),document.querySelectorAll(".banner-text"),{});Array.prototype.forEach.call(m,((e,t)=>{p[t]=e.offsetParent.offsetTop+e.offsetTop})),window.addEventListener("scroll",(e=>{for(var t in p)window.scrollY>=p[t]-200&&m[t].classList.add("line_animation")}));
//# sourceMappingURL=index.92f87cb6.js.map
