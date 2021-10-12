var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth=window.SpeechSynthesis;
    speak_data= "pls wait for five seconds"; //document.getElementById("textbox").value;
    console.log(speak_data);
    var utterthis= new SpeechSynthesisUtterance(speak_data);
    console.log(utterthis);
    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function(){
        //take_snapshot();
        //save();
    },5000);
}
var camera=document.getElementById("camera");
Webcam.set({
    width:360, 
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

