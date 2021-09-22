// js for navbar
// first js for toggle btn effects
const toggleBtn = document.querySelector(".toggle-btn");

// links
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

let linksContainerHeight = linksContainer.getBoundingClientRect().height;
let linksHeight = links.getBoundingClientRect().height;

// add event for toggle btn
toggleBtn.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
  //   then js for the links
  if (linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
    linksContainerHeight = linksHeight;
  } else if (linksContainerHeight > 0) {
    linksContainer.style.height = `0px`;
    linksContainerHeight = 0;
  }
});
