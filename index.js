import './style.css';
import AutoBind from './libraries/binding/bind.js'

const Autobinder = new AutoBind();
const nodes = Autobinder.init();
const nodesInfo = nodes.filter(row => row.id !== '');
console.log('nodesInfo');
console.log(nodesInfo); 
const state = Autobinder.buildState(nodesInfo);
console.log(state);
/* ORA PER OGNI NODO (IN NODES) applico un evento 
 per bindare state con l'elemento sulla DOM */
Autobinder.associateStateAndNodeUsingEvents(nodesInfo, state); 
/* • Continuare ocn gli altri tipi di elemementi. 
   • faare in modo che si possa configurare manualmente
     quale campo di state sta in binding con quale nodo 
     (avente una certa id). 
     ES: Mi serve per fare in modo che un paragrafo in binding
     con la stessa variabile già in binding con una input possa
     aggiornarsi appena cambia la variabile. 
*/



// setInterval(() => {
//   console.log('state')
//   console.log(state) 
// }, 5000)