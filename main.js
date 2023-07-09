function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#40E0D0')
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function gotPoses(error){
    if (error){
        console.error(error);
    }
    if(results.length > 0 ){
        console.log(results);

        console.log("rightWrist_x = " + results[0].pose.rightWrist.x + "rightWrist_y = "+ results[0].pose.rightWrist.y);
        console.log("leftWrist_x = " + results[0].pose.leftWrist.x + "leftWrist_y = "+ results[0].pose.leftWrist.y);
    }
}
