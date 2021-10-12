function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
   video.hide()
    poseNet=ml5.poseNet(video,modelloded);
    poseNet.on('pose',posegot);
}
function draw()
{
    image(video,0,0,500,500);

    fill("#cc3300");
    stroke("#000000");
    circle(lesftWristx,lesftWristy,20);
    InNumberrleftWristY=Number(lesftWristy);
    remove_decimals=floor(InNumberrleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="volume = "+volume;
    song.setVolume(volume);
}
song="";
lestWristx=0;
lesftWristy=0;
RightWristx=0;
RightWristy=0
function preload()
{
    song=loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function modelloded()
{
    console.log("can you hear some nice music?");
}
function posegot(results)
{
if(results.length > 0)
{
    console.log(results);
    lesftWristy=results[0].pose.leftWrist.y;
    lesftWristx=results[0].pose.leftWrist.x;
 RightWristy=results[0].pose.rightWrist.y;
 RightWristx=results[0].pose.rightWrist.x;
 
console.log("leftwrisy:"+lesftWristy+" leftwristx:"+lesftWristx)
console.log("rightwrisy:"+RightWristy+" rightwristx:"+RightWristx)

}
}
