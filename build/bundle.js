/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', './data/someData.txt?t=' + Date.now(), true);
	xhttp.send();
	xhttp.onreadystatechange = function () {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {

	        var parsedData = xhttp.response.trim().split('\n').map(function (line) {
	            return line.split(',');
	        }).reduce(function (obj, line) {
	            obj[line[0]] = obj[line[0]] || [];
	            obj[line[0]].push({
	                name: line[1],
	                price: line[2],
	                quantity: line[3]
	            });
	            return obj;
	        }, {});

	        console.log(parsedData);
	    }
	};

/***/ }
/******/ ]);