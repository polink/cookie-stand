'use strict';

//Array for hours open
//STRETCH: make the # of hours dynamic
//need to take array and plug it into a function that prints out into the table, similar to how calcCookSold gets pushed into the table
var hoursOpen = [' ','6:00a', '7:00a','8:00a','9:00a','10:00a','11:00a','12:00p','13:00p','14:00p','15:00p','16:00p','17:00p','18:00p','19:00p','20:00p'];

//Store constructor function
var Store = function(name, minCust, maxCust, avgCook, cookSold){
  this.name = name; //name of store
  this.minCust = minCust; //minimum customers per hour
  this.maxCust = maxCust; //maximum customers per hour
  this.avgCook = avgCook; //# of average cookies sold per customer
  this.cookSold = []; //# of cookies sold at this store per hour
};
var storesContainer = document.getElementById('cookTable');
var trEl = document.createElement('tr');

for(var i in hoursOpen.length){
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');
  //thEl = document.createElement('th');
  tdEl.textContent = hoursOpen[i];
  trEl.appendChild(tdEl);
}
storesContainer.appendChild(trEl);

// function to do hours in first line of cookTable
// var headerHours = function () {
//   // 1. container element
//   var storesContainer = document.getElementById('cookTable');
  
//   // 2. new elements
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('tr');
//   var theadEl = document.createElement('thead');

//   theadEl.appendChild(trEl);
//   trEl.appendChild(thEl);
//   // 3. give element content
//   for(var i in hoursOpen.length){
//     thEl = document.createElement('th');
//     thEl.textContent = hoursOpen[i];
//     trEl.appendChild(thEl);
//   }
//   storesContainer.appendChild(trEl);
// };

// one hour of salcooks sold, produced by random number
Store.prototype.calcCustPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round((randomAmount) * this.avgCook);
};

Store.prototype.calcCookSold = function(){ //calculating cookies sold each hour
  for(var i = 0; i < 15; i++){
    /* other students did this.hoursOpen to calculate how many hours/day store was open */
    this.cookSold.push(this.calcCustPerHour());
  }
};

// make function for cookSold data in each cell
Store.prototype.cookSoldData = function(){
  this.calcCookSold();

  // 1. container element
  var storesContainer = document.getElementById('cookTable');

  // 2. new element
  var trEl = document.createElement('tr');

  // 3. Give element content
  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChild(thEl); //append table header to row

  //giving table td of avg# of purchased cookies per cust
  for (var i in this.cookSold){ //append minCust to tds
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookSold[i];
    trEl.appendChild(tdEl);
  }
  // 4. append newly created element to container
  storesContainer.appendChild(trEl);
};

//Function to figure out Total row
var totals = function(){

};

//=======================
// Function that renders all the stores
var allCookStores = [];
var renderAllStores = function(){
  allCookStores.push(pikes.cookSoldData(),seaTac.cookSoldData(),seaCtr.cookSoldData(),alki.cookSoldData()); 
};

// store constructor data
var pikes = new Store('1st and Pike',23,65,6.3,[]);
var seaTac = new Store('SeaTac Airport',3,24,1.2,[]);
var seaCtr = new Store('Seattle Center',11,38,3.7,[]);
var alki = new Store('Alki',2,16,4.6,[]);

// function calls
// headerHours();
renderAllStores();
