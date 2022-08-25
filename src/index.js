import './css/styles.css';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
import findCountry from "./fetchCountries"
const DEBOUNCE_DELAY = 1000; //замінити на 300 по умовам задачі


let countryNameForSeach = document.querySelector('#search-box');
let perem = '';


countryNameForSeach.autofocus = true;
countryNameForSeach.pattern = "[A-Za-z]";
countryNameForSeach.title = "Country name should only contain english letters";
countryNameForSeach.placeholder = "Enter country name";


countryNameForSeach.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY))

document.querySelector('.country-list').addEventListener('click', yourChoiceCountry);

function yourChoiceCountry (event) {

    countryNameForSeach.value = event.target.dataset.value;
    findCountry(event);
}