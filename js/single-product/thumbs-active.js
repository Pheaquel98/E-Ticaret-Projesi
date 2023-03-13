export default function thumbsActive() {
   const thumbs = Array.from(
      document.querySelectorAll(".gallery-thumbs .img-fluid")
   )
   const singleImage = document.querySelector("#single-image")

   thumbs.map((item) => {
      item.addEventListener("click", (e) => {
         thumbs.map((image) => {
            image.classList.remove("active")
         })
         singleImage.src = item.src
         item.classList.add("active")
      })
   })
}
