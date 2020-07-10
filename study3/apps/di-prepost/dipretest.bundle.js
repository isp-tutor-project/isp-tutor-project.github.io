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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pretest.js");
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
            console.log("disabling:", el);
            el.classList.add("disabled");
        } else {
            console.log("not disabling non-existinant element:", el);
        }
    }

    enable(el) {
        if (el) {
            console.log("disabling:", el);
            el.classList.remove("disabled");
        } else {
            console.log("not disabling non-existinant element:", el);
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

/***/ "./data/diPreTest.json":
/*!*****************************!*\
  !*** ./data/diPreTest.json ***!
  \*****************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"transitions\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"transitions\":{\"prev\":\"start\",\"next\":\"memoryIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro1\":{\"transitions\":{\"prev\":\"intro\",\"next\":\"memoryIntro2\"},\"id\":\"memoryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro2\":{\"transitions\":{\"prev\":\"memoryIntro1\",\"next\":\"memoryIntro3\"},\"id\":\"memoryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro3\":{\"transitions\":{\"prev\":\"memoryIntro2\",\"next\":\"memoryIntro4\"},\"id\":\"memoryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro4\":{\"transitions\":{\"prev\":\"memoryIntro3\",\"next\":\"memoryIntro5\"},\"id\":\"memoryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro5\":{\"transitions\":{\"prev\":\"memoryIntro4\",\"next\":\"memoryIntro6\"},\"id\":\"memoryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro6\":{\"transitions\":{\"prev\":\"memoryIntro5\",\"next\":\"memoryIntro7\"},\"id\":\"memoryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro7\":{\"transitions\":{\"prev\":\"memoryIntro6\",\"next\":\"memoryResults1Intro\"},\"id\":\"memoryIntro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1Intro\":{\"transitions\":{\"prev\":\"memoryIntro7\",\"next\":\"memoryResults1\"},\"id\":\"memoryResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults1Intro\",\"next\":\"memoryResults2Intro\"},\"id\":\"memoryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2Intro\":{\"transitions\":{\"prev\":\"memoryResults1\",\"next\":\"memoryResults2\"},\"id\":\"memoryResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults2Intro\",\"next\":\"memoryResults3Intro\"},\"id\":\"memoryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3Intro\":{\"transitions\":{\"prev\":\"memoryResults2\",\"next\":\"memoryResults3\"},\"id\":\"memoryResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults3Intro\",\"next\":\"memoryResults4Intro\"},\"id\":\"memoryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4Intro\":{\"transitions\":{\"prev\":\"memoryResults3\",\"next\":\"memoryResults4\"},\"id\":\"memoryResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults4Intro\",\"next\":\"memoryResults5Intro\"},\"id\":\"memoryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5Intro\":{\"transitions\":{\"prev\":\"memoryResults4\",\"next\":\"memoryResults5\"},\"id\":\"memoryResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults5Intro\",\"next\":\"rocketsIntro1\"},\"id\":\"memoryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro1\":{\"transitions\":{\"prev\":\"memoryResults5\",\"next\":\"rocketsIntro2\"},\"id\":\"rocketsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro2\":{\"transitions\":{\"prev\":\"rocketsIntro1\",\"next\":\"rocketsIntro3\"},\"id\":\"rocketsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro3\":{\"transitions\":{\"prev\":\"rocketsIntro2\",\"next\":\"rocketsIntro4\"},\"id\":\"rocketsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro4\":{\"transitions\":{\"prev\":\"rocketsIntro3\",\"next\":\"rocketsResults1Intro\"},\"id\":\"rocketsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1Intro\":{\"transitions\":{\"prev\":\"rocketsIntro4\",\"next\":\"rocketsResults1\"},\"id\":\"rocketsResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults1Intro\",\"next\":\"rocketsResults2Intro\"},\"id\":\"rocketsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest about which rocket flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2Intro\":{\"transitions\":{\"prev\":\"rocketsResults1\",\"next\":\"rocketsResults2\"},\"id\":\"rocketsResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults2Intro\",\"next\":\"rocketsResults3Intro\"},\"id\":\"rocketsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest about which rocket flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3Intro\":{\"transitions\":{\"prev\":\"rocketsResults2\",\"next\":\"rocketsResults3\"},\"id\":\"rocketsResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults3Intro\",\"next\":\"rocketsResults4Intro\"},\"id\":\"rocketsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest about which rocket flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4Intro\":{\"transitions\":{\"prev\":\"rocketsResults3\",\"next\":\"rocketsResults4\"},\"id\":\"rocketsResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults4Intro\",\"next\":\"rocketsResults5Intro\"},\"id\":\"rocketsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest about which rocket flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5Intro\":{\"transitions\":{\"prev\":\"rocketsResults4\",\"next\":\"rocketsResults5\"},\"id\":\"rocketsResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults5Intro\",\"next\":\"completed\"},\"id\":\"rocketsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) What do these results suggest about which rocket flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"transitions\":{\"prev\":\"rocketsResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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

        // for (let form of [this.q1Form, this.q3Form]) {
        //     for (let el of form.querySelectorAll(".form-control")) {
        //         el.addEventListener("change", this.handleFormChange);
        //     }
        // }
        // textareas don't support "onchange" event
        // this.q2TextArea.addEventListener("input", this.handleFormChange);
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
            // this.showNotificationRegion();
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
            // this.showNotificationRegion();
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
            if (true) {
                this.app.enable(this.app.prevBtn);
            }
        } else {
            this.app.snackbar.show("Please answer the question");
            // this.showNotificationRegion();
        }
    }


    // hideNotificationRegion() {
    //     this.app.makeInvisible(this.notifyRegion);
    // }

    // showNotificationRegion() {
    //     this.app.makeVisible(this.notifyRegion);
    // }

    // handleFormChange(e) {
    //     // let btn = e.target;
    //     // console.log(`|${btn.id}|`);
    //     // let sceneId = btn.id.split('_')[0];
    //     this.hideNotificationRegion();
    // }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.app.hide(this.leftMeanValue);
        this.app.hide(this.rightMeanValue);
        this.app.hide(this.sortedTableText);
        this.app.show(this.leftMeanBtn);
        this.app.show(this.rightMeanBtn);
        this.app.show(this.showSortedTableBtn);
        this.app.disable(this.app.prevBtn);
        this.app.disable(this.app.nextBtn);
        this.app.hide(this.q2Form);
        this.app.hide(this.q3Form);
        this.app.show(this.q1Form);
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

/***/ "./src/pretest.js":
/*!************************!*\
  !*** ./src/pretest.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



const preTestData = __webpack_require__(/*! ../data/diPreTest.json */ "./data/diPreTest.json");

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

class MemoryResultsScene extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
    }
}

