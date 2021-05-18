Webcam.set({

    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90

});

camera = document.getElementById("webcam");
Webcam.attach("webcam");

function takeImage(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';

    });

}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J3wKNcBcv/', modelLoaded);

function modelLoaded(){

    console.log("its a model loaded");

}