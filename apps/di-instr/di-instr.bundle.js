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

/***/ "../../common/activity-config/index.js":
/*!****************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/activity-config/index.js ***!
  \****************************************************************************************/
/*! exports provided: getActivityConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityConfiguration", function() { return getActivityConfiguration; });
function getActivityConfiguration() {
    let activityConfig = {
        userID: localStorage.getItem("userID"),
        classCode: localStorage.getItem("classCode"),
        database: localStorage.getItem("database"),
        homepage: localStorage.getItem("homepage"),
        activityKey: localStorage.getItem("currentActivity"),
        features: (localStorage.getItem("currentActivityFeatures") || "")
                  .split(":")
                  .filter((item) => item !== "")
    };
    console.log(activityConfig);
    return activityConfig;
}

/***/ }),

/***/ "../../common/isp-database/database.js":
/*!****************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/isp-database/database.js ***!
  \****************************************************************************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
// abstract class - interface
class Database {
    constructor() {

    }

    setCredentials(classCode, userID) {
        this.classCode = classCode;
        this.userID = userID;
    }

    getUserData() {

    }

    getActivityData(activityKey, decodeJSON = true) {

    }

    setActivityData(activityKey, object) {

    }

    getRQData() {

    }

    getCurrHypoTask() {

    }

    getInitialHypoData() {

    }

    getFinalHypoData() {

    }

    saveValue(varName, value) {

    }

    saveJSONValue(varName, object) {

    }

    getBoolValue(varName) {

    }

    getIntValue(varName) {

    }

    getFloatValue(varName) {

    }

    getTextValue(varName) {

    }

    getJSONValue(varName) {

    }

};




/***/ }),

/***/ "../../common/isp-database/firestoreDB.js":
/*!*******************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/isp-database/firestoreDB.js ***!
  \*******************************************************************************************/
/*! exports provided: FirestoreDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreDB", function() { return FirestoreDB; });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "../../common/isp-database/database.js");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7zIk-8V20QqJNSs0cAV0uNL3qjeqLMdM",
    authDomain: "isptutor.firebaseapp.com",
    projectId: "isptutor"
};

class FirestoreDB extends _database__WEBPACK_IMPORTED_MODULE_0__["Database"] {

    constructor() {
        super();
        firebase.initializeApp(firebaseConfig);
        this.store = firebase.firestore();
    }

    setCredentials(classCode, userID) {
        super.setCredentials(classCode, userID);
        this.userRef = this.store.collection(this.classCode).doc(this.userID);
    }

    getUserData() {
        // returns promise with 'doc' if it exists, null otherwise
        return this.userRef.get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data;
            } else {
                return null;
            }
        });
    }


    getCurrHypoTask() {

    }
  
    getActivityData(activityKey, decodeJSON=true) {
        return this.getUserData()
        .then((userData) => {
            let data = userData[activityKey];
            if (data && decodeJSON) {
                return JSON.parse(data);
            } else {
                return data;
            }
        });
    }

    // getRQData() {
    //     return this.getAppData("rqted");
    // }


    // getInitialHypoData() {
    //     return this.getAppData("initialHypo")
    //     .then((strData))
    // }

    // getFinalHypoData() {
    //     return this.getAppData("finalHypo")
    // }

    setValues(object, overwrite=false) {
        // default to {merge: true} option for safety
        return this.userRef.set(object, {merge: !overwrite});       
    }

    updateValues(object) {
        return this.userRef.update(object);
    }

    deleteValue(varName) {
        return this.userRef.update({
            [varName]: firebase.firestore.FieldValue.delete()
        });
    }

    // saveJSONValue(varName, value) {
    //     return this.userRef.set({
    //         [varName]: JSON.stringify(value)
    //     });
    // }

    // getBoolValue(varName) {

    // }

    // getIntValue(varName) {

    // }   
    
    // getFloatValue(varName) {

    // }

    // getTextValue(varName) {

    // }

    // getJSONValue(varName) {

    // }
};

/***/ }),

/***/ "../../common/isp-database/index.js":
/*!*************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/isp-database/index.js ***!
  \*************************************************************************************/
/*! exports provided: getDBConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDBConnection", function() { return getDBConnection; });
/* harmony import */ var _localStorageDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageDB */ "../../common/isp-database/localStorageDB.js");
/* harmony import */ var _firestoreDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestoreDB */ "../../common/isp-database/firestoreDB.js");



function getDBConnection(dbType) {
    let db;
    switch(dbType) {
        case "firestore":
            db = new _firestoreDB__WEBPACK_IMPORTED_MODULE_1__["FirestoreDB"]();
            break;
        default:
            db = new _localStorageDB__WEBPACK_IMPORTED_MODULE_0__["LocalStorageDB"]();
    }
    return db; 
}


/***/ }),

/***/ "../../common/isp-database/localStorageDB.js":
/*!**********************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/isp-database/localStorageDB.js ***!
  \**********************************************************************************************/
/*! exports provided: LocalStorageDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageDB", function() { return LocalStorageDB; });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "../../common/isp-database/database.js");



// NOTE: this API must use promises to be compatible with any db
// we may be using, which may be either sync or async
class LocalStorageDB extends _database__WEBPACK_IMPORTED_MODULE_0__["Database"] {

    constructor() {
        super();
    }

    setCredentials(classCode, userID) {
        super.setCredentials(classCode, userID);
        // return Promise.all([
        // this.saveValue("classCode", classCode),
        // this.saveValue("userID", userID),
        // ]).then(([result1, result2]) => { });
    }

    getUserData() {
        console.count("getUserData() called");
        let data = {};
        return Promise.all([
            this.getTextValue("classCode"),
            this.getTextValue("userID"),
            this.getActivityData("rqted"),
            this.getCurrHypoTask(),
            this.getIntialHypoData(),
            this.getFinalHypoData()
        ]).then(([ccRes, uidRes, rqRes, chtRes, ihRes, fhRes]) => {
            data.classCode = ccRes;
            data.userID = uidRes;
            data.rqted = rqRes;
            if (chtRes) {
                data.currHypoTaskIdx = chtRes
            }
            if (ihRes) {
                data.firstPrediction = ihRes.firstPrediction;
                data.initialHypo = ihRes.initialHypo;
            }
            if (fhRes) {
                data.secondPrediction = fhRes.secondPrediction;
                data.finalHypo = fhRes.finalHypo;
            }
            return data;
        });
    }

    getActivityData(activityKey, decodeJSON = true) {
        return this.getJSONValue(activityKey)
        .then((data) => {
            if (data && !decodeJSON) {
                return JSON.stringify(data);
            } else {
                return data;
            }
        });
    }

    setActivityData(activityKey, object) {
        return this.saveJSONValue(activityKey, object);
    }

    getRQData() {
        let retVal = null;
        return this.getActivityData("rqted")
        .then((rqted) => {
            // console.log(rqted);
            if (rqted) {
                retVal = rqted;
            } else {
                // if the rq isn't selected hard-code to crystal growth
                retVal = {
                    moduleState: {
                        selectedArea: { index: 1 },
                        selectedTopic: { index: 1 },
                        selectedVariable: { index: 1 },
                        selectedRQ: { index: 1 }
                    }
                };
            }
            // console.log(retVal);
            return retVal;
        })
        .catch((err) => {
            console.error(err);
            return retVal;
        });
    }

    getCurrHypoTask() {
        return this.getIntValue("currHypoTaskIdx")
    }

    getIntialHypoData() {
        let data = {};
        return this.getTextValue("firstPrediction")
            .then((pred1) => {
                // console.log(`getInitialHypoData():firstPrediction ${pred1}`);
                if (null !== pred1) {
                    data.firstPrediction = pred1;
                    return this.getJSONValue("initialHypo");
                } else {
                    data.firstPrediction = null;
                    return null;
                }
            })
            .then((initHypo) => {
                // console.log(`getInitialHypoData():initHypo ${initHypo}`);
                data.initialHypo = initHypo;
                return data;
            })
            .catch((err) => {
                console.error(err);
                return data;
            });
    }

    getFinalHypoData() {
        let data = {};
        return this.getTextValue("secondPrediction")
            .then((pred2) => {
                // console.log(`getFinalHypoData():secondPrediction ${pred2}`)
                if (null !== pred2) {
                    data.secondPrediction = pred2;
                    return this.getJSONValue("finalHypo");
                } else {
                    data.secondPrediction = null;
                    return null
                }
            })
            .then((finalHypo) => {
                // console.log(`getFinalHypoData():finalHypo ${finalHypo}`);
                data.finalHypo = finalHypo;
                return data;
            })
            .catch((err) => {
                console.error(err);
                return data;
            });
    }

    setValues(object, overwrite=false) {
        // overwrite param is ignored, as it is specific to firestore
        return new Promise((resolve, reject) => {
            try {
                for (let [key, value] of Object.items(object)) {
                    localStorage.setItem(key, value);
                }
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }

    saveValue(varName, value) {
        return new Promise((resolve, reject) => {
            try {
                resolve(localStorage.setItem(varName, value));
            } catch(err) {
                reject(err);
            }
        })
    }

    saveJSONValue(varName, object) {
        return new Promise((resolve, reject) => {
            try {
                let value = JSON.stringify(object);
                resolve(localStorage.setItem(varName, value));
            } catch(err) {
                reject(err);
            }
        });
    }

    getBoolValue(varName) {
        return new Promise((resolve, reject) => {
            try {
                let value = localStorage.getItem(varName);
                if (undefined === value) {
                    resolve(value);
                }
                if ("true" === value) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch(err) {
                reject(err);
            }
        });
    }

    getIntValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {
               let value = localStorage.getItem(varName);
                if (value) {
                    retVal = parseInt(value, 10);
                }
                resolve(retVal);
            } catch(err) {
                reject(err);
            }
        });
    }

    getFloatValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {
                let value = localStorage.getItem(varName);
                if (value) {
                    retVal = parseFloat(value);
                }
                resolve(retVal);
            } catch(err) {
                reject(err);
            }
        });
    }

    getTextValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {
                let value = localStorage.getItem(varName);
                if (value) {
                    retVal = value;
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    };

    getJSONValue(varName) {
        return new Promise((resolve, reject) => {
            try {
                let value = localStorage.getItem(varName);
                if (value) {
                    value = JSON.parse(value);
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    }
};

// let db = new Database("BOGUS_CLASS", "BOGUS_STUDENT");



/***/ }),

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
        this.signOutBtn = document.getElementById("sign_out_button");
        this.signInText = document.getElementById("sign_in_text");
        this.goHome      = this.goHome.bind(this);
        this.signOutUser = this.signOutUser.bind(this);
        this.homeBtn.addEventListener('click', this.goHome);
        this.signOutBtn.addEventListener("click", this.signOutUser);
    }

    goHome(e) {
        let homePage = this.calcHomePage();
        this.redirectTo(homePage);
    }

    calcHomePage() {
        let homePage = localStorage.getItem("homepage");
        if (null === homePage) {
            homePage = window.location.origin + "/";
        }
        return homePage;
    }

    redirectTo(url) {
        // prevent refresh if already on this page
        if (window.location.href !== url) {
            window.location.href = url;
        }
    }

    signOutUser(e) {
        this.signInText.innerHTML = "";
        this.signInText.classList.add("invisible");
        this.signOutBtn.classList.add("invisible");
        let homePage = this.calcHomePage();
        // this does the actual signing out
        localStorage.clear();
        this.redirectTo(homePage);
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

/***/ "../../common/scene-app-base/app.js":
/*!*************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-app-base/app.js ***!
  \*************************************************************************************/
/*! exports provided: SceneBasedApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneBasedApp", function() { return SceneBasedApp; });
/* harmony import */ var _isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/isp-database */ "../../common/isp-database/index.js");
/* harmony import */ var _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/snackbar */ "../../common/snackbar/index.js");



