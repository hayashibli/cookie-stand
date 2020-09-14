'use strict';

var Seattle = {
    name: 'Seattle',
    minhourlycustomers: 23,
    maxhourlycustomers: 65,
    averagecookiespercustomer: 6.3,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: [],

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
        }
    },

    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var parentElement2 = document.getElementById('main');
        var ulElement = document.createElement('ul');
        parentElement2.appendChild(ulElement);
        for (var i = 0; i < this.hours.length; i++) {
            var li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        var total = document.createElement('Total');
        ulElement.appendChild(total);
        total.textContent = 'Total : ' + this.Total;

    },

    // function to sum total of sold cookies

    totalcookie: function () {
        var sum = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
            sum = sum + this.cookiesSoldPerHour[i];
            console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
        }
        this.Total.push(sum);
        console.log(this.Total);
    },
}

Seattle.cookiesPurshasedPerHour();
Seattle.render();
Seattle.totalcookie();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};



var Tokyo = {
    name: 'Tokyo',
    minhourlycustomers: 3,
    maxhourlycustomers: 24,
    averagecookiespercustomer: 1.2,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: [],

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
        }
    },

    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var parentElement2 = document.getElementById('main');
        var ulElement = document.createElement('ul');
        parentElement2.appendChild(ulElement);
        for (var i = 0; i < this.hours.length; i++) {
            var li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        var total = document.createElement('Total');
        ulElement.appendChild(total);
        total.textContent = 'Total : ' + this.Total;

    },

    // function to sum total of sold cookies

    totalcookie: function () {
        var sum = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
            sum = sum + this.cookiesSoldPerHour[i];
            console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
        }
        this.Total.push(sum);
        console.log(this.Total);
    },
}

Tokyo.cookiesPurshasedPerHour();
Tokyo.render();
Tokyo.totalcookie();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};

var Dubai = {
    name: 'Dubai',
    minhourlycustomers: 11,
    maxhourlycustomers: 38,
    averagecookiespercustomer: 3.7,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: [],

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
        }
    },

    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var parentElement2 = document.getElementById('main');
        var ulElement = document.createElement('ul');
        parentElement2.appendChild(ulElement);
        for (var i = 0; i < this.hours.length; i++) {
            var li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        var total = document.createElement('Total');
        ulElement.appendChild(total);
        total.textContent = 'Total : ' + this.Total;

    },

    // function to sum total of sold cookies

    totalcookie: function () {
        var sum = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
            sum = sum + this.cookiesSoldPerHour[i];
            console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
        }
        this.Total.push(sum);
        console.log(this.Total);
    },
}

Dubai.cookiesPurshasedPerHour();
Dubai.render();
Dubai.totalcookie();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};
var Paris = {
    name: 'Paris',
    minhourlycustomers: 20,
    maxhourlycustomers: 38,
    averagecookiespercustomer: 2.3,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: [],

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
        }
    },

    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var parentElement2 = document.getElementById('main');
        var ulElement = document.createElement('ul');
        parentElement2.appendChild(ulElement);
        for (var i = 0; i < this.hours.length; i++) {
            var li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        var total = document.createElement('Total');
        ulElement.appendChild(total);
        total.textContent = 'Total : ' + this.Total;

    },

    // function to sum total of sold cookies

    totalcookie: function () {
        var sum = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
            sum = sum + this.cookiesSoldPerHour[i];
            console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
        }
        this.Total.push(sum);
        console.log(this.Total);
    },
}

Paris.cookiesPurshasedPerHour();
Paris.render();
Paris.totalcookie();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};

var Lima = {
    name: 'Lima',
    minhourlycustomers: 20,
    maxhourlycustomers: 38,
    averagecookiespercustomer: 2.3,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: [],

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
        }
    },

    render: function () {
        var parentElement = document.getElementById('header');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var parentElement2 = document.getElementById('main');
        var ulElement = document.createElement('ul');
        parentElement2.appendChild(ulElement);
        for (var i = 0; i < this.hours.length; i++) {
            var li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        var total = document.createElement('Total');
        ulElement.appendChild(total);
        total.textContent = 'Total : ' + this.Total;

    },

    // function to sum total of sold cookies

    totalcookie: function () {
        var sum = 0;
        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
            sum = sum + this.cookiesSoldPerHour[i];
            console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
        }
        this.Total.push(sum);
        console.log(this.Total);
    },
}

Lima.cookiesPurshasedPerHour();
Lima.render();
Lima.totalcookie();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};


