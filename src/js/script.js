/* eslint-disable linebreak-style */
{
  const initNavSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const navItems = document.querySelectorAll('.nav-items li');
    const overlay = document.querySelector('.overlay-nav');

    burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
      overlay.classList.toggle('overlay-active');
      //Animate Links
      navItems.forEach((item, index) => {
        if (item.style.animation) {
          item.style.animation = '';
        } else {
          item.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 +
            0.1}s`;
        }
      });

      //Burger Animation
      burger.classList.toggle('toggle');
    });
  };

  const navLinks = document.querySelectorAll('.menu .nav-link');
  const pages = document.querySelectorAll('.page');

  const initPages = () => {
    const idFromHash = window.location.hash.replace('#/','');
    

    let pageMatchingHash = pages[0].id;

    for(let page of pages) {
      if(page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    activatePage(pageMatchingHash);
    
    for (const link of navLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#','');
        activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  };

  const activatePage = (pageId) => {
    for(let page of pages) {
      page.classList.toggle('page-active' , page.id == pageId);
    }
    for(let link of navLinks) {
      link.classList.toggle('link-active', link.getAttribute('href') == '#' + pageId );
    }
  };

  const initPopUps = () => {
    const popUpTriggers = document.querySelectorAll('.pop-up-message');
    const popUps = document.querySelectorAll('.pop-up');
    const popUpsButtons = document.querySelectorAll('.pop-btn');
    const overlay = document.querySelector('.overlay');
    
    for(const button of popUpsButtons) {
      button.addEventListener('click', event => {
        event.preventDefault();
        for(const popUp of popUps) {
          popUp.classList.remove('active');
        }
        overlay.classList.remove('active');
      });
    }

    for(const button of popUpTriggers) {
      button.addEventListener('click', event => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#','');
        for(const popUp of popUps) {
          popUp.classList.toggle('active', popUp.id === id);
        }
        overlay.classList.toggle('active');
      });  
    }

    
  };

  const app = () => {
    initPages();
    initNavSlide();
    initPopUps();
  };

  app();
}