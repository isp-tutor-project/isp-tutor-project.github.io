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

/***/ "./data/diPostTest.json":
/*!******************************!*\
  !*** ./data/diPostTest.json ***!
  \******************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"edges\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"edges\":{\"prev\":\"start\",\"next\":\"carsIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro1\":{\"edges\":{\"prev\":\"intro\",\"next\":\"carsIntro2\"},\"id\":\"carsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro2\":{\"edges\":{\"prev\":\"carsIntro1\",\"next\":\"carsIntro3\"},\"id\":\"carsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro3\":{\"edges\":{\"prev\":\"carsIntro2\",\"next\":\"carsResultsIntro1\"},\"id\":\"carsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro1\":{\"edges\":{\"prev\":\"carsIntro3\",\"next\":\"carsResults1\"},\"id\":\"carsResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults1\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro1\",\"next\":\"carsResultsIntro2\"},\"id\":\"carsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro2\":{\"edges\":{\"prev\":\"carsResults1\",\"next\":\"carsResults2\"},\"id\":\"carsResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults2\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro2\",\"next\":\"carsResultsIntro3\"},\"id\":\"carsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro3\":{\"edges\":{\"prev\":\"carsResults2\",\"next\":\"carsResults3\"},\"id\":\"carsResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults3\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro3\",\"next\":\"carsResultsIntro4\"},\"id\":\"carsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro4\":{\"edges\":{\"prev\":\"carsResults3\",\"next\":\"carsResults4\"},\"id\":\"carsResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults4\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro4\",\"next\":\"carsResultsIntro5\"},\"id\":\"carsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro5\":{\"edges\":{\"prev\":\"carsResults4\",\"next\":\"carsResults5\"},\"id\":\"carsResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults5\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro5\",\"next\":\"libraryIntro1\"},\"id\":\"carsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro1\":{\"edges\":{\"prev\":\"carsResults5\",\"next\":\"libraryIntro2\"},\"id\":\"libraryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro2\":{\"edges\":{\"prev\":\"libraryIntro1\",\"next\":\"libraryIntro3\"},\"id\":\"libraryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro3\":{\"edges\":{\"prev\":\"libraryIntro2\",\"next\":\"libraryIntro4\"},\"id\":\"libraryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro4\":{\"edges\":{\"prev\":\"libraryIntro3\",\"next\":\"libraryIntro5\"},\"id\":\"libraryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro5\":{\"edges\":{\"prev\":\"libraryIntro4\",\"next\":\"libraryIntro6\"},\"id\":\"libraryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro6\":{\"edges\":{\"prev\":\"libraryIntro5\",\"next\":\"libraryResultsIntro1\"},\"id\":\"libraryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro1\":{\"edges\":{\"prev\":\"libraryIntro6\",\"next\":\"libraryResults1\"},\"id\":\"libraryResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults1\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro1\",\"next\":\"libraryResultsIntro2\"},\"id\":\"libraryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro2\":{\"edges\":{\"prev\":\"libraryResults1\",\"next\":\"libraryResults2\"},\"id\":\"libraryResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults2\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro2\",\"next\":\"libraryResultsIntro3\"},\"id\":\"libraryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro3\":{\"edges\":{\"prev\":\"libraryResults2\",\"next\":\"libraryResults3\"},\"id\":\"libraryResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults3\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro3\",\"next\":\"libraryResultsIntro4\"},\"id\":\"libraryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro4\":{\"edges\":{\"prev\":\"libraryResults3\",\"next\":\"libraryResults4\"},\"id\":\"libraryResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults4\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro4\",\"next\":\"libraryResultsIntro5\"},\"id\":\"libraryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro5\":{\"edges\":{\"prev\":\"libraryResults4\",\"next\":\"libraryResults5\"},\"id\":\"libraryResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults5\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro5\",\"next\":\"completed\"},\"id\":\"libraryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you these results show students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"edges\":{\"prev\":\"libraryResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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

/***/ "./src/posttest.js":
/*!*************************!*\
  !*** ./src/posttest.js ***!
  \*************************/
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
const activityData = __webpack_require__(/*! ../data/diPostTest.json */ "./data/diPostTest.json");

let navbar = new _isptutorproject_navbar__WEBPACK_IMPORTED_MODULE_1__["NavBar"]();
navbar.displayActivityTitle("Data Interpretation Post-Test");
navbar.displayUser(activityConfig.userID);


