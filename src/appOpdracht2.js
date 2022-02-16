import axios from 'axios';

async function getCountryFacts (name) {
    const containerResult = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';
    containerResult.innerHTML = '';

    try {

        const result = await axios.get(`https://restcountries.com/v2/name/${name}/`);
        const country = result.data[0];
        console.log(result.data);

        containerResult.innerHTML =
            `
        <img src="${country.flag}" alt="no picture" class="flag" width="100px"/>
        <h3>${country.name}</h3>
        <p>${country.name} is situated in ${country.subregion}. It has a population of ${country.population} people.</p>
        <p>The capital is ${country.capital} ${getCurrencies(country.currencies)}.</p>
        `

    } catch (e){
        console.error(e)
        errorMessage.innerHTML= `
        <p>${name} bestaat niet, controleer de ingevoerde gegevens</p>
        `
    }
}
// GetCountryFacts()

function getCurrencies(currencies) {

    if (currencies.length === 2){
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}'s`
    }
    else {
        return `and you can pay with ${currencies[0].name}`;
    }
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit',searchingCountry);

function searchingCountry(e){
    e.preventDefault()

    const inputField = document.getElementById('input-field');

    getCountryFacts(inputField.value);
    inputField.value = '';
}