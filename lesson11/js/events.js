const dataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const x = document.getElementById("townname").innerHTML;

fetch(dataURL)
  .then(function (response) {
    return response.json();
  })

.then(function (jsonObject) {

    const towns = jsonObject['towns'];

    const event = towns.filter(d => d.name == x); 

    event.forEach(e =>  {
        
        let a = `${e.events}`.split(",");
        a.forEach(i => {
            let list = i.split(":");
            let when = document.createElement('h5');
            let what = document.createElement('p');
            let div = document.createElement('div');
            when.innerHTML = `${list[0]}`;
            what.innerHTML = `${list[1]}`;
            
            div.append(when);
            div.append(what);

            document.querySelector('div.events').append(div);
        });
  });    
});  