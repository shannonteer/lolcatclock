var time = new Date().getHours(); 

var noon = 12;
var elevensies = 11;
var lunchtime = 12;
var evening = 18;
var partyTime = 20;
var naptime = lunchtime + 2;
var wakeuptime = 7;

var isPartyTime = false;

var lolcat = document.getElementById('lolcat');
var message = document.getElementById('timeEvent');

var napTimeSelector = document.getElementById('napTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var partyTimeButton = document.getElementById('partyTimeButton');

var updateClock = function() {
  
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skilcrush/wp-content/uploads/2016/08/normalTime.jpg";


  if (time == partyTime) {
        messageText = "Iz Party Time!!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    } else if (time == wakeuptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wakey wakey!";
    } else if (time == lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "Nom Nom Nom Noms!";
    } else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Nap Nap Nappity Nap Time!";
    } else if (time < noon) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Coffee now please, and Good morning!";
    } else if (time > evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Happy Hours anyone?";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Has a happy afternoon!";
}

console.log(messageText); 
message.innerText = messageText;
lolcat.src = image;

showCurrentTime();

};

    var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
   
        //check isPartyTime
   if(isPartyTime === false){ 
       isPartyTime = true;
        // if isPartyTime is false, change it to true 
        //so we know the button has been clicked
       
       time = partyTime; 
       // set time to partyTime so the lolCat clock 
       //image and message update to the partyTime image and message

     partyTimeButton.innerText = "PARTY TIME!";
     partyTimeButton.style.backgroundColor = "#222";

    } else { 
      // if isPartyTime is true, change it to false to end the party
       isPartyTime = false; 
      // set time back to the current time
       time = new Date().getHours(); 
      
      partyTimeButton.innerText = "PARTY OVER!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};
     
var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchtime = lunchTimeSelector.value;
};

var napEvent = function() {
    naptime = napTimeSelector.value;
};

     partyTimeButton.addEventListener('click', partyEvent);
     wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
     lunchTimeSelector.addEventListener('change', lunchEvent);
     napTimeSelector.addEventListener('change', napEvent);