const burgerMenu = document.querySelector('.popup-burger-menu');
const burgerMenuOpen = document.querySelector('.header-menu-button');
const burgerMenuClose = document.querySelector('.burger-menu-close');

burgerMenuOpen.addEventListener('click', function() {
  burgerMenu.classList.remove('hidden')
});

burgerMenuClose.addEventListener('click', function() {
  burgerMenu.classList.add('hidden')
});

const dessertsList = [
  {
    image: 'coffee-1.png',
    name: 'Marble cheesecake',
    description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: 3.50
  },
  {
    image: URL('../assets/images/'),
    name: 'Red velvet',
    description: ' Layer cake with cream cheese frosting',
    price:  4.00
  },
  {
    image: URL('../assets/images/'),
    name: 'Cheesecakes',
    description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: 4.50
  },
  {
    image: URL('../assets/images/'),
    name: 'Creme brulee',
    description: 'Delicate creamy dessert in a caramel basket with wild berries',
    price: 4.00
  },
  {
    image: URL('../assets/images/'),
    name: 'Pancakes',
    description: 'Tender pancakes with strawberry jam and fresh strawberries',
    price: 4.50
  },
  {
    image: URL('../assets/images/'),
    name: 'Honey cake',
    description: 'Classic honey cake with delicate custard',
    price: 4.50
  },
  {
    image: URL('../assets/images/'),
    name: 'Chocolate cake',
    description: 'Cake with hot chocolate filling and nuts with dried apricots',
    price: 5.50
  },
  {
    image: URL('../assets/images/'),
    name: 'Black forest',
    description: '  A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: 6.50
  }
]


let dessertsButton = document.querySelector('.btn-desserts');
dessertsButton.addEventListener('click', function() {
  
  const menuPreview = document.querySelector('.menu-preview');
  const menuPosition = document.createElement('div');
  menuPosition.classList.add('menu-position');

  const menuPositionImage = document.querySelector('.menu-position-image');
  menuPositionImage.setAttribute(('src', `./assets/images/${dessertsList[0].image}`))
});

