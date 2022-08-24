import './css/styles.css';
var debounce = require('lodash.debounce');
import findCountry from "./fetchCountries"
const DEBOUNCE_DELAY = 1000; //замінити на 300 по умовам задачі


let countriesObject = {};
let countryNameForSeach = document.querySelector('#search-box');
let countryContainer = document.querySelector('.country-info');

countryNameForSeach.autofocus = true;
countryNameForSeach.pattern = "[A-Za-z]";
countryNameForSeach.title = "Country name should only contain english letters";
countryNameForSeach.placeholder = "Enter country name";


countryNameForSeach.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY))

document.addEventListener('input', seachCountry)

function seachCountry (event) {
    event.preventDefault();
    if (countriesObject) {console.log('є обєкт')}
    else {'нема обєкту'}
}