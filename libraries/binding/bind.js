import DOMHelper from './libraries/binding/helpers/DOMHelper.js';

class Bind {
  init() {
    // const all = DOMHelper.getAllNodesFromBody();
    const all = document.getElementsByTagName('*');
    console.log('all');
    console.log(all);
  }
}

module.exports = Bind;
