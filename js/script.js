/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let menuBackdrop = document.querySelector("#menu-backdrop");
let navLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  menuBackdrop.classList.toggle("active");
};

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
    menuBackdrop.classList.remove("active");
  };
});

// Fechar menu ao clicar no backdrop
menuBackdrop.onclick = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
  menuBackdrop.classList.remove("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.clientHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Fechar menu ao fazer scroll
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
    menuBackdrop.classList.remove("active");
  }
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-contente, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom", interval: 150 }
);
ScrollReveal().reveal(".home-contente h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contente p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
if (document.querySelector(".multiple-text")) {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Fundador de Plataformas SaaS",
      "Especialista em Automação Web",
      "Engenheiro Full Stack",
      "Expert em Arquiteturas Escaláveis",
    ],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}
