import DOMHelper from './libraries/binding/helpers/DOMHelper.js';

class Bind {
  init() {
    const all = DOMHelper.getAllNodesFromBody();
    console.log('all');
    console.log(all);
  }
}

module.exports = Bind;