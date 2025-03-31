// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
// Stampa il valore di nome nella console.

const name = "Maurizio";
console.log("name", typeof name, name);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
// un numero, una stringa e un valore booleano.
// Stampa tutti i valori nella console.

const number = 53;
const text = "Ciao come stai";
const bool = true;

console.log("number", typeof number, number);

console.log("text", typeof text, text);

console.log("bool", typeof bool, bool);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente
// in console la stringa con il nome completo
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // NON MODIFICARE QUESTA RIGA
const firstName = "Jane"; // NON MODIFICARE QUESTA RIGA
const lastName = "Smith"; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + " " + lastName;
console.log("fullName", typeof fullName, fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet.length;
console.log(
  "numberOfLettersInAlphabet",
  typeof numberOfLettersInAlphabet,
  numberOfLettersInAlphabet
); // Output: 26