class RocketsResultsScene extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
    }
}

class DiPreTestApp extends _index__WEBPACK_IMPORTED_MODULE_0__["DiTestApp"] {

    createScene(sceneInfo) {
        let scene;
        console.log("DiPreTestApp::createScene()", sceneInfo);
        switch(sceneInfo.sceneType) {
            case "memoryResults":
                scene = new MemoryResultsScene(this, sceneInfo);
                break;
            case "rocketsResults":
                scene = new RocketsResultsScene(this, sceneInfo);
                break;
            default:
                scene = new _index__WEBPACK_IMPORTED_MODULE_0__["DiTestScene"](this, sceneInfo);
        }
        return scene;
    }
}

let app = new DiPreTestApp(preTestData, "dipretest");
app.setStartScene("start");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtdHJhbnNpdGlvbnMtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NjM0NyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUIsR0FBRyxhQUFhO0FBQzFEO0FBQ0EscUJBQXFCLGNBQWMsR0FBRyxJQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLElBQXNDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7OztBQ25VQSx1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQ3FFOztBQUVyRSxvQkFBb0IsbUJBQU8sQ0FBQyxxREFBd0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRCwrQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMseURBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx5REFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiZGlwcmV0ZXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3ByZXRlc3QuanNcIik7XG4iLCJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIC8vIGNvcHkgYWxsIHNjZW5lSW5mbyB0byAndGhpcydcbiAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNjZW5lSW5mbykpIHtcbiAgICAgICAgICAgIHRoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBfaXNCb2d1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgPT09IFwiTi9BXCIgfHwgdGhpcy5zY2VuZVR5cGUgPT09IFwiYm9ndXNcIjtcbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUVudGVyQWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FeGl0QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NlbmVUcmFuc2l0aW9uc0FwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSkge1xuICAgICAgICB0aGlzLnNjZW5lcyA9IGFwcERhdGEuc2NlbmVzO1xuICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMuc2NlbmVzKTtcbiAgICAgICAgdGhpcy5ib2d1c1NjZW5lSW5mbyA9IHtcbiAgICAgICAgICAgIGlkOiBcIk4vQVwiLFxuICAgICAgICAgICAgc2NlbmVUeXBlOiBcImJvZ3VzXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiY3JlYXRlU2NlbmUoKVwiLCBzY2VuZUluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvblRvKHNjZW5lKSB7XG4gICAgICAgIHRoaXMubG9nVHJhbnNpdGlvbihzY2VuZSk7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMucHJldlNjZW5lLmV4aXQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZW50ZXIoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJldlNjZW5lO1xuICAgIH1cblxuICAgIGxvb2t1cFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgbGV0IHNjZW5lSW5mbyA9IHRoaXMuc2NlbmVzW3NjZW5lSWRdO1xuICAgICAgICBpZiAoIXNjZW5lSW5mbykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRVJST1I6IG5vIHN1Y2ggc2NlbmUgJHtzY2VuZUlkfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZUluZm87XG4gICAgfVxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbih0cmFuc2l0aW9uTmFtZSkge1xuICAgICAgICBsZXQgbmV3U2NlbmVJZCA9IHRoaXMuY3VycmVudFNjZW5lLnRyYW5zaXRpb25zW3RyYW5zaXRpb25OYW1lXTtcbiAgICAgICAgbGV0IG5ld1NjZW5lSW5mbyA9IHRoaXMubG9va3VwU2NlbmUobmV3U2NlbmVJZCk7XG4gICAgICAgIGlmICghbmV3U2NlbmVJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5jcmVhdGVTY2VuZShuZXdTY2VuZUluZm8pO1xuICAgICAgICBjb25zb2xlLmRlYnVnKG5ld1NjZW5lKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3U2NlbmUpO1xuICAgIH1cblxuICAgIGxvZ1RyYW5zaXRpb24oc2NlbmUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvZ1RyYW5zaXRpb24oKVwiKTtcbiAgICB9XG5cbiAgICBzZXRTdGFydFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInNldFN0YXJ0U2NlbmUoKVwiLCBzY2VuZUlkKTtcbiAgICAgICAgbGV0IHN0YXJ0U2NlbmVJbmZvID0gdGhpcy5sb29rdXBTY2VuZShzY2VuZUlkKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzLmhhc093blByb3BlcnR5KHNjZW5lSWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBubyBzY2VuZSBuYW1lZCBcIiR7c2NlbmVJZH1cImApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKHRoaXMuYm9ndXNTY2VuZUluZm8pO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmVJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0U2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKHN0YXJ0U2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8oc3RhcnRTY2VuZSk7XG4gICAgfVxuXG4gICAgaGlkZShlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIHNob3coZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBtYWtlSW52aXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gZWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZVZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgLy8gZWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5leHBvcnQgY2xhc3MgU25hY2tCYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlEKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCB8fCBcInNuYWNrYmFyXCIpO1xuICAgIH1cblxuICAgIHNob3codGV4dCkge1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXG4gICAgICAgIC8vIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJzaG93XCI7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIC8vIEFmdGVyIDMgc2Vjb25kcywgcmVtb3ZlIHRoZSBzaG93IGNsYXNzIGZyb20gRElWXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gc25hY2tiYXIuY2xhc3NOYW1lID0gc25hY2tiYXIuY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfSwgMzAwMCk7ICAgIFxuICAgIH1cbn1cbiIsIlxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7XG4gICAgU2NlbmVUcmFuc2l0aW9uc0FwcCxcbiAgICBTY2VuZVxufSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS10cmFuc2l0aW9ucy1iYXNlXCI7XG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NuYWNrYmFyXCI7XG5cblxuZXhwb3J0IGNsYXNzIERpVGVzdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uID0gdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dCdG5zOiB0aGlzLnNob3dCdG5zLFxuICAgICAgICAgICAgaGlkZUJ0bnM6IHRoaXMuaGlkZUJ0bnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuTmFtZXMgPSB7XG4gICAgICAgICAgICBwcmV2OiB0aGlzLmFwcC5wcmV2QnRuLFxuICAgICAgICAgICAgbmV4dDogdGhpcy5hcHAubmV4dEJ0blxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgc2hvd0J0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUJ0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBoYW5kbGVUcmFuc2l0aW9uQnV0dG9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdHJhbnNpdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuYXBwLmhhbmRsZVRyYW5zaXRpb24odHJhbnNpdGlvbk5hbWUpO1xuICAgIH1cblxuXG4gICAgZ2V0VHJhbnNpdGlvbkVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhbnNpdGlvbi10b1wiKTtcbiAgICB9XG5cbiAgICBzZXR1cFRyYW5zaXRpb25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmdldFRyYW5zaXRpb25FbGVtZW50cygpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiB0aGlzLmN1c3RvbUVudGVyQWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhcmdzID0gYWN0aW9uLmFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0dXBUcmFuc2l0aW9uRXZlbnRIYW5kbGVycygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lYW4gPSB0aGlzLnNob3dMZWZ0TWVhbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dSaWdodE1lYW4gPSB0aGlzLnNob3dSaWdodE1lYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGUgPSB0aGlzLnNob3dTb3J0ZWRUYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVExU3VibWl0ID0gdGhpcy5oYW5kbGVRMVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVEyU3VibWl0ID0gdGhpcy5oYW5kbGVRMlN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVEzU3VibWl0ID0gdGhpcy5oYW5kbGVRM1N1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnRSZWZlcmVuY2VzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0dXBFbGVtZW50UmVmZXJlbmNlcygpIHtcbiAgICAgICAgbGV0IHNpZGUgPSBcImxlZnRcIlxuICAgICAgICB0aGlzLmxlZnRNZWFuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcmV2ZWFsXyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLmxlZnRNZWFuVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgc2lkZSA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5CdG4gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9XyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Nob3dfc29ydGVkX3RhYmxlYCk7XG4gICAgICAgIHRoaXMuc29ydGVkVGFibGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkX3RleHRgKTtcbiAgICAgICAgdGhpcy5zb3J0ZWRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zb3J0ZWRgKTtcbiAgICAgICAgdGhpcy51bnNvcnRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Vuc29ydGVkYCk7XG4gICAgICAgIC8vIHRoaXMubm90aWZ5UmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fbm90aWZpY2F0aW9uX3JlZ2lvbmApO1xuICAgICAgICB0aGlzLnExRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3ExX2Zvcm1gKTtcbiAgICAgICAgdGhpcy5xMkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl9mb3JtYCk7XG4gICAgICAgIHRoaXMucTNGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTNfZm9ybWApO1xuICAgICAgICB0aGlzLnEyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EyX3RleHRgKTtcbiAgICAgICAgdGhpcy5xM1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xM190ZXh0YCk7XG4gICAgICAgIHRoaXMucTJUZXh0QXJlYSA9IHRoaXMucTJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xuICAgICAgICB0aGlzLnExU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTFfc3VibWl0YCk7XG4gICAgICAgIHRoaXMucTJTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl9zdWJtaXRgKTtcbiAgICAgICAgdGhpcy5xM1N1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EzX3N1Ym1pdGApO1xuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5sZWZ0TWVhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93TGVmdE1lYW4pO1xuICAgICAgICB0aGlzLnJpZ2h0TWVhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93UmlnaHRNZWFuKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1NvcnRlZFRhYmxlKTtcblxuICAgICAgICAvLyBmb3IgKGxldCBmb3JtIG9mIFt0aGlzLnExRm9ybSwgdGhpcy5xM0Zvcm1dKSB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBlbCBvZiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1jb250cm9sXCIpKSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRleHRhcmVhcyBkb24ndCBzdXBwb3J0IFwib25jaGFuZ2VcIiBldmVudFxuICAgICAgICAvLyB0aGlzLnEyVGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuaGFuZGxlRm9ybUNoYW5nZSk7XG4gICAgICAgIHRoaXMucTFTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUTFTdWJtaXQpO1xuICAgICAgICB0aGlzLnEyU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVEyU3VibWl0KTtcbiAgICAgICAgdGhpcy5xM1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVRM1N1Ym1pdCk7XG4gICAgfVxuXG4gICAgc2hvd0xlZnRNZWFuKGUpIHtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmxlZnRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmxlZnRNZWFuVmFsdWUpO1xuICAgIH1cblxuICAgIHNob3dSaWdodE1lYW4oZSkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucmlnaHRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnJpZ2h0TWVhblZhbHVlKTtcbiAgICB9XG5cbiAgICBzaG93U29ydGVkVGFibGUoZSkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnVuc29ydGVkSW1nKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZEltZyk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgIH1cblxuICAgIGhhbmRsZVExU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5xMUZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnExRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO1xuICAgICAgICAgICAgdGhpcy5xMUFuc3dlciA9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hcHAubG9nU3R1ZGVudEFuc3dlcihcInExXCIsIHRoaXMucTFBbnN3ZXIpO1xuICAgICAgICAgICAgbGV0IHBoUmVwbCA9IGA8c3BhbiBjbGFzcz1cInExX2Fuc3dlclwiPiR7dGhpcy5xMUFuc3dlcn08L3NwYW4+YDtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLnEyLnRleHQgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0LnJlcGxhY2UoXCJQTEFDRUhPTERFUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaFJlcGwpO1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMucTMudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQucmVwbGFjZShcIlBMQUNFSE9MREVSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoUmVwbCk7XG4gICAgICAgICAgICB0aGlzLnEyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5xM1RleHQuaW5uZXJIVE1MID0gdGhpcy5xdWVzdGlvbnMucTMudGV4dDtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5xMUZvcm0pO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnEyRm9ybSk7XG4gICAgICAgICAgICB0aGlzLnEyVGV4dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNuYWNrYmFyLnNob3coXCJQbGVhc2UgYW5zd2VyIHRoZSBxdWVzdGlvblwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd05vdGlmaWNhdGlvblJlZ2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUTJTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHVuZm9ybmF0ZWx5LCB0ZXh0YXJlYXMgZG9uJ3Qgc3VwcG9ydCBwYXR0ZXJuIGFuZCBub3RoaW5nIGJ1dFxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGlzIGNvbnNpZGVyZWQgdmFsaWRcbiAgICAgICAgaWYgKHRoaXMucTJGb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB0aGlzLnEyVGV4dEFyZWEudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG5cbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnEyVGV4dEFyZWEudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgdGhpcy5hcHAubG9nU3R1ZGVudEFuc3dlcihcInEyXCIsIGFuc3dlcik7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucTJGb3JtKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5xM0Zvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc25hY2tiYXIuc2hvdyhcIlBsZWFzZSBhbnN3ZXIgdGhlIHF1ZXN0aW9uXCIpO1xuICAgICAgICAgICAgLy8gdGhpcy5zaG93Tm90aWZpY2F0aW9uUmVnaW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVRM1N1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLnEzRm9ybTtcbiAgICAgICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7XG4gICAgICAgICAgICBsZXQgYW5zd2VyID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmFwcC5sb2dTdHVkZW50QW5zd2VyKFwicTNcIiwgYW5zd2VyKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5zbmFja2Jhci5zaG93KFwiUGxlYXNlIGFuc3dlciB0aGUgcXVlc3Rpb25cIik7XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dOb3RpZmljYXRpb25SZWdpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gaGlkZU5vdGlmaWNhdGlvblJlZ2lvbigpIHtcbiAgICAvLyAgICAgdGhpcy5hcHAubWFrZUludmlzaWJsZSh0aGlzLm5vdGlmeVJlZ2lvbik7XG4gICAgLy8gfVxuXG4gICAgLy8gc2hvd05vdGlmaWNhdGlvblJlZ2lvbigpIHtcbiAgICAvLyAgICAgdGhpcy5hcHAubWFrZVZpc2libGUodGhpcy5ub3RpZnlSZWdpb24pO1xuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZUZvcm1DaGFuZ2UoZSkge1xuICAgIC8vICAgICAvLyBsZXQgYnRuID0gZS50YXJnZXQ7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGB8JHtidG4uaWR9fGApO1xuICAgIC8vICAgICAvLyBsZXQgc2NlbmVJZCA9IGJ0bi5pZC5zcGxpdCgnXycpWzBdO1xuICAgIC8vICAgICB0aGlzLmhpZGVOb3RpZmljYXRpb25SZWdpb24oKTtcbiAgICAvLyB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMubGVmdE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5yaWdodE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMubGVmdE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucmlnaHRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5xMkZvcm0pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucTNGb3JtKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnExRm9ybSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGNsYXNzIERpVGVzdEFwcCBleHRlbmRzIFNjZW5lVHJhbnNpdGlvbnNBcHB7XG4gICAgY29uc3RydWN0b3IodGVzdERhdGEsIHRlc3ROYW1lID0gXCJcIikge1xuICAgICAgICBzdXBlcih0ZXN0RGF0YSk7XG4gICAgICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgICAgICB0aGlzLmdvSG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29faG9tZV9idG5cIik7XG4gICAgICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG4gICAgICAgIHRoaXMucHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldl9idG5cIik7XG4gICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVfaWRfcmVnaW9uXCIpO1xuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oXCJuZXh0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uKFwicHJldlwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hcHAgPSB0aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgbmV3U2NlbmU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lSW5mbyk7XG4gICAgICAgIGlmIChbXCJib2d1c1wiLCBcInN0YW5kYXJkXCJdLmluY2x1ZGVzKHNjZW5lSW5mby5zY2VuZVR5cGUpKSB7XG4gICAgICAgICAgICBuZXdTY2VuZSA9IG5ldyBEaVRlc3RTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKFwicmVzdWx0c1NjZW5lXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpVGVzdFJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzY2VuZUluZm8uaWR9OiBVbmtub3duIHNjZW5lVHlwZTogJHtzY2VuZUluZm8uc2NlbmVUeXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcbiAgICB9XG5cbiAgICBsb2dUcmFuc2l0aW9uKHNjZW5lKSB7XG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIG5lZWRzIHRvIGdldCBzdG9yZWQgaW4gZmlyZXN0b3JlXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcIlNDRU5FX1RSQU5TSVRJT05cIixcbiAgICAgICAgICAgIGZyb206IHRoaXMuY3VycmVudFNjZW5lLmlkLFxuICAgICAgICAgICAgdG86IHNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2NlbmUuaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIGxvZ1N0dWRlbnRBbnN3ZXIocXVlc3Rpb25OYW1lLCBhbnN3ZXIpIHtcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50U2NlbmUucXVlc3Rpb25zW3F1ZXN0aW9uTmFtZV07XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSBcIk4vQVwiO1xuICAgICAgICBpZiAocXVlc3Rpb24uaGFzT3duUHJvcGVydHkoXCJjb3JyZWN0QW5zd2VyXCIpKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSAoYW5zd2VyID09PSBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyKVxuICAgICAgICB9XG4gICAgICAgIGxldCBxaWQgPSBgJHt0aGlzLmN1cnJlbnRTY2VuZS5pZH0uJHtxdWVzdGlvbk5hbWV9YDtcbiAgICAgICAgaWYgKFwiXCIgIT09IHRoaXMudGVzdE5hbWUpIHtcbiAgICAgICAgICAgIHFpZCA9IGAke3RoaXMudGVzdE5hbWV9LiR7cWlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiU1VCTUlUX0FOU1dFUlwiLFxuICAgICAgICAgICAgcXVlc3Rpb25JZDogcWlkLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVzdGlvbi50ZXh0LFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvblRvKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyLnRyYW5zaXRpb25UbyhzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlxuaW1wb3J0IHsgRGlUZXN0QXBwLCBEaVRlc3RTY2VuZSwgRGlUZXN0UmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3QgcHJlVGVzdERhdGEgPSByZXF1aXJlKFwiLi4vZGF0YS9kaVByZVRlc3QuanNvblwiKTtcblxuZnVuY3Rpb24gaGFuZGxlUTFTdWJtaXQoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGJ0biA9IGUudGFyZ2V0O1xuICAgIGxldCBzY2VuZUlkID0gYnRuLmlkLnNwbGl0KCdfJylbMF07XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzY2VuZUlkfV9xMV9mb3JtYCk7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7ICAgICBcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC52YWx1ZSwgc2VsZWN0ZWQubGFiZWxzWzBdLmlubmVyVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnZhbGlkXCIpO1xuICAgICAgICBsZXQgZXJyTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2NlbmVJZH1fbm90aWZpY2F0aW9uX3JlZ2lvbmApO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpO1xuICAgICAgICBlcnJNc2cuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICB9XG59XG5cbmNsYXNzIE1lbW9yeVJlc3VsdHNTY2VuZSBleHRlbmRzIERpVGVzdFJlc3VsdHNTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgIH1cbn1cblxuY2xhc3MgUm9ja2V0c1Jlc3VsdHNTY2VuZSBleHRlbmRzIERpVGVzdFJlc3VsdHNTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgIH1cbn1cblxuY2xhc3MgRGlQcmVUZXN0QXBwIGV4dGVuZHMgRGlUZXN0QXBwIHtcblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgc2NlbmU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlQcmVUZXN0QXBwOjpjcmVhdGVTY2VuZSgpXCIsIHNjZW5lSW5mbyk7XG4gICAgICAgIHN3aXRjaChzY2VuZUluZm8uc2NlbmVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibWVtb3J5UmVzdWx0c1wiOlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IE1lbW9yeVJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJvY2tldHNSZXN1bHRzXCI6XG4gICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgUm9ja2V0c1Jlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBEaVRlc3RTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG59XG5cbmxldCBhcHAgPSBuZXcgRGlQcmVUZXN0QXBwKHByZVRlc3REYXRhLCBcImRpcHJldGVzdFwiKTtcbmFwcC5zZXRTdGFydFNjZW5lKFwic3RhcnRcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9