'use strict';

//overview of table construction
// 1. container variable
// 2. new element
// 3. Give element content
// 4. append newly created element to container

//Array for hours open
var headerRow = ['Locations','6:00a', '7:00a','8:00a','9:00a','10:00a','11:00a','12:00p','13:00p','14:00p','15:00p','16:00p','17:00p','18:00p','19:00p','20:00p','Daily Total'];
var allStoreContainer = []; //new container function - better naming
var allCookStores = [];

//Store constructor function
var Store = function(name, minCust, maxCust, avgCook){
  this.name = name; //name of store
  this.minCust = minCust; //minimum customers per hour
  this.maxCust = maxCust; //maximum customers per hour
  this.avgCook = avgCook; //# of average cookies sold per customer
  this.cookSold = []; //# of cookies sold at this store per hour

  allStoreContainer.push(this);
  this.cookSoldData();
  
//  allCookStores.push(this.name);
};

var storeForm = document.getElementById('newCookStoreForm');

// function to do header in first line of cookTable
var headerHours = function () {
  // 1. container variable
  var storesContainer = document.getElementById('cookTable');

 

  // 2. new elements
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  // 3. give element content
  for(var i in headerRow){
    thEl = document.createElement('th');  //reassigning variable here essential! "making a 'new' poster instead of rewriting the same one" reusing a variable requires a reassignment
    thEl.textContent = headerRow[i];
    //console.log(headerRow[i]);
    trEl.appendChild(thEl);
  }
  // 4. append newly created elements to container
  theadEl.appendChild(trEl);
  storesContainer.appendChild(theadEl);
};

// one hour of salcooks sold, produced by random number
Store.prototype.calcCustPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round((randomAmount) * this.avgCook);
};

Store.prototype.calcCookSold = function(){ //calculating cookies sold each hour
  var rowTotal = 0;
  for(var i = 0; i < 15; i++){
    /* other students did this.hoursOpen to calculate how many hours/day store was open */
    this.cookSold.push(this.calcCustPerHour());
    rowTotal += this.cookSold[i];
    // console.log(this.cookSold[i]);
  }
  this.cookSold.push(rowTotal);
};

// function for taking cookSold array and appending to table
Store.prototype.cookSoldData = function(){
  this.calcCookSold();

  // 1. container variable
  var storesContainer = document.getElementById('cookTable');

  // 2. new element
  var trEl = document.createElement('tr');

  // 3. Give element content
  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name; //prints first for names
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



//=======================
// Function that renders all the stores
var renderNewStore = function(){ // ???
  allStoreContainer.push((allStoreContainer.length - 1).cookSoldData());
};


// store constructor data
new Store('1st and Pike',23,65,6.3);
new Store('Capitol Hill',20,38,2.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Alki',2,16,4.6);

//Function to figure out Total footer row
var totals = function(){
  var storesContainer = document.getElementById('cookTable');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  trEl.setAttribute('id','footer');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  
  // var tdEl = document.createElement('td');
  // var totallyTotals = 0;

  for(var i = 0; i < 16; i++) { // help from Nicole & Rick
    var totalCookSold = 0;
    for(var x = 0; x < allStoreContainer.length; x++){
      totalCookSold = allStoreContainer[x].cookSold[i] + totalCookSold;
      // totallyTotals += totalCookSold;
    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookSold;
    tfootEl.appendChild(trEl);
    trEl.appendChild(tdEl);
  }
  // document.getElementById('footer');
  tdEl = document.createElement('td');
  storesContainer.appendChild(tdEl);
  // tdEl.textContent = totallyTotals;
  storesContainer.appendChild(trEl);
};

// function calls
headerHours();
// renderAllStores();
totals();

// Forms

var handleMakeStore = function(eventStore){
  eventStore.preventDefault(); //prevents page from refreshing
  eventStore.stopPropagation();

  var storeName = eventStore.target.storeName.value;
  var minCustomers = parseInt(eventStore.target.minCustomers.value);
  var maxCustomers = parseInt(eventStore.target['max-Customers'].value);
  var averageCookies = parseInt(eventStore.target.averageCookies.value);
  // make new stuff, but clear footer row before adding new data
  clearTable();
  clearAtt();
  new Store(storeName, minCustomers, maxCustomers, averageCookies);
  console.log(allCookStores);
  totals();
};

var clearTable = function(){
  document.getElementById('footer').innerHTML = '';
};
var clearAtt = function(){
  var newFoot = document.getElementById('footer');
  newFoot.setAttribute('id','');
};

storeForm.addEventListener('submit', handleMakeStore);

