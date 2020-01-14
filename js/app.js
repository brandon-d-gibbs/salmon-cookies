'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// Functions
// function custRandom(min, max) {
//   var min = Math.floor(min);
//   var max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);

  
// }

function custRandom(custMin, custMax) {
  var custRandom = Math.random() * (custMax - custMin +1) + custMin;
  return Math.floor(custRandom);
}

var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  salesPerHr: [],
  avgCookie: 6.3
};


var tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  salesPerHr: [],
  avgCookie: 1.2,
};

var dubai = {
  name: 'Dubai',
  hours: [],
  minCust: 11,
  maxCust: 38,
  salesPerHr: [],
  avgCookie: 3.7,
};

var paris = {
  name: 'Paris',
  hours: [],
  minCust: 20,
  maxCust: 38,
  salesPerHr: [],
  avgCookie: 2.3,
};

var lima = {
  name: 'Lima',
  hours: [],
  minCust: 2,
  maxCust: 16,
  salesPerHr: [],
  avgCookie: 4.6,
};

// Cities Array.
var cities = [seattle, tokyo, dubai, paris, lima];

//Creating elements
var cityArticle = document.getElementById('stores');
//runs through cities array
for(var i = 0; i < cities.length; i++){
  var newCityUl = document.createElement('ul'); //creates <ul>
  newCityUl.textContent = cities[i].name;
  //runs through hours
  for(var j = 0; j < hours.length; j++) {
    var cookiesSold = Math.floor(custRandom(cities[i].minCust, cities[i].maxCust) * cities[i].avgCookie);
    cities[i].salesPerHr.push(cookiesSold);
    var hourLI = document.createElement('li'); // creates <li>
    //outputs hours, sales for each hour, and the string 'cookies' into a sentence to the <li> tags.
    hourLI.textContent = `${hours[j]}: ${cookiesSold} cookies.`;
    //adds each itteration of the <li> and its contents to be the last child of the <ul>
    newCityUl.appendChild(hourLI);
  }
  function totalCookies(){

}

  var totalLI = document.createElement('li');
  totalLI.textContent = `Total: I need to fix this logic`;
  newCityUl.appendChild(totalLI);
  // console.log(totalLI);
  cityArticle.appendChild(newCityUl);
  console.log(cities[i].salesPerHr);
}

// executabe code

/// **** To print out the desired lines when manipulating the DOM ***** /////
//  `${hours[0]}: ${seattle.cookiesSold[0]} cookies.`  --- Will go inside that for loop