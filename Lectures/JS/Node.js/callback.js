function DownloadFile(url, download) { //download is the callback function
    console.log("Started Downloading");
    setTimeout(() => { 
        let path = url.split("/").pop();
        download(path);
    }, 2000);
}

function compressfile(path, compress) { //compress is the callback function
    console.log("File started compressing");
    setTimeout(() => { 
        const comp = path.split(".")[0] + ".zip";
        compress(comp);
    }, 2000);
}

function uploadfile(path, upload) { //upload is the callback function
    console.log("File started uploading");
    setTimeout(() => { 
        const url = "https://LocalStorage/" + path;
        upload(url);
    }, 2000);
}

DownloadFile("https://www.xyz.com/abc.mp3", function (path) {
    console.log(`File downloaded successfully: ${path}`);
    compressfile(path, function (comp) {
        console.log(`File compressed successfully: ${comp}`);
        uploadfile(comp, function (upl) {
            console.log(`File uploaded successfully: ${upl}`);
            console.log("Everything is done");
        });
    });
});
