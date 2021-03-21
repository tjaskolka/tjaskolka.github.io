const requestFile = 'json/calendar.json';

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {

  const calendar = jsonObject['events'];

  calendar.sort(function(m,n){
    return new Date(m.date) - new Date(n.date);
  })

var i = 0;
var count = 0;
let listevents = '';
while (count < 4) {
  let date = new Date(calendar[i].date)
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

if (date >= new Date()) {
let event = (new Date(calendar[i].date).getDate() + ' ' +
      months[new Date(calendar[i].date).getMonth()] + ': ' + calendar[i].event);
      listevents += '<p>' + event + '</p>' ;
      console.log(listevents);

      count++;
  }
  document.getElementById('eventlist').innerHTML = listevents;
i++;

};


});