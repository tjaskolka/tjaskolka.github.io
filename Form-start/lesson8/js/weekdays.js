
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
