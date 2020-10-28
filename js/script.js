// grab the current date and display it on the top, using Moment.js 
const currentDate = moment().format('dddd MMMM Do, YYYY');
const currentTime = moment().format('hh:mm:ss a');
const currentHour = moment().format('HH');
let amPM = "AM";
let finalHour = "";
let timeMap = new Map();

$('#currentDay').text(currentDate);


// load any saved data from localStorage into the timeMap Map

if (localStorage.getItem("myMap")) {
    timeMap = new Map(JSON.parse(localStorage.myMap));

} else {
    let timeMap = new Map();
}


// build timeblock divs, one for each hour between 9am and 5pm
for (let hour = 9; hour < 18; hour++) {

    // this div will hold the 3 smaller divs: time, descrip & save
    let timeBlock = $('<div>');

    // 1st column: hour - format time from 24 to 12 HR & create div

    if (hour < 12) {
        amPM = "AM";
    } else {
        amPM = "PM";
    }

    let timeDiv = $('<div>');
    if (hour > 12) {
        finalHour = hour - 12;
    } else {
        finalHour = hour;
    }

    if (finalHour < 10) {
        // this helps formatting the time column to make them even
        finalHour = "  " + finalHour;
    }

    timeDiv.text(finalHour + amPM);
    timeDiv.addClass('time-div');

    // 2nd column: events (big/wide)
    let descriptionDiv = $("<div>");
    let textAreaForDiv = $("<textarea>");
    textAreaForDiv.attr('id', 'textarea' + hour);

    descriptionDiv.append(textAreaForDiv);
    descriptionDiv.addClass("description");
    descriptionDiv.css("width", "80%");
   


    // creates floppy disk icon for save button
    let saveIcon = $('<i>');
    saveIcon.addClass("fa fa-save");

    // 3rd column: save button 
    let saveDiv = $("<div>");
    saveDiv.addClass("saveBtn ");
    saveDiv.attr('id', hour);
 

    // add icon to save button
    saveDiv.append(saveIcon);

    // append all three individual blocks to the bigger div
    timeBlock.append(timeDiv, descriptionDiv, saveDiv);

    timeBlock.addClass("time-block row");

    if (currentHour > hour) {

        // if the hour has passed, make the background grey
        timeBlock.addClass("past");

    } else if (currentHour < hour) {

        // if the hour happens in the future, make the background green
        timeBlock.addClass("future");
        textAreaForDiv.attr("placeholder", "Enter a task to complete this hour...");

    } else {

        // make the background red
        timeBlock.addClass("present");
        textAreaForDiv.attr("placeholder", "Enter a task to complete this hour...");
    }

    // add completed time block to the main container 
    $("#main-contain").append(timeBlock);



}



timeMap.forEach(function (text, key) {

    // load anything saved in localStorage onto the calendar

    let textAreaVar = "#textarea" + key;
    document.querySelector(textAreaVar).value = text;

});



// when the user clicks the save button on that hour it will be written to memory and persist with window reloads
$(".saveBtn").on('click', function () {

    let textAreaVar = "#textarea" + (this.id);


    // write to the daily timeMap Map
    timeMap.set((this.id), document.querySelector(textAreaVar).value);

    // write the Map to storage  
    localStorage.myMap = JSON.stringify(Array.from(timeMap.entries()));


});

