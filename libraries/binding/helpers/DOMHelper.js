class DOMHelper {
  static getAllNodesInDOM() {
    return document.getElementsByTagName('*');
  }

  static getNodesInfo(rawNodes) {
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

module.exports = DOMHelper;
