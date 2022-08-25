import './css/styles.css';
var debounce = require('lodash.debounce');
import findCountry from "./fetchCountries"

const DEBOUNCE_DELAY = 300;
let countryNameForSeach = document.querySelector('#search-box');
let infoPerem = 'Country name should contain only english letters';

countryNameForSeach.autofocus = true;
countryNameForSeach.pattern = "[A-Za-z]";
countryNameForSeach.title = infoPerem;
countryNameForSeach.placeholder = "Enter country name";
document.querySelector('label').insertAdjacentHTML('afterbegin',`<p><b>${infoPerem}</b></p>`);

countryNameForSeach.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY))

document.querySelector('.country-list').addEventListener('click', yourChoiceCountry);

function yourChoiceCountry (event) {
    countryNameForSeach.value = event.target.dataset.value;
    findCountry(event);
}