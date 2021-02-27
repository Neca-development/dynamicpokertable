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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/playersGrid.js
var playersGrid = {
  playersLimit: 10,
  countPlayers: function countPlayers() {
    return document.querySelectorAll('.players-grid .player').length;
  },
  refreshGrid: function refreshGrid(playersCount) {
    var grid = document.querySelector('.players-grid');
    grid.classList.remove(grid.classList.item(1));
    grid.classList.add("players-grid_".concat(this.countPlayers(), "-players"));
  }
};
// CONCATENATED MODULE: ./src/js/player.js

var player_player = {
  addPlayer: function addPlayer(name, country, coins) {
    var grid = document.querySelector('.players-grid'),
        player = document.createElement('div'),
        id = Date.now(); // create player

    player.setAttribute('id', id);
    player.classList.add('player'); // create avatar

    var avatar = document.createElement('div');
    avatar.classList.add('player__avatar');
    player.append(avatar); // Remove after test

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('player__delete');
    deleteBtn.textContent = 'delete';
    player.append(deleteBtn);
    var textField = document.createElement('div');
    textField.classList.add('player__info');
    textField.textContent = 'Some text.....';
    player.append(textField);
    if (playersGrid.countPlayers() === playersGrid.playersLimit) return alert('Лимит превывшен');
    grid.append(player);
    playersGrid.refreshGrid();
  },
  removePlayer: function removePlayer(id) {
    document.getElementById(id).remove();
    playersGrid.refreshGrid();
  }
};
// CONCATENATED MODULE: ./src/js/table.js
var table = {
  drawTable: function drawTable(players) {
    var tablewrapper = document.getElementById('dynamicpockertable');
    tablewrapper.innerHTML = "\n            <div class=\"table-wrapper\">\n            <div class=\"table\" id=\"table\"></div>\n            </div>\n            <div class=\"message-box\" id=\"message-box\"></div>\n            <div class=\"players-grid\"></div >\n        ";
    this.applyColorsToTable('#076B94', '#666');
    this.sendMessageToTable("Hello from container!!!");
  },
  applyColorsToTable: function applyColorsToTable(tableColor, borderColor) {
    var table = document.getElementById('table');
    table.style.backgroundColor = tableColor;
    table.style.borderColor = borderColor;
  },
  sendMessageToTable: function sendMessageToTable(message) {
    var tablecontainer = document.getElementById('message-box');
    tablecontainer.innerHTML = message;
  }
};
// CONCATENATED MODULE: ./src/main.js


table.drawTable([]); // remove after test
// add player

document.querySelector('.test-add-player').addEventListener('click', function () {
  player_player.addPlayer();
}); // remove player

document.querySelector('#dynamicpockertable').addEventListener('click', function (e) {
  if (e.target.classList.contains('player__delete')) {
    var id = e.target.closest('.player').getAttribute('id');
    player_player.removePlayer(id);
    console.log(id);
  }
});

/***/ })
/******/ ]);