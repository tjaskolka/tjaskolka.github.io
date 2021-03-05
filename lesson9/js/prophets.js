const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {


  const prophets = jsonObject['prophets'];

  prophets.forEach(prophet =>  {
      let card = document.createElement('section');
      
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
    
      h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

      img.setAttribute('src', prophet.imageurl);
      img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`)      

      p1.innerHTML = `Born: ${prophet.birthdate}`;

      p2.innerHTML = `Birthplace: ${prophet.birthplace}`;

      card.append(h2);
      card.append(p1);
      card.append(p2);
      card.append(img);
 
      document.querySelector('div.cards').appendChild(card);
  });  

});