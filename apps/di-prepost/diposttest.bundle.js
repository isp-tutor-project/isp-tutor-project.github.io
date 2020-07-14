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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/posttest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/scene-transitions-base/index.js":
/*!***********************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-transitions-base/index.js ***!
  \***********************************************************************************************/
/*! exports provided: Scene, SceneTransitionsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneTransitionsApp", function() { return SceneTransitionsApp; });

class Scene {
    constructor(app, sceneInfo) {
        this.app = app;
        // copy all sceneInfo to 'this'
        for (let [k, v] of Object.entries(sceneInfo)) {
            this[k] = v;
        }
        this.el = document.getElementById(this.id);
    }

    _isBogus() {
        return this.id === "N/A" || this.sceneType === "bogus";
    }

    enter() {
        if (this._isBogus()) {
            return;
        }
        this.defaultEnterSceneActions();
        if (this.customEnterActions.length) {
            this.performCustomEnterSceneActions();
        }
    }

    exit() {
        if (this._isBogus()) {
            return;
        }
        this.defaultExitSceneActions();
        if (this.customExitActions.length) {
            this.performCustomExitSceneActions();
        }
    }

    defaultEnterSceneActions() {
        this.el.classList.add("active");
    }

    defaultExitSceneActions() {
        this.el.classList.remove("active");
    }

    performCustomEnterSceneActions() {
        console.warn("Unimplemented Method: performCustomEnterSceneActions");
    }

    performCustomExitSceneActions() {
        console.warn("Unimplemented Method: performCustomExitSceneActions");
    }
}

class SceneTransitionsApp {
    constructor(appData) {
        this.scenes = appData.scenes;
        console.debug(this.scenes);
        this.bogusSceneInfo = {
            id: "N/A",
            sceneType: "bogus"
        }
    }

    createScene(sceneInfo) {
        console.debug("createScene()", sceneInfo);
        return new Scene(this, sceneInfo);
    }

    transitionTo(scene) {
        this.logTransition(scene);
        this.prevScene = this.currentScene;
        this.prevScene.exit();
        this.currentScene = scene;
        this.currentScene.enter();
        delete this.prevScene;
    }

    lookupScene(sceneId) {
        let sceneInfo = this.scenes[sceneId];
        if (!sceneInfo) {
            console.error(`ERROR: no such scene ${sceneId}`);
        }
        return sceneInfo;
    }

    handleTransition(transitionName) {
        let newSceneId = this.currentScene.transitions[transitionName];
        let newSceneInfo = this.lookupScene(newSceneId);
        if (!newSceneInfo) {
            return;
        }
        let newScene = this.createScene(newSceneInfo);
        console.debug(newScene);
        this.transitionTo(newScene);
    }

    logTransition(scene) {
        console.warn("Unimplemented Method: logTransition()");
    }

    setStartScene(sceneId) {
        console.debug("setStartScene()", sceneId);
        let startSceneInfo = this.lookupScene(sceneId);

        if (!this.scenes.hasOwnProperty(sceneId)) {
            console.error(`no scene named "${sceneId}"`);
            return;
        }

        this.currentScene = this.createScene(this.bogusSceneInfo);
        if (!startSceneInfo) {
            return;
        }
        let startScene = this.createScene(startSceneInfo);
        this.transitionTo(startScene);
    }

    hide(el) {
        if (el) { el.classList.add("hidden"); }
    }

    show(el) {
        if (el) { el.classList.remove("hidden"); }
    }

    makeInvisible(el) {
        if (el) {
            // el.classList.remove("visible");
            el.classList.add("invisible");
        }
    }

    makeVisible(el) {
        if (el) {
            el.classList.remove("invisible");
            // el.classList.add("visible");
        }
    }

    disable(el) {
        if (el) {
            // console.log("disabling:", el);
            el.classList.add("disabled");
        } else {
            // console.log("not disabling non-existinant element:", el);
        }
    }

    enable(el) {
        if (el) {
            // console.log("disabling:", el);
            el.classList.remove("disabled");
        } else {
            // console.log("not disabling non-existinant element:", el);
        }
    }

}


/***/ }),

/***/ "../../common/snackbar/index.css":
/*!**********************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/snackbar/index.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../common/snackbar/index.js":
/*!*********************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/snackbar/index.js ***!
  \*********************************************************************************/
/*! exports provided: SnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBar", function() { return SnackBar; });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "../../common/snackbar/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);



class SnackBar {
    constructor(eleID) {
        this.el = document.getElementById(eleID || "snackbar");
    }

    show(text) {
        this.el.innerHTML = text;
        // Add the "show" class to DIV
        // this.el.className = "show";
        this.el.classList.add("show");
        // After 3 seconds, remove the show class from DIV
        setTimeout(() => {
            // snackbar.className = snackbar.className.replace("show", "");
            this.el.classList.remove("show");
        }, 3000);    
    }
}


/***/ }),

