import './style.css';
import Bind from './libraries/binding/bind.js'

const binding = new Bind();
const nodes = binding.init();
const nodesWithId = nodes.filter(row => row.id !== '');
console.log('nodesWithId');
console.log(nodesWithId); 
const state = binding.buildState(nodesWithId);
console.log(state)