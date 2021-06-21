tintcolor=""
function preload() {
        
}

function setup() {
    canvas=createCanvas(500,400)
    canvas.position(100,260)
    //Live video
    video=createCapture(VIDEO)
    video.size(500,400)
    video.hide()
    tintcolor=""
}

function draw() {
    //Drawing the image
    //image(variable,x,y,wid,hei)
    image(video,0,0,500,400)
    tint(tintcolor)
}


function applyfilter() {
    tintcolor=document.getElementById("culo").value
}



function take_snapshot() {
    save("Vihaan.png")
}