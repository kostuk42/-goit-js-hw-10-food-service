// rendering menu tamplates to HTML
import templateMenu from './templates/templateMenu.hbs';
import actualMenu from './menu.json';
const placeToInsert = document.querySelector('.js-menu');
actualMenu.forEach(elemMenu => {
    const markup = templateMenu(elemMenu);
    placeToInsert.insertAdjacentHTML('beforeend', markup);
});
// switching dark/light themes
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcherElem = document.querySelector('.theme-switch__toggle');
const currentTheme = localStorage.getItem('currentTheme');
const bodyClassElem = document.body.classList;
const onChange = function (e) {
    bodyClassElem.toggle(Theme.DARK);
    bodyClassElem.toggle(Theme.LIGHT);
    localStorage.setItem('currentTheme', bodyClassElem[0]);
}
if (currentTheme === null) {
    localStorage.setItem('currentTheme', Theme.LIGHT);
    bodyClassElem.add(Theme.LIGHT);
} else { bodyClassElem.add(currentTheme) }
if (currentTheme === Theme.DARK) {
    switcherElem.checked = true
}
switcherElem.addEventListener('change', onChange);



