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
        let homePageBtn  = document.getElementById("go_home_page");
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
        window.location.href = this.activityConfig.homepage
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
        // bind event handlers
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

/***/ "../../common/scene-app-base/textarea-form.js":
/*!***********************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/scene-app-base/textarea-form.js ***!
  \***********************************************************************************************/
/*! exports provided: TextareaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaForm", function() { return TextareaForm; });
class TextareaForm {
    constructor(app, formInfo, eleId) {
        this.handleChange = this.handleChange.bind(this);
        this.app = app;
        this.formInfo = formInfo;
        this.form = document.getElementById(eleId);
        console.log(this.form);
        this.textarea = this.form.querySelector('.form-control');
        this.changed = false;
    }

    isValid() {
        const validity = this.form.checkValidity();
        // console.log("form is valid:", validity);
        return validity;
    }

    handleChange(e) {
        // set form to dirty state so it will get saved later on
        if (this.textarea.value.trim() != "") {
            this.changed = true;
            // console.log(this.getData());
            if (this.isValid()) {
                this.app.enable(this.app.nextBtn);
            }
        }
    }

    setupEventHandlers() {
        // for (let rb of this.radios) {
        //     rb.addEventListener('change', this.handleChange);
        // }
        this.textarea.addEventListener("input", this.handleChange);
    }

    teardownEventHandlers() {
        // for (let rb of this.radios) {
        //     rb.removeEventListener('change', this.handleChange);
        // }
        this.textarea.removeEventListener("input", this.handleChange);
    }


    getCorrectness() {
        // let sfi = this.formInfo;
        // let selectedAnswer = this.form.querySelector(
        //     'input[type="radio"]:checked'
        // )
        // let val = selectedAnswer.value.trim();
        // // let ansText = selectedAnswer.labels[0].innerText;
        // let correctAnswer = sfi.correctAnswer;
        // let isCorrect;

        // if ("N/A" === correctAnswer) {
        //     isCorrect = null;
        // } else if (correctAnswer === val) {
        //     isCorrect = true;
        // } else {
        //     isCorrect = false;
        // }
        // return isCorrect;
        return null;
    }

    getFeedback() {
        // let isCorrect = this.getCorrectness();
        let sfi = this.formInfo;
        // // console.log(isCorrect, sfi);
        let fbText, fbClassName, fbMsg;
        // switch (isCorrect) {
        //     case true:
        //         fbText = sfi.posFb;
        //         fbClassName = "pos-feedback";
        //         break;
        //     case false:
        //         fbText = sfi.negFb;
        //         fbClassName = "neg-feedback";
        //         break;
        //     default:
        //         fbText = sfi.ntlFb;
        //         fbClassName = "ntl-feedback";
        // }
        // if (typeof (fbText) === "undefined") {
        if (typeof (sfi.ntlFb) !== "undefined") {
            fbText = sfi.ntlFb;
            fbClassName = "ntl-feedback";
        }
        // }
        if (typeof (fbText) !== "undefined") {
            fbMsg = `<span class="${fbClassName}">${fbText}</span>`;
        }
        return fbMsg;
    }

    getData() {
        let sfi = this.formInfo;
        let isCorrect = this.getCorrectness();
        // let selectedAnswer = this.form.querySelector(
        //     'input[type="radio"]:checked'
        // );
        // let val = selectedAnswer.value.trim();
        // let lbl = selectedAnswer.labels[0].innerText;
        let answer = this.textarea.value.trim();
        let formData = {
            questionType: sfi.type,
            questionText: sfi.text,
            // selectedEleId: selectedAnswer.id,
            // selectedValue: val,
            // selectedLabel: lbl,
            answer: answer,
            isCorrect: isCorrect,
            timestamp: Date.now()
        }
        // set form to non-dirty state, so we don't resubmit unless they
        // change again
        this.changed = false;
        return formData;
    }

    // getFormData() {

    // }

    // handleFormSubmit(e) {
    //     e.preventDefault();

    //     if (this.form.checkValidity()) {

    //         let fbText;
    //         let fbClassName;

    //         if ("n/a" === correctAnswer) {
    //             isCorrect = null;
    //             fbText = sfi.ntlFb;
    //             fbClassName = "ntl-feedback";
    //         } else if (correctAnswer === val) {
    //             isCorrect = true;
    //             fbText = sfi.posFb;
    //             fbClassName = "pos-feedback";
    //         } else {
    //             isCorrect = false;
    //             fbText = sfi.negFb;
    //             fbClassName = 'neg-feedback';
    //         }

    //         if (!fbText) {
    //             fbText = sfi.ntlFb;
    //             fbClassName = 'ntl-feedback';
    //         }

    //         this.app.showFeedback(fbMsg);
    //         // what we want to store in firestore
    // }
    //         console.log(log);

    //     } else {
    //         let fbMsg = `<span class="text-danger">Please select an option</span>`;
    //         this.app.showFeedback(fbMsg);
    //     }
    // }

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

/***/ "./data/diPreTest.json":
/*!*****************************!*\
  !*** ./data/diPreTest.json ***!
  \*****************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"edges\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"edges\":{\"prev\":\"start\",\"next\":\"memoryIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro1\":{\"edges\":{\"prev\":\"intro\",\"next\":\"memoryIntro2\"},\"id\":\"memoryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro2\":{\"edges\":{\"prev\":\"memoryIntro1\",\"next\":\"memoryIntro3\"},\"id\":\"memoryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro3\":{\"edges\":{\"prev\":\"memoryIntro2\",\"next\":\"memoryIntro4\"},\"id\":\"memoryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro4\":{\"edges\":{\"prev\":\"memoryIntro3\",\"next\":\"memoryIntro5\"},\"id\":\"memoryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro5\":{\"edges\":{\"prev\":\"memoryIntro4\",\"next\":\"memoryIntro6\"},\"id\":\"memoryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro6\":{\"edges\":{\"prev\":\"memoryIntro5\",\"next\":\"memoryIntro7\"},\"id\":\"memoryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro7\":{\"edges\":{\"prev\":\"memoryIntro6\",\"next\":\"memoryResults1Intro\"},\"id\":\"memoryIntro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1Intro\":{\"edges\":{\"prev\":\"memoryIntro7\",\"next\":\"memoryResults1\"},\"id\":\"memoryResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults1Intro\",\"next\":\"memoryResults2Intro\"},\"id\":\"memoryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2Intro\":{\"edges\":{\"prev\":\"memoryResults1\",\"next\":\"memoryResults2\"},\"id\":\"memoryResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults2Intro\",\"next\":\"memoryResults3Intro\"},\"id\":\"memoryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3Intro\":{\"edges\":{\"prev\":\"memoryResults2\",\"next\":\"memoryResults3\"},\"id\":\"memoryResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults3Intro\",\"next\":\"memoryResults4Intro\"},\"id\":\"memoryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4Intro\":{\"edges\":{\"prev\":\"memoryResults3\",\"next\":\"memoryResults4\"},\"id\":\"memoryResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults4Intro\",\"next\":\"memoryResults5Intro\"},\"id\":\"memoryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5Intro\":{\"edges\":{\"prev\":\"memoryResults4\",\"next\":\"memoryResults5\"},\"id\":\"memoryResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults5Intro\",\"next\":\"rocketsIntro1\"},\"id\":\"memoryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro1\":{\"edges\":{\"prev\":\"memoryResults5\",\"next\":\"rocketsIntro2\"},\"id\":\"rocketsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro2\":{\"edges\":{\"prev\":\"rocketsIntro1\",\"next\":\"rocketsIntro3\"},\"id\":\"rocketsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro3\":{\"edges\":{\"prev\":\"rocketsIntro2\",\"next\":\"rocketsIntro4\"},\"id\":\"rocketsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro4\":{\"edges\":{\"prev\":\"rocketsIntro3\",\"next\":\"rocketsResults1Intro\"},\"id\":\"rocketsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1Intro\":{\"edges\":{\"prev\":\"rocketsIntro4\",\"next\":\"rocketsResults1\"},\"id\":\"rocketsResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults1Intro\",\"next\":\"rocketsResults2Intro\"},\"id\":\"rocketsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2Intro\":{\"edges\":{\"prev\":\"rocketsResults1\",\"next\":\"rocketsResults2\"},\"id\":\"rocketsResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults2Intro\",\"next\":\"rocketsResults3Intro\"},\"id\":\"rocketsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3Intro\":{\"edges\":{\"prev\":\"rocketsResults2\",\"next\":\"rocketsResults3\"},\"id\":\"rocketsResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults3Intro\",\"next\":\"rocketsResults4Intro\"},\"id\":\"rocketsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4Intro\":{\"edges\":{\"prev\":\"rocketsResults3\",\"next\":\"rocketsResults4\"},\"id\":\"rocketsResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults4Intro\",\"next\":\"rocketsResults5Intro\"},\"id\":\"rocketsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5Intro\":{\"edges\":{\"prev\":\"rocketsResults4\",\"next\":\"rocketsResults5\"},\"id\":\"rocketsResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults5Intro\",\"next\":\"completed\"},\"id\":\"rocketsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"edges\":{\"prev\":\"rocketsResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: DiTestApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestApp", function() { return DiTestApp; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/navbar */ "../../common/navbar/index.js");
