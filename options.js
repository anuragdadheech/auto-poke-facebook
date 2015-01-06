"use strict";
/*global chrome*/ 
// Saves options to chrome.storage
var state;
function save_options() {

	state = document.getElementById("state").checked;
		chrome.storage.sync.set({
		state: state
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById("button-state");
		if (state === true) {
			status.textContent = "Enabled";
		}
		else if (state === false) {
			status.textContent = "Disabled";
		}
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = "red" and likesColor = true.
	chrome.storage.sync.get({
	state: true
	}, function(items) {
		document.getElementById("state").checked = items.state;
		var status = document.getElementById("button-state");
		if (items.state === true) {
			status.textContent = "Enabled";
		}
		else if (items.state === false) {
			status.textContent = "Disabled";
		}
	});
}

document.addEventListener("DOMContentLoaded", restore_options);
var switchButton = document.getElementsByClassName("switch")[0];
switchButton.addEventListener("click",
    save_options);