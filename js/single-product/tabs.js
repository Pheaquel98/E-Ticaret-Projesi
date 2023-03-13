function tabs() {
   const btnTab = Array.from(document.querySelectorAll(".tab-button"))
   const content = Array.from(document.querySelectorAll(".content"))
   const tabList = document.querySelector(".tab-list")

   tabList.addEventListener("click", (e) => {
      e.preventDefault()
      const id = e.target.dataset.id
      if (id) {
         btnTab.map((button) => button.classList.remove("active"))
         e.target.classList.add("active")
         content.map((content) => content.classList.remove("active"))
         const element = document.getElementById(id)
         element.classList.add("active")
      }
   })
}

export default tabs()
