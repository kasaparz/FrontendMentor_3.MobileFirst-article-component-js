let social = document.querySelector(".active");
let visible = document.querySelector(".visible");
let btn = document.querySelector(".share");
btn.addEventListener("click", function () {
  social.classList.toggle("visible");
});
