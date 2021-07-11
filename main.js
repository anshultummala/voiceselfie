var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content == "take my selfie"){
    console.log("answering");
    speak();
}
}


function speak(){
    var synth = window.speechSynthesis;
    speakthis = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakthis);
    synth.speak(utterthis);
Webcam.attach (camera);
setTimeout(function(){
takesnapshot();
save();
},5000
);
}

camera = document.getElementById("camera");
Webcam. set({
width:360, height:250,  image_format:'png', png_quality:90

});
function takesnapshot(){
    Webcam. snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="myimage" src="'+data_uri+'"/>'; 
});
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("myimage").src;
    link.href = image;
    link.click();

}