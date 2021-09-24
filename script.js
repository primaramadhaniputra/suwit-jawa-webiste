const navContainer = document.querySelector(".nav-container");
window.addEventListener("load", function () {
  navContainer.style.transform = "translateY(0)";
});
let navHeight = navContainer.getBoundingClientRect().height;
// js for fixed nav
window.addEventListener("scroll", function () {
  if (this.scrollY > navHeight * 2) {
    navContainer.style.position = "fixed";
    navContainer.style.animation = "muncul 1s";
  } else {
    navContainer.style.position = "initial";
    navContainer.style.animation = "";
  }
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

  //   then js for the links
  if (linksContainerHeight == 0 && !this.classList.contains("active")) {
    this.classList.add("active");
    linksContainer.style.height = `${linksHeight}px`;
    linksContainerHeight = linksHeight;
  } else if (linksContainerHeight > 0) {
    this.classList.remove("active");
    linksContainer.style.height = `0px`;
    linksContainerHeight = 0;
  }

  // cek for navbar if bigger than 700px
  window.addEventListener("resize", function () {
    if (this.innerWidth > 700) {
      linksContainerHeight = 0;
      linksContainer.style.height = `0px`;
      linksContainerHeight = 0;
      toggleBtn.classList.remove("active");
    }
  });
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
