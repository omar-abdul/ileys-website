const loadEvent = new Event("loading-screen", {
  cancelable: true,
  bubbles: true,
  composed: true,
});
const endLoadEvent = new Event("end-load", {
  cancelable: true,
  bubbles: true,
  composed: true,
});

const loadWrapper = document.getElementById("loader-wrapper");
window.addEventListener(
  "loading-screen",
  () => {
    loadWrapper.classList.remove("fadeout");
    loadWrapper.classList.remove("hide");
  },
  false
);

window.addEventListener(
  "end-load",
  () => loadWrapper.classList.add("hide", "fadeout"),
  false
);
