const productsContainer = document.getElementById("product-list")

export default function product1() {
   const config = {
      startAt: 0,
      perView: 4,
      gap: 20,
      bound: true,
      breakpoints: {
         992: {
            perView: 3,
         },
         768: {
            perView: 2,
         },
         576: {
            perView: 1,
         },
      },
   }
   productsContainer && new Glide(".product-carousel", config).mount()
}

export function singleThumbs() {
   const configSingleProduct = {
      perView: 5,
      breakpoints: {
         992: {
            perView: 3,
         },
      },
   }

   new Glide(".product-thumb", configSingleProduct).mount()
}
