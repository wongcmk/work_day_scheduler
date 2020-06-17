/////
// variables
/////


// calling in moment to be used in several places
const m = moment();

// variables for on save button click 
var words;
var hourInfo;

// variables for color coding


/////
// display 
/////


// Near the top of the calendar, the application should display the current day.
// moment(specific format that we desire)
// grab local date of the users machine, and spit it out in the
// format that we desire
console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));




/////
// functions
/////


// each hour should be color coded to reflect whether the time slot is in the past, the present, 
// or the future. This will change depending on the time of day.
// * App is aware of what time it is
// * if line is current hour it is green and the line after it is purple
// * else it is a light lavendar

// if that knows what the current time is and highlights the current hour
// if current hour, else if current hour +1, else past hour color
// is ran on each page refresh and each save?

// THIS FUNCTION IS NOT WORKING THE WAY I THOUGHT IT WOULD
// ADDITIONALLY IT NEEDS TO BE CALLED ON DOCUMENT LOAD AND
// ALSO BE AVAILABLE TO BE CALLED ON SAVE

$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var realTime = moment().hours();
    // console.log("Time test" + timeTest);
    console.log("Current Time" + realTime);
    
    //for each of the hours unique positions apply below
    // right now it's applying to all
    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        console.log(timeTest);
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// var saveWords = JSON.parse(localStorage.getItem("9 am"));
// $("#nineAm").val("");
// $("#nineAm").val(saveWords);
// dummy function that then is called by the first dummy function 
// and prints the localStorage
// informaiton to the page

// function that listen for clicks, knows which row the button is connected
// to, and then runs the dummy function to save the information
// dummy function that allows us to save that row to localStorag
// happens on click of any .saveBtn
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    renderText ();
})

// FUNCTION SAVEWORDS
// Need to change these into a dummy function that refreshes each 
// slot with it's currently stored information

// couldn't for the life of me wrap my head around how to make this
// a dummy function :(
function renderText () {
    var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveWords9);
    
    var saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveWords10);
    
    var saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveWords11);
    
    var saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveWords12);
    
    var saveWords1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveWords1);

    var saveWords2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveWords2);

    var saveWords3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveWords3);

    var saveWords4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveWords4);

    var saveWords5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveWords5);
}