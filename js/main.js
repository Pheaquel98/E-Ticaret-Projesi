import Header from "./header.js"
import Products from "./products.js"
import search from "./search.js"

//! Products Local Storage Start

async function getData() {
   const photos = await fetch("../js/data.json")
   const data = await photos.json()

   data ? localStorage.setItem("products", JSON.stringify(data)) : []
   Products(data)
   search(data)
}

getData()

//! Products Local Storage End

//! Cart Local Storage Start

const cartItems = document.querySelector(".header-cart-count")

cartItems.innerHTML = localStorage.getItem("cart")
   ? JSON.parse(localStorage.getItem("cart")).length
   : "0"

//! Cart Local Storage End

//! Modal Dialog Start
const modalDialog = document.querySelector(".modal-dialog")
const modalContent = document.querySelector(".modal-dialog .modal-content")
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close")

btnCloseDialog.addEventListener("click", () => {
   modalDialog.classList.remove("show")
})

document.addEventListener("click", (e) => {
   if (
      !e.composedPath().includes(modalContent) &&
      !e.composedPath().includes(btnCloseDialog)
   ) {
      modalDialog.classList.remove("show")
   }
})

setTimeout(() => {
   modalDialog.classList.add("show")
}, 3000)
//! Modal Dialog End
