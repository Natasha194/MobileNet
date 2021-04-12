
    Webcam.attach('#camera');

    Webcam.set({
        width: 310,
        height: 300,
        image_format: 'png',
        png_quality: 100,
        constraints: {
            facingMode: "environment"
        }
    });



function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedImage" src="'+data_uri+'">'
    });}

console.log("ml5 version", ml5.version);

var classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function check() {
    var img = document.getElementById("capturedImage");
    classifier.classify(img, gotResult) 
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
    }
}