const Handler = require('./handler');

const  Strategy3 = function(){};

Strategy3.prototype = new Handler();
Strategy3.prototype.handleRequest = function(request){
  console.log('Strategy3');
  if(request == 3){
    return ;
  }
  this.next.handleRequest(request);
}

module.exports = Strategy3;
