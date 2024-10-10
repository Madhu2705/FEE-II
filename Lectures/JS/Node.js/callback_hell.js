function DownloadFile(url, downloadCallback) { //downloadCallback is the callback function
    console.log("Started Downloading");
    setTimeout(() => { // Fixed the spelling
        let path = url.split("/").pop();
        downloadCallback(path);
    }, 2000);
}

function compressfile(path, compressCallback) { //compressCallback is the callback function
    console.log("File started compressing");
    setTimeout(() => { // Fixed the spelling
        const comp = path.split(".")[0] + ".zip";
        compressCallback(comp);
    }, 2000);
}

function uploadfile(path, uploadCallback) { //uploadCallback is the callback function
    console.log("File started uploading");
    setTimeout(() => { // Fixed the spelling
        const url = "https://LocalStorage/" + path;
        uploadCallback(url);
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
