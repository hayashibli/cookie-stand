'use strict';

var Location1 = {
    name: 'Seattle',
    minhourlycustomers: 23,
    maxhourlycustomers: 65,
    averagecookiespercustomer: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    cookiesSoldPerHour: [],

    randomnumberofcustomersperhour: function () {
        var random = Math.random();
        random = Math.floor(random);
        random = random * (this.maxhourlycustomers - this.minhourlycustomers + 1) + this.minhourlycustomers;
        console.log(random);
        return random;
    },
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            this.cookiesPurshasedPerHour = (this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer;
            console.log(this.cookiesPurshasedPerHour);
            return this.cookiesPurshasedPerHour;

        }
        cookiesSoldPerHour.push(this.cookiesPurshasedPerHour);
        console.log(cookiesSoldPerHour);
    },
    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;
        var parentElement2 = document.getElementById('main');
        var ul = document.createElement('ul');
        parentElement2.appendChild(ul);
         for (var i = 0; i < this.hours[i]; i++) {
            var li = document.createElement('li');
            ul.appendChild(li); 
            li.textContent = this.hours[i] + this.cookiesPurshasedPerHour;
        }
    },
}

Location1.randomnumberofcustomersperhour();
Location1.cookiesPurshasedPerHour();
Location1.render();


