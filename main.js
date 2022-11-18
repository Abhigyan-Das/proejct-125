noseX = 0;
noseY = 0;

function preload() {
    mustage = loadImage('mustage.webp');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log("pose Net is initilized");
}
function gotPoses(results) {

if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x + 20;
    noseY = results[0].pose.nose.y + 80;
    console.log("noseX = "+noseX);
    console.log("noseY = "+noseY);
}

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustage, noseX, noseY, 80, 35);
}

function take_snapshot() {
   save("mustage.png");
}
