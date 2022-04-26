const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 6000;

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
