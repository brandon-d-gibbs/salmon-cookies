'use strict'
// Global Variables
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Global Arrays
var citiesArray = [];

// Functions
function custRandom(min, max) {
  var custRandom = Math.random() * (max - min +1) + min;
  return Math.floor(custRandom);
}// Testing the Math // console.log(custRandom(23,65));

// Constructor Funciton
function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.salesPerHr = [];
}
// Prototypes
Store.prototype.generateSales = function() {
  for (var i =0; i < hours.length; i++){
    var customersPerHr = custRandom(this.minCust, this.maxCust);
    Math.floor(customersPerHr);
    var cookieSales = Math.floor(customersPerHr * this.avgCookie);
    console.log('cookieSales', cookieSales);
    this.salesPerHr.push(cookieSales);
  }
console.log(store);
};

Store.prototype.render = function(){
  var table = document.getElementById('sales-table');
  var salesTable = document.createElement('table');
  var headerRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'This is a test';
  headerRow.appendChild(tableHeader);
  table.appendChild(headerRow);

// Store.prototype.render = function(){
//   var table = document.getElementById('sales table');
//   var salesTable = document.createElement('table');
//   var headerRow = document.createElement('tr');

//   for(var i = 0; i < citiesArray.length; i++){
//     var tableHeader = document.createElement('th');
//     tableHeader.textContent = citiesArray[i];
//     headerRow.appendChild(tableHeader);
//   }
//   salesTable.appendChild(headerRow);






  // for (i=0; i< hours.length; i++){
  //   var row = document.createElement('tr');
  //     for (var j = 0; j < citiesArray.length; j++){
  //       var tableData = document.createElement('td');
  //       tabeleData.textContent = 
  //     }
  // }
}


// this.generateSales();
// this.render();

// **** Instantiations **** //
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 2.4);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

// var seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   salesPerHr: [],
//   getHourlySales: function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//     }
//   //  console.log(this.salesPerHr);
//   },

//   render: function(){
//     //output html to the DOC
//     //unordered list with the name of the city
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     // Create Store Header with city name
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     // create a LI for every hour the sore is open
//     for (var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // Get Total cookie sales
//     var total = 0;
//     for (var i = 0; i < this.salesPerHr.length; i++){
//       total += this.salesPerHr[i];
//     } //put total cookie sales at the end of each sales list
//     var totalLI = document.createElement('LI');
//     totalLI.textContent = `Total: ${total}`;
//     cityUL.appendChild(totalLI);
//     storesArticle.appendChild(cityUL);
//     //2 pieces of data: hourOfDay : # of cookies sold that hour
//   }
// };

// seattle.getHourlySales();
// seattle.render();

// var tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   salesPerHr: [],
//   getHourlySales: function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//     }
//   //  console.log(this.salesPerHr);
//   },

//   render: function(){
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     for (var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // Get Total cookie sales
//     var total = 0;
//     for (var i = 0; i < this.salesPerHr.length; i++){
//       total += this.salesPerHr[i];
//     } //put total cookie sales at the end of each sales list
//     var totalLI = document.createElement('LI');
//     totalLI.textContent = `Total: ${total}`;
//     cityUL.appendChild(totalLI);
//     storesArticle.appendChild(cityUL);
//     //2 pieces of data: hourOfDay : # of cookies sold that hour
//   }
// };
// tokyo.getHourlySales();
// tokyo.render();

// var dubai = {
//   name: 'Dubai',
//   hours: [],
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   salesPerHr: [],
//   getHourlySales: function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//     }
//   //  console.log(this.salesPerHr);
//   },

//   render: function(){
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     for (var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // Get Total cookie sales
//     var total = 0;
//     for (var i = 0; i < this.salesPerHr.length; i++){
//       total += this.salesPerHr[i];
//     } //put total cookie sales at the end of each sales list
//     var totalLI = document.createElement('LI');
//     totalLI.textContent = `Total: ${total}`;
//     cityUL.appendChild(totalLI);
//     storesArticle.appendChild(cityUL);
//     //2 pieces of data: hourOfDay : # of cookies sold that hour
//   }
// };
// dubai.getHourlySales();
// dubai.render();

// var paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   salesPerHr: [],
//   getHourlySales: function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//     }
//   //  console.log(this.salesPerHr);
//   },

//   render: function(){
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     for (var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // Get Total cookie sales
//     var total = 0;
//     for (var i = 0; i < this.salesPerHr.length; i++){
//       total += this.salesPerHr[i];
//     } //put total cookie sales at the end of each sales list
//     var totalLI = document.createElement('LI');
//     totalLI.textContent = `Total: ${total}`;
//     cityUL.appendChild(totalLI);
//     storesArticle.appendChild(cityUL);
//     //2 pieces of data: hourOfDay : # of cookies sold that hour
//   }
// };
// paris.getHourlySales();
// paris.render();

// var lima = {
//   name: 'Lima',
//   hours: [],
//   minCust: 2,  
//   maxCust: 16,
//   avgCookie: 4.6,
//   salesPerHr: [],
//   getHourlySales: function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//     }
//   //  console.log(this.salesPerHr);
//   },

//   render: function(){
//     var storesArticle = document.getElementById('stores');
//     var cityUL = document.createElement('ul');
//     var cityHeader = document.createElement('h1');
//     cityHeader.textContent = this.name;
//     cityUL.appendChild(cityHeader);
//     for (var i = 0; i < hours.length; i++){
//       var hourLI = document.createElement('li');
//       hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]} cookies`;
//       cityUL.appendChild(hourLI);
//     }
//     // Get Total cookie sales
//     var total = 0;
//     for (var i = 0; i < this.salesPerHr.length; i++){
//       total += this.salesPerHr[i];
//     } //put total cookie sales at the end of each sales list
//     var totalLI = document.createElement('LI');
//     totalLI.textContent = `Total: ${total}`;
//     cityUL.appendChild(totalLI);
//     storesArticle.appendChild(cityUL);
//     //2 pieces of data: hourOfDay : # of cookies sold that hour
//   }
// };
// lima.getHourlySales();
// lima.render();