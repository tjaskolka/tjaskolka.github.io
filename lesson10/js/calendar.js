const requestFile = 'json/calendar.json';

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const calendar = jsonObject['events'];

for (let i = 0; i < 5; i++) {
  let date = new Date(calendar[i].date)
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (date >= new Date()) {
console.log(new Date(calendar[i].date).getDate() + ' ' +
      months[new Date(calendar[i].date).getMonth()] + ': ' + calendar[i].event);
  }
 // console.log(events);
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