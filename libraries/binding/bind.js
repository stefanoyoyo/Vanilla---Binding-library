import DOMHelper from 'libraries/binding/helpers/DOMHelpers.js';

class Bind {
  init() {
    const rawNodes = document.getElementsByTagName('*');
    // const rawNodes = DOMHelper.getAllNodesFrom('app');
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