let app = new _index__WEBPACK_IMPORTED_MODULE_0__["DiTestApp"](
    activityData, activityConfig, DEFAULT_APP_INITIAL_STATE
);
if (true) {
    app.setStartScene("start");
}
app.start();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL25hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2Uvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wb3N0dGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2R1YWxUYWJsZVJlc3VsdHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvc2luZ2xlVGFibGVSZXN1bHRzU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXN0UmVzdWx0c1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGVzdFNjZW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDTjs7QUFLOUI7Ozs7Ozs7Ozs7Ozs7QUNORjtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWSxJQUFJLE9BQU87QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQzdHQTtBQUFBO0FBQU87QUFDUDtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELFFBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9zdHRlc3QuanNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uKCkge1xuICAgIGxldCBhY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgdXNlcklEOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJRFwiKSxcbiAgICAgICAgY2xhc3NDb2RlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsYXNzQ29kZVwiKSxcbiAgICAgICAgZGF0YWJhc2U6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YWJhc2VcIiksXG4gICAgICAgIGhvbWVwYWdlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVwYWdlXCIpLFxuICAgICAgICBhY3Rpdml0eUtleTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50QWN0aXZpdHlcIiksXG4gICAgICAgIGZlYXR1cmVzOiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50QWN0aXZpdHlGZWF0dXJlc1wiKSB8fCBcIlwiKVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiOlwiKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gXCJcIilcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5Q29uZmlnKTtcbiAgICByZXR1cm4gYWN0aXZpdHlDb25maWc7XG59IiwiLy8gYWJzdHJhY3QgY2xhc3MgLSBpbnRlcmZhY2VcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICB0aGlzLmNsYXNzQ29kZSA9IGNsYXNzQ29kZTtcbiAgICAgICAgdGhpcy51c2VySUQgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT04gPSB0cnVlKSB7XG5cbiAgICB9XG5cbiAgICBzZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIG9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgZ2V0UlFEYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0Q3Vyckh5cG9UYXNrKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0SW5pdGlhbEh5cG9EYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0RmluYWxIeXBvRGF0YSgpIHtcblxuICAgIH1cblxuICAgIHNhdmVWYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuXG4gICAgfVxuXG4gICAgc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCBvYmplY3QpIHtcblxuICAgIH1cblxuICAgIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRJbnRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldFRleHRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRKU09OVmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG59O1xuXG5cbiIsImltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vZGF0YWJhc2VcIjtcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUQ3eklrLThWMjBRcUpOU3MwY0FWMHVOTDNxamVxTE1kTVwiLFxuICAgIGF1dGhEb21haW46IFwiaXNwdHV0b3IuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcImlzcHR1dG9yXCJcbn07XG5cbmV4cG9ydCBjbGFzcyBGaXJlc3RvcmVEQiBleHRlbmRzIERhdGFiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKSB7XG4gICAgICAgIHN1cGVyLnNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKTtcbiAgICAgICAgdGhpcy51c2VyUmVmID0gdGhpcy5zdG9yZS5jb2xsZWN0aW9uKHRoaXMuY2xhc3NDb2RlKS5kb2ModGhpcy51c2VySUQpO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuICAgICAgICAvLyByZXR1cm5zIHByb21pc2Ugd2l0aCAnZG9jJyBpZiBpdCBleGlzdHMsIG51bGwgb3RoZXJ3aXNlXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYuZ2V0KClcbiAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgICAgaWYgKGRvYy5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jLmRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcblxuICAgIH1cbiAgXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OPXRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlckRhdGEoKVxuICAgICAgICAudGhlbigodXNlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckRhdGFbYWN0aXZpdHlLZXldO1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGVjb2RlSlNPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0UlFEYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwicnF0ZWRcIik7XG4gICAgLy8gfVxuXG5cbiAgICAvLyBnZXRJbml0aWFsSHlwb0RhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJpbml0aWFsSHlwb1wiKVxuICAgIC8vICAgICAudGhlbigoc3RyRGF0YSkpXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0RmluYWxIeXBvRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcImZpbmFsSHlwb1wiKVxuICAgIC8vIH1cblxuICAgIHNldFZhbHVlcyhvYmplY3QsIG92ZXJ3cml0ZT1mYWxzZSkge1xuICAgICAgICAvLyBkZWZhdWx0IHRvIHttZXJnZTogdHJ1ZX0gb3B0aW9uIGZvciBzYWZldHlcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi5zZXQob2JqZWN0LCB7bWVyZ2U6ICFvdmVyd3JpdGV9KTsgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlVmFsdWVzKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnVwZGF0ZShvYmplY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi51cGRhdGUoe1xuICAgICAgICAgICAgW3Zhck5hbWVdOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5kZWxldGUoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIHZhbHVlKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnVzZXJSZWYuc2V0KHtcbiAgICAvLyAgICAgICAgIFt2YXJOYW1lXTogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBnZXRJbnRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9ICAgXG4gICAgXG4gICAgLy8gZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cbn07IiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlREIgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VEQlwiO1xuaW1wb3J0IHsgRmlyZXN0b3JlREIgfSBmcm9tIFwiLi9maXJlc3RvcmVEQlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0REJDb25uZWN0aW9uKGRiVHlwZSkge1xuICAgIGxldCBkYjtcbiAgICBzd2l0Y2goZGJUeXBlKSB7XG4gICAgICAgIGNhc2UgXCJmaXJlc3RvcmVcIjpcbiAgICAgICAgICAgIGRiID0gbmV3IEZpcmVzdG9yZURCKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRiID0gbmV3IExvY2FsU3RvcmFnZURCKCk7XG4gICAgfVxuICAgIHJldHVybiBkYjsgXG59XG4iLCJcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vZGF0YWJhc2VcIjtcblxuLy8gTk9URTogdGhpcyBBUEkgbXVzdCB1c2UgcHJvbWlzZXMgdG8gYmUgY29tcGF0aWJsZSB3aXRoIGFueSBkYlxuLy8gd2UgbWF5IGJlIHVzaW5nLCB3aGljaCBtYXkgYmUgZWl0aGVyIHN5bmMgb3IgYXN5bmNcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VEQiBleHRlbmRzIERhdGFiYXNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKSB7XG4gICAgICAgIHN1cGVyLnNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKTtcbiAgICAgICAgLy8gcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgLy8gdGhpcy5zYXZlVmFsdWUoXCJjbGFzc0NvZGVcIiwgY2xhc3NDb2RlKSxcbiAgICAgICAgLy8gdGhpcy5zYXZlVmFsdWUoXCJ1c2VySURcIiwgdXNlcklEKSxcbiAgICAgICAgLy8gXSkudGhlbigoW3Jlc3VsdDEsIHJlc3VsdDJdKSA9PiB7IH0pO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuICAgICAgICBjb25zb2xlLmNvdW50KFwiZ2V0VXNlckRhdGEoKSBjYWxsZWRcIik7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmdldFRleHRWYWx1ZShcImNsYXNzQ29kZVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dFZhbHVlKFwidXNlcklEXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0eURhdGEoXCJycXRlZFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3Vyckh5cG9UYXNrKCksXG4gICAgICAgICAgICB0aGlzLmdldEludGlhbEh5cG9EYXRhKCksXG4gICAgICAgICAgICB0aGlzLmdldEZpbmFsSHlwb0RhdGEoKVxuICAgICAgICBdKS50aGVuKChbY2NSZXMsIHVpZFJlcywgcnFSZXMsIGNodFJlcywgaWhSZXMsIGZoUmVzXSkgPT4ge1xuICAgICAgICAgICAgZGF0YS5jbGFzc0NvZGUgPSBjY1JlcztcbiAgICAgICAgICAgIGRhdGEudXNlcklEID0gdWlkUmVzO1xuICAgICAgICAgICAgZGF0YS5ycXRlZCA9IHJxUmVzO1xuICAgICAgICAgICAgaWYgKGNodFJlcykge1xuICAgICAgICAgICAgICAgIGRhdGEuY3Vyckh5cG9UYXNrSWR4ID0gY2h0UmVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWhSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpcnN0UHJlZGljdGlvbiA9IGloUmVzLmZpcnN0UHJlZGljdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRhLmluaXRpYWxIeXBvID0gaWhSZXMuaW5pdGlhbEh5cG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmhSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNlY29uZFByZWRpY3Rpb24gPSBmaFJlcy5zZWNvbmRQcmVkaWN0aW9uO1xuICAgICAgICAgICAgICAgIGRhdGEuZmluYWxIeXBvID0gZmhSZXMuZmluYWxIeXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTiA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SlNPTlZhbHVlKGFjdGl2aXR5S2V5KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgIWRlY29kZUpTT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zYXZlSlNPTlZhbHVlKGFjdGl2aXR5S2V5LCBvYmplY3QpO1xuICAgIH1cblxuICAgIGdldFJRRGF0YSgpIHtcbiAgICAgICAgbGV0IHJldFZhbCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGl2aXR5RGF0YShcInJxdGVkXCIpXG4gICAgICAgIC50aGVuKChycXRlZCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocnF0ZWQpO1xuICAgICAgICAgICAgaWYgKHJxdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0VmFsID0gcnF0ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBycSBpc24ndCBzZWxlY3RlZCBoYXJkLWNvZGUgdG8gY3J5c3RhbCBncm93dGhcbiAgICAgICAgICAgICAgICByZXRWYWwgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZVN0YXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFyZWE6IHsgaW5kZXg6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9waWM6IHsgaW5kZXg6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFyaWFibGU6IHsgaW5kZXg6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUlE6IHsgaW5kZXg6IDEgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldFZhbCk7XG4gICAgICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyckh5cG9UYXNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnRWYWx1ZShcImN1cnJIeXBvVGFza0lkeFwiKVxuICAgIH1cblxuICAgIGdldEludGlhbEh5cG9EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0VmFsdWUoXCJmaXJzdFByZWRpY3Rpb25cIilcbiAgICAgICAgICAgIC50aGVuKChwcmVkMSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRJbml0aWFsSHlwb0RhdGEoKTpmaXJzdFByZWRpY3Rpb24gJHtwcmVkMX1gKTtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gcHJlZDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBwcmVkMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SlNPTlZhbHVlKFwiaW5pdGlhbEh5cG9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGluaXRIeXBvKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdldEluaXRpYWxIeXBvRGF0YSgpOmluaXRIeXBvICR7aW5pdEh5cG99YCk7XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0aWFsSHlwbyA9IGluaXRIeXBvO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmluYWxIeXBvRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dFZhbHVlKFwic2Vjb25kUHJlZGljdGlvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHByZWQyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdldEZpbmFsSHlwb0RhdGEoKTpzZWNvbmRQcmVkaWN0aW9uICR7cHJlZDJ9YClcbiAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gcHJlZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gcHJlZDI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShcImZpbmFsSHlwb1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNlY29uZFByZWRpY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZmluYWxIeXBvKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdldEZpbmFsSHlwb0RhdGEoKTpmaW5hbEh5cG8gJHtmaW5hbEh5cG99YCk7XG4gICAgICAgICAgICAgICAgZGF0YS5maW5hbEh5cG8gPSBmaW5hbEh5cG87XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZXMob2JqZWN0LCBvdmVyd3JpdGU9ZmFsc2UpIHtcbiAgICAgICAgLy8gb3ZlcndyaXRlIHBhcmFtIGlzIGlnbm9yZWQsIGFzIGl0IGlzIHNwZWNpZmljIHRvIGZpcmVzdG9yZVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0Lml0ZW1zKG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVWYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5zZXRJdGVtKHZhck5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YXJOYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Qm9vbFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcInRydWVcIiA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbnRWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIGxldCByZXRWYWw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmV0VmFsKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmV0VmFsKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRleHRWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIGxldCByZXRWYWw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLy8gbGV0IGRiID0gbmV3IERhdGFiYXNlKFwiQk9HVVNfQ0xBU1NcIiwgXCJCT0dVU19TVFVERU5UXCIpO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYubmF2YmFyXCIpO1xuICAgICAgICB0aGlzLmhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhcl9ob21lX2J0blwiKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpdml0eV90aXRsZVwiKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduX291dF9idXR0b25cIik7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbl9pbl90ZXh0XCIpO1xuICAgICAgICB0aGlzLmdvSG9tZSAgICAgID0gdGhpcy5nb0hvbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaWduT3V0VXNlciA9IHRoaXMuc2lnbk91dFVzZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nb0hvbWUpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2lnbk91dFVzZXIpO1xuICAgIH1cblxuICAgIGdvSG9tZShlKSB7XG4gICAgICAgIGxldCBob21lUGFnZSA9IHRoaXMuY2FsY0hvbWVQYWdlKCk7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUbyhob21lUGFnZSk7XG4gICAgfVxuXG4gICAgY2FsY0hvbWVQYWdlKCkge1xuICAgICAgICBsZXQgaG9tZVBhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvbWVwYWdlXCIpO1xuICAgICAgICBpZiAobnVsbCA9PT0gaG9tZVBhZ2UpIHtcbiAgICAgICAgICAgIGhvbWVQYWdlID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob21lUGFnZTtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICAvLyBwcmV2ZW50IHJlZnJlc2ggaWYgYWxyZWFkeSBvbiB0aGlzIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmICE9PSB1cmwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2lnbk91dFVzZXIoZSkge1xuICAgICAgICB0aGlzLnNpZ25JblRleHQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBsZXQgaG9tZVBhZ2UgPSB0aGlzLmNhbGNIb21lUGFnZSgpO1xuICAgICAgICAvLyB0aGlzIGRvZXMgdGhlIGFjdHVhbCBzaWduaW5nIG91dFxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFRvKGhvbWVQYWdlKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWN0aXZpdHlUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGl0bGUuaW5uZXJUZXh0ID0gdGl0bGUudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cblxuICAgIGRpc3BsYXlVc2VyKHVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dC5pbm5lckhUTUwgPSBgV2VsY29tZSwgJHt1c2VyTmFtZX1gO1xuICAgICAgICB0aGlzLnNpZ25JblRleHQuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGdldERCQ29ubmVjdGlvbiB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L2lzcC1kYXRhYmFzZVwiO1xuaW1wb3J0IHsgU25hY2tCYXJ9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NuYWNrYmFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZUJhc2VkQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lRGF0YSA9IGFwcERhdGEuc2NlbmVzO1xuICAgICAgICB0aGlzLmFjdGl2aXR5Q29uZmlnID0gYWN0aXZpdHlDb25maWc7XG4gICAgICAgIHRoaXMuZGIgPSBnZXREQkNvbm5lY3Rpb24oYWN0aXZpdHlDb25maWcuZGF0YWJhc2UpO1xuICAgICAgICB0aGlzLmRiLnNldENyZWRlbnRpYWxzKGFjdGl2aXR5Q29uZmlnLmNsYXNzQ29kZSwgYWN0aXZpdHlDb25maWcudXNlcklEKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eUtleSA9IGFjdGl2aXR5Q29uZmlnLmFjdGl2aXR5S2V5O1xuICAgICAgICB0aGlzLmRlZmF1bHRTdGF0ZSA9IGRlZmF1bHRJbml0aWFsU3RhdGU7XG5cbiAgICAgICAgdGhpcy5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgICAgICB0aGlzLmhvbWVQYWdlQnRuID0gbnVsbDtcbiAgICAgICAgbGV0IGhvbWVQYWdlQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29faG9tZV9wYWdlXCIpO1xuICAgICAgICB0aGlzLm5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuICAgICAgICB0aGlzLnByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZfYnRuXCIpO1xuICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lX2lkX3JlZ2lvblwiKTtcbiAgICAgICAgaWYgKGhvbWVQYWdlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVQYWdlQnRuID0gaG9tZVBhZ2VCdG47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHb0hvbWVQYWdlID0gdGhpcy5oYW5kbGVHb0hvbWVQYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVByZXYgPSB0aGlzLmhhbmRsZVByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaG9tZVBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlR29Ib21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVOZXh0KTtcbiAgICAgICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVByZXYpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gbnVsbDtcbiAgICAgICAgLy8gaXMgdGhpcyBuZWVkZWQ/Pz9cbiAgICAgICAgdGhpcy5ib2d1c1NjZW5lSW5mbyA9IHtcbiAgICAgICAgICAgIGlkOiBcIk4vQVwiLFxuICAgICAgICAgICAgc2NlbmVUeXBlOiBcImJvZ3VzXCJcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFwcCA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cblxuICAgIGhhbmRsZVJlc2l6ZShldmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIHRoaXMucmVzaXplQ29udGVudCgpO1xuICAgIH1cblxuICAgIHJlc2l6ZUNvbnRlbnQoKSB7XG4gICAgICAgIGxldCBzRWwsIGNFbCwgc1dpZHRoLCBzSGVpZ2h0LCBjV2lkdGgsIGNIZWlnaHQsIHNjO1xuICAgICAgICBzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjZW5lLmFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKHNFbCkge1xuICAgICAgICAgICAgY0VsID0gc0VsLnF1ZXJ5U2VsZWN0b3IoXCIuc2NlbmUtY29udGVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY0VsKSB7XG4gICAgICAgICAgICBzV2lkdGggID0gc0VsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgc0hlaWdodCA9IHNFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjV2lkdGggID0gY0VsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY0hlaWdodCA9IGNFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBzYyA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgIHNXaWR0aCAvIGNXaWR0aCxcbiAgICAgICAgICAgICAgICBzSGVpZ2h0IC8gY0hlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKCR7c2N9KWA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHNldFNuYWNrYmFyKHNuYWNrYmFyKSB7XG4gICAgLy8gICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcbiAgICAvLyB9XG5cbiAgICBzaG93RmVlZGJhY2soZmVlZGJhY2spIHtcbiAgICAgICAgdGhpcy5zbmFja2Jhci5zaG93KGZlZWRiYWNrKTtcbiAgICB9XG5cbiAgICBoYW5kbGVHb0hvbWVQYWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5hY3Rpdml0eUNvbmZpZy5ob21lcGFnZVxuICAgIH1cblxuICAgIGhhbmRsZVByZXYoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlUHJldkJ1dHRvbigpO1xuICAgICAgICB0aGlzLnNhdmVBcHBTdGF0ZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlTmV4dEJ1dHRvbigpO1xuICAgICAgICB0aGlzLnNhdmVBcHBTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFN0YXJ0U2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwic2V0U3RhcnRTY2VuZSgpXCIsIHNjZW5lSWQpO1xuICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBzY2VuZUlkO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nXCIpO1xuICAgICAgICB0aGlzLmdldEFwcFN0YXRlKClcbiAgICAgICAgICAgIC50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGFjdGl2aXR5IGRhdGEgaW4gZGIuIHVzaW5nIGluaXRpYWwgZGF0YVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXMuZGVmYXVsdFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTY2VuZXNcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvbi5zY2VuZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVJZCA9IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjcmVhdGluZyBzY2VuZSBmb3IgJHtzY2VuZUlkfWApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVPYmogPSB0aGlzLmNyZWF0ZVNjZW5lKHRoaXMuc2NlbmVEYXRhW3NjZW5lSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NlbmVPYmopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZUlkXSA9IHNjZW5lT2JqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2NlbmVTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0b3JpbmcgQXBwIFN0YXRlXCIpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvbi5zY2VuZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVJZCA9IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZVN0YXRlID0gdGhpcy5zdGF0ZS5zY2VuZVN0YXRlW3NjZW5lSWRdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZUlkXS5yZXN0b3JlU3RhdGUoc2NlbmVTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3RvcmluZyBDdXJyZW50IFNjZW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcodGhpcy5zY2VuZURhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NlbmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb3RvU3RhcnRTY2VuZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFwcFN0YXRlKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiTG9hZGluZyBBcHAgU3RhdGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmdldEFjdGl2aXR5RGF0YSh0aGlzLmFjdGl2aXR5S2V5KTtcbiAgICB9XG5cbiAgICBzYXZlQXBwU3RhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTYXZpbmcgQXBwIFN0YXRlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5zZXRBY3Rpdml0eURhdGEodGhpcy5hY3Rpdml0eUtleSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIC8vIHlvdSdsbCB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55dGhpbmcgdXNlZnVsXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJjcmVhdGVTY2VuZSgpXCIsIHNjZW5lSW5mbywgc2NlbmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiBuZXcgU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUb1NjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMubG9nU2NlbmVDaGFuZ2Uoc2NlbmUpO1xuICAgICAgICB0aGlzLmdvdG9TY2VuZShzY2VuZSk7XG4gICAgfVxuXG4gICAgZ290b1NjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmICh0aGlzLnByZXZTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUucHJlX2V4aXQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLmV4aXQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLnBvc3RfZXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnByZV9lbnRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5lbnRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wb3N0X2VudGVyKCk7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnByZXZTY2VuZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NlbmVJZCgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlTY2VuZUlkKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uLmlubmVySFRNTCA9IHRoaXMuY3VycmVudFNjZW5lLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9va3VwU2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLnNjZW5lc1tzY2VuZUlkXTtcbiAgICAgICAgaWYgKCFzY2VuZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRVJST1I6IG5vIHN1Y2ggc2NlbmUgJHtzY2VuZUlkfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG5cbiAgICBmb2xsb3dFZGdlKGVkZ2VOYW1lKSB7XG4gICAgICAgIGxldCBuZXdTY2VuZUlkID0gdGhpcy5jdXJyZW50U2NlbmUuZWRnZXNbZWRnZU5hbWVdO1xuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKG5ld1NjZW5lSWQpO1xuICAgICAgICB0aGlzLnN3aXRjaFRvU2NlbmUobmV3U2NlbmUpO1xuICAgIH1cblxuICAgIGxvZ1NjZW5lQ2hhbmdlKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJTQ0VORV9UUkFOU0lUSU9OXCIsXG4gICAgICAgICAgICBmcm9tOiB0aGlzLmN1cnJlbnRTY2VuZS5pZCxcbiAgICAgICAgICAgIHRvOiBzY2VuZS5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcIlVwZGF0aW5nIHN0YXRlLmV2ZW50c1wiKTtcbiAgICB9XG5cblxuICAgIGdvdG9TdGFydFNjZW5lKCkge1xuICAgICAgICAvLyBieXBhc3NlcyBzd2l0Y2hUb1NjZW5lKCkgYW5kIHRodXMgbG9nU2NlbmVDaGFuZ2UoKVxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XG4gICAgICAgIGxldCBzdGFydFNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmICghc3RhcnRTY2VuZSkge1xuICAgICAgICAgICAgc3RhcnRTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUodGhpcy5zdGFydFNjZW5lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiQVBQX1NUQVJUXCIsXG4gICAgICAgICAgICBzY2VuZTogIHN0YXJ0U2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgICAgIHRoaXMuZ290b1NjZW5lKHN0YXJ0U2NlbmUpO1xuICAgIH1cblxuXG4gICAgaGlkZShlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIHNob3coZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBtYWtlSW52aXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VWaXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmVCYXNlZEFwcCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xuXG5leHBvcnQge1xuICAgIFNjZW5lQmFzZWRBcHAsXG4gICAgU2NlbmVcbn07XG4iLCJleHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Gb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGZvcm1JbmZvLCBlbGVJZCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICB0aGlzLmZvcm1JbmZvID0gZm9ybUluZm87XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlkKTtcbiAgICAgICAgdGhpcy5yYWRpb3MgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtIGlzIHZhbGlkOlwiLCB2YWxpZGl0eSk7XG4gICAgICAgIHJldHVybiB2YWxpZGl0eTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAvLyBzZXQgZm9ybSB0byBkaXJ0eSBzdGF0ZSBzbyBpdCB3aWxsIGdldCBzYXZlZCBsYXRlciBvblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgICAgIHJiLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlYXJkb3duRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgICAgIHJiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ2V0Q29ycmVjdG5lc3MoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgKVxuICAgICAgICBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICAvLyBsZXQgYW5zVGV4dCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBjb3JyZWN0QW5zd2VyID0gc2ZpLmNvcnJlY3RBbnN3ZXI7XG4gICAgICAgIGxldCBpc0NvcnJlY3Q7XG5cbiAgICAgICAgaWYgKFwiTi9BXCIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdEFuc3dlciA9PT0gdmFsKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQ29ycmVjdDtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjaygpIHtcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzQ29ycmVjdCwgc2ZpKTtcbiAgICAgICAgbGV0IGZiVGV4dCwgZmJDbGFzc05hbWUsIGZiTXNnO1xuICAgICAgICBzd2l0Y2goaXNDb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLnBvc0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJwb3MtZmVlZGJhY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm5lZ0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJuZWctZmVlZGJhY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKGZiVGV4dCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yoc2ZpLm50bEZiKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChmYlRleHQpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYk1zZyA9IGA8c3BhbiBjbGFzcz1cIiR7ZmJDbGFzc05hbWV9XCI+JHtmYlRleHR9PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZiTXNnO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGxibCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVHlwZTogc2ZpLnR5cGUsXG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IHNmaS50ZXh0LFxuICAgICAgICAgICAgc2VsZWN0ZWRFbGVJZDogc2VsZWN0ZWRBbnN3ZXIuaWQsXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiB2YWwsXG4gICAgICAgICAgICBzZWxlY3RlZExhYmVsOiBsYmwsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIG5vbi1kaXJ0eSBzdGF0ZSwgc28gd2UgZG9uJ3QgcmVzdWJtaXQgdW5sZXNzIHRoZXlcbiAgICAgICAgLy8gY2hhbmdlIGFnYWluXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRJbml0aWFsaXppbmcgU2NlbmU6ICR7c2NlbmVJbmZvLmlkfWApO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgLy8gY29weSBhbGwgc2NlbmVJbmZvIHRvICd0aGlzJ1xuICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2NlbmVJbmZvKSkge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAvLyBiaW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiA9IHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3dCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlRm9sbG93RWRnZUJ1dHRvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGVkZ2VOYW1lID0gZS50YXJnZXQuZGF0YXNldC5lZGdlO1xuICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKGVkZ2VOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRGb2xsb3dFZGdlRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb2xsb3ctZWRnZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cEZvbGxvd0VkZ2VFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmdldEZvbGxvd0VkZ2VFbGVtZW50cygpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVGb2xsb3dFZGdlQnV0dG9uLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdFJlc3RvcmluZyBTY2VuZSBTdGF0ZSBmb3I6ICR7dGhpcy5pZH0gYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2lzQm9ndXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID09PSBcIk4vQVwiIHx8IHRoaXMuc2NlbmVUeXBlID09PSBcImJvZ3VzXCI7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJldkJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcInByZXZcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcIm5leHRcIik7XG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcm1DaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlX2VudGVyKCkge1xuXG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFbnRlcmluZyBTY2VuZTogJHt0aGlzLmlkfWApO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiXFx0VXBkYXRpbmcgc3RhdGUuY3VycmVudFNjZW5lXCIpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5jdXJyZW50U2NlbmUgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FbnRlckFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIHByZV9leGl0KCkge1xuXG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYEV4aXRpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FeGl0QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLmFwcC5yZXNpemVDb250ZW50KCk7XG4gICAgICAgIHRoaXMuc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRleHRhcmVhRm9ybSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBmb3JtSW5mbywgZWxlSWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGZvcm1JbmZvO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybSk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbCcpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybSBpcyB2YWxpZDpcIiwgdmFsaWRpdHkpO1xuICAgICAgICByZXR1cm4gdmFsaWRpdHk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gZGlydHkgc3RhdGUgc28gaXQgd2lsbCBnZXQgc2F2ZWQgbGF0ZXIgb25cbiAgICAgICAgaWYgKHRoaXMudGV4dGFyZWEudmFsdWUudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgIC8vICAgICByYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHRlYXJkb3duRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgLy8gICAgIHJiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnRleHRhcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgfVxuXG5cbiAgICBnZXRDb3JyZWN0bmVzcygpIHtcbiAgICAgICAgLy8gbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAvLyAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICAvLyApXG4gICAgICAgIC8vIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIC8vIC8vIGxldCBhbnNUZXh0ID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgLy8gbGV0IGNvcnJlY3RBbnN3ZXIgPSBzZmkuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgLy8gbGV0IGlzQ29ycmVjdDtcblxuICAgICAgICAvLyBpZiAoXCJOL0FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAvLyAgICAgaXNDb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChjb3JyZWN0QW5zd2VyID09PSB2YWwpIHtcbiAgICAgICAgLy8gICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gaXNDb3JyZWN0O1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjaygpIHtcbiAgICAgICAgLy8gbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGlzQ29ycmVjdCwgc2ZpKTtcbiAgICAgICAgbGV0IGZiVGV4dCwgZmJDbGFzc05hbWUsIGZiTXNnO1xuICAgICAgICAvLyBzd2l0Y2ggKGlzQ29ycmVjdCkge1xuICAgICAgICAvLyAgICAgY2FzZSB0cnVlOlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwibmVnLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHR5cGVvZiAoZmJUZXh0KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIChzZmkubnRsRmIpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodHlwZW9mIChmYlRleHQpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYk1zZyA9IGA8c3BhbiBjbGFzcz1cIiR7ZmJDbGFzc05hbWV9XCI+JHtmYlRleHR9PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZiTXNnO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgLy8gICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gbGV0IGxibCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnRleHRhcmVhLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25UeXBlOiBzZmkudHlwZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogc2ZpLnRleHQsXG4gICAgICAgICAgICAvLyBzZWxlY3RlZEVsZUlkOiBzZWxlY3RlZEFuc3dlci5pZCxcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkVmFsdWU6IHZhbCxcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkTGFiZWw6IGxibCxcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZm9ybSB0byBub24tZGlydHkgc3RhdGUsIHNvIHdlIGRvbid0IHJlc3VibWl0IHVubGVzcyB0aGV5XG4gICAgICAgIC8vIGNoYW5nZSBhZ2FpblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIC8vIGdldEZvcm1EYXRhKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuXG4gICAgLy8gICAgICAgICBsZXQgZmJUZXh0O1xuICAgIC8vICAgICAgICAgbGV0IGZiQ2xhc3NOYW1lO1xuXG4gICAgLy8gICAgICAgICBpZiAoXCJuL2FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgIC8vICAgICAgICAgICAgIGlzQ29ycmVjdCA9IG51bGw7XG4gICAgLy8gICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgIC8vICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdEFuc3dlciA9PT0gdmFsKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkucG9zRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcInBvcy1mZWVkYmFja1wiO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkubmVnRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSAnbmVnLWZlZWRiYWNrJztcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKCFmYlRleHQpIHtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSAnbnRsLWZlZWRiYWNrJztcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgdGhpcy5hcHAuc2hvd0ZlZWRiYWNrKGZiTXNnKTtcbiAgICAvLyAgICAgICAgIC8vIHdoYXQgd2Ugd2FudCB0byBzdG9yZSBpbiBmaXJlc3RvcmVcbiAgICAvLyB9XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBsZXQgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uPC9zcGFuPmA7XG4gICAgLy8gICAgICAgICB0aGlzLmFwcC5zaG93RmVlZGJhY2soZmJNc2cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5leHBvcnQgY2xhc3MgU25hY2tCYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlEKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCB8fCBcInNuYWNrYmFyXCIpO1xuICAgIH1cblxuICAgIHNob3codGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mKHRleHQpICE9PSBcInVuZGVmaW5lZFwiICYmIG51bGwgIT09IHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXG4gICAgICAgICAgICAvLyB0aGlzLmVsLmNsYXNzTmFtZSA9IFwic2hvd1wiO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICAgIC8vIEFmdGVyIDMgc2Vjb25kcywgcmVtb3ZlIHRoZSBzaG93IGNsYXNzIGZyb20gRElWXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzbmFja2Jhci5jbGFzc05hbWUgPSBzbmFja2Jhci5jbGFzc05hbWUucmVwbGFjZShcInNob3dcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvbmF2YmFyXCI7XG5cbmltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuaW1wb3J0IHtcbiAgICBEaVRlc3RTY2VuZSxcbiAgICBEaUR1YWxUYWJsZVJlc3VsdHNTY2VuZSxcbiAgICBEaVNpbmdsZVRhYmxlUmVzdWx0c1NjZW5lXG59IGZyb20gXCIuL3NjZW5lc1wiO1xuXG5leHBvcnQgY2xhc3MgRGlUZXN0QXBwIGV4dGVuZHMgU2NlbmVCYXNlZEFwcHtcblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgc2NlbmU7XG4gICAgICAgIHN3aXRjaChzY2VuZUluZm8uc2NlbmVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2FyUmVzdWx0c1wiOlxuICAgICAgICAgICAgY2FzZSBcInJvY2tldHNSZXN1bHRzXCI6XG4gICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgRGlTaW5nbGVUYWJsZVJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpYnJhcnlSZXN1bHRzXCI6XG4gICAgICAgICAgICBjYXNlIFwibWVtb3J5UmVzdWx0c1wiOlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IERpRHVhbFRhYmxlUmVzdWx0c1NjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IERpVGVzdFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuXG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBEaVRlc3RBcHAgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvbmF2YmFyXCI7XG5cbmltcG9ydCB7IGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbiB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L2FjdGl2aXR5LWNvbmZpZ1wiO1xuXG5jb25zdCBERUZBVUxUX0FQUF9JTklUSUFMX1NUQVRFID0ge1xuICAgIGV2ZW50czogW10sXG4gICAgLy8gbWFwcGluZyBvZiBzY2VuZUlEcyAtPiBzY2VuZS10eXBlIHNwZWNpZmljIGRhdGFcbiAgICBzY2VuZVN0YXRlOiB7fSxcbiAgICBjdXJyZW50U2NlbmU6IFwic3RhcnRcIlxufTtcblxuXG5sZXQgYWN0aXZpdHlDb25maWcgPSBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24oKTtcbmNvbnN0IGFjdGl2aXR5RGF0YSA9IHJlcXVpcmUoXCIuLi9kYXRhL2RpUG9zdFRlc3QuanNvblwiKTtcblxubGV0IG5hdmJhciA9IG5ldyBOYXZCYXIoKTtcbm5hdmJhci5kaXNwbGF5QWN0aXZpdHlUaXRsZShcIkRhdGEgSW50ZXJwcmV0YXRpb24gUG9zdC1UZXN0XCIpO1xubmF2YmFyLmRpc3BsYXlVc2VyKGFjdGl2aXR5Q29uZmlnLnVzZXJJRCk7XG5cblxubGV0IGFwcCA9IG5ldyBEaVRlc3RBcHAoXG4gICAgYWN0aXZpdHlEYXRhLCBhY3Rpdml0eUNvbmZpZywgREVGQVVMVF9BUFBfSU5JVElBTF9TVEFURVxuKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgYXBwLnNldFN0YXJ0U2NlbmUoXCJzdGFydFwiKTtcbn1cbmFwcC5zdGFydCgpO1xuIiwiaW1wb3J0IHsgRGlUZXN0UmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vdGVzdFJlc3VsdHNTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlEdWFsVGFibGVSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RSZXN1bHRzU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkRGF0YSA9IHRoaXMuc2hvd1NvcnRlZERhdGEuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY29tcGFyZVJvd3MoYSwgYikge1xuICAgICAgICAvLyBjb21wYXJlcyAybmQgY29sdW1uIG9mIHJvd3MgYXMgaW50ZWdlcnNcbiAgICAgICAgbGV0IGExID0gcGFyc2VGbG9hdChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKVsxXS5pbm5lclRleHQpO1xuICAgICAgICBsZXQgYjEgPSBwYXJzZUZsb2F0KGIucXVlcnlTZWxlY3RvckFsbChcInRkXCIpWzFdLmlubmVyVGV4dCk7XG4gICAgICAgIHJldHVybiBhMSAtIGIxO1xuICAgIH1cblxuICAgIF9zb3J0VGFibGUodGFibGUpIHtcbiAgICAgICAgbGV0IHRib2R5ID0gdGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xuICAgICAgICBsZXQgcm93cyA9IFsuLi50Ym9keS5yb3dzXTtcbiAgICAgICAgdGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcm93cy5zb3J0KHRoaXMuX2NvbXBhcmVSb3dzKTtcbiAgICAgICAgZm9yIChsZXQgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93U29ydGVkRGF0YSgpIHtcbiAgICAgICAgbGV0IGxlZnRUYWJsZSA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihcInRhYmxlLmRhdGEtdGFibGUubGVmdC10YWJsZVwiKTtcbiAgICAgICAgbGV0IHJpZ2h0VGFibGUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZS5kYXRhLXRhYmxlLnJpZ2h0LXRhYmxlXCIpO1xuICAgICAgICB0aGlzLl9zb3J0VGFibGUobGVmdFRhYmxlKTtcbiAgICAgICAgdGhpcy5fc29ydFRhYmxlKHJpZ2h0VGFibGUpO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBEaVRlc3RTY2VuZSB9IGZyb20gXCIuL3Rlc3RTY2VuZVwiO1xuaW1wb3J0IHsgRGlTaW5nbGVUYWJsZVJlc3VsdHNTY2VuZSB9IGZyb20gXCIuL3NpbmdsZVRhYmxlUmVzdWx0c1NjZW5lXCI7XG5pbXBvcnQgeyBEaUR1YWxUYWJsZVJlc3VsdHNTY2VuZSB9IGZyb20gXCIuL2R1YWxUYWJsZVJlc3VsdHNTY2VuZVwiO1xuXG5leHBvcnQge1xuICAgIERpVGVzdFNjZW5lLFxuICAgIERpRHVhbFRhYmxlUmVzdWx0c1NjZW5lLFxuICAgIERpU2luZ2xlVGFibGVSZXN1bHRzU2NlbmVcbn07IiwiaW1wb3J0IHsgRGlUZXN0UmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vdGVzdFJlc3VsdHNTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlTaW5nbGVUYWJsZVJlc3VsdHNTY2VuZSBleHRlbmRzIERpVGVzdFJlc3VsdHNTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWREYXRhID0gdGhpcy5zaG93U29ydGVkRGF0YS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zb3J0VGFibGUodGFibGUpIHtcbiAgICAgICAgLy8gZ3JhYnMgY29sdW1uIHZhbHVlcyBmcm9tIHRib2R5IHJvd3MsIHNvcnRzIHRoZW0gaW5kZXBlbmRlbnRseVxuICAgICAgICAvLyBhbmQgdGhlbiByZS1hZGRzIHRoZW0gYXMgc29ydGVkIHJvd3MgdXNpbmcgdGhlIGNvbHVtbiBhcnJheXNcbiAgICAgICAgbGV0IHRib2R5ID0gdGFibGUucXVlcnlTZWxlY3RvcihcInRib2R5XCIpO1xuICAgICAgICBsZXQgcm93cyA9IFsuLi50Ym9keS5yb3dzXTtcbiAgICAgICAgdGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbDFWYWxzID0gcm93cy5tYXAoKHRyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0ci5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIilbMF0uaW5uZXJUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBjb2wyVmFscyA9IHJvd3MubWFwKCh0cikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodHIucXVlcnlTZWxlY3RvckFsbChcInRkXCIpWzFdLmlubmVyVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2wxVmFscy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGNvbDJWYWxzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wxVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgbGV0IGNvbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICBsZXQgY29sMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIGNvbDEuaW5uZXJUZXh0ID0gY29sMVZhbHNbaV07XG4gICAgICAgICAgICBjb2wyLmlubmVyVGV4dCA9IGNvbDJWYWxzW2ldO1xuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY29sMSk7XG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZChjb2wyKVxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dTb3J0ZWREYXRhKCkge1xuICAgICAgICBsZXQgdGFibGUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZS5kYXRhLXRhYmxlLmNlbnRlci10YWJsZVwiKTtcbiAgICAgICAgdGhpcy5fc29ydFRhYmxlKHRhYmxlKVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRGlUZXN0U2NlbmUgfSBmcm9tIFwiLi90ZXN0U2NlbmVcIjtcblxuaW1wb3J0IHsgUmFkaW9CdXR0b25Gb3JtIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm1cIjtcbmltcG9ydCB7IFRleHRhcmVhRm9ybSB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlL3RleHRhcmVhLWZvcm1cIjtcblxuY29uc3QgRklSU1RfVFJBTlNJVElPTiA9IDA7XG5jb25zdCBMQVNUX1RSQU5TSVRJT04gPSAyO1xuXG5leHBvcnQgY2xhc3MgRGlUZXN0UmVzdWx0c1NjZW5lIGV4dGVuZHMgRGlUZXN0U2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5xMUFuc3dlciA9IG51bGw7XG4gICAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGZpcnN0IHRyYW5zaXRpb25cbiAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvbiA9IEZJUlNUX1RSQU5TSVRJT047XG4gICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2F2ZVExU3RhdGUgPSB0aGlzLnNhdmVRMVN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZVEyU3RhdGUgPSB0aGlzLnNhdmVRMlN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZVEzU3RhdGUgPSB0aGlzLnNhdmVRM1N0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmV2ZWFsU3RhdEhhbmRsZXIgPSB0aGlzLnJldmVhbFN0YXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU29ydERhdGEgPSB0aGlzLmhhbmRsZVNvcnREYXRhLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG93U29ydGVkRGF0YUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Nob3dfc29ydGVkX3RhYmxlYCk7XG4gICAgICAgIHRoaXMuc29ydGVkVGFibGVUZXh0ICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkX3RleHRgKTtcblxuICAgICAgICAvLyB0aGlzLnNvcnRlZEltZyAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkYCk7XG4gICAgICAgIC8vIHRoaXMudW5zb3J0ZWRJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV91bnNvcnRlZGApO1xuXG4gICAgICAgIHRoaXMucTJUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EyX2Fuc3dlcmApO1xuICAgICAgICB0aGlzLmN1cnJlbnRGb3JtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xMUZvcm0gPSBuZXcgUmFkaW9CdXR0b25Gb3JtKFxuICAgICAgICAgICAgdGhpcy5hcHAsIHNjZW5lSW5mby5xdWVzdGlvbnMucTEsIGAke3RoaXMuaWR9X3ExX2Zvcm1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucTJGb3JtID0gbmV3IFRleHRhcmVhRm9ybShcbiAgICAgICAgICAgIHRoaXMuYXBwLCBzY2VuZUluZm8ucXVlc3Rpb25zLnEyLCBgJHt0aGlzLmlkfV9xMl9mb3JtYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnEzRm9ybSA9IG5ldyBSYWRpb0J1dHRvbkZvcm0oXG4gICAgICAgICAgICB0aGlzLmFwcCwgc2NlbmVJbmZvLnF1ZXN0aW9ucy5xMywgYCR7dGhpcy5pZH1fcTNfZm9ybWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5mb3JtcyA9IFtcbiAgICAgICAgICAgIHRoaXMucTFGb3JtLFxuICAgICAgICAgICAgdGhpcy5xMkZvcm0sXG4gICAgICAgICAgICB0aGlzLnEzRm9ybVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnEyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EyX3RleHRgKTtcbiAgICAgICAgdGhpcy5xM1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xM190ZXh0YCk7XG5cbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICByZXN0b3JlU3RhdGUoc2NlbmVTdGF0ZSkge1xuICAgICAgICBzdXBlci5yZXN0b3JlU3RhdGUoc2NlbmVTdGF0ZSk7XG4gICAgICAgIGlmIChzY2VuZVN0YXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RSZXN1bHRzU2NlbmU6OnJlc3RvcmVTdGF0ZSgpXCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzY2VuZVN0YXRlO1xuXG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb24gPSBzY2VuZVN0YXRlLmN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUucTFTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY2VuZVN0YXRlLnExU2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBzb21ldGhpbmcgaXMgdmVyeSB3cm9uZyBpZiB3ZSBkb24ndCBoYXZlIGJvdGggcTFTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyBhbmQgYTFBbnN3ZXIgc3RvcmVkXG4gICAgICAgICAgICAgICAgdGhpcy5xMUFuc3dlciA9IHNjZW5lU3RhdGUucTFBbnN3ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVRMkFuZFEzVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUucTJBbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnEyVGV4dEFyZWEudmFsdWUgPSBzY2VuZVN0YXRlLnEyQW5zd2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUucTNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY2VuZVN0YXRlLnEzU2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHNpZGUgb2YgW1wibGVmdFwiLCBcInJpZ2h0XCJdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc3RhdCBvZiBbXCJtZWFuXCIsIFwibWVkaWFuXCIsIFwibW9kZVwiLCBcInJhbmdlXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlW2Ake3NpZGV9XyR7c3RhdH1fc2hvd25gXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXZlYWxTdGF0KHNpZGUsIHN0YXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5kYXRhU29ydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U29ydGVkRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVNvcnRCdG5XaXRoVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2NlbmVTdGF0ZShkaWZmKSB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5jdXJyZW50U3RhdGUsIGRpZmYpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLnNjZW5lU3RhdGVbdGhpcy5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmV2ZWFsU3RhdChzaWRlLCBzdGF0KSB7XG4gICAgICAgIGxldCBidG5FbCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9yZXZlYWxfJHtzaWRlfV8ke3N0YXR9YCk7XG4gICAgICAgIGxldCBzdGF0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9XyR7c3RhdH1gKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZShidG5FbCk7XG4gICAgICAgIHRoaXMuYXBwLnNob3coc3RhdEVsKTtcbiAgICB9XG5cblxuICAgIHJlcGxhY2VTb3J0QnRuV2l0aFRleHQoKSB7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zaG93U29ydGVkRGF0YUJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgIH1cblxuICAgIHJldmVhbFN0YXRIYW5kbGVyKGUpIHtcbiAgICAgICAgbGV0IFtfMSwgXzIsIHNpZGUsIHN0YXRdID0gZS50YXJnZXQuaWQucmVwbGFjZSh0aGlzLmlkLCBcIlwiKS5zcGxpdChcIl9cIik7XG4gICAgICAgIHRoaXMucmV2ZWFsU3RhdChzaWRlLCBzdGF0KTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZVN0YXRlKHsgW2Ake3NpZGV9XyR7c3RhdH1fc2hvd25gXTogdHJ1ZSB9KVxuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAnUkVWRUFMX1NUQVQnLFxuICAgICAgICAgICAgc2lkZTogc2lkZSxcbiAgICAgICAgICAgIHN0YXQ6IHN0YXQsXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVNvcnREYXRhKGUpIHtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkRGF0YSgpO1xuICAgICAgICB0aGlzLnJlcGxhY2VTb3J0QnRuV2l0aFRleHQoKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJEQVRBX1NPUlRFRFwiLFxuICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZVN0YXRlKHtcImRhdGFTb3J0ZWRcIjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhpZGVBbGxGb3JtcygpIHtcbiAgICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLmZvcm1zKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKGYuZm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQcmV2QnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9ybS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlcih0aGlzLmN1cnJlbnRGb3JtLmdldERhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEZJUlNUX1RSQU5TSVRJT04gPT09IHRoaXMuY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJwcmV2XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvbi0tO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0QnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9ybS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlcih0aGlzLmN1cnJlbnRGb3JtLmdldERhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKExBU1RfVFJBTlNJVElPTiA9PT0gdGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcIm5leHRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uKys7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuIG9mIHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcIi5yZXZlYWwtc3RhdFwiKSkge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnJldmVhbFN0YXRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZERhdGFCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVTb3J0RGF0YSwgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVRMkFuZFEzVGV4dCgpIHtcbiAgICAgICAgbGV0IHBoUmVwbCA9IGA8c3BhbiBjbGFzcz1cInExLWFuc3dlclwiPiR7dGhpcy5xMUFuc3dlcn08L3NwYW4+YDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucTIudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQucmVwbGFjZShcbiAgICAgICAgICAgIFwiUExBQ0VIT0xERVJcIiwgcGhSZXBsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnEzLnRleHQgPSB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0LnJlcGxhY2UoXG4gICAgICAgICAgICBcIlBMQUNFSE9MREVSXCIsIHBoUmVwbFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnEyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0O1xuICAgICAgICB0aGlzLnEzVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0O1xuICAgIH1cblxuICAgIHNhdmVRMVN0YXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xMUFuc3dlciA9IGRhdGEuc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZVN0YXRlKHtcbiAgICAgICAgICAgIFwicTFTZWxlY3Rpb25cIjogZGF0YS5zZWxlY3RlZEVsZUlkLFxuICAgICAgICAgICAgXCJxMUFuc3dlclwiOiB0aGlzLnExQW5zd2VyLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVRMkFuZFEzVGV4dCgpO1xuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXN0aW9uKFwicTFcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgc2F2ZVEyU3RhdGUoZGF0YSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe3EyQW5zd2VyOiBkYXRhLmFuc3dlcn0pO1xuICAgICAgICBkYXRhLnF1ZXN0aW9uVGV4dCA9IGRhdGEucXVlc3Rpb25UZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgnPHNwYW4gY2xhc3M9XCJxMS1hbnN3ZXJcIj4nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCc8L3NwYW4+JywgJycpO1xuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXN0aW9uKFwicTJcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgc2F2ZVEzU3RhdGUoZGF0YSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe3EzU2VsZWN0aW9uOiBkYXRhLnNlbGVjdGVkRWxlSWR9KTtcbiAgICAgICAgZGF0YS5xdWVzdGlvblRleHQgPSBkYXRhLnF1ZXN0aW9uVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UoJzxzcGFuIGNsYXNzPVwicTEtYW5zd2VyXCI+JywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgnPC9zcGFuPicsICcnKTtcbiAgICAgICAgdGhpcy5zdWJtaXRRdWVzdGlvbihcInEzXCIsIGRhdGEpO1xuICAgIH1cblxuXG4gICAgc3VibWl0UXVlc3Rpb24ocU51bSwgZGF0YSkge1xuICAgICAgICBsZXQgbG9nRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTVUJNSVRfQU5TV0VSXCIsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JZDogYCR7dGhpcy5hcHAuYWN0aXZpdHlLZXl9LiR7dGhpcy5pZH0uJHtxTnVtfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLmV2ZW50cy5wdXNoKGxvZ0RhdGEpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIC8vIEkgKmJlbGlldmUqIHRoZXNlIG5leHQgNCBhcmUgaGFuZGxlIGJ5IHN1cGVyY2xhc3MgYW5kIGNhbiBnbyBhd2F5XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB0aGlzLnExRm9ybS5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5xMkZvcm0uc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMucTNGb3JtLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyYW5zaXRpb24oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZS5oYW5kbGVUcmFuc2l0aW9uKClcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRyYW5zaXRpb24pO1xuICAgICAgICB0aGlzLmhpZGVBbGxGb3JtcygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRGb3JtID0gdGhpcy5mb3Jtc1t0aGlzLmN1cnJlbnRUcmFuc2l0aW9uXTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmN1cnJlbnRGb3JtLmZvcm0pO1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudEZvcm0uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyID0gdGhpcy5zYXZlUTFTdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlciA9IHRoaXMuc2F2ZVEyU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5xMlRleHRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSB0aGlzLnNhdmVRM1N0YXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBpbnZhbGlkIHRyYW5zaXRpb246ICR7dGhpcy5jdXJyZW50VHJhbnNpdGlvbn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZW50ZXIoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZS5wb3N0X2VudGVyKClcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgaWYgKG51bGwgIT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVTdGF0ZSh0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0ZWFyZG93bkFsbEZvcm1FdmVudEhhbmRsZXJzKCkge1xuICAgIC8vICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZm9ybXMpIHtcbiAgICAvLyAgICAgICAgIGYudGVhcmRvd25FdmVudEhhbmRsZXJzKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIERpVGVzdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpb25zID0ge1xuICAgICAgICAgICAgc2hvd0J0bnM6IHRoaXMuc2hvd0J0bnMsXG4gICAgICAgICAgICBoaWRlQnRuczogdGhpcy5oaWRlQnRucyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idG5OYW1lcyA9IHtcbiAgICAgICAgICAgIHByZXY6IHRoaXMuYXBwLnByZXZCdG4sXG4gICAgICAgICAgICBuZXh0OiB0aGlzLmFwcC5uZXh0QnRuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5jdXN0b21FbnRlckFjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gYWN0aW9uLm5hbWU7XG4gICAgICAgICAgICBsZXQgYXJncyA9IGFjdGlvbi5hcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=