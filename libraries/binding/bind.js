import DOMHelper from './helpers/DOMHelper.js';

class Bind {

  /**Method getting nodes info from DOM */
  init() {
    const rawNodes = DOMHelper.getAllNodesInDOM();
    const nodes = DOMHelper.getNodesInfo(rawNodes);

    return nodes;
  }

  /**Method building the state variable including
   *  all the fields in binding with the specified 
   * elements in DOM.
   * @nodes info about DOM's nodes
   */
  buildState(nodes) {
    if (nodes == null) return {};
    const state = {};
    for(const node of nodes) {
      state[node.id] = ''; 
    }

    return state; 
  }


}

module.exports = Bind;
