const requestFile = 'json/calendar.json';

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const calendar = jsonObject['events'];

 // const events = calendar.filter(d => d.date.valueOf() >= new Date().valueOf());

console.log(calendar);

for (let i = 0; i < 5; i++) {
  if (calendar.date.valueOf() >= new Date().valueOf()) {
    
    window['p'+i] = document.createElement('p');
    
  }
};
/*
  calendar.forEach(event =>  {
      let p1 = document.createElement('p');
      p1.innerHTML = `Year Founded: ${town.yearFounded}`;

      p2.innerHTML = `Population: ${town.durrentPopulation}`;

      list.append(h2);
    card.append(p1);
      card.append(p2);
      card.append(img);

      document.querySelector('div.towns').appendChild(card);
  });  
*/
});