/* harmony import */ var _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @isptutorproject/scene-app-base */ "../../common/scene-app-base/index.js");
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes */ "./src/scenes/index.js");








class DiTestApp extends _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_2__["SceneBasedApp"]{

    createScene(sceneInfo) {
        let scene;
        switch(sceneInfo.sceneType) {
            case "carResults":
            case "rocketsResults":
                scene = new _scenes__WEBPACK_IMPORTED_MODULE_3__["DiSingleTableResultsScene"](this, sceneInfo);
                break;
            case "libraryResults":
            case "memoryResults":
                scene = new _scenes__WEBPACK_IMPORTED_MODULE_3__["DiDualTableResultsScene"](this, sceneInfo);
                break;
            default:
                scene = new _scenes__WEBPACK_IMPORTED_MODULE_3__["DiTestScene"](this, sceneInfo);

        }
        return scene;
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
/* harmony import */ var _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/navbar */ "../../common/navbar/index.js");
/* harmony import */ var _isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @isptutorproject/activity-config */ "../../common/activity-config/index.js");






const DEFAULT_APP_INITIAL_STATE = {
    events: [],
    // mapping of sceneIDs -> scene-type specific data
    sceneState: {},
    currentScene: "start"
};


let activityConfig = Object(_isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_2__["getActivityConfiguration"])();
const activityData = __webpack_require__(/*! ../data/diPreTest.json */ "./data/diPreTest.json");

let navbar = new _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__["NavBar"]();
navbar.displayActivityTitle("Data Interpretation Pre-Test");
navbar.displayUser(activityConfig.userID);

// console.log(activityConfig);

let app = new _index__WEBPACK_IMPORTED_MODULE_0__["DiTestApp"](
    activityData, activityConfig, DEFAULT_APP_INITIAL_STATE
);
if (true) {
    app.setStartScene("start");
}
app.start()



/***/ }),

/***/ "./src/scenes/dualTableResultsScene.js":
/*!*********************************************!*\
  !*** ./src/scenes/dualTableResultsScene.js ***!
  \*********************************************/
/*! exports provided: DiDualTableResultsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiDualTableResultsScene", function() { return DiDualTableResultsScene; });
/* harmony import */ var _testResultsScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testResultsScene */ "./src/scenes/testResultsScene.js");


class DiDualTableResultsScene extends _testResultsScene__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.showSortedData = this.showSortedData.bind(this);
    }

    _compareRows(a, b) {
        // compares 2nd column of rows as integers
        let a1 = parseFloat(a.querySelectorAll("td")[1].innerText);
        let b1 = parseFloat(b.querySelectorAll("td")[1].innerText);
        return a1 - b1;
    }

    _sortTable(table) {
        let tbody = table.querySelector("tbody");
        let rows = [...tbody.rows];
        tbody.innerHTML = "";
        rows.sort(this._compareRows);
        for (let row of rows) {
            tbody.appendChild(row);
        }
    }

    showSortedData() {
        let leftTable = this.el.querySelector("table.data-table.left-table");
        let rightTable = this.el.querySelector("table.data-table.right-table");
        this._sortTable(leftTable);
        this._sortTable(rightTable);
    }


}


/***/ }),

/***/ "./src/scenes/index.js":
/*!*****************************!*\
  !*** ./src/scenes/index.js ***!
  \*****************************/
/*! exports provided: DiTestScene, DiDualTableResultsScene, DiSingleTableResultsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testScene */ "./src/scenes/testScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiTestScene", function() { return _testScene__WEBPACK_IMPORTED_MODULE_0__["DiTestScene"]; });

/* harmony import */ var _singleTableResultsScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleTableResultsScene */ "./src/scenes/singleTableResultsScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiSingleTableResultsScene", function() { return _singleTableResultsScene__WEBPACK_IMPORTED_MODULE_1__["DiSingleTableResultsScene"]; });

/* harmony import */ var _dualTableResultsScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dualTableResultsScene */ "./src/scenes/dualTableResultsScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiDualTableResultsScene", function() { return _dualTableResultsScene__WEBPACK_IMPORTED_MODULE_2__["DiDualTableResultsScene"]; });







/***/ }),

/***/ "./src/scenes/singleTableResultsScene.js":
/*!***********************************************!*\
  !*** ./src/scenes/singleTableResultsScene.js ***!
  \***********************************************/
/*! exports provided: DiSingleTableResultsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiSingleTableResultsScene", function() { return DiSingleTableResultsScene; });
/* harmony import */ var _testResultsScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testResultsScene */ "./src/scenes/testResultsScene.js");


class DiSingleTableResultsScene extends _testResultsScene__WEBPACK_IMPORTED_MODULE_0__["DiTestResultsScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.showSortedData = this.showSortedData.bind(this);
    }

    _sortTable(table) {
        // grabs column values from tbody rows, sorts them independently
        // and then re-adds them as sorted rows using the column arrays
        let tbody = table.querySelector("tbody");
        let rows = [...tbody.rows];
        tbody.innerHTML = "";
        let col1Vals = rows.map((tr) => {
            return parseFloat(tr.querySelectorAll("td")[0].innerText);
        });
        let col2Vals = rows.map((tr) => {
            return parseFloat(tr.querySelectorAll("td")[1].innerText);
        });
        col1Vals.sort((a, b) => a - b);
        col2Vals.sort((a, b) => a - b);
        for (let i = 0; i < col1Vals.length; i++) {
            let tr = document.createElement("tr");
            let col1 = document.createElement("td");
            let col2 = document.createElement("td");
            col1.innerText = col1Vals[i];
            col2.innerText = col2Vals[i];
            tr.appendChild(col1);
            tr.appendChild(col2)
            tbody.appendChild(tr);
        }
    }
    showSortedData() {
        let table = this.el.querySelector("table.data-table.center-table");
        this._sortTable(table)
    }
}



/***/ }),

/***/ "./src/scenes/testResultsScene.js":
/*!****************************************!*\
  !*** ./src/scenes/testResultsScene.js ***!
  \****************************************/
/*! exports provided: DiTestResultsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestResultsScene", function() { return DiTestResultsScene; });
/* harmony import */ var _testScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testScene */ "./src/scenes/testScene.js");
/* harmony import */ var _isptutorproject_scene_app_base_radio_button_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/scene-app-base/radio-button-form */ "../../common/scene-app-base/radio-button-form.js");
/* harmony import */ var _isptutorproject_scene_app_base_textarea_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @isptutorproject/scene-app-base/textarea-form */ "../../common/scene-app-base/textarea-form.js");





const FIRST_TRANSITION = 0;
const LAST_TRANSITION = 2;

