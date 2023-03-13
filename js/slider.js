//! Slider Start

let slideIndex = 1

setInterval(() => {
   showSlides((slideIndex += 1))
}, 4000)

function plusSlide(n) {
   showSlides((slideIndex += n))
}

function currentSlide(n) {
   showSlides((slideIndex += n))
}

function showSlides(n) {
   const slides = document.querySelectorAll(".slider-item")
   const slideDots = document.querySelectorAll(".slider-dot")
   if (n > slides.length) {
      slideIndex = 1
   }

   if (n < 1) {
      slideIndex = slides.length
   }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
   }

   for (let i = 0; i < slideDots.length; i++) {
      slideDots[i].className = slideDots[i].className.replace(" active", "")
   }

   slides[slideIndex - 1].style.display = "flex"
   slideDots[slideIndex - 1].className += " active"
}

showSlides()

//! Slider End
