"use strict"

document.querySelector('#upload').addEventListener('click', upload, false);

function upload(event) {
    var fd = new FormData();
    var data = {};
    var size = Number(document.querySelector("#uploadSize").value);
    //sample json string having 100 properties.
    for(var i=0; i < size; i++){
        data["key"+i] = "value" + i;
    }
    
    var contents = new Blob([JSON.stringify(data)], {type: "text/json"});
    
    //old version
    //var contents = JSON.stringify(data);
    
    fd.append("file", contents);
    
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