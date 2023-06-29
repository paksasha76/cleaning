let popup = document.querySelector(".popup");
let price = document.querySelector(".price");
let priceItem = Array.from(price.querySelectorAll(".item"));
let body = document.querySelector(".page");
let formBtn = popup.querySelector(".popup__save-button");

priceItem.forEach((item) => {
  item.addEventListener("click", visible);
});

function visible() {
  popup.style.visibility = "visible";
}

function hidden(event) {
  event.preventDefault();
  popup.style.visibility = "hidden";
}

formBtn.addEventListener("click", hidden);
