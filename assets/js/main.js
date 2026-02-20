// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// HERO BACKGROUND ROTATION
const heroBg = document.querySelector(".hero-bg");

const heroImages = [
  "assets/img/hero1.jpg",
  "assets/img/hero2.jpg",
  "assets/img/hero3.jpg"
];

let current = 0;

function changeHero(){
  current = (current + 1) % heroImages.length;
  heroBg.style.opacity = 0;

  setTimeout(() => {
    heroBg.style.backgroundImage = `url(${heroImages[current]})`;
    heroBg.style.opacity = 1;
    heroBg.style.transform = "scale(1.05)";
  }, 1000);
}

heroBg.style.backgroundImage = `url(${heroImages[0]})`;

setInterval(changeHero, 6000);

// CONTACT FORM
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", function(e){
  e.preventDefault();
  form.style.display = "none";
  success.style.display = "block";
});

// MOBILE MENU
const toggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
