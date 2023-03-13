const commentReviewsFunc = () => {
   const commentStars = Array.from(
      document.querySelectorAll(".comment-form-rating .star")
   )
   commentStars.map((item) => {
      item.addEventListener("click", (e) => {
         e.preventDefault()
         const id = e.target.dataset.id
         if (id) {
            commentStars.map((star) => star.classList.remove("active"))
            item.classList.add("active")
         }
      })
   })
}

const addNewComment = () => {
   let comments = []
   let commentText = document.querySelector("#comment-text")
   let commentName = document.querySelector("#comment-name")
   let commentButton = document.querySelector(".form-submit input")
   let commentList = document.querySelector(".comment-list")
   let text = ""
   let name = ""

   commentText.addEventListener("input", (e) => {
      text = e.target.value
   })

   commentName.addEventListener("input", (e) => {
      name = e.target.value
   })

   commentButton.addEventListener("click", (e) => {
      e.preventDefault()
      comments.push({ text: text, name: name })
      let result = ""
      let date = new Date()
      comments.map((item) => {
         result += `
         <li class="comment-item">
         <div class="comment-avatar">
            <img src="./images/avatars/avatar1.jpg" alt="">
         </div>
         <div class="comment-text">
         <ul class="comment-star">
         <li>
         <a></a>
         </li>
         </ul>
            <div class="comment-meta">
               <strong>${item.name} &nbsp;</strong> -
               <time>&nbsp; ${date.toJSON().slice(0, 10)}</time>
            </div>
            <div class="comment-description">
               <p>
                  ${item.text}
               </p>
            </div>
         </div>
        </li>
      `
      })
      commentList.innerHTML = result
      commentText.value = ""
      commentName.value = ""
   })
}

function comments() {
   commentReviewsFunc()
   addNewComment()
}

export default comments()
