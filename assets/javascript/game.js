var capitalsArray = [
    {name: "Concord", capitalOf: "NH", picture: "assets/images/NHcapitolConcord.jpg", infoH1: "Concord, NH", infoP: "New Hampshire’s State House is the oldest state capitol in which a legislature still meets in its original chambers."},
    {name: "Montgomery", capitalOf: "AL", picture: "assets/images/CapitolMontgomeryAL.jpg", infoH1: "Montgomery, AL", infoP: ""},
    {name: "Juneau", capitalOf: "AK", picture: "assets/images/AlaskaCapitolJuneau.jpg", infoH1: "Juneau, AK", infoP: "At 3,255 square miles Juneau, Alaska is the largest capital city. It's larger than the entire state of Delaware. It's also the second-largest city in the United States, second only to Sitka, Alaska. "},
    {name: "Phoenix", capitalOf: "AZ", picture: "assets/images/PhoenixArizonaCapitol.jpg", infoH1: "Phoenix, AZ", infoP: "Arizona's capital, Phoenix, was originally named \"Pumpkinville\" in the late 1800s. And there weren't even any pumpkin growers there, just melons that kind of looked like pumpkins. "},
    {name: "Helena", capitalOf: "MT", picture: "assets/images/MontanaCapitolHelena.jpg", infoH1: "Helena, MT", infoP: "Helena, Montana also considered the name Pumpkinville, as well as \"Squashtown\". That's right! Two state capitals were almost named Pumpkinville."},
    {name: "Little Rock", capitalOf: "AR", picture: "assets/images/CapitolLittleRockArkansas.jpg", infoH1: "Little Rock, AR", infoP: "Little Rock, Arkansas is home to the largest bridge in North America built exclusively for pedestrians. Before it was built in 2006, a local county judge said, \"We're going to build that dam bridge\"—apparently referring to the dam that the bridge goes over, not the offensive word. Anyway, the bridge is now most commonly known as \"The Big Dam Bridge.\""},
    {name: "Sacramento", capitalOf: "CA", picture: "assets/images/CaliforniaCapitolSacramentoCA.jpg", infoH1: "Sacramento, CA", infoP: "Before he became famous, Mark Twain worked for a California newspaper, the Sacramento Union. In 1866 he traveled to Hawaii and sent the newspaper letters to publish."},
    {name: "Denver", capitalOf: "CO", picture: "assets/images/COcapitolbuildingDenver.jpg", infoH1: "Denver, CO", infoP: "The U.S. city that brews the most beer? Denver, Colorado.", },
    {name: "Hartford", capitalOf: "CT", picture: "assets/images/ConnecticutcapitolHartford.jpg", infoH1: "Hartford, CT", infoP: "In 1902 Teddy Roosevelt became the first president to publicly ride in an automobile when he was driven through Hartford, Connecticut.", },
    {name: "Dover", capitalOf: "DE", picture: "assets/images/DoverDEstatehouse.jpg", infoH1: "Dover, DE", infoP: "Dover, Delaware was founded by William Penn, also known as not the guy on your Quaker Oats box. He named Dover after a city in England. You know, like they did with all the early American cities.", },
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

// function to pick a new work and display the picture of that word, as well as the hidden <div> for the win screen
function newWord() {
    var i = Math.floor(Math.random() * capitalsArray.length);
    console.log(i);
    currentWord = capitalsArray[i].name;
    currentWordIndex = i;
    console.log(currentWord);
    document.getElementById("capital-pic").src = capitalsArray[i].picture;
    currentHiddenWord = [];
    for (j = capitalsArray[i].name.length; j > 0; j--) {
        currentHiddenWord.push("_");
    }
    document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("  ");
    document.getElementById("capital-info-div").className = "position-absolute invisible";
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