class SceneBasedApp {
    constructor(appData, activityConfig, defaultInitialState) {
        this.sceneData = appData.scenes;
        this.activityConfig = activityConfig;
        this.db = Object(_isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_0__["getDBConnection"])(activityConfig.database);
        this.db.setCredentials(activityConfig.classCode, activityConfig.userID);
        this.activityKey = activityConfig.activityKey;
        this.defaultState = defaultInitialState;

        this.snackbar = new _isptutorproject_snackbar__WEBPACK_IMPORTED_MODULE_1__["SnackBar"]();
        this.homePageBtn = null;
        let homePageBtn  = document.getElementById("go_home_btn");
        this.nextBtn = document.getElementById("next_btn");
        this.prevBtn = document.getElementById("prev_btn");
        this.sceneIdRegion = document.getElementById("scene_id_region");
        if (homePageBtn) {
            this.homePageBtn = homePageBtn;
        }
        this.handleGoHomePage = this.handleGoHomePage.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        if (this.homePageBtn) {
            this.homePageBtn.addEventListener("click", this.handleGoHomePage);
        }
        this.handleResize = this.handleResize.bind(this);

        this.nextBtn.addEventListener("click", this.handleNext);
        this.prevBtn.addEventListener("click", this.handlePrev);

        this.state = {};
        this.scenes = {};
        this.startScene = "start";
        this.currentScene = null;
        this.prevScene = null;
        // is this needed???
        this.bogusSceneInfo = {
            id: "N/A",
            sceneType: "bogus"
        };
        window.app = this;
        window.addEventListener("resize", this.handleResize);
    }


    handleResize(event) {
        // console.log(event);
        this.resizeContent();
    }

    resizeContent() {
        let sEl, cEl, sWidth, sHeight, cWidth, cHeight, sc;
        sEl = document.querySelector(".scene.active");
        if (sEl) {
            cEl = sEl.querySelector(".scene-content");
        }
        if (cEl) {
            sWidth  = sEl.offsetWidth;
            sHeight = sEl.offsetHeight;
            cWidth  = cEl.offsetWidth;
            cHeight = cEl.offsetHeight;
            sc = Math.min(
                sWidth / cWidth,
                sHeight / cHeight
            );
            cEl.style.transform = `translate(-50%, -50%) scale(${sc})`;
        }
    }

    // setSnackbar(snackbar) {
    //     this.snackbar = snackbar;
    // }

    showFeedback(feedback) {
        this.snackbar.show(feedback);
    }

    handleGoHomePage(event) {
        event.preventDefault();
        // incase we're in an iframe
        top.location.href = this.activityConfig.homepage;
    }

    handlePrev(event) {
        event.preventDefault();
        this.currentScene.handlePrevButton();
        this.saveAppState();
    }

    handleNext(event) {
        event.preventDefault();
        this.currentScene.handleNextButton();
        this.saveAppState();
    }

    setStartScene(sceneId) {
        console.debug("setStartScene()", sceneId);
        this.startScene = sceneId;
    }

    start() {
        console.log("starting");
        this.getAppState()
            .then((state) => {
                if (null === state) {
                    console.log("no activity data in db. using initial data")
                    state = this.defaultState;
                }
                this.state = state;
                return;
            })
            .then(() => {
                console.log("Initializing Scenes");
                for (let section of document.querySelectorAll("section.scene")) {
                    let sceneId = section.id;
                    // console.log(`creating scene for ${sceneId}`);
                    let sceneObj = this.createScene(this.sceneData[sceneId]);
                    // console.log(sceneObj);
                    this.scenes[sceneId] = sceneObj;
                }
                return;
            })
            .then(() => {
                console.log(this.state);
                console.log(this.state.sceneState);
                console.log("Restoring App State")
                for (let section of document.querySelectorAll("section.scene")) {
                    let sceneId = section.id;
                    let sceneState = this.state.sceneState[sceneId];
                    this.scenes[sceneId].restoreState(sceneState);
                }
                if (this.state.currentScene) {
                    console.log("Restoring Current Scene");
                    this.currentScene = this.lookupScene(this.state.currentScene);
                }
                return;
            })
            .then(() => {
                // console.debug(this.sceneData);
                // console.log(this.scenes);
            })
            .then(() => {
                this.gotoStartScene();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getAppState() {
        console.debug("Loading App State");
        return this.db.getActivityData(this.activityKey);
    }

    saveAppState() {
        console.debug("Saving App State");
        return this.db.setActivityData(this.activityKey, this.state);
    }

    createScene(sceneInfo) {
        // you'll want to override this to do anything useful
        // console.debug("createScene()", sceneInfo, sceneState);
        return new Scene(this, sceneInfo);
    }

    switchToScene(scene) {
        this.logSceneChange(scene);
        this.gotoScene(scene);
    }

    gotoScene(scene) {
        this.prevScene = this.currentScene;
        if (this.prevScene) {
            this.prevScene.pre_exit();
            this.prevScene.exit();
            this.prevScene.post_exit();
        }
        this.currentScene = scene;
        this.currentScene.pre_enter();
        this.currentScene.enter();
        this.currentScene.post_enter();
        // delete this.prevScene;
        this.displaySceneId();
    }

    displaySceneId() {
        if (true) {
            this.sceneIdRegion.innerHTML = this.currentScene.id;
        }
    }

    lookupScene(sceneId) {
        let scene = this.scenes[sceneId];
        if (!scene) {
            console.error(`ERROR: no such scene ${sceneId}`);
        }
        return scene;
    }

    followEdge(edgeName) {
        let newSceneId = this.currentScene.edges[edgeName];
        let newScene = this.lookupScene(newSceneId);
        this.switchToScene(newScene);
    }

    logSceneChange(scene) {
        this.state.events.push({
            type: "SCENE_TRANSITION",
            from: this.currentScene.id,
            to: scene.id,
            timestamp: Date.now()
        });
        // console.debug("Updating state.events");
    }


    gotoStartScene() {
        // bypasses switchToScene() and thus logSceneChange()
        // this.currentScene = null;
        let startScene = this.currentScene;
        if (!startScene) {
            startScene = this.lookupScene(this.startScene);
        }
        this.state.events.push({
            type: "APP_START",
            scene:  startScene.id,
            timestamp: Date.now()
        });
        // console.debug("Updating state.events");
        this.gotoScene(startScene);
    }


    hide(el) {
        if (el) { el.classList.add("hidden"); }
    }

    show(el) {
        if (el) { el.classList.remove("hidden"); }
    }

    makeInvisible(el) {
        if (el) {
            el.classList.add("invisible");
        }
    }

    makeVisible(el) {
        if (el) {
            el.classList.remove("invisible");
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

/***/ "../../common/scene-app-base/index.js":
/*!***************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-app-base/index.js ***!
  \***************************************************************************************/
/*! exports provided: SceneBasedApp, Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../common/scene-app-base/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SceneBasedApp", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["SceneBasedApp"]; });

/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ "../../common/scene-app-base/scene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_1__["Scene"]; });







/***/ }),

/***/ "../../common/scene-app-base/radio-button-form.js":
/*!***************************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-app-base/radio-button-form.js ***!
  \***************************************************************************************************/
/*! exports provided: RadioButtonForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonForm", function() { return RadioButtonForm; });
class RadioButtonForm {
    constructor(app, formInfo, eleId) {
        this.handleChange = this.handleChange.bind(this);
        this.app = app;
        this.formInfo = formInfo;
        this.form = document.getElementById(eleId);
        this.radios = this.form.querySelectorAll('input[type="radio"]');
        this.changed = false;
    }

    isValid() {
        const validity = this.form.checkValidity();
        // console.log("form is valid:", validity);
        return validity;
    }

    handleChange(e) {
        // set form to dirty state so it will get saved later on
        this.changed = true;
        if (this.isValid()) {
            this.app.enable(this.app.nextBtn);
        }
    }

    setupEventHandlers() {
        for (let rb of this.radios) {
            rb.addEventListener('change', this.handleChange);
        }
    }

    teardownEventHandlers() {
        for (let rb of this.radios) {
            rb.removeEventListener('change', this.handleChange);
        }
    }


    getCorrectness() {
        let sfi = this.formInfo;
        let selectedAnswer = this.form.querySelector(
            'input[type="radio"]:checked'
        )
        let val = selectedAnswer.value.trim();
        // let ansText = selectedAnswer.labels[0].innerText;
        let correctAnswer = sfi.correctAnswer;
        let isCorrect;

        if ("N/A" === correctAnswer) {
            isCorrect = null;
        } else if (correctAnswer === val) {
            isCorrect = true;
        } else {
            isCorrect = false;
        }
        return isCorrect;
    }

    getFeedback() {
        let isCorrect = this.getCorrectness();
        let sfi = this.formInfo;
        // console.log(isCorrect, sfi);
        let fbText, fbClassName, fbMsg;
        switch(isCorrect) {
            case true:
                fbText = sfi.posFb;
                fbClassName = "pos-feedback";
                break;
            case false:
                fbText = sfi.negFb;
                fbClassName = "neg-feedback";
                break;
            default:
                fbText = sfi.ntlFb;
                fbClassName = "ntl-feedback";
        }
        if (typeof(fbText) === "undefined") {
            if (typeof(sfi.ntlFb) !== "undefined") {
                fbText = sfi.ntlFb;
            }
        }
        if (typeof (fbText) !== "undefined") {
            fbMsg = `<span class="${fbClassName}">${fbText}</span>`;
        }
        return fbMsg;
    }

    getData() {
        let sfi = this.formInfo;
        let isCorrect = this.getCorrectness();
        let selectedAnswer = this.form.querySelector(
            'input[type="radio"]:checked'
        );
        let val = selectedAnswer.value.trim();
        let lbl = selectedAnswer.labels[0].innerText;
        let formData = {
            questionType: sfi.type,
            questionText: sfi.text,
            selectedEleId: selectedAnswer.id,
            selectedValue: val,
            selectedLabel: lbl,
            isCorrect: isCorrect,
            timestamp: Date.now()
        }
        // set form to non-dirty state, so we don't resubmit unless they
        // change again
        this.changed = false;
        return formData;
    }

}

/***/ }),

/***/ "../../common/scene-app-base/scene.js":
/*!***************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-app-base/scene.js ***!
  \***************************************************************************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
class Scene {
    constructor(app, sceneInfo) {
        console.debug(`\tInitializing Scene: ${sceneInfo.id}`);
        this.app = app;
        // copy all sceneInfo to 'this'
        for (let [k, v] of Object.entries(sceneInfo)) {
            this[k] = v;
        }
        this.el = document.getElementById(this.id);
        // bind event handler
        this.handleFollowEdgeButton = this.handleFollowEdgeButton.bind(this);
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


    handleFollowEdgeButton(e) {
        e.preventDefault();
        let edgeName = e.target.dataset.edge;
        this.app.followEdge(edgeName);
    }

    getFollowEdgeElements() {
        return this.el.getElementsByClassName("follow-edge");
    }

    setupFollowEdgeEventHandlers() {
        for (let el of this.getFollowEdgeElements()) {
            el.addEventListener(
                "click", this.handleFollowEdgeButton, { once: true }
            );
        }
    }

    restoreState(value) {
        if (typeof (value) !== "undefined") {
            console.debug(`\tRestoring Scene State for: ${this.id} `);
            return true;
        }
        return false;
    }

    _isBogus() {
        return this.id === "N/A" || this.sceneType === "bogus";
    }

    handlePrevButton() {
        this.app.followEdge("prev");
    }

    handleNextButton() {
        this.app.followEdge("next");
    }

    hasForm() {
        return false;
    }

    formChanged() {
        return false;
    }

    pre_enter() {

    }

    enter() {
        if (this._isBogus()) {
            return;
        }
        console.debug(`Entering Scene: ${this.id}`);
        console.debug("\tUpdating state.currentScene");
        this.app.state.currentScene = this.id;
        this.defaultEnterSceneActions();
        if (this.customEnterActions.length) {
            this.performCustomEnterSceneActions();
        }
    }

    post_enter() {

    }

    pre_exit() {

    }

    exit() {
        if (this._isBogus()) {
            return;
        }
        console.debug(`Exiting Scene: ${this.id}`);
        this.defaultExitSceneActions();
        if (this.customExitActions.length) {
            this.performCustomExitSceneActions();
        }
    }

    post_exit() {

    }

    defaultEnterSceneActions() {
        this.el.classList.add("active");
        this.app.resizeContent();
        this.setupFollowEdgeEventHandlers();
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
        if (typeof(text) !== "undefined" && null !== text) {
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
}


/***/ }),

