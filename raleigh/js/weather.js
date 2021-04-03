const weatherCall =
  "https://api.openweathermap.org/data/2.5/onecall?lat=35.850148&lon=-78.658447&exclude=minutely,hourly&appid=aee2c79ef21500c6b3d3a695fdea645a&units=imperial";

fetch(weatherCall)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const startalert = new Date(jsObject.alerts[0].start * 1000);
    const endalert = new Date(jsObject.alerts[0].end * 1000);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function postAlerts(alerts) {
    
  
let i = 0;
alerts.forEach(alert => {

    let div = document.getElementById('alert');

    let event = document.createElement('p');
    event.innerHTML = `${alert.event}`;

    let desc = document.createElement('p');
    desc.innerHTML = `${alert.description}`;

    div.appendChild(event);
    div.appendChild(desc);

});
};

const alerts = jsObject['alerts'];
    postAlerts(alerts);

    document.getElementById("currentTemp").textContent = Math.round(
      jsObject.current.temp
    );
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      jsObject.current.weather[0].icon +
      ".png";
    const desc = jsObject.current.weather[0].description;
    document.getElementById("currentCond").setAttribute("src", imagesrc);
    document.getElementById("currentCond").setAttribute("alt", desc);
    document.getElementById("condition").textContent =
      jsObject.current.weather[0].main;
    document.getElementById("humidity").textContent = jsObject.current.humidity;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 1; i < 4; i++) {
      let div = document.getElementById("day" + i);

      let day = document.createElement("p");
      day.innerHTML = days[i];

      let img = document.createElement("img");
      img.src =
        "https://openweathermap.org/img/w/" +
        jsObject.daily[i].weather[0].icon +
        ".png";
      img.alt = jsObject.daily[i].weather[0].description;

      let temp = document.createElement("p");
      temp.innerHTML = Math.round(jsObject.daily[i].temp.day) + "\u00B0F";

      let h4 = document.createElement("h4");
      h4.innerHTML = jsObject.daily[i].weather[0].main;

      div.appendChild(day);
      div.appendChild(temp);
      div.appendChild(img);
      div.appendChild(h4);
    }
  });

  
