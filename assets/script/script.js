
// Generate target number between 19 & 120
// var targetNum = parseInt(Math.floor((Math.random() * (120 - 19)) + 19));

// Array to hold values for buttons
var buttonValue;

// Users guess value
var guessValue = 0;

// Total (eventally incrementing) value of user' guesses
var guessTotal = 0;

var startAgain;
var getButtonValue;
var targetNum;
var buttonWrite;

startAgain();

//Function to reset based on load/win/loss
function startAgain() {
    guessTotal = 0;
    buttonValue = [];
    $("#crystal-img-buttons").empty();
    getTargetNum();
    getButtonValue();
    buttonWrite();
    $("#targetNumber").text(targetNum);
    $("#userGuessTotal").text(guessTotal);
};

function getTargetNum() {
    targetNum = parseInt(Math.floor((Math.random() * (120 - 19)) + 19));
};

// Calculate button values while ensuring no duplicate values are
// written to the buttonValue array
function getButtonValue() {
    for (i = 0; buttonValue.length < 4; i++) {
        var j = Math.floor((Math.random() * 12) + 1);
        if (!buttonValue.includes(j)) {
            buttonValue.push(j);
        };
        console.log(j);
    }
};

function buttonWrite() {
    console.log(buttonValue);
    // Depenedent on number of strings in buttonValue array...
    for (k = 0; k < buttonValue.length; k++) {
        // ... make an image div
        var buttonImage = $("<img>");
        // include CSS class for size, hover & click states...
        buttonImage.addClass("button-stuff");
        // use this image...
        buttonImage.attr("src", "assets/images/bluerupee.png");
        // and give it this attribute (will add specific value later...somehow)
        buttonImage.attr("integer-buttonValue", buttonValue[k]);
        // Add image to DOM in proper div
        $("#crystal-img-buttons").append(buttonImage);
        // Rejoice at jQuery awesomeness (optional but highly encouraged)!
    };
};

$(document).on("click", ".button-stuff", function () {
    var guessValue = ($(this).attr("integer-buttonValue"));
    // var guessValue is integer from button value
    console.log(guessValue);
    guessValue = parseInt(guessValue);
    // add value of clicked button to total
    guessTotal += guessValue;
    //write new total to DOM (alerts suck)
    $("#userGuessTotal").text(guessTotal);
    //if total is equal target number then win
    if (guessTotal === targetNum) {
        alert("Win");
        startAgain();
    }
    //if over, lose
    else if (guessTotal >= targetNum) {
        alert("Try Again");
        startAgain();
    }
});

