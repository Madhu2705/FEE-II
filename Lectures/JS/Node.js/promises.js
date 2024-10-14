/* Promises represents a future events.Technically there are objects.By default Promises are in pending states. 
Promise state-pending, fullfilled , reject
1.How to create promise: it has 2 callbacks - resolve, reject
let p=new Promise((resolve,reject)=>{
    let like=true;
setTimeout(() => {
    if(like){
        resolve("Yeah , she like you");
    }else{
        reject("naah!! your ugly");
    }
    resolve("this is a resolve");
}, 2000);
});
//console.log(p);

//1.2:consuming promises
p.then((value)=>{//.then passes the data
    console.log(value);
},(err)=>{
    console.log("rejected");
});

p.then((value)=>{
    console.log(value);
}).catch((er) => {
    console.log("rejected" + er);
});

//2.Promise chaining:
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("resolve is working after 2 sec");
    }, 2000);
});
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 2 is working");
    }, 2000);
});*/

//Ques:
//create a function with name downloadMovie which has url a argument.Create a promise if url is not mp4-> reject else mp4-> resolve:
function DownloadMovie(url,download) { //download is the callback function
    console.log("Started Downloading");
    setTimeout(() => { 
        let path = url.split("/").pop();
        download(path);
    }, 2000);
}
let p=new Promise((resolve,reject)=>{
    let url=true;
setTimeout(() => {
    if(like){
        resolve("Yeah , she like you");
    }else{
        reject("naah!! your ugly");
    }
    resolve("this is a resolve");
}, 2000);
});
//console.log(p);







