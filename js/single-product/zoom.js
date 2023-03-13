export function zoom() {
   const singleImage = document.querySelector("#single-image")
   const singleImageWrapper = document.querySelector(".single-image-wrapper")

   singleImageWrapper.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft // X Ekseni
      const y = e.clientY - e.target.offsetTop // Y Ekseni

      singleImage.style.transformOrigin = `${x}px ${y}px`
      singleImage.style.transform = "scale(5)"
   })

   singleImageWrapper.addEventListener("mouseleave", (e) => {
      singleImage.style.transformOrigin = `center`
      singleImage.style.transform = "scale(1)"
   })
}

export default zoom()
