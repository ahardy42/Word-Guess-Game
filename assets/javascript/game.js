
// you need to crop all images to 800 x 550 pixels (wxh)
// this is an array of the capitals for each state
var capitalsArray = [
    { name: "Concord", capitalOf: "NH", picture: "assets/images/NHcapitolConcord.jpg", infoH1: "Concord, NH", infoP: "New Hampshire’s State House is the oldest state capitol in which a legislature still meets in its original chambers." },
    { name: "Montgomery", capitalOf: "AL", picture: "assets/images/CapitolMontgomeryAL.jpg", infoH1: "Montgomery, AL", infoP: "" },
    { name: "Juneau", capitalOf: "AK", picture: "assets/images/AlaskaCapitolJuneau.jpg", infoH1: "Juneau, AK", infoP: "At 3,255 square miles Juneau, Alaska is the largest capital city. It's larger than the entire state of Delaware. It's also the second-largest city in the United States, second only to Sitka, Alaska. " },
    { name: "Phoenix", capitalOf: "AZ", picture: "assets/images/PhoenixArizonaCapitol.jpg", infoH1: "Phoenix, AZ", infoP: "Arizona's capital, Phoenix, was originally named \"Pumpkinville\" in the late 1800s. And there weren't even any pumpkin growers there, just melons that kind of looked like pumpkins. " },
    { name: "Helena", capitalOf: "MT", picture: "assets/images/MontanaCapitolHelena.jpg", infoH1: "Helena, MT", infoP: "Helena, Montana also considered the name Pumpkinville, as well as \"Squashtown\". That's right! Two state capitals were almost named Pumpkinville." },
    { name: "Little Rock", capitalOf: "AR", picture: "assets/images/CapitolLittleRockArkansas.jpg", infoH1: "Little Rock, AR", infoP: "Little Rock, Arkansas is home to the largest bridge in North America built exclusively for pedestrians. Before it was built in 2006, a local county judge said, \"We're going to build that dam bridge\"—apparently referring to the dam that the bridge goes over, not the offensive word. Anyway, the bridge is now most commonly known as \"The Big Dam Bridge.\"" },
    { name: "Sacramento", capitalOf: "CA", picture: "assets/images/CaliforniaCapitolSacramentoCA.jpg", infoH1: "Sacramento, CA", infoP: "Before he became famous, Mark Twain worked for a California newspaper, the Sacramento Union. In 1866 he traveled to Hawaii and sent the newspaper letters to publish." },
    { name: "Denver", capitalOf: "CO", picture: "assets/images/COcapitolbuildingDenver.jpg", infoH1: "Denver, CO", infoP: "The U.S. city that brews the most beer? Denver, Colorado.", },
    { name: "Hartford", capitalOf: "CT", picture: "assets/images/ConnecticutcapitolHartford.jpg", infoH1: "Hartford, CT", infoP: "In 1902 Teddy Roosevelt became the first president to publicly ride in an automobile when he was driven through Hartford, Connecticut.", },
    { name: "Dover", capitalOf: "DE", picture: "assets/images/DoverDEstatehouse.jpg", infoH1: "Dover, DE", infoP: "Dover, Delaware was founded by William Penn, also known as not the guy on your Quaker Oats box. He named Dover after a city in England. You know, like they did with all the early American cities.", },
];

// setting variables to be used in the game 
var currentWord = "";
var currentHiddenWord = [];
var numWins = 0;
var numGuesses = 12;
var badGuesses = [];
var currentWordIndex;

// this function makes buttons become visible on the page, or invisible. 
function moveButton() {
    document.getElementById("reset-button").className = "visible";
    document.getElementById("next-word").className = "visible";
    document.getElementById("click-it").className = "click-me invisible";
}

// reset the game, this resets the visibility of various buttons
function moveButtonBack() {
    document.getElementById("reset-button").className = "invisible";
    document.getElementById("next-word").className = " invisible";
    document.getElementById("capital-info-div").className = "card my-3 invisible";
    document.getElementById("click-it").className = "click-me visible";
}

// sets the html content for the remaining guesses
function displayGuesses() {
    document.getElementById("remaining-guesses").innerHTML = numGuesses;
}

