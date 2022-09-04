// Import stylesheets
import './style.css';
import Binding from './binding.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const binding = new Binding();
binding.init();