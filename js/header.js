function sidebarFunc() {
   //! Home Sidebar Start

   //? Variables Start

   const btnOpenSidebar = document.querySelector("#btn-menu")
   const btnCloseSidebar = document.querySelector("#btn-close")
   const sidebar = document.querySelector("#sidebar")

   //? Variables End

   btnOpenSidebar.addEventListener("click", () => {
      sidebar.style.left = "0"
   })

   btnCloseSidebar.addEventListener("click", () => {
      sidebar.style.left = "-100%"
   })

   //* Click Outside Start

   document.addEventListener("click", (e) => {
      if (
         !e.composedPath().includes(sidebar) &&
         !e.composedPath().includes(btnOpenSidebar)
      ) {
         sidebar.style.left = "-100%"
      }
   })

   //* Click Outside End

   //! Home Sidebar End
}

function searchModalFunc() {
   //! Search Modal Start

   //? Variables Start

   const btnOpenSearch = document.querySelector(".search-button")
   const modalSearch = document.querySelector(".modal-search")
   const modalWrapper = document.querySelector(".modal-wrapper")
   const btnCloseSearch = document.querySelector("#btn-modal-close")

   //? Variables End

   btnOpenSearch.addEventListener("click", () => {
      modalSearch.style.visibility = "visible"
      modalSearch.style.opacity = "1"
   })

   btnCloseSearch.addEventListener("click", () => {
      modalSearch.style.visibility = "hidden"
      modalSearch.style.opacity = "0"
   })

   //* Click Outside Start

   document.addEventListener("click", (e) => {
      if (
         !e.composedPath().includes(modalWrapper) &&
         !e.composedPath().includes(btnOpenSearch)
      ) {
         modalSearch.style.visibility = "hidden"
         modalSearch.style.opacity = "0"
      }
   })

   //* Click Outside End

   //! Search Modal End
}

function headerFunc() {
   sidebarFunc()
   searchModalFunc()
}

export default headerFunc()
