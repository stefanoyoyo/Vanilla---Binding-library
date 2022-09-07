class DOMHelper {
  static getAllNodesInDOM() {
    return document.getElementsByTagName('*');
  }
}

module.exports = DOMHelper;
