const typdText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Mathematics,", "Physics,", "Chemistry,", "Biology,", "Programming."];
const typeSpeed = 100;
const eraseSpeed = 60;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typdText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeSpeed);
  } else {
    if (cursor.classList.contains("typing")) {
      cursor.classList.remove("typing");
    }
    setTimeout(erase, newTextDelay);
  }
};

erase = () => {
  if (!cursor.classList.contains("typing")) {
    cursor.classList.add("typing");
  }
  if (charIndex > 0) {
    typdText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, eraseSpeed);
  } else {
    if (cursor.classList.contains("typing")) {
      cursor.classList.remove("typing");
    }
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, newTextDelay);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newTextDelay);
});
window.addEventListener("scroll", () => {
  let scroll = scrollY;
  // console.log(scroll);
  const bgimg = document.getElementById("home");
  bgimg.style.backgroundPositionY = scroll * 0.5 + "px";
  const aboutimg = document.querySelector(".about-img");
  const aboutcontent = document.querySelector(".about-content");
  const carousel = document.querySelector(".carousel");
  const header = document.querySelector("header");
  const navLink = document.querySelector(".navbar-link");
  $(document).ready(function () {
    if (scroll > 400 && scroll < 1081) {
      aboutimg.style.opacity = 1;
      $(".about-img").addClass("animate__animated animate__fadeInLeft");
      aboutcontent.style.opacity = 1;
      $(".about-content").addClass("animate__animated animate__fadeInRight");
    }
    if (scroll >= 515 && scroll < 1344) {
      carousel.style.opacity = 1;
      $(".carousel").addClass("animate__animated animate__fadeInRight");
    }
  });
  if (scroll < 119) {
    header.setAttribute("style", "background: transparent; box-shadow: none;");
  }
  if (scroll >= 119) {
    header.setAttribute(
      "style",
      "background: #333; box-shadow: 0 0 20px 10px rgba(0,0,0,0.2);"
    );
  }
});

validate = () => {
  let username = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let nameError = document.getElementById("name-valid");
  let emailError = document.getElementById("email-valid");
  let messageError = document.getElementById("message-valid");

  if (username == "") {
    nameError.innerHTML = " **Please fill out this field ! ";
    return false;
  } else if (email == "") {
    emailError.innerHTML = " **Please fill out field ! ";
  } else if (email.length <= 3) {
    emailError.innerHTML = " **Invalid Email ! ";
  }
};

const bar = document.querySelector('.sidenav-trigger');
const mobNav = document.querySelector('.wrapper');
const cross = document.querySelector('.fa-times');
const dropdownTrigger = document.querySelector('.other-list');
const dropdownList = document.querySelector('.dropdown-list');
bar.addEventListener('click', () => {
  mobNav.style.width = "60%";
  cross.setAttribute('style',"opacity: 0.6; pointer-events: all;")
});
cross.addEventListener('click', () => {
  mobNav.style.width = 0;
  cross.setAttribute('style',"opacity: 0; pointer-events: none;")
});
dropdownTrigger.addEventListener('click', () => {
  dropdownList.style.height = "auto";
});

youtube = () => {
  window.location('https://www.youtube.com/channel/UCTZYiFICEupA-iQAt9zDbCw');
}
