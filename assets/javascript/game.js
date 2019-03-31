
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
    { name: "Hartford", capitalOf: "CT", picture: "assets/images/ConnecticutcapitolHartford.jpg", infoH1: "Hartford, CT", infoP: "In 1902 Teddy Roosevelt became the first president to publicly ride in an automobile when he was driven through Hartford, Connecticut."},
    { name: "Dover", capitalOf: "DE", picture: "assets/images/DoverDEstatehouse.jpg", infoH1: "Dover, DE", infoP: "Dover, Delaware was founded by William Penn, also known as not the guy on your Quaker Oats box. He named Dover after a city in England. You know, like they did with all the early American cities."},
    {name: "Tallahassee", capitalOf: "FL", picture: "assets/images/StateCapitolTallahasseeFL.jpg", infoH1: "Talahassee, FL", infoP: "In the 1500s the first North American Christmas celebration took place in Desoto, which today is known as Tallahassee, Florida."},
    {name: "Atlanta", capitalOf: "GA", picture: "assets/images/AtlantaGeorgiaCapitol_0.jpg", infoH1: "Atlanta, GA", infoP: "According to The New York Times, Atlanta, Georgia is hip-hop's center of gravity. Many artists got their start there including Ludacris, who once deejayed for a local radio station under the stage name \"Chris Luvaluva\"."},
    {name: "Honolulu", capitalOf: "HI", picture: "assets/images/HawaiiCapitolHonolulu.jpg", infoH1: "Honolulu, HI", infoP: "The only royal palace in the United States can be found in Honolulu, Hawaii. It was used by Hawaiian monarchs from 1879 until the overthrow of the monarchy occurred in 1893."},
    {name: "Boise", capitalOf: "ID", picture: "assets/images/IdahoCapitolBoise.jpg", infoH1: "Boise, ID", infoP: "There's a to-scale replica of the Liberty Bell in front of the Boise, Idaho capitol building. The only difference? The one in Boise doesn't have a crack. Because crack is wack. Meredith, you're better than that."},
    {name: "Springfield", capitalOf: "IL", picture: "assets/images/IllinoisCapitolSpringfield.jpg", infoH1: "Springfield, IL", infoP: "In 1921 the Maid Rite Sandwich Shop in Springfield, Illinois opened the first ever drive-thru in America."},
    {name: "Indianapolis", capitalOf: "IN", picture: "assets/images/IndianaCapitolIndianapolis.jpg", infoH1: "Indianapolis, IN", infoP: "The Indianapolis Motor Speedway, home to my beloved Indy 500, takes up 253 acres. That means that Churchill Downs, Yankee Stadium, the Rose Bowl, the Roman Coliseum, and Vatican City could all fit inside of it."},
    {name: "Des Moines", capitalOf: "IA", picture: "assets/images/IowaCapitolDesMoines.jpg", infoH1: "Des Moinse, IA", infoP: "Des Moines, the capital of Iowa, is French for \"of the monks.\" In what I'm sure is one of America's greatest regrets, Des Moines was almost named \"Fort Raccoon.\" "},
    {name: "Topeka", capitalOf: "KS", picture: "assets/images/KansasStatecapitol.jpg", infoH1: "Topeka, KS", infoP: "In 2010 the mayor of Topeka, Kansas wanted Google to install their fiber-optic broadband Internet in the city, and to get the company's attention, mayor Bill Bunten announced the city would unofficially change its name to \"Google\" for a month. Google responded on April Fool's Day, saying they would change their name to Topeka."},
    {name: "Frankfort", capitalOf: "KY", picture: "assets/images/KentuckyCapitolFrankfort.jpg", infoH1: "Frankfort, KY", infoP: "Edgar Allan Poe's only play, Politain, was inspired by a real-life murder, and even though the play takes place during the 16th century in Rome, the actual murder it's based on occurred in 1825 in Frankfort, Kentucky. Here I made a list of the things Frankfort, Kentucky and Rome have in common. "},
    {name: "Baton Rouge", capitalOf: "LA", picture: "assets/images/LouisianaStateCapitolbatonrouge.jpg", infoH1: "Baton Rouge, LA", infoP: "In 1988, Baton Rouge, Louisiana saw the infamous \"Earthquake Game\" at Louisiana State University's football stadium. A last second touchdown caused the crowd to cheer so loudly that it registered as an earthquake on a local seismograph."},
    {name: "Augusta", capitalOf: "ME", picture: "assets/images/MaineCapitolAugusta.jpg", infoH1: "Augusta, ME", infoP: "America's oldest wooden fort can be found in Augusta, Maine. Old Fort Western was built in 1754 and was later used by Benedict Arnold before his invasion of Canada. This was back in the old days, when Central Maine was the west."},
    {name: "Annapolis", capitalOf: "MD", picture: "assets/images/MDstatehouseAnnapolis.jpg", infoH1: "Annapolis, MD", infoP: "Annapolis isn't just a James Franco movie that no one saw, it's also the capital of Maryland and home to the largest crab feast in the world. Each year people eat over 300 bushels of crabs and over 3,000 ears of corn at the Annapolis Rotary Crab Feast."},
    {name: "Boston", capitalOf: "MA", picture: "assets/images/MAstatecapitolboston.jpg", infoH1: "Boston, MA", infoP: "In 1919, Boston, Massachusetts flooded, with molasses. A fifty-foot-tall tank of molasses broke and around 2.3 million gallons of molasses destroyed surrounding streets. 21 people died."},
    {name: "Lansing", capitalOf: "MI", picture: "assets/images/MichiganCapitolLansing.jpg", infoH1: "Lansing, MI", infoP: "Lansing only became the capital of Michigan because so many other cities wanted to be capital. The Michigan House of Representatives was forced to choose Lansing to end the political turmoil that determining a capital had become. The decision was shocking because Lansing was much less populated than the other cities that wanted to be capital, like Ann Arbor and Marshall and Jackson."},
    {name: "Saint Paul", capitalOf: "MN", picture: "assets/images/MinnesotaCapitolStPaul.jpg", infoH1: "Saint Paul, MN", infoP: " In the 1800s, Saint Paul, Minnesota was called \"Pig's Eye Landing,\" named after a local tavern owner. Wait Pig's Eye Landing! Pigs?! Time to put a quarter in the staff \"pork chop party fund.\" Cha-ching!"},
    {name: "Jackson", capitalOf: "MS", picture: "assets/images/MississippiCapitolJackson.jpg", infoH1: "Jackson, MS", infoP: "It's believed that the song \"Jackson\" popularized by Johnny Cash and June Carter is about the capital of Mississippi. In the 1960s that area of the state was known for wild partying and illegal gambling."},
    {name: "Jefferson City", capitalOf: "MO", picture: "assets/images/MissouriCapitolJeffersonCity.jpg", infoH1: "Jefferson City, MO", infoP: "The Missouri state capitol building in Jefferson City has had some tough luck. In 1837, the first one burned down about ten years after it was built. Then the second one was struck by lightning in 1911 and burned to the ground. That's bad news for Jefferson City, but it's great news for Marty McFly and Doc Brown."},
    {name: "Lincoln", capitalOf: "NA", picture: "assets/images/NebraskaCapitolLincoln.jpg", infoH1: "Lincoln, NA", infoP: "What do Dick Cheney, Hilary Swank, and Johnny Carson all have in common? Very little, except that they all lived in Lincoln, Nebraska at some point or another. On the other hand, Abraham Lincoln, for whom the city was named, never lived there."},
    {name: "Carson City", capitalOf: "NV", picture: "assets/images/NevadaCapitolCarsonCity.jpg", infoH1: "Carson City, NV", infoP: "If you never want to visit Carson City, Nevada just watch the films that were partially shot there. Like Misery, An Innocent Man, or, John Wayne's last movie, The Shootist. On the other hand 0% of the 1952 western, Carson City was filmed there."},
    {name: "Trenton", capitalOf: "NJ", picture: "assets/images/NewJerseyCapitolTrenton.jpg", infoH1: "Trenton, NJ", infoP: "When William Taft was elected president, a company in Trenton, New Jersey was commissioned to custom-make a large bathtub for him. It held 50 gallons and weighed 600 pounds. Of course, Taft would later get stuck in a White House bathtub, but there's no record that it was that bathtub."},
    {name: "Santa Fe", capitalOf: "NM", picture: "assets/images/NewMexicoCapitolSantaFe.jpg", infoH1: "Santa Fe, NM", infoP: "Mission San Miguel is the oldest church in the United States, and it was built in Santa Fe, New Mexico in the 1600s."},
    {name: "Albany", capitalOf: "NY", picture: "assets/images/AlbanyNYCapitolBuilding.jpg", infoH1: "Albany, NY", infoP: "Albany, New York's great claim to fame is that perforated toilet paper was invented there."},
    {name: "Raleigh", capitalOf: "NC", picture: "assets/images/NCstatecapitolRaleigh.jpg", infoH1: "Raleigh, NC", infoP: "At Pullen Park in Raleigh, North Carolina there's a bronze statue of Andy and Opie from The Andy Griffith Show. You know, it was like this one, except bigger and it didn't feature Rob Swanson. Anyway, in 2004 the plaque was stolen. It read \"The Andy Griffith Show. A simpler time, a sweeter place, a lesson, a laugh, a father and a son.\""},
    {name: "Bismarck", capitalOf: "ND", picture: "assets/images/NorthDakotaCapitolBismarck.jpg", infoH1: "Bismarck, ND", infoP: "In 2007 almost 9,000 people gathered in Bismarck, North Dakota to set the world record for most snow angels in one place."},
    {name: "Columbus", capitalOf: "OH", picture: "assets/images/OhioCapitolColumbusOH.jpg", infoH1: "Columbus, OH", infoP: "In 1964, Jerry Mock became to first woman to fly around the world alone. The trip started and ended in Columbus, Ohio. It took her 29 days."},
    {name: "Oklahoma City", capitalOf: "OK", picture: "assets/images/OKCapitolOklahomaCity.jpg", infoH1: "Oklahoma City, OK", infoP: "There's  a pre World War II banjo living in the American Banjo museum in Oklahoma City that is worth over $175,000. More like banj-wow. Meredith, I expect better."},
    {name: "Salem", capitalOf: "OR", picture: "assets/images/OregonCapitolSalemOR.jpg", infoH1: "Salem, OR", infoP: "Waldo Park, one of the smallest parks in the world can be found in Salem, Oregon. Finally we have answered the question \"Where's Waldo...Park?\" It's in Oregon, it's 12 feet by 20 feet and contains a single tree, which was planted in 1872."},
    {name: "Harrisburg", capitalOf: "PA", picture: "assets/images/CapitolHarrisburgPA.jpg", infoH1: "Harrisburg, PA", infoP: "In 1906 Teddy Roosevelt visited the capitol building in Harrisburg, Pennsylvania and said \"It's the handsomest building I ever saw.\""},
    {name: "Providence", capitalOf: "RI", picture: "assets/images/RhodeIslandCapitolProvidence.jpg", infoH1: "Providence, RI", infoP: "The world's largest termite is a statue in Providence, Rhode Island. At 58 feet long it's 920 times larger than a real termite."},
    {name: "Columbia", capitalOf: "SC", picture: "assets/images/SouthCarolinaCapitolColumbia.jpg", infoH1: "Columbia, SC", infoP: "\"Hootie and the Blowfish\" was formed at the University of South Carolina in its capital city of Columbia. In a scene straight out of Pitch Perfect, Mark Bryan overheard Darius Rucker singing in the dorm showers and the rest is history."},
    {name: "Pierre", capitalOf: "SD", picture: "assets/images/SouthDakotaCapitolPierre.jpg", infoH1: "Pierre, SD", infoP: "Pierre, South Dakota is named after fur trader Pierre Chouteau Jr., whose family was responsible for goods that early Americans couldn't live without, like beaver hats."},
    {name: "Nashville", capitalOf: "TN", picture: "assets/images/TennesseeCapitolNashville.jpg", infoH1: "Nashville, TN", infoP: "Both Trisha Yearwood and Kathy Mattea worked as tour guides at the Country Music Hall of Fame and Museum in Nashville, Tennessee before they became famous country singers themselves."},
    {name: "Austin", capitalOf: "TX", picture: "assets/images/TexasCapitolAustinTX.jpg", infoH1: "Austin, TX", infoP: "The unofficial slogan of Austin, Texas is \"Keep Austin Weird.\" They have to keep it unofficial because if that were an official slogan it wouldn't be weird enough. The phrase was invented by a local community college librarian who resented Austin's descent into rampant commercialism. Now a bunch of businesses capitalize on the idea by selling products featuring the motto."},
    {name: "Salt Lake", capitalOf: "UT", picture: "assets/images/utahCapitolsaltlakecity.jpg", infoH1: "Salt Lake, UT", infoP: "In 2007, Forbes named Salt Lake City America's vainest city, claiming that they have 6 plastic surgeons to every 100 people and spend millions more on beauty products than citizens of similarly-sized cities. That was a lot of szzzzs."},
    {name: "Montpelier", capitalOf: "VT", picture: "assets/images/VermontCapitolMontpelier.jpg", infoH1: "Montpelier, VT", infoP: "Every Valentine's Day, an unknown Valentine phantom decorates Montpelier, Vermont with huge red hearts. Everywhere from stores, to schools, to the capitol building are surprised with these red hearts. And when same-sex marriage was legalized in September of 2009, the bandit struck again—this time, with rainbow hearts."},
    {name: "Richmond", capitalOf: "VA", picture: "assets/images/VirginiaCapitolRichmond.jpg", infoH1: "Richmond, VA", infoP: "Patrick Henry made his famous \"Give Me Liberty or Give Me Death\" speech at a church in Richmond, Virginia. And they gave him death."},
    {name: "Olympia", capitalOf: "WA", picture: "assets/images/WashingtonCapitolOlympiaWA.jpg", infoH1: "Olympia, WA", infoP: "Olympia, Washington used to be the home of Olympia Beer, but now it's owned by Pabst Brewing Company because, you know, everything's a sell out."},
    {name: "Charleston", capitalOf: "WV", picture: "assets/images/WestVirginiaCapitolCharleston.jpg", infoH1: "Charleston, WV", infoP: "Every Valentine's Day, the Grumble Run is hosted in Charleston, West Virginia. It's a 5K race that usually lasts a long time because participants stop often to eat, to smoke, and just in general to grumble."},
    {name: "Madison", capitalOf: "WI", picture: "assets/images/WisconsinCapitolMadisonWI.jpg", infoH1: "Madison, WI", infoP: "A local Madison, Wisconsin rock band, \"The Gomers,\" is so popular that 2 mayors have turned February 1st into \"Gomer Day.\" Mayor Susan Bowman's proclamation mentions multiple compelling reasons, including that \"The Gomers are really good recyclers\"."},
    {name: "Cheyenne", capitalOf: "WY", picture: "assets/images/WyomingCapitolCheyenne.jpg", infoH1: "Cheyenne, WY", infoP: "The world's largest outdoor rodeo is Cheyenne Frontier Days, in Wyoming."},
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
    // creates the hidden word with underscores and space if necessary
    for (j = capitalsArray[i].name.length; j > 0; j--) {
        currentHiddenWord.push("_");
    }
    var space = currentWord.indexOf(" ");
    if (space !== -1) {
        currentHiddenWord.splice(space, 1, "   ");
    }
    var hiddenWordString = currentHiddenWord.join("  ");
    console.log("the hidden word string is " + hiddenWordString);
    console.log("the word is " + currentWord);
    document.getElementById("hidden-word").textContent = hiddenWordString;
    document.getElementById("capital-info-div").className = "card my-3 invisible";
    // hiding instructions and showing the stats and word information cards
    document.getElementById("instructions").className = "card my-5 d-none";
    document.getElementById("stats").className = "card my-5";
    document.getElementById("word-information").className = "card my-5";
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
    // showing instructions, hiding the stats and word information cards
    document.getElementById("instructions").className = "card my-5";
    document.getElementById("stats").className = "card my-5 d-none";
    document.getElementById("word-information").className = "card my-5 d-none";
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

