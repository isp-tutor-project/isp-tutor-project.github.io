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

/***/ "./data/diInstr.json":
/*!***************************!*\
  !*** ./data/diInstr.json ***!
  \***************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"transitions\":{\"next\":\"intro1\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro1\":{\"transitions\":{\"prev\":\"start\",\"next\":\"intro2\"},\"id\":\"intro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro2\":{\"transitions\":{\"prev\":\"intro1\",\"next\":\"intro3\"},\"id\":\"intro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro3\":{\"transitions\":{\"prev\":\"intro2\",\"next\":\"intro4\"},\"id\":\"intro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro4\":{\"transitions\":{\"prev\":\"intro3\",\"next\":\"intro5\"},\"id\":\"intro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro5\":{\"transitions\":{\"prev\":\"intro4\",\"next\":\"intro6\"},\"id\":\"intro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro6\":{\"transitions\":{\"prev\":\"intro5\",\"next\":\"intro7\"},\"id\":\"intro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro7\":{\"transitions\":{\"prev\":\"intro6\",\"next\":\"intro8\"},\"id\":\"intro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro8\":{\"transitions\":{\"prev\":\"intro7\",\"next\":\"intro9\"},\"id\":\"intro8\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro9\":{\"transitions\":{\"prev\":\"intro8\",\"next\":\"intro10\"},\"id\":\"intro9\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro10\":{\"transitions\":{\"prev\":\"intro9\",\"next\":\"intro11\"},\"id\":\"intro10\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro11\":{\"transitions\":{\"prev\":\"intro10\",\"next\":\"intro12\"},\"id\":\"intro11\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro12\":{\"transitions\":{\"prev\":\"intro11\",\"next\":\"intro13\"},\"id\":\"intro12\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro13\":{\"transitions\":{\"prev\":\"intro12\",\"next\":\"intro14\"},\"id\":\"intro13\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro14\":{\"transitions\":{\"prev\":\"intro13\",\"next\":\"intro15\"},\"id\":\"intro14\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro15\":{\"transitions\":{\"prev\":\"intro14\",\"next\":\"intro16\"},\"id\":\"intro15\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro16\":{\"transitions\":{\"prev\":\"intro15\",\"next\":\"scene1\"},\"id\":\"intro16\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene1\":{\"transitions\":{\"prev\":\"intro16\",\"next\":\"scene2\"},\"id\":\"scene1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene2\":{\"transitions\":{\"prev\":\"scene1\",\"next\":\"scene3\"},\"id\":\"scene2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene3\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene2\",\"next\":\"scene4\"},\"question\":{\"type\":\"mc\",\"text\":\"Salt crystals grew...\",\"correctAnswer\":\"a\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"more in hot water\"},{\"value\":\"b\",\"label\":\"more in cold water\"},{\"value\":\"c\",\"label\":\"equally well in hot and cold water\"}]},\"id\":\"scene3\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene4\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene3\",\"next\":\"scene5\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that the independent variable (water temperature) caused this difference in crystal weight across conditions?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene4\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene5\":{\"transitions\":{\"prev\":\"scene4\",\"next\":\"scene6\"},\"id\":\"scene5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene6\":{\"transitions\":{\"prev\":\"scene5\",\"next\":\"scene7\"},\"id\":\"scene6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene7\":{\"transitions\":{\"prev\":\"scene6\",\"next\":\"scene8\"},\"id\":\"scene7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene8\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene7\",\"next\":\"scene9\"},\"question\":{\"type\":\"mc\",\"text\":\"Do you see any results that look strange to you?\",\"correctAnswer\":\"a\",\"ntlFb\":\"Thanks\",\"options\":[{\"value\":\"a\",\"label\":\"Yes\"},{\"value\":\"b\",\"label\":\"No\"},{\"value\":\"c\",\"label\":\"I don't know\"}]},\"id\":\"scene8\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene9\":{\"transitions\":{\"prev\":\"scene8\",\"next\":\"scene10\"},\"id\":\"scene9\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene10\":{\"transitions\":{\"prev\":\"scene9\",\"next\":\"scene11\"},\"id\":\"scene10\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene11\":{\"transitions\":{\"prev\":\"scene10\",\"next\":\"scene26\",\"mean\":\"scene12\",\"median\":\"scene14\",\"mode\":\"scene23\",\"range\":\"scene24\"},\"id\":\"scene11\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene12\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene11\",\"next\":\"scene13\",\"more\":\"scene13\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene12\",\"customExitActions\":[]},\"scene13\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene12\",\"next\":\"scene14\",\"back\":\"scene12\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene13\",\"customExitActions\":[]},\"scene14\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene13\",\"backToQuestion\":\"scene11\",\"more\":\"scene15\",\"next\":\"scene15\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene14\",\"customExitActions\":[]},\"scene15\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene14\",\"next\":\"scene16\",\"back\":\"scene14\",\"more\":\"scene16\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row1.col2\",\".row15.col2\"],\"color\":\"blue\"}}],\"id\":\"scene15\",\"customExitActions\":[]},\"scene16\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene15\",\"next\":\"scene17\",\"back\":\"scene15\",\"more\":\"scene17\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row2.col2\",\".row14.col2\"],\"color\":\"blue\"}}],\"id\":\"scene16\",\"customExitActions\":[]},\"scene17\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene16\",\"next\":\"scene18\",\"back\":\"scene16\",\"more\":\"scene18\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row3.col2\",\".row13.col2\"],\"color\":\"blue\"}}],\"id\":\"scene17\",\"customExitActions\":[]},\"scene18\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene17\",\"next\":\"scene19\",\"back\":\"scene17\",\"more\":\"scene19\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row4.col2\",\".row12.col2\"],\"color\":\"blue\"}}],\"id\":\"scene18\",\"customExitActions\":[]},\"scene19\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene18\",\"next\":\"scene20\",\"back\":\"scene18\",\"more\":\"scene20\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row5.col2\",\".row11.col2\"],\"color\":\"blue\"}}],\"id\":\"scene19\",\"customExitActions\":[]},\"scene20\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene19\",\"next\":\"scene21\",\"back\":\"scene19\",\"more\":\"scene21\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row6.col2\",\".row10.col2\"],\"color\":\"blue\"}}],\"id\":\"scene20\",\"customExitActions\":[]},\"scene21\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene20\",\"next\":\"scene22\",\"back\":\"scene20\",\"more\":\"scene22\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row7.col2\",\".row9.col2\"],\"color\":\"blue\"}}],\"id\":\"scene21\",\"customExitActions\":[]},\"scene22\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene21\",\"next\":\"scene23\",\"back\":\"scene21\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row8.col2\"],\"color\":\"green\"}}],\"id\":\"scene22\",\"customExitActions\":[]},\"scene23\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene22\",\"next\":\"scene24\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene23\",\"customExitActions\":[]},\"scene24\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene23\",\"next\":\"scene25\",\"backToQuestion\":\"scene11\",\"more\":\"scene25\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene24\",\"customExitActions\":[]},\"scene25\":{\"sceneType\":\"stats\",\"transitions\":{\"prev\":\"scene24\",\"next\":\"scene26\",\"back\":\"scene24\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene25\",\"customExitActions\":[]},\"scene26\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene25\",\"next\":\"scene27\"},\"question\":{\"type\":\"mc\",\"text\":\"What do you think is the best way to summarize the data in each condition?\",\"correctAnswer\":\"c\",\"posFb\":\"You're right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Minimum (The Smallest number)\"},{\"value\":\"b\",\"label\":\"Maximum (The Biggest number)\"},{\"value\":\"c\",\"label\":\"Mean (or average)\"},{\"value\":\"d\",\"label\":\"Median (The Middle number)\"},{\"value\":\"e\",\"label\":\"Mode (The Most common number)\"},{\"value\":\"f\",\"label\":\"Range\"}]},\"id\":\"scene26\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene27\":{\"transitions\":{\"prev\":\"scene26\",\"next\":\"scene27a\"},\"id\":\"scene27\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene27a\":{\"transitions\":{\"prev\":\"scene27\",\"next\":\"scene28\"},\"id\":\"scene27a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene28\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene27a\",\"next\":\"scene29\"},\"question\":{\"type\":\"mc\",\"text\":\"Which calculation will give you the mean:\",\"correctAnswer\":\"b\",\"posFb\":\"You're right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"(20 + 27 + 30 + 32 + 41)\"},{\"value\":\"b\",\"label\":\"(20 + 27 + 30 + 32 + 41 / 5\"},{\"value\":\"c\",\"label\":\"(41 - 20) / 2\"},{\"value\":\"d\",\"label\":\"( 41 + 20 ) / 2\"}]},\"id\":\"scene28\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene29\":{\"transitions\":{\"prev\":\"scene28\",\"next\":\"scene30\"},\"id\":\"scene29\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene30\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene29\",\"next\":\"scene31\"},\"question\":{\"type\":\"mc\",\"text\":\"Now, what is the mean weight for the Cold water condition?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"(3 + 8 +12 + 16 + 21)\"},{\"value\":\"b\",\"label\":\"(3 + 8 + 12 + 16 + 21) / 5\"},{\"value\":\"c\",\"label\":\"( 21 + 3 ) / 2\"},{\"value\":\"d\",\"label\":\"( 21 - 3 ) / 3\"}]},\"id\":\"scene30\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene31\":{\"transitions\":{\"prev\":\"scene30\",\"next\":\"scene32\"},\"id\":\"scene31\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene32\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene31\",\"next\":\"scene32a\"},\"question\":{\"type\":\"mc\",\"text\":\"Comparing the means across condtions, what to these results suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene32\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene32a\":{\"transitions\":{\"prev\":\"scene32\",\"next\":\"scene33\"},\"id\":\"scene32a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene33\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene32a\",\"next\":\"scene34\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that the independent variable (water temperature) -- rather than random errors -- caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene33\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene34\":{\"transitions\":{\"prev\":\"scene33\",\"next\":\"scene35\"},\"id\":\"scene34\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene35\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene34\",\"next\":\"scene36\"},\"question\":{\"type\":\"mc\",\"text\":\"What does comparing the means of Hot#1 condition to the Cold#2 condition suggest?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene35\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene36\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene35\",\"next\":\"scene37\"},\"question\":{\"type\":\"survey\",\"text\":\"Now, how sure are you that the independent variable (water temperature) --rather than random errors--caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene36\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene37\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene36\",\"next\":\"scene38\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the hot condition results, which cold condition results are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"a\",\"posFb\":\"That's right!\",\"negFb\":\"Well, let's think about this...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1\"},{\"value\":\"b\",\"label\":\"Cold#2\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene37\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene38\":{\"transitions\":{\"prev\":\"scene37\",\"next\":\"scene39\"},\"id\":\"scene38\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene39\":{\"transitions\":{\"prev\":\"scene38\",\"next\":\"scene40\"},\"id\":\"scene39\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene40\":{\"transitions\":{\"prev\":\"scene39\",\"next\":\"scene41\"},\"id\":\"scene40\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene41\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene40\",\"next\":\"scene42\"},\"question\":{\"type\":\"mc\",\"text\":\"What do the results from the Hot water and Cold#2 conditions suggest?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene41\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene42\":{\"transitions\":{\"prev\":\"scene41\",\"next\":\"scene43\"},\"id\":\"scene42\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene43\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene42\",\"next\":\"scene44\"},\"question\":{\"type\":\"survey\",\"text\":\"Now, how sure are you that water temperature -- rather than experimenter or random errors -- caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene43\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene44\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene43\",\"next\":\"scene45\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the hot condition results, which cold condition results (Cold#1 or Cold #3) are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1\"},{\"value\":\"b\",\"label\":\"Cold#3\"},{\"value\":\"c\",\"label\":\"They are the same\"}]},\"id\":\"scene44\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene45\":{\"transitions\":{\"prev\":\"scene44\",\"next\":\"scene46\"},\"id\":\"scene45\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene46\":{\"transitions\":{\"prev\":\"scene45\",\"next\":\"scene47\"},\"id\":\"scene46\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene47\":{\"transitions\":{\"prev\":\"scene46\",\"next\":\"scene48\"},\"id\":\"scene47\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene48\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene47\",\"next\":\"scene49\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the Hot water results, rank the Cold water results from <u>strongest</u> to <u>weakest</u> for how strongly they support the specific prediction:<br/><b>\\\"Crystals grow more in hot water than cold water.\\\"</b>\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1 is strongest, then Cold#2, and Cold#3 is weakest.\"},{\"value\":\"b\",\"label\":\"Cold#1 and Cold#3 are strongest, and Cold#2 is weakest.\"},{\"value\":\"c\",\"label\":\"Cold#3 is strongest, then Cold#2, and Cold#1 is weakest.\"}]},\"id\":\"scene48\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene49\":{\"transitions\":{\"prev\":\"scene48\",\"next\":\"scene50\"},\"id\":\"scene49\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene50\":{\"transitions\":{\"prev\":\"scene49\",\"next\":\"scene50a\"},\"id\":\"scene50\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene50a\":{\"transitions\":{\"prev\":\"scene50\",\"next\":\"scene51\"},\"id\":\"scene50a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene51\":{\"transitions\":{\"prev\":\"scene50a\",\"next\":\"scene51a\"},\"id\":\"scene51\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene51a\":{\"transitions\":{\"prev\":\"scene51\",\"next\":\"scene52\"},\"id\":\"scene51a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene52\":{\"transitions\":{\"prev\":\"scene51\",\"next\":\"scene53\"},\"id\":\"scene52\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene53\":{\"transitions\":{\"prev\":\"scene52\",\"next\":\"scene54\"},\"id\":\"scene53\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene54\":{\"transitions\":{\"prev\":\"scene53\",\"next\":\"scene55\"},\"id\":\"scene54\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene55\":{\"transitions\":{\"prev\":\"scene54\",\"next\":\"scene56\"},\"id\":\"scene55\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene56\":{\"transitions\":{\"prev\":\"scene55\",\"next\":\"scene57\"},\"id\":\"scene56\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene57\":{\"transitions\":{\"prev\":\"scene56\",\"next\":\"scene58\"},\"id\":\"scene57\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene58\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene57\",\"next\":\"scene59\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these results suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"That’s right!\",\"negFb\":\"Well, actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water.\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water.\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene58\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene59\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene58\",\"next\":\"scene60\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that water temperature caused this difference in means?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene59\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene60\":{\"transitions\":{\"prev\":\"scene59\",\"next\":\"scene61\"},\"id\":\"scene60\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene61\":{\"transitions\":{\"prev\":\"scene60\",\"next\":\"scene62\"},\"id\":\"scene61\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene62\":{\"transitions\":{\"prev\":\"scene61\",\"next\":\"scene63\"},\"id\":\"scene62\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene63\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene62\",\"next\":\"scene63a\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these results suggest?\",\"correctAnswer\":\"\",\"posFb\":\"That’s right!\",\"negFb\":\"Well, actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water.\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water.\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene63\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene63a\":{\"transitions\":{\"prev\":\"scene63\",\"next\":\"scene64\"},\"id\":\"scene63a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene64\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene63a\",\"next\":\"scene65\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that water temperature caused this difference in means?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene64\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene65\":{\"transitions\":{\"prev\":\"scene64\",\"next\":\"scene66\"},\"id\":\"scene65\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene66\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene65\",\"next\":\"scene67\"},\"question\":{\"type\":\"mc\",\"text\":\"Which results (weight of crystals) are LESS spread out? (HINT: look at the range of salt weights on the x-axis.)\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene66\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene67\":{\"transitions\":{\"prev\":\"scene66\",\"next\":\"scene68\"},\"id\":\"scene67\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene68\":{\"transitions\":{\"prev\":\"scene67\",\"next\":\"scene69\"},\"id\":\"scene68\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene69\":{\"transitions\":{\"prev\":\"scene68\",\"next\":\"scene70\"},\"id\":\"scene69\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene70\":{\"transitions\":{\"prev\":\"scene69\",\"next\":\"scene71\"},\"id\":\"scene70\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene71\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene70\",\"next\":\"scene72\"},\"question\":{\"type\":\"mc\",\"text\":\"Which results (weight of crystals) are LESS spread out?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene71\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene72\":{\"transitions\":{\"prev\":\"scene71\",\"next\":\"scene73\"},\"id\":\"scene72\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene73\":{\"transitions\":{\"prev\":\"scene72\",\"next\":\"scene74\"},\"id\":\"scene73\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene74\":{\"transitions\":{\"prev\":\"scene73\",\"next\":\"scene75\"},\"id\":\"scene74\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene75\":{\"transitions\":{\"prev\":\"scene74\",\"next\":\"scene76\"},\"id\":\"scene75\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene76\":{\"transitions\":{\"prev\":\"scene75\",\"next\":\"scene77\"},\"id\":\"scene76\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene77\":{\"transitions\":{\"prev\":\"scene76\",\"next\":\"scene78\"},\"id\":\"scene77\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene78\":{\"transitions\":{\"prev\":\"scene77\",\"next\":\"scene79\"},\"id\":\"scene78\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene79\":{\"transitions\":{\"prev\":\"scene78\",\"next\":\"scene80\"},\"id\":\"scene79\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene80\":{\"transitions\":{\"prev\":\"scene79\",\"next\":\"scene81\"},\"id\":\"scene80\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene81\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene80\",\"next\":\"scene82\"},\"question\":{\"type\":\"mc\",\"text\":\"So, based on the amount of spread in the data, which results are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene81\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene82\":{\"transitions\":{\"prev\":\"scene81\",\"next\":\"scene83\"},\"id\":\"scene82\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene83\":{\"transitions\":{\"prev\":\"scene82\",\"next\":\"scene84\"},\"id\":\"scene83\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene84\":{\"transitions\":{\"prev\":\"scene83\",\"next\":\"scene89\"},\"id\":\"scene84\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene89\":{\"transitions\":{\"prev\":\"scene84\",\"next\":\"scene90\"},\"id\":\"scene89\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene90\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene89\",\"next\":\"scene91\"},\"question\":{\"type\":\"mc\",\"text\":\"Which data are LESS spread out?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results C\"},{\"value\":\"d\",\"label\":\"Results D\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene90\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene91\":{\"transitions\":{\"prev\":\"scene90\",\"next\":\"scene92\"},\"id\":\"scene91\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene92\":{\"transitions\":{\"prev\":\"scene91\",\"next\":\"scene93\"},\"id\":\"scene92\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene93\":{\"transitions\":{\"prev\":\"scene92\",\"next\":\"scene94\"},\"id\":\"scene93\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene94\":{\"transitions\":{\"prev\":\"scene93\",\"next\":\"scene95\"},\"id\":\"scene94\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene95\":{\"transitions\":{\"prev\":\"scene94\",\"next\":\"scene96\"},\"id\":\"scene95\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene96\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene95\",\"next\":\"scene97\"},\"question\":{\"type\":\"mc\",\"text\":\"So, which Results (C or D) are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results C\"},{\"value\":\"d\",\"label\":\"Results D\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene96\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene97\":{\"transitions\":{\"prev\":\"scene96\",\"next\":\"scene98\"},\"id\":\"scene97\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene98\":{\"transitions\":{\"prev\":\"scene97\",\"next\":\"scene99\"},\"id\":\"scene98\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene99\":{\"transitions\":{\"prev\":\"scene98\",\"next\":\"scene100\"},\"id\":\"scene99\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene100\":{\"transitions\":{\"prev\":\"scene99\",\"next\":\"scene101\"},\"id\":\"scene100\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene101\":{\"transitions\":{\"prev\":\"scene100\",\"next\":\"scene102\"},\"id\":\"scene101\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene102\":{\"transitions\":{\"prev\":\"scene101\",\"next\":\"scene103\"},\"id\":\"scene102\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene103\":{\"transitions\":{\"prev\":\"scene102\",\"next\":\"scene104\"},\"id\":\"scene103\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene104\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene103\",\"next\":\"scene104a\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these two sets of results (Results E &amp; F) suggest?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Sugar crystals grow better than salt crystals.\"},{\"value\":\"b\",\"label\":\"Salt crystals grow better than sugar crystals.\"},{\"value\":\"c\",\"label\":\"I don’t know; They show opposite results.\"}]},\"id\":\"scene104\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene104a\":{\"transitions\":{\"prev\":\"scene104\",\"next\":\"scene105\"},\"id\":\"scene104a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene105\":{\"transitions\":{\"prev\":\"scene104a\",\"next\":\"scene106\"},\"id\":\"scene105\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene106\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene105\",\"next\":\"scene107\"},\"question\":{\"type\":\"mc\",\"text\":\"Now that you see their measurements, which of the two sets of results do you trust more?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results E\"},{\"value\":\"b\",\"label\":\"Results F\"},{\"value\":\"c\",\"label\":\"They are equally good results.\"}]},\"id\":\"scene106\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene107\":{\"transitions\":{\"prev\":\"scene106\",\"next\":\"scene108\"},\"id\":\"scene107\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene108\":{\"sceneType\":\"multipleChoiceForm\",\"transitions\":{\"prev\":\"scene107\",\"next\":\"scene108a\"},\"question\":{\"type\":\"mc\",\"text\":\"Based on Results E &amp; F, which statement is more likely to be true?\",\"correctAnswer\":\"\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grow better on a string in water than sugar crystals.\"},{\"value\":\"b\",\"label\":\"Sugar crystals grow better on a string in water than salt crystals.\"},{\"value\":\"c\",\"label\":\"Again, it’s impossible to even guess.\"}]},\"id\":\"scene108\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene108a\":{\"transitions\":{\"prev\":\"scene108\",\"next\":\"scene109\"},\"id\":\"scene108a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene109\":{\"transitions\":{\"prev\":\"scene108a\",\"next\":\"scene110\"},\"id\":\"scene109\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene110\":{\"transitions\":{\"prev\":\"scene109\",\"next\":\"scene111\"},\"id\":\"scene110\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene111\":{\"transitions\":{\"prev\":\"scene110\",\"next\":\"scene112\"},\"id\":\"scene111\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene112\":{\"transitions\":{\"prev\":\"scene111\",\"next\":\"scene113\"},\"id\":\"scene112\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene113\":{\"transitions\":{\"prev\":\"scene112\",\"next\":\"completed\"},\"id\":\"scene113\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"transitions\":{\"prev\":\"scene113\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

/***/ }),

