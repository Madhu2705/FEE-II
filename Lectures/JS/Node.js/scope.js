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