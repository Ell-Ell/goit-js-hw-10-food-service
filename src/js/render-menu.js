import menuData from '..menu.json';
import menuItem from '../templates/menu-list-item.hbs';

const menuListEl = document.querySelector('.js-menu');

const murkup = menuItem(menuData);
menuListEl.insertAdjacentHTML('beforeend', markup);
