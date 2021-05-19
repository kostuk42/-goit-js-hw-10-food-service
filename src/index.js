import templateMenu from './templates/templateMenu.hbs';
console.log(templateMenu);
import actualMenu from './menu.json';
console.log(actualMenu);
const placeToInsert = document.querySelector('.js-menu');
actualMenu.forEach(elemMenu => {
    const markup = templateMenu(elemMenu);
    placeToInsert.insertAdjacentHTML('beforeend', markup);
});

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcherElem = document.querySelector('.theme-switch__toggle');
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme === null) {
    localStorage.setItem('currentTheme', Theme.LIGHT);
    document.body.classList.add(Theme.LIGHT);
} else { document.body.classList.add(currentTheme) }
if (currentTheme === Theme.DARK) {
    switcherElem.checked = true
}

const onChange = function (e) {
    document.body.classList.toggle(Theme.DARK);
    document.body.classList.toggle(Theme.LIGHT);
    localStorage.setItem('currentTheme', document.body.classList[0]);

}

switcherElem.addEventListener('change', onChange);