// function displays the number of wins on the page
function displayWins() {
    document.getElementById("wins").innerHTML = numWins;
}

// this function displays the badGuesses variable on the page. 
function displayBadGuesses() {
    document.getElementById("bad-guesses").innerHTML = badGuesses;
}

// function that checks whether the hidden word array still contains "_" strings. if it does, you haven't completed
// the hidden word yet! 
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
    //checking the key pressed value against all letters in currentWord 
    for (i = 0; i < currentWord.length; i++) {
        // If the guess is found in the currentWord string, put the key property value of guess into the hidden
        // word array.  This will fill in the blanks.
        if (guess === currentWord[i].toLowerCase()) {
            currentHiddenWord.splice(i, 1, currentWord[i]);
            document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("  ");
            var isWin = didIWin();
            // check to see if there are any "_" left in the hidden word array. if not, increment wins. if there
            // are, add the event.key value to the array (will be used later).
            if (isWin) {
                numWins++;
                updateInfo();
            }
        } else {
            array.push(guess);
        }
    }
    // the array gets a letter added each time the guess doesn't match the letter in the currentWord variable. 
    // if, at the end of the for loop, the array is the same length as the hidden word array, then the guess must
    // not have been correct.  This triggers the addition of guess to the bad guesses array, and a guess count decrement.
    // if you have no more guesses, the info for the capital is revealed, but wins are not increased. 
    if (array.length === currentHiddenWord.length && !badGuesses.includes(guess)) {
        badGuesses.push(guess);
        document.getElementById("bad-guesses").innerHTML = badGuesses.join(", ");
        numGuesses--;
        document.getElementById("remaining-guesses").innerHTML = numGuesses;
        if (numGuesses === 0) {
            updateInfo();
            document.getElementById("hidden-word").innerHTML = currentWord;
        }
    }
}


// function to pick a new work and display the picture of that word, as well as the hidden <div> for the win screen
function newWord() {
    // pick a random capital object from the array
    var i = Math.floor(Math.random() * capitalsArray.length);
    currentWord = capitalsArray[i].name;
    // this allows you to change the hidden word from "_" to the letter when correct.
    currentWordIndex = i;
    var pic = document.getElementById("capital-pic");
    pic.src = capitalsArray[i].picture;
    // this is necessary to prevent people from activating the newWord() function if they click on the picture in
    // the game
    pic.setAttribute("onclick", "");
    currentHiddenWord = [];
    // creating the hidden word 
    for (j = capitalsArray[i].name.length; j > 0; j--) {
        currentHiddenWord.push("_");
    }
    var space = currentWord.indexOf(" ");
    if (space !== -1) {
        currentHiddenWord.splice(space, 1, "    ");
    }
    var hiddenWordString = currentHiddenWord.join("  ");
    console.log("the hidden word string is " + hiddenWordString);
    console.log("the word is " + currentWord);
    document.getElementById("hidden-word").textContent = hiddenWordString;
    document.getElementById("capital-info-div").className = "card my-3 invisible";
    // showing buttons and setting guess numbers each time a new word is chosen. 
    moveButton();
    numGuesses = 12;
    displayGuesses();
    displayWins();
    badGuesses = [];
    displayBadGuesses();
}

// if a user hits the reset button. this sets everything back to the original settings.
function resetGame() {
    currentWord;
    numWins = 0;
    currentHiddenWord = [];
    numGuesses = 12;
    badGuesses = [];
    var pic = document.getElementById("capital-pic");
    pic.src = "assets/images/us-states-and-capitals-50-states-map-with-capitals-inspirational-united-states-map-capitals-of-us-states-and-capitals.jpg";
    pic.setAttribute("onclick", "newWord()");
    document.getElementById("hidden-word").innerHTML = currentHiddenWord.join("");
    moveButtonBack();
    displayGuesses();
    displayWins();
    displayBadGuesses();
}

//update the picture with some info about the capital which is stored in the capital object. 
function updateInfo() {
    document.getElementById("capital-info-h1").innerHTML = capitalsArray[currentWordIndex].infoH1;
    document.getElementById("capital-info-p").innerHTML = capitalsArray[currentWordIndex].infoP;
    document.getElementById("capital-info-div").className = "card my-3 visible";
    displayWins();
}

