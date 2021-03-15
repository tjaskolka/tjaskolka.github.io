const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function createCard(towns, townname) {
    const town3 = towns.filter(d => d.name == townname);

  town3.forEach(town =>  {
      let card = document.createElement('section');
      card.classList.add('towncard');
      
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

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const towns = jsonObject['towns'];
    createCard(towns, "Preston");
    createCard(towns, "Soda Springs");
    createCard(towns, "Fish Haven");
  
  });  

