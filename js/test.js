'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Functions
// function custRandom(min, max) {
//   var min = Math.floor(min);
//   var max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);

  
// }

function custRandom(min, max) {
  var custRandom = Math.random() * (max - min +1) + min;
  return Math.floor(custRandom);
}
console.log(custRandom(23,65));

var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  salesPerHr: [],
  getHourlySales: function() {
    for (var i =0; i < hours.length; i++){
      var customersPerHr = custRandom(this.minCust, this.maxCust);
      Math.floor(customersPerHr);
      var cookieSales = Math.floor(customersPerHr * this.avgCookie);
      console.log('cookieSales', cookieSales);
      this.salesPerHr.push(cookieSales);
    }
    console.log(this.salesPerHr);
  },

  render: function(){
    //output html to the DOC
    //unordered list with the name of the city
    var storesArticle = document.getElementById('stores');
    var cityUL = document.createElement('ul');
    // create a LI for every hour the sore is open
    for (var i = 0; i < hours.length; i++){
      var hourLI = document.createElement('li');
      hourLI.textContent = `${hours[i]}: ${this.salesPerHr[i]}`;
      cityUL.appendChild(hourLI);
      var cityHeader
    }
    var total = 0;
    for (var i = 0; i < this.salesPerHr.length; i++){
      total += this.salesPerHr[i];
    }
    var totalLI = document.createElement('LI');
    totalLI.textContent = `Total: ${total}`;
    cityUL.appendChild(totalLI);
    
    storesArticle.appendChild(cityUL);
    //2 pieces of data: hourOfDay : # of cookies sold that hour
  }
};

seattle.getHourlySales();
seattle.render();

var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  salesPerHr: [],
};

var dubai = {
  name: 'Dubai',
  hours: [],
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  salesPerHr: [],
};

var paris = {
  name: 'Paris',
  hours: [],
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  salesPerHr: [],
};

var lima = {
  name: 'Lima',
  hours: [],
  minCust: 2,  
  maxCust: 16,
  avgCookie: 4.6,
  salesPerHr: [],
};