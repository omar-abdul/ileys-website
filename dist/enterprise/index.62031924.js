function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire2d1f;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequire2d1f=a);var s=a("fmRoT");document.getElementById("content").style.opacity=0,document.onreadystatechange=function(){var e=document.readyState;"interactive"==e||"complete"==e&&setTimeout((function(){document.getElementById("content").classList.add("fadein"),document.getElementById("loader-wrapper").classList.add("fadeout","hide"),document.getElementById("content").style.opacity=1}),1e3)};var d=document.querySelectorAll(".section"),l={},c=0;Array.prototype.forEach.call(d,(function(e){l[e.id]=e.offsetTop})),window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;if(e<30)for(var t=document.querySelectorAll("#menu-items>.nav-link"),n=0;n<t.length;n++)t[n].classList.remove("active");for(c in l)l[c]<=e+100&&(document.querySelector(".nav-link.active")&&document.querySelector(".nav-link.active").classList.remove("active"),document.querySelector("a[href*="+c+"]").classList.add("active"))},window.addEventListener("scroll",(function(e){window.scrollY>1?document.getElementById("enterprise-nav").classList.add("bg-light"):document.getElementById("enterprise-nav").classList.remove("bg-light")})),AOS.init(),document.addEventListener("aos:in:color",(({detail:e})=>{e.classList.add("change-color"),console.log(e)}));const r=new Event("loading-screen",{cancelable:!0,bubbles:!0,composed:!0}),i=new Event("end-load",{cancelable:!0,bubbles:!0,composed:!0}),m=document.getElementById("loader-wrapper"),u=document.getElementById("content");u.addEventListener("loading-screen",(()=>{m.classList.remove("fadeout"),m.classList.remove("hide")}),!1),u.addEventListener("end-load",(()=>m.classList.add("hide","fadeout")),!1);let p,f,g;document.getElementById("contact-form").addEventListener("submit",(t=>{t.preventDefault(),p=document.getElementById("name").value,f=document.getElementById("email").value,g=document.getElementById("message").value;const n=y({name:p,email:f,message:g});if(n.err){const e=document.getElementById("alertMessage");n.err.map((t=>{const n=document.createElement("p");n.textContent=t,e.appendChild(n)})),e.classList.add("alert-danger"),e.classList.remove("d-none")}else u.dispatchEvent(r),e(s).post("./contactForm.php",n,{headers:{"Content-Type":"application/json"}}).then((e=>{const{data:t}=e;v(t),u.dispatchEvent(i)})).catch((e=>console.log(e)))}));const v=e=>{const t=document.getElementById("alertMessage"),n=document.createElement("p");e.err?n.textContent="Message was not sent":n.textContent="Message Sent Succesfully",t.appendChild(n),e.err?t.classList.add("alert-danger"):t.classList.add("alert-success"),t.classList.remove("d-none"),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value="",setTimeout((()=>{t.classList.add("d-none"),t.classList.remove("alert-success")}),2e3)},y=e=>{const t=[];return Object.entries(e).forEach((e=>{const[n,o]=e;o||t.push(n.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))+" field cannot be left empty")})),t.length>0?{err:t}:{...e}};
//# sourceMappingURL=index.62031924.js.map