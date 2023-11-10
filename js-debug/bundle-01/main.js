/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) { // rimosso il maggiore e messo il minore perchè la variabile parte da 0  
    console.log(i);
}


// ESERCIZIO 2

console.log(addIfEven(6));

function addIfEven(num) {
    if (num % 2 === 0) { // aggiunto il simbolo di uguaglianza invece di 
        return num + 5;
    }
;
}



// ESERCIZIO 3

console.log(loopToFive());
function loopToFive() {
    for (let i = 0; i < 6; i++) {// rimosso , e messo ; tolto il 5 messo il 6 per far arrivare il ciclo a 5
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)

displayEvenNumbers()
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

function displayEvenNumbers() {
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; //rimosso let e aggiunto const
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { //rimosso ; finale e tolto - 1 alla condizione centrale

        if ((numbers[i] % 2) === 0); { // aggiunto simbolo ugualianza e [i] dopo il numbers

            evenNumbers.push(numbers[i]); //aggiunto numbers[i]

        }
    }
    return evenNumbers; //rimosso da dentro l'if 
}

