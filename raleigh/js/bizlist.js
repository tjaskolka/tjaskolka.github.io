const requestURL = 'json/business.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {

        const listings = jsonObject['business'];

        listings.forEach(biz => {
            let card = document.createElement('li');
            card.setAttribute('class','item');

            let logo = document.createElement('img');
            logo.setAttribute('src', `${biz.logo}`);
            logo.setAttribute('alt', `${biz.logodesc}`);

            let name = document.createElement('a');
            name.setAttribute('href', `${biz.url}`);
            name.innerHTML = `${biz.name}`;

            let add1 = document.createElement('p');
            add1.innerHTML = `${biz.address1}`;

            let add2 = document.createElement('p');
            add2.innerHTML = `${biz.address2}`;

            let phone = document.createElement('p');
            phone.innerHTML = `${biz.phone}`;

            let email = document.createElement('p');
            email.innerHTML = `${biz.email}`;

            card.append(logo);
            card.append(name);
            card.append(add1);
            card.append(add2);
            card.append(phone);
            card.append(email);

            document.querySelector('ul.listing').appendChild(card);

            

        });
    });