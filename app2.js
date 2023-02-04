
document.querySelector('.btn5').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide5').style.display = 'block'
});
document.querySelector('.btn6').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide6').style.display = 'block'
});
document.querySelector('.btn7').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide7').style.display = 'block'
});
document.querySelector('.btn8').addEventListener('click', () => {
    hideContent()
    document.getElementById('showHide8').style.display = 'block'
});

let person = {
    name: 'Burce',
    lastName: 'Wayne',
    age: 109,
    country: {
        countryName: 'DC Comics',
        city: 'Gotham City',
        home: {
            stret: 'Batcave,',
            number: '4526'
        }
    }
}

person.country.zipcode = 72560;

let pName = document.getElementById('pName'); pName.innerHTML = `${ person.name } ${ person.lastName}, Edad=${ person.age } `;
let pCountry = document.getElementById('pCountry'); pCountry.innerHTML = `Pais=${ person.country.countryName }, Estado=${ person.country.city }, CP=${ person.country.zipcode }`;

console.log('Notación de punto', person.name )
console.log('Notación de punto', person.country )
console.log('Notación de punto', person.country.home )

let home = person.country.home;
home.nopiso = '1er piso';

let pAdress = document.getElementById('pAdress'); pAdress.innerHTML = `Dirección: Calle=${ person.country.home.stret } Numero=${ person.country.home.number } Piso=${ person.country.home.nopiso }`;

let countryData = person.country
console.log(countryData)
let homeData = person.country.home
console.log(homeData)

console.log('Notación de corchete', person['name'] );

let cName = document.getElementById('cName'); cName.innerHTML = `${ person['name']} ${ person['lastName']}, Edad=${ person['age']}`;
let cCountry = document.getElementById('cCountry'); cCountry.innerHTML = `Pais=${ countryData['countryName']}, Estado=${ countryData['city']}, CP=${ countryData['zipcode']} `;
let cAdress = document.getElementById('cAdress'); cAdress.innerHTML = `Dirección: Calle=${ homeData['stret']} Numero=${ homeData['number']} Piso=${ homeData['nopiso']} `;

