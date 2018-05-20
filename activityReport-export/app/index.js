/* Entry point for the watch app */
console.log("App Started!");
import document from "document";

/* Retrieve heart rate */
import { HeartRateSensor } from "heart-rate";
var hrm = new HeartRateSensor();

/* Retrieve metabolic rate*/

/* Retreve meal*/

// Customize progress bar:
var prog = 0.3; //Use GET request
var percentage = document.getElementById("progress_dynamic");
percentage.width = prog * 250;

// Customize progress percentage label:
// var percLab = document.getElementById("lab_dynamic");
// console.log(percLab.value);
// percLab.value = 100*prog + "%";
// console.log(percLab.value);
// document.getElementById("lab_dynamic").innerHTML = 100*prog + "%";

var hrText = document.getElementById("heartrate");
hrText.text += hrm.heartRate;
console.log(hrText.text)
