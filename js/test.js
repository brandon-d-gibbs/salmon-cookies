// 'use strict'
// // Global Variables
// var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// var table = document.getElementById('sales-table');
// var salesTable = document.createElement('table');
// // table.appendChild(salesTable);


// // Global Arrays
// var citiesArray = [];


// // ****  Functions   ****

// // Generates random number for customers in an hour
// function custRandom(min, max) {
//   var custRandom = Math.random() * (max - min +1) + min;
//   return Math.floor(custRandom);
// }
// console.log(custRandom(23,65)); //Testing random customer number generator


// //Generates top row of sales table
// function createSalestopRow() {
//   // Creates Table Header
//   var topRow = document.createElement('tr');
//   var nameColumn = document.createElement('th');
//   nameColumn.textContent = 'Store Location';
//   topRow.appendChild(nameColumn);
//   salesTable.appendChild(topRow);
//   // Creates and populates column for each hour open
//   for (var i = 0; i < hours.length; i++) {
//     var openHours = document.createElement('th');
//     openHours.textContent = hours[i];
//     topRow.appendChild(openHours);
//   }
//   table.appendChild(salesTable);
//   salesTable.appendChild(topRow);
//   // salesTable.appendChild(topRow);
// }

// // Creates sales table footer
// function createSalesTableFooter() {
//   var footerRow = document.createElement('tr');
//   salesTable.appendChild(footerRow);
//   var totalCol = document.createElement('th');
//   totalCol.textContent = 'Hourly Totals: ';
//   footerRow.appendChild(totalCol);
  
//   //tracking hourly and grand total sales
//   var hourlySalesTotal = 0;
//   var grandDailySales = 0;

//   for (var i = 0; i < hours.length; i++) {
//     hourlySalesTotal = 0;
//     for(var j = 0; j < citiesArray.length; j++)
//       hourlySalesTotal += citiesArray[j].salesPerHr[i];
//       //console.log('hourly', hourlySalesTotal);
//       grandDailySales += hourlySalesTotal;

//     var hourlyData = document.createElement('th');
//     hourlyData.textContent = hourlySalesTotal;
//     footerRow.appendChild(hourlyData);

//     // console.log('HD', hourlyData); // testing for hourly data

//   }
//   salesTable.appendChild(footerRow);
// }
 
  
//   // console.log('grand', grandDailySales);


// // Constructor Funciton
// function Store(name, minCust, maxCust, avgCookie) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookie = avgCookie;
//   this.salesPerHr = [];
//   this.generateSales = function() {
//     for (var i =0; i < hours.length; i++){
//       var customersPerHr = custRandom(this.minCust, this.maxCust);
//       // Math.floor(customersPerHr);
//       var cookieSales = Math.floor(customersPerHr * this.avgCookie);
//       console.log('cookieSales', cookieSales);
//       this.salesPerHr.push(cookieSales);
//       console.log(this.salesPerHr);
//     }
//     // this.generateSales();
//     citiesArray.push(this);
//   };

// }

// // // Prototypes

// Store.prototype.render = function() {
//   this.generateSales();
//   // var table = document.getElementById('table');
//   var row = document.createElement('tr');
//   var td = document.createElement('td');
//   td.textContent = this.name;
//   //console.log('in render', td);
//   row.appendChild(td);
//   for(var j = 0; j < hours.length; j++); {
//     console.log('in loop');
//     for(var k = 0; k < hours.length; k++){
//       var tdata = document.createElement('td');
//       tdata.textContent = this.salesPerHr[k];
//       row.appendChild(tdata);
//       console.log(this.salesPerHr);
//       console.log(tdata);}
//   }
//   salesTable.appendChild(row);
// };



// // **** Instantiations **** //
// var seattle = new Store('Seattle', 23, 65, 6.3);
// var tokyo = new Store('Tokyo', 3, 24, 2.4);
// var dubai = new Store('Dubai', 11, 38, 3.7);
// var paris = new Store('Paris', 20, 38, 2.3);
// var lima = new Store('Lima', 2, 16, 4.6);




// // console.log(seattle.name);
// createSalestopRow();
// // console.log(seattle);
// // console.log(seattle.salesPerHr);
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
// console.log(citiesArray);
// createSalesTableFooter();