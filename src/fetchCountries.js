import Notiflix from 'notiflix';

export default function findCountry (event) {
event.preventDefault();

let countryList = document.querySelector('.country-list');
let countryContainer = document.querySelector('.country-info');
let countryNameForSeach = document.querySelector('#search-box');
let name = countryNameForSeach.value.trim();
let arrayLanguages = '';
let output = '';
let countryData = '';
let count = 0;

countryList.innerHTML ='';
countryContainer.innerHTML = '';

countriesObject = fetch(`https://restcountries.com/v3.1/name/${name}`)
.then(r=>r.json())
.then(data => {
  console.log(data);

  data.flatMap(country => {
      output += `<li class="form-item" data-value="${country.name.common}">
      <img src="${country.flags.svg}" alt="country flag of ${country.name.common}" data-value="${country.name.common}" width="30" />
      ${country.name.common}, ${country.capital}</li>`;
     
  Object.keys(country.languages).forEach((key)=>
  arrayLanguages += `${country.languages[key]} `);

  countryData = `
      <p><b>Capital:</b> ${country.capital}</p>
      <p><b>Population:</b> ${country.population}</p>
      <p><b>Languages:</b> ${arrayLanguages} </p>'
      `
  count +=1;

     });
  })
.catch(error => Notiflix.Notify.warning('Oops, there is no country with that name'))
.finally(()=>{
  
if (count === 1) {
    countryContainer.insertAdjacentHTML('afterbegin', `${countryData}`);
    countryList.insertAdjacentHTML('afterbegin', `${output}`)
} 

if(count <= 5 && count > 1) {
  countryList.insertAdjacentHTML('afterbegin', `${output}`);
  Notiflix.Notify.info('Choose our counry from list')
}
if(count > 5) {Notiflix.Notify.success('Too many matches found. Please enter a more specific name.')}
}
);}

