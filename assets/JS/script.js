$(document).ready(function(){

// SETUP VARIABLES
//==========================================
var authKey = "N28xiqV40WuGfKE0cSITDuibMbKogzMo";
var apiURLBase = "https://api.giphy.com/v1/gifs/search?api_key=" + authKey + "&limit=10&offset=0&rating=PG-13" + "&q=" + userAddTerm;

var stillURL = "";
var animURL = "";

var isStill = true;

// array of initial values/emotions to be displayed
var emotions = ["tired", "confused", "mind blown", "hungry", "frustrated", "relaxed", "sassy", "suspicious"];
var addedEmotions = [];

// user input to add to buttons/array
var userAddTerm = "";




// FUNCTIONS
//==========================================

//display buttons
function displayButtons() {
    clear();
    for (var j = 0; j < addedEmotions.length; j++) {
        //create button for each array item
        var btnVal = addedEmotions[j];
        // var button = '<button class="btn btn-info btn-sm my-btn-margin">' + btnVal + '</button>';
        var newBtn = $("<button>").text(btnVal).attr("class", "btn btn-info btn-sm my-btn-margin my-emotion").attr("value", btnVal);

        $("#buttonsDiv").append(newBtn);
        // console.log(btnVal);
    }

}


// AJAX call function & display GIFs
function getGIFs(){
    
}

//empty the buttons div and rewite the buttons to the Dom with the user added button
function clear() {
    $("#buttonsDiv").empty();
    for (var i = 0; i < emotions.length; i++) {
        //create button for each array item
        var btnVal = emotions[i];
        // var button = '<button class="btn btn-info btn-sm my-btn-margin">' + btnVal + '</button>';
        var newBtn = $("<button>").text(btnVal).attr("class", "btn btn-info btn-sm my-btn-margin my-emotion").attr("value", btnVal);

        $("#buttonsDiv").append(newBtn);
        // console.log(btnVal);
    }  
}


// MAIN PROCESS
//==========================================

// show the initial buttons
clear();

// on.click event for the buttons up top - call the Giphy API and return 10 GIFs to the DOM

$(this).on("click", function(){


})


// on.click event that adds another button
$("#userInputBtn").on("click", function() {
    // this should block an empty button to be displayed if the user clicks it without adding any text
    //not working for some reason - still allows empty buttons to be added....boooo
    // event.preventDefault();

    userAddTerm = $("#addInput").val().trim();
    // push the user added input to addedEmotions array
    addedEmotions.push(userAddTerm);
    console.log(userAddTerm);
// trigger the displayButtons functions to write all buttons to DOM
    displayButtons();
})










}) //this closes the document.ready function