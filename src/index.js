const slides = document.querySelectorAll(".slider-photo");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;

const showSlide = (i) => {
    slides.forEach((slide, n) => {
        slide.classList.toggle("active", n === i);
    })
};

prevBtn.addEventListener("click", () => {
    if(slideIndex > 0) {
        slideIndex -= 1;
        showSlide(slideIndex);
        console.log(slideIndex);
    } else if(slideIndex < 1) {
        slideIndex = slides.length - 1;
        showSlide(slideIndex);
        console.log(slideIndex);
    }
})

nextBtn.addEventListener("click", () => {
    if(slideIndex < 3) {
        slideIndex += 1;
        showSlide(slideIndex);
        console.log(slideIndex);
    } else if(slideIndex > 2) {
        slideIndex = 0;
        showSlide(slideIndex);
        console.log(slideIndex);
    }
})

showSlide(slideIndex);

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-list").classList.toggle("active");
});