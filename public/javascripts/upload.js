"use strict"

document.querySelector('#upload').addEventListener('click', upload, false);

function upload(event) {
    console.log("work");
    var fd = new FormData();
    var data = {};
    for(var i=0; i < 1000000; i++){
        data["key"+i] = "value" + i;
    }
    fd.append("file", JSON.stringify(data));
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/uploadMultipart", true);
    xhr.send(fd);

    event.stopPropagation();
};