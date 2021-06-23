
// Starts Moment
  var moment = require('moment-timezone');
  
  // Prompt to get the timezone
var prompt = prompt("What timezone") 

// Shows the time in the current timezone

var time = moment().tz(prompt).format();

// Console logs the Time
console.log(time)

// Shows the Current date, and Month
var date = moment().format('dddd'); 
var month = moment().format('MMMM'); 

