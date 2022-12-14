import DOMHelper from './helpers/DOMHelper.js';

class AutoBind {

  constructor(commonBind) {
    this.commonBind = commonBind;
  }

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
    for (const node of nodes) {
      state[node.id] = {
        get: () => {
          console.log('Getter called');
          return this.value;
        },
        set: (value) => {
          console.log('Setter called');
          this.value = value;
        },
      };
    }

    return state;
  }

  // #region bind nodes and state using events

  /**Method using events to bind state fields with associared node. */
  associateStateAndNodeUsingEvents(nodesInfo, state) {
    if (nodesInfo == null) return;
    if (state == null) return;

    for (const nodeInfo of nodesInfo) {
      this.commonBind.bindNodeWithStateField(nodeInfo, state);
    }
  }

  // #endregion
}

module.exports = AutoBind;
