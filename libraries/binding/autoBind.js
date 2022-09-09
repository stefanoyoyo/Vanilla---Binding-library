import DOMHelper from './helpers/DOMHelper.js';

class AutoBind {
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
        get: function () {
          console.log('Getter called');
          return this.value;
        },
        set: function (value) {
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
      this.bindNodeWithStateField(nodeInfo, state);
    }
  }

  /**Method binding a node with its assocoated state field */
  bindNodeWithStateField(nodeInfo, state) {
    if (nodeInfo == null) return;
    if (state == null) return;
    switch (nodeInfo.type.toLowerCase()) {
      case 'input':
        this.bindInputWithStateField(nodeInfo, state);
        break;
    }

    return;
  }

  /**Method binding a node of type INPUT
   * with its assocoated state field */
  bindInputWithStateField(nodeInfo, state) {
    if (nodeInfo == null) return;
    if (state == null) return;
    const inputNode = document.getElementById(nodeInfo.id);
    inputNode.addEventListener('keyup', (event) => {
      state[nodeInfo.id] = event.target.value;
    });
  }

  // #endregion
}

module.exports = AutoBind;
