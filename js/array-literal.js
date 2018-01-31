// Create an array and assign it values
var colors = new Array('white','black','red');
colors.push("purple");
var days = new Array('Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");



// Show the first item from the array
var el = document.getElementById('colors');
el.textContent = colors[3];
var d = document.getElementById('days');
d.textContent = days[2];
