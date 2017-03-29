
/*
* default parameters
*
* */


function helloworld($param = 'helloworld') {
    console.log($param);


}

helloworld();


let arr1 = [1,2,3];

function test() {

    console.log(arr1)
}

test(...arr1);