import './style.css';
import Bind from './libraries/binding/bind.js'

const binder = new Bind();
const nodes = binder.init();
const nodesInfo = nodes.filter(row => row.id !== '');
console.log('nodesInfo');
console.log(nodesInfo); 
const state = binder.buildState(nodesInfo);
console.log(state);
// ORA PER OGNI NODO (IN NODES) applico un evento per bindare state con l'elemento sulla DOM
binder.associateStateAndNodeUsingEvents(nodesInfo, state)
