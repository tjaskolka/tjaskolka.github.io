
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var week = days.slice(0);
var count = new Date().getDay();
for (i = 0 ; i < count; i++) {
    week.push(week.shift());
}

let div1 = document.getElementById('day1');
let p1 = document.createElement('p');
p1.innerHTML = week[1];
div1.appendChild(p1);
let div2 = document.getElementById('day2');
let p2 = document.createElement('p');
p2.innerHTML = week[2];
div2.appendChild(p2);
let div3 = document.getElementById('day3');
let p3 = document.createElement('p');
p3.innerHTML = week[3];
div3.appendChild(p3);
let div4 = document.getElementById('day4');
let p4 = document.createElement('p');
p4.innerHTML = week[4];
div4.appendChild(p4);
let div5 = document.getElementById('day5');
let p5 = document.createElement('p');
p5.innerHTML = week[5];
div5.appendChild(p5);