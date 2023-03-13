function productRoute() {
   const resultItem = Array.from(
      document.querySelectorAll(".search-results .result-item")
   )
   resultItem.map((item) => {
      item.addEventListener("click", () => {
         const id = item.dataset.id
         if (id) {
            localStorage.setItem("productId", JSON.stringify(id))
            window.location.href = "single-product.html"
         }
      })
   })
}

function search(data) {
   const searchWrapper = document.querySelector(".search-results .results")
   let result = ""
   data.map((item) => {
      result += `
      <a href="#" class="result-item" data-id=${item.id}>
        <img src=${item.img.singleImage} class="search-thumb" alt="">
        <div class="search-info">
        <h4>${item.name}</h4>
        <span class="search-sku">SKU: PD0016</span>
        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
        </div>
      </a>
      `
   })
   searchWrapper.innerHTML = result
   productRoute()

   const inputSearch = document.querySelector(".search-form input")
   let value = ""
   let filtered = [] //! Boş bir filtre dizisi oluşturduk
   inputSearch.addEventListener("input", (e) => {
      value = e.target.value.trim().toLowerCase()
      filtered = data.filter(
         (
            item //! inputa girdiğimiz değere göre diziyi filtreledik
         ) => item.name.trim().toLowerCase().includes(value)
      )
      let result = ""
      if (filtered.length > 1) {
         filtered.map((item) => {
            searchWrapper.style.gridTemplateColumns = "1fr 1fr"
            //! filtrelediğimiz diziyi htmle tekrar bastık
            result += `
          <a href="#" class="result-item" data-id=${item.id}>
          <img src=${item.img.singleImage} class="search-thumb" alt="">
          <div class="search-info">
          <h4>${item.name}</h4>
          <span class="search-sku">SKU: PD0016</span>
          <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
          </div>
          </a>
          `
         })
         searchWrapper.innerHTML = result
      } else if (filtered.length < 2) {
         if (filtered == 0) {
            searchWrapper.innerHTML = `<a href="#" class="result-item" style="justify-content: center">Aradığınız Ürün Bulunamadı</a>`
         } else {
            searchWrapper.style.gridTemplateColumns = "1fr"
            filtered.map((item) => {
               //! filtrelediğimiz diziyi htmle tekrar bastık
               result += `
              <a href="#" class="result-item" data-id=${item.id}>
              <img src=${item.img.singleImage} class="search-thumb" alt="">
              <div class="search-info">
              <h4>${item.name}</h4>
              <span class="search-sku">SKU: PD0016</span>
              <span class="search-price">$${item.price.newPrice.toFixed(
                 2
              )}</span>
              </div>
              </a>
              `
            })
            searchWrapper.innerHTML = result
         }
      }
      productRoute()
   })
}

export default search
