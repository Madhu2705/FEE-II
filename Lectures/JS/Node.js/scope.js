//let or const block scope
// 1.global scope:by default all variables has a functional scope means they can be accessing through thecode base
var globalVar="global variable"
let globalVar1="global variable"
const globalVar2="global variable"
function myfunc(){
    console.log(globalVar2);// output:global variable
    console.log(globalVar);
    console.log(globalVar1);
}
myfunc();

//2.functional scope:variable declared inside a function can be accessed into a function only

function func(){
    let a=20;
    console.log(a);
}
func();

//3.block scope:
{
    let a=15;
    var c=25;
    console.log(a);// show output
}
console.log(a)// only let or const is not working
console.log(c);// show output

//4.lexical scope:variable declared in outerfunction can be accessible by inner function but value assigned to inner function cannot be accessible
//by outer function
function sum(a,b){
    var c=a+b;
    console.log(c)
    function value(e,f){
        let d=e*f;
        console.log(d);
    }
    value(3,4);
}
sum(3,4);

