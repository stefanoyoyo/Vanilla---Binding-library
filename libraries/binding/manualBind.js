class ManualBind {
  
  constructor(commonBind) {
    this.commonBind = commonBind;
  }

  /**Method binding the state's fields 
   * with the associated values.
   * EXAMPLE: const state = {
   *  input-age: '',
   *  p-show-age: ''
   * } 
   **/
  bindStateWithNodes(state) {
    if (this.state == null) return null;
    console.log(this.state)
    for (const element of this.state) {
      const node = document.getElementById(element.nodeId); 
      console.log(element.nodeId)
      console.log(node)
    }
  }
}

module.exports = ManualBind;