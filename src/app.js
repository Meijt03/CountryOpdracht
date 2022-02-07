

import axios from 'axios';
axios.get ('https://restcountries.com/v2/all?fields=name,region,flags,population');


async function fetchCountryFacts () {
       try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag,population');
        console.log(result.data);

           result.data.sort((a, b) => {
               return a.population - b.population;
           })

        getTotalCountries(result.data)


        } catch (e){
         console.error(e);
    }
}

fetchCountryFacts();

function getTotalCountries(country) {
    const countryUnorderedList = document.getElementById('country-facts');

    country.map((totalCountries) => {
    const countryList = document.createElement('li');

            countryList.innerHTML = `
             <img src="${totalCountries.flag}" class="flag"/>
             <h3 class="${countryRegion(totalCountries.region)}">${totalCountries.name}</h3>
             <p> Has a population of ${totalCountries.population} people </p>
     `
            countryUnorderedList.appendChild(countryList);
        })
}

function countryRegion (country) {
    if (country === 'Africa') {
        return 'Blue'
    } else if (country === 'Americas') {
        return 'Green'
    } else if (country === 'Asia') {
        return 'Red'
    } else if (country === 'Europe') {
        return 'Yellow'
    } else if (country === 'Oceania') {
        return 'Purple'
    }
}




