/*
let 

*/
function varuse(){
    var x = 80;
    if(true){
        var x = "testing";
        console.log(x);
    }
    console.log(x)
}

varuse();

function letuse(){
    let x = 50;
    if(true){
        let x = "let using";
        console.log(x);
    }
    console.log(x)
}

letuse();

/*
const

*/

const lang = [];
lang.push('js');
lang.push('ruby');

console.log(lang);
lang = "something gives error"
console.log(lang);