/***/ "./src/di-instruction-app.js":
/*!***********************************!*\
  !*** ./src/di-instruction-app.js ***!
  \***********************************/
/*! exports provided: DiInstructionApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiInstructionApp", function() { return DiInstructionApp; });
/* harmony import */ var _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/scene-transitions-base */ "../../common/scene-transitions-base/index.js");
/* harmony import */ var _di_instruction_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./di-instruction-scene */ "./src/di-instruction-scene.js");
/* harmony import */ var _di_stats_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./di-stats-scene */ "./src/di-stats-scene.js");
/* harmony import */ var _di_mult_choice_form_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./di-mult-choice-form-scene */ "./src/di-mult-choice-form-scene.js");





class DiInstructionApp extends _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_0__["SceneTransitionsApp"] {
    constructor(appData) {
        super(appData);
        this.nextBtn = document.getElementById("next_btn");
        this.prevBtn = document.getElementById("prev_btn");
        this.backToQuestionBtn = document.getElementById("back_to_question_btn");
        this.readyToAnswerBtn = document.getElementById("ready_to_answer_btn");
        this.sceneIdRegion = document.getElementById("scene_id_region");
        this.nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("next");
        });
        this.prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("prev");
        });
        this.readyToAnswerBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("readyToAnswer");
        });
        this.backToQuestionBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.handleTransition("backToQuestion");
        });
        window.app = this;
    }

    setSnackbar(snackbar) {
        this.snackbar = snackbar;
    }

    showFeedback(feedback) {
        this.snackbar.show(feedback);
    }

    createScene(sceneInfo) {
        let newScene;
        if ("stats" === sceneInfo.sceneType) {
            newScene = new _di_stats_scene__WEBPACK_IMPORTED_MODULE_2__["DiStatsScene"](this, sceneInfo);
        } else if ("multipleChoiceForm" === sceneInfo.sceneType) {
            newScene = new _di_mult_choice_form_scene__WEBPACK_IMPORTED_MODULE_3__["DiMultipleChoiceFormScene"](this, sceneInfo);
        } else {
            newScene = new _di_instruction_scene__WEBPACK_IMPORTED_MODULE_1__["DiInstructionScene"](this, sceneInfo);
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

};


/***/ }),

