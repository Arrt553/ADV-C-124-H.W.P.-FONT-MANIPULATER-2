function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(460,300)
    canvas = createCanvas(400,400);
    canvas.position(1060,350);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}
function draw(){
    background("#0011ff");
}

function modelLoaded(){
    console.log("Model is Initialized!");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
