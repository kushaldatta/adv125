/* JS Code */
left_wrist_x = 0;
right_wrist_x= 0;
nose_x = 0 ;
nose_y=0;
difference=0 ;
function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x = results[0].pose.rightWrist.x;
    difference = floor(left_wrist_x -right_wrist_x);
    nose_x = results[0].pose.leftWrist.x;
    nose_y = results[0].pose.leftWrist.y;
  }
}
function draw() {
  background('#6C91C2');
  document.getElementById("font").innerHTML = "Your Font Size Will Be " + difference + "px.";
  textSize(difference);
  fill('orange');
  text('KUSHAL', nose_x , nose_y) ;

}  

