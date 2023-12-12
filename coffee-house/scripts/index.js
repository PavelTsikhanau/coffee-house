import {menu} from './menu.js';

const burgerMenu = document.querySelector('.popup-burger-menu');
const burgerMenuOpen = document.querySelector('.header-menu-button');
const burgerMenuClose = document.querySelector('.burger-menu-close');


//open and close burger menu
burgerMenuOpen.addEventListener('click', function() {
  burgerMenu.classList.remove('hidden')
});

burgerMenuClose.addEventListener('click', function() {
  burgerMenu.classList.add('hidden')
});

const generateCards = (type) => {
  const desiredItems = menu.filter((item) => {
    return item.type === type;
  });
  return desiredItems.map((item) => {
    const menuPosition = document.createElement('div');
    menuPosition.classList.add('menu-position');

    const menuPositionImageDiv = document.createElement('div');
    menuPositionImageDiv.classList.add('menu-position-image');
    menuPosition.append(menuPositionImageDiv);
    
    const menuPositionImage = document.createElement('img');
    menuPositionImage.setAttribute('src', `./assets/images/${item.image}`);

    const menuPositionDescription = document.createElement('div');
    menuPositionDescription.classList.add('menu-position-description');
    menuPosition.append(menuPositionDescription);

    const menuPositionTitle = document.createElement('div');
    menuPositionTitle.classList.add('menu-position-title');
    menuPositionTitle.innerText = `${item.name}`;
    menuPositionDescription.append(menuPositionTitle);

    const menuPositionText = document.createElement('div');
    menuPositionText.classList.add('menu-position-text');
    menuPositionText.innerText = `${item.description}`;
    menuPositionDescription.append(menuPositionText);

    const menuPositionPrice = document.createElement('div');
    menuPositionPrice.classList.add('menu-position-price');
    menuPositionPrice.innerText = `$${item.price}`;
    menuPositionDescription.append(menuPositionPrice);

    menuPositionImageDiv.append(menuPositionImage);
    return menuPosition;
  })
}


//repaint menu
const repaintMenu = (type) => {
  const menuPreview = document.querySelector('.menu-preview');
  const cards = generateCards(type);
  menuPreview.replaceChildren(...cards);
}

let dessertsButton = document.querySelector('.btn-desserts');
dessertsButton.addEventListener('click', function() {
  repaintMenu('dessert')
});

let coffeeButton = document.querySelector('.btn-coffee');
coffeeButton.addEventListener('click', function() {
  repaintMenu('coffee')
});

let teaButton = document.querySelector('.btn-tea');
teaButton.addEventListener('click', function() {
  repaintMenu('tea')
});


//DOM content 
document.addEventListener("DOMContentLoaded", () => {
  repaintMenu('coffee');
});



