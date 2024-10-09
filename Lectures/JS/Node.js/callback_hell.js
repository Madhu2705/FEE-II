function DownloadFile(url,download){//download,compress or upload is callback function
console.log("started Downloading");
settimeout(()=>{
let path=url.aplit("/").pop();
download(path);
},2000);
}

function compressfile(path,compress){
    console.log("file started compressing");
    settimeout(()=>{
        const comp=path.split("."[0]+".zip";
            compress(comp);
        
    },2000);
}

function uploadfile(path,compress){
    console.log("file started downloading");
    settimeout(()=>{
        const url="https://LocalStorage"+comp;
           uploadfile(upl);
        
    },2000);
}
DownloadFile("https://www.xyz.com/abc.mp3",
    function(path){
        console.log('file downloaded successfully ${path');
        compressfile(path,function(comp){
            console.log('file compressed successfully ${comp}');
            uploadfile(comp,function(upl){
console.log('file upload successfully ${upl}'
);
console.log("everything is done");            
});
        });
    });


