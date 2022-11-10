function cleaning() {
    document.getElementById('speechtotext').innerHTML = "";
}


//Ye function tab run hoga jab start click hoga
function MyFunc() {
    cleaning();
    let Val = document.getElementById('btn').innerHTML;
    if (Val === 'Start' || Val === 'Start Again') {
        console.log(Val)
        var val = window.webkitSpeechRecognition;
        var rec = new val();
        rec.lang = 'en-GB';
        rec.onresult = function (event) {
            console.log(event);
            document.getElementById('speechtotext').innerHTML = event.results[0][0].transcript;
        }
        rec.start();
        document.getElementById('btn').innerHTML = 'Start Again';
        document.getElementById('btn1').style.cursor = 'pointer';
        document.getElementById('btn1').innerHTML = 'Stop';
        document.getElementById("btn1").disabled = false;
    }
}

//Ye function tab run hoga jab stop click hoga
function MyFunc1() {
    var val = window.webkitSpeechRecognition;
    var rec = new val();
    rec.lang = 'en-GB';
    rec.onresult = function (event) {
        console.log(event);
        document.getElementById('speechtotext').innerHTML = event.results[0][0].transcript;
    }
    rec.stop();
    document.getElementById('btn1').style.cursor = 'no-drop';
    document.getElementById("btn1").disabled = true;
}