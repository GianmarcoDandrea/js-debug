const input = document.querySelector('input');
const array = []; // rimosso il null e aggiunto []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.length == '') return; // rimosso value

    array.push(input.value); // rimosso add e aggiunto push

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value; // rimosso text e aggiunto innerHTML
    document.querySelector('ul').append(li); //rimosso push e aggiunto append

    let counter = 0; // rimosso '' e aggiunto 0
    let item    = array[0];
    let max   = 1; //cambiare let in const
    const elems = [];

    for (let i = 0; i < array.length; i++) { //aggiunto lenght dopo array
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { // rimosso i e aggiunto j
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){ // aggiunto parentesi graffe
                max  = counter;
                item = array[i];
            }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert'); //rimosso getElementsByClassName e aggiunto querySelector

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); //rimosso ' e aggiunto `
});