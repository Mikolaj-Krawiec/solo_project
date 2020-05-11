/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* global flatpickr */ 

// import flatpickr from 'flatpickr';

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
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = pages[0].id;

    for (let page of pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    activatePage(pageMatchingHash);

    for (const link of navLinks) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#', '');
        activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  };

  const activatePage = (pageId) => {
    for (let page of pages) {
      page.classList.toggle('page-active', page.id == pageId);
    }
    for (let link of navLinks) {
      link.classList.toggle(
        'link-active',
        link.getAttribute('href') == '#' + pageId
      );
    }
  };

  const overlay = document.querySelector('#overlay');
  const popUps = document.querySelectorAll('.pop-up');
  const popUpsOpen = document.querySelectorAll('.js-pop-up-open');
  const popUpsClose = document.querySelectorAll('.js-pop-up-close');

  const initPopUps = () => {
    for (const button of popUpsClose) {
      button.addEventListener('click', closePopUps);
    }

    overlay.addEventListener('click', closePopUps);

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        closePopUps(event);
      }
    });

    for (const button of popUpsOpen) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#', '');
        for (const popUp of popUps) {
          popUp.classList.toggle('active', popUp.id === id);
        }
        overlay.classList.toggle('active');
      });
    }

    const chatSend = document.querySelector('#chat-send');
    const chatInput = document.querySelector('#chat-input');
    const chatBox = document.querySelector('#chat-box');

    chatSend.addEventListener('click', (event) => {
      event.preventDefault();
      if (chatInput.value) {
        const question = document.createElement('div');
        question.classList.add('question');
        question.innerHTML = chatInput.value;

        chatBox.insertAdjacentElement('beforeEnd', question);
        chatInput.value = '';
      }
    });
  };

  const closePopUps = (event) => {
    event.preventDefault();
    for (const popUp of popUps) {
      popUp.classList.remove('active');
    }
    overlay.classList.remove('active');
  };

  const initChart = () => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // eslint-disable-next-line no-undef
    const chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [
          {
            // 4
            label: 'Signups',
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
          },
          {
            label: 'FTD',
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
          },
          {
            label: 'Earned',
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7
            hidden: true,
          },
        ],
      },
    });
  };

  const initDatePicker = () => {
    const datePicker_1 = flatpickr('#date-picker-1');
    const datePicker_2 = flatpickr('#date-picker-2');
  };

  const app = () => {
    initPages();
    initNavSlide();
    initPopUps();
    initChart();
    initDatePicker();
  };

  app();
}
