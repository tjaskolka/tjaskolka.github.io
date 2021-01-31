//compose date consisting of day, date month year
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = days[new Date().getDay()];
var date = new Date().getDate();
var month = months[new Date().getMonth()];
var year = new Date().getFullYear();
document.getElementById('calendarDate').innerHTML = day + ", " + date + " " + month + " " + year;


//provide current year
document.getElementById('currentyear').innerHTML = year;
