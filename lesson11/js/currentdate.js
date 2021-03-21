//compose date consisting of day, date month year
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = days[new Date().getDay()];
var date = new Date().getDate();
var month = months[new Date().getMonth()];
var year = new Date().getFullYear();
document.getElementById('calendarDate').innerHTML = day + ", " + date + " " + month + " " + year;


//provide current year
document.getElementById('currentyear').innerHTML = year;

//test for Friday to show announcement
if (day === "Friday") {
    document.getElementById("announcement").style.display = "block";
}
