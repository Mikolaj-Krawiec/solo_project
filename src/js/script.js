/* eslint-disable linebreak-style */
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-links li');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    overlay.classList.toggle('overlay-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.1}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });
};

const app = () => {
  navSlide();
};

app();
