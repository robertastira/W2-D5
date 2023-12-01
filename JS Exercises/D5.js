/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets[0])
console.log(pets[1])
console.log(pets[2])
console.log(pets[3])

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const pet2 = pets.sort()

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pet2)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primo = pet2.splice(0,1)
console.log(primo)
pet2.push(primo)
console.log(pet2)



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length ; i++){
  const licenseplate = Math.floor(Math.random()*999) + 'A' + 'F'
  console.log(licenseplate)
  cars[i].licenseplate = licenseplate
  console.log(cars[i])
}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let nuovoelemento = []
cars.push(nuovoelemento)
console.log(cars)


for (let i = 0; i < cars.length ; i++){
  
  cars[i].trims.pop() //Genera un errore su Pop che non capisco. Ho provato a stampare trims e lo fa regolarmente.
  console.log(cars)
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length ; i++){
  
 justTrims = cars[i].trims.splice(0,1) 
  console.log(justTrims)
}


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length ; i++){
  if (cars[i].color === 'blue' || cars[i].color === 'black') {
    console.log('Fizz')
  }
  else {
  console.log('Buzz')
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

while (numericArray[i] < 32){
let i = i++
console.log(numericArray[i])
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const numbersArray = []

for (let i = 0; i < charactersArray.length ; i++){
switch( i < charactersArray.length ) {
case 'g':
  //'g' = 7;
  let charactersArray[i] = charactersArray[i].replace('g',7);
  break;
case 'n':
  //'n' = 12;
  let charactersArray[i] = charactersArray[i].replace('n', 12);
  break;
case 'u':
  //'u' = 21;
  let charactersArray[i] = charactersArray[i].replace('u', 12);
  break;
case 'z':
  //'z'= 26
  let charactersArray[i] = charactersArray[i].replace('z', 26);
  break;
  case 'd':
  //'d'= 4
  let charactersArray[i] = charactersArray[i].replace('d', 4);
  break;
} 
}

//Inserire tutte le lettere dell'alfabeto nello switch - Pushare i risultati nel NumbersArray(non sono arrivata col tempo)



  