/***/ "./data/diPostTest.json":
/*!******************************!*\
  !*** ./data/diPostTest.json ***!
  \******************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"transitions\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"transitions\":{\"prev\":\"start\",\"next\":\"carsIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro1\":{\"transitions\":{\"prev\":\"intro\",\"next\":\"carsIntro2\"},\"id\":\"carsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro2\":{\"transitions\":{\"prev\":\"carsIntro1\",\"next\":\"carsIntro3\"},\"id\":\"carsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro3\":{\"transitions\":{\"prev\":\"carsIntro2\",\"next\":\"carsResultsIntro1\"},\"id\":\"carsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro1\":{\"transitions\":{\"prev\":\"carsIntro3\",\"next\":\"carsResults1\"},\"id\":\"carsResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults1\":{\"sceneType\":\"carResults\",\"transitions\":{\"prev\":\"carsResultsIntro1\",\"next\":\"carsResultsIntro2\"},\"id\":\"carsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro2\":{\"transitions\":{\"prev\":\"carsResults1\",\"next\":\"carsResults2\"},\"id\":\"carsResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults2\":{\"sceneType\":\"carResults\",\"transitions\":{\"prev\":\"carsResultsIntro2\",\"next\":\"carsResultsIntro3\"},\"id\":\"carsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro3\":{\"transitions\":{\"prev\":\"carsResults2\",\"next\":\"carsResults3\"},\"id\":\"carsResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults3\":{\"sceneType\":\"carResults\",\"transitions\":{\"prev\":\"carsResultsIntro3\",\"next\":\"carsResultsIntro4\"},\"id\":\"carsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro4\":{\"transitions\":{\"prev\":\"carsResults3\",\"next\":\"carsResults4\"},\"id\":\"carsResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults4\":{\"sceneType\":\"carResults\",\"transitions\":{\"prev\":\"carsResultsIntro4\",\"next\":\"carsResultsIntro5\"},\"id\":\"carsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro5\":{\"transitions\":{\"prev\":\"carsResults4\",\"next\":\"carsResults5\"},\"id\":\"carsResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults5\":{\"sceneType\":\"carResults\",\"transitions\":{\"prev\":\"carsResultsIntro5\",\"next\":\"libraryIntro1\"},\"id\":\"carsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro1\":{\"transitions\":{\"prev\":\"carsResults5\",\"next\":\"libraryIntro2\"},\"id\":\"libraryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro2\":{\"transitions\":{\"prev\":\"libraryIntro1\",\"next\":\"libraryIntro3\"},\"id\":\"libraryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro3\":{\"transitions\":{\"prev\":\"libraryIntro2\",\"next\":\"libraryIntro4\"},\"id\":\"libraryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro4\":{\"transitions\":{\"prev\":\"libraryIntro3\",\"next\":\"libraryIntro5\"},\"id\":\"libraryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro5\":{\"transitions\":{\"prev\":\"libraryIntro4\",\"next\":\"libraryIntro6\"},\"id\":\"libraryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro6\":{\"transitions\":{\"prev\":\"libraryIntro5\",\"next\":\"libraryResultsIntro1\"},\"id\":\"libraryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro1\":{\"transitions\":{\"prev\":\"libraryIntro6\",\"next\":\"libraryResults1\"},\"id\":\"libraryResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults1\":{\"sceneType\":\"libraryResults\",\"transitions\":{\"prev\":\"libraryResultsIntro1\",\"next\":\"libraryResultsIntro2\"},\"id\":\"libraryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro2\":{\"transitions\":{\"prev\":\"libraryResults1\",\"next\":\"libraryResults2\"},\"id\":\"libraryResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults2\":{\"sceneType\":\"libraryResults\",\"transitions\":{\"prev\":\"libraryResultsIntro2\",\"next\":\"libraryResultsIntro3\"},\"id\":\"libraryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro3\":{\"transitions\":{\"prev\":\"libraryResults2\",\"next\":\"libraryResults3\"},\"id\":\"libraryResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults3\":{\"sceneType\":\"libraryResults\",\"transitions\":{\"prev\":\"libraryResultsIntro3\",\"next\":\"libraryResultsIntro4\"},\"id\":\"libraryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro4\":{\"transitions\":{\"prev\":\"libraryResults3\",\"next\":\"libraryResults4\"},\"id\":\"libraryResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults4\":{\"sceneType\":\"libraryResults\",\"transitions\":{\"prev\":\"libraryResultsIntro4\",\"next\":\"libraryResultsIntro5\"},\"id\":\"libraryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro5\":{\"transitions\":{\"prev\":\"libraryResults4\",\"next\":\"libraryResults5\"},\"id\":\"libraryResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults5\":{\"sceneType\":\"libraryResults\",\"transitions\":{\"prev\":\"libraryResultsIntro5\",\"next\":\"completed\"},\"id\":\"libraryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"transitions\":{\"prev\":\"libraryResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: DiTestScene, DiTestResultsScene, DiTestApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestScene", function() { return DiTestScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestResultsScene", function() { return DiTestResultsScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestApp", function() { return DiTestApp; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/scene-transitions-base */ "../../common/scene-transitions-base/index.js");
/* harmony import */ var _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @isptutorproject/snackbar */ "../../common/snackbar/index.js");







