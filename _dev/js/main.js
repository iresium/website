'use strict';

const $ = require('jquery');
const App = require('./modules/app.js');
const Viewport = require('./modules/viewport.js');
const Header = require('./modules/header.js');
const Gradients = require('./modules/gradients.js');
const ClickFunctions = require('./modules/clickFunction.js');
const ScrollTo = require('./modules/scrollTo.js');
const Universe = require('./modules/universe.js');
const Tabs = require('./modules/tabs.js');
const FAQ = require('./modules/faqs.js');

$(function(){
	//create the app.
	let app = new App();
	let header = new Header();
	let viewport = new Viewport();
	let universe = new Universe();
	let gradients = new Gradients();
	let clickFunctions = new ClickFunctions();
	let scrollTo = new ScrollTo();
	let tabs = new Tabs();
	let faqs = new FAQ();
});
