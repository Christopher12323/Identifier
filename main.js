img=""
status=""
function setup(){
    canvas=createCanvas(620,420)
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status:Detecting objects..."
}
function preload(){
    img=loadImage("Fairpicture.jpg")
}
function draw(){
image(img,0,0,620,420)

}
function modelLoaded(){
    console.log("modle Loaded")
    status=true
    objectDetector.detect(img,gotResults)
    
}
function gotResults(error,results){
    if (error){
console.log(error)
    }
    console.log(results)

}