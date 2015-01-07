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

//===============保存機能=================
document.getElementById("save").addEventListener("click",saveCanvas);
function saveCanvas(e){
    var canvasData = mycanvas.toDataURL('image/png');
    var myimg = document.createElement("img");
    myimg.src = canvasData;
    myimg.className = "doodle";
    myimg.width = 100;
    myimg.height = 100;                
    myimg.addEventListener("click",function(e){
        initCanvas();
        ctx.drawImage(e.target, 0,0,500,500);
    });
    document.getElementById("doodles").appendChild(myimg);
}

//==============初期化機能================
document.getElementById("init").addEventListener("click",initCanvas);
function initCanvas(e){
    ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
}