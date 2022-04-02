import axios from "axios";

document.getElementById("content").style.opacity = 0;
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
  } else if (state == "complete") {
    setTimeout(function () {
      //document.getElementById('interactive');

      document.getElementById("content").classList.add("fadein");
      document
        .getElementById("loader-wrapper")
        .classList.add("fadeout", "hide");
      document.getElementById("content").style.opacity = 1;
    }, 1000);
  }
};

var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});

window.onscroll = function () {
  var scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition < 30) {
    var navlink = document.querySelectorAll("#menu-items>.nav-link");

    for (var k = 0; k < navlink.length; k++) {
      navlink[k].classList.remove("active");
    }
  }

  for (i in sections) {
    if (sections[i] <= scrollPosition + 100) {
      if (document.querySelector(".nav-link.active")) {
        document.querySelector(".nav-link.active").classList.remove("active");
      }
      document.querySelector("a[href*=" + i + "]").classList.add("active");
    }
  }
};
window.addEventListener("scroll", function (e) {
  var scrollpos = window.scrollY;
  if (scrollpos > 1) {
    document.getElementById("enterprise-nav").classList.add("bg-light");
  } else {
    document.getElementById("enterprise-nav").classList.remove("bg-light");
  }
});

AOS.init();

document.addEventListener("aos:in:color", ({ detail }) => {
  detail.classList.add("change-color");
  console.log(detail);
});

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
const content = document.getElementById("content");
content.addEventListener(
  "loading-screen",
  () => {
    loadWrapper.classList.remove("fadeout");
    loadWrapper.classList.remove("hide");
  },
  false
);

content.addEventListener(
  "end-load",
  () => loadWrapper.classList.add("hide", "fadeout"),
  false
);
const contactForm = document.getElementById("contact-form");
let name, email, message;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  const obj = validateInput({ name, email, message });
  if (!obj.err) {
    content.dispatchEvent(loadEvent);
    axios
      .post("./contactForm.php", obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((res) => {
        const { data } = res;

        showMessage(data);
        content.dispatchEvent(endLoadEvent);
      })
      .catch((e) => console.log(e));
  } else {
    const errHtml = document.getElementById("alertMessage");
    obj.err.map((v) => {
      const p = document.createElement("p");
      p.textContent = v;

      errHtml.appendChild(p);
    });
    errHtml.classList.add("alert-danger");
    errHtml.classList.remove("d-none");
  }
});

const showMessage = (data) => {
  const messageArea = document.getElementById("alertMessage");
  const p = document.createElement("p");
  !data.err
    ? (p.textContent = "Message Sent Succesfully")
    : (p.textContent = "Message was not sent");
  messageArea.appendChild(p);
  !data.err
    ? messageArea.classList.add("alert-success")
    : messageArea.classList.add("alert-danger");
  messageArea.classList.remove("d-none");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  setTimeout(() => {
    messageArea.classList.add("d-none");
    messageArea.classList.remove("alert-success");
  }, 2000);
};

const validateInput = (obj) => {
  const err = [];
  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;
    if (!value) {
      err.push(toTitleCase(key) + " field cannot be left empty");
    }
    return;
  });

  if (err.length > 0) {
    return { err };
  }
  return { ...obj };
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
