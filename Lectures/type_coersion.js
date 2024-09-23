console.log();
console.log(1==1);// output: value comparison true
console.log(1=="1")//true
console.log(1 == 'A');// False
console.log(0==[]);// true
console.log(1=="");//false
console.log([]=="");//true
console.log(1+2);//3
console.log(1+'2');//12 explanation: before concat with number 1 this value will be converted to string
console.log(10-"2");//8  string value 2 change to number
console.log(typeof(1+"2"));//string
console.log(10+"A");//10A
console.log(10-"A");//NAN
console.log(10+"2"+"A");//102A
console.log(10+"2"-"A");//Nan

//string to number:

let a="20";
console.log(typeof a)
//1.constructor
let b=Number(a);
console.log(typeof b);
//2.
let d=parseInt(a);
console.log(typeof a);