/***/ "./src/di-instruction-scene.js":
/*!*************************************!*\
  !*** ./src/di-instruction-scene.js ***!
  \*************************************/
/*! exports provided: DiInstructionScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiInstructionScene", function() { return DiInstructionScene; });
/* harmony import */ var _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/scene-transitions-base */ "../../common/scene-transitions-base/index.js");


class DiInstructionScene extends _isptutorproject_scene_transitions_base__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor(app, data) {
        super(app, data);
        this.handleTransitionButton = this.handleTransitionButton.bind(this);
        this.customActions = {
            showBtns: this.showBtns,
            hideBtns: this.hideBtns,
            hiliteTableCells: this.hilightTableCells
        };
        this.btnNames = {
            prev: this.app.prevBtn,
            next: this.app.nextBtn,
            backToQuestion: this.app.backToQuestionBtn,
            readyToAnswer: this.app.readyToAnswerBtn
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

    hiliteTableCells(args) {
        let tableId = `${this.id}_${args.table}`;
        let table = document.getElementById(tableId);
        let color = args.color || "blue";
        for (let selector of args.cellSelectors) {
            let sel = `td${selector}`;
            let cell = table.querySelector(sel);
            cell.classList.add(`${color}-bg`);
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

    // teardownTransitionEventHandlers() {
    //     for (let el of this.getTransitionElements()) {
    //         el.removeEventListener("click", this.handleTransition);
    //     }
    // }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.setupTransitionEventHandlers();
        if (false) {} else {
            this.app.show(this.app.prevBtn);
        }
        this.app.show(this.app.nextBtn);
        this.app.hide(this.app.readyToAnswerBtn);
        this.app.hide(this.app.backToQuestionBtn);
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

    defaultExitSceneActions() {
        super.defaultExitSceneActions()
    }
};


/***/ }),

/***/ "./src/di-mult-choice-form-scene.js":
/*!******************************************!*\
  !*** ./src/di-mult-choice-form-scene.js ***!
  \******************************************/
/*! exports provided: DiMultipleChoiceFormScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiMultipleChoiceFormScene", function() { return DiMultipleChoiceFormScene; });
/* harmony import */ var _di_instruction_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./di-instruction-scene */ "./src/di-instruction-scene.js");


