import axios from "axios";
document.getElementById("content").style.opacity = 0;
document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("content").classList.add("fadein");
      document
        .getElementById("loader-wrapper")
        .classList.add("fadeout", "hide");
      document.getElementById("content").style.opacity = 1;
    }, 1000);
  }
};

window.addEventListener("scroll", function (e) {
  var scrollpos = window.scrollY;
  if (scrollpos > 1) {
    document.getElementById("detergent-nav").classList.add("bg-light-blue");
  } else {
    document.getElementById("detergent-nav").classList.remove("bg-light-blue");
  }
});

AOS.init();

// Change Active element on scroll

var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;
Array.prototype.forEach.call(section, function (e) {
  sections[e.id] = e.offsetTop;
});

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;

let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  // current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"), 200);
};
const prevSlide = () => {
  const current = document.querySelector(".current");
  // current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"), 200);
};

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

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

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
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
