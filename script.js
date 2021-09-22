// js for navbar

const navContainer = document.querySelector(".nav-container");
window.addEventListener("load", function () {
  navContainer.style.transform = "translateY(0)";
});
// first js for toggle btn effects
const toggleBtn = document.querySelector(".toggle-btn");

// links
const linksContainer = document.querySelector(".links-container");
const link = document.querySelector(".links");

// add event for toggle btn
toggleBtn.addEventListener("click", function () {
  let linksContainerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = link.getBoundingClientRect().height;
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

// js for active links
const links = link.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((item) => item.classList.remove("active-link"));
    if (!this.classList.contains("active-link")) {
      this.classList.add("active-link");
    }
  });
});
