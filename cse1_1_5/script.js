function setCookie(name,value) {
    var expires = "";
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

document.getElementById('numOfDigitsSlider').addEventListener('input', () => {
    if (document.getElementById("numOfDigitsSlider").value == 2) {
        document.getElementById('numOfDigitsText').textContent = 'Number Of Digits: 2 (Recommended)';
    } else {
        document.getElementById('numOfDigitsText').textContent = 'Number Of Digits: ' + document.getElementById("numOfDigitsSlider").value;
    }
});

function oneplayer_init() {
    let secretNumber = 0;
    secretNumber = String(Math.floor(Math.random() * 10));
    for (let i = 0; i < document.getElementById("numOfDigitsSlider").value - 1; i++) {
        secretNumber = String(secretNumber) + String(Math.floor(Math.random() * 10));
    };
    setCookie("secretNumber", secretNumber);
}

function guess() {
    var guess = document.getElementById("guess").value;
    var secretNumber = getCookie("secretNumber");
    var guessesRemaining = document.getElementById("guessesRemaining").textContent;
    if (guess == secretNumber) {
        document.getElementById("WinLoseText").textContent = "You win!";
        document.getElementById("GuessesReamining").textContent = guessesRemaining - 1;
        document.getElementById("LowerHigherLabel").textContent = "";
        document.getElementById("guess").value = "";
        document.getElementById("guess").disabled = true;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("resetButton").textContent = "Play Again";
    }
}