class DiMultipleChoiceFormScene extends _di_instruction_scene__WEBPACK_IMPORTED_MODULE_0__["DiInstructionScene"] {
    constructor(app, data) {
        super(app, data);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.handleFormChange = this.handleFormChange.bind(this);
        this.formInfo = data.question;
        this.form = document.getElementById(`${this.id}_radio_form`);
        // this.fbRegion = document.getElementById(
        //     `${this.id}_feedback_region`
        // );
        this.radios = this.form.querySelectorAll('input[type="radio"]');
        this.submitBtn = document.getElementById(`${this.id}_submit_btn`);
    }

    // hideFeedbackRegion() {
    //     this.app.makeInvisible(this.fbRegion);
    // }

    // showFeedbackRegion() {
    //     this.app.makeVisible(this.fbRegion);
    // }

    // handleFormChange(e) {
    //     this.hideFeedbackRegion();
    // }

    handleFormSubmit(e) {
        e.preventDefault();

        if (this.form.checkValidity()) {
            let sfi = this.formInfo;
            let selectedAnswer = this.form.querySelector(
                'input[type="radio"]:checked'
            )
            let val = selectedAnswer.value.trim();
            let ansText = selectedAnswer.labels[0].innerText;
            let correctAnswer = sfi.correctAnswer;
            let isCorrect;
            let fbText;
            let fbClassName;
            if ("n/a" === correctAnswer) {
                isCorrect = null;
                fbText = sfi.ntlFb;
                fbClassName = "ntl-feedback";
            } else if (correctAnswer === val) {
                isCorrect = true;
                fbText = sfi.posFb;
                fbClassName = "pos-feedback";
            } else {
                isCorrect = false;
                fbText = sfi.negFb;
                fbClassName = 'neg-feedback';
            }
            if (!fbText) {
                fbText = sfi.ntlFb;
                fbClassName = 'ntl-feedback';
            }
            // if (this.fbRegion && fbText) {
            if (fbText) {
                let fbMsg =  `<span class="${fbClassName}">
                    ${fbText}
                </span>`;
                this.app.showFeedback(fbMsg);
                // this.fbRegion.innerHTML = fbMsg;
                // this.showFeedbackRegion();
            }
            // what we want to store in firestore
            let log = {
                id: `${this.id}.question`,
                questionType: sfi.type,
                question: sfi.questionText,
                selected: ansText,
                isCorrect: isCorrect,
                timestamp: new Date().toLocaleString()
            }
            console.log(log);

            for (let radio of this.radios) {
                this.app.disable(radio);
                this.app.disable(radio.labels[0]);
            }
            this.app.disable(this.submitBtn);
            this.app.enable(this.app.nextBtn);
            this.app.enable(this.app.prevBtn);
        // } else if (this.fbRegion) {
        } else {
            let fbMsg = `<span class="text-danger">Please select an option</span>`;
            this.app.showFeedback(fbMsg);
            // this.fbRegion.innerHTML = fbMsg;
            // this.showFeedbackRegion();
        }
    }

