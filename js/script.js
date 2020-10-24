// grab the current date and display it on the top, using Moment.js 
const currentDate = moment().format('dddd MMMM Do, YYYY');
const currentTime = moment().format('hh:mm:ss a');
let amPM = "AM";


$('#currentDay').text(currentDate);




// build timeblock divs, one for each hour between 9am and 5pm

for (let hour = 9; hour < 18; hour++) {


    // 1st column: hour

    if (hour < 12) {
        amPM = "AM";
    } else {
        amPM = "PM";
    }

    let timeBlock = $('<div>');

    let timeDiv = $('<div>');
    if (hour > 12) {
        finalHour = hour - 12;
    } else {
        finalHour = hour;
    }
    timeDiv.text(finalHour + amPM);



    // 2nd column: events (big/wide)

    let descriptionDiv = $("<div>");
    let textAreaForDiv = $("<textarea>");
    descriptionDiv.append(textAreaForDiv);
    descriptionDiv.addClass("description");



    // 3rd column: save icon

    let saveDiv = $("<div>");
    saveDiv.addClass("saveBtn ");
    saveDiv.css("font-size", "24px");




    timeBlock.append(timeDiv, descriptionDiv, saveDiv);
    timeBlock.addClass("time-block row");

    // if the hour was before the current hour, make the background grey

    if(currentTime > hour){
        timeBlock.addClass("past");
    } else if( currentTime < hour){
        timeBlock.addClass("future");
    } else {
        timeBlock.addClass("present");
    }


    $("#main-contain").append(timeBlock);



}










// if the hour happens after the current hour, make the background green
// if the hour is the same hour as the current hour, make the background red


// add eventlisteners for each block so they can be editable to add an event in that hour

// when the user clicks the save button on that hour it will be written to memory and persist with window reloads
