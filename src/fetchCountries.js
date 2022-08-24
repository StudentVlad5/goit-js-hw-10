export default function findCountry (event) {
event.preventDefault();
const name = event.target.value.trim();
countriesObject = fetch(`https://restcountries.com/v3.1/name/${name}`).then(r=>r.json()).then(console.log).catch(error => console.log(error));

}