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

if (day === "Friday") {
    document.getElementById("announcement").style.display = "block";
}

var week = days.slice(0);
var count = new Date().getDay();
for (i = 0 ; i < count; i++) {
    week.push(week.shift());
}

document.getElementById('day1').innerHTML = week[0];
document.getElementById('day2').innerHTML = week[1];
document.getElementById('day3').innerHTML = week[2];
document.getElementById('day4').innerHTML = week[3];
document.getElementById('day5').innerHTML = week[4];

