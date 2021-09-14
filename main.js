function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4d0-4uPab/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result").innerHTML = "I can hear -" + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy -" + results[0].confidence;
        random_r = Math.floor(Math.random()*255);
        random_g = Math.floor(Math.random()*255);
        random_b = Math.floor(Math.random()*255);
        document.getElementById("result").style.color = "rgb("+ random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("accuracy").style.color = "rgb("+ random_r + "," + random_g + ","+ random_b + ")";

        img1 = document.getElementById("Aliens1");
        img2 = document.getElementById("Aliens2");
        img3 = document.getElementById("Aliens3");
        img4 = document.getElementById("Aliens4");

        if (results[0].label == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Snap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Bell") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}
