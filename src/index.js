import './styles.css';
import menuItems from './template/template.hbs';
import menuJSON from './menu.json';
import Theme from './js/theme.js';

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
  switch: document.querySelector('#theme-switch-control')
}
checkTheme();
refs.menu.insertAdjacentHTML('beforeend', menuItems(menuJSON));
refs.switch.addEventListener('change', changeTheme);

function changeTheme(event) {
 if(event.currentTarget.checked) {
   refs.body.classList.add(Theme.DARK);
   refs.body.classList.remove(Theme.LIGHT);
   localStorage.setItem('theme', Theme.DARK);
 }else{
   refs.body.classList.remove(Theme.DARK);
   refs.body.classList.add(Theme.LIGHT);
   localStorage.setItem('theme', Theme.LIGHT);
 }
}

function checkTheme() {
  if(localStorage.getItem('theme') === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  } else {
  refs.body.classList.add(Theme.LIGHT);
  refs.switch.checked = false;
  }
}