/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
function checkAge() {
  const myAge = 32;
  let message = '';

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
  return message;
}
console.log(checkAge());

/*
1. message deve essere let e non const
2. aggiungo un return di message
3. metto un console.log quando invoco la funzione
*/

// ESERCIZIO 2
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
//lenght --> length

// ESERCIZIO 3
function addNumbers() {
  const userNumber = Number(prompt('Inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();
//conversione dell'input utente in un numero

// ESERCIZIO 4
function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
    grantAccess = true;
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();
//i booleani non devono essere stringhe

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccessImproved();
/*
manca la chiusura della funzione
i booleani sono stringhe
spostare l'ultima condizione if fuori dal ciclo for
*/
