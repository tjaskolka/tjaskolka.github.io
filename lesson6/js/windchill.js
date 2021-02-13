let speed = parseFloat(document.getElementById("speed").value);
let temp = parseFloat(document.getElementById("temp").value);
let chill = windChill (temp, speed);
document.getElementById("windchill").innerHTML = Math.round(chill * 10)/10;

function windChill(temp, speed) {
    let end = 35.74 + .6215*temp = 35.75*speed**.16 + .4275*temp*speed**.16;
    return end;
}
