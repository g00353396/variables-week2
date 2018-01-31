// Create variables to hold the name and note text 
var username;
var message;

//Asign values to these variables
username = 'Yong Tze Ng';
message = "Hey " + username + ' see our upcoming range';

// Get the element with an id of name .
var elName = document.getElementById('name');
elName.textContent = username;

//Get the element with an id of note
var elNote = document.getElementById('note');
elNote.textContent = message;
