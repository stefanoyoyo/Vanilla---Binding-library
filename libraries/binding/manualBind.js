class ManualBind {
  constructor(state) {
    this.state = state;
  }

  /**Method binding the state's fields 
   * with the associated values.
   * EXAMPLE: const state = {
   *  input-age: '',
   *  p-show-age: ''
   * } 
   **/
  bindStateWithNodes() {
    if (this.state == null) return null;
    const keys = Object.keys(this.state);
    for(const key of keys) {
      const node = document.getElementById(key); 
      console.log('node')
      console.log(node)
    }
  }
}

module.exports = ManualBind;