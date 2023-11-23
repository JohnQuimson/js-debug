/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// i deve essere < di 5 e non >

// ESERCIZIO 2
function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}
// la condizione è un confronto e quindi deve essere: num % 2 === 0

// ESERCIZIO 3
function loopToFive() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}
loopToFive();

// Sostituire le ',' con ';', invoco poi la funzione

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

/* 
1. rimuovo ';' alla fine dell incrementazione della i alla fine del ciclo for, 
2. il confronto deve essere con ===
3. la condizione if deve essere con numbers[i]
4. bisogna togliere il ';'
5. deve essere pushato numbers[i]
6. il return deve andare fuori dal for
7. Per vedere in console devo mettere console.log
8. gli array non devono essere necessariamente essere let
 */
