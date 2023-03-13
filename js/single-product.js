import thumbsActive from "./single-product/thumbs-active.js"
import { singleThumbs } from "../js/glide.js"
import zoom from "./single-product/zoom.js"
import color from "./single-product/color.js"
import values from "./single-product/values.js"
import tabs from "./single-product/tabs.js"
import comments from "./single-product/comments.js"
thumbsActive()

const productId = localStorage.getItem("productId")
   ? JSON.parse(localStorage.getItem("productId"))
   : localStorage.setItem("productId", JSON.stringify(1))

const products = localStorage.getItem("products")
   ? JSON.parse(localStorage.getItem("products"))
   : localStorage.setItem("products", JSON.stringify([]))

const findProduct = products.find((item) => item.id === Number(productId))

//! Product Title

const productTitle = document.querySelector(".product-title")

productTitle.innerHTML = findProduct.name

//! Product Price

const newPrice = document.querySelector(".new-price")
const oldPrice = document.querySelector(".old-price")

newPrice.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`
oldPrice.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`

//! Product Gallery

const singleImage = document.querySelector("#single-image")
const galleryThumbs = document.querySelector(".gallery-thumbs")

singleImage.src = findProduct.img.singleImage

let result = ""

findProduct.img.thumbs.map((item) => {
   result += `
   <li class="glide__slide">
   <img
      src=${item}
      alt=""
      class="img-fluid"
   />
</li>
`
})

galleryThumbs.innerHTML = result
singleThumbs()
thumbsActive()

const productThumbs = Array.from(
   document.querySelectorAll(".product-thumb .glide__slide img")
)

productThumbs[0].classList.add("active")

//! Add to Cart

let cart = localStorage.getItem("cart")
   ? JSON.parse(localStorage.getItem("cart"))
   : []

const btnAddToCart = document.getElementById("add-to-cart")
const quantityInput = document.getElementById("quantity")
let cartItems = document.querySelector(".header-cart-count")

const findCart = cart.find((item) => item.id === findProduct.id)

if (findCart) {
   btnAddToCart.setAttribute("disabled", "disabled")
} else {
   btnAddToCart.addEventListener("click", (e) => {
      e.preventDefault()
      cart.push({ ...findProduct, quantity: Number(quantityInput.value) })
      btnAddToCart.setAttribute("disabled", "disabled")
      localStorage.setItem("cart", JSON.stringify(cart))
      cartItems.innerHTML = cart.length
   })
}
