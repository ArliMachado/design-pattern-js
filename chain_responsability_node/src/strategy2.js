const Handler = require('./handler');

const Strategy2 = function(){};

Strategy2.prototype = new Handler();
Strategy2.prototype.handleRequest = function(request){
  console.log('Strategy2');
  if(request == 2){
    return ;
  }
  this.next.handleRequest(request);
}

module.exports = Strategy2;