class DiTestScene extends _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_1__["Scene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.handleTransitionButton = this.handleTransitionButton.bind(this);
        this.customActions = {
            showBtns: this.showBtns,
            hideBtns: this.hideBtns,
        };
        this.btnNames = {
            prev: this.app.prevBtn,
            next: this.app.nextBtn
        };
    }


    showBtns(btnNames) {
        for (let btnName of btnNames) {
            if (this.btnNames.hasOwnProperty(btnName)) {
                this.app.show(this.btnNames[btnName]);
            }
        }
    }

    hideBtns(btnNames) {
        for (let btnName of btnNames) {
            if (this.btnNames.hasOwnProperty(btnName)) {
                this.app.hide(this.btnNames[btnName]);
            }
        }
    }


    handleTransitionButton(e) {
        e.preventDefault();
        let transitionName = e.target.dataset.transition;
        this.app.handleTransition(transitionName);
    }


    getTransitionElements() {
        return this.el.getElementsByClassName("transition-to");
    }

    setupTransitionEventHandlers() {
        for (let el of this.getTransitionElements()) {
            el.addEventListener("click", this.handleTransitionButton, { once: true });
        }
    }

    performCustomEnterSceneActions() {
        for (let action of this.customEnterActions) {
            let name = action.name;
            let args = action.args;
            if (this.customActions.hasOwnProperty(name)) {
                this[name](args);
            }
        }
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.setupTransitionEventHandlers();
        if (false) {} else {
            this.app.show(this.app.prevBtn);
        }
        this.app.show(this.app.nextBtn);
    }


}

class DiTestResultsScene extends DiTestScene {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.q1Answer = null;
        this.showLeftMean = this.showLeftMean.bind(this);
        this.showRightMean = this.showRightMean.bind(this);
        this.showSortedTable = this.showSortedTable.bind(this);
        this.handleQ1Submit = this.handleQ1Submit.bind(this);
        this.handleQ2Submit = this.handleQ2Submit.bind(this);
        this.handleQ3Submit = this.handleQ3Submit.bind(this);
        // this.handleFormChange = this.handleFormChange.bind(this);
        this.setupElementReferences();
        this.setupEventHandlers();
    }

    setupElementReferences() {
        let side = "left"
        this.leftMeanBtn = document.getElementById(`${this.id}_reveal_${side}_mean`);
        this.leftMeanValue = document.getElementById(`${this.id}_${side}_mean`);
        side = "right";
        this.rightMeanBtn   = document.getElementById(`${this.id}_reveal_${side}_mean`);
        this.rightMeanValue = document.getElementById(`${this.id}_${side}_mean`);
        this.showSortedTableBtn = document.getElementById(`${this.id}_show_sorted_table`);
        this.sortedTableText = document.getElementById(`${this.id}_sorted_text`);
        this.sortedImg = document.getElementById(`${this.id}_sorted`);
        this.unsortedImg = document.getElementById(`${this.id}_unsorted`);
        // this.notifyRegion = document.getElementById(`${this.id}_notification_region`);
        this.q1Form = document.getElementById(`${this.id}_q1_form`);
        this.q2Form = document.getElementById(`${this.id}_q2_form`);
        this.q3Form = document.getElementById(`${this.id}_q3_form`);
        this.q2Text = document.getElementById(`${this.id}_q2_text`);
        this.q3Text = document.getElementById(`${this.id}_q3_text`);
        this.q2TextArea = this.q2Form.querySelector(".form-control");
        this.q1SubmitBtn = document.getElementById(`${this.id}_q1_submit`);
        this.q2SubmitBtn = document.getElementById(`${this.id}_q2_submit`);
        this.q3SubmitBtn = document.getElementById(`${this.id}_q3_submit`);
    }

    setupEventHandlers() {
        this.leftMeanBtn.addEventListener("click", this.showLeftMean);
        this.rightMeanBtn.addEventListener("click", this.showRightMean);
        this.showSortedTableBtn.addEventListener("click", this.showSortedTable);
        this.q1SubmitBtn.addEventListener("click", this.handleQ1Submit);
        this.q2SubmitBtn.addEventListener("click", this.handleQ2Submit);
        this.q3SubmitBtn.addEventListener("click", this.handleQ3Submit);
    }

    showLeftMean(e) {
        this.app.hide(this.leftMeanBtn);
        this.app.show(this.leftMeanValue);
    }

    showRightMean(e) {
        this.app.hide(this.rightMeanBtn);
        this.app.show(this.rightMeanValue);
    }

    showSortedTable(e) {
        this.app.hide(this.showSortedTableBtn);
        this.app.hide(this.unsortedImg);
        this.app.show(this.sortedImg);
        this.app.show(this.sortedTableText);
    }

    handleQ1Submit(e) {
        e.preventDefault();
        if (this.q1Form.checkValidity()) {
            let selected = this.q1Form.querySelector('input[type="radio"]:checked');
            this.q1Answer = selected.value;
            this.app.logStudentAnswer("q1", this.q1Answer);
            let phRepl = `<span class="q1_answer">${this.q1Answer}</span>`;
            this.questions.q2.text = this.questions.q2.text.replace("PLACEHOLDER",
                                                                    phRepl);
            this.questions.q3.text = this.questions.q3.text.replace("PLACEHOLDER",
                                                                    phRepl);
            this.q2Text.innerHTML = this.questions.q2.text;
            this.q3Text.innerHTML = this.questions.q3.text;
            this.app.hide(this.q1Form);
            this.app.show(this.q2Form);
            this.q2TextArea.focus();
        } else {
            this.app.snackbar.show("Please answer the question");
        }
    }

    handleQ2Submit(e) {
        e.preventDefault();
        // unfornately, textareas don't support pattern and nothing but
        // whitespace is considered valid
        if (this.q2Form.checkValidity() && this.q2TextArea.value.trim() !== "") {

            let answer = this.q2TextArea.value.trim();
            this.app.logStudentAnswer("q2", answer);
            this.app.hide(this.q2Form);
            this.app.show(this.q3Form);
        } else {
            this.app.snackbar.show("Please answer the question");
        }
    }

    handleQ3Submit(e) {
        e.preventDefault();
        let form = this.q3Form;
        if (form.checkValidity()) {
            let selected = form.querySelector('input[type="radio"]:checked');
            let answer = selected.value;
            this.app.logStudentAnswer("q3", answer);
            this.app.enable(this.app.nextBtn);
            // disable the submit button and radios, which all have the same
            // name but different IDs
            let name = selected.name;
            for (let radio of form.querySelectorAll(`input[name="${name}"]`)) {
                // using disabled css class doesn't seem to work, using
                // property instead
                radio.disabled = true;
            }
            this.app.disable(this.q3SubmitBtn);
            // I think this is unnecessary, as it should already be enabled
            // if (process.env.NODE_ENV !== "production") {
            //     this.app.enable(this.app.prevBtn);
            // }
        } else {
            this.app.snackbar.show("Please answer the question");
        }
    }


    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.app.hide(this.leftMeanValue);
        this.app.hide(this.rightMeanValue);
        this.app.hide(this.sortedTableText);
        this.app.show(this.leftMeanBtn);
        this.app.show(this.rightMeanBtn);
        this.app.show(this.showSortedTableBtn);
        this.app.hide(this.q2Form);
        this.app.hide(this.q3Form);
        this.app.show(this.q1Form);
        if (false) {} else {
            this.app.show(this.app.prevBtn);
            this.app.show(this.app.nextBtn);
            this.app.enable(this.app.prevBtn);
            this.app.enable(this.app.nextBtn);
        }
    }

}


