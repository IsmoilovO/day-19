let main__btn = document.querySelector(".main__btn");
let body = document.querySelector("body");

main__btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});