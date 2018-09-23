'use strict';
// next step: make function to make... store objects, likely an array that stores all the.... stores.
// other next step: use document.getElementbyId() to put all this information into sales.html instead of the <table> in there.

var pikePlace = {
  name:'Pike Place Market Store';
  minCust:23;
  maxCust:65;
  avgCook:6.3;
}

var seaTac = {
  name:'SeaTac Airport Store';
  minCust:3;
  maxCust:24;
  avgCook:1.2;
}

var seattleCenter = {
  name:'Seattle Center Store';
  minCust:11; 
  maxCust:38;
  avgCook:3.7;
}

var alki = {
  name:'Alki Store';
  minCust:2; 
  maxCust:16;
  avgCook:4.6;
}

var cookStores = [pikePlace,seaTac,seattleCenter,alki];