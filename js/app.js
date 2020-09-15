'use strict';

var Seattle = {
    name: 'Seattle',
    minhourlycustomers: 23,
    maxhourlycustomers: 65,
    averagecookiespercustomer: 6.3,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: 0,

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
            this.Total = this.Total + cookiepercus;
            console.log(this.Total);
        }
    },

    render: function () {
        var parentElement = document.getElementById('body-part');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        var li_ele;
        for (var i = 0; i < this.hours.length; i++) {
             li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        li_ele = document.createElement('li');
        ulElement.appendChild(li_ele);
        li_ele.textContent = 'Total : ' + this.Total;
    
},

    //function to sum total of sold cookies

    // totalcookie: function (sum) {
    //     var sum = 0;
    //     for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
    //         sum = sum + this.cookiesSoldPerHour[i];
    //         console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
    //     }
    // },
}


Seattle.cookiesPurshasedPerHour();
Seattle.render();

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
    Total: 0,

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
            this.Total = this.Total + cookiepercus;
            console.log(this.Total);
        }
    },

    render: function () {
        var parentElement = document.getElementById('body-part');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        var li_ele;
        for (var i = 0; i < this.hours.length; i++) {
             li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        li_ele = document.createElement('li');
        ulElement.appendChild(li_ele);
        li_ele.textContent = 'Total : ' + this.Total;
    
},

   
}


Tokyo.cookiesPurshasedPerHour();
Tokyo.render();

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
    Total: 0,

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
            this.Total = this.Total + cookiepercus;
            console.log(this.Total);
        }
    },

    render: function () {
        var parentElement = document.getElementById('body-part');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        var li_ele;
        for (var i = 0; i < this.hours.length; i++) {
             li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        li_ele = document.createElement('li');
        ulElement.appendChild(li_ele);
        li_ele.textContent = 'Total : ' + this.Total;
    
},

}


Dubai.cookiesPurshasedPerHour();
Dubai.render();

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
    Total: 0,

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
            this.Total = this.Total + cookiepercus;
            console.log(this.Total);
        }
    },

    render: function () {
        var parentElement = document.getElementById('body-part');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        var li_ele;
        for (var i = 0; i < this.hours.length; i++) {
             li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        li_ele = document.createElement('li');
        ulElement.appendChild(li_ele);
        li_ele.textContent = 'Total : ' + this.Total;
    
},

}


Paris.cookiesPurshasedPerHour();
Paris.render();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};

var Lima = {
    name: 'Lima',
    minhourlycustomers: 2,
    maxhourlycustomers: 16,
    averagecookiespercustomer: 4.6,
    cookiesSoldPerHour: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    Total: 0,

    // method to get the cookies per customer
    cookiesPurshasedPerHour: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
            console.log(cookiepercus, 'cooke per cus');
            this.cookiesSoldPerHour.push(cookiepercus);
            console.log(this.cookiesSoldPerHour);
            this.Total = this.Total + cookiepercus;
            console.log(this.Total);
        }
    },

    render: function () {
        var parentElement = document.getElementById('body-part');
        var h1 = document.createElement('h1');
        parentElement.appendChild(h1);
        h1.textContent = this.name;

        var ulElement = document.createElement('ul');
        parentElement.appendChild(ulElement);
        var li_ele;
        for (var i = 0; i < this.hours.length; i++) {
             li_ele = document.createElement('li');
            ulElement.appendChild(li_ele);
            li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
        }
        li_ele = document.createElement('li');
        ulElement.appendChild(li_ele);
        li_ele.textContent = 'Total : ' + this.Total;
    
},

}


Lima.cookiesPurshasedPerHour();
Lima.render();

// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;

};



// Creating constructor function for multiple objects

// Global variables

var location = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function shopLocations(name, minhourlycustomers, maxhourlycustomers, averagecookiespercustomer) {
    this.name = name;
    this.minhourlycustomers = minhourlycustomers;
    this.maxhourlycustomers = maxhourlycustomers;
    this.averagecookiespercustomer = averagecookiespercustomer;
    this.cookiesSoldPerHour = [];
    this.Total = [];
    location.push(this);
}
// Methods
// method to get the cookies per customer

shopLocations.prototype.cookiesPurshasedPerHour = function () {
    for (var i = 0; i < this.hours.length; i++) {
        var cookiepercus = Math.floor(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
        console.log(cookiepercus, 'cooke per cus');
        this.cookiesSoldPerHour.push(cookiepercus);
        console.log(this.cookiesSoldPerHour);

    }

}
shopLocations.prototype.render = function () {
    var table = document.createElement('table');
    for (var i=0; i<6; i++){
        var row = document.createElement('tr');
        table.appendChild(tr);
        for( var x=0; x<15; x++){
            var column = document.createElement('td');
            row.appendChild(column);
        }
    }













// }
// //render: function () {
// //         var parentElement = document.getElementById('header');
// //         var h1 = document.createElement('h1');
// //         parentElement.appendChild(h1);
// //         h1.textContent = this.name;

// //         var parentElement2 = document.getElementById('main');
// //         var ulElement = document.createElement('ul');
// //         parentElement2.appendChild(ulElement);
// //         for (var i = 0; i < this.hours.length; i++) {
// //             var li_ele = document.createElement('li');
// //             ulElement.appendChild(li_ele);
// //             li_ele.textContent = this.hours[i] + ':' + "   " + this.cookiesSoldPerHour[i] + ' cookies';
// //         }
// //         var total = document.createElement('Total');
// //         ulElement.appendChild(total);
// //         total.textContent = 'Total : ' + this.Total;


// // function to sum total of sold cookies

// //     totalcookie: function () {
// //         var sum = 0;
// //         for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
// //             sum = sum + this.cookiesSoldPerHour[i];
// //             console.log(sum, ' is the total number of sold cookies from 6am - 8pm');
// //         }
// //         this.Total.push(sum);
// //         console.log(this.Total);
// //     },

//function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;
};
}
