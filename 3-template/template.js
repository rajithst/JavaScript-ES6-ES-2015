/*
template using
*/

function uppercase(x){

    return x.toUpperCase();

}

let name = "John papa";


let temp = `<h1> hello ${name}</h1>
            <p>this is ${uppercase('es6')} template using backticks,functions and variables</p>`;


document.getElementById('template').innerHTML=temp;

