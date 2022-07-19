const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");

function printContent(event) {
  event.path[1].children[1].classList.toggle("hide");
  event.path[0].classList.toggle("hide");
}

function printTitle(event) {
  event.path[1].children[0].classList.toggle("hide");
  event.path[0].classList.toggle("hide");
}

for (let title of titles) {
  title.addEventListener("mouseover", printContent);
}

for (let content of contents) {
  content.addEventListener("mouseout", printTitle);
}
