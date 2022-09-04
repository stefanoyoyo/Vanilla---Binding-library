class DOMHelper {
    static getAllNodesFromBody() {
        return document.getElementsByTagName('*');
    }
}

module.exports = DOMHelper;