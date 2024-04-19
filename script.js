// Визначення функції, яка буде викликана при прокручуванні сторінки
window.onscroll = function() {
  // Отримання елементу з контентом
  var content = document.getElementById("content");
  
  // Перевірка, чи прокручено сторінку вниз
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Якщо так, то додати клас 'highlighted' до контенту
    content.classList.add("highlighted");
  } else {
    // Інакше видалити клас 'highlighted'
    content.classList.remove("highlighted");
  }
};

// comment

"use strict";

const  userId = {
  name: null,
  identify: null,
  image: null,
  message: null,
  date: null
}

const userComment = document.querySelector(".usercomment");
const publishbtn = document.getElementById("publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", e => {
  if(!userComment.value) {
    publishbtn.setAttribute("disabled", "disabled");
    publishbtn.classList.remove("abled")
  }else {
    publishbtn.removeAttribute("disabled")
    publishbtn.classList.add("abled")
  }
})


function addComment() {
  console.log("click btn post comment");
  if(!userComment.value) return;
  userId.name = userName.value;
  if(userId.name === "Anonymous") {
    userId.identify = false;
    userId.image = "../photos/user.png"
  }
  else{
    userId.identify = true;
    userId.image = "../photos/user.png"
  }

  userId.message = userComment.value;
  userId.date = new Date().toLocaleString();
  let published =
  `<div class="parents">
   <!-- <img src="${userId.image}"> -->
    <div>
     <h1>${userId.name}</h1>
     <p>${userId.message}</p>
     <div class="engagements"><img src="like.png" alt=""><img src="share.png" alt=""></div>
     <span class="date">${userId.date}</span>
    </div>
  </div>`;

  comments.innerHTML += published;
  userComment.value = "";

  let commentsNum = document.querySelector(".parents").length;
  document.getElementById("comment").textContent = commentsNuml
}

publishbtn.addEventListener("click", addComment)

// galary
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


/* COMMENT */

const commentBox = require('commentbox.io');

commentBox('my-project-id');