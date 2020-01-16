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
  this.generateSales = function() {
    for (var i =0; i < hours.length; i++){
      var customersPerHr = custRandom(this.minCust, this.maxCust);
      Math.floor(customersPerHr);
      var cookieSales = Math.floor(customersPerHr * this.avgCookie);
      console.log('cookieSales', cookieSales);
      this.salesPerHr.push(cookieSales);
      console.log(salesPerHr);
    }
  
  };
}



// // Prototypes
// Store.prototype.generateSales = function() {
//   for (var i =0; i < hours.length; i++){
//     var customersPerHr = custRandom(this.minCust, this.maxCust);
//     Math.floor(customersPerHr);
//     var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//     console.log('cookieSales', cookieSales);
//     this.salesPerHr.push(cookieSales);
//   }

// };

Store.prototype.render = function(){
  var table = document.getElementById('sales-table');
  var salesTable = document.createElement('table');
  var headerRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'TEst Test Test.';
  headerRow.appendChild(tableHeader);

  // for(var i = 0; i < citiesArray.length; i++){
  //   var tableHeader = document.createElement('th');
  //   tableHeader.textContent = citiesArray[i];
  //   headerRow.appendChild(tableHeader);
  // }
  salesTable.appendChild(headerRow);

}

// Store.prototype.location = function() {
//   for (i=0; i< hours.length; i++){
//     var row = document.createElement('tr');
//       for (var j = 0; j < citiesArray.length; j++){
//         var tableData = document.createElement('td');
//         tabeleData.textContent = 
//       }
//   }
// }


// this.render();

// **** Instantiations **** //
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 2.4);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

console.log(seattle);

















// 'use strict'

// var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// // Functions
// // function custRandom(min, max) {
// //   var min = Math.floor(min);
// //   var max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min + 1) + min);

  
// // }

// function custRandom(custMin, custMax) {
//   var custRandom = Math.random() * (custMax - custMin +1) + custMin;
//   return Math.floor(custRandom);
// }

// var seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   salesPerHr: [],
//   avgCookie: 6.3
// };


// var tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   salesPerHr: [],
//   avgCookie: 1.2,
// };

// var dubai = {
//   name: 'Dubai',
//   hours: [],
//   minCust: 11,
//   maxCust: 38,
//   salesPerHr: [],
//   avgCookie: 3.7,
// };

// var paris = {
//   name: 'Paris',
//   hours: [],
//   minCust: 20,
//   maxCust: 38,
//   salesPerHr: [],
//   avgCookie: 2.3,
// };

// var lima = {
//   name: 'Lima',
//   hours: [],
//   minCust: 2,
//   maxCust: 16,
//   salesPerHr: [],
//   avgCookie: 4.6,
// };

// // Cities Array.
// var cities = [seattle, tokyo, dubai, paris, lima];

// //Creating elements
// var cityArticle = document.getElementById('stores');
// //runs through cities array
// for(var i = 0; i < cities.length; i++){
//   var newCityUl = document.createElement('ul'); //creates <ul>
//   newCityUl.textContent = cities[i].name;
//   //runs through hours
//   for(var j = 0; j < hours.length; j++) {
//     var cookiesSold = Math.floor(custRandom(cities[i].minCust, cities[i].maxCust) * cities[i].avgCookie);
//     cities[i].salesPerHr.push(cookiesSold);
//     var hourLI = document.createElement('li'); // creates <li>
//     //outputs hours, sales for each hour, and the string 'cookies' into a sentence to the <li> tags.
//     hourLI.textContent = `${hours[j]}: ${cookiesSold} cookies.`;
//     //adds each itteration of the <li> and its contents to be the last child of the <ul>
//     newCityUl.appendChild(hourLI);
//   }
//   var total = 0;
//   for (var i = 0; i < this.salesPerHr.length; i++){
//     total += this.salesPerHr[i];
//   }
//   console.log('Total:', total);
//   var totalLI = document.createElement('li');
//   totalLI.textContent = `Total: ${total}`;
//   newCityUl.appendChild(totalLI);
//   // console.log(totalLI);
//   cityArticle.appendChild(newCityUl);
//   console.log(cities[i].salesPerHr);
// }

// // executabe code

// /// **** To print out the desired lines when manipulating the DOM ***** /////
// //  `${hours[0]}: ${seattle.cookiesSold[0]} cookies.`  --- Will go inside that for loop