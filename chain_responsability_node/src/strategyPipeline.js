const Strategy1 = require('./strategy1');
const Strategy2 = require('./strategy2');
const Strategy3 = require('./strategy3');

const strategyPipeline = {
  handleRequest: (request) => {
    const strategy1 = new Strategy1();
    const strategy2 = new Strategy2();
    const strategy3 = new Strategy3();
    
    strategy1.setNext(strategy2).setNext(strategy3);
    strategy1.handleRequest(request);

  }
}

module.exports = strategyPipeline;