class DiTestApp extends _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_1__["SceneTransitionsApp"]{
    constructor(testData, testName = "") {
        super(testData);
        this.testName = testName;
        this.snackbar = new _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_2__["SnackBar"]();
        this.goHomeBtn = document.getElementById("go_home_btn");
        this.nextBtn = document.getElementById("next_btn");
        this.prevBtn = document.getElementById("prev_btn");
        this.sceneIdRegion = document.getElementById("scene_id_region");
        this.nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("next");
        });
        this.prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("prev");
        });
        this.goHomeBtn.addEventListener("click", (e) => {
            window.location.href = "/";
        });
        window.app = this;
    }

    createScene(sceneInfo) {
        let newScene;
        // console.log(sceneInfo);
        if (["bogus", "standard"].includes(sceneInfo.sceneType)) {
            newScene = new DiTestScene(this, sceneInfo);
        } else if ("resultsScene" === sceneInfo.sceneType) {
            newScene = new DiTestResultsScene(this, sceneInfo);
        } else {
            console.error(`${sceneInfo.id}: Unknown sceneType: ${sceneInfo.sceneType}`);
        }
        return newScene;
    }

    logTransition(scene) {
        // FIXME: this needs to get stored in firestore
        let data = {
            action: "SCENE_TRANSITION",
            from: this.currentScene.id,
            to: scene.id,
            timestamp: new Date().toLocaleString()
        };
        console.log(scene.id, data);
    }

    logStudentAnswer(questionName, answer) {
        let question = this.currentScene.questions[questionName];
        let isCorrect = "N/A";
        if (question.hasOwnProperty("correctAnswer")) {
            isCorrect = (answer === question.correctAnswer)
        }
        let qid = `${this.currentScene.id}.${questionName}`;
        if ("" !== this.testName) {
            qid = `${this.testName}.${qid}`;
        }
        let data = {
            action: "SUBMIT_ANSWER",
            questionId: qid,
            questionText: question.text,
            answer: answer,
            isCorrect: isCorrect,
            timestamp: new Date().toLocaleString()
        }
        console.log(data);
    }

    transitionTo(scene) {
        super.transitionTo(scene);
        this.displaySceneId();
    }

    displaySceneId() {
        if (true) {
            this.sceneIdRegion.innerHTML = this.currentScene.id;
        }
    }

}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/posttest.js":
/*!*************************!*\
  !*** ./src/posttest.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const postTestData = __webpack_require__(/*! ../data/diPostTest.json */ "./data/diPostTest.json");

function handleQ1Submit(e) {
    console.log("clicked");
    e.preventDefault();
    let btn = e.target;
    let sceneId = btn.id.split('_')[0];
    let form = document.getElementById(`${sceneId}_q1_form`);
    if (form.checkValidity()) {
        let selected = form.querySelector('input[type="radio"]:checked');
        console.log(selected.value, selected.labels[0].innerText);
    } else {
        console.log("invalid");
        let errMsg = document.getElementById(`${sceneId}_notification_region`);
        console.log(errMsg);
        errMsg.classList.remove("invisible");
    }
}

class CarResultsScene extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
    }
}

class LibraryResultsScene extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
    }
}

class DiPostTestApp extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestApp"] {

    createScene(sceneInfo) {
        let scene;
        console.log("DiPostTestApp::createScene()", sceneInfo);
        switch (sceneInfo.sceneType) {
            case "carResults":
                scene = new CarResultsScene(this, sceneInfo);
                break;
            case "libraryResults":
                scene = new LibraryResultsScene(this, sceneInfo);
                break;
            default:
                scene = new _index__WEBPACK_IMPORTED_MODULE_0__["DiTestScene"](this, sceneInfo);
        }
        return scene;
    }
}