class DiTestResultsScene extends _testScene__WEBPACK_IMPORTED_MODULE_0__["DiTestScene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.q1Answer = null;
        // default to the first transition
        this.currentTransition = FIRST_TRANSITION;
        this.currentTransitionStateSaver = null;
        this.currentState = null;

        this.saveQ1State = this.saveQ1State.bind(this);
        this.saveQ2State = this.saveQ2State.bind(this);
        this.saveQ3State = this.saveQ3State.bind(this);
        this.revealStatHandler = this.revealStatHandler.bind(this);
        this.handleSortData = this.handleSortData.bind(this);

        this.showSortedDataBtn = document.getElementById(`${this.id}_show_sorted_table`);
        this.sortedTableText    = document.getElementById(`${this.id}_sorted_text`);

        // this.sortedImg   = document.getElementById(`${this.id}_sorted`);
        // this.unsortedImg = document.getElementById(`${this.id}_unsorted`);

        this.q2TextArea = document.getElementById(`${this.id}_q2_answer`);
        this.currentForm = null;
        this.q1Form = new _isptutorproject_scene_app_base_radio_button_form__WEBPACK_IMPORTED_MODULE_1__["RadioButtonForm"](
            this.app, sceneInfo.questions.q1, `${this.id}_q1_form`
        );
        this.q2Form = new _isptutorproject_scene_app_base_textarea_form__WEBPACK_IMPORTED_MODULE_2__["TextareaForm"](
            this.app, sceneInfo.questions.q2, `${this.id}_q2_form`
        );
        this.q3Form = new _isptutorproject_scene_app_base_radio_button_form__WEBPACK_IMPORTED_MODULE_1__["RadioButtonForm"](
            this.app, sceneInfo.questions.q3, `${this.id}_q3_form`
        );
        this.forms = [
            this.q1Form,
            this.q2Form,
            this.q3Form
        ];
        this.q2Text = document.getElementById(`${this.id}_q2_text`);
        this.q3Text = document.getElementById(`${this.id}_q3_text`);

        this.setupEventHandlers();
    }

    restoreState(sceneState) {
        super.restoreState(sceneState);
        if (sceneState) {
            console.log("TestResultsScene::restoreState()");
            this.currentState = sceneState;

            if (sceneState.currentTransition) {
                this.currentTransition = sceneState.currentTransition;
            }
            if (sceneState.q1Selection) {
                let el = document.getElementById(sceneState.q1Selection);
                el.checked = true;
                // something is very wrong if we don't have both q1Selection
                // and a1Answer stored
                this.q1Answer = sceneState.q1Answer;
                this.updateQ2AndQ3Text();
            }
            if (sceneState.q2Answer) {
                this.q2TextArea.value = sceneState.q2Answer;
            }
            if (sceneState.q3Selection) {
                let el = document.getElementById(sceneState.q3Selection);
                el.checked = true;
            }
            for (let side of ["left", "right"]) {
                for (let stat of ["mean", "median", "mode", "range"]) {
                    if (sceneState[`${side}_${stat}_shown`]) {
                        this.revealStat(side, stat);
                    }
                }
            }

            if (sceneState.dataSorted) {
                this.showSortedData();
                this.replaceSortBtnWithText();
            }
        }
    }

    updateSceneState(diff) {
        if (null === this.currentState) {
            this.currentState = {};
        }
        this.currentState = Object.assign(this.currentState, diff);
        // console.log(this.currentState);
        this.app.state.sceneState[this.id] = Object.assign({}, this.currentState);
    }

    revealStat(side, stat) {
        let btnEl  = document.getElementById(`${this.id}_reveal_${side}_${stat}`);
        let statEl = document.getElementById(`${this.id}_${side}_${stat}`);
        this.app.hide(btnEl);
        this.app.show(statEl);
    }


    replaceSortBtnWithText() {
        this.app.hide(this.showSortedDataBtn);
        this.app.show(this.sortedTableText);
    }

    revealStatHandler(e) {
        let [_1, _2, side, stat] = e.target.id.replace(this.id, "").split("_");
        this.revealStat(side, stat);
        this.updateSceneState({ [`${side}_${stat}_shown`]: true })
        this.app.state.events.push({
            type: 'REVEAL_STAT',
            side: side,
            stat: stat,
            time: Date.now()
        });
    }

    handleSortData(e) {
        this.showSortedData();
        this.replaceSortBtnWithText();
        this.app.state.events.push({
            type: "DATA_SORTED",
            time: Date.now()
        });
        this.updateSceneState({"dataSorted": true});
    }

    hideAllForms() {
        for (let f of this.forms) {
            this.app.hide(f.form);
        }
    }

    handlePrevButton() {
        if (this.currentForm.changed) {
            this.currentTransitionStateSaver(this.currentForm.getData());
        }
        if (FIRST_TRANSITION === this.currentTransition) {
            this.app.followEdge("prev");
        } else {
            this.currentTransition--;
            this.handleTransition();
        }
    }

    handleNextButton() {
        if (this.currentForm.changed) {
            this.currentTransitionStateSaver(this.currentForm.getData());
        }
        if (LAST_TRANSITION === this.currentTransition) {
            this.app.followEdge("next");
        } else {
            this.currentTransition++;
            this.handleTransition();
        }
    }

    hasForm() {
        return true;
    }

    setupEventHandlers() {
        for (let btn of this.el.querySelectorAll(".reveal-stat")) {
            btn.addEventListener("click", this.revealStatHandler, {once: true});
        }
        this.showSortedDataBtn.addEventListener(
            "click", this.handleSortData, { once: true }
        );
    }

    updateQ2AndQ3Text() {
        let phRepl = `<span class="q1-answer">${this.q1Answer}</span>`;
        this.questions.q2.text = this.questions.q2.text.replace(
            "PLACEHOLDER", phRepl
        );
        this.questions.q3.text = this.questions.q3.text.replace(
            "PLACEHOLDER", phRepl
        );
        this.q2Text.innerHTML = this.questions.q2.text;
        this.q3Text.innerHTML = this.questions.q3.text;
    }

    saveQ1State(data) {
        this.q1Answer = data.selectedValue;
        this.updateSceneState({
            "q1Selection": data.selectedEleId,
            "q1Answer": this.q1Answer,
        });
        this.updateQ2AndQ3Text();
        this.submitQuestion("q1", data);
    }

    saveQ2State(data) {
        this.updateSceneState({q2Answer: data.answer});
        data.questionText = data.questionText
            .replace('<span class="q1-answer">', '')
            .replace('</span>', '');
        this.submitQuestion("q2", data);
    }

    saveQ3State(data) {
        this.updateSceneState({q3Selection: data.selectedEleId});
        data.questionText = data.questionText
            .replace('<span class="q1-answer">', '')
            .replace('</span>', '');
        this.submitQuestion("q3", data);
    }


    submitQuestion(qNum, data) {
        let logData = Object.assign(
            {
                type: "SUBMIT_ANSWER",
                questionId: `${this.app.activityKey}.${this.id}.${qNum}`
            },
            data
        );
        this.app.state.events.push(logData);
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        // I *believe* these next 4 are handle by superclass and can go away
        this.app.show(this.app.prevBtn);
        this.app.show(this.app.nextBtn);
        this.app.enable(this.app.prevBtn);
        this.app.enable(this.app.nextBtn);
        this.q1Form.setupEventHandlers();
        this.q2Form.setupEventHandlers();
        this.q3Form.setupEventHandlers();
    }

    handleTransition() {
        // console.log("TestResultsScene.handleTransition()");
        // console.log(this.currentTransition);
        this.hideAllForms();
        this.currentForm = this.forms[this.currentTransition];
        this.app.show(this.currentForm.form);
        if (!this.currentForm.isValid()) {
            this.app.disable(this.app.nextBtn);
        } else {
            this.app.enable(this.app.nextBtn);
        }
        switch (this.currentTransition) {
            case 0:
                this.currentTransitionStateSaver = this.saveQ1State;
                break;
            case 1:
                this.currentTransitionStateSaver = this.saveQ2State;
                this.q2TextArea.focus();
                break;
            case 2:
                this.currentTransitionStateSaver = this.saveQ3State;
                break;
            default:
                console.error(`invalid transition: ${this.currentTransition}`);
        }
    }

    post_enter() {
        // console.log("TestResultsScene.post_enter()");
        // console.log(this.forms);
        this.handleTransition();
        if (null !== this.currentState) {
            this.restoreState(this.currentState);
        }
    }

    // teardownAllFormEventHandlers() {
    //     for (let f of this.forms) {
    //         f.teardownEventHandlers();
    //     }
    // }
}



/***/ }),

/***/ "./src/scenes/testScene.js":
/*!*********************************!*\
  !*** ./src/scenes/testScene.js ***!
  \*********************************/
/*! exports provided: DiTestScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiTestScene", function() { return DiTestScene; });
/* harmony import */ var _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/scene-app-base */ "../../common/scene-app-base/index.js");


