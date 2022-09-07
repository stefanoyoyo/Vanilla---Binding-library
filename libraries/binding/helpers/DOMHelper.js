class DOMHelper {
    static getAllNodesFrom(element) {
        return document.querySelectorAll(element);
    }
    static getAllNodesFromBody() {
        return document.getElementsByTagName('body');
    }
    static getAllNodesInDOM() {
        return document.getElementsByTagName('*');
    }
}

module.exports = DOMHelper;