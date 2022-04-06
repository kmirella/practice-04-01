const button = document.querySelector('button');

/* function toggle() {
  button.classList.toggle('redColor');
}

button.addEventListener('click', toggle) */ // a toggle callback --> az addeventlistener paramétere --> addig vár, amíg meg nem történik a click esemény 

// akkor callback, ha nincs zárójel mögötte (ha  van zárójel, egyből lefut)


/* ---> helyette lehet: 

button.addEventListener('click', function () {
    button.classList.toggle('redColor');
}); 

---> vagy arrow function

button.addEventListener('click', () => {
    button.classList.toggle('redColor');
}); 
 */


/* function firstAction(callback) {
    console.log('Im the first action')
    setTimeout(callback, 2000)
    }
    
function secondAction() {
    console.log('Im the second action')
    }

setTimeout(() => firstAction(secondAction), 4000); 
 */

// setTimeout(firstAction, 4000) // az első paraméter egy callback function

// ha paraméterként adjuk meg a callback functiont, egyből lefut

/* 
function firstAction(callback) {
    console.log('Im the first action')
    setTimeout(callback, 2000)
    }
    
function secondAction(message) {
    console.log(message)
    }

setTimeout(() => firstAction(() => secondAction('Im the second action')), 4000); // a secondaction egy callback és a firstaction hívja meg callback-ként */
 

function firstAction(callback, message) {
    console.log(message)
    setTimeout(callback, 2000)
    }
    
function secondAction(message) { // ez a paraméter csak ebben a függvényben létezik, tehát lehet ugyanaz a paraméter több fv-ben is // csak ebben a függvényben érhető el 
    console.log(message)
    }

setTimeout(() => firstAction(() => secondAction('Im the second action'), 'Im the first action'), 4000); // a secondaction egy callback és a firstaction hívja meg callback-ként
 