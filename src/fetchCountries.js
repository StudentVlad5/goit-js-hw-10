import Notiflix from 'notiflix';
export default function findCountry (event) {
event.preventDefault();
let countryList = document.querySelector('.country-list');
let countryContainer = document.querySelector('.country-info');
let countryNameForSeach = document.querySelector('#search-box');

countryList.innerHTML ='';
countryContainer.innerHTML = '';

let name = countryNameForSeach.value.trim();

let output = '';
let countryData = '';
let count = 0;

countriesObject = fetch(`https://restcountries.com/v3.1/name/${name}`)
.then(r=>r.json())
.then(data => {
  console.log(data);

      data.flatMap(country => {
      output += `<li class="form-item" data-value="${country.name.common}">
      <img src="${country.flags.svg}" alt="country flag of ${country.name.common}" data-value="${country.name.common}" width="30" />
      ${country.name.common}, ${country.capital}</li>`;
     
    
      countryData = `
      <p>Capital: ${country.capital}</p>
      <p>Population: ${country.population}</p>
      <p>Languages: ${country.languages[Object.keys(country.languages)[0]]} </p>'
      `
      count +=1;

     });
  })
.catch(error => Notiflix.Notify.warning('Can\'t find somethig'))
.finally(()=>{
if (count === 1) {
    countryContainer.insertAdjacentHTML('afterbegin', `${countryData}`);
    countryList.insertAdjacentHTML('afterbegin', `${output}`)
} 

if(count <= 5 && count > 1) {
  countryList.insertAdjacentHTML('afterbegin', `${output}`);;
  Notiflix.Notify.info('Choose our counry from list')
}
if(count > 5) {Notiflix.Notify.success('Too much contries. Please, make more input')}
}
);}

