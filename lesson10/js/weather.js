

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=aee2c79ef21500c6b3d3a695fdea645a";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const temp = Math.round((1.8*(jsObject.main.temp - 273) + 32)*10/10);
        document.getElementById('temp').textContent = temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('speed').textContent = jsObject.wind.speed;
        document.getElementById('humid').textContent = jsObject.main.humidity;


    });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=aee2c79ef21500c6b3d3a695fdea645a";

function createCard(fiveDay) {  
    const forecast = fiveDay.filter(d => d.name == );

  town3.forEach(town =>  {
      let card = document.createElement('section');
      
      let h2 = document.createElement('h2');
      let motto = document.createElement('h4');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let img = document.createElement('img');
      let div = document.createElement('div');
    
      h2.innerHTML = `${town.name}`;
      motto.innerHTML = `${town.motto}`;
      founded.innerHTML = `${town.yearFounded}`;
      population.innerHTML = `${town.currentPopulation}`;
      rainfall.innerHTML = `Annual Rain Fall: ${town.averageRainfall}"`;

      img.setAttribute('src', `images/${town.photo}`);
      img.setAttribute('alt', `${town.name} town photo`);      

      founded.innerHTML = `Year Founded: ${town.yearFounded}`;

      population.innerHTML = `Population: ${town.currentPopulation}`;

      div.append(h2);
      div.append(motto);
      div.append(founded);
      div.append(population);
      div.append(rainfall);
      card.append(img);
      card.append(div);

      document.querySelector('div.towns').appendChild(card);
});
};

fetch(forecastURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const fiveDay = jsonObject['list'];
    createCard(fiveDay);
 //   createCard(towns, "Soda Springs");
 //   createCard(towns, "Fish Haven");
  
  });  