'use strict'

let burger = document.querySelector('.burger');
let menu = document.querySelector('.site-navigation');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__open');
    menu.classList.toggle('site-navigation_hidden');
});