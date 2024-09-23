//var:
var a=10;
console.log(a);
function myfunc(){
    var b=20;
    console.log(b);
}
myfunc();

//let or const:
//reference error:hoisting hoti hai temperor dead zone ki wajah se
console.log(a);
let a=10;
function myfunc(){
    var b=20;
    console.log(b);
}
myfunc();