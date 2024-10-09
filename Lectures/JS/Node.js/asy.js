/*1.simple function
function first(){
    console.log("this is first function");
}

function second(){
    console.log("this is second function");
}

//2.function calling
first();
second();*/

//2.function callback:
/*function first(){
    console.log("this is first function");
}

function second(call){
    console.log("this is second function");
}
call();
second(first);

/*3.synchronous:
console.log("started");
function myfun(){
    console.log("mufunc works");
}
myfunc();
console.log("ends");*/

// set timeout
//require 1.callback function,2.delay
/*console.log("image searching");
let a= setTimeout(() => {
    console.log("image rendered");
}, 2000);
clearTimeout(a);
console.log("work done");

//set interval
console.log("image searching");
let b= setInterval(() => {
    console.log("image rendered");
},);
clearInterval(b);
console.log("work done");
*/
//msg to friend  which execute for 3 times
/*let count=0;
var c=setInterval(() => {
    count++
    console.log('message ${count}: Ghar k niche aaja');.
    if(count>=3){
        clearInterval(c);
        console.log("execution stop");
    }
});*/



