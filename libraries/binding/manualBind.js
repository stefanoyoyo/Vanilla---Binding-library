import DOMHelper from './helpers/DOMHelper.js';

class ManualBind {

  constructor(commonBind) {
    this.commonBind = commonBind;
  }

  /**Method binding the state's fields 
   * with the associated values.
   * EXAMPLE: 
   * const state = [
   *   {
   *     id: 'binding-text',
   *     field: 'text'
   *   },
   *   {
   *     id: 'input-text',
   *     field: 'text'
   *   }
   * ]
   **/
  bindStateWithNodes(state) {
    if (state == null) return null;
    console.log(state)
    for (const element of state) {
      // const node = document.getElementById(element.id); 
      // console.log('node')
      // console.log(node)
      // console.log(node.nodeType )
    }
  }
}

module.exports = ManualBind;