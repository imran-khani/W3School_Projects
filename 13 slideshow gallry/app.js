let slideIndex = 1;

const plusSlide = (n) => showSlides((slideIndex += n));
const currentSlide = (n) => showSlides((slideIndex = n));

const showSlides = (n) => {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".demo");
  let caption = document.querySelector('#caption-text')

  n > slides.length ? (slideIndex = 1) : null;
  n < 1 ? (slideIndex = slides.length) : null;

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    caption.innerHTML = dots[slideIndex - 1].alt
};

showSlides(slideIndex);
