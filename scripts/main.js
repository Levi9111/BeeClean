'use strict';
const navbar = document.querySelector('.navbar');
const logo = document.getElementById('nav-logo');

function updateNavOnScroll(scrollY) {
  if (scrollY > 350) applyFixedNavStyles();
  else resetNavStyles();
}

function applyFixedNavStyles() {
  navbar.style.position = 'fixed';
  logo.setAttribute('width', '105px');
  logo.setAttribute('height', '108px');
  navbar.style.background = '#050D04';
}

function resetNavStyles() {
  navbar.style.position = 'absolute';
  logo.setAttribute('width', '229px');
  logo.setAttribute('height', '234px');
  navbar.style.background = 'transparent';
}
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  updateNavOnScroll(scrollY);
});
