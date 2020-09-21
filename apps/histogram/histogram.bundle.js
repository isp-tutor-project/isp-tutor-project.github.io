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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/navbar/index.css":
/*!********************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/navbar/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../common/navbar/index.js":
/*!*******************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/navbar/index.js ***!
  \*******************************************************************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../../common/navbar/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


class NavBar {
    constructor() {
        this.el = document.querySelector("nav.navbar");
        this.homeBtn = document.getElementById("navbar_home_btn");
        this.activityTitle = document.getElementById("activity_title");
        this.glossaryBtn = document.getElementById("navbar_glossary_btn");
        this.glossaryPopup = document.querySelector(".navbar-glossary-popup");
        this.signOutBtn = document.getElementById("sign_out_button");
        this.signInText = document.getElementById("sign_in_text");
        this.goHome      = this.goHome.bind(this);
        this.toggleGlossary = this.toggleGlossary.bind(this);
        this.signOutUser = this.signOutUser.bind(this);
        this.homeBtn.addEventListener('click', this.goHome);
        this.glossaryBtn.addEventListener("click", this.toggleGlossary);
        this.signOutBtn.addEventListener("click", this.signOutUser);
    }

    goHome(e) {
        let homePage = this.calcHomePage();
        this.redirectTo(homePage);
    }

    toggleGlossary(e) {
        this.glossaryPopup.classList.toggle("hidden");
    }

    calcHomePage() {
        let homePage = localStorage.getItem("homepage");
        if (null === homePage) {
            homePage = window.location.origin + "/";
        }
        return homePage;
    }

    redirectTo(url, allowRefresh=false) {
        // prevent refresh if already on this page
        let isSamePage = window.location.href === url;
        if (!isSamePage) {
            window.location.href = url;
        } else if (allowRefresh) {
            window.location.reload();
        } else {
            console.log("same url but refresh disabled");
        }
    }

    signOutUser(e) {
        this.signInText.innerHTML = "";
        this.signInText.classList.add("invisible");
        this.signOutBtn.classList.add("invisible");
        let homePage = this.calcHomePage();
        // this does the actual signing out
        localStorage.clear();
        this.redirectTo(homePage, true);
    }

    displayActivityTitle(title) {
        this.activityTitle.innerText = title.toUpperCase();
    }


    displayUser(userName) {
        this.signInText.innerHTML = `Welcome, ${userName}`;
        this.signInText.classList.remove("invisible");
        this.signOutBtn.classList.remove("invisible");
    }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/navbar */ "../../common/navbar/index.js");

// import "@isptutorproject/navbar/index.css";




function initApp() {
    const navbar = new _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__["NavBar"]();
    const userID = localStorage.getItem("userID");

    console.log(`userName: ${userID}`);
    navbar.displayActivityTitle("Histogram Lesson");
    navbar.displayUser(userID);
    console.log("page inited");
}

initApp();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=histogram.bundle.js.map