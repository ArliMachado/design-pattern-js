const Handler = require('./handler');

const Strategy1 = function(){};

Strategy1.prototype = new Handler();
Strategy1.prototype.handleRequest = function(request){
  console.log('Strategy1');
  if(request == 1){
    return ;
  }
  this.next.handleRequest(request);
}

module.exports = Strategy1;
