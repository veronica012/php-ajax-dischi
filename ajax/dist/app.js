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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  //chiamata ajax per recuperare l'array di dischi dal file lista_dischi.php che si trova in database
  //l'array contiene 10 oggetti
  $.ajax({
    'url': 'database/lista_dischi.php',
    'method': 'GET',
    'success': function success(dischi) {
      disegnaDisco(dischi); // console.log(dischi);

      popolaSelect(dischi);
    },
    'error': function error() {
      alert('Errore');
    }
  }); //fine chiamata ajax

  $('.autori').change(function () {
    var autore_selezionato = $(this).val();
    console.log(autore_selezionato);
    $.ajax({
      'url': 'database/lista_dischi.php?artista=' + autore_selezionato,
      'method': 'GET',
      'success': function success(dischi) {},
      'error': function error() {
        alert('Errore');
      }
    }); //fine chiamata ajax
  }); //FUNZIONI

  function disegnaDisco(array) {
    var template_html = $('#entry-template').html();
    var template_function = Handlebars.compile(template_html);
    var data = {
      'poster': '',
      'titolo': '',
      'autore': '',
      'genere': '',
      'anno': ''
    };

    for (var i = 0; i < array.length; i++) {
      var elemento_corrente = array[i];
      data.poster = elemento_corrente.poster;
      data.titolo = elemento_corrente.title;
      data.genere = elemento_corrente.genre;
      data.anno = elemento_corrente.year;
      var html_finale = template_function(data);
      $('.container-dischi').append(html_finale);
    } //fine ciclo for

  } //fine funzione


  function popolaSelect(lista_dischi) {
    for (var j = 0; j < lista_dischi.length; j++) {
      var disco = lista_dischi[j];
      console.log(disco);
      var autore_canzone = disco.author; // console.log(autore_canzone);

      $('select').append('<option value="' + autore_canzone + '">' + autore_canzone + '</option>');
    }
  }
}); //esercizio svolto senza handlebars
// for (var i = 0; i < dischi.length; i++) {
// //recupero il disco corrente
//     var disco_corrente = dischi[i];
// //creo la card
// var disco = $('<div class="disco"></div>');
// //append dell'immagine
// disco.append('<img src="'+ disco_corrente.poster + '" alt="">');
// //append del titolo
// disco.append('<h5 class="titolo">' + disco_corrente.title +'</h5>');
// //append dell'autore
// disco.append('<p class="card-text">'+ disco_corrente.author +'</p>');
// //append del genere
// disco.append('<p class="card-text">'+ disco_corrente.genre +'</p>');
// //append dell'anno
// disco.append('<p class="card-text">'+ disco_corrente.year +'</p>');
// //di ogni disco recupero il valore delle chiavi con la dot notation
//     // var poster = disco_corrente.poster;
//     // // console.log(poster);
//     // var titolo = disco_corrente.title;
//     // console.log(titolo);
//     // var autore = disco_corrente.author;
//     // console.log(autore);
//     // var genere = disco_corrente.genre;
//     // console.log(genere);
//     // var anno = disco_corrente.year;
//     // console.log(anno);
//     $('.container-dischi').append(disco);
// }

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/js/main.js ./src/app.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\esercizi-boolean-php\php-ajax-dischi\ajax\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\esercizi-boolean-php\php-ajax-dischi\ajax\src\app.scss */"./src/app.scss");


/***/ })

/******/ });