const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const towns = jsonObject['towns'];

  const town3 = towns.filter(d => d.name == 'Fish Haven' || d.name == 'Preston');

  town3.forEach(town =>  {
      let card = document.createElement('section');
      
      let h2 = document.createElement('h2');
  /*    let img = document.createElement('img');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
    */
      h2.innerHTML = `${town.name}`;
/*
      img.setAttribute('src', `/images/${town.name}`);
      img.setAttribute('alt', `town photo`)      

      p1.innerHTML = `Year Founded: ${town.yearFounded}`;

      p2.innerHTML = `Population: ${town.durrentPopulation}`;
*/
      card.append(h2);
  /*    card.append(p1);
      card.append(p2);
      card.append(img);
 */
      document.querySelector('div.towns').appendChild(card);
  });  

});