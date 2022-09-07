import DOMHelper from './helpers/DOMHelper.js';

class Bind {
  init() {
    const rawNodes = DOMHelper.getAllNodesInDOM();
    const nodes = this.getNodesInfo(rawNodes);
    console.log('nodes');
    console.log(nodes);
  }

  getNodesInfo(rawNodes) {
    if (rawNodes == null) return rawNodes;
    const nodes = [];
    for(const rawNode of rawNodes) {
      nodes.push({
        id : rawNode.id,
        type : rawNode.tagName
      });
    }

    return nodes;
  }
}

module.exports = Bind;
