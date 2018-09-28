'use strict';
// next step: make function to make... store objects, likely an array that stores all the.... stores.
// other next step: use document.getElementbyId() to put all this information into sales.html instead of the <table> in there.

/*
ALL THE STORE OBJECT LITERALS

var pikePlace = {
  name:'Pike Place Market Store',
  minCust:23,
  maxCust:65,
  avgCook:6.3,
};

var seaTac = {
  name:'SeaTac Airport Store',
  minCust:3,
  maxCust:24,
  avgCook:1.2,
};

var seattleCenter = {
  name:'Seattle Center Store',
  minCust:11,
  maxCust:38,
  avgCook:3.7,
};

var alki = {
  name:'Alki Store',
  minCust:2,
  maxCust:16,
  avgCook:4.6,
};

var cookStores = [pikePlace,seaTac,seattleCenter,alki];
*/

//Store constructor function
var Store = function(name, minCust, maxCust, avgCook, cookSold){
  this.name = name; //name of store
  this.minCust = minCust; //minimum customers per hour
  this.maxCust = maxCust; //maximum customers per hour
  this.avgCook = avgCook; //# of average cookies sold per customer
  this.cookSold = []; //# of cookies sold at this store per hour
};

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

Store.prototype.renderHours = function(){
  this.calcCookSold();

  // 1. container element
  var storesContainer = document.getElementById('cookTable');

  // 2. new element // can see not appending to starting table.
  //var headerEl = document.createElement('h2');
  var trEl = document.createElement('tr');
  // 3. Give element content
  //  headerEl.textContent = this.name;
  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChild(thEl); //append table header to row
  //append mincust to tds
  for (var i in this.cookSold){
  var tdEl = document.createElement('td');
  tdEl.textContent = this.cookSold[i];
  trEl.appendChild(tdEl);
  
  //giving table ro td of avg# of purchased cookies per cust

  // tdEl = document.createElement('td');
  // tdEl.textContent = this.avgCook;
  // trEl.appendChild(tdEl);
  };
  // 4. append newly created element to container
  storesContainer.appendChild(trEl);

};
//=================

// Function that renders all the stores
//Good to put them in an array and just .push everything
var allCookStores = [];
var renderAllStores = function(){
  allCookStores.push(pikes.renderHours(),seaTac.renderHours(),seaCtr.renderHours(),alki.renderHours()); 
};

// store constructor data
var pikes = new Store('1st and Pike',23,65,6.3,[]);
var seaTac = new Store('SeaTac Airport',3,24,1.2,[]);
var seaCtr = new Store('Seattle Center',11,38,3.7,[]);
var alki = new Store('Alki',2,16,4.6,[]);