/***/ "./data/diInstr.json":
/*!***************************!*\
  !*** ./data/diInstr.json ***!
  \***************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"edges\":{\"next\":\"intro1\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro1\":{\"edges\":{\"prev\":\"start\",\"next\":\"intro2\"},\"id\":\"intro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro2\":{\"edges\":{\"prev\":\"intro1\",\"next\":\"intro3\"},\"id\":\"intro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro3\":{\"edges\":{\"prev\":\"intro2\",\"next\":\"intro4\"},\"id\":\"intro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro4\":{\"edges\":{\"prev\":\"intro3\",\"next\":\"intro5\"},\"id\":\"intro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro5\":{\"edges\":{\"prev\":\"intro4\",\"next\":\"intro6\"},\"id\":\"intro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro6\":{\"edges\":{\"prev\":\"intro5\",\"next\":\"intro7\"},\"id\":\"intro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro7\":{\"edges\":{\"prev\":\"intro6\",\"next\":\"intro8\"},\"id\":\"intro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro8\":{\"edges\":{\"prev\":\"intro7\",\"next\":\"intro9\"},\"id\":\"intro8\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro9\":{\"edges\":{\"prev\":\"intro8\",\"next\":\"intro10\"},\"id\":\"intro9\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro10\":{\"edges\":{\"prev\":\"intro9\",\"next\":\"intro11\"},\"id\":\"intro10\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro11\":{\"edges\":{\"prev\":\"intro10\",\"next\":\"intro12\"},\"id\":\"intro11\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro12\":{\"edges\":{\"prev\":\"intro11\",\"next\":\"intro13\"},\"id\":\"intro12\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro13\":{\"edges\":{\"prev\":\"intro12\",\"next\":\"intro14\"},\"id\":\"intro13\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro14\":{\"edges\":{\"prev\":\"intro13\",\"next\":\"intro15\"},\"id\":\"intro14\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro15\":{\"edges\":{\"prev\":\"intro14\",\"next\":\"intro16\"},\"id\":\"intro15\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"intro16\":{\"edges\":{\"prev\":\"intro15\",\"next\":\"scene1\"},\"id\":\"intro16\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene1\":{\"edges\":{\"prev\":\"intro16\",\"next\":\"scene2\"},\"id\":\"scene1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene2\":{\"edges\":{\"prev\":\"scene1\",\"next\":\"scene3\"},\"id\":\"scene2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene3\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene2\",\"next\":\"scene4\"},\"question\":{\"type\":\"mc\",\"text\":\"Salt crystals grew...\",\"correctAnswer\":\"a\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"more in hot water\"},{\"value\":\"b\",\"label\":\"more in cold water\"},{\"value\":\"c\",\"label\":\"equally well in hot and cold water\"}]},\"id\":\"scene3\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene4\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene3\",\"next\":\"scene5\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that the independent variable (water temperature) caused this difference in crystal weight across conditions?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene4\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene5\":{\"edges\":{\"prev\":\"scene4\",\"next\":\"scene6\"},\"id\":\"scene5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene6\":{\"edges\":{\"prev\":\"scene5\",\"next\":\"scene7\"},\"id\":\"scene6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene7\":{\"edges\":{\"prev\":\"scene6\",\"next\":\"scene8\"},\"id\":\"scene7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene8\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene7\",\"next\":\"scene9\"},\"question\":{\"type\":\"mc\",\"text\":\"Do you see any results that look strange to you?\",\"correctAnswer\":\"a\",\"ntlFb\":\"Thanks\",\"options\":[{\"value\":\"a\",\"label\":\"Yes\"},{\"value\":\"b\",\"label\":\"No\"},{\"value\":\"c\",\"label\":\"I don't know\"}]},\"id\":\"scene8\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene9\":{\"edges\":{\"prev\":\"scene8\",\"next\":\"scene10\"},\"id\":\"scene9\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene10\":{\"edges\":{\"prev\":\"scene9\",\"next\":\"scene11\"},\"id\":\"scene10\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene11\":{\"edges\":{\"prev\":\"scene10\",\"next\":\"scene26\",\"mean\":\"scene12\",\"median\":\"scene14\",\"mode\":\"scene23\",\"range\":\"scene24\"},\"id\":\"scene11\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene12\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene11\",\"next\":\"scene13\",\"more\":\"scene13\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene12\",\"customExitActions\":[]},\"scene13\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene12\",\"next\":\"scene14\",\"back\":\"scene12\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene13\",\"customExitActions\":[]},\"scene14\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene13\",\"backToQuestion\":\"scene11\",\"more\":\"scene15\",\"next\":\"scene15\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene14\",\"customExitActions\":[]},\"scene15\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene14\",\"next\":\"scene16\",\"back\":\"scene14\",\"more\":\"scene16\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row1.col2\",\".row15.col2\"],\"color\":\"blue\"}}],\"id\":\"scene15\",\"customExitActions\":[]},\"scene16\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene15\",\"next\":\"scene17\",\"back\":\"scene15\",\"more\":\"scene17\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row2.col2\",\".row14.col2\"],\"color\":\"blue\"}}],\"id\":\"scene16\",\"customExitActions\":[]},\"scene17\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene16\",\"next\":\"scene18\",\"back\":\"scene16\",\"more\":\"scene18\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row3.col2\",\".row13.col2\"],\"color\":\"blue\"}}],\"id\":\"scene17\",\"customExitActions\":[]},\"scene18\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene17\",\"next\":\"scene19\",\"back\":\"scene17\",\"more\":\"scene19\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row4.col2\",\".row12.col2\"],\"color\":\"blue\"}}],\"id\":\"scene18\",\"customExitActions\":[]},\"scene19\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene18\",\"next\":\"scene20\",\"back\":\"scene18\",\"more\":\"scene20\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row5.col2\",\".row11.col2\"],\"color\":\"blue\"}}],\"id\":\"scene19\",\"customExitActions\":[]},\"scene20\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene19\",\"next\":\"scene21\",\"back\":\"scene19\",\"more\":\"scene21\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row6.col2\",\".row10.col2\"],\"color\":\"blue\"}}],\"id\":\"scene20\",\"customExitActions\":[]},\"scene21\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene20\",\"next\":\"scene22\",\"back\":\"scene20\",\"more\":\"scene22\",\"backToQuestion\":\"scene11\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row7.col2\",\".row9.col2\"],\"color\":\"blue\"}}],\"id\":\"scene21\",\"customExitActions\":[]},\"scene22\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene21\",\"next\":\"scene23\",\"back\":\"scene21\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]},{\"name\":\"hiliteTableCells\",\"args\":{\"table\":\"dogs_table\",\"cellSelectors\":[\".row8.col2\"],\"color\":\"green\"}}],\"id\":\"scene22\",\"customExitActions\":[]},\"scene23\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene22\",\"next\":\"scene24\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene23\",\"customExitActions\":[]},\"scene24\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene23\",\"next\":\"scene25\",\"backToQuestion\":\"scene11\",\"more\":\"scene25\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\"]}],\"id\":\"scene24\",\"customExitActions\":[]},\"scene25\":{\"sceneType\":\"stats\",\"edges\":{\"prev\":\"scene24\",\"next\":\"scene26\",\"back\":\"scene24\",\"backToQuestion\":\"scene11\",\"readyToAnswer\":\"scene26\"},\"customEnterActions\":[{\"name\":\"showBtns\",\"args\":[\"backToQuestion\",\"readyToAnswer\"]}],\"id\":\"scene25\",\"customExitActions\":[]},\"scene26\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene25\",\"next\":\"scene27\"},\"question\":{\"type\":\"mc\",\"text\":\"What do you think is the best way to summarize the data in each condition?\",\"correctAnswer\":\"c\",\"posFb\":\"You're right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Minimum (The Smallest number)\"},{\"value\":\"b\",\"label\":\"Maximum (The Biggest number)\"},{\"value\":\"c\",\"label\":\"Mean (or average)\"},{\"value\":\"d\",\"label\":\"Median (The Middle number)\"},{\"value\":\"e\",\"label\":\"Mode (The Most common number)\"},{\"value\":\"f\",\"label\":\"Range\"}]},\"id\":\"scene26\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene27\":{\"edges\":{\"prev\":\"scene26\",\"next\":\"scene27a\"},\"id\":\"scene27\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene27a\":{\"edges\":{\"prev\":\"scene27\",\"next\":\"scene28\"},\"id\":\"scene27a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene28\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene27a\",\"next\":\"scene29\"},\"question\":{\"type\":\"mc\",\"text\":\"Which calculation will give you the mean:\",\"correctAnswer\":\"b\",\"posFb\":\"You're right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"(20 + 27 + 30 + 32 + 41)\"},{\"value\":\"b\",\"label\":\"(20 + 27 + 30 + 32 + 41) / 5\"},{\"value\":\"c\",\"label\":\"(41 - 20) / 2\"},{\"value\":\"d\",\"label\":\"(41 + 20) / 2\"}]},\"id\":\"scene28\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene29\":{\"edges\":{\"prev\":\"scene28\",\"next\":\"scene30\"},\"id\":\"scene29\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene30\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene29\",\"next\":\"scene31\"},\"question\":{\"type\":\"mc\",\"text\":\"Now, what is the mean weight for the Cold water condition?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"(3 + 8 +12 + 16 + 21)\"},{\"value\":\"b\",\"label\":\"(3 + 8 + 12 + 16 + 21) / 5\"},{\"value\":\"c\",\"label\":\"( 21 + 3 ) / 2\"},{\"value\":\"d\",\"label\":\"( 21 - 3 ) / 3\"}]},\"id\":\"scene30\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene31\":{\"edges\":{\"prev\":\"scene30\",\"next\":\"scene32\"},\"id\":\"scene31\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene32\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene31\",\"next\":\"scene32a\"},\"question\":{\"type\":\"mc\",\"text\":\"Comparing the means across conditions, what to these results suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene32\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene32a\":{\"edges\":{\"prev\":\"scene32\",\"next\":\"scene33\"},\"id\":\"scene32a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene33\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene32a\",\"next\":\"scene34\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that the independent variable (water temperature) -- rather than random errors -- caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene33\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene34\":{\"edges\":{\"prev\":\"scene33\",\"next\":\"scene35\"},\"id\":\"scene34\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene35\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene34\",\"next\":\"scene35a\"},\"question\":{\"type\":\"mc\",\"text\":\"What does comparing the means of Hot#1 condition to the Cold#2 condition suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene35\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene35a\":{\"edges\":{\"prev\":\"scene35\",\"next\":\"scene36\"},\"id\":\"scene35a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene36\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene35\",\"next\":\"scene37\"},\"question\":{\"type\":\"survey\",\"text\":\"Now, how sure are you that the independent variable (water temperature) --rather than random errors--caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene36\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene37\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene36\",\"next\":\"scene38\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the hot condition results, which cold condition results are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"a\",\"posFb\":\"That's right!\",\"negFb\":\"Well, let's think about this...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1\"},{\"value\":\"b\",\"label\":\"Cold#2\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene37\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene38\":{\"edges\":{\"prev\":\"scene37\",\"next\":\"scene39\"},\"id\":\"scene38\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene39\":{\"edges\":{\"prev\":\"scene38\",\"next\":\"scene40\"},\"id\":\"scene39\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene40\":{\"edges\":{\"prev\":\"scene39\",\"next\":\"scene41\"},\"id\":\"scene40\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene41\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene40\",\"next\":\"scene42\"},\"question\":{\"type\":\"mc\",\"text\":\"What do the results from the Hot water and Cold#3 conditions suggest?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene41\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene42\":{\"edges\":{\"prev\":\"scene41\",\"next\":\"scene43\"},\"id\":\"scene42\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene43\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene42\",\"next\":\"scene44\"},\"question\":{\"type\":\"survey\",\"text\":\"Now, how sure are you that water temperature -- rather than experimenter or random errors -- caused this difference?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene43\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene44\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene43\",\"next\":\"scene45\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the hot condition results, which cold condition results (Cold#1 or Cold #3) are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"c\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1\"},{\"value\":\"b\",\"label\":\"Cold#3\"},{\"value\":\"c\",\"label\":\"They are the same\"}]},\"id\":\"scene44\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene45\":{\"edges\":{\"prev\":\"scene44\",\"next\":\"scene46\"},\"id\":\"scene45\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene46\":{\"edges\":{\"prev\":\"scene45\",\"next\":\"scene47\"},\"id\":\"scene46\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene47\":{\"edges\":{\"prev\":\"scene46\",\"next\":\"scene48\"},\"id\":\"scene47\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene48\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene47\",\"next\":\"scene49\"},\"question\":{\"type\":\"mc\",\"text\":\"Compared to the Hot water results, rank the Cold water results from <u>strongest</u> to <u>weakest</u> for how strongly they support the specific prediction:<br/><b>\\\"Crystals grow more in hot water than cold water.\\\"</b>\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Cold#1 is strongest, then Cold#2, and Cold#3 is weakest.\"},{\"value\":\"b\",\"label\":\"Cold#1 and Cold#3 are strongest, and Cold#2 is weakest.\"},{\"value\":\"c\",\"label\":\"Cold#3 is strongest, then Cold#2, and Cold#1 is weakest.\"}]},\"id\":\"scene48\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene49\":{\"edges\":{\"prev\":\"scene48\",\"next\":\"scene50\"},\"id\":\"scene49\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene50\":{\"edges\":{\"prev\":\"scene49\",\"next\":\"scene50a\"},\"id\":\"scene50\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene50a\":{\"edges\":{\"prev\":\"scene50\",\"next\":\"scene51\"},\"id\":\"scene50a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene51\":{\"edges\":{\"prev\":\"scene50a\",\"next\":\"scene51a\"},\"id\":\"scene51\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene51a\":{\"edges\":{\"prev\":\"scene51\",\"next\":\"scene52\"},\"id\":\"scene51a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene52\":{\"edges\":{\"prev\":\"scene51\",\"next\":\"scene53\"},\"id\":\"scene52\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene53\":{\"edges\":{\"prev\":\"scene52\",\"next\":\"scene54\"},\"id\":\"scene53\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene54\":{\"edges\":{\"prev\":\"scene53\",\"next\":\"scene55\"},\"id\":\"scene54\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene55\":{\"edges\":{\"prev\":\"scene54\",\"next\":\"scene56\"},\"id\":\"scene55\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene56\":{\"edges\":{\"prev\":\"scene55\",\"next\":\"scene57\"},\"id\":\"scene56\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene57\":{\"edges\":{\"prev\":\"scene56\",\"next\":\"scene58\"},\"id\":\"scene57\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene58\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene57\",\"next\":\"scene58a\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these results suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"That’s right!\",\"negFb\":\"Well, actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water.\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water.\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene58\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene58a\":{\"edges\":{\"prev\":\"scene58\",\"next\":\"scene59\"},\"id\":\"scene58a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene59\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene58\",\"next\":\"scene60\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that water temperature caused this difference in means?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene59\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene60\":{\"edges\":{\"prev\":\"scene59\",\"next\":\"scene61\"},\"id\":\"scene60\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene61\":{\"edges\":{\"prev\":\"scene60\",\"next\":\"scene62\"},\"id\":\"scene61\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene62\":{\"edges\":{\"prev\":\"scene61\",\"next\":\"scene63\"},\"id\":\"scene62\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene63\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene62\",\"next\":\"scene63a\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these results suggest?\",\"correctAnswer\":\"a\",\"posFb\":\"That’s right!\",\"negFb\":\"Well, actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grew more in hot water.\"},{\"value\":\"b\",\"label\":\"Salt crystals grew more in cold water.\"},{\"value\":\"c\",\"label\":\"Salt crystals grew equally well in hot and cold water.\"}]},\"id\":\"scene63\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene63a\":{\"edges\":{\"prev\":\"scene63\",\"next\":\"scene64\"},\"id\":\"scene63a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene64\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene63a\",\"next\":\"scene65\"},\"question\":{\"type\":\"survey\",\"text\":\"How sure are you that water temperature caused this difference in means?\",\"correctAnswer\":\"N/A\",\"ntlFb\":\"Thanks!\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Pretty sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"I am Absolutely sure\"}]},\"id\":\"scene64\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene65\":{\"edges\":{\"prev\":\"scene64\",\"next\":\"scene66\"},\"id\":\"scene65\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene66\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene65\",\"next\":\"scene67\"},\"question\":{\"type\":\"mc\",\"text\":\"Which results (weight of crystals) are LESS spread out? (HINT: look at the range of salt weights on the x-axis.)\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene66\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene67\":{\"edges\":{\"prev\":\"scene66\",\"next\":\"scene68\"},\"id\":\"scene67\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene68\":{\"edges\":{\"prev\":\"scene67\",\"next\":\"scene69\"},\"id\":\"scene68\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene69\":{\"edges\":{\"prev\":\"scene68\",\"next\":\"scene70\"},\"id\":\"scene69\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene70\":{\"edges\":{\"prev\":\"scene69\",\"next\":\"scene71\"},\"id\":\"scene70\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene71\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene70\",\"next\":\"scene72\"},\"question\":{\"type\":\"mc\",\"text\":\"Which results (weight of crystals) are LESS spread out?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene71\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene72\":{\"edges\":{\"prev\":\"scene71\",\"next\":\"scene73\"},\"id\":\"scene72\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene73\":{\"edges\":{\"prev\":\"scene72\",\"next\":\"scene74\"},\"id\":\"scene73\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene74\":{\"edges\":{\"prev\":\"scene73\",\"next\":\"scene75\"},\"id\":\"scene74\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene75\":{\"edges\":{\"prev\":\"scene74\",\"next\":\"scene76\"},\"id\":\"scene75\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene76\":{\"edges\":{\"prev\":\"scene75\",\"next\":\"scene77\"},\"id\":\"scene76\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene77\":{\"edges\":{\"prev\":\"scene76\",\"next\":\"scene78\"},\"id\":\"scene77\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene78\":{\"edges\":{\"prev\":\"scene77\",\"next\":\"scene79\"},\"id\":\"scene78\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene79\":{\"edges\":{\"prev\":\"scene78\",\"next\":\"scene80\"},\"id\":\"scene79\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene80\":{\"edges\":{\"prev\":\"scene79\",\"next\":\"scene81\"},\"id\":\"scene80\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene81\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene80\",\"next\":\"scene82\"},\"question\":{\"type\":\"mc\",\"text\":\"So, based on the amount of spread in the data, which results are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results A\"},{\"value\":\"b\",\"label\":\"Results B\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene81\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene82\":{\"edges\":{\"prev\":\"scene81\",\"next\":\"scene83\"},\"id\":\"scene82\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene83\":{\"edges\":{\"prev\":\"scene82\",\"next\":\"scene84\"},\"id\":\"scene83\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene84\":{\"edges\":{\"prev\":\"scene83\",\"next\":\"scene89\"},\"id\":\"scene84\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene89\":{\"edges\":{\"prev\":\"scene84\",\"next\":\"scene90\"},\"id\":\"scene89\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene90\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene89\",\"next\":\"scene91\"},\"question\":{\"type\":\"mc\",\"text\":\"Which data are LESS spread out?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results C\"},{\"value\":\"b\",\"label\":\"Results D\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene90\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene91\":{\"edges\":{\"prev\":\"scene90\",\"next\":\"scene92\"},\"id\":\"scene91\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene92\":{\"edges\":{\"prev\":\"scene91\",\"next\":\"scene93\"},\"id\":\"scene92\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene93\":{\"edges\":{\"prev\":\"scene92\",\"next\":\"scene94\"},\"id\":\"scene93\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene94\":{\"edges\":{\"prev\":\"scene93\",\"next\":\"scene95\"},\"id\":\"scene94\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene95\":{\"edges\":{\"prev\":\"scene94\",\"next\":\"scene96\"},\"id\":\"scene95\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene96\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene95\",\"next\":\"scene97\"},\"question\":{\"type\":\"mc\",\"text\":\"So, which Results (C or D) are stronger evidence that water temperature affects crystal growth?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results C\"},{\"value\":\"b\",\"label\":\"Results D\"},{\"value\":\"c\",\"label\":\"They are the same.\"}]},\"id\":\"scene96\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene97\":{\"edges\":{\"prev\":\"scene96\",\"next\":\"scene98\"},\"id\":\"scene97\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene98\":{\"edges\":{\"prev\":\"scene97\",\"next\":\"scene99\"},\"id\":\"scene98\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene99\":{\"edges\":{\"prev\":\"scene98\",\"next\":\"scene100\"},\"id\":\"scene99\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene100\":{\"edges\":{\"prev\":\"scene99\",\"next\":\"scene101\"},\"id\":\"scene100\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene101\":{\"edges\":{\"prev\":\"scene100\",\"next\":\"scene102\"},\"id\":\"scene101\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene102\":{\"edges\":{\"prev\":\"scene101\",\"next\":\"scene103\"},\"id\":\"scene102\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene103\":{\"edges\":{\"prev\":\"scene102\",\"next\":\"scene104\"},\"id\":\"scene103\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene104\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene103\",\"next\":\"scene104a\"},\"question\":{\"type\":\"mc\",\"text\":\"What do these two sets of results (Results E &amp; F) suggest?\",\"correctAnswer\":\"c\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Sugar crystals grow better than salt crystals.\"},{\"value\":\"b\",\"label\":\"Salt crystals grow better than sugar crystals.\"},{\"value\":\"c\",\"label\":\"I don’t know; They show opposite results.\"}]},\"id\":\"scene104\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene104a\":{\"edges\":{\"prev\":\"scene104\",\"next\":\"scene105\"},\"id\":\"scene104a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene105\":{\"edges\":{\"prev\":\"scene104a\",\"next\":\"scene106\"},\"id\":\"scene105\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene106\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene105\",\"next\":\"scene107\"},\"question\":{\"type\":\"mc\",\"text\":\"Now that you see their measurements, which of the two sets of results do you trust more?\",\"correctAnswer\":\"b\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Results E\"},{\"value\":\"b\",\"label\":\"Results F\"},{\"value\":\"c\",\"label\":\"They are equally good results.\"}]},\"id\":\"scene106\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene107\":{\"edges\":{\"prev\":\"scene106\",\"next\":\"scene108\"},\"id\":\"scene107\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene108\":{\"sceneType\":\"multipleChoiceForm\",\"edges\":{\"prev\":\"scene107\",\"next\":\"scene108a\"},\"question\":{\"type\":\"mc\",\"text\":\"Based on Results E &amp; F, which statement is more likely to be true?\",\"correctAnswer\":\"a\",\"posFb\":\"Right!\",\"negFb\":\"Actually...\",\"options\":[{\"value\":\"a\",\"label\":\"Salt crystals grow better on a string in water than sugar crystals.\"},{\"value\":\"b\",\"label\":\"Sugar crystals grow better on a string in water than salt crystals.\"},{\"value\":\"c\",\"label\":\"Again, it’s impossible to even guess.\"}]},\"id\":\"scene108\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene108a\":{\"edges\":{\"prev\":\"scene108\",\"next\":\"scene109\"},\"id\":\"scene108a\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene109\":{\"edges\":{\"prev\":\"scene108a\",\"next\":\"scene110\"},\"id\":\"scene109\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene110\":{\"edges\":{\"prev\":\"scene109\",\"next\":\"scene111\"},\"id\":\"scene110\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene111\":{\"edges\":{\"prev\":\"scene110\",\"next\":\"scene112\"},\"id\":\"scene111\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene112\":{\"edges\":{\"prev\":\"scene111\",\"next\":\"scene113\"},\"id\":\"scene112\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"scene113\":{\"edges\":{\"prev\":\"scene112\",\"next\":\"completed\"},\"id\":\"scene113\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"edges\":{\"prev\":\"scene113\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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
/* harmony import */ var _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/scene-app-base */ "../../common/scene-app-base/index.js");
/* harmony import */ var _di_instruction_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./di-instruction-scene */ "./src/di-instruction-scene.js");
/* harmony import */ var _di_stats_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./di-stats-scene */ "./src/di-stats-scene.js");
/* harmony import */ var _di_mult_choice_form_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./di-mult-choice-form-scene */ "./src/di-mult-choice-form-scene.js");






