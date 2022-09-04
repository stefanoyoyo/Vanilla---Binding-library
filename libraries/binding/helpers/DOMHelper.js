class DOMHelper {
    static getAllNodesFrom(element) {
        return document.querySelectorAll(element);
    }
    static getAllNodesFromBody() {
        return document.getElementsByTagName('body');
    }
}

module.exports = DOMHelper;