let app = new DiPostTestApp(postTestData, "diposttest");
app.setStartScene("start");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtdHJhbnNpdGlvbnMtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NjM0NyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9zdHRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxRQUFRO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0M7O0FBRUE7QUFDQSxpQkFBaUIsK0JBQStCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUpBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQjs7O0FBR2Q7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJzQjs7QUFLMkI7QUFDSTs7O0FBRzlDLDBCQUEwQiw2RUFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBcUMsRUFBRSxFQUUxQztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUSxVQUFVLEtBQUs7QUFDN0Usd0RBQXdELFFBQVEsR0FBRyxLQUFLO0FBQ3hFO0FBQ0EseURBQXlELFFBQVEsVUFBVSxLQUFLO0FBQ2hGLHlEQUF5RCxRQUFRLEdBQUcsS0FBSztBQUN6RSw2REFBNkQsUUFBUTtBQUNyRSwwREFBMEQsUUFBUTtBQUNsRSxvREFBb0QsUUFBUTtBQUM1RCxzREFBc0QsUUFBUTtBQUM5RCwwREFBMEQsUUFBUTtBQUNsRSxpREFBaUQsUUFBUTtBQUN6RCxpREFBaUQsUUFBUTtBQUN6RCxpREFBaUQsUUFBUTtBQUN6RCxpREFBaUQsUUFBUTtBQUN6RCxpREFBaUQsUUFBUTtBQUN6RDtBQUNBLHNEQUFzRCxRQUFRO0FBQzlELHNEQUFzRCxRQUFRO0FBQzlELHNEQUFzRCxRQUFRO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxLQUFLO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQXFDLEVBQUUsRUFJMUM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPLHdCQUF3QiwyRkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsYUFBYSx1QkFBdUIsb0JBQW9CO0FBQ3JGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCLEdBQUcsYUFBYTtBQUMxRDtBQUNBLHFCQUFxQixjQUFjLEdBQUcsSUFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxJQUFzQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7QUMzVEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBcUU7O0FBRXJFLHFCQUFxQixtQkFBTyxDQUFDLHVEQUF5Qjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qix5REFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHlEQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsZ0RBQVM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0RBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJkaXBvc3R0ZXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Bvc3R0ZXN0LmpzXCIpO1xuIiwiXG5leHBvcnQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICAvLyBjb3B5IGFsbCBzY2VuZUluZm8gdG8gJ3RoaXMnXG4gICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzY2VuZUluZm8pKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgX2lzQm9ndXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID09PSBcIk4vQVwiIHx8IHRoaXMuc2NlbmVUeXBlID09PSBcImJvZ3VzXCI7XG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FbnRlckFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRXhpdEFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNjZW5lVHJhbnNpdGlvbnNBcHAge1xuICAgIGNvbnN0cnVjdG9yKGFwcERhdGEpIHtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBhcHBEYXRhLnNjZW5lcztcbiAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnNjZW5lcyk7XG4gICAgICAgIHRoaXMuYm9ndXNTY2VuZUluZm8gPSB7XG4gICAgICAgICAgICBpZDogXCJOL0FcIixcbiAgICAgICAgICAgIHNjZW5lVHlwZTogXCJib2d1c1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImNyZWF0ZVNjZW5lKClcIiwgc2NlbmVJbmZvKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgIH1cblxuICAgIHRyYW5zaXRpb25UbyhzY2VuZSkge1xuICAgICAgICB0aGlzLmxvZ1RyYW5zaXRpb24oc2NlbmUpO1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICB0aGlzLnByZXZTY2VuZS5leGl0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmVudGVyKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByZXZTY2VuZTtcbiAgICB9XG5cbiAgICBsb29rdXBTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGxldCBzY2VuZUluZm8gPSB0aGlzLnNjZW5lc1tzY2VuZUlkXTtcbiAgICAgICAgaWYgKCFzY2VuZUluZm8pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SOiBubyBzdWNoIHNjZW5lICR7c2NlbmVJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmVJbmZvO1xuICAgIH1cblxuICAgIGhhbmRsZVRyYW5zaXRpb24odHJhbnNpdGlvbk5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1NjZW5lSWQgPSB0aGlzLmN1cnJlbnRTY2VuZS50cmFuc2l0aW9uc1t0cmFuc2l0aW9uTmFtZV07XG4gICAgICAgIGxldCBuZXdTY2VuZUluZm8gPSB0aGlzLmxvb2t1cFNjZW5lKG5ld1NjZW5lSWQpO1xuICAgICAgICBpZiAoIW5ld1NjZW5lSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUobmV3U2NlbmVJbmZvKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhuZXdTY2VuZSk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvKG5ld1NjZW5lKTtcbiAgICB9XG5cbiAgICBsb2dUcmFuc2l0aW9uKHNjZW5lKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2dUcmFuc2l0aW9uKClcIik7XG4gICAgfVxuXG4gICAgc2V0U3RhcnRTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJzZXRTdGFydFNjZW5lKClcIiwgc2NlbmVJZCk7XG4gICAgICAgIGxldCBzdGFydFNjZW5lSW5mbyA9IHRoaXMubG9va3VwU2NlbmUoc2NlbmVJZCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lcy5oYXNPd25Qcm9wZXJ0eShzY2VuZUlkKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgbm8gc2NlbmUgbmFtZWQgXCIke3NjZW5lSWR9XCJgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jcmVhdGVTY2VuZSh0aGlzLmJvZ3VzU2NlbmVJbmZvKTtcbiAgICAgICAgaWYgKCFzdGFydFNjZW5lSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydFNjZW5lID0gdGhpcy5jcmVhdGVTY2VuZShzdGFydFNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvKHN0YXJ0U2NlbmUpO1xuICAgIH1cblxuICAgIGhpZGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBzaG93KGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgbWFrZUludmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VWaXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIC8vIGVsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVJRCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSUQgfHwgXCJzbmFja2JhclwiKTtcbiAgICB9XG5cbiAgICBzaG93KHRleHQpIHtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAvLyBBZGQgdGhlIFwic2hvd1wiIGNsYXNzIHRvIERJVlxuICAgICAgICAvLyB0aGlzLmVsLmNsYXNzTmFtZSA9IFwic2hvd1wiO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAvLyBBZnRlciAzIHNlY29uZHMsIHJlbW92ZSB0aGUgc2hvdyBjbGFzcyBmcm9tIERJVlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHNuYWNrYmFyLmNsYXNzTmFtZSA9IHNuYWNrYmFyLmNsYXNzTmFtZS5yZXBsYWNlKFwic2hvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIH0sIDMwMDApOyAgICBcbiAgICB9XG59XG4iLCJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQge1xuICAgIFNjZW5lVHJhbnNpdGlvbnNBcHAsXG4gICAgU2NlbmVcbn0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtdHJhbnNpdGlvbnMtYmFzZVwiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zbmFja2JhclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RTY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkJ1dHRvbiA9IHRoaXMuaGFuZGxlVHJhbnNpdGlvbkJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmN1c3RvbUFjdGlvbnMgPSB7XG4gICAgICAgICAgICBzaG93QnRuczogdGhpcy5zaG93QnRucyxcbiAgICAgICAgICAgIGhpZGVCdG5zOiB0aGlzLmhpZGVCdG5zLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ0bk5hbWVzID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5hcHAucHJldkJ0bixcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuYXBwLm5leHRCdG5cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIHNob3dCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbkJ1dHRvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRyYW5zaXRpb25OYW1lID0gZS50YXJnZXQuZGF0YXNldC50cmFuc2l0aW9uO1xuICAgICAgICB0aGlzLmFwcC5oYW5kbGVUcmFuc2l0aW9uKHRyYW5zaXRpb25OYW1lKTtcbiAgICB9XG5cblxuICAgIGdldFRyYW5zaXRpb25FbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYW5zaXRpb24tdG9cIik7XG4gICAgfVxuXG4gICAgc2V0dXBUcmFuc2l0aW9uRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRUcmFuc2l0aW9uRWxlbWVudHMoKSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkJ1dHRvbiwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5jdXN0b21FbnRlckFjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gYWN0aW9uLm5hbWU7XG4gICAgICAgICAgICBsZXQgYXJncyA9IGFjdGlvbi5hcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnNldHVwVHJhbnNpdGlvbkV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgRGlUZXN0UmVzdWx0c1NjZW5lIGV4dGVuZHMgRGlUZXN0U2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5xMUFuc3dlciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd0xlZnRNZWFuID0gdGhpcy5zaG93TGVmdE1lYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93UmlnaHRNZWFuID0gdGhpcy5zaG93UmlnaHRNZWFuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZFRhYmxlID0gdGhpcy5zaG93U29ydGVkVGFibGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRMVN1Ym1pdCA9IHRoaXMuaGFuZGxlUTFTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRMlN1Ym1pdCA9IHRoaXMuaGFuZGxlUTJTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRM1N1Ym1pdCA9IHRoaXMuaGFuZGxlUTNTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlID0gdGhpcy5oYW5kbGVGb3JtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50UmVmZXJlbmNlcygpO1xuICAgICAgICB0aGlzLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHNldHVwRWxlbWVudFJlZmVyZW5jZXMoKSB7XG4gICAgICAgIGxldCBzaWRlID0gXCJsZWZ0XCJcbiAgICAgICAgdGhpcy5sZWZ0TWVhbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVhblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fJHtzaWRlfV9tZWFuYCk7XG4gICAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMucmlnaHRNZWFuQnRuICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9yZXZlYWxfJHtzaWRlfV9tZWFuYCk7XG4gICAgICAgIHRoaXMucmlnaHRNZWFuVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zaG93X3NvcnRlZF90YWJsZWApO1xuICAgICAgICB0aGlzLnNvcnRlZFRhYmxlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3NvcnRlZF90ZXh0YCk7XG4gICAgICAgIHRoaXMuc29ydGVkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkYCk7XG4gICAgICAgIHRoaXMudW5zb3J0ZWRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV91bnNvcnRlZGApO1xuICAgICAgICAvLyB0aGlzLm5vdGlmeVJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X25vdGlmaWNhdGlvbl9yZWdpb25gKTtcbiAgICAgICAgdGhpcy5xMUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMV9mb3JtYCk7XG4gICAgICAgIHRoaXMucTJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfZm9ybWApO1xuICAgICAgICB0aGlzLnEzRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EzX2Zvcm1gKTtcbiAgICAgICAgdGhpcy5xMlRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl90ZXh0YCk7XG4gICAgICAgIHRoaXMucTNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTNfdGV4dGApO1xuICAgICAgICB0aGlzLnEyVGV4dEFyZWEgPSB0aGlzLnEyRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgdGhpcy5xMVN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3ExX3N1Ym1pdGApO1xuICAgICAgICB0aGlzLnEyU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfc3VibWl0YCk7XG4gICAgICAgIHRoaXMucTNTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xM19zdWJtaXRgKTtcbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMubGVmdE1lYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd0xlZnRNZWFuKTtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1JpZ2h0TWVhbik7XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNob3dTb3J0ZWRUYWJsZSk7XG4gICAgICAgIHRoaXMucTFTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUTFTdWJtaXQpO1xuICAgICAgICB0aGlzLnEyU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVEyU3VibWl0KTtcbiAgICAgICAgdGhpcy5xM1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVRM1N1Ym1pdCk7XG4gICAgfVxuXG4gICAgc2hvd0xlZnRNZWFuKGUpIHtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmxlZnRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmxlZnRNZWFuVmFsdWUpO1xuICAgIH1cblxuICAgIHNob3dSaWdodE1lYW4oZSkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucmlnaHRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnJpZ2h0TWVhblZhbHVlKTtcbiAgICB9XG5cbiAgICBzaG93U29ydGVkVGFibGUoZSkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnVuc29ydGVkSW1nKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZEltZyk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgIH1cblxuICAgIGhhbmRsZVExU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5xMUZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnExRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO1xuICAgICAgICAgICAgdGhpcy5xMUFuc3dlciA9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hcHAubG9nU3R1ZGVudEFuc3dlcihcInExXCIsIHRoaXMucTFBbnN3ZXIpO1xuICAgICAgICAgICAgbGV0IHBoUmVwbCA9IGA8c3BhbiBjbGFzcz1cInExX2Fuc3dlclwiPiR7dGhpcy5xMUFuc3dlcn08L3NwYW4+YDtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLnEyLnRleHQgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0LnJlcGxhY2UoXCJQTEFDRUhPTERFUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaFJlcGwpO1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMucTMudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQucmVwbGFjZShcIlBMQUNFSE9MREVSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoUmVwbCk7XG4gICAgICAgICAgICB0aGlzLnEyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5xM1RleHQuaW5uZXJIVE1MID0gdGhpcy5xdWVzdGlvbnMucTMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5xMUZvcm0pO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnEyRm9ybSk7XG4gICAgICAgICAgICB0aGlzLnEyVGV4dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNuYWNrYmFyLnNob3coXCJQbGVhc2UgYW5zd2VyIHRoZSBxdWVzdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVEyU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB1bmZvcm5hdGVseSwgdGV4dGFyZWFzIGRvbid0IHN1cHBvcnQgcGF0dGVybiBhbmQgbm90aGluZyBidXRcbiAgICAgICAgLy8gd2hpdGVzcGFjZSBpcyBjb25zaWRlcmVkIHZhbGlkXG4gICAgICAgIGlmICh0aGlzLnEyRm9ybS5jaGVja1ZhbGlkaXR5KCkgJiYgdGhpcy5xMlRleHRBcmVhLnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuXG4gICAgICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy5xMlRleHRBcmVhLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmxvZ1N0dWRlbnRBbnN3ZXIoXCJxMlwiLCBhbnN3ZXIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnEyRm9ybSk7XG4gICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucTNGb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNuYWNrYmFyLnNob3coXCJQbGVhc2UgYW5zd2VyIHRoZSBxdWVzdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVEzU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybSA9IHRoaXMucTNGb3JtO1xuICAgICAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBzZWxlY3RlZC52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmxvZ1N0dWRlbnRBbnN3ZXIoXCJxM1wiLCBhbnN3ZXIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAgICAgLy8gZGlzYWJsZSB0aGUgc3VibWl0IGJ1dHRvbiBhbmQgcmFkaW9zLCB3aGljaCBhbGwgaGF2ZSB0aGUgc2FtZVxuICAgICAgICAgICAgLy8gbmFtZSBidXQgZGlmZmVyZW50IElEc1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBzZWxlY3RlZC5uYW1lO1xuICAgICAgICAgICAgZm9yIChsZXQgcmFkaW8gb2YgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lPVwiJHtuYW1lfVwiXWApKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZGlzYWJsZWQgY3NzIGNsYXNzIGRvZXNuJ3Qgc2VlbSB0byB3b3JrLCB1c2luZ1xuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IGluc3RlYWRcbiAgICAgICAgICAgICAgICByYWRpby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMucTNTdWJtaXRCdG4pO1xuICAgICAgICAgICAgLy8gSSB0aGluayB0aGlzIGlzIHVubmVjZXNzYXJ5LCBhcyBpdCBzaG91bGQgYWxyZWFkeSBiZSBlbmFibGVkXG4gICAgICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc25hY2tiYXIuc2hvdyhcIlBsZWFzZSBhbnN3ZXIgdGhlIHF1ZXN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMubGVmdE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5yaWdodE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMubGVmdE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucmlnaHRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5xMkZvcm0pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucTNGb3JtKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnExRm9ybSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIERpVGVzdEFwcCBleHRlbmRzIFNjZW5lVHJhbnNpdGlvbnNBcHB7XG4gICAgY29uc3RydWN0b3IodGVzdERhdGEsIHRlc3ROYW1lID0gXCJcIikge1xuICAgICAgICBzdXBlcih0ZXN0RGF0YSk7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgICAgICB0aGlzLmdvSG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29faG9tZV9idG5cIik7XG4gICAgICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG4gICAgICAgIHRoaXMucHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldl9idG5cIik7XG4gICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVfaWRfcmVnaW9uXCIpO1xuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oXCJuZXh0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uKFwicHJldlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hcHAgPSB0aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgbmV3U2NlbmU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lSW5mbyk7XG4gICAgICAgIGlmIChbXCJib2d1c1wiLCBcInN0YW5kYXJkXCJdLmluY2x1ZGVzKHNjZW5lSW5mby5zY2VuZVR5cGUpKSB7XG4gICAgICAgICAgICBuZXdTY2VuZSA9IG5ldyBEaVRlc3RTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKFwicmVzdWx0c1NjZW5lXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpVGVzdFJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzY2VuZUluZm8uaWR9OiBVbmtub3duIHNjZW5lVHlwZTogJHtzY2VuZUluZm8uc2NlbmVUeXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcbiAgICB9XG5cbiAgICBsb2dUcmFuc2l0aW9uKHNjZW5lKSB7XG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIG5lZWRzIHRvIGdldCBzdG9yZWQgaW4gZmlyZXN0b3JlXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcIlNDRU5FX1RSQU5TSVRJT05cIixcbiAgICAgICAgICAgIGZyb206IHRoaXMuY3VycmVudFNjZW5lLmlkLFxuICAgICAgICAgICAgdG86IHNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2NlbmUuaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIGxvZ1N0dWRlbnRBbnN3ZXIocXVlc3Rpb25OYW1lLCBhbnN3ZXIpIHtcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50U2NlbmUucXVlc3Rpb25zW3F1ZXN0aW9uTmFtZV07XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSBcIk4vQVwiO1xuICAgICAgICBpZiAocXVlc3Rpb24uaGFzT3duUHJvcGVydHkoXCJjb3JyZWN0QW5zd2VyXCIpKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSAoYW5zd2VyID09PSBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyKVxuICAgICAgICB9XG4gICAgICAgIGxldCBxaWQgPSBgJHt0aGlzLmN1cnJlbnRTY2VuZS5pZH0uJHtxdWVzdGlvbk5hbWV9YDtcbiAgICAgICAgaWYgKFwiXCIgIT09IHRoaXMudGVzdE5hbWUpIHtcbiAgICAgICAgICAgIHFpZCA9IGAke3RoaXMudGVzdE5hbWV9LiR7cWlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiU1VCTUlUX0FOU1dFUlwiLFxuICAgICAgICAgICAgcXVlc3Rpb25JZDogcWlkLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVzdGlvbi50ZXh0LFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvblRvKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyLnRyYW5zaXRpb25UbyhzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IERpVGVzdEFwcCwgRGlUZXN0U2NlbmUsIERpVGVzdFJlc3VsdHNTY2VuZSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IHBvc3RUZXN0RGF0YSA9IHJlcXVpcmUoXCIuLi9kYXRhL2RpUG9zdFRlc3QuanNvblwiKTtcblxuZnVuY3Rpb24gaGFuZGxlUTFTdWJtaXQoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGJ0biA9IGUudGFyZ2V0O1xuICAgIGxldCBzY2VuZUlkID0gYnRuLmlkLnNwbGl0KCdfJylbMF07XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzY2VuZUlkfV9xMV9mb3JtYCk7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWQudmFsdWUsIHNlbGVjdGVkLmxhYmVsc1swXS5pbm5lclRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW52YWxpZFwiKTtcbiAgICAgICAgbGV0IGVyck1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NjZW5lSWR9X25vdGlmaWNhdGlvbl9yZWdpb25gKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyTXNnKTtcbiAgICAgICAgZXJyTXNnLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgfVxufVxuXG5jbGFzcyBDYXJSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RSZXN1bHRzU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICB9XG59XG5cbmNsYXNzIExpYnJhcnlSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RSZXN1bHRzU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICB9XG59XG5cbmNsYXNzIERpUG9zdFRlc3RBcHAgZXh0ZW5kcyBEaVRlc3RBcHAge1xuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGxldCBzY2VuZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaVBvc3RUZXN0QXBwOjpjcmVhdGVTY2VuZSgpXCIsIHNjZW5lSW5mbyk7XG4gICAgICAgIHN3aXRjaCAoc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImNhclJlc3VsdHNcIjpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBDYXJSZXN1bHRzU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaWJyYXJ5UmVzdWx0c1wiOlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IExpYnJhcnlSZXN1bHRzU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgRGlUZXN0U2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxufVxuXG5sZXQgYXBwID0gbmV3IERpUG9zdFRlc3RBcHAocG9zdFRlc3REYXRhLCBcImRpcG9zdHRlc3RcIik7XG5hcHAuc2V0U3RhcnRTY2VuZShcInN0YXJ0XCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==