class DiInstructionApp extends _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__["SceneBasedApp"] {
    constructor(appData, activityConfig, defaultInitialState) {
        super(appData, activityConfig, defaultInitialState);
        // bind event handlers
        this.handleBackToQuestion = this.handleBackToQuestion.bind(this);
        this.handleReadyToAnswer = this.handleReadyToAnswer.bind(this);
        this.backToQuestionBtn = document.getElementById("back_to_question_btn");
        this.readyToAnswerBtn  = document.getElementById("ready_to_answer_btn");
        this.readyToAnswerBtn.addEventListener("click", this.handleReadyToAnswer);
        this.backToQuestionBtn.addEventListener("click", this.handleBackToQuestion);
    }

    handleReadyToAnswer(event) {
        event.preventDefault();
        this.followEdge("readyToAnswer");
    }

    handleBackToQuestion(event) {
        event.preventDefault();
        this.followEdge("backToQuestion");
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

}


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
/* harmony import */ var _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/scene-app-base */ "../../common/scene-app-base/index.js");


class DiInstructionScene extends _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
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
        // these button states may get overriden by scene-specific custom actions
        this.app.show(this.app.prevBtn);
        this.app.enable(this.app.prevBtn);
        this.app.show(this.app.nextBtn);
        this.app.enable(this.app.nextBtn);
        this.app.hide(this.app.readyToAnswerBtn);
        this.app.hide(this.app.backToQuestionBtn);
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
/* harmony import */ var _isptutorproject_scene_app_base_radio_button_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/scene-app-base/radio-button-form */ "../../common/scene-app-base/radio-button-form.js");




