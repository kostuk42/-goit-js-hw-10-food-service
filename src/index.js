import templateMenu from './templates/templateMenu.hbs';
console.log(templateMenu);
import actualMenu from './menu.json';
console.log(actualMenu);
const placeToInsert = document.querySelector('.js-menu');
actualMenu.forEach(elemMenu => {
    const markup = templateMenu(elemMenu);
    placeToInsert.insertAdjacentHTML('beforeend', markup);
});


