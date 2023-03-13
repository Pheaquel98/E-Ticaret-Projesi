function values() {
   const sizeValues = Array.from(document.querySelectorAll(".values-list span"))
   sizeValues.map((value) => {
      value.addEventListener("click", () => {
         sizeValues.map((valueActive) => {
            valueActive.classList.remove("active")
         })
         value.classList.add("active")
      })
   })
}

export default values()
