let str='yash';
let obj={name:"yash"};
//for in used:
/*for(let i of obj){
console.log(i);
}*/
console.log(str[symbol.iterator]);
console.log(obj[symbol.iterator]);
for(let i of str){
    let iterator = str[symbol.iterator]();
    console.log(iterator);
    console.log(iterator.next());
}

// functions//
syntax:
function sum (){
//executeable part of function

sum(3);//parameter
}
sum()//function call
//default parameter: me agar hum value pass kr de toh dusri value pass nhi hoti
