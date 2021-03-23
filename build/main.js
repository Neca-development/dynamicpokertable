/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helpers\", function() { return helpers; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\nconst helpers = {\n  aspectRatio() {\n    const players = document.querySelectorAll('.player');\n    players.forEach(element => {\n      const maw = element.offsetWidth / 2,\n            mah = element.offsetHeight / 2,\n            ava = element.querySelector('.player__avatar');\n\n      if (maw > mah) {\n        ava.style.minWidth = mah + 'px';\n        ava.style.minHeight = mah + 'px';\n      } else {\n        ava.style.minWidth = maw + 'px';\n        ava.style.minHeight = maw + 'px';\n      }\n    });\n  }\n\n};\n\n//# sourceURL=webpack:///./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"player\", function() { return player; });\n/* harmony import */ var _playersGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playersGrid */ \"./src/js/playersGrid.js\");\n\nconst player = {\n  addPlayer(name, country, coins) {\n    const grid = document.querySelector('.players-grid'),\n          player = document.createElement('span'),\n          id = Date.now(); // create player\n\n    player.setAttribute('id', id);\n    player.classList.add('player'); // create avatar\n\n    const avatar = document.createElement('div');\n    avatar.classList.add('player__avatar');\n    player.append(avatar); // Remove after test\n\n    const deleteBtn = document.createElement('button');\n    deleteBtn.classList.add('player__delete');\n    deleteBtn.textContent = 'delete';\n    player.append(deleteBtn);\n    const textField = document.createElement('div');\n    textField.classList.add('player__info');\n    textField.textContent = 'Some text.....';\n    player.append(textField);\n    if (_playersGrid__WEBPACK_IMPORTED_MODULE_0__[\"playersGrid\"].countPlayers() === _playersGrid__WEBPACK_IMPORTED_MODULE_0__[\"playersGrid\"].playersLimit) return alert('Limit is out');\n    grid.prepend(player);\n    _playersGrid__WEBPACK_IMPORTED_MODULE_0__[\"playersGrid\"].refreshGrid();\n  },\n\n  removePlayer(id) {\n    document.getElementById(id).remove();\n    _playersGrid__WEBPACK_IMPORTED_MODULE_0__[\"playersGrid\"].refreshGrid();\n  }\n\n};\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/playersGrid.js":
/*!*******************************!*\
  !*** ./src/js/playersGrid.js ***!
  \*******************************/
/*! exports provided: playersGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playersGrid\", function() { return playersGrid; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/js/helpers.js\");\n\nconst playersGrid = {\n  playersLimit: 10,\n\n  countPlayers() {\n    return document.querySelectorAll('.players-grid .player').length;\n  },\n\n  refreshGrid(playersCount) {\n    const grid = document.querySelector('.players-grid');\n    grid.classList.remove(grid.classList.item(1));\n    grid.classList.add(`players-grid_${this.countPlayers()}-players`);\n    _helpers__WEBPACK_IMPORTED_MODULE_0__[\"helpers\"].aspectRatio();\n  }\n\n};\n\n//# sourceURL=webpack:///./src/js/playersGrid.js?");

/***/ }),

/***/ "./src/js/table.js":
/*!*************************!*\
  !*** ./src/js/table.js ***!
  \*************************/
/*! exports provided: table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"table\", function() { return table; });\nconst table = {\n  drawTable(players) {\n    const tablewrapper = document.getElementById('dynamicpockertable');\n    tablewrapper.innerHTML = `\n            <div class=\"table-wrapper\">\n                <div class=\"table\" id=\"table\">\n                    <div class=\"message-box\" id=\"message-box\"></div>\n                </div>\n            </div>\n            <div class=\"players-grid\"></div >\n        `;\n    this.applyColorsToTable('#076B94', '#666');\n    this.sendMessageToTable(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Quo vero sint dolorem ab dignissimos, officiis impedit obcaecati id non explicabo nemo! Odio voluptatem magni in rerum nam aliquam recusandae inventore?`);\n  },\n\n  applyColorsToTable(tableColor, borderColor) {\n    const table = document.getElementById('table');\n    table.style.backgroundColor = tableColor;\n    table.style.borderColor = borderColor;\n  },\n\n  sendMessageToTable(message) {\n    const tablecontainer = document.getElementById('message-box');\n    tablecontainer.innerHTML = message;\n  }\n\n};\n\n//# sourceURL=webpack:///./src/js/table.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/player */ \"./src/js/player.js\");\n/* harmony import */ var _js_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/table */ \"./src/js/table.js\");\n/* harmony import */ var _js_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/helpers */ \"./src/js/helpers.js\");\n\n\n\n_js_table__WEBPACK_IMPORTED_MODULE_1__[\"table\"].drawTable([]);\nwindow.addEventListener('resize', () => {\n  _js_helpers__WEBPACK_IMPORTED_MODULE_2__[\"helpers\"].aspectRatio();\n}); // remove after test\n// add player\n\ndocument.querySelector('.test-add-player').addEventListener('click', () => {\n  _js_player__WEBPACK_IMPORTED_MODULE_0__[\"player\"].addPlayer();\n}); // remove player\n\ndocument.querySelector('#dynamicpockertable').addEventListener('click', e => {\n  if (e.target.classList.contains('player__delete')) {\n    const id = e.target.closest('.player').getAttribute('id');\n    _js_player__WEBPACK_IMPORTED_MODULE_0__[\"player\"].removePlayer(id);\n    console.log(id);\n  }\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });