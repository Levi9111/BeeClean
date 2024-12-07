'use strict';
const navbar = document.querySelector('.navbar');
const responsiveNav = document.querySelector('.responsive-navbar');
const responsiveNavbar = document.querySelector('.responsive-navbar');
const resposniveNavUl = document.querySelector('.responsive-nav-items ul');
const burgerMenu = document.querySelector('.burger-menu');
const navItems = document.querySelector('.responsive-nav-items');

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

// Responsive nav styles

let showNavList = false;

function updateResNavScroll(scrollY) {
  if (scrollY > 300) {
    applyResNavStyles();
  } else {
    resetResNavStyles();
  }
}

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  updateResNavScroll(scrollY);
});

function applyResNavStyles() {
  responsiveNav.style.position = 'fixed';
  responsiveNav.style.background = '#050D04';
}

function resetResNavStyles() {
  responsiveNav.style.position = 'absolute';
  responsiveNav.style.background = 'transparent';
}

function navListController() {
  if (showNavList) {
    navItems.style.top = '60px';
    responsiveNav.style.background = '#050D04';
  } else {
    navItems.style.top = '-300px';
  }
}

navListController();
burgerMenu.addEventListener('click', function () {
  showNavList = !showNavList;
  navListController();
});

// @media only screen and (max-width: 600px) {
// }

// @media only screen and (max-width: 768px) {
// }

// @media only screen and (max-width: 992px) {
// }

// @media only screen and (max-width: 1200px) {
// }