class DiMultipleChoiceFormScene extends _di_instruction_scene__WEBPACK_IMPORTED_MODULE_0__["DiInstructionScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.form = new _isptutorproject_scene_app_base_radio_button_form__WEBPACK_IMPORTED_MODULE_1__["RadioButtonForm"](
            app, sceneInfo.question, `${this.id}_radio_form`
        );
    }

    restoreState(value) {
        if (super.restoreState(value)) {
            let eleID = `${this.id}_option_${value}`;
            let el = document.getElementById(eleID);
            if (typeof(el) === "undefined") {
                console.error(`\t\tUnable to Select Radio Button ${eleID}`);
                return false;
             } else {
                el.checked = true;
                console.debug(`\t\tSelected Radio Button: ${eleID}`);
                return true;
            }
        }
        return false;
    }

    hasForm() {
        return true;
    }

    formChanged() {
        return this.form.changed;
    }

    handlePrevButton() {
        if (this.formChanged()) {
            this.saveFormData();
        }
        super.handlePrevButton();
    }

    handleNextButton() {
        if (this.formChanged()) {
            this.saveFormData();
        }
        super.handleNextButton();
    }

    saveFormData() {
        this.app.showFeedback(this.form.getFeedback());
        let data = this.form.getData();
        let logData = Object.assign(
            {
                action_type: "SUBMIT_ANSWER",
                questionId: `${this.app.activityKey}.${this.id}`
            },
            data
        );
        // console.log("Updating state.events");
        this.app.state.events.push(logData);
        // console.log("Updating state.sceneState");
        // console.log(this.app.state);
        this.app.state.sceneState[this.id] = data.selectedValue;
    }

    // pre_exit() {
    //     super.pre_exit();
    //     if (this.formChanged()) {
    //         this.saveFormData();
    //     }
    // }

    setupEventHandlers() {
        this.form.setupEventHandlers();
    }

    teardownEventHandlers() {
        this.form.teardownEventHandlers();
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        if (false) {}
        this.setupEventHandlers();
    }

    defaultExitSceneActions() {
        super.defaultExitSceneActions();
        this.teardownEventHandlers();
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
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
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
/* harmony import */ var _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/navbar */ "../../common/navbar/index.js");
/* harmony import */ var _isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @isptutorproject/activity-config */ "../../common/activity-config/index.js");
/* harmony import */ var _di_instruction_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./di-instruction-app */ "./src/di-instruction-app.js");






let activityConfig = Object(_isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_2__["getActivityConfiguration"])();
let activityData = __webpack_require__(/*! ../data/diInstr.json */ "./data/diInstr.json");

const DEFAULT_INITIAL_APP_STATE = {
    events: [],
    // mapping of sceneid => sceneType-specific data
    sceneState: {},
    currentScene: "start"
};

