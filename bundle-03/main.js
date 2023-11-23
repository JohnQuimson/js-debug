/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
        Divide in console le varie auto in base al loro type
    2- Sono presenti errori di sintassi?
        Sì ↓
    3- Sono presenti errori logici?
        Sì ↓
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
    manufacturer: 'Ford',
    model: 'Fiesta',
    type: 'diesel',
  },
  {
    manufacturer: 'Audi',
    model: 'A1',
    type: 'benzina',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Golf',
    type: 'Benzina',
  },
  {
    manufacturer: 'Fiat',
    model: 'Panda',
    type: 'metano',
  },
  {
    manufacturer: 'Fiat',
    model: 'Multipla',
    type: 'GPL',
  },
  {
    manufacturer: 'Tesla',
    model: 'Model 3',
    type: 'elettrico',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Polo',
    type: 'benzina',
  },
  {
    manufacturer: 'Ford',
    model: 'Kuga',
    type: 'Diesel',
  },
  {
    manufacturer: 'Seat',
    model: 'Ibiza',
    type: 'metano',
  },
  {
    manufacturer: 'Audi',
    model: 'R8',
    type: 'Benzina',
  },
];

const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === 'benzina'
);

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== 'benzina' &&
    auto.type.toLowerCase() !== 'diesel'
  );
});

console.log('-------------------------------');
console.log('Auto a benzina');
console.log(gasolineCars);

console.log('-------------------------------');
console.log('Auto a diesel');
console.log(dieselCars);

console.log('-------------------------------');
console.log('Tutte le altre auto');
console.log(otherCars);

/*
1. manca la ',' nel penultimo oggetto
2. Nella dichiarazione di gasolineCars, la funzione freccia era scritta male    (>= --> =>)
3. Bisogna rendere minuscoli gli elementi dell array, perchè js è case sensitive
4. aggiungo il return in dieselCars perchè è una funzione freccia non one-line (ci sono le '{ ... }')
5.in otherCars, devono essere diverse sia da benzina che da diesel, quindi && e non ||
6. toLowerCase va messo anche in otherCars
*/
