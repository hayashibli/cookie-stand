'use strict';
// console.log('js is working');

// // Creating constructor function for multiple objects

// // Global variables


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var hoursTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var parentElement = document.getElementById('body-part');
var table = document.createElement('table');
parentElement.appendChild(table);

// create table header
function rowHeader() {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var th = document.createElement('th');
    tr.appendChild(th);
    for (var i = 0; i < hours.length; i++) {
        var th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours[i];
    }
    var th = document.createElement('th');
    th.textContent = 'Daily Location Total';
    tr.appendChild(th);
    table.appendChild(tr);
}
rowHeader();


var theLocation = [];

// constructor function
function ShopLocations(name, minhourlycustomers, maxhourlycustomers, averagecookiespercustomer) {
    this.name = name;
    this.minhourlycustomers = minhourlycustomers;
    this.maxhourlycustomers = maxhourlycustomers;
    this.averagecookiespercustomer = averagecookiespercustomer;
    this.cookiesSoldPerHour = [];
    this.Total = 0;
    theLocation.push(this);
}
var totalOfTotal = 0;

// Methods
// method to get the cookies per customer

ShopLocations.prototype.cookiesPurshasedPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        var cookiepercus = Math.ceil(randomnumberofcustomersperhour(this.minhourlycustomers, this.maxhourlycustomers) * this.averagecookiespercustomer);
        console.log(cookiepercus, 'cooke per cus');
        this.cookiesSoldPerHour.push(cookiepercus);
        console.log(this.cookiesSoldPerHour);
        this.Total = this.Total + cookiepercus;
        console.log(this.Total);
        hoursTotals[i] = hoursTotals[i] + cookiepercus;
        totalOfTotal += this.Total;
        console.log(totalOfTotal);

    }

};

ShopLocations.prototype.render = function () {
    this.cookiesPurshasedPerHour();
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;
    for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
        td = document.createElement('td');
        td.textContent = this.cookiesSoldPerHour[i];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.Total;

};


// Objects

var Seattle = new ShopLocations('Seattle', 23, 65, 6.3);
console.log(Seattle);
var Tokyo = new ShopLocations('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
var Dubai = new ShopLocations('Dubai', 11, 38, 3.7);
console.log(Dubai);
var Paris = new ShopLocations('Paris', 20, 38, 2.3);
console.log(Paris);
var Lima = new ShopLocations('Lima', 2, 16, 4.6);
console.log(Lima);


for (var i = 0; i < theLocation.length; i++) {
    theLocation[i].render();
}


// function to generate random numbers
function randomnumberofcustomersperhour(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random, 'random num');
    return random;
};


// create table footer
function rowFooter() {
    var tr = document.createElement('tr');
    table.appendChild(tr)
    var tfoot = document.createElement('tfoot');
    tr.appendChild(tfoot);
    tfoot.textContent = 'Total';
    for (var i = 0; i < hoursTotals.length; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = hoursTotals[i];
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = totalOfTotal;
}



// adding form 

var form = document.getElementById('Addstore');

form.addEventListener('submit', addstores);

function addstores(event) {
    event.preventDefault();
    var storelocation = event.target.Store.value;
    console.log(storelocation);
    var maxVla = event.target.maxInput.value;
    var minVal = event.target.minInput.value;
    var avgVal = event.target.avgCookies.value;

    var newObject = new ShopLocations(storelocation, minVal, maxVla, avgVal);
    newObject.render();
    rowFooter();
}
