// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// HERO BACKGROUND ROTATION
const heroImages = [
  "assets/img/hero1.jpg",
  "assets/img/hero2.jpg",
  "assets/img/hero3.jpg"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % heroImages.length;
  document.querySelector(".hero").style.backgroundImage =
    `url('${heroImages[current]}')`;
}, 6000);

// FORM SUCCESS
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  this.style.display = "none";
  document.getElementById("formSuccess").style.display = "block";
});
