/* Section 3a (David): Initialize Dictionary */
var dict = {"HeartRate" : null,
            "MetabolicRate" : null,
            "Stride": null};

let document = require("document");
import { HeartRateSensor } from "heart-rate";

// Fetch UI elements we will need to change
let hrLabel = document.getElementById("hrm");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();

// Initialize the UI with some values
hrLabel.text = "--";
updatedLabel.text = "...";

// This function takes a number of milliseconds and returns a string
// such as "5min ago".
function convertMsAgoToString(millisecondsAgo) {
  if (millisecondsAgo < 120*1000) {
    return Math.round(millisecondsAgo / 1000) + "s ago";
  }
  else if (millisecondsAgo < 60*60*1000) {
    return Math.round(millisecondsAgo / (60*1000)) + "min ago";
  }
  else {
    return Math.round(millisecondsAgo / (60*60*1000)) + "h ago"
  }
}

// This function updates the label on the display that shows when data was last updated.
function updateDisplay() {
  if (lastValueTimestamp !== undefined) {
    updatedLabel.text = convertMsAgoToString(Date.now() - lastValueTimestamp);
  }
}

// Create a new instance of the HeartRateSensor object
var hrm = new HeartRateSensor();
// Declare a even handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  // Peek the current sensor values
  hrLabel.text = hrm.heartRate;
  lastValueTimestamp = Date.now();
  
  console.log("Heart rate:", hrm.heartRate);
  dict["HeartRate"] =  hrm.heartRate;
}
// Begin monitoring the sensor
hrm.start();
// And update the display every second
setInterval(updateDisplay, 1000);

console.log("Heart rate:", hrm.heartRate);


/* Section 2 (David): Retrieve values */
// console.log("Heart rate (outside):", hrm.heartRate.toString() );

/* Section 3a (David): Export*/
// var dict = {"HeartRate" : [hrm.heartRate.toString()],
//             "Placeholder" : [0]};
var dict2string = JSON.stringify(dict);
console.log(dict2string);

/* Section 4 (David & Derrick): Export*/

