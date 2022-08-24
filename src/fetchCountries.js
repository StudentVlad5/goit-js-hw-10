import countryList from './index'
export default function findCountry (event) {
event.preventDefault();
let countryList = document.querySelector('.country-list');
const name = event.target.value.trim();
countriesObject = fetch(`https://restcountries.com/v3.1/name/${name}`)
.then(r=>r.json())
.then(data => {
    let output = '';
    data.forEach(country => {
      output += `<li class="form-item" data-value="${country.name.common}">${country.name.common}</li>`;
      console.log(countryList);
      countryList.insertAdjacentHTML('afterend', `${output}`);
    });
  })
.catch(error => console.log(error));
return countriesObject
}
