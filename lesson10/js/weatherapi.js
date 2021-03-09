

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=aee2c79ef21500c6b3d3a695fdea645a">

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    });