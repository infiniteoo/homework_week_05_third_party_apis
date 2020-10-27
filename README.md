# University of Minnesota Coding Boot Camp - Fall 2020 
## Assignment #05 Third-Party APIs: Work Day Scheduler


### Overview

The focus of this assignment was to build a very simple work day calendar utilizing what we have learned in class so far to achieve the following acceptance criteria:

* When the page loads, display today's date at the top.
* Utilizing third party API moment.js build a work day clock 9a-5p.
* Depending the user's current hour, the time blocks will be color coded depending on if that hour has already happened (grey), has yet to happen (green), or is the hour we are currently in (red).
* The user can click on an hour and input a task to complete via text input.
* The user can then click that hour's save icon and the task's text will be saved into localStorage and persist into window reloads.


### Review of Tasks

Always striving to learn new techniques and integrate them into my code, this week I practiced in the art of building a very simple Map() to store all of the tasks to localStorage. 

Since we're only needing to let the user add one item per hour, it seemed easiest to store all of the data is a Map rather than arrays, since all we'll need to deal with are a key (the hour number as an integer), and the value: the text the user inputted.  Seems to work well and took a lot less code to get there! Thumbs up!

I was also able to start integrating the use of (**this**) to help reduce the overall amount of code.  As learned in the in-class calculator assignment last week, you can put a click listener on a class, and differentiate the user's intent through (**this**), rather than a container listener, with individual if/then statements determining the even.type.match.  That gets clunky quick!  Using (**this**) streamlines this process so much.

I also used my first forEach interator which is so much more elegant than a clunkly constructed classic for-loop.

This project brought more use of jQuery as well, and the use of a third-party API: moment.js.

Moment.js is a powerful set of tools that quickly and easily allow a coder to work with time and date values.  Trying to do what can be accomplished with Moment in one line usually takes a good five or ten.


#### Here are the steps taken to achieve this complete this week's homework project:

* Built initial file system structure and deployed basic blueprint to Github to complete repository construction.
* Sketched out pseudo code logic and transcribed them into the code as comments.
* Created constants with moment.js: currentDate, currentTime, currentHour
* Created timeMap Map() which stores all of the key/value pairs for each hour.
* Iterate through static hours 9am to 5pm and build block, one per hour
* Each block consists of three smaller divs: timeDiv, descriptionDiv & saveDiv.
* Using the Moment constants, we determine if each hour in the calendar happened before, happens after, or is the current hour the user is in.
* Based on the previous calculation, we color each time block's background with either grey (past), green (future), or red (present).
* The timeBlock is then appended to the main container and repeated.
* Finally, we run through the timeMap to display any saved tasks into their appropriate textarea.


After multiple trial and error debugging sessions, all applied logic appears sound and no bugs can be generated from purposeful negligent entries.  From this point, it was time to clean up:

* Refactor reduntant and worthless code.
* Removed multiple, annoying console.log commands used for debugging.
* Double-checked to ensured code was properly formatted and commented before submission.
* Used code validation service.
* Wrote README.MD file.
* Added screenshots to README.
 

### Installation

Installation should be fairly straightforward, but here's a quick guide to get up and running, assuming you have **Visual Studio Code** and **Git** (with the accompanying interface **Git Bash**) installed.

* from your shell input the command: `git clone https://github.com/infiniteoo/homework_week_05_third_party_apis`
* once downloaded, from the working directory in the shell, input the command: `code .`


### Live Example

This project can be previewed live via Github Pages at: https://infiniteoo.github.io/homework_week_05_third_party_apis/

# Screenshots of Deployed Website

## 992px Width 
![screenshot 992px width: intro screen](/img/992_.PNG)
![screenshot 992px width: quiz screen](/img/992_.PNG)
![screenshot 992px width: initials screen](/img/992_.PNG)
![screenshot 992px width: scores screen](/img/992_.PNG)

## 768px Width 
![screenshot 992px width: intro screen](/img/768_.PNG)
![screenshot 992px width: quiz screen](/img/768_.PNG)
![screenshot 992px width: initials screen](/img/768_.PNG)
![screenshot 992px width: scores screen](/img/768_.PNG)

## 400px Width 
![screenshot 992px width: intro screen](/img/400_.PNG)
![screenshot 992px width: quiz screen](/img/400_.PNG)
![screenshot 992px width: initials screen](/img/400_.PNG)


### License

Copyright 2020 T. Dorman, distrubuted under the **GNU Public License** for the Univeristy of Minnesota Part-Time Full Stack Coding Boot Camp.














