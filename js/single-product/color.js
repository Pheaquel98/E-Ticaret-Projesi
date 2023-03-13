function colors() {
   const colors = Array.from(document.querySelectorAll(".color-wrapper"))
   colors.map((color) => {
      color.addEventListener("click", () => {
         colors.map((colorActive) => {
            colorActive.classList.remove("active")
         })
         color.classList.add("active")
      })
   })
}

export default colors()
