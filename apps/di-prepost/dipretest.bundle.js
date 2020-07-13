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

/***/ "./data/diPreTest.json":
/*!*****************************!*\
  !*** ./data/diPreTest.json ***!
  \*****************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"transitions\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"transitions\":{\"prev\":\"start\",\"next\":\"memoryIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro1\":{\"transitions\":{\"prev\":\"intro\",\"next\":\"memoryIntro2\"},\"id\":\"memoryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro2\":{\"transitions\":{\"prev\":\"memoryIntro1\",\"next\":\"memoryIntro3\"},\"id\":\"memoryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro3\":{\"transitions\":{\"prev\":\"memoryIntro2\",\"next\":\"memoryIntro4\"},\"id\":\"memoryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro4\":{\"transitions\":{\"prev\":\"memoryIntro3\",\"next\":\"memoryIntro5\"},\"id\":\"memoryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro5\":{\"transitions\":{\"prev\":\"memoryIntro4\",\"next\":\"memoryIntro6\"},\"id\":\"memoryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro6\":{\"transitions\":{\"prev\":\"memoryIntro5\",\"next\":\"memoryIntro7\"},\"id\":\"memoryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro7\":{\"transitions\":{\"prev\":\"memoryIntro6\",\"next\":\"memoryResults1Intro\"},\"id\":\"memoryIntro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1Intro\":{\"transitions\":{\"prev\":\"memoryIntro7\",\"next\":\"memoryResults1\"},\"id\":\"memoryResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults1Intro\",\"next\":\"memoryResults2Intro\"},\"id\":\"memoryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2Intro\":{\"transitions\":{\"prev\":\"memoryResults1\",\"next\":\"memoryResults2\"},\"id\":\"memoryResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults2Intro\",\"next\":\"memoryResults3Intro\"},\"id\":\"memoryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3Intro\":{\"transitions\":{\"prev\":\"memoryResults2\",\"next\":\"memoryResults3\"},\"id\":\"memoryResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults3Intro\",\"next\":\"memoryResults4Intro\"},\"id\":\"memoryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4Intro\":{\"transitions\":{\"prev\":\"memoryResults3\",\"next\":\"memoryResults4\"},\"id\":\"memoryResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults4Intro\",\"next\":\"memoryResults5Intro\"},\"id\":\"memoryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5Intro\":{\"transitions\":{\"prev\":\"memoryResults4\",\"next\":\"memoryResults5\"},\"id\":\"memoryResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5\":{\"sceneType\":\"memoryResults\",\"transitions\":{\"prev\":\"memoryResults5Intro\",\"next\":\"rocketsIntro1\"},\"id\":\"memoryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro1\":{\"transitions\":{\"prev\":\"memoryResults5\",\"next\":\"rocketsIntro2\"},\"id\":\"rocketsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro2\":{\"transitions\":{\"prev\":\"rocketsIntro1\",\"next\":\"rocketsIntro3\"},\"id\":\"rocketsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro3\":{\"transitions\":{\"prev\":\"rocketsIntro2\",\"next\":\"rocketsIntro4\"},\"id\":\"rocketsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro4\":{\"transitions\":{\"prev\":\"rocketsIntro3\",\"next\":\"rocketsResults1Intro\"},\"id\":\"rocketsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1Intro\":{\"transitions\":{\"prev\":\"rocketsIntro4\",\"next\":\"rocketsResults1\"},\"id\":\"rocketsResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults1Intro\",\"next\":\"rocketsResults2Intro\"},\"id\":\"rocketsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2Intro\":{\"transitions\":{\"prev\":\"rocketsResults1\",\"next\":\"rocketsResults2\"},\"id\":\"rocketsResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults2Intro\",\"next\":\"rocketsResults3Intro\"},\"id\":\"rocketsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3Intro\":{\"transitions\":{\"prev\":\"rocketsResults2\",\"next\":\"rocketsResults3\"},\"id\":\"rocketsResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults3Intro\",\"next\":\"rocketsResults4Intro\"},\"id\":\"rocketsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4Intro\":{\"transitions\":{\"prev\":\"rocketsResults3\",\"next\":\"rocketsResults4\"},\"id\":\"rocketsResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults4Intro\",\"next\":\"rocketsResults5Intro\"},\"id\":\"rocketsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5Intro\":{\"transitions\":{\"prev\":\"rocketsResults4\",\"next\":\"rocketsResults5\"},\"id\":\"rocketsResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5\":{\"sceneType\":\"rocketsResults\",\"transitions\":{\"prev\":\"rocketsResults5Intro\",\"next\":\"completed\"},\"id\":\"rocketsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"not at all sure\",\"label\":\"Not at all sure\"},{\"value\":\"a little sure\",\"label\":\"A little sure\"},{\"value\":\"fairly sure\",\"label\":\"Fairly sure\"},{\"value\":\"very sure\",\"label\":\"Very sure\"},{\"value\":\"absolutely sure\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"transitions\":{\"prev\":\"rocketsResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtdHJhbnNpdGlvbnMtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/NjM0NyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJldGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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QTtBQUNBLHFCQUFxQixxQkFBcUIsR0FBRyxhQUFhO0FBQzFEO0FBQ0EscUJBQXFCLGNBQWMsR0FBRyxJQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLElBQXNDO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7OztBQzNUQSx1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQ3FFOztBQUVyRSxvQkFBb0IsbUJBQU8sQ0FBQyxxREFBd0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRCwrQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnREFBZ0QsUUFBUTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMseURBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx5REFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFTOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiZGlwcmV0ZXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3ByZXRlc3QuanNcIik7XG4iLCJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIC8vIGNvcHkgYWxsIHNjZW5lSW5mbyB0byAndGhpcydcbiAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNjZW5lSW5mbykpIHtcbiAgICAgICAgICAgIHRoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBfaXNCb2d1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgPT09IFwiTi9BXCIgfHwgdGhpcy5zY2VuZVR5cGUgPT09IFwiYm9ndXNcIjtcbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUVudGVyQWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FeGl0QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NlbmVUcmFuc2l0aW9uc0FwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSkge1xuICAgICAgICB0aGlzLnNjZW5lcyA9IGFwcERhdGEuc2NlbmVzO1xuICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMuc2NlbmVzKTtcbiAgICAgICAgdGhpcy5ib2d1c1NjZW5lSW5mbyA9IHtcbiAgICAgICAgICAgIGlkOiBcIk4vQVwiLFxuICAgICAgICAgICAgc2NlbmVUeXBlOiBcImJvZ3VzXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiY3JlYXRlU2NlbmUoKVwiLCBzY2VuZUluZm8pO1xuICAgICAgICByZXR1cm4gbmV3IFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvblRvKHNjZW5lKSB7XG4gICAgICAgIHRoaXMubG9nVHJhbnNpdGlvbihzY2VuZSk7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIHRoaXMucHJldlNjZW5lLmV4aXQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZW50ZXIoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJldlNjZW5lO1xuICAgIH1cblxuICAgIGxvb2t1cFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgbGV0IHNjZW5lSW5mbyA9IHRoaXMuc2NlbmVzW3NjZW5lSWRdO1xuICAgICAgICBpZiAoIXNjZW5lSW5mbykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRVJST1I6IG5vIHN1Y2ggc2NlbmUgJHtzY2VuZUlkfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZUluZm87XG4gICAgfVxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbih0cmFuc2l0aW9uTmFtZSkge1xuICAgICAgICBsZXQgbmV3U2NlbmVJZCA9IHRoaXMuY3VycmVudFNjZW5lLnRyYW5zaXRpb25zW3RyYW5zaXRpb25OYW1lXTtcbiAgICAgICAgbGV0IG5ld1NjZW5lSW5mbyA9IHRoaXMubG9va3VwU2NlbmUobmV3U2NlbmVJZCk7XG4gICAgICAgIGlmICghbmV3U2NlbmVJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5jcmVhdGVTY2VuZShuZXdTY2VuZUluZm8pO1xuICAgICAgICBjb25zb2xlLmRlYnVnKG5ld1NjZW5lKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8obmV3U2NlbmUpO1xuICAgIH1cblxuICAgIGxvZ1RyYW5zaXRpb24oc2NlbmUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvZ1RyYW5zaXRpb24oKVwiKTtcbiAgICB9XG5cbiAgICBzZXRTdGFydFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInNldFN0YXJ0U2NlbmUoKVwiLCBzY2VuZUlkKTtcbiAgICAgICAgbGV0IHN0YXJ0U2NlbmVJbmZvID0gdGhpcy5sb29rdXBTY2VuZShzY2VuZUlkKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVzLmhhc093blByb3BlcnR5KHNjZW5lSWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBubyBzY2VuZSBuYW1lZCBcIiR7c2NlbmVJZH1cImApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKHRoaXMuYm9ndXNTY2VuZUluZm8pO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmVJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0U2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKHN0YXJ0U2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVG8oc3RhcnRTY2VuZSk7XG4gICAgfVxuXG4gICAgaGlkZShlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIHNob3coZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBtYWtlSW52aXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gZWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZVZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgLy8gZWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5leHBvcnQgY2xhc3MgU25hY2tCYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlEKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCB8fCBcInNuYWNrYmFyXCIpO1xuICAgIH1cblxuICAgIHNob3codGV4dCkge1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXG4gICAgICAgIC8vIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJzaG93XCI7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIC8vIEFmdGVyIDMgc2Vjb25kcywgcmVtb3ZlIHRoZSBzaG93IGNsYXNzIGZyb20gRElWXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gc25hY2tiYXIuY2xhc3NOYW1lID0gc25hY2tiYXIuY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93XCIsIFwiXCIpO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfSwgMzAwMCk7ICAgIFxuICAgIH1cbn1cbiIsIlxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7XG4gICAgU2NlbmVUcmFuc2l0aW9uc0FwcCxcbiAgICBTY2VuZVxufSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS10cmFuc2l0aW9ucy1iYXNlXCI7XG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NuYWNrYmFyXCI7XG5cblxuZXhwb3J0IGNsYXNzIERpVGVzdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uID0gdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dCdG5zOiB0aGlzLnNob3dCdG5zLFxuICAgICAgICAgICAgaGlkZUJ0bnM6IHRoaXMuaGlkZUJ0bnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuTmFtZXMgPSB7XG4gICAgICAgICAgICBwcmV2OiB0aGlzLmFwcC5wcmV2QnRuLFxuICAgICAgICAgICAgbmV4dDogdGhpcy5hcHAubmV4dEJ0blxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgc2hvd0J0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUJ0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBoYW5kbGVUcmFuc2l0aW9uQnV0dG9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdHJhbnNpdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuYXBwLmhhbmRsZVRyYW5zaXRpb24odHJhbnNpdGlvbk5hbWUpO1xuICAgIH1cblxuXG4gICAgZ2V0VHJhbnNpdGlvbkVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJhbnNpdGlvbi10b1wiKTtcbiAgICB9XG5cbiAgICBzZXR1cFRyYW5zaXRpb25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmdldFRyYW5zaXRpb25FbGVtZW50cygpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVUcmFuc2l0aW9uQnV0dG9uLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiB0aGlzLmN1c3RvbUVudGVyQWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhcmdzID0gYWN0aW9uLmFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0dXBUcmFuc2l0aW9uRXZlbnRIYW5kbGVycygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaG93TGVmdE1lYW4gPSB0aGlzLnNob3dMZWZ0TWVhbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob3dSaWdodE1lYW4gPSB0aGlzLnNob3dSaWdodE1lYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGUgPSB0aGlzLnNob3dTb3J0ZWRUYWJsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVExU3VibWl0ID0gdGhpcy5oYW5kbGVRMVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVEyU3VibWl0ID0gdGhpcy5oYW5kbGVRMlN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVEzU3VibWl0ID0gdGhpcy5oYW5kbGVRM1N1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnRSZWZlcmVuY2VzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0dXBFbGVtZW50UmVmZXJlbmNlcygpIHtcbiAgICAgICAgbGV0IHNpZGUgPSBcImxlZnRcIlxuICAgICAgICB0aGlzLmxlZnRNZWFuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcmV2ZWFsXyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLmxlZnRNZWFuVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgc2lkZSA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5CdG4gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9XyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Nob3dfc29ydGVkX3RhYmxlYCk7XG4gICAgICAgIHRoaXMuc29ydGVkVGFibGVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkX3RleHRgKTtcbiAgICAgICAgdGhpcy5zb3J0ZWRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zb3J0ZWRgKTtcbiAgICAgICAgdGhpcy51bnNvcnRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Vuc29ydGVkYCk7XG4gICAgICAgIC8vIHRoaXMubm90aWZ5UmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fbm90aWZpY2F0aW9uX3JlZ2lvbmApO1xuICAgICAgICB0aGlzLnExRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3ExX2Zvcm1gKTtcbiAgICAgICAgdGhpcy5xMkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl9mb3JtYCk7XG4gICAgICAgIHRoaXMucTNGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTNfZm9ybWApO1xuICAgICAgICB0aGlzLnEyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EyX3RleHRgKTtcbiAgICAgICAgdGhpcy5xM1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xM190ZXh0YCk7XG4gICAgICAgIHRoaXMucTJUZXh0QXJlYSA9IHRoaXMucTJGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250cm9sXCIpO1xuICAgICAgICB0aGlzLnExU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTFfc3VibWl0YCk7XG4gICAgICAgIHRoaXMucTJTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl9zdWJtaXRgKTtcbiAgICAgICAgdGhpcy5xM1N1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EzX3N1Ym1pdGApO1xuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5sZWZ0TWVhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93TGVmdE1lYW4pO1xuICAgICAgICB0aGlzLnJpZ2h0TWVhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaG93UmlnaHRNZWFuKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd1NvcnRlZFRhYmxlKTtcbiAgICAgICAgdGhpcy5xMVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVRMVN1Ym1pdCk7XG4gICAgICAgIHRoaXMucTJTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUTJTdWJtaXQpO1xuICAgICAgICB0aGlzLnEzU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVEzU3VibWl0KTtcbiAgICB9XG5cbiAgICBzaG93TGVmdE1lYW4oZSkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMubGVmdE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMubGVmdE1lYW5WYWx1ZSk7XG4gICAgfVxuXG4gICAgc2hvd1JpZ2h0TWVhbihlKSB7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5yaWdodE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucmlnaHRNZWFuVmFsdWUpO1xuICAgIH1cblxuICAgIHNob3dTb3J0ZWRUYWJsZShlKSB7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zaG93U29ydGVkVGFibGVCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMudW5zb3J0ZWRJbWcpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuc29ydGVkSW1nKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZFRhYmxlVGV4dCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUTFTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnExRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMucTFGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7XG4gICAgICAgICAgICB0aGlzLnExQW5zd2VyID0gc2VsZWN0ZWQudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmFwcC5sb2dTdHVkZW50QW5zd2VyKFwicTFcIiwgdGhpcy5xMUFuc3dlcik7XG4gICAgICAgICAgICBsZXQgcGhSZXBsID0gYDxzcGFuIGNsYXNzPVwicTFfYW5zd2VyXCI+JHt0aGlzLnExQW5zd2VyfTwvc3Bhbj5gO1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMucTIudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQucmVwbGFjZShcIlBMQUNFSE9MREVSXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBoUmVwbCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0ID0gdGhpcy5xdWVzdGlvbnMucTMudGV4dC5yZXBsYWNlKFwiUExBQ0VIT0xERVJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhSZXBsKTtcbiAgICAgICAgICAgIHRoaXMucTJUZXh0LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQ7XG4gICAgICAgICAgICB0aGlzLnEzVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0O1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnExRm9ybSk7XG4gICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucTJGb3JtKTtcbiAgICAgICAgICAgIHRoaXMucTJUZXh0QXJlYS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc25hY2tiYXIuc2hvdyhcIlBsZWFzZSBhbnN3ZXIgdGhlIHF1ZXN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUTJTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHVuZm9ybmF0ZWx5LCB0ZXh0YXJlYXMgZG9uJ3Qgc3VwcG9ydCBwYXR0ZXJuIGFuZCBub3RoaW5nIGJ1dFxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGlzIGNvbnNpZGVyZWQgdmFsaWRcbiAgICAgICAgaWYgKHRoaXMucTJGb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB0aGlzLnEyVGV4dEFyZWEudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG5cbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnEyVGV4dEFyZWEudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgdGhpcy5hcHAubG9nU3R1ZGVudEFuc3dlcihcInEyXCIsIGFuc3dlcik7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMucTJGb3JtKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5xM0Zvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc25hY2tiYXIuc2hvdyhcIlBsZWFzZSBhbnN3ZXIgdGhlIHF1ZXN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUTNTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBmb3JtID0gdGhpcy5xM0Zvcm07XG4gICAgICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IGFuc3dlciA9IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hcHAubG9nU3R1ZGVudEFuc3dlcihcInEzXCIsIGFuc3dlcik7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICAvLyBkaXNhYmxlIHRoZSBzdWJtaXQgYnV0dG9uIGFuZCByYWRpb3MsIHdoaWNoIGFsbCBoYXZlIHRoZSBzYW1lXG4gICAgICAgICAgICAvLyBuYW1lIGJ1dCBkaWZmZXJlbnQgSURzXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHNlbGVjdGVkLm5hbWU7XG4gICAgICAgICAgICBmb3IgKGxldCByYWRpbyBvZiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9XCIke25hbWV9XCJdYCkpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBkaXNhYmxlZCBjc3MgY2xhc3MgZG9lc24ndCBzZWVtIHRvIHdvcmssIHVzaW5nXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgaW5zdGVhZFxuICAgICAgICAgICAgICAgIHJhZGlvLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5xM1N1Ym1pdEJ0bik7XG4gICAgICAgICAgICAvLyBJIHRoaW5rIHRoaXMgaXMgdW5uZWNlc3NhcnksIGFzIGl0IHNob3VsZCBhbHJlYWR5IGJlIGVuYWJsZWRcbiAgICAgICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5zbmFja2Jhci5zaG93KFwiUGxlYXNlIGFuc3dlciB0aGUgcXVlc3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5sZWZ0TWVhblZhbHVlKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnJpZ2h0TWVhblZhbHVlKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnNvcnRlZFRhYmxlVGV4dCk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5sZWZ0TWVhbkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5yaWdodE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnEyRm9ybSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5xM0Zvcm0pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucTFGb3JtKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hcHAuZGlzYWJsZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgRGlUZXN0QXBwIGV4dGVuZHMgU2NlbmVUcmFuc2l0aW9uc0FwcHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0RGF0YSwgdGVzdE5hbWUgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKHRlc3REYXRhKTtcbiAgICAgICAgdGhpcy50ZXN0TmFtZSA9IHRlc3ROYW1lO1xuICAgICAgICB0aGlzLnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKCk7XG4gICAgICAgIHRoaXMuZ29Ib21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb19ob21lX2J0blwiKTtcbiAgICAgICAgdGhpcy5uZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbiAgICAgICAgdGhpcy5wcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2X2J0blwiKTtcbiAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZV9pZF9yZWdpb25cIik7XG4gICAgICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbihcIm5leHRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oXCJwcmV2XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nb0hvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFwcCA9IHRoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGxldCBuZXdTY2VuZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2NlbmVJbmZvKTtcbiAgICAgICAgaWYgKFtcImJvZ3VzXCIsIFwic3RhbmRhcmRcIl0uaW5jbHVkZXMoc2NlbmVJbmZvLnNjZW5lVHlwZSkpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpVGVzdFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJyZXN1bHRzU2NlbmVcIiA9PT0gc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgbmV3U2NlbmUgPSBuZXcgRGlUZXN0UmVzdWx0c1NjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3NjZW5lSW5mby5pZH06IFVua25vd24gc2NlbmVUeXBlOiAke3NjZW5lSW5mby5zY2VuZVR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xuICAgIH1cblxuICAgIGxvZ1RyYW5zaXRpb24oc2NlbmUpIHtcbiAgICAgICAgLy8gRklYTUU6IHRoaXMgbmVlZHMgdG8gZ2V0IHN0b3JlZCBpbiBmaXJlc3RvcmVcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiU0NFTkVfVFJBTlNJVElPTlwiLFxuICAgICAgICAgICAgZnJvbTogdGhpcy5jdXJyZW50U2NlbmUuaWQsXG4gICAgICAgICAgICB0bzogc2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhzY2VuZS5pZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgbG9nU3R1ZGVudEFuc3dlcihxdWVzdGlvbk5hbWUsIGFuc3dlcikge1xuICAgICAgICBsZXQgcXVlc3Rpb24gPSB0aGlzLmN1cnJlbnRTY2VuZS5xdWVzdGlvbnNbcXVlc3Rpb25OYW1lXTtcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IFwiTi9BXCI7XG4gICAgICAgIGlmIChxdWVzdGlvbi5oYXNPd25Qcm9wZXJ0eShcImNvcnJlY3RBbnN3ZXJcIikpIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IChhbnN3ZXIgPT09IHF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXIpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHFpZCA9IGAke3RoaXMuY3VycmVudFNjZW5lLmlkfS4ke3F1ZXN0aW9uTmFtZX1gO1xuICAgICAgICBpZiAoXCJcIiAhPT0gdGhpcy50ZXN0TmFtZSkge1xuICAgICAgICAgICAgcWlkID0gYCR7dGhpcy50ZXN0TmFtZX0uJHtxaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogXCJTVUJNSVRfQU5TV0VSXCIsXG4gICAgICAgICAgICBxdWVzdGlvbklkOiBxaWQsXG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXN0aW9uLnRleHQsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGlzQ29ycmVjdDogaXNDb3JyZWN0LFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uVG8oc2NlbmUpIHtcbiAgICAgICAgc3VwZXIudHJhbnNpdGlvblRvKHNjZW5lKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NlbmVJZCgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlTY2VuZUlkKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uLmlubmVySFRNTCA9IHRoaXMuY3VycmVudFNjZW5lLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXG5pbXBvcnQgeyBEaVRlc3RBcHAsIERpVGVzdFNjZW5lLCBEaVRlc3RSZXN1bHRzU2NlbmUgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5jb25zdCBwcmVUZXN0RGF0YSA9IHJlcXVpcmUoXCIuLi9kYXRhL2RpUHJlVGVzdC5qc29uXCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVRMVN1Ym1pdChlKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgYnRuID0gZS50YXJnZXQ7XG4gICAgbGV0IHNjZW5lSWQgPSBidG4uaWQuc3BsaXQoJ18nKVswXTtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NjZW5lSWR9X3ExX2Zvcm1gKTtcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHsgICAgIFxuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkLnZhbHVlLCBzZWxlY3RlZC5sYWJlbHNbMF0uaW5uZXJUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImludmFsaWRcIik7XG4gICAgICAgIGxldCBlcnJNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtzY2VuZUlkfV9ub3RpZmljYXRpb25fcmVnaW9uYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyck1zZyk7XG4gICAgICAgIGVyck1zZy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbn1cblxuY2xhc3MgTWVtb3J5UmVzdWx0c1NjZW5lIGV4dGVuZHMgRGlUZXN0UmVzdWx0c1NjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgfVxufVxuXG5jbGFzcyBSb2NrZXRzUmVzdWx0c1NjZW5lIGV4dGVuZHMgRGlUZXN0UmVzdWx0c1NjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgfVxufVxuXG5jbGFzcyBEaVByZVRlc3RBcHAgZXh0ZW5kcyBEaVRlc3RBcHAge1xuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGxldCBzY2VuZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaVByZVRlc3RBcHA6OmNyZWF0ZVNjZW5lKClcIiwgc2NlbmVJbmZvKTtcbiAgICAgICAgc3dpdGNoKHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vcnlSZXN1bHRzXCI6XG4gICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgTWVtb3J5UmVzdWx0c1NjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicm9ja2V0c1Jlc3VsdHNcIjpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBSb2NrZXRzUmVzdWx0c1NjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IERpVGVzdFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cbn1cblxubGV0IGFwcCA9IG5ldyBEaVByZVRlc3RBcHAocHJlVGVzdERhdGEsIFwiZGlwcmV0ZXN0XCIpO1xuYXBwLnNldFN0YXJ0U2NlbmUoXCJzdGFydFwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=