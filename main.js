difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(520, 480);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}
function gotPoses(results, error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist_x = " + results[0].pose.rightWrist.x + "rightWrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftWrist_x = " + results[0].pose.leftWrist.x + "rightWrist_y = " + results[0].pose.leftWrist.y);
    }
}
function draw()
{
    background('#4978c4');
    document.getElementById("font-size").innerHTML = "Font size of the text wil be = " + difference + "px";
    fill('#e3ff12');
    textSize(difference);
    text('Hi Hi Hi my name is sriajay renganath', 50, 200);
}