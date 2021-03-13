

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=aee2c79ef21500c6b3d3a695fdea645a";

function convert(kelvin) {
        let fahrenheit = Math.round((1.8*(kelvin - 273) + 32)*10/10);
        return fahrenheit;
      }

      fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

     

        //const temp = Math.round((1.8*(jsObject.main.temp - 273) + 32)*10/10);
        const temp = convert(jsObject.main.temp);
        document.getElementById('temp').textContent = temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humid').textContent = jsObject.main.humidity;


    });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=aee2c79ef21500c6b3d3a695fdea645a";

function createCard(fiveDay) {  
    const forecast = fiveDay.filter(d => d.dt_txt.includes("18:00:00")  );
console.log(forecast);
  forecast.forEach(day =>  {
      let i = 1;
    let card = document.createElement('div');

    //return weather icon
    let img = document.createElement('img');
    let imgsrc = "https://openweathermap.org/img/w/" + `${day.weather[0].icon}` + ".png";
    img.setAttribute('src', imgsrc);
    card.append(img);

    //return temperature
    let temp = document.createElement('p');
    temp.innerHTML = convert(`${day.main.temp}`)+'$#8457;';
    card.append(temp);

    //return weather condition
    let h4 = document.createElement('h4');
    h4.innerHTML = `${day.weather[0].main}`;
    card.append(h4);


    
    
    document.querySelector('section.forecast').append(card);



      i++;

});
};

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const fiveDay = jsonObject['list'];
    createCard(fiveDay);
  
  });  