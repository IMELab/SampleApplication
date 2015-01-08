//===============おえかき機能=================
var mycanvas = document.querySelector("#mycanvas");
var ctx = mycanvas.getContext("2d");
var isPress = false;

//isPress operation
mycanvas.addEventListener("mousedown",function(e){
    isPress = true;
});
mycanvas.addEventListener("mouseup", function(e){
    isPress = false;
});

//mouse move
mycanvas.addEventListener("mousemove",function(e){
    if(isPress){
        //ctx.fillRect(e.clientX, e.clientY, 10, 10);
        var canvasLeft = e.target.getBoundingClientRect().left;
        var canvasTop = e.target.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.arc(e.clientX - canvasLeft, e.clientY - canvasTop, 5, 10 * Math.PI / 180, 80 * Math.PI / 180, true);
        ctx.fill();
    }
});

//===============スナップ機能=================
document.getElementById("snap").addEventListener("click",snapCanvas);
function snapCanvas(e){
    var doodle = document.createElement("div");
    doodle.className = "doodle";
    
    var canvasData = mycanvas.toDataURL('image/png');
    var snap = document.createElement("img");
    snap.src = canvasData;
    snap.className = "snap";
    snap.width = 125;
    snap.height = 125;
    
    doodle.appendChild(snap);
    doodle = attachMenu(doodle);
    
    document.getElementById("doodles").appendChild(doodle);
}

//===============スナップメニュー=================

function attachMenu(doodle){
    var snapMenu = document.createElement("div");
    snapMenu.className = "snapMenu";
    
    //保存機能
    var saveSnap = document.createElement("img");
    saveSnap.src = "/images/save_icon.png";
    saveSnap.className = "menuIcon";
    saveSnap.addEventListener("click",function(e){
        var dllink = document.createElement("a");
        dllink.href = doodle.children[0].src;
        dllink.download = "mydoodle.png";
        dllink.click();
    });
    
    //選択機能
    var chooseSnap = document.createElement("img");
    chooseSnap.src = "/images/choose_icon.png";
    chooseSnap.className = "menuIcon";
    chooseSnap.addEventListener("click", function(e){
        clearCanvas();
        ctx.drawImage(doodle.children[0],0,0,mycanvas.width,mycanvas.height);
    });
    
    //削除機能
    var removeSnap = document.createElement("img");
    removeSnap.src = "/images/remove_icon.png";
    removeSnap.className = "menuIcon";
    removeSnap.addEventListener("click",function(e){
        if(window.confirm("CONFIRMATION:: Do you realy want to remove this snap?")){
            document.getElementById("doodles").removeChild(doodle);
        }
    });
    
    snapMenu.appendChild(saveSnap);
    snapMenu.appendChild(chooseSnap);
    snapMenu.appendChild(removeSnap);
    
    doodle.appendChild(snapMenu);
    
    return doodle;
}

//==============クリア機能================
document.getElementById("clear").addEventListener("click",clearCanvas);
function clearCanvas(e){
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
}