/**
 *
 * @description Font Family
 *
 * @version 2026/06/08 ace 初始版本。
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web|Web technology for developers | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex|tabindex - HTML: HyperText Markup Language | MDN}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 * @see {@link https://getbootstrap.com/docs/5.0/forms/checks-radios/|Checks and radios · Bootstrap v5.0}
 *
 * @see {@link https://docs.nwjs.io/en/latest/For%20Users/Advanced/Use%20Native%20Node%20Modules/|Use Native Node Modules - NW.js Documentation}
 *
 * @see {@link https://www.w3schools.com/jsref/dom_obj_all.asp|HTML DOM Element Object}
 * @see {@link https://www.w3schools.com/jsref/prop_html_style.asp|HTML DOM Element style Property}
 *
 * @see {@link https://www.w3schools.com/css/default.asp|CSS Tutorial}
 * @see {@link https://www.w3schools.com/jsref/dom_obj_style.asp|HTML DOM Style object}
 * @see {@link https://www.w3schools.com/cssref/index.php|CSS Reference}
 *
 * @see {@link https://www.w3schools.com/howto/howto_css_modals.asp|How To Make a Modal Box With CSS and JavaScript}
 *
 * @todo 2026/07/20 ace how to use localStorage/IndexedDB？
 *
 */
function main() {

	var that = this;
	
	that["data"] = {
	
		"subdep": [
		
			{
				"pNoS": "030101",
				"productName": "炒麵麵包",
				"pathImage": "image/subdep/030101.JPG"
			},
			{
				"pNoS": "030102",
				"productName": "炒麵麵包",
				"pathImage": "image/subdep/030102.JPG"
			},
			/*
			{
				"pNoS": "030103",
				"productName": "炒麵麵包",
				"pathImage": "image/subdep/030103.JPG"
			},
			{
				"pNoS": "030104",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030105",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030106",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030107",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030108",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030109",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030110",
				"productName": "炒麵麵包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030110",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030111",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030112",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030113",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			{
				"pNoS": "030114",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			},
			*/
			{
				"pNoS": "030115",
				"productName": "漢堡包",
				"pathImage": "icon/DEFAULT.PNG"
			}
		]
	};
		
	// requirejs(["tw.ace33022.browser.functions.Log", "js-logger", "tw.ace33022.browser.component.list-product-000", "tw.ace33022.browser.component.test-component-004", "tw.ace33022.browser.component.test-component-003", "jquery", "underscore"], function(Log, Logger) {
	// requirejs(["tw.ace33022.browser.functions.Log", "js-logger", "tw.ace33022.browser.component.list-product-000", "tw.ace33022.browser.component.test-component-004", "jquery", "underscore"], function(Log, Logger) {
	requirejs(["tw.ace33022.browser.functions.Log", "js-logger", "tw.ace33022.browser.component.list-product-000", "tw.ace33022.browser.component.test-component-004", "tw.ace33022.browser.component.block-bottom-000", "jquery", "underscore"], function(Log, Logger) {
	
		var div;
		
		var listProduct = document.createElement('list-product-000');
		
		window.addEventListener('beforeunload', function(event) {
		
			console.log('beforeunload');
			
			// event.returnValue = '是否放棄目前輸入的資料？';

			// event.preventDefault();
		});

		jQuery(window).on('focus', function(event) {
		
			// console.log('focus.');
			
			// if ((jQuery('.modal-open').length == 0) && (jQuery('.modal-backdrop').length == 0)) jQuery('#' + idTtable + ' tbody').focus();
		});
		
		jQuery(window).on('resize', function(event) {
		
			// console.log('resize.');
			
			// jQuery('#' + idTtable + ' tbody').css('height', (window.innerHeight - jQuery('#' + idTtable + ' caption')[0].clientHeight - jQuery('#' + idTtable + ' thead')[0].clientHeight) + 'px');
			// jQuery('#' + idTtable).parent().css('height', window.innerHeight - jQuery('.navbar').height() - jQuery(jQuery('.panel').find('table')[0]).height() - 90 - 30);
		});
		
		Logger.useDefaults();
		
		Logger.setLevel(Logger.INFO);
		
		Logger.log = Logger.info;
		
		// Log.logEnvironmentStatus();
		
		// document.querySelector('body').appendChild(document.createElement('br'));
		
		div = document.createElement('div');
		
		div.innerText = 'Hello';
		
		// document.body.appendChild(div);
		
		if (location.origin.startsWith('http')) {
		
			if ((location.origin.indexOf('127.0.0.1') == -1) && (location.origin.indexOf('localhost') == -1)) {
		
			}
			else {
			
				console.log(that["data"]);
			
				fetch('./program/html00101/data.json')
				.then(response => {
				
					if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
					
					return response.json(); // Parses JSON data into a JavaScript object
				})
				.then(data => {
				
					// console.log(data); // Work with your JSON data here
					
					that["data"]["subdep"] = data["data"];
					
					// listProduct.setAttribute('subdep', JSON.stringify(data["data"]));
					listProduct.setAttribute('subdep', JSON.stringify(that["data"]["subdep"]));
					
					document.body.appendChild(listProduct);
				})
				.catch(error => {
				
					console.error('Error fetching JSON:', error);
				});
			}
		}
		else if (location.protocol == 'file:') {

			// chrome.exe --allow-file-access-from-files
			
			listProduct.setAttribute('subdep', JSON.stringify(that["data"]["subdep"]));
			
			document.body.appendChild(listProduct);
		}
		
		// @todo 2026/07/19 ace watch product-code value to trigger order detail.
		// @todo 2026/07/19 ace watch product-code value to hide listProduct.
	});
}

Configuration.loadJS(Configuration["requirejsConfigFile"], function() {

	Configuration.loadJS(Configuration["requirejsFile"], function() {
	
		requirejs.config(tw.ace33022.RequireJSConfig);
		
		main();
	});
});
