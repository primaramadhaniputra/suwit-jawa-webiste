const navContainer = document.querySelector(".nav-container");
window.addEventListener("load", function () {
  navContainer.style.transform = "translateY(0)";
});
let navHeight = navContainer.getBoundingClientRect().height;
// js for fixed nav
window.addEventListener("scroll", function () {
  if (this.scrollY > navHeight * 2) {
    navContainer.style.position = "fixed";
    navContainer.style.animation = "muncul .3s";
    navContainer.classList.add("fixed");
  } else {
    navContainer.style.position = "initial";
    navContainer.style.animation = "";
    navContainer.classList.remove("fixed");
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
let navContainerHeight = navContainer.getBoundingClientRect().height;
// js for active links
const links = link.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((item) => item.classList.remove("active-link"));
    if (!this.classList.contains("active-link")) {
      this.classList.add("active-link");
    }

    // js for scroll link
    let linkId = this.getAttribute("href").slice(1);
    let pageScroll = document.querySelector(`#${linkId}`);
    let navHeight = navContainer.getBoundingClientRect().height;
    // remove clas for toggle btn
    if (toggleBtn.classList.contains("active") && navContainer.classList.contains("fixed")) {
      navHeight = navContainerHeight;
      linksContainer.style.height = `0px`;
    } else if (toggleBtn.classList.contains("active") && !navContainer.classList.contains("fixed")) {
      navHeight = navHeight + navContainerHeight;
      linksContainer.style.height = `0px`;
      console.log(navHeight);
    }
    let pageScrollHeight = pageScroll.offsetTop;
    if (!navContainer.classList.contains("fixed") && !toggleBtn.classList.contains("active")) {
      navHeight += navHeight;
    }
    toggleBtn.classList.remove("active");
    window.scrollTo(0, pageScrollHeight - navHeight);
  });
});
// js for back to top
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (this.scrollY > 700) {
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.visibility = "hidden";
  }
  backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
});

// js for suwit jawa
const result = ["jempol", "jaritengah", "kelingking"];

// get computer image and all players image
const computerImage = document.querySelector(".computer-image");
const playerImage = document.querySelectorAll(".player-image");

// make result computer and player result
let computerResult = "";
let playerResult = "";
let play = true;
let count = 0;
let time = 300;
// add event listener to player image
playerImage.forEach((pImg) => {
  pImg.addEventListener("click", function () {
    if (play) {
      play = false;
      // this line for the computer result
      checkResultComputer();
      // this line for the result player
      checkResultPlayer(this);
      // this line function for computer animation
      computerAnimation(computerImage);
    }
  });
});

function checkResultComputer() {
  // this line for the computer result
  let randomComputer = Math.floor(Math.random() * 3);
  computerResult = result[randomComputer];
}

function checkResultPlayer(that) {
  playerResult = that.getAttribute("src").split("/").join(" ");
  playerResult = playerResult.split(".").join(" ");
  playerResult = playerResult.split(" ");
  playerResult = result.find((item) => item == playerResult[3]);
}

function computerAnimation(compImg) {
  const animation = setInterval(() => {
    if (count > 2) count = 0;
    compImg.src = `image/${result[count]}.png`;
    count++;
    time += 300;
    if (time == 3000) {
      compImg.src = `image/${computerResult}.png`;
      time = 300;
      clearInterval(animation);
      setTimeout(() => {
        resultGame();
      }, 300);
    }
  }, time);
}

function resultGame() {
  if (playerResult == computerResult) {
    alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil imbang`);
  } else if (playerResult == "jempol") {
    if (computerResult == "telunjuk") {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda menang`);
    } else {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda kalah`);
    }
  } else if (playerResult == "telunjuk") {
    if (computerResult == "kelingking") {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda menang`);
    } else {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda kalah`);
    }
  } else if (playerResult == "kelingking") {
    if (computerResult == "jempol") {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda menang`);
    } else {
      alert(`anda memilih ${playerResult} dan komputer memilih ${computerResult} maka hasil anda kalah`);
    }
  }
  play = true;
}
