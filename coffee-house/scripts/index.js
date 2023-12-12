// import menu from '../scripts/menu.js';

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

const menu = [
  {
    image: 'coffee-1.png',
    name: 'Irish coffee',
    description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: '7.00',
    type: 'coffee',
  },
  {
    image: 'coffee-2.png',
    name: 'Kahlua coffee',
    description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: '7.00',
    type: 'coffee',
  },
  {
    image: 'coffee-3.png',
    name: 'Honey raf',
    description: 'Espresso with frothed milk, cream and aromatic honey',
    price:  '5.50',
    type: 'coffee',
  },
  {
    image: 'coffee-4.png',
    name: 'Ice cappuccino',
    description: 'Cappuccino with soft thick foam in summer version with ice',
    price: '5.00',
    type: 'coffee',
  },
  {
    image: 'coffee-5.png',
    name: 'Espresso',
    description: 'Classic black coffee',
    price: '4.50',
    type: 'coffee',
  },
  {
    image: 'coffee-6.png',
    name: 'Latte',
    description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: '5.50',
    type: 'coffee',
  },
  {
    image: 'coffee-7.png',
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: '5.50',
    type: 'coffee',
  },
  {
    image: 'coffee-8.png',
    name: 'Coffee with cognac',
    description: 'Fragrant black coffee with cognac and whipped cream',
    price: '6.50',
    type: 'coffee',
  },
  {
    image: 'tea-1.png',
    name: 'Moroccan',
    description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: '4.50',
    type: 'tea',
  },
  {
    image: 'tea-2.png',
    name: 'Ginger',
    description: 'Original black tea with fresh ginger, lemon and honey',
    price: '5.00',
    type: 'tea',
  },
  {
    image: 'tea-3.png',
    name: 'Cranberry',
    description: 'Invigorating black tea with cranberry and honey',
    price: '5.00',
    type: 'tea',
  },
  {
    image: 'tea-4.png',
    name: 'Sea buckthorn',
    description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: '5.50',
    type: 'tea',
  },
  {
    image: 'dessert-1.png',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: '3.50',
    type: 'dessert',
  },
  {
    image: 'dessert-2.png',
    name: 'Red velvet',
    description: 'Layer cake with cream cheese frosting',
    price: '4.00',
    type: 'dessert',
  },
  {
    image: 'dessert-3.png',
    name: 'Cheesecakes',
    description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: '4.50',
    type: 'dessert',
  },
  {
    image: 'dessert-4.png',
    name: 'Creme brulee',
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    price: '4.00',
    type: 'dessert',
  },
  {
    image: 'dessert-5.png',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: '4.50',
    type: 'dessert',
  },
  {
    image: 'dessert-6.png',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: '4.50',
    type: 'dessert',
  },
  {
    image: 'dessert-7.png',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: '5.50',
    type: 'dessert',
  },
  {
    image: 'dessert-8.png',
    name: 'Black forest',
    description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: '6.50',
    type: 'dessert',
  },
];

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

