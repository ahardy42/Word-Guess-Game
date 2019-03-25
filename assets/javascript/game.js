var capitalsArray = [
    {name: "Concord", capitalOf: "NH", picture: "assets/images/NHcapitolConcord.jpg", infoH1: "Concord, NH", infoP: "New Hampshire’s State House is the oldest state capitol in which a legislature still meets in its original chambers."},
];

console.log(capitalsArray.length);

var currentWord;
var currentHiddenWord = [];
var numWins = 0;
var numGuesses = 12;
var badGuesses = [];
var currentWordIndex;

function moveButton() {
    document.getElementById("start-button").className = "btn btn-transparent position-absolute invisible start";
    document.getElementById("reset-button").className = "btn btn-primary btn-lg visible";
    document.getElementById("next-word").className = "btn btn-primary btn-lg visible";
    document.getElementById("capital-info-div").className = "position-absolute invisible";
}

function moveButtonBack() {
    document.getElementById("start-button").className = "btn btn-transparent position-absolute visible start";
    document.getElementById("reset-button").className = "btn btn-primary btn-lg invisible";
    document.getElementById("reset-button").className = "btn btn-primary btn-lg invisible";
}

function displayGuesses() {
    document.getElementById("remaining-guesses").innerHTML = numGuesses;
}

function displayWins() {
    document.getElementById("wins").innerHTML = numWins;
}

function displayBadGuesses() {
    document.getElementById("bad-guesses").innerHTML = badGuesses;
}

function didIWin() {
    if (currentHiddenWord.includes("_")) {
        return false;
    } else {
        return true;
    }
}

document.onkeyup = function guess(event) {
    //function adds correct guesses to the hidden word array by changing the correct index from "_" to the correct letter.
    //saving the value of the key pressed to a variable
    var guess = event.key.toLowerCase();
    var array = [];
    console.log(guess);
    console.log(currentHiddenWord);
    //checking the key pressed value against all letters in currentWord 
    for (i=0; i < currentWord.length; i++) {
        if (guess === currentWord[i].toLowerCase()) {
            currentHiddenWord.splice(i,1,currentWord[i]);
            document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("  ");
            var isWin = didIWin();
            if (isWin) {
                numWins++;
                updateInfo();
            } 
        } else {
            array.push(guess);
        } 
    }
    console.log(array.length);
    if (array.length === currentHiddenWord.length) {
        badGuesses.push(guess);
        document.getElementById("bad-guesses").innerHTML = badGuesses.join(", ");
        numGuesses--;
        document.getElementById("remaining-guesses").innerHTML = numGuesses;
        if (numGuesses === 0) {
            updateInfo();
        }
    }
}

function modifyBadGuesses() {
    //function adds incorrect guesses to the badGuesses array and then updates the bad guesses span to display. also, decrements the remaining guesses. 
}

function newWord() {
    var i = Math.floor(Math.random() * capitalsArray.length);
    currentWord = capitalsArray[i].name;
    currentWordIndex = i;
    console.log(currentWord);
    document.getElementById("capital-pic").src = capitalsArray[i].picture;
    currentHiddenWord = [];
    for (j = capitalsArray[i].name.length; j > 0; j--) {
        currentHiddenWord.push("_");
    }
    document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("  ");
    moveButton();
    numGuesses = 12;
    displayGuesses();
    displayWins();
    badGuesses = [];
    displayBadGuesses();
}

// if a user hits the reset button
function resetGame() {
    currentWord;
    numWins = 0;
    currentHiddenWord = [];
    numGuesses = 12;
    badGuesses = [];
    document.getElementById("capital-pic").src = "assets/images/us-states-and-capitals-50-states-map-with-capitals-inspirational-united-states-map-capitals-of-us-states-and-capitals.jpg";
    document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("");
    moveButtonBack();
    displayGuesses();
    displayWins();
    displayBadGuesses();
}

//update the picture with some info about the capital
function updateInfo() {
    document.getElementById("capital-info-h1").innerHTML = capitalsArray[currentWordIndex].infoH1;
    document.getElementById("capital-info-p").innerHTML = capitalsArray[currentWordIndex].infoP;
    document.getElementById("capital-info-div").className = "position-absolute visible";
    displayWins();
}
