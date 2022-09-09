class BindCommon {
  
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
}

module.exports = BindCommon;