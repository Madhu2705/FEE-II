//ek func ke ander dusre func ko pass krte hain
function printname(func,num){
    for(let i=1;i<=num;i++){
        func()
    }
}


let myname=function (){
    console.log("Madhu");
}
printname(myname,20);