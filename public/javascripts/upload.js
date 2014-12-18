"use strict"

document.querySelector('#upload').addEventListener('click', upload, false);

function upload(event) {
    var fd = new FormData();
    var data = {};
    
    //sample json string having 100 properties.
    for(var i=0; i < 100; i++){
        data["key"+i] = "value" + i;
    }
    fd.append("file", JSON.stringify(data));
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function(e){
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
    }
    xhr.open("POST", "/uploadMultipart", true);
    xhr.send(fd);

    event.stopPropagation();
};