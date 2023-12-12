const burgerMenu = document.querySelector('.popup-burger-menu');
const burgerMenuOpen = document.querySelector('.header-menu-button');
const burgerMenuClose = document.querySelector('.burger-menu-close');

burgerMenuOpen.addEventListener('click', function() {
  burgerMenu.classList.remove('hidden')
});

burgerMenuClose.addEventListener('click', function() {
  burgerMenu.classList.add('hidden')
});

const menu = [
  {
    image: 'coffee-1.png',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: 3.50,
    type: 'dessert',
  },
  {
    image: 'coffee-2.png',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: 3.50,
    type: 'dessert',
  },
  {
    image: 'coffee-3.png',
    name: 'Red velvet',
    description: ' Layer cake with cream cheese frosting',
    price:  4.00,
    type: 'dessert',
  },
  {
    image: 'coffee-4.png',
    name: 'Cheesecakes',
    description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: 4.50,
    type: 'dessert',
  },
  {
    image: 'coffee-5.png',
    name: 'Creme brulee',
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    price: 4.00,
    type: 'dessert',
  },
  {
    image: 'coffee-6.png',
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: 4.50,
    type: 'dessert',
  },
  {
    image: 'coffee-7.png',
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: 4.50,
    type: 'dessert',
  },
  {
    image: 'coffee-8.png',
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: 5.50,
    type: 'dessert',
  },
  {
    image: 
    name: 'Black forest',
    description: '  A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: 6.50,
    type: 'dessert',
  },
]

const generateCards = (type) => {
  const desiredItems = menu.filter((item) => {
    return item.type === type;
  });
  return desiredItems.map((item) => {
    const menuPosition = document.createElement('div');
    menuPosition.classList.add('menu-position');
    
    const menuPositionImage = document.createElement('img');
    menuPositionImage.classList.add('menu-position');
    menuPositionImage.setAttribute('src', `./assets/images/${item.image}`)
  
    menuPosition.append(menuPositionImage);
    return menuPosition;
  })
}

const repaintMenu = (type) => {
  const menuPreview = document.querySelector('.menu-preview');
  const cards = generateCards(type);
  menuPreview.replaceChildren(...cards);
}


let dessertsButton = document.querySelector('.btn-desserts');
dessertsButton.addEventListener('click', function() {
  repaintMenu('dessert')
});

