// Header Background Change
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header-id");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
});

// Code to Animate the Slides
const slidesContainer = document.querySelector('.home-slides');
const slides = document.querySelectorAll('.home-slide');
let currentIndex = 0;

// Clone the first slide and add to the end
const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

let totalSlides = document.querySelectorAll('.home-slide').length;

function goToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Start the transition
function startSlide() {
  currentIndex++;
  goToSlide(currentIndex);

  if (currentIndex === totalSlides - 1) {
    // Wait for the transition to finish
    setTimeout(() => {
      // Remove transition temporarily
      slidesContainer.style.transition = 'none';

      // Instantly go back to real first slide
      goToSlide(0);
      currentIndex = 0;

      // Let the browser process the instant jump before restoring transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        });
      });
    }, 500); // Must match transition duration
  }
}

setInterval(startSlide, 3000);