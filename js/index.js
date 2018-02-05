'use strict';
let scrollpos = window.scrollY;
let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;

function addBkgClacc() {
  header.classList.add('header_fade-in');
}

function removeBkgClacc() {
  header.classList.remove('header_fade-in');
}

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if(scrollpos >= headerHeight + 15) {
    addBkgClacc();
  } else {
    removeBkgClacc();
  }
});

let button = document.querySelector('#menuToggle');
let menu = document.querySelector('.menu');

function addMenuClacc() {
  menu.classList.add('menu_hidden');
}

function removeMenuClacc() {
  menu.classList.remove('menu_hidden');
}

button.onclick = function(e) {
  e.preventDefault();

  menu.classList.toggle('menu_hidden');
}