class DiTestScene extends _isptutorproject_scene_app_base__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor(app, sceneInfo) {
        super(app, sceneInfo);
        this.customActions = {
            showBtns: this.showBtns,
            hideBtns: this.hideBtns,
        };
        this.btnNames = {
            prev: this.app.prevBtn,
            next: this.app.nextBtn
        };
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
        this.app.show(this.app.prevBtn);
        this.app.show(this.app.nextBtn);
        this.app.enable(this.app.prevBtn);
        this.app.enable(this.app.nextBtn);
    }

}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL25hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2Uvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmV0ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZHVhbFRhYmxlUmVzdWx0c1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9zaW5nbGVUYWJsZVJlc3VsdHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Rlc3RSZXN1bHRzU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXN0U2NlbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNOOztBQUs5Qjs7Ozs7Ozs7Ozs7OztBQ05GO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLElBQUksT0FBTztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBTztBQUNQO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsUUFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wcmV0ZXN0LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICBsZXQgYWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgIHVzZXJJRDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIiksXG4gICAgICAgIGNsYXNzQ29kZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGFzc0NvZGVcIiksXG4gICAgICAgIGRhdGFiYXNlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFiYXNlXCIpLFxuICAgICAgICBob21lcGFnZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKSxcbiAgICAgICAgYWN0aXZpdHlLZXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5XCIpLFxuICAgICAgICBmZWF0dXJlczogKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5RmVhdHVyZXNcIikgfHwgXCJcIilcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjpcIilcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUNvbmZpZyk7XG4gICAgcmV0dXJuIGFjdGl2aXR5Q29uZmlnO1xufSIsIi8vIGFic3RyYWN0IGNsYXNzIC0gaW50ZXJmYWNlXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvZGUgPSBjbGFzc0NvZGU7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuXG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcblxuICAgIH1cblxuICAgIGdldFJRRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcblxuICAgIH1cblxuICAgIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcblxuICAgIH1cblxuICAgIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxufTtcblxuXG4iLCJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEN3pJay04VjIwUXFKTlNzMGNBVjB1TkwzcWplcUxNZE1cIixcbiAgICBhdXRoRG9tYWluOiBcImlzcHR1dG9yLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJpc3B0dXRvclwiXG59O1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIHRoaXMudXNlclJlZiA9IHRoaXMuc3RvcmUuY29sbGVjdGlvbih0aGlzLmNsYXNzQ29kZSkuZG9jKHRoaXMudXNlcklEKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgLy8gcmV0dXJucyBwcm9taXNlIHdpdGggJ2RvYycgaWYgaXQgZXhpc3RzLCBudWxsIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLmdldCgpXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYy5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG4gIFxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTj10cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJEYXRhKClcbiAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJEYXRhW2FjdGl2aXR5S2V5XTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRlY29kZUpTT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldFJRRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcInJxdGVkXCIpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gZ2V0SW5pdGlhbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiaW5pdGlhbEh5cG9cIilcbiAgICAvLyAgICAgLnRoZW4oKHN0ckRhdGEpKVxuICAgIC8vIH1cblxuICAgIC8vIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJmaW5hbEh5cG9cIilcbiAgICAvLyB9XG5cbiAgICBzZXRWYWx1ZXMob2JqZWN0LCBvdmVyd3JpdGU9ZmFsc2UpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB7bWVyZ2U6IHRydWV9IG9wdGlvbiBmb3Igc2FmZXR5XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYuc2V0KG9iamVjdCwge21lcmdlOiAhb3ZlcndyaXRlfSk7ICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlcyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi51cGRhdGUob2JqZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKHtcbiAgICAgICAgICAgIFt2YXJOYW1lXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuZGVsZXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldCh7XG4gICAgLy8gICAgICAgICBbdmFyTmFtZV06IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfSAgIFxuICAgIFxuICAgIC8vIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG59OyIsImltcG9ydCB7IExvY2FsU3RvcmFnZURCIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlREJcIjtcbmltcG9ydCB7IEZpcmVzdG9yZURCIH0gZnJvbSBcIi4vZmlyZXN0b3JlREJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERCQ29ubmVjdGlvbihkYlR5cGUpIHtcbiAgICBsZXQgZGI7XG4gICAgc3dpdGNoKGRiVHlwZSkge1xuICAgICAgICBjYXNlIFwiZmlyZXN0b3JlXCI6XG4gICAgICAgICAgICBkYiA9IG5ldyBGaXJlc3RvcmVEQigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkYiA9IG5ldyBMb2NhbFN0b3JhZ2VEQigpO1xuICAgIH1cbiAgICByZXR1cm4gZGI7IFxufVxuIiwiXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIE5PVEU6IHRoaXMgQVBJIG11c3QgdXNlIHByb21pc2VzIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBhbnkgZGJcbi8vIHdlIG1heSBiZSB1c2luZywgd2hpY2ggbWF5IGJlIGVpdGhlciBzeW5jIG9yIGFzeW5jXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwiY2xhc3NDb2RlXCIsIGNsYXNzQ29kZSksXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwidXNlcklEXCIsIHVzZXJJRCksXG4gICAgICAgIC8vIF0pLnRoZW4oKFtyZXN1bHQxLCByZXN1bHQyXSkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5jb3VudChcImdldFVzZXJEYXRhKCkgY2FsbGVkXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJjbGFzc0NvZGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldFRleHRWYWx1ZShcInVzZXJJRFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIiksXG4gICAgICAgICAgICB0aGlzLmdldEN1cnJIeXBvVGFzaygpLFxuICAgICAgICAgICAgdGhpcy5nZXRJbnRpYWxIeXBvRGF0YSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRGaW5hbEh5cG9EYXRhKClcbiAgICAgICAgXSkudGhlbigoW2NjUmVzLCB1aWRSZXMsIHJxUmVzLCBjaHRSZXMsIGloUmVzLCBmaFJlc10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NDb2RlID0gY2NSZXM7XG4gICAgICAgICAgICBkYXRhLnVzZXJJRCA9IHVpZFJlcztcbiAgICAgICAgICAgIGRhdGEucnF0ZWQgPSBycVJlcztcbiAgICAgICAgICAgIGlmIChjaHRSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJIeXBvVGFza0lkeCA9IGNodFJlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGloUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBpaFJlcy5maXJzdFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0aWFsSHlwbyA9IGloUmVzLmluaXRpYWxIeXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZoUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gZmhSZXMuc2Vjb25kUHJlZGljdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZoUmVzLmZpbmFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT04gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShhY3Rpdml0eUtleSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmICFkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZUpTT05WYWx1ZShhY3Rpdml0eUtleSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpdml0eURhdGEoXCJycXRlZFwiKVxuICAgICAgICAudGhlbigocnF0ZWQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJxdGVkKTtcbiAgICAgICAgICAgIGlmIChycXRlZCkge1xuICAgICAgICAgICAgICAgIHJldFZhbCA9IHJxdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcnEgaXNuJ3Qgc2VsZWN0ZWQgaGFyZC1jb2RlIHRvIGNyeXN0YWwgZ3Jvd3RoXG4gICAgICAgICAgICAgICAgcmV0VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVTdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcmVhOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhYmxlOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJROiB7IGluZGV4OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW50VmFsdWUoXCJjdXJySHlwb1Rhc2tJZHhcIilcbiAgICB9XG5cbiAgICBnZXRJbnRpYWxIeXBvRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dFZhbHVlKFwiZmlyc3RQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6Zmlyc3RQcmVkaWN0aW9uICR7cHJlZDF9YCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gcHJlZDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShcImluaXRpYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChpbml0SHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRJbml0aWFsSHlwb0RhdGEoKTppbml0SHlwbyAke2luaXRIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpbml0SHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcInNlY29uZFByZWRpY3Rpb25cIilcbiAgICAgICAgICAgIC50aGVuKChwcmVkMikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6c2Vjb25kUHJlZGljdGlvbiAke3ByZWQyfWApXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IHByZWQyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJmaW5hbEh5cG9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGZpbmFsSHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6ZmluYWxIeXBvICR7ZmluYWxIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuZmluYWxIeXBvID0gZmluYWxIeXBvO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIG92ZXJ3cml0ZSBwYXJhbSBpcyBpZ25vcmVkLCBhcyBpdCBpcyBzcGVjaWZpYyB0byBmaXJlc3RvcmVcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5pdGVtcyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YXJOYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXCJ0cnVlXCIgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8vIGxldCBkYiA9IG5ldyBEYXRhYmFzZShcIkJPR1VTX0NMQVNTXCIsIFwiQk9HVVNfU1RVREVOVFwiKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2Lm5hdmJhclwiKTtcbiAgICAgICAgdGhpcy5ob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJfaG9tZV9idG5cIik7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlfdGl0bGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbl9vdXRfYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnNpZ25JblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25faW5fdGV4dFwiKTtcbiAgICAgICAgdGhpcy5nb0hvbWUgICAgICA9IHRoaXMuZ29Ib21lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2lnbk91dFVzZXIgPSB0aGlzLnNpZ25PdXRVc2VyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ29Ib21lKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNpZ25PdXRVc2VyKTtcbiAgICB9XG5cbiAgICBnb0hvbWUoZSkge1xuICAgICAgICBsZXQgaG9tZVBhZ2UgPSB0aGlzLmNhbGNIb21lUGFnZSgpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0VG8oaG9tZVBhZ2UpO1xuICAgIH1cblxuICAgIGNhbGNIb21lUGFnZSgpIHtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKTtcbiAgICAgICAgaWYgKG51bGwgPT09IGhvbWVQYWdlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG9tZVBhZ2U7XG4gICAgfVxuXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgLy8gcHJldmVudCByZWZyZXNoIGlmIGFscmVhZHkgb24gdGhpcyBwYWdlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gdXJsKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNpZ25PdXRVc2VyKGUpIHtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gdGhpcy5jYWxjSG9tZVBhZ2UoKTtcbiAgICAgICAgLy8gdGhpcyBkb2VzIHRoZSBhY3R1YWwgc2lnbmluZyBvdXRcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUbyhob21lUGFnZSk7XG4gICAgfVxuXG4gICAgZGlzcGxheUFjdGl2aXR5VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5VXNlcih1c2VyTmFtZSkge1xuICAgICAgICB0aGlzLnNpZ25JblRleHQuaW5uZXJIVE1MID0gYFdlbGNvbWUsICR7dXNlck5hbWV9YDtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBnZXREQkNvbm5lY3Rpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9pc3AtZGF0YWJhc2VcIjtcbmltcG9ydCB7IFNuYWNrQmFyfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zbmFja2JhclwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVCYXNlZEFwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSwgYWN0aXZpdHlDb25maWcsIGRlZmF1bHRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZURhdGEgPSBhcHBEYXRhLnNjZW5lcztcbiAgICAgICAgdGhpcy5hY3Rpdml0eUNvbmZpZyA9IGFjdGl2aXR5Q29uZmlnO1xuICAgICAgICB0aGlzLmRiID0gZ2V0REJDb25uZWN0aW9uKGFjdGl2aXR5Q29uZmlnLmRhdGFiYXNlKTtcbiAgICAgICAgdGhpcy5kYi5zZXRDcmVkZW50aWFscyhhY3Rpdml0eUNvbmZpZy5jbGFzc0NvZGUsIGFjdGl2aXR5Q29uZmlnLnVzZXJJRCk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlLZXkgPSBhY3Rpdml0eUNvbmZpZy5hY3Rpdml0eUtleTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U3RhdGUgPSBkZWZhdWx0SW5pdGlhbFN0YXRlO1xuXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbiAgICAgICAgdGhpcy5ob21lUGFnZUJ0biA9IG51bGw7XG4gICAgICAgIGxldCBob21lUGFnZUJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvX2hvbWVfcGFnZVwiKTtcbiAgICAgICAgdGhpcy5uZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbiAgICAgICAgdGhpcy5wcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2X2J0blwiKTtcbiAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZV9pZF9yZWdpb25cIik7XG4gICAgICAgIGlmIChob21lUGFnZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5ob21lUGFnZUJ0biA9IGhvbWVQYWdlQnRuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlR29Ib21lUGFnZSA9IHRoaXMuaGFuZGxlR29Ib21lUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5leHQgPSB0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQcmV2ID0gdGhpcy5oYW5kbGVQcmV2LmJpbmQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmhvbWVQYWdlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTmV4dCk7XG4gICAgICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQcmV2KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc2NlbmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IG51bGw7XG4gICAgICAgIC8vIGlzIHRoaXMgbmVlZGVkPz8/XG4gICAgICAgIHRoaXMuYm9ndXNTY2VuZUluZm8gPSB7XG4gICAgICAgICAgICBpZDogXCJOL0FcIixcbiAgICAgICAgICAgIHNjZW5lVHlwZTogXCJib2d1c1wiXG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hcHAgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVSZXNpemUoZXZlbnQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICByZXNpemVDb250ZW50KCkge1xuICAgICAgICBsZXQgc0VsLCBjRWwsIHNXaWR0aCwgc0hlaWdodCwgY1dpZHRoLCBjSGVpZ2h0LCBzYztcbiAgICAgICAgc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY2VuZS5hY3RpdmVcIik7XG4gICAgICAgIGlmIChzRWwpIHtcbiAgICAgICAgICAgIGNFbCA9IHNFbC5xdWVyeVNlbGVjdG9yKFwiLnNjZW5lLWNvbnRlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNFbCkge1xuICAgICAgICAgICAgc1dpZHRoICA9IHNFbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHNIZWlnaHQgPSBzRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY1dpZHRoICA9IGNFbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNIZWlnaHQgPSBjRWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgc2MgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICBzV2lkdGggLyBjV2lkdGgsXG4gICAgICAgICAgICAgICAgc0hlaWdodCAvIGNIZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgke3NjfSlgO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBzZXRTbmFja2JhcihzbmFja2Jhcikge1xuICAgIC8vICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG4gICAgLy8gfVxuXG4gICAgc2hvd0ZlZWRiYWNrKGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc25hY2tiYXIuc2hvdyhmZWVkYmFjayk7XG4gICAgfVxuXG4gICAgaGFuZGxlR29Ib21lUGFnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYWN0aXZpdHlDb25maWcuaG9tZXBhZ2VcbiAgICB9XG5cbiAgICBoYW5kbGVQcmV2KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZVByZXZCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZU5leHRCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRTdGFydFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInNldFN0YXJ0U2NlbmUoKVwiLCBzY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gc2NlbmVJZDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGluZ1wiKTtcbiAgICAgICAgdGhpcy5nZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgICAudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBhY3Rpdml0eSBkYXRhIGluIGRiLiB1c2luZyBpbml0aWFsIGRhdGFcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgU2NlbmVzXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgc2NlbmUgZm9yICR7c2NlbmVJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lT2JqID0gdGhpcy5jcmVhdGVTY2VuZSh0aGlzLnNjZW5lRGF0YVtzY2VuZUlkXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0gPSBzY2VuZU9iajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdG9yaW5nIEFwcCBTdGF0ZVwiKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVTdGF0ZSA9IHRoaXMuc3RhdGUuc2NlbmVTdGF0ZVtzY2VuZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0ucmVzdG9yZVN0YXRlKHNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0b3JpbmcgQ3VycmVudCBTY2VuZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhdGUuY3VycmVudFNjZW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKHRoaXMuc2NlbmVEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjZW5lcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0YXJ0U2NlbmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBcHBTdGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkxvYWRpbmcgQXBwIFN0YXRlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5nZXRBY3Rpdml0eURhdGEodGhpcy5hY3Rpdml0eUtleSk7XG4gICAgfVxuXG4gICAgc2F2ZUFwcFN0YXRlKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2F2aW5nIEFwcCBTdGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuc2V0QWN0aXZpdHlEYXRhKHRoaXMuYWN0aXZpdHlLZXksIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICAvLyB5b3UnbGwgd2FudCB0byBvdmVycmlkZSB0aGlzIHRvIGRvIGFueXRoaW5nIHVzZWZ1bFxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiY3JlYXRlU2NlbmUoKVwiLCBzY2VuZUluZm8sIHNjZW5lU3RhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgc3dpdGNoVG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLmxvZ1NjZW5lQ2hhbmdlKHNjZW5lKTtcbiAgICAgICAgdGhpcy5nb3RvU2NlbmUoc2NlbmUpO1xuICAgIH1cblxuICAgIGdvdG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAodGhpcy5wcmV2U2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLnByZV9leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5wb3N0X2V4aXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wcmVfZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucG9zdF9lbnRlcigpO1xuICAgICAgICAvLyBkZWxldGUgdGhpcy5wcmV2U2NlbmU7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvb2t1cFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVJZF07XG4gICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SOiBubyBzdWNoIHNjZW5lICR7c2NlbmVJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuXG4gICAgZm9sbG93RWRnZShlZGdlTmFtZSkge1xuICAgICAgICBsZXQgbmV3U2NlbmVJZCA9IHRoaXMuY3VycmVudFNjZW5lLmVkZ2VzW2VkZ2VOYW1lXTtcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5sb29rdXBTY2VuZShuZXdTY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUb1NjZW5lKG5ld1NjZW5lKTtcbiAgICB9XG5cbiAgICBsb2dTY2VuZUNoYW5nZShzY2VuZSkge1xuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0NFTkVfVFJBTlNJVElPTlwiLFxuICAgICAgICAgICAgZnJvbTogdGhpcy5jdXJyZW50U2NlbmUuaWQsXG4gICAgICAgICAgICB0bzogc2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgfVxuXG5cbiAgICBnb3RvU3RhcnRTY2VuZSgpIHtcbiAgICAgICAgLy8gYnlwYXNzZXMgc3dpdGNoVG9TY2VuZSgpIGFuZCB0aHVzIGxvZ1NjZW5lQ2hhbmdlKClcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICBsZXQgc3RhcnRTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmUpIHtcbiAgICAgICAgICAgIHN0YXJ0U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhcnRTY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcIkFQUF9TVEFSVFwiLFxuICAgICAgICAgICAgc2NlbmU6ICBzdGFydFNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiVXBkYXRpbmcgc3RhdGUuZXZlbnRzXCIpO1xuICAgICAgICB0aGlzLmdvdG9TY2VuZShzdGFydFNjZW5lKTtcbiAgICB9XG5cblxuICAgIGhpZGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBzaG93KGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgbWFrZUludmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlVmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcblxuZXhwb3J0IHtcbiAgICBTY2VuZUJhc2VkQXBwLFxuICAgIFNjZW5lXG59O1xuIiwiZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uRm9ybSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBmb3JtSW5mbywgZWxlSWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGZvcm1JbmZvO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIHRoaXMucmFkaW9zID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybSBpcyB2YWxpZDpcIiwgdmFsaWRpdHkpO1xuICAgICAgICByZXR1cm4gdmFsaWRpdHk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gZGlydHkgc3RhdGUgc28gaXQgd2lsbCBnZXQgc2F2ZWQgbGF0ZXIgb25cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZWFyZG93bkV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldENvcnJlY3RuZXNzKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgIClcbiAgICAgICAgbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gbGV0IGFuc1RleHQgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgY29ycmVjdEFuc3dlciA9IHNmaS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICBsZXQgaXNDb3JyZWN0O1xuXG4gICAgICAgIGlmIChcIk4vQVwiID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0NvcnJlY3Q7XG4gICAgfVxuXG4gICAgZ2V0RmVlZGJhY2soKSB7XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0NvcnJlY3QsIHNmaSk7XG4gICAgICAgIGxldCBmYlRleHQsIGZiQ2xhc3NOYW1lLCBmYk1zZztcbiAgICAgICAgc3dpdGNoKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibmVnLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihmYlRleHQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHNmaS5udGxGYikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZmJUZXh0KSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCIke2ZiQ2xhc3NOYW1lfVwiPiR7ZmJUZXh0fTwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYk1zZztcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgICk7XG4gICAgICAgIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIGxldCBsYmwgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBxdWVzdGlvblR5cGU6IHNmaS50eXBlLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBzZmkudGV4dCxcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlSWQ6IHNlbGVjdGVkQW5zd2VyLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogdmFsLFxuICAgICAgICAgICAgc2VsZWN0ZWRMYWJlbDogbGJsLFxuICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZm9ybSB0byBub24tZGlydHkgc3RhdGUsIHNvIHdlIGRvbid0IHJlc3VibWl0IHVubGVzcyB0aGV5XG4gICAgICAgIC8vIGNoYW5nZSBhZ2FpblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgXFx0SW5pdGlhbGl6aW5nIFNjZW5lOiAke3NjZW5lSW5mby5pZH1gKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIC8vIGNvcHkgYWxsIHNjZW5lSW5mbyB0byAndGhpcydcbiAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNjZW5lSW5mbykpIHtcbiAgICAgICAgICAgIHRoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgLy8gYmluZCBldmVudCBoYW5kbGVyc1xuICAgICAgICB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24gPSB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93QnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlQnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGhhbmRsZUZvbGxvd0VkZ2VCdXR0b24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBlZGdlTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuZWRnZTtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShlZGdlTmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0Rm9sbG93RWRnZUVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9sbG93LWVkZ2VcIik7XG4gICAgfVxuXG4gICAgc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRGb2xsb3dFZGdlRWxlbWVudHMoKSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiwgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlU3RhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRSZXN0b3JpbmcgU2NlbmUgU3RhdGUgZm9yOiAke3RoaXMuaWR9IGApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9pc0JvZ3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCA9PT0gXCJOL0FcIiB8fCB0aGlzLnNjZW5lVHlwZSA9PT0gXCJib2d1c1wiO1xuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJwcmV2XCIpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJuZXh0XCIpO1xuICAgIH1cblxuICAgIGhhc0Zvcm0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByZV9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgRW50ZXJpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlxcdFVwZGF0aW5nIHN0YXRlLmN1cnJlbnRTY2VuZVwiKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuY3VycmVudFNjZW5lID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRW50ZXJBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZW50ZXIoKSB7XG5cbiAgICB9XG5cbiAgICBwcmVfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFeGl0aW5nIFNjZW5lOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRXhpdEFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0X2V4aXQoKSB7XG5cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5hcHAucmVzaXplQ29udGVudCgpO1xuICAgICAgICB0aGlzLnNldHVwRm9sbG93RWRnZUV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUZXh0YXJlYUZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgZm9ybUluZm8sIGVsZUlkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMuZm9ybUluZm8gPSBmb3JtSW5mbztcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLnRleHRhcmVhID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm0gaXMgdmFsaWQ6XCIsIHZhbGlkaXR5KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5O1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIGRpcnR5IHN0YXRlIHNvIGl0IHdpbGwgZ2V0IHNhdmVkIGxhdGVyIG9uXG4gICAgICAgIGlmICh0aGlzLnRleHRhcmVhLnZhbHVlLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAvLyBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAvLyAgICAgcmIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICB0ZWFyZG93bkV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgIC8vICAgICByYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy50ZXh0YXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgIH1cblxuXG4gICAgZ2V0Q29ycmVjdG5lc3MoKSB7XG4gICAgICAgIC8vIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgLy8gICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgLy8gKVxuICAgICAgICAvLyBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICAvLyAvLyBsZXQgYW5zVGV4dCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIC8vIGxldCBjb3JyZWN0QW5zd2VyID0gc2ZpLmNvcnJlY3RBbnN3ZXI7XG4gICAgICAgIC8vIGxldCBpc0NvcnJlY3Q7XG5cbiAgICAgICAgLy8gaWYgKFwiTi9BXCIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgLy8gICAgIGlzQ29ycmVjdCA9IG51bGw7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoY29ycmVjdEFuc3dlciA9PT0gdmFsKSB7XG4gICAgICAgIC8vICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGlzQ29ycmVjdDtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RmVlZGJhY2soKSB7XG4gICAgICAgIC8vIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhpc0NvcnJlY3QsIHNmaSk7XG4gICAgICAgIGxldCBmYlRleHQsIGZiQ2xhc3NOYW1lLCBmYk1zZztcbiAgICAgICAgLy8gc3dpdGNoIChpc0NvcnJlY3QpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgLy8gICAgICAgICBmYlRleHQgPSBzZmkucG9zRmI7XG4gICAgICAgIC8vICAgICAgICAgZmJDbGFzc05hbWUgPSBcInBvcy1mZWVkYmFja1wiO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgLy8gICAgICAgICBmYlRleHQgPSBzZmkubmVnRmI7XG4gICAgICAgIC8vICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm5lZy1mZWVkYmFja1wiO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgIC8vICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm50bC1mZWVkYmFja1wiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0eXBlb2YgKGZiVGV4dCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoc2ZpLm50bEZiKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm50bC1mZWVkYmFja1wiO1xuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZmJUZXh0KSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCIke2ZiQ2xhc3NOYW1lfVwiPiR7ZmJUZXh0fTwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYk1zZztcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgLy8gbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIC8vICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgIC8vICk7XG4gICAgICAgIC8vIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIC8vIGxldCBsYmwgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy50ZXh0YXJlYS52YWx1ZS50cmltKCk7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVHlwZTogc2ZpLnR5cGUsXG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IHNmaS50ZXh0LFxuICAgICAgICAgICAgLy8gc2VsZWN0ZWRFbGVJZDogc2VsZWN0ZWRBbnN3ZXIuaWQsXG4gICAgICAgICAgICAvLyBzZWxlY3RlZFZhbHVlOiB2YWwsXG4gICAgICAgICAgICAvLyBzZWxlY3RlZExhYmVsOiBsYmwsXG4gICAgICAgICAgICBhbnN3ZXI6IGFuc3dlcixcbiAgICAgICAgICAgIGlzQ29ycmVjdDogaXNDb3JyZWN0LFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gbm9uLWRpcnR5IHN0YXRlLCBzbyB3ZSBkb24ndCByZXN1Ym1pdCB1bmxlc3MgdGhleVxuICAgICAgICAvLyBjaGFuZ2UgYWdhaW5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICAvLyBnZXRGb3JtRGF0YSgpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZUZvcm1TdWJtaXQoZSkge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcblxuICAgIC8vICAgICAgICAgbGV0IGZiVGV4dDtcbiAgICAvLyAgICAgICAgIGxldCBmYkNsYXNzTmFtZTtcblxuICAgIC8vICAgICAgICAgaWYgKFwibi9hXCIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAvLyAgICAgICAgICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgIC8vICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAvLyAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgLy8gICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgIC8vICAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLnBvc0ZiO1xuICAgIC8vICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJwb3MtZmVlZGJhY2tcIjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm5lZ0ZiO1xuICAgIC8vICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gJ25lZy1mZWVkYmFjayc7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlmICghZmJUZXh0KSB7XG4gICAgLy8gICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgIC8vICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gJ250bC1mZWVkYmFjayc7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIHRoaXMuYXBwLnNob3dGZWVkYmFjayhmYk1zZyk7XG4gICAgLy8gICAgICAgICAvLyB3aGF0IHdlIHdhbnQgdG8gc3RvcmUgaW4gZmlyZXN0b3JlXG4gICAgLy8gfVxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cobG9nKTtcblxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgbGV0IGZiTXNnID0gYDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5QbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbjwvc3Bhbj5gO1xuICAgIC8vICAgICAgICAgdGhpcy5hcHAuc2hvd0ZlZWRiYWNrKGZiTXNnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVJRCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSUQgfHwgXCJzbmFja2JhclwiKTtcbiAgICB9XG5cbiAgICBzaG93KHRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZih0ZXh0KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBudWxsICE9PSB0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIFwic2hvd1wiIGNsYXNzIHRvIERJVlxuICAgICAgICAgICAgLy8gdGhpcy5lbC5jbGFzc05hbWUgPSBcInNob3dcIjtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICAvLyBBZnRlciAzIHNlY29uZHMsIHJlbW92ZSB0aGUgc2hvdyBjbGFzcyBmcm9tIERJVlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc25hY2tiYXIuY2xhc3NOYW1lID0gc25hY2tiYXIuY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L25hdmJhclwiO1xuXG5pbXBvcnQgeyBTY2VuZUJhc2VkQXBwIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2VcIjtcbmltcG9ydCB7XG4gICAgRGlUZXN0U2NlbmUsXG4gICAgRGlEdWFsVGFibGVSZXN1bHRzU2NlbmUsXG4gICAgRGlTaW5nbGVUYWJsZVJlc3VsdHNTY2VuZVxufSBmcm9tIFwiLi9zY2VuZXNcIjtcblxuZXhwb3J0IGNsYXNzIERpVGVzdEFwcCBleHRlbmRzIFNjZW5lQmFzZWRBcHB7XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgbGV0IHNjZW5lO1xuICAgICAgICBzd2l0Y2goc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImNhclJlc3VsdHNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRzUmVzdWx0c1wiOlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IERpU2luZ2xlVGFibGVSZXN1bHRzU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaWJyYXJ5UmVzdWx0c1wiOlxuICAgICAgICAgICAgY2FzZSBcIm1lbW9yeVJlc3VsdHNcIjpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBEaUR1YWxUYWJsZVJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBEaVRlc3RTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cblxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRGlUZXN0QXBwIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L25hdmJhclwiO1xuXG5pbXBvcnQgeyBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9hY3Rpdml0eS1jb25maWdcIjtcblxuXG5jb25zdCBERUZBVUxUX0FQUF9JTklUSUFMX1NUQVRFID0ge1xuICAgIGV2ZW50czogW10sXG4gICAgLy8gbWFwcGluZyBvZiBzY2VuZUlEcyAtPiBzY2VuZS10eXBlIHNwZWNpZmljIGRhdGFcbiAgICBzY2VuZVN0YXRlOiB7fSxcbiAgICBjdXJyZW50U2NlbmU6IFwic3RhcnRcIlxufTtcblxuXG5sZXQgYWN0aXZpdHlDb25maWcgPSBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24oKTtcbmNvbnN0IGFjdGl2aXR5RGF0YSA9IHJlcXVpcmUoXCIuLi9kYXRhL2RpUHJlVGVzdC5qc29uXCIpO1xuXG5sZXQgbmF2YmFyID0gbmV3IE5hdkJhcigpO1xubmF2YmFyLmRpc3BsYXlBY3Rpdml0eVRpdGxlKFwiRGF0YSBJbnRlcnByZXRhdGlvbiBQcmUtVGVzdFwiKTtcbm5hdmJhci5kaXNwbGF5VXNlcihhY3Rpdml0eUNvbmZpZy51c2VySUQpO1xuXG4vLyBjb25zb2xlLmxvZyhhY3Rpdml0eUNvbmZpZyk7XG5cbmxldCBhcHAgPSBuZXcgRGlUZXN0QXBwKFxuICAgIGFjdGl2aXR5RGF0YSwgYWN0aXZpdHlDb25maWcsIERFRkFVTFRfQVBQX0lOSVRJQUxfU1RBVEVcbik7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGFwcC5zZXRTdGFydFNjZW5lKFwic3RhcnRcIik7XG59XG5hcHAuc3RhcnQoKVxuXG4iLCJpbXBvcnQgeyBEaVRlc3RSZXN1bHRzU2NlbmUgfSBmcm9tIFwiLi90ZXN0UmVzdWx0c1NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEaUR1YWxUYWJsZVJlc3VsdHNTY2VuZSBleHRlbmRzIERpVGVzdFJlc3VsdHNTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWREYXRhID0gdGhpcy5zaG93U29ydGVkRGF0YS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9jb21wYXJlUm93cyhhLCBiKSB7XG4gICAgICAgIC8vIGNvbXBhcmVzIDJuZCBjb2x1bW4gb2Ygcm93cyBhcyBpbnRlZ2Vyc1xuICAgICAgICBsZXQgYTEgPSBwYXJzZUZsb2F0KGEucXVlcnlTZWxlY3RvckFsbChcInRkXCIpWzFdLmlubmVyVGV4dCk7XG4gICAgICAgIGxldCBiMSA9IHBhcnNlRmxvYXQoYi5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV0uaW5uZXJUZXh0KTtcbiAgICAgICAgcmV0dXJuIGExIC0gYjE7XG4gICAgfVxuXG4gICAgX3NvcnRUYWJsZSh0YWJsZSkge1xuICAgICAgICBsZXQgdGJvZHkgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG4gICAgICAgIGxldCByb3dzID0gWy4uLnRib2R5LnJvd3NdO1xuICAgICAgICB0Ym9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICByb3dzLnNvcnQodGhpcy5fY29tcGFyZVJvd3MpO1xuICAgICAgICBmb3IgKGxldCByb3cgb2Ygcm93cykge1xuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dTb3J0ZWREYXRhKCkge1xuICAgICAgICBsZXQgbGVmdFRhYmxlID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFwidGFibGUuZGF0YS10YWJsZS5sZWZ0LXRhYmxlXCIpO1xuICAgICAgICBsZXQgcmlnaHRUYWJsZSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihcInRhYmxlLmRhdGEtdGFibGUucmlnaHQtdGFibGVcIik7XG4gICAgICAgIHRoaXMuX3NvcnRUYWJsZShsZWZ0VGFibGUpO1xuICAgICAgICB0aGlzLl9zb3J0VGFibGUocmlnaHRUYWJsZSk7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCB7IERpVGVzdFNjZW5lIH0gZnJvbSBcIi4vdGVzdFNjZW5lXCI7XG5pbXBvcnQgeyBEaVNpbmdsZVRhYmxlUmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vc2luZ2xlVGFibGVSZXN1bHRzU2NlbmVcIjtcbmltcG9ydCB7IERpRHVhbFRhYmxlUmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vZHVhbFRhYmxlUmVzdWx0c1NjZW5lXCI7XG5cbmV4cG9ydCB7XG4gICAgRGlUZXN0U2NlbmUsXG4gICAgRGlEdWFsVGFibGVSZXN1bHRzU2NlbmUsXG4gICAgRGlTaW5nbGVUYWJsZVJlc3VsdHNTY2VuZVxufTsiLCJpbXBvcnQgeyBEaVRlc3RSZXN1bHRzU2NlbmUgfSBmcm9tIFwiLi90ZXN0UmVzdWx0c1NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEaVNpbmdsZVRhYmxlUmVzdWx0c1NjZW5lIGV4dGVuZHMgRGlUZXN0UmVzdWx0c1NjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZERhdGEgPSB0aGlzLnNob3dTb3J0ZWREYXRhLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX3NvcnRUYWJsZSh0YWJsZSkge1xuICAgICAgICAvLyBncmFicyBjb2x1bW4gdmFsdWVzIGZyb20gdGJvZHkgcm93cywgc29ydHMgdGhlbSBpbmRlcGVuZGVudGx5XG4gICAgICAgIC8vIGFuZCB0aGVuIHJlLWFkZHMgdGhlbSBhcyBzb3J0ZWQgcm93cyB1c2luZyB0aGUgY29sdW1uIGFycmF5c1xuICAgICAgICBsZXQgdGJvZHkgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG4gICAgICAgIGxldCByb3dzID0gWy4uLnRib2R5LnJvd3NdO1xuICAgICAgICB0Ym9keS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsZXQgY29sMVZhbHMgPSByb3dzLm1hcCgodHIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVswXS5pbm5lclRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNvbDJWYWxzID0gcm93cy5tYXAoKHRyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0ci5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMV0uaW5uZXJUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbDFWYWxzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgY29sMlZhbHMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbDFWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICBsZXQgY29sMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGxldCBjb2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgY29sMS5pbm5lclRleHQgPSBjb2wxVmFsc1tpXTtcbiAgICAgICAgICAgIGNvbDIuaW5uZXJUZXh0ID0gY29sMlZhbHNbaV07XG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZChjb2wxKTtcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKGNvbDIpXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1NvcnRlZERhdGEoKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihcInRhYmxlLmRhdGEtdGFibGUuY2VudGVyLXRhYmxlXCIpO1xuICAgICAgICB0aGlzLl9zb3J0VGFibGUodGFibGUpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBEaVRlc3RTY2VuZSB9IGZyb20gXCIuL3Rlc3RTY2VuZVwiO1xuXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkZvcm0gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZS9yYWRpby1idXR0b24tZm9ybVwiO1xuaW1wb3J0IHsgVGV4dGFyZWFGb3JtIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybVwiO1xuXG5jb25zdCBGSVJTVF9UUkFOU0lUSU9OID0gMDtcbmNvbnN0IExBU1RfVFJBTlNJVElPTiA9IDI7XG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gbnVsbDtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB0aGUgZmlyc3QgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uID0gRklSU1RfVFJBTlNJVElPTjtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zYXZlUTFTdGF0ZSA9IHRoaXMuc2F2ZVExU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlUTJTdGF0ZSA9IHRoaXMuc2F2ZVEyU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlUTNTdGF0ZSA9IHRoaXMuc2F2ZVEzU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXZlYWxTdGF0SGFuZGxlciA9IHRoaXMucmV2ZWFsU3RhdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTb3J0RGF0YSA9IHRoaXMuaGFuZGxlU29ydERhdGEuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNob3dTb3J0ZWREYXRhQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc2hvd19zb3J0ZWRfdGFibGVgKTtcbiAgICAgICAgdGhpcy5zb3J0ZWRUYWJsZVRleHQgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zb3J0ZWRfdGV4dGApO1xuXG4gICAgICAgIC8vIHRoaXMuc29ydGVkSW1nICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zb3J0ZWRgKTtcbiAgICAgICAgLy8gdGhpcy51bnNvcnRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Vuc29ydGVkYCk7XG5cbiAgICAgICAgdGhpcy5xMlRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfYW5zd2VyYCk7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcm0gPSBudWxsO1xuICAgICAgICB0aGlzLnExRm9ybSA9IG5ldyBSYWRpb0J1dHRvbkZvcm0oXG4gICAgICAgICAgICB0aGlzLmFwcCwgc2NlbmVJbmZvLnF1ZXN0aW9ucy5xMSwgYCR7dGhpcy5pZH1fcTFfZm9ybWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xMkZvcm0gPSBuZXcgVGV4dGFyZWFGb3JtKFxuICAgICAgICAgICAgdGhpcy5hcHAsIHNjZW5lSW5mby5xdWVzdGlvbnMucTIsIGAke3RoaXMuaWR9X3EyX2Zvcm1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucTNGb3JtID0gbmV3IFJhZGlvQnV0dG9uRm9ybShcbiAgICAgICAgICAgIHRoaXMuYXBwLCBzY2VuZUluZm8ucXVlc3Rpb25zLnEzLCBgJHt0aGlzLmlkfV9xM19mb3JtYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZvcm1zID0gW1xuICAgICAgICAgICAgdGhpcy5xMUZvcm0sXG4gICAgICAgICAgICB0aGlzLnEyRm9ybSxcbiAgICAgICAgICAgIHRoaXMucTNGb3JtXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucTJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfdGV4dGApO1xuICAgICAgICB0aGlzLnEzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EzX3RleHRgKTtcblxuICAgICAgICB0aGlzLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKSB7XG4gICAgICAgIHN1cGVyLnJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKTtcbiAgICAgICAgaWYgKHNjZW5lU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZTo6cmVzdG9yZVN0YXRlKClcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHNjZW5lU3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLmN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvbiA9IHNjZW5lU3RhdGUuY3VycmVudFRyYW5zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xMVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjZW5lU3RhdGUucTFTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHNvbWV0aGluZyBpcyB2ZXJ5IHdyb25nIGlmIHdlIGRvbid0IGhhdmUgYm90aCBxMVNlbGVjdGlvblxuICAgICAgICAgICAgICAgIC8vIGFuZCBhMUFuc3dlciBzdG9yZWRcbiAgICAgICAgICAgICAgICB0aGlzLnExQW5zd2VyID0gc2NlbmVTdGF0ZS5xMUFuc3dlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVEyQW5kUTNUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xMkFuc3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucTJUZXh0QXJlYS52YWx1ZSA9IHNjZW5lU3RhdGUucTJBbnN3ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xM1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjZW5lU3RhdGUucTNTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgc2lkZSBvZiBbXCJsZWZ0XCIsIFwicmlnaHRcIl0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdGF0IG9mIFtcIm1lYW5cIiwgXCJtZWRpYW5cIiwgXCJtb2RlXCIsIFwicmFuZ2VcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGVbYCR7c2lkZX1fJHtzdGF0fV9zaG93bmBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldmVhbFN0YXQoc2lkZSwgc3RhdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLmRhdGFTb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTb3J0ZWREYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlU29ydEJ0bldpdGhUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTY2VuZVN0YXRlKGRpZmYpIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLmN1cnJlbnRTdGF0ZSwgZGlmZik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuc2NlbmVTdGF0ZVt0aGlzLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXZlYWxTdGF0KHNpZGUsIHN0YXQpIHtcbiAgICAgICAgbGV0IGJ0bkVsICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9XyR7c3RhdH1gKTtcbiAgICAgICAgbGV0IHN0YXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9XyR7c2lkZX1fJHtzdGF0fWApO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKGJ0bkVsKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyhzdGF0RWwpO1xuICAgIH1cblxuXG4gICAgcmVwbGFjZVNvcnRCdG5XaXRoVGV4dCgpIHtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnNob3dTb3J0ZWREYXRhQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZFRhYmxlVGV4dCk7XG4gICAgfVxuXG4gICAgcmV2ZWFsU3RhdEhhbmRsZXIoZSkge1xuICAgICAgICBsZXQgW18xLCBfMiwgc2lkZSwgc3RhdF0gPSBlLnRhcmdldC5pZC5yZXBsYWNlKHRoaXMuaWQsIFwiXCIpLnNwbGl0KFwiX1wiKTtcbiAgICAgICAgdGhpcy5yZXZlYWxTdGF0KHNpZGUsIHN0YXQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoeyBbYCR7c2lkZX1fJHtzdGF0fV9zaG93bmBdOiB0cnVlIH0pXG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdSRVZFQUxfU1RBVCcsXG4gICAgICAgICAgICBzaWRlOiBzaWRlLFxuICAgICAgICAgICAgc3RhdDogc3RhdCxcbiAgICAgICAgICAgIHRpbWU6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU29ydERhdGEoZSkge1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWREYXRhKCk7XG4gICAgICAgIHRoaXMucmVwbGFjZVNvcnRCdG5XaXRoVGV4dCgpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcIkRBVEFfU09SVEVEXCIsXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1wiZGF0YVNvcnRlZFwiOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaGlkZUFsbEZvcm1zKCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZm9ybXMpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUoZi5mb3JtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb3JtLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyKHRoaXMuY3VycmVudEZvcm0uZ2V0RGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRklSU1RfVFJBTlNJVElPTiA9PT0gdGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcInByZXZcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uLS07XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb3JtLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyKHRoaXMuY3VycmVudEZvcm0uZ2V0RGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTEFTVF9UUkFOU0lUSU9OID09PSB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKFwibmV4dFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb24rKztcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBidG4gb2YgdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmVhbC1zdGF0XCIpKSB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmV2ZWFsU3RhdEhhbmRsZXIsIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U29ydGVkRGF0YUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLCB0aGlzLmhhbmRsZVNvcnREYXRhLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZVEyQW5kUTNUZXh0KCkge1xuICAgICAgICBsZXQgcGhSZXBsID0gYDxzcGFuIGNsYXNzPVwicTEtYW5zd2VyXCI+JHt0aGlzLnExQW5zd2VyfTwvc3Bhbj5gO1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0ID0gdGhpcy5xdWVzdGlvbnMucTIudGV4dC5yZXBsYWNlKFxuICAgICAgICAgICAgXCJQTEFDRUhPTERFUlwiLCBwaFJlcGxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucTMudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQucmVwbGFjZShcbiAgICAgICAgICAgIFwiUExBQ0VIT0xERVJcIiwgcGhSZXBsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucTJUZXh0LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQ7XG4gICAgICAgIHRoaXMucTNUZXh0LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQ7XG4gICAgfVxuXG4gICAgc2F2ZVExU3RhdGUoZGF0YSkge1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gZGF0YS5zZWxlY3RlZFZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1xuICAgICAgICAgICAgXCJxMVNlbGVjdGlvblwiOiBkYXRhLnNlbGVjdGVkRWxlSWQsXG4gICAgICAgICAgICBcInExQW5zd2VyXCI6IHRoaXMucTFBbnN3ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVEyQW5kUTNUZXh0KCk7XG4gICAgICAgIHRoaXMuc3VibWl0UXVlc3Rpb24oXCJxMVwiLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzYXZlUTJTdGF0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7cTJBbnN3ZXI6IGRhdGEuYW5zd2VyfSk7XG4gICAgICAgIGRhdGEucXVlc3Rpb25UZXh0ID0gZGF0YS5xdWVzdGlvblRleHRcbiAgICAgICAgICAgIC5yZXBsYWNlKCc8c3BhbiBjbGFzcz1cInExLWFuc3dlclwiPicsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoJzwvc3Bhbj4nLCAnJyk7XG4gICAgICAgIHRoaXMuc3VibWl0UXVlc3Rpb24oXCJxMlwiLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzYXZlUTNTdGF0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7cTNTZWxlY3Rpb246IGRhdGEuc2VsZWN0ZWRFbGVJZH0pO1xuICAgICAgICBkYXRhLnF1ZXN0aW9uVGV4dCA9IGRhdGEucXVlc3Rpb25UZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgnPHNwYW4gY2xhc3M9XCJxMS1hbnN3ZXJcIj4nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCc8L3NwYW4+JywgJycpO1xuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXN0aW9uKFwicTNcIiwgZGF0YSk7XG4gICAgfVxuXG5cbiAgICBzdWJtaXRRdWVzdGlvbihxTnVtLCBkYXRhKSB7XG4gICAgICAgIGxldCBsb2dEYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNVQk1JVF9BTlNXRVJcIixcbiAgICAgICAgICAgICAgICBxdWVzdGlvbklkOiBgJHt0aGlzLmFwcC5hY3Rpdml0eUtleX0uJHt0aGlzLmlkfS4ke3FOdW19YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuZXZlbnRzLnB1c2gobG9nRGF0YSk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBzdXBlci5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgLy8gSSAqYmVsaWV2ZSogdGhlc2UgbmV4dCA0IGFyZSBoYW5kbGUgYnkgc3VwZXJjbGFzcyBhbmQgY2FuIGdvIGF3YXlcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMucTFGb3JtLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLnEyRm9ybS5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5xM0Zvcm0uc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lLmhhbmRsZVRyYW5zaXRpb24oKVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50VHJhbnNpdGlvbik7XG4gICAgICAgIHRoaXMuaGlkZUFsbEZvcm1zKCk7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcm0gPSB0aGlzLmZvcm1zW3RoaXMuY3VycmVudFRyYW5zaXRpb25dO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuY3VycmVudEZvcm0uZm9ybSk7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50Rm9ybS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSB0aGlzLnNhdmVRMVN0YXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyID0gdGhpcy5zYXZlUTJTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnEyVGV4dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlciA9IHRoaXMuc2F2ZVEzU3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGludmFsaWQgdHJhbnNpdGlvbjogJHt0aGlzLmN1cnJlbnRUcmFuc2l0aW9ufWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9lbnRlcigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lLnBvc3RfZW50ZXIoKVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3Jtcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbigpO1xuICAgICAgICBpZiAobnVsbCAhPT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVN0YXRlKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRlYXJkb3duQWxsRm9ybUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgLy8gICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3Jtcykge1xuICAgIC8vICAgICAgICAgZi50ZWFyZG93bkV2ZW50SGFuZGxlcnMoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlUZXN0U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLmN1c3RvbUFjdGlvbnMgPSB7XG4gICAgICAgICAgICBzaG93QnRuczogdGhpcy5zaG93QnRucyxcbiAgICAgICAgICAgIGhpZGVCdG5zOiB0aGlzLmhpZGVCdG5zLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ0bk5hbWVzID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5hcHAucHJldkJ0bixcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuYXBwLm5leHRCdG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiB0aGlzLmN1c3RvbUVudGVyQWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhcmdzID0gYWN0aW9uLmFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==