    setupEventHandlers() {
        for (let rb of this.radios) {
            rb.addEventListener('change', this.handleFormChange)
        }
        this.submitBtn.addEventListener("click", this.handleFormSubmit);
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.app.disable(this.app.prevBtn);
        this.app.disable(this.app.nextBtn);
        this.setupEventHandlers();
    }

    defaultExitSceneActions() {
        super.defaultExitSceneActions();
        // these are strictly for development when the user can return to
        // this page via the prev btn
        this.app.enable(this.submitBtn);
        for (let rb of this.radios) {
            this.app.enable(rb);
        }
    }
}


/***/ }),

/***/ "./src/di-stats-scene.js":
/*!*******************************!*\
  !*** ./src/di-stats-scene.js ***!
  \*******************************/
/*! exports provided: DiStatsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiStatsScene", function() { return DiStatsScene; });
/* harmony import */ var _di_instruction_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./di-instruction-scene */ "./src/di-instruction-scene.js");



class DiStatsScene extends _di_instruction_scene__WEBPACK_IMPORTED_MODULE_0__["DiInstructionScene"] {
    constructor(app, data) {
        super(app, data);
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.app.hide(this.app.prevBtn);
        this.app.hide(this.app.nextBtn);
    }
}


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
/* harmony import */ var _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/snackbar */ "../../common/snackbar/index.js");
/* harmony import */ var _di_instruction_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./di-instruction-app */ "./src/di-instruction-app.js");






let appData = __webpack_require__(/*! ../data/diInstr.json */ "./data/diInstr.json");

let snackbar = new _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_1__["SnackBar"]();
let app = new _di_instruction_app__WEBPACK_IMPORTED_MODULE_2__["DiInstructionApp"](appData)
app.setSnackbar(snackbar);
app.setStartScene("start");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtdHJhbnNpdGlvbnMtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktaW5zdHJ1Y3Rpb24tYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaS1pbnN0cnVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktbXVsdC1jaG9pY2UtZm9ybS1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktc3RhdHMtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz83N2NmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDOztBQUVBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVKQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUI7OztBQUdkO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUTtBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEU7QUFDbEI7QUFDWjtBQUN3Qjs7QUFFakUsK0JBQStCLDJGQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFZO0FBQ3ZDLFNBQVM7QUFDVCwyQkFBMkIsb0ZBQXlCO0FBQ3BELFNBQVM7QUFDVCwyQkFBMkIsd0VBQWtCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCLEdBQUcsYUFBYTtBQUMxRDtBQUNBLHFCQUFxQixjQUFjLEdBQUcsSUFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxJQUFzQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFBQTtBQUFBO0FBQWdFOztBQUV6RCxpQ0FBaUMsNkVBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLFFBQVEsR0FBRyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBcUMsRUFBRSxFQUUxQztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQTREOztBQUVyRCx3Q0FBd0Msd0VBQWtCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQSxvREFBb0QsUUFBUTtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckg0RDs7QUFFckQsMkJBQTJCLHdFQUFrQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFd0I7QUFDRzs7O0FBR3hELGNBQWMsbUJBQU8sQ0FBQyxpREFBc0I7O0FBRTVDLG1CQUFtQixrRUFBUTtBQUMzQixjQUFjLG9FQUFnQjtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSx1QyIsImZpbGUiOiJkaS1pbnN0ci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgLy8gY29weSBhbGwgc2NlbmVJbmZvIHRvICd0aGlzJ1xuICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2NlbmVJbmZvKSkge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIF9pc0JvZ3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCA9PT0gXCJOL0FcIiB8fCB0aGlzLnNjZW5lVHlwZSA9PT0gXCJib2d1c1wiO1xuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRW50ZXJBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUV4aXRBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTY2VuZVRyYW5zaXRpb25zQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBEYXRhKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gYXBwRGF0YS5zY2VuZXM7XG4gICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5zY2VuZXMpO1xuICAgICAgICB0aGlzLmJvZ3VzU2NlbmVJbmZvID0ge1xuICAgICAgICAgICAgaWQ6IFwiTi9BXCIsXG4gICAgICAgICAgICBzY2VuZVR5cGU6IFwiYm9ndXNcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJjcmVhdGVTY2VuZSgpXCIsIHNjZW5lSW5mbyk7XG4gICAgICAgIHJldHVybiBuZXcgU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uVG8oc2NlbmUpIHtcbiAgICAgICAgdGhpcy5sb2dUcmFuc2l0aW9uKHNjZW5lKTtcbiAgICAgICAgdGhpcy5wcmV2U2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICAgICAgdGhpcy5wcmV2U2NlbmUuZXhpdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5lbnRlcigpO1xuICAgICAgICBkZWxldGUgdGhpcy5wcmV2U2NlbmU7XG4gICAgfVxuXG4gICAgbG9va3VwU2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBsZXQgc2NlbmVJbmZvID0gdGhpcy5zY2VuZXNbc2NlbmVJZF07XG4gICAgICAgIGlmICghc2NlbmVJbmZvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFUlJPUjogbm8gc3VjaCBzY2VuZSAke3NjZW5lSWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lSW5mbztcbiAgICB9XG5cbiAgICBoYW5kbGVUcmFuc2l0aW9uKHRyYW5zaXRpb25OYW1lKSB7XG4gICAgICAgIGxldCBuZXdTY2VuZUlkID0gdGhpcy5jdXJyZW50U2NlbmUudHJhbnNpdGlvbnNbdHJhbnNpdGlvbk5hbWVdO1xuICAgICAgICBsZXQgbmV3U2NlbmVJbmZvID0gdGhpcy5sb29rdXBTY2VuZShuZXdTY2VuZUlkKTtcbiAgICAgICAgaWYgKCFuZXdTY2VuZUluZm8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmNyZWF0ZVNjZW5lKG5ld1NjZW5lSW5mbyk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcobmV3U2NlbmUpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhuZXdTY2VuZSk7XG4gICAgfVxuXG4gICAgbG9nVHJhbnNpdGlvbihzY2VuZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogbG9nVHJhbnNpdGlvbigpXCIpO1xuICAgIH1cblxuICAgIHNldFN0YXJ0U2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwic2V0U3RhcnRTY2VuZSgpXCIsIHNjZW5lSWQpO1xuICAgICAgICBsZXQgc3RhcnRTY2VuZUluZm8gPSB0aGlzLmxvb2t1cFNjZW5lKHNjZW5lSWQpO1xuXG4gICAgICAgIGlmICghdGhpcy5zY2VuZXMuaGFzT3duUHJvcGVydHkoc2NlbmVJZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYG5vIHNjZW5lIG5hbWVkIFwiJHtzY2VuZUlkfVwiYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUodGhpcy5ib2d1c1NjZW5lSW5mbyk7XG4gICAgICAgIGlmICghc3RhcnRTY2VuZUluZm8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhcnRTY2VuZSA9IHRoaXMuY3JlYXRlU2NlbmUoc3RhcnRTY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UbyhzdGFydFNjZW5lKTtcbiAgICB9XG5cbiAgICBoaWRlKGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgc2hvdyhlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIG1ha2VJbnZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlVmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAvLyBlbC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBTbmFja0JhciB7XG4gICAgY29uc3RydWN0b3IoZWxlSUQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlEIHx8IFwic25hY2tiYXJcIik7XG4gICAgfVxuXG4gICAgc2hvdyh0ZXh0KSB7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgLy8gQWRkIHRoZSBcInNob3dcIiBjbGFzcyB0byBESVZcbiAgICAgICAgLy8gdGhpcy5lbC5jbGFzc05hbWUgPSBcInNob3dcIjtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgLy8gQWZ0ZXIgMyBzZWNvbmRzLCByZW1vdmUgdGhlIHNob3cgY2xhc3MgZnJvbSBESVZcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBzbmFja2Jhci5jbGFzc05hbWUgPSBzbmFja2Jhci5jbGFzc05hbWUucmVwbGFjZShcInNob3dcIiwgXCJcIik7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICB9LCAzMDAwKTsgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmVUcmFuc2l0aW9uc0FwcCB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLXRyYW5zaXRpb25zLWJhc2VcIjtcbmltcG9ydCB7IERpSW5zdHJ1Y3Rpb25TY2VuZSB9IGZyb20gXCIuL2RpLWluc3RydWN0aW9uLXNjZW5lXCI7XG5pbXBvcnQgeyBEaVN0YXRzU2NlbmUgfSBmcm9tIFwiLi9kaS1zdGF0cy1zY2VuZVwiO1xuaW1wb3J0IHsgRGlNdWx0aXBsZUNob2ljZUZvcm1TY2VuZSB9IGZyb20gXCIuL2RpLW11bHQtY2hvaWNlLWZvcm0tc2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIERpSW5zdHJ1Y3Rpb25BcHAgZXh0ZW5kcyBTY2VuZVRyYW5zaXRpb25zQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBEYXRhKSB7XG4gICAgICAgIHN1cGVyKGFwcERhdGEpO1xuICAgICAgICB0aGlzLm5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuICAgICAgICB0aGlzLnByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZfYnRuXCIpO1xuICAgICAgICB0aGlzLmJhY2tUb1F1ZXN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrX3RvX3F1ZXN0aW9uX2J0blwiKTtcbiAgICAgICAgdGhpcy5yZWFkeVRvQW5zd2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkeV90b19hbnN3ZXJfYnRuXCIpO1xuICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lX2lkX3JlZ2lvblwiKTtcbiAgICAgICAgdGhpcy5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uKFwibmV4dFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbihcInByZXZcIik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlYWR5VG9BbnN3ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oXCJyZWFkeVRvQW5zd2VyXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrVG9RdWVzdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbihcImJhY2tUb1F1ZXN0aW9uXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFwcCA9IHRoaXM7XG4gICAgfVxuXG4gICAgc2V0U25hY2tiYXIoc25hY2tiYXIpIHtcbiAgICAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuICAgIH1cblxuICAgIHNob3dGZWVkYmFjayhmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnNuYWNrYmFyLnNob3coZmVlZGJhY2spO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgbmV3U2NlbmU7XG4gICAgICAgIGlmIChcInN0YXRzXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpU3RhdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKFwibXVsdGlwbGVDaG9pY2VGb3JtXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpTXVsdGlwbGVDaG9pY2VGb3JtU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpSW5zdHJ1Y3Rpb25TY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcbiAgICB9XG5cbiAgICBsb2dUcmFuc2l0aW9uKHNjZW5lKSB7XG4gICAgICAgIC8vIEZJWE1FOiB0aGlzIG5lZWRzIHRvIGdldCBzdG9yZWQgaW4gZmlyZXN0b3JlXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBcIlNDRU5FX1RSQU5TSVRJT05cIixcbiAgICAgICAgICAgIGZyb206IHRoaXMuY3VycmVudFNjZW5lLmlkLFxuICAgICAgICAgICAgdG86IHNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coc2NlbmUuaWQsIGRhdGEpO1xuICAgIH1cblxuICAgIGxvZ1N0dWRlbnRBbnN3ZXIocXVlc3Rpb25OYW1lLCBhbnN3ZXIpIHtcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50U2NlbmUucXVlc3Rpb25zW3F1ZXN0aW9uTmFtZV07XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSBcIk4vQVwiO1xuICAgICAgICBpZiAocXVlc3Rpb24uaGFzT3duUHJvcGVydHkoXCJjb3JyZWN0QW5zd2VyXCIpKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSAoYW5zd2VyID09PSBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyKVxuICAgICAgICB9XG4gICAgICAgIGxldCBxaWQgPSBgJHt0aGlzLmN1cnJlbnRTY2VuZS5pZH0uJHtxdWVzdGlvbk5hbWV9YDtcbiAgICAgICAgaWYgKFwiXCIgIT09IHRoaXMudGVzdE5hbWUpIHtcbiAgICAgICAgICAgIHFpZCA9IGAke3RoaXMudGVzdE5hbWV9LiR7cWlkfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiU1VCTUlUX0FOU1dFUlwiLFxuICAgICAgICAgICAgcXVlc3Rpb25JZDogcWlkLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVzdGlvbi50ZXh0LFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvblRvKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyLnRyYW5zaXRpb25UbyhzY2VuZSk7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxufTtcbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtdHJhbnNpdGlvbnMtYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlJbnN0cnVjdGlvblNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgZGF0YSkge1xuICAgICAgICBzdXBlcihhcHAsIGRhdGEpO1xuICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb25CdXR0b24gPSB0aGlzLmhhbmRsZVRyYW5zaXRpb25CdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpb25zID0ge1xuICAgICAgICAgICAgc2hvd0J0bnM6IHRoaXMuc2hvd0J0bnMsXG4gICAgICAgICAgICBoaWRlQnRuczogdGhpcy5oaWRlQnRucyxcbiAgICAgICAgICAgIGhpbGl0ZVRhYmxlQ2VsbHM6IHRoaXMuaGlsaWdodFRhYmxlQ2VsbHNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idG5OYW1lcyA9IHtcbiAgICAgICAgICAgIHByZXY6IHRoaXMuYXBwLnByZXZCdG4sXG4gICAgICAgICAgICBuZXh0OiB0aGlzLmFwcC5uZXh0QnRuLFxuICAgICAgICAgICAgYmFja1RvUXVlc3Rpb246IHRoaXMuYXBwLmJhY2tUb1F1ZXN0aW9uQnRuLFxuICAgICAgICAgICAgcmVhZHlUb0Fuc3dlcjogdGhpcy5hcHAucmVhZHlUb0Fuc3dlckJ0blxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3dCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpbGl0ZVRhYmxlQ2VsbHMoYXJncykge1xuICAgICAgICBsZXQgdGFibGVJZCA9IGAke3RoaXMuaWR9XyR7YXJncy50YWJsZX1gO1xuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcbiAgICAgICAgbGV0IGNvbG9yID0gYXJncy5jb2xvciB8fCBcImJsdWVcIjtcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3Igb2YgYXJncy5jZWxsU2VsZWN0b3JzKSB7XG4gICAgICAgICAgICBsZXQgc2VsID0gYHRkJHtzZWxlY3Rvcn1gO1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKHNlbCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y29sb3J9LWJnYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmFuc2l0aW9uQnV0dG9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdHJhbnNpdGlvbk5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LnRyYW5zaXRpb247XG4gICAgICAgIHRoaXMuYXBwLmhhbmRsZVRyYW5zaXRpb24odHJhbnNpdGlvbk5hbWUpO1xuICAgIH1cblxuICAgIGdldFRyYW5zaXRpb25FbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyYW5zaXRpb24tdG9cIik7XG4gICAgfVxuXG4gICAgc2V0dXBUcmFuc2l0aW9uRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRUcmFuc2l0aW9uRWxlbWVudHMoKSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbkJ1dHRvbiwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGVhcmRvd25UcmFuc2l0aW9uRXZlbnRIYW5kbGVycygpIHtcbiAgICAvLyAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRUcmFuc2l0aW9uRWxlbWVudHMoKSkge1xuICAgIC8vICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlVHJhbnNpdGlvbik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnNldHVwVHJhbnNpdGlvbkV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5yZWFkeVRvQW5zd2VyQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5iYWNrVG9RdWVzdGlvbkJ0bik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5jdXN0b21FbnRlckFjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gYWN0aW9uLm5hbWU7XG4gICAgICAgICAgICBsZXQgYXJncyA9IGFjdGlvbi5hcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBEaUluc3RydWN0aW9uU2NlbmUgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlNdWx0aXBsZUNob2ljZUZvcm1TY2VuZSBleHRlbmRzIERpSW5zdHJ1Y3Rpb25TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgZGF0YSk7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UgPSB0aGlzLmhhbmRsZUZvcm1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGRhdGEucXVlc3Rpb247XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JhZGlvX2Zvcm1gKTtcbiAgICAgICAgLy8gdGhpcy5mYlJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAvLyAgICAgYCR7dGhpcy5pZH1fZmVlZGJhY2tfcmVnaW9uYFxuICAgICAgICAvLyApO1xuICAgICAgICB0aGlzLnJhZGlvcyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zdWJtaXRfYnRuYCk7XG4gICAgfVxuXG4gICAgLy8gaGlkZUZlZWRiYWNrUmVnaW9uKCkge1xuICAgIC8vICAgICB0aGlzLmFwcC5tYWtlSW52aXNpYmxlKHRoaXMuZmJSZWdpb24pO1xuICAgIC8vIH1cblxuICAgIC8vIHNob3dGZWVkYmFja1JlZ2lvbigpIHtcbiAgICAvLyAgICAgdGhpcy5hcHAubWFrZVZpc2libGUodGhpcy5mYlJlZ2lvbik7XG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlRm9ybUNoYW5nZShlKSB7XG4gICAgLy8gICAgIHRoaXMuaGlkZUZlZWRiYWNrUmVnaW9uKCk7XG4gICAgLy8gfVxuXG4gICAgaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgbGV0IGFuc1RleHQgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgbGV0IGNvcnJlY3RBbnN3ZXIgPSBzZmkuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgICAgIGxldCBpc0NvcnJlY3Q7XG4gICAgICAgICAgICBsZXQgZmJUZXh0O1xuICAgICAgICAgICAgbGV0IGZiQ2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKFwibi9hXCIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgICAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLnBvc0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJwb3MtZmVlZGJhY2tcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm5lZ0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gJ25lZy1mZWVkYmFjayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZiVGV4dCkge1xuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9ICdudGwtZmVlZGJhY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZmJSZWdpb24gJiYgZmJUZXh0KSB7XG4gICAgICAgICAgICBpZiAoZmJUZXh0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZiTXNnID0gIGA8c3BhbiBjbGFzcz1cIiR7ZmJDbGFzc05hbWV9XCI+XG4gICAgICAgICAgICAgICAgICAgICR7ZmJUZXh0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnNob3dGZWVkYmFjayhmYk1zZyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5mYlJlZ2lvbi5pbm5lckhUTUwgPSBmYk1zZztcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dGZWVkYmFja1JlZ2lvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2hhdCB3ZSB3YW50IHRvIHN0b3JlIGluIGZpcmVzdG9yZVxuICAgICAgICAgICAgbGV0IGxvZyA9IHtcbiAgICAgICAgICAgICAgICBpZDogYCR7dGhpcy5pZH0ucXVlc3Rpb25gLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVHlwZTogc2ZpLnR5cGUsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IHNmaS5xdWVzdGlvblRleHQsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFuc1RleHQsXG4gICAgICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHJhZGlvIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzYWJsZShyYWRpbyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzYWJsZShyYWRpby5sYWJlbHNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHAuZGlzYWJsZSh0aGlzLnN1Ym1pdEJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy5mYlJlZ2lvbikge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZiTXNnID0gYDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5QbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbjwvc3Bhbj5gO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvd0ZlZWRiYWNrKGZiTXNnKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZmJSZWdpb24uaW5uZXJIVE1MID0gZmJNc2c7XG4gICAgICAgICAgICAvLyB0aGlzLnNob3dGZWVkYmFja1JlZ2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAgICAgcmIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUZvcm1TdWJtaXQpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIC8vIHRoZXNlIGFyZSBzdHJpY3RseSBmb3IgZGV2ZWxvcG1lbnQgd2hlbiB0aGUgdXNlciBjYW4gcmV0dXJuIHRvXG4gICAgICAgIC8vIHRoaXMgcGFnZSB2aWEgdGhlIHByZXYgYnRuXG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLnN1Ym1pdEJ0bik7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUocmIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgeyBEaUluc3RydWN0aW9uU2NlbmUgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlTdGF0c1NjZW5lIGV4dGVuZHMgRGlJbnN0cnVjdGlvblNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIoYXBwLCBkYXRhKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zbmFja2JhclwiO1xuaW1wb3J0IHsgRGlJbnN0cnVjdGlvbkFwcCB9IGZyb20gXCIuL2RpLWluc3RydWN0aW9uLWFwcFwiO1xuXG5cbmxldCBhcHBEYXRhID0gcmVxdWlyZShcIi4uL2RhdGEvZGlJbnN0ci5qc29uXCIpO1xuXG5sZXQgc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbmxldCBhcHAgPSBuZXcgRGlJbnN0cnVjdGlvbkFwcChhcHBEYXRhKVxuYXBwLnNldFNuYWNrYmFyKHNuYWNrYmFyKTtcbmFwcC5zZXRTdGFydFNjZW5lKFwic3RhcnRcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9