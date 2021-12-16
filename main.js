song1 = "";
song2 = "";
rightwristX=0;
rightwristY=0;
leftwristY=0;
leftwristX=0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("opened");
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
       }
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function play() {
    song.play();
    song.setVolume(0.1);
    song.rate(2.5);
}