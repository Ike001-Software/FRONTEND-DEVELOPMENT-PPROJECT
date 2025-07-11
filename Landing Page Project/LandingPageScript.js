// Header Background Change
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header-id");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
});

// Slideshow Effect on Home Image
// const slides = document.querySelector(".home-slides");
// const slide = document.querySelectorAll(".home-slide");
// let index = 0;
// const totalSlides = slide.length;
// const slideWidth = 100;
// let interval;

// function goToSlide(i) {
//   slide.style.transform = "translateX(-${i * slideWidth}%)";
// }

// function startSlide() {
//   interval = setInterval(() => {
//     index++;
//     goToSlide(index);

//     // Reset to first slide when it reaches the cloned one
//     if (index === totalSlides - 1) {
//       setTimeout(() => {
//         slides.style.transition = 'none'; // disable transition temporarily
//         index = 0;
//         goToSlide(index);
//         // Force reflow to reset transition
//         void slides.offsetWidth;
//         slides.style.transition = 'transform 0.5s ease-in-out';
//       }, 500); // wait for slide transition to finish
//     }
//   }, 2000); // change every 2 seconds
// }

// function stopSlide() {
//   clearInterval(interval);
// }

// // Manual Slide on Click
// slides.addEventListener('click', () => {
//   stopSlide(); // optional: stop auto when clicked
//   index++;
//   if (index >= totalSlides - 1) index = 0;
//   goToSlide(index);
// });

// startSlide();