let navbar = new _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__["NavBar"]();
navbar.displayActivityTitle("Data Interpretation Lesson");
navbar.displayUser(activityConfig.userID);
let app = new _di_instruction_app__WEBPACK_IMPORTED_MODULE_3__["DiInstructionApp"](
    activityData, activityConfig, DEFAULT_INITIAL_APP_STATE
);
if (true) {
    app.setStartScene("scene28");
}
app.start();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzP2M5NWMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vbmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL3NjZW5lLWFwcC1iYXNlL2FwcC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9yYWRpby1idXR0b24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktaW5zdHJ1Y3Rpb24tYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaS1pbnN0cnVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktbXVsdC1jaG9pY2UtZm9ybS1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktc3RhdHMtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz83N2NmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFBO0FBQXNDO0FBQ047O0FBSzlCOzs7Ozs7Ozs7Ozs7O0FDTkY7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVksSUFBSSxPQUFPO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUM3R0E7QUFBQTtBQUFPO0FBQ1A7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRCxRQUFRO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7QUFFb0I7QUFDMkI7QUFDcEI7O0FBRXhELHFCQUFxQixpR0FBd0I7QUFDN0MsbUJBQW1CLG1CQUFPLENBQUMsaURBQXNCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxpQkFBaUIsOERBQU07QUFDdkI7QUFDQTtBQUNBLGNBQWMsb0VBQWdCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLElBQXNDO0FBQzFDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBLHVDIiwiZmlsZSI6ImRpLWluc3RyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICBsZXQgYWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgIHVzZXJJRDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIiksXG4gICAgICAgIGNsYXNzQ29kZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGFzc0NvZGVcIiksXG4gICAgICAgIGRhdGFiYXNlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFiYXNlXCIpLFxuICAgICAgICBob21lcGFnZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKSxcbiAgICAgICAgYWN0aXZpdHlLZXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5XCIpLFxuICAgICAgICBmZWF0dXJlczogKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5RmVhdHVyZXNcIikgfHwgXCJcIilcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjpcIilcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUNvbmZpZyk7XG4gICAgcmV0dXJuIGFjdGl2aXR5Q29uZmlnO1xufSIsIi8vIGFic3RyYWN0IGNsYXNzIC0gaW50ZXJmYWNlXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvZGUgPSBjbGFzc0NvZGU7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuXG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcblxuICAgIH1cblxuICAgIGdldFJRRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcblxuICAgIH1cblxuICAgIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcblxuICAgIH1cblxuICAgIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxufTtcblxuXG4iLCJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEN3pJay04VjIwUXFKTlNzMGNBVjB1TkwzcWplcUxNZE1cIixcbiAgICBhdXRoRG9tYWluOiBcImlzcHR1dG9yLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJpc3B0dXRvclwiXG59O1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIHRoaXMudXNlclJlZiA9IHRoaXMuc3RvcmUuY29sbGVjdGlvbih0aGlzLmNsYXNzQ29kZSkuZG9jKHRoaXMudXNlcklEKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgLy8gcmV0dXJucyBwcm9taXNlIHdpdGggJ2RvYycgaWYgaXQgZXhpc3RzLCBudWxsIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLmdldCgpXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYy5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG4gIFxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTj10cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJEYXRhKClcbiAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJEYXRhW2FjdGl2aXR5S2V5XTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRlY29kZUpTT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldFJRRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcInJxdGVkXCIpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gZ2V0SW5pdGlhbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiaW5pdGlhbEh5cG9cIilcbiAgICAvLyAgICAgLnRoZW4oKHN0ckRhdGEpKVxuICAgIC8vIH1cblxuICAgIC8vIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJmaW5hbEh5cG9cIilcbiAgICAvLyB9XG5cbiAgICBzZXRWYWx1ZXMob2JqZWN0LCBvdmVyd3JpdGU9ZmFsc2UpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB7bWVyZ2U6IHRydWV9IG9wdGlvbiBmb3Igc2FmZXR5XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYuc2V0KG9iamVjdCwge21lcmdlOiAhb3ZlcndyaXRlfSk7ICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlcyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi51cGRhdGUob2JqZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKHtcbiAgICAgICAgICAgIFt2YXJOYW1lXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuZGVsZXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldCh7XG4gICAgLy8gICAgICAgICBbdmFyTmFtZV06IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfSAgIFxuICAgIFxuICAgIC8vIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG59OyIsImltcG9ydCB7IExvY2FsU3RvcmFnZURCIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlREJcIjtcbmltcG9ydCB7IEZpcmVzdG9yZURCIH0gZnJvbSBcIi4vZmlyZXN0b3JlREJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERCQ29ubmVjdGlvbihkYlR5cGUpIHtcbiAgICBsZXQgZGI7XG4gICAgc3dpdGNoKGRiVHlwZSkge1xuICAgICAgICBjYXNlIFwiZmlyZXN0b3JlXCI6XG4gICAgICAgICAgICBkYiA9IG5ldyBGaXJlc3RvcmVEQigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkYiA9IG5ldyBMb2NhbFN0b3JhZ2VEQigpO1xuICAgIH1cbiAgICByZXR1cm4gZGI7IFxufVxuIiwiXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIE5PVEU6IHRoaXMgQVBJIG11c3QgdXNlIHByb21pc2VzIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBhbnkgZGJcbi8vIHdlIG1heSBiZSB1c2luZywgd2hpY2ggbWF5IGJlIGVpdGhlciBzeW5jIG9yIGFzeW5jXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwiY2xhc3NDb2RlXCIsIGNsYXNzQ29kZSksXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwidXNlcklEXCIsIHVzZXJJRCksXG4gICAgICAgIC8vIF0pLnRoZW4oKFtyZXN1bHQxLCByZXN1bHQyXSkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5jb3VudChcImdldFVzZXJEYXRhKCkgY2FsbGVkXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJjbGFzc0NvZGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldFRleHRWYWx1ZShcInVzZXJJRFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIiksXG4gICAgICAgICAgICB0aGlzLmdldEN1cnJIeXBvVGFzaygpLFxuICAgICAgICAgICAgdGhpcy5nZXRJbnRpYWxIeXBvRGF0YSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRGaW5hbEh5cG9EYXRhKClcbiAgICAgICAgXSkudGhlbigoW2NjUmVzLCB1aWRSZXMsIHJxUmVzLCBjaHRSZXMsIGloUmVzLCBmaFJlc10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NDb2RlID0gY2NSZXM7XG4gICAgICAgICAgICBkYXRhLnVzZXJJRCA9IHVpZFJlcztcbiAgICAgICAgICAgIGRhdGEucnF0ZWQgPSBycVJlcztcbiAgICAgICAgICAgIGlmIChjaHRSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJIeXBvVGFza0lkeCA9IGNodFJlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGloUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBpaFJlcy5maXJzdFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0aWFsSHlwbyA9IGloUmVzLmluaXRpYWxIeXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZoUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gZmhSZXMuc2Vjb25kUHJlZGljdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZoUmVzLmZpbmFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT04gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShhY3Rpdml0eUtleSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmICFkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZUpTT05WYWx1ZShhY3Rpdml0eUtleSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpdml0eURhdGEoXCJycXRlZFwiKVxuICAgICAgICAudGhlbigocnF0ZWQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJxdGVkKTtcbiAgICAgICAgICAgIGlmIChycXRlZCkge1xuICAgICAgICAgICAgICAgIHJldFZhbCA9IHJxdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcnEgaXNuJ3Qgc2VsZWN0ZWQgaGFyZC1jb2RlIHRvIGNyeXN0YWwgZ3Jvd3RoXG4gICAgICAgICAgICAgICAgcmV0VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVTdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcmVhOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhYmxlOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJROiB7IGluZGV4OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW50VmFsdWUoXCJjdXJySHlwb1Rhc2tJZHhcIilcbiAgICB9XG5cbiAgICBnZXRJbnRpYWxIeXBvRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dFZhbHVlKFwiZmlyc3RQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6Zmlyc3RQcmVkaWN0aW9uICR7cHJlZDF9YCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gcHJlZDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShcImluaXRpYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChpbml0SHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRJbml0aWFsSHlwb0RhdGEoKTppbml0SHlwbyAke2luaXRIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpbml0SHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcInNlY29uZFByZWRpY3Rpb25cIilcbiAgICAgICAgICAgIC50aGVuKChwcmVkMikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6c2Vjb25kUHJlZGljdGlvbiAke3ByZWQyfWApXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IHByZWQyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJmaW5hbEh5cG9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGZpbmFsSHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6ZmluYWxIeXBvICR7ZmluYWxIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuZmluYWxIeXBvID0gZmluYWxIeXBvO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIG92ZXJ3cml0ZSBwYXJhbSBpcyBpZ25vcmVkLCBhcyBpdCBpcyBzcGVjaWZpYyB0byBmaXJlc3RvcmVcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5pdGVtcyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YXJOYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXCJ0cnVlXCIgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8vIGxldCBkYiA9IG5ldyBEYXRhYmFzZShcIkJPR1VTX0NMQVNTXCIsIFwiQk9HVVNfU1RVREVOVFwiKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2Lm5hdmJhclwiKTtcbiAgICAgICAgdGhpcy5ob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJfaG9tZV9idG5cIik7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlfdGl0bGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbl9vdXRfYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnNpZ25JblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25faW5fdGV4dFwiKTtcbiAgICAgICAgdGhpcy5nb0hvbWUgICAgICA9IHRoaXMuZ29Ib21lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2lnbk91dFVzZXIgPSB0aGlzLnNpZ25PdXRVc2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29Ib21lKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNpZ25PdXRVc2VyKTtcbiAgICB9XG5cbiAgICBnb0hvbWUoZSkge1xuICAgICAgICBsZXQgaG9tZVBhZ2UgPSB0aGlzLmNhbGNIb21lUGFnZSgpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0VG8oaG9tZVBhZ2UpO1xuICAgIH1cblxuICAgIGNhbGNIb21lUGFnZSgpIHtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKTtcbiAgICAgICAgaWYgKG51bGwgPT09IGhvbWVQYWdlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG9tZVBhZ2U7XG4gICAgfVxuXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgLy8gcHJldmVudCByZWZyZXNoIGlmIGFscmVhZHkgb24gdGhpcyBwYWdlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gdXJsKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNpZ25PdXRVc2VyKGUpIHtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gdGhpcy5jYWxjSG9tZVBhZ2UoKTtcbiAgICAgICAgLy8gdGhpcyBkb2VzIHRoZSBhY3R1YWwgc2lnbmluZyBvdXRcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUbyhob21lUGFnZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUFjdGl2aXR5VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5VXNlcih1c2VyTmFtZSkge1xuICAgICAgICB0aGlzLnNpZ25JblRleHQuaW5uZXJIVE1MID0gYFdlbGNvbWUsICR7dXNlck5hbWV9YDtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBnZXREQkNvbm5lY3Rpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9pc3AtZGF0YWJhc2VcIjtcbmltcG9ydCB7IFNuYWNrQmFyfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zbmFja2JhclwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVCYXNlZEFwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSwgYWN0aXZpdHlDb25maWcsIGRlZmF1bHRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZURhdGEgPSBhcHBEYXRhLnNjZW5lcztcbiAgICAgICAgdGhpcy5hY3Rpdml0eUNvbmZpZyA9IGFjdGl2aXR5Q29uZmlnO1xuICAgICAgICB0aGlzLmRiID0gZ2V0REJDb25uZWN0aW9uKGFjdGl2aXR5Q29uZmlnLmRhdGFiYXNlKTtcbiAgICAgICAgdGhpcy5kYi5zZXRDcmVkZW50aWFscyhhY3Rpdml0eUNvbmZpZy5jbGFzc0NvZGUsIGFjdGl2aXR5Q29uZmlnLnVzZXJJRCk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlLZXkgPSBhY3Rpdml0eUNvbmZpZy5hY3Rpdml0eUtleTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U3RhdGUgPSBkZWZhdWx0SW5pdGlhbFN0YXRlO1xuXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbiAgICAgICAgdGhpcy5ob21lUGFnZUJ0biA9IG51bGw7XG4gICAgICAgIGxldCBob21lUGFnZUJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvX2hvbWVfYnRuXCIpO1xuICAgICAgICB0aGlzLm5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuICAgICAgICB0aGlzLnByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZfYnRuXCIpO1xuICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lX2lkX3JlZ2lvblwiKTtcbiAgICAgICAgaWYgKGhvbWVQYWdlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVQYWdlQnRuID0gaG9tZVBhZ2VCdG47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHb0hvbWVQYWdlID0gdGhpcy5oYW5kbGVHb0hvbWVQYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVByZXYgPSB0aGlzLmhhbmRsZVByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaG9tZVBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlR29Ib21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVOZXh0KTtcbiAgICAgICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVByZXYpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gbnVsbDtcbiAgICAgICAgLy8gaXMgdGhpcyBuZWVkZWQ/Pz9cbiAgICAgICAgdGhpcy5ib2d1c1NjZW5lSW5mbyA9IHtcbiAgICAgICAgICAgIGlkOiBcIk4vQVwiLFxuICAgICAgICAgICAgc2NlbmVUeXBlOiBcImJvZ3VzXCJcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFwcCA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVJlc2l6ZShldmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIHRoaXMucmVzaXplQ29udGVudCgpO1xuICAgIH1cblxuICAgIHJlc2l6ZUNvbnRlbnQoKSB7XG4gICAgICAgIGxldCBzRWwsIGNFbCwgc1dpZHRoLCBzSGVpZ2h0LCBjV2lkdGgsIGNIZWlnaHQsIHNjO1xuICAgICAgICBzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjZW5lLmFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKHNFbCkge1xuICAgICAgICAgICAgY0VsID0gc0VsLnF1ZXJ5U2VsZWN0b3IoXCIuc2NlbmUtY29udGVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY0VsKSB7XG4gICAgICAgICAgICBzV2lkdGggID0gc0VsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgc0hlaWdodCA9IHNFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjV2lkdGggID0gY0VsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY0hlaWdodCA9IGNFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBzYyA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHNXaWR0aCAvIGNXaWR0aCxcbiAgICAgICAgICAgICAgICBzSGVpZ2h0IC8gY0hlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKCR7c2N9KWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXRTbmFja2JhcihzbmFja2Jhcikge1xuICAgIC8vICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG4gICAgLy8gfVxuXG4gICAgc2hvd0ZlZWRiYWNrKGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc25hY2tiYXIuc2hvdyhmZWVkYmFjayk7XG4gICAgfVxuXG4gICAgaGFuZGxlR29Ib21lUGFnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBpbmNhc2Ugd2UncmUgaW4gYW4gaWZyYW1lXG4gICAgICAgIHRvcC5sb2NhdGlvbi5ocmVmID0gdGhpcy5hY3Rpdml0eUNvbmZpZy5ob21lcGFnZTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcmV2KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZVByZXZCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZU5leHRCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRTdGFydFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInNldFN0YXJ0U2NlbmUoKVwiLCBzY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gc2NlbmVJZDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGluZ1wiKTtcbiAgICAgICAgdGhpcy5nZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgICAudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBhY3Rpdml0eSBkYXRhIGluIGRiLiB1c2luZyBpbml0aWFsIGRhdGFcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgU2NlbmVzXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgc2NlbmUgZm9yICR7c2NlbmVJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lT2JqID0gdGhpcy5jcmVhdGVTY2VuZSh0aGlzLnNjZW5lRGF0YVtzY2VuZUlkXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0gPSBzY2VuZU9iajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdG9yaW5nIEFwcCBTdGF0ZVwiKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVTdGF0ZSA9IHRoaXMuc3RhdGUuc2NlbmVTdGF0ZVtzY2VuZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0ucmVzdG9yZVN0YXRlKHNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0b3JpbmcgQ3VycmVudCBTY2VuZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhdGUuY3VycmVudFNjZW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKHRoaXMuc2NlbmVEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjZW5lcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0YXJ0U2NlbmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBcHBTdGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkxvYWRpbmcgQXBwIFN0YXRlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5nZXRBY3Rpdml0eURhdGEodGhpcy5hY3Rpdml0eUtleSk7XG4gICAgfVxuXG4gICAgc2F2ZUFwcFN0YXRlKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2F2aW5nIEFwcCBTdGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuc2V0QWN0aXZpdHlEYXRhKHRoaXMuYWN0aXZpdHlLZXksIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICAvLyB5b3UnbGwgd2FudCB0byBvdmVycmlkZSB0aGlzIHRvIGRvIGFueXRoaW5nIHVzZWZ1bFxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiY3JlYXRlU2NlbmUoKVwiLCBzY2VuZUluZm8sIHNjZW5lU3RhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgc3dpdGNoVG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLmxvZ1NjZW5lQ2hhbmdlKHNjZW5lKTtcbiAgICAgICAgdGhpcy5nb3RvU2NlbmUoc2NlbmUpO1xuICAgIH1cblxuICAgIGdvdG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAodGhpcy5wcmV2U2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLnByZV9leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5wb3N0X2V4aXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wcmVfZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucG9zdF9lbnRlcigpO1xuICAgICAgICAvLyBkZWxldGUgdGhpcy5wcmV2U2NlbmU7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvb2t1cFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVJZF07XG4gICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SOiBubyBzdWNoIHNjZW5lICR7c2NlbmVJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuXG4gICAgZm9sbG93RWRnZShlZGdlTmFtZSkge1xuICAgICAgICBsZXQgbmV3U2NlbmVJZCA9IHRoaXMuY3VycmVudFNjZW5lLmVkZ2VzW2VkZ2VOYW1lXTtcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5sb29rdXBTY2VuZShuZXdTY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUb1NjZW5lKG5ld1NjZW5lKTtcbiAgICB9XG5cbiAgICBsb2dTY2VuZUNoYW5nZShzY2VuZSkge1xuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0NFTkVfVFJBTlNJVElPTlwiLFxuICAgICAgICAgICAgZnJvbTogdGhpcy5jdXJyZW50U2NlbmUuaWQsXG4gICAgICAgICAgICB0bzogc2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgfVxuXG5cbiAgICBnb3RvU3RhcnRTY2VuZSgpIHtcbiAgICAgICAgLy8gYnlwYXNzZXMgc3dpdGNoVG9TY2VuZSgpIGFuZCB0aHVzIGxvZ1NjZW5lQ2hhbmdlKClcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICBsZXQgc3RhcnRTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmUpIHtcbiAgICAgICAgICAgIHN0YXJ0U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhcnRTY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcIkFQUF9TVEFSVFwiLFxuICAgICAgICAgICAgc2NlbmU6ICBzdGFydFNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiVXBkYXRpbmcgc3RhdGUuZXZlbnRzXCIpO1xuICAgICAgICB0aGlzLmdvdG9TY2VuZShzdGFydFNjZW5lKTtcbiAgICB9XG5cblxuICAgIGhpZGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBzaG93KGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgbWFrZUludmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlVmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcblxuZXhwb3J0IHtcbiAgICBTY2VuZUJhc2VkQXBwLFxuICAgIFNjZW5lXG59O1xuIiwiZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uRm9ybSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBmb3JtSW5mbywgZWxlSWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGZvcm1JbmZvO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIHRoaXMucmFkaW9zID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybSBpcyB2YWxpZDpcIiwgdmFsaWRpdHkpO1xuICAgICAgICByZXR1cm4gdmFsaWRpdHk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gZGlydHkgc3RhdGUgc28gaXQgd2lsbCBnZXQgc2F2ZWQgbGF0ZXIgb25cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZWFyZG93bkV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldENvcnJlY3RuZXNzKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgIClcbiAgICAgICAgbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gbGV0IGFuc1RleHQgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgY29ycmVjdEFuc3dlciA9IHNmaS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICBsZXQgaXNDb3JyZWN0O1xuXG4gICAgICAgIGlmIChcIk4vQVwiID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0NvcnJlY3Q7XG4gICAgfVxuXG4gICAgZ2V0RmVlZGJhY2soKSB7XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0NvcnJlY3QsIHNmaSk7XG4gICAgICAgIGxldCBmYlRleHQsIGZiQ2xhc3NOYW1lLCBmYk1zZztcbiAgICAgICAgc3dpdGNoKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibmVnLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihmYlRleHQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHNmaS5udGxGYikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZmJUZXh0KSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCIke2ZiQ2xhc3NOYW1lfVwiPiR7ZmJUZXh0fTwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYk1zZztcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgICk7XG4gICAgICAgIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIGxldCBsYmwgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBxdWVzdGlvblR5cGU6IHNmaS50eXBlLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBzZmkudGV4dCxcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlSWQ6IHNlbGVjdGVkQW5zd2VyLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogdmFsLFxuICAgICAgICAgICAgc2VsZWN0ZWRMYWJlbDogbGJsLFxuICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZm9ybSB0byBub24tZGlydHkgc3RhdGUsIHNvIHdlIGRvbid0IHJlc3VibWl0IHVubGVzcyB0aGV5XG4gICAgICAgIC8vIGNoYW5nZSBhZ2FpblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgXFx0SW5pdGlhbGl6aW5nIFNjZW5lOiAke3NjZW5lSW5mby5pZH1gKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIC8vIGNvcHkgYWxsIHNjZW5lSW5mbyB0byAndGhpcydcbiAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNjZW5lSW5mbykpIHtcbiAgICAgICAgICAgIHRoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgLy8gYmluZCBldmVudCBoYW5kbGVyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiA9IHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3dCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlRm9sbG93RWRnZUJ1dHRvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGVkZ2VOYW1lID0gZS50YXJnZXQuZGF0YXNldC5lZGdlO1xuICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKGVkZ2VOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRGb2xsb3dFZGdlRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb2xsb3ctZWRnZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cEZvbGxvd0VkZ2VFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmdldEZvbGxvd0VkZ2VFbGVtZW50cygpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVGb2xsb3dFZGdlQnV0dG9uLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdFJlc3RvcmluZyBTY2VuZSBTdGF0ZSBmb3I6ICR7dGhpcy5pZH0gYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2lzQm9ndXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID09PSBcIk4vQVwiIHx8IHRoaXMuc2NlbmVUeXBlID09PSBcImJvZ3VzXCI7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJldkJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcInByZXZcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcIm5leHRcIik7XG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcm1DaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlX2VudGVyKCkge1xuXG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFbnRlcmluZyBTY2VuZTogJHt0aGlzLmlkfWApO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiXFx0VXBkYXRpbmcgc3RhdGUuY3VycmVudFNjZW5lXCIpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5jdXJyZW50U2NlbmUgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FbnRlckFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIHByZV9leGl0KCkge1xuXG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYEV4aXRpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FeGl0QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLmFwcC5yZXNpemVDb250ZW50KCk7XG4gICAgICAgIHRoaXMuc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5leHBvcnQgY2xhc3MgU25hY2tCYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlEKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCB8fCBcInNuYWNrYmFyXCIpO1xuICAgIH1cblxuICAgIHNob3codGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mKHRleHQpICE9PSBcInVuZGVmaW5lZFwiICYmIG51bGwgIT09IHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXG4gICAgICAgICAgICAvLyB0aGlzLmVsLmNsYXNzTmFtZSA9IFwic2hvd1wiO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICAgIC8vIEFmdGVyIDMgc2Vjb25kcywgcmVtb3ZlIHRoZSBzaG93IGNsYXNzIGZyb20gRElWXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzbmFja2Jhci5jbGFzc05hbWUgPSBzbmFja2Jhci5jbGFzc05hbWUucmVwbGFjZShcInNob3dcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmVCYXNlZEFwcCB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlXCI7XG5pbXBvcnQgeyBEaUluc3RydWN0aW9uU2NlbmUgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1zY2VuZVwiO1xuaW1wb3J0IHsgRGlTdGF0c1NjZW5lIH0gZnJvbSBcIi4vZGktc3RhdHMtc2NlbmVcIjtcbmltcG9ydCB7IERpTXVsdGlwbGVDaG9pY2VGb3JtU2NlbmUgfSBmcm9tIFwiLi9kaS1tdWx0LWNob2ljZS1mb3JtLXNjZW5lXCI7XG5cblxuZXhwb3J0IGNsYXNzIERpSW5zdHJ1Y3Rpb25BcHAgZXh0ZW5kcyBTY2VuZUJhc2VkQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSkge1xuICAgICAgICBzdXBlcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSk7XG4gICAgICAgIC8vIGJpbmQgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrVG9RdWVzdGlvbiA9IHRoaXMuaGFuZGxlQmFja1RvUXVlc3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWFkeVRvQW5zd2VyID0gdGhpcy5oYW5kbGVSZWFkeVRvQW5zd2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYmFja1RvUXVlc3Rpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tfdG9fcXVlc3Rpb25fYnRuXCIpO1xuICAgICAgICB0aGlzLnJlYWR5VG9BbnN3ZXJCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkeV90b19hbnN3ZXJfYnRuXCIpO1xuICAgICAgICB0aGlzLnJlYWR5VG9BbnN3ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUmVhZHlUb0Fuc3dlcik7XG4gICAgICAgIHRoaXMuYmFja1RvUXVlc3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQmFja1RvUXVlc3Rpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVJlYWR5VG9BbnN3ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2xsb3dFZGdlKFwicmVhZHlUb0Fuc3dlclwiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVCYWNrVG9RdWVzdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvbGxvd0VkZ2UoXCJiYWNrVG9RdWVzdGlvblwiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgbGV0IG5ld1NjZW5lO1xuICAgICAgICBpZiAoXCJzdGF0c1wiID09PSBzY2VuZUluZm8uc2NlbmVUeXBlKSB7XG4gICAgICAgICAgICBuZXdTY2VuZSA9IG5ldyBEaVN0YXRzU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgfSBlbHNlIGlmIChcIm11bHRpcGxlQ2hvaWNlRm9ybVwiID09PSBzY2VuZUluZm8uc2NlbmVUeXBlKSB7XG4gICAgICAgICAgICBuZXdTY2VuZSA9IG5ldyBEaU11bHRpcGxlQ2hvaWNlRm9ybVNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTY2VuZSA9IG5ldyBEaUluc3RydWN0aW9uU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3U2NlbmU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaUluc3RydWN0aW9uU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLmN1c3RvbUFjdGlvbnMgPSB7XG4gICAgICAgICAgICBzaG93QnRuczogdGhpcy5zaG93QnRucyxcbiAgICAgICAgICAgIGhpZGVCdG5zOiB0aGlzLmhpZGVCdG5zLFxuICAgICAgICAgICAgaGlsaXRlVGFibGVDZWxsczogdGhpcy5oaWxpZ2h0VGFibGVDZWxsc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ0bk5hbWVzID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5hcHAucHJldkJ0bixcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuYXBwLm5leHRCdG4sXG4gICAgICAgICAgICBiYWNrVG9RdWVzdGlvbjogdGhpcy5hcHAuYmFja1RvUXVlc3Rpb25CdG4sXG4gICAgICAgICAgICByZWFkeVRvQW5zd2VyOiB0aGlzLmFwcC5yZWFkeVRvQW5zd2VyQnRuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGlsaXRlVGFibGVDZWxscyhhcmdzKSB7XG4gICAgICAgIGxldCB0YWJsZUlkID0gYCR7dGhpcy5pZH1fJHthcmdzLnRhYmxlfWA7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSWQpO1xuICAgICAgICBsZXQgY29sb3IgPSBhcmdzLmNvbG9yIHx8IFwiYmx1ZVwiO1xuICAgICAgICBmb3IgKGxldCBzZWxlY3RvciBvZiBhcmdzLmNlbGxTZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIGxldCBzZWwgPSBgdGQke3NlbGVjdG9yfWA7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tYmdgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIG9mIHRoaXMuY3VzdG9tRW50ZXJBY3Rpb25zKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGFjdGlvbi5uYW1lO1xuICAgICAgICAgICAgbGV0IGFyZ3MgPSBhY3Rpb24uYXJncztcbiAgICAgICAgICAgIGlmICh0aGlzLmN1c3RvbUFjdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW25hbWVdKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBzdXBlci5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgLy8gdGhlc2UgYnV0dG9uIHN0YXRlcyBtYXkgZ2V0IG92ZXJyaWRlbiBieSBzY2VuZS1zcGVjaWZpYyBjdXN0b20gYWN0aW9uc1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5yZWFkeVRvQW5zd2VyQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5iYWNrVG9RdWVzdGlvbkJ0bik7XG4gICAgfVxuXG59O1xuIiwiaW1wb3J0IHsgRGlJbnN0cnVjdGlvblNjZW5lIH0gZnJvbSBcIi4vZGktaW5zdHJ1Y3Rpb24tc2NlbmVcIjtcblxuaW1wb3J0IHsgUmFkaW9CdXR0b25Gb3JtIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm1cIjtcblxuZXhwb3J0IGNsYXNzIERpTXVsdGlwbGVDaG9pY2VGb3JtU2NlbmUgZXh0ZW5kcyBEaUluc3RydWN0aW9uU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IFJhZGlvQnV0dG9uRm9ybShcbiAgICAgICAgICAgIGFwcCwgc2NlbmVJbmZvLnF1ZXN0aW9uLCBgJHt0aGlzLmlkfV9yYWRpb19mb3JtYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoc3VwZXIucmVzdG9yZVN0YXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IGVsZUlEID0gYCR7dGhpcy5pZH1fb3B0aW9uXyR7dmFsdWV9YDtcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlEKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoZWwpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgXFx0XFx0VW5hYmxlIHRvIFNlbGVjdCBSYWRpbyBCdXR0b24gJHtlbGVJRH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRcXHRTZWxlY3RlZCBSYWRpbyBCdXR0b246ICR7ZWxlSUR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGhhc0Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvcm1DaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmNoYW5nZWQ7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJldkJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUNoYW5nZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5oYW5kbGVQcmV2QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dEJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUNoYW5nZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5oYW5kbGVOZXh0QnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2F2ZUZvcm1EYXRhKCkge1xuICAgICAgICB0aGlzLmFwcC5zaG93RmVlZGJhY2sodGhpcy5mb3JtLmdldEZlZWRiYWNrKCkpO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZm9ybS5nZXREYXRhKCk7XG4gICAgICAgIGxldCBsb2dEYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25fdHlwZTogXCJTVUJNSVRfQU5TV0VSXCIsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JZDogYCR7dGhpcy5hcHAuYWN0aXZpdHlLZXl9LiR7dGhpcy5pZH1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIHN0YXRlLmV2ZW50c1wiKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuZXZlbnRzLnB1c2gobG9nRGF0YSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgc3RhdGUuc2NlbmVTdGF0ZVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcHAuc3RhdGUpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5zY2VuZVN0YXRlW3RoaXMuaWRdID0gZGF0YS5zZWxlY3RlZFZhbHVlO1xuICAgIH1cblxuICAgIC8vIHByZV9leGl0KCkge1xuICAgIC8vICAgICBzdXBlci5wcmVfZXhpdCgpO1xuICAgIC8vICAgICBpZiAodGhpcy5mb3JtQ2hhbmdlZCgpKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNhdmVGb3JtRGF0YSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmZvcm0uc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgdGVhcmRvd25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmZvcm0udGVhcmRvd25FdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBzdXBlci5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgLy8gZG9uJ3QgbGV0IHN0dWRlbnQgc2tpcCBvdmVyIHF1ZXN0aW9uXG4gICAgICAgICAgICBpZiAoISB0aGlzLmZvcm0uaXNWYWxpZCgpICkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy50ZWFyZG93bkV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG59XG4iLCJcbmltcG9ydCB7IERpSW5zdHJ1Y3Rpb25TY2VuZSB9IGZyb20gXCIuL2RpLWluc3RydWN0aW9uLXNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEaVN0YXRzU2NlbmUgZXh0ZW5kcyBEaUluc3RydWN0aW9uU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgIH1cbn1cbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvbmF2YmFyXCI7XG5pbXBvcnQgeyBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9hY3Rpdml0eS1jb25maWdcIjtcbmltcG9ydCB7IERpSW5zdHJ1Y3Rpb25BcHAgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1hcHBcIjtcblxubGV0IGFjdGl2aXR5Q29uZmlnID0gZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uKCk7XG5sZXQgYWN0aXZpdHlEYXRhID0gcmVxdWlyZShcIi4uL2RhdGEvZGlJbnN0ci5qc29uXCIpO1xuXG5jb25zdCBERUZBVUxUX0lOSVRJQUxfQVBQX1NUQVRFID0ge1xuICAgIGV2ZW50czogW10sXG4gICAgLy8gbWFwcGluZyBvZiBzY2VuZWlkID0+IHNjZW5lVHlwZS1zcGVjaWZpYyBkYXRhXG4gICAgc2NlbmVTdGF0ZToge30sXG4gICAgY3VycmVudFNjZW5lOiBcInN0YXJ0XCJcbn07XG5cbmxldCBuYXZiYXIgPSBuZXcgTmF2QmFyKCk7XG5uYXZiYXIuZGlzcGxheUFjdGl2aXR5VGl0bGUoXCJEYXRhIEludGVycHJldGF0aW9uIExlc3NvblwiKTtcbm5hdmJhci5kaXNwbGF5VXNlcihhY3Rpdml0eUNvbmZpZy51c2VySUQpO1xubGV0IGFwcCA9IG5ldyBEaUluc3RydWN0aW9uQXBwKFxuICAgIGFjdGl2aXR5RGF0YSwgYWN0aXZpdHlDb25maWcsIERFRkFVTFRfSU5JVElBTF9BUFBfU1RBVEVcbik7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGFwcC5zZXRTdGFydFNjZW5lKFwic2NlbmUyOFwiKTtcbn1cbmFwcC5zdGFydCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==