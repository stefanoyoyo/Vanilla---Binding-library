class Bind {
  init() {
    console.log('all');
    console.log(all);
    const all = DOMHelper.getAllNodesFromBody();
  }
}

module.exports = Bind;