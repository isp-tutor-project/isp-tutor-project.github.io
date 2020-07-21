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
        this.userInfoRegion = document.getElementById("user_info_region");
        this.activityTitle = document.getElementById("activity_title");
        this.activitySection = document.getElementById("activity_section");
        this.signOutBtn = document.getElementById("sign_out_button");
        this.signInText = document.getElementById("sign_in_text");
        this.signOutUser = this.signOutUser.bind(this);
        // this.logoutHandler = logoutHandler;
        this.signOutBtn.addEventListener("click", this.signOutUser);
    }

    signOutUser(e) {
        this.userInfoRegion.classList.add("invisible");
        let homePage = localStorage.getItem("homepage");
        if (null === homePage) {
            homePage = window.location.origin + "/";
        }
        localStorage.clear();
        window.location.href = homePage;
    }

    displayActivityTitle(title) {
        this.activityTitle.innerText = title;
    }

    displayActivitySection(section) {
        this.activitySection.innerText = section;
    }

    displayUser(userName) {
        this.signInText.innerHTML = `Welcome, ${userName}`;
        this.userInfoRegion.classList.remove("invisible");
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

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"edges\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"edges\":{\"prev\":\"start\",\"next\":\"memoryIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro1\":{\"edges\":{\"prev\":\"intro\",\"next\":\"memoryIntro2\"},\"id\":\"memoryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro2\":{\"edges\":{\"prev\":\"memoryIntro1\",\"next\":\"memoryIntro3\"},\"id\":\"memoryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro3\":{\"edges\":{\"prev\":\"memoryIntro2\",\"next\":\"memoryIntro4\"},\"id\":\"memoryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro4\":{\"edges\":{\"prev\":\"memoryIntro3\",\"next\":\"memoryIntro5\"},\"id\":\"memoryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro5\":{\"edges\":{\"prev\":\"memoryIntro4\",\"next\":\"memoryIntro6\"},\"id\":\"memoryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro6\":{\"edges\":{\"prev\":\"memoryIntro5\",\"next\":\"memoryIntro7\"},\"id\":\"memoryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryIntro7\":{\"edges\":{\"prev\":\"memoryIntro6\",\"next\":\"memoryResults1Intro\"},\"id\":\"memoryIntro7\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1Intro\":{\"edges\":{\"prev\":\"memoryIntro7\",\"next\":\"memoryResults1\"},\"id\":\"memoryResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults1\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults1Intro\",\"next\":\"memoryResults2Intro\"},\"id\":\"memoryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2Intro\":{\"edges\":{\"prev\":\"memoryResults1\",\"next\":\"memoryResults2\"},\"id\":\"memoryResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults2\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults2Intro\",\"next\":\"memoryResults3Intro\"},\"id\":\"memoryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3Intro\":{\"edges\":{\"prev\":\"memoryResults2\",\"next\":\"memoryResults3\"},\"id\":\"memoryResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults3\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults3Intro\",\"next\":\"memoryResults4Intro\"},\"id\":\"memoryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4Intro\":{\"edges\":{\"prev\":\"memoryResults3\",\"next\":\"memoryResults4\"},\"id\":\"memoryResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults4\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults4Intro\",\"next\":\"memoryResults5Intro\"},\"id\":\"memoryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5Intro\":{\"edges\":{\"prev\":\"memoryResults4\",\"next\":\"memoryResults5\"},\"id\":\"memoryResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"memoryResults5\":{\"sceneType\":\"memoryResults\",\"edges\":{\"prev\":\"memoryResults5Intro\",\"next\":\"rocketsIntro1\"},\"id\":\"memoryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which do these results suggest students remember better?\",\"options\":[{\"value\":\"words\",\"label\":\"Words\"},{\"value\":\"pictures\",\"label\":\"Pictures\"},{\"value\":\"neither\",\"label\":\"Neither (they remember words and pictures the same)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that students remember PLACEHOLDER better.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students remember PLACEHOLDER better?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro1\":{\"edges\":{\"prev\":\"memoryResults5\",\"next\":\"rocketsIntro2\"},\"id\":\"rocketsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro2\":{\"edges\":{\"prev\":\"rocketsIntro1\",\"next\":\"rocketsIntro3\"},\"id\":\"rocketsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro3\":{\"edges\":{\"prev\":\"rocketsIntro2\",\"next\":\"rocketsIntro4\"},\"id\":\"rocketsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsIntro4\":{\"edges\":{\"prev\":\"rocketsIntro3\",\"next\":\"rocketsResults1Intro\"},\"id\":\"rocketsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1Intro\":{\"edges\":{\"prev\":\"rocketsIntro4\",\"next\":\"rocketsResults1\"},\"id\":\"rocketsResults1Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults1\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults1Intro\",\"next\":\"rocketsResults2Intro\"},\"id\":\"rocketsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2Intro\":{\"edges\":{\"prev\":\"rocketsResults1\",\"next\":\"rocketsResults2\"},\"id\":\"rocketsResults2Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults2\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults2Intro\",\"next\":\"rocketsResults3Intro\"},\"id\":\"rocketsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3Intro\":{\"edges\":{\"prev\":\"rocketsResults2\",\"next\":\"rocketsResults3\"},\"id\":\"rocketsResults3Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults3\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults3Intro\",\"next\":\"rocketsResults4Intro\"},\"id\":\"rocketsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4Intro\":{\"edges\":{\"prev\":\"rocketsResults3\",\"next\":\"rocketsResults4\"},\"id\":\"rocketsResults4Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults4\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults4Intro\",\"next\":\"rocketsResults5Intro\"},\"id\":\"rocketsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5Intro\":{\"edges\":{\"prev\":\"rocketsResults4\",\"next\":\"rocketsResults5\"},\"id\":\"rocketsResults5Intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"rocketsResults5\":{\"sceneType\":\"rocketsResults\",\"edges\":{\"prev\":\"rocketsResults5Intro\",\"next\":\"completed\"},\"id\":\"rocketsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of rocket do these results suggest flew higher?\",\"options\":[{\"value\":\"curved\",\"label\":\"Curved\"},{\"value\":\"straight\",\"label\":\"Straight\"},{\"value\":\"neither\",\"label\":\"Neither (both rockets flew the same height)\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER rocket(s) flew higher.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER rockets flew higher?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"edges\":{\"prev\":\"rocketsResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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
    // constructor(appData, activityConfig, defaultInitialState) {
    //     super(appData, activityConfig, defaultInitialState);
    // }

    createScene(sceneInfo) {
        let scene;
        switch(sceneInfo.sceneType) {
            case "carResults":
            case "libraryResults":
            case "memoryResults":
            case "rocketsResults":
                scene = new _scenes__WEBPACK_IMPORTED_MODULE_3__["DiTestResultsScene"](this, sceneInfo);
                break;
            default:
                scene = new _scenes__WEBPACK_IMPORTED_MODULE_3__["DiTestScene"](this, sceneInfo);

        }
        return scene;
    }

    // logStudentAnswer(questionName, answer) {
    //     let question = this.currentScene.questions[questionName];
    //     let isCorrect = "N/A";
    //     if (question.hasOwnProperty("correctAnswer")) {
    //         isCorrect = (answer === question.correctAnswer)
    //     }
    //     let qid = `${this.currentScene.id}.${questionName}`;
    //     if ("" !== this.testName) {
    //         qid = `${this.testName}.${qid}`;
    //     }
    //     let data = {
    //         action: "SUBMIT_ANSWER",
    //         questionId: qid,
    //         questionText: question.text,
    //         answer: answer,
    //         isCorrect: isCorrect,
    //         timestamp: new Date().toLocaleString()
    //     }
    //     console.log(data);
    // }

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

/***/ "./src/scenes/index.js":
/*!*****************************!*\
  !*** ./src/scenes/index.js ***!
  \*****************************/
/*! exports provided: DiTestScene, DiTestResultsScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testScene */ "./src/scenes/testScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiTestScene", function() { return _testScene__WEBPACK_IMPORTED_MODULE_0__["DiTestScene"]; });

/* harmony import */ var _testResultsScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testResultsScene */ "./src/scenes/testResultsScene.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiTestResultsScene", function() { return _testResultsScene__WEBPACK_IMPORTED_MODULE_1__["DiTestResultsScene"]; });






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

        this.handleShowLeftMean    = this.handleShowLeftMean.bind(this);
        this.handleShowRightMean   = this.handleShowRightMean.bind(this);
        this.handleShowSortedTable = this.handleShowSortedTable.bind(this);

        let side = "left"
        this.leftMeanBtn   = document.getElementById(`${this.id}_reveal_${side}_mean`);
        this.leftMeanValue = document.getElementById(`${this.id}_${side}_mean`);
        side = "right";
        this.rightMeanBtn   = document.getElementById(`${this.id}_reveal_${side}_mean`);
        this.rightMeanValue = document.getElementById(`${this.id}_${side}_mean`);
        this.showSortedTableBtn = document.getElementById(`${this.id}_show_sorted_table`);
        this.sortedTableText    = document.getElementById(`${this.id}_sorted_text`);
        this.sortedImg   = document.getElementById(`${this.id}_sorted`);
        this.unsortedImg = document.getElementById(`${this.id}_unsorted`);

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
            // fixme, these are the event handlers, which should be
            // updating sceneState when clicked
            if (sceneState.leftMeanShown) {
                this.showMean("left");
            }
            if (sceneState.rightMeanShown) {
                this.showMean("right");
            }
            if (sceneState.sortedTableShown) {
                this.showSortedTable();
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

    showMean(which) {
        if ("left" === which) {
            this.app.hide(this.leftMeanBtn);
            this.app.show(this.leftMeanValue);
        } else if ("right" === which) {
            this.app.hide(this.rightMeanBtn);
            this.app.show(this.rightMeanValue);
        } else {
            console.error(`showMean(${which}) is neither 'left' nor 'right'`);
        }
    }

    showSortedTable() {
        this.app.hide(this.showSortedTableBtn);
        this.app.hide(this.unsortedImg);
        this.app.show(this.sortedImg);
        this.app.show(this.sortedTableText);
    }

    handleShowLeftMean(e) {
        this.showMean("left");
        this.updateSceneState({"leftMeanShown": true});
    }

    handleShowRightMean(e) {
        this.showMean("right");
        this.updateSceneState({"rightMeanShown": true});
    }

    handleShowSortedTable(e) {
        this.showSortedTable();
        this.updateSceneState({"sortedTableShown": true});
    }

    hideAllForms() {
        for (let f of this.forms) {
            this.app.hide(f.form);
        }
    }

    handlePrevButton() {
        console.log("TestResultsScene::handlePrevButton()");
        if (this.currentForm.changed) {
            this.currentTransitionStateSaver(this.currentForm.getData());
        }
        if (FIRST_TRANSITION === this.currentTransition) {
            console.log("at first transition. go to prev scene");
            this.app.followEdge("prev");
        } else {
            this.currentTransition--;
            this.handleTransition();
        }
    }

    handleNextButton() {
        console.log("TestResultsScene::handleNextButton()");
        if (this.currentForm.changed) {
            this.currentTransitionStateSaver(this.currentForm.getData());
        }
        if (LAST_TRANSITION === this.currentTransition) {
            console.log("at last transition. go to next scene");
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
        this.leftMeanBtn.addEventListener(
            "click", this.handleShowLeftMean, {once: true}
        );
        this.rightMeanBtn.addEventListener(
            "click", this.handleShowRightMean, { once: true }
        );
        this.showSortedTableBtn.addEventListener(
            "click", this.handleShowSortedTable, { once: true }
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
        console.log("saveQ1State()");
        this.q1Answer = data.selectedValue;
        this.updateSceneState({
            "q1Selection": data.selectedEleId,
            "q1Answer": this.q1Answer,
        });
        this.updateQ2AndQ3Text();
        this.submitQuestion("q1", data);
    }

    saveQ2State(data) {
        console.log("saveQ2State()");
        this.updateSceneState({
            q2Answer: data.answer
        });
        data.questionText = data.questionText
            .replace('<span class="q1-answer">', '')
            .replace('</span>', '');
        this.submitQuestion("q2", data);
    }

    saveQ3State(data) {
        console.log("saveQ3State()");
        this.updateSceneState({
            q3Selection: data.selectedEleId
        });
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
        console.log(logData);
        this.app.state.events.push(logData);
    }

    defaultEnterSceneActions() {
        super.defaultEnterSceneActions();
        this.app.hide(this.leftMeanValue);
        this.app.hide(this.rightMeanValue);
        this.app.hide(this.sortedTableText);
        this.app.show(this.leftMeanBtn);
        this.app.show(this.rightMeanBtn);
        this.app.show(this.showSortedTableBtn);


        // if (process.env.NODE_ENV === "production") {
        //     this.app.disable(this.app.nextBtn);
        // } else {
        this.app.show(this.app.prevBtn);
        this.app.show(this.app.nextBtn);
        this.app.enable(this.app.prevBtn);
        this.app.enable(this.app.nextBtn);
        // }
        this.q1Form.setupEventHandlers();
        this.q2Form.setupEventHandlers();
        this.q3Form.setupEventHandlers();
    }

    handleTransition() {
        console.log("TestResultsScene.handleTransition()");
        console.log(this.currentTransition);
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
        console.log("TestResultsScene.post_enter()");
        console.log(this.forms);
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
        // if (process.env.NODE_ENV === "production") {
        //     this.app.hide(this.app.prevBtn);
        // } else {
        this.app.show(this.app.prevBtn);
        // }
        this.app.show(this.app.nextBtn);
    }

}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL25hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2Uvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmV0ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZXN0UmVzdWx0c1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGVzdFNjZW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVksSUFBSSxPQUFPO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHVCQUF1QjtBQUM1RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pUQTtBQUFBO0FBQUE7QUFBd0Q7O0FBRWpELDBCQUEwQixxRUFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJkaXByZXRlc3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcHJldGVzdC5qc1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgbGV0IGFjdGl2aXR5Q29uZmlnID0ge1xuICAgICAgICB1c2VySUQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpLFxuICAgICAgICBjbGFzc0NvZGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xhc3NDb2RlXCIpLFxuICAgICAgICBkYXRhYmFzZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhYmFzZVwiKSxcbiAgICAgICAgaG9tZXBhZ2U6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZXBhZ2VcIiksXG4gICAgICAgIGFjdGl2aXR5S2V5OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRBY3Rpdml0eVwiKSxcbiAgICAgICAgZmVhdHVyZXM6IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRBY3Rpdml0eUZlYXR1cmVzXCIpIHx8IFwiXCIpXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoXCI6XCIpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBcIlwiKVxuICAgIH07XG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlDb25maWcpO1xuICAgIHJldHVybiBhY3Rpdml0eUNvbmZpZztcbn0iLCIvLyBhYnN0cmFjdCBjbGFzcyAtIGludGVyZmFjZVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKSB7XG4gICAgICAgIHRoaXMuY2xhc3NDb2RlID0gY2xhc3NDb2RlO1xuICAgICAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTiA9IHRydWUpIHtcblxuICAgIH1cblxuICAgIHNldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG5cbiAgICBnZXRJbml0aWFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRGaW5hbEh5cG9EYXRhKCkge1xuXG4gICAgfVxuXG4gICAgc2F2ZVZhbHVlKHZhck5hbWUsIHZhbHVlKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgZ2V0Qm9vbFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEludFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbn07XG5cblxuIiwiaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RDd6SWstOFYyMFFxSk5TczBjQVYwdU5MM3FqZXFMTWRNXCIsXG4gICAgYXV0aERvbWFpbjogXCJpc3B0dXRvci5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiaXNwdHV0b3JcIlxufTtcblxuZXhwb3J0IGNsYXNzIEZpcmVzdG9yZURCIGV4dGVuZHMgRGF0YWJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgICB0aGlzLnN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgc3VwZXIuc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpO1xuICAgICAgICB0aGlzLnVzZXJSZWYgPSB0aGlzLnN0b3JlLmNvbGxlY3Rpb24odGhpcy5jbGFzc0NvZGUpLmRvYyh0aGlzLnVzZXJJRCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKSB7XG4gICAgICAgIC8vIHJldHVybnMgcHJvbWlzZSB3aXRoICdkb2MnIGlmIGl0IGV4aXN0cywgbnVsbCBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi5nZXQoKVxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2MuZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0Q3Vyckh5cG9UYXNrKCkge1xuXG4gICAgfVxuICBcbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT049dHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyRGF0YSgpXG4gICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRGF0YVthY3Rpdml0eUtleV07XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXRSUURhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJycXRlZFwiKTtcbiAgICAvLyB9XG5cblxuICAgIC8vIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcImluaXRpYWxIeXBvXCIpXG4gICAgLy8gICAgIC50aGVuKChzdHJEYXRhKSlcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRGaW5hbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiZmluYWxIeXBvXCIpXG4gICAgLy8gfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgdG8ge21lcmdlOiB0cnVlfSBvcHRpb24gZm9yIHNhZmV0eVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldChvYmplY3QsIHttZXJnZTogIW92ZXJ3cml0ZX0pOyAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZXMob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKG9iamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnVwZGF0ZSh7XG4gICAgICAgICAgICBbdmFyTmFtZV06IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmRlbGV0ZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMudXNlclJlZi5zZXQoe1xuICAgIC8vICAgICAgICAgW3Zhck5hbWVdOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0Qm9vbFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEludFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH0gICBcbiAgICBcbiAgICAvLyBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldFRleHRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBnZXRKU09OVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxufTsiLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2VEQiB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZURCXCI7XG5pbXBvcnQgeyBGaXJlc3RvcmVEQiB9IGZyb20gXCIuL2ZpcmVzdG9yZURCXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREQkNvbm5lY3Rpb24oZGJUeXBlKSB7XG4gICAgbGV0IGRiO1xuICAgIHN3aXRjaChkYlR5cGUpIHtcbiAgICAgICAgY2FzZSBcImZpcmVzdG9yZVwiOlxuICAgICAgICAgICAgZGIgPSBuZXcgRmlyZXN0b3JlREIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGIgPSBuZXcgTG9jYWxTdG9yYWdlREIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRiOyBcbn1cbiIsIlxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuXG4vLyBOT1RFOiB0aGlzIEFQSSBtdXN0IHVzZSBwcm9taXNlcyB0byBiZSBjb21wYXRpYmxlIHdpdGggYW55IGRiXG4vLyB3ZSBtYXkgYmUgdXNpbmcsIHdoaWNoIG1heSBiZSBlaXRoZXIgc3luYyBvciBhc3luY1xuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZURCIGV4dGVuZHMgRGF0YWJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgc3VwZXIuc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpO1xuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAvLyB0aGlzLnNhdmVWYWx1ZShcImNsYXNzQ29kZVwiLCBjbGFzc0NvZGUpLFxuICAgICAgICAvLyB0aGlzLnNhdmVWYWx1ZShcInVzZXJJRFwiLCB1c2VySUQpLFxuICAgICAgICAvLyBdKS50aGVuKChbcmVzdWx0MSwgcmVzdWx0Ml0pID0+IHsgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUuY291bnQoXCJnZXRVc2VyRGF0YSgpIGNhbGxlZFwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dFZhbHVlKFwiY2xhc3NDb2RlXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJ1c2VySURcIiksXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXR5RGF0YShcInJxdGVkXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXRDdXJySHlwb1Rhc2soKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0SW50aWFsSHlwb0RhdGEoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0RmluYWxIeXBvRGF0YSgpXG4gICAgICAgIF0pLnRoZW4oKFtjY1JlcywgdWlkUmVzLCBycVJlcywgY2h0UmVzLCBpaFJlcywgZmhSZXNdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzQ29kZSA9IGNjUmVzO1xuICAgICAgICAgICAgZGF0YS51c2VySUQgPSB1aWRSZXM7XG4gICAgICAgICAgICBkYXRhLnJxdGVkID0gcnFSZXM7XG4gICAgICAgICAgICBpZiAoY2h0UmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5jdXJySHlwb1Rhc2tJZHggPSBjaHRSZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpaFJlcykge1xuICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gaWhSZXMuZmlyc3RQcmVkaWN0aW9uO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpaFJlcy5pbml0aWFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaFJlcykge1xuICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IGZoUmVzLnNlY29uZFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5maW5hbEh5cG8gPSBmaFJlcy5maW5hbEh5cG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoYWN0aXZpdHlLZXkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiAhZGVjb2RlSlNPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVKU09OVmFsdWUoYWN0aXZpdHlLZXksIG9iamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0UlFEYXRhKCkge1xuICAgICAgICBsZXQgcmV0VmFsID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIilcbiAgICAgICAgLnRoZW4oKHJxdGVkKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhycXRlZCk7XG4gICAgICAgICAgICBpZiAocnF0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwgPSBycXRlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJxIGlzbid0IHNlbGVjdGVkIGhhcmQtY29kZSB0byBjcnlzdGFsIGdyb3d0aFxuICAgICAgICAgICAgICAgIHJldFZhbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlU3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJlYTogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpYzogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYWJsZTogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSUTogeyBpbmRleDogMSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV0VmFsKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEludFZhbHVlKFwiY3Vyckh5cG9UYXNrSWR4XCIpXG4gICAgfVxuXG4gICAgZ2V0SW50aWFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcImZpcnN0UHJlZGljdGlvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHByZWQxKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdldEluaXRpYWxIeXBvRGF0YSgpOmZpcnN0UHJlZGljdGlvbiAke3ByZWQxfWApO1xuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBwcmVkMSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0UHJlZGljdGlvbiA9IHByZWQxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJpbml0aWFsSHlwb1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0UHJlZGljdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoaW5pdEh5cG8pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6aW5pdEh5cG8gJHtpbml0SHlwb31gKTtcbiAgICAgICAgICAgICAgICBkYXRhLmluaXRpYWxIeXBvID0gaW5pdEh5cG87XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGaW5hbEh5cG9EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0VmFsdWUoXCJzZWNvbmRQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0RmluYWxIeXBvRGF0YSgpOnNlY29uZFByZWRpY3Rpb24gJHtwcmVkMn1gKVxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBwcmVkMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNlY29uZFByZWRpY3Rpb24gPSBwcmVkMjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SlNPTlZhbHVlKFwiZmluYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChmaW5hbEh5cG8pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0RmluYWxIeXBvRGF0YSgpOmZpbmFsSHlwbyAke2ZpbmFsSHlwb31gKTtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZpbmFsSHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFZhbHVlcyhvYmplY3QsIG92ZXJ3cml0ZT1mYWxzZSkge1xuICAgICAgICAvLyBvdmVyd3JpdGUgcGFyYW0gaXMgaWdub3JlZCwgYXMgaXQgaXMgc3BlY2lmaWMgdG8gZmlyZXN0b3JlXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuaXRlbXMob2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZVZhbHVlKHZhck5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5zZXRJdGVtKHZhck5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFwidHJ1ZVwiID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEludFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXRWYWwpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIGxldCByZXRWYWw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXRWYWwpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRKU09OVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vLyBsZXQgZGIgPSBuZXcgRGF0YWJhc2UoXCJCT0dVU19DTEFTU1wiLCBcIkJPR1VTX1NUVURFTlRcIik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdi5uYXZiYXJcIik7XG4gICAgICAgIHRoaXMudXNlckluZm9SZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfaW5mb19yZWdpb25cIik7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlfdGl0bGVcIik7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpdml0eV9zZWN0aW9uXCIpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25fb3V0X2J1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduX2luX3RleHRcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dFVzZXIgPSB0aGlzLnNpZ25PdXRVc2VyLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMubG9nb3V0SGFuZGxlciA9IGxvZ291dEhhbmRsZXI7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zaWduT3V0VXNlcik7XG4gICAgfVxuXG4gICAgc2lnbk91dFVzZXIoZSkge1xuICAgICAgICB0aGlzLnVzZXJJbmZvUmVnaW9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIGxldCBob21lUGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZXBhZ2VcIik7XG4gICAgICAgIGlmIChudWxsID09PSBob21lUGFnZSkge1xuICAgICAgICAgICAgaG9tZVBhZ2UgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaG9tZVBhZ2U7XG4gICAgfVxuXG4gICAgZGlzcGxheUFjdGl2aXR5VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIH1cblxuICAgIGRpc3BsYXlBY3Rpdml0eVNlY3Rpb24oc2VjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2aXR5U2VjdGlvbi5pbm5lclRleHQgPSBzZWN0aW9uO1xuICAgIH1cblxuICAgIGRpc3BsYXlVc2VyKHVzZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dC5pbm5lckhUTUwgPSBgV2VsY29tZSwgJHt1c2VyTmFtZX1gO1xuICAgICAgICB0aGlzLnVzZXJJbmZvUmVnaW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGdldERCQ29ubmVjdGlvbiB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L2lzcC1kYXRhYmFzZVwiO1xuaW1wb3J0IHsgU25hY2tCYXJ9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NuYWNrYmFyXCI7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZUJhc2VkQXBwIHtcbiAgICBjb25zdHJ1Y3RvcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSkge1xuICAgICAgICB0aGlzLnNjZW5lRGF0YSA9IGFwcERhdGEuc2NlbmVzO1xuICAgICAgICB0aGlzLmFjdGl2aXR5Q29uZmlnID0gYWN0aXZpdHlDb25maWc7XG4gICAgICAgIHRoaXMuZGIgPSBnZXREQkNvbm5lY3Rpb24oYWN0aXZpdHlDb25maWcuZGF0YWJhc2UpO1xuICAgICAgICB0aGlzLmRiLnNldENyZWRlbnRpYWxzKGFjdGl2aXR5Q29uZmlnLmNsYXNzQ29kZSwgYWN0aXZpdHlDb25maWcudXNlcklEKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eUtleSA9IGFjdGl2aXR5Q29uZmlnLmFjdGl2aXR5S2V5O1xuICAgICAgICB0aGlzLmRlZmF1bHRTdGF0ZSA9IGRlZmF1bHRJbml0aWFsU3RhdGU7XG5cbiAgICAgICAgdGhpcy5zbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgICAgICB0aGlzLmhvbWVQYWdlQnRuID0gbnVsbDtcbiAgICAgICAgbGV0IGhvbWVQYWdlQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29faG9tZV9wYWdlXCIpO1xuICAgICAgICB0aGlzLm5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRfYnRuXCIpO1xuICAgICAgICB0aGlzLnByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZfYnRuXCIpO1xuICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjZW5lX2lkX3JlZ2lvblwiKTtcbiAgICAgICAgaWYgKGhvbWVQYWdlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVQYWdlQnRuID0gaG9tZVBhZ2VCdG47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVHb0hvbWVQYWdlID0gdGhpcy5oYW5kbGVHb0hvbWVQYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVByZXYgPSB0aGlzLmhhbmRsZVByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaG9tZVBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlR29Ib21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU5leHQpO1xuICAgICAgICB0aGlzLnByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUHJldik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnNjZW5lcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2U2NlbmUgPSBudWxsO1xuICAgICAgICAvLyBpcyB0aGlzIG5lZWRlZD8/P1xuICAgICAgICB0aGlzLmJvZ3VzU2NlbmVJbmZvID0ge1xuICAgICAgICAgICAgaWQ6IFwiTi9BXCIsXG4gICAgICAgICAgICBzY2VuZVR5cGU6IFwiYm9ndXNcIlxuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYXBwID0gdGhpcztcbiAgICB9XG5cblxuICAgIC8vIHNldFNuYWNrYmFyKHNuYWNrYmFyKSB7XG4gICAgLy8gICAgIHRoaXMuc25hY2tiYXIgPSBzbmFja2JhcjtcbiAgICAvLyB9XG5cbiAgICBzaG93RmVlZGJhY2soZmVlZGJhY2spIHtcbiAgICAgICAgdGhpcy5zbmFja2Jhci5zaG93KGZlZWRiYWNrKTtcbiAgICB9XG5cbiAgICBoYW5kbGVHb0hvbWVQYWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5hY3Rpdml0eUNvbmZpZy5ob21lcGFnZVxuICAgIH1cblxuICAgIGhhbmRsZVByZXYoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlUHJldkJ1dHRvbigpO1xuICAgICAgICB0aGlzLnNhdmVBcHBTdGF0ZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlTmV4dEJ1dHRvbigpO1xuICAgICAgICB0aGlzLnNhdmVBcHBTdGF0ZSgpO1xuICAgIH1cblxuICAgIHNldFN0YXJ0U2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwic2V0U3RhcnRTY2VuZSgpXCIsIHNjZW5lSWQpO1xuICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBzY2VuZUlkO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nXCIpO1xuICAgICAgICB0aGlzLmdldEFwcFN0YXRlKClcbiAgICAgICAgICAgIC50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGFjdGl2aXR5IGRhdGEgaW4gZGIuIHVzaW5nIGluaXRpYWwgZGF0YVwiKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXMuZGVmYXVsdFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTY2VuZXNcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvbi5zY2VuZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVJZCA9IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjcmVhdGluZyBzY2VuZSBmb3IgJHtzY2VuZUlkfWApO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVPYmogPSB0aGlzLmNyZWF0ZVNjZW5lKHRoaXMuc2NlbmVEYXRhW3NjZW5lSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2NlbmVPYmopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZUlkXSA9IHNjZW5lT2JqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2NlbmVTdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0b3JpbmcgQXBwIFN0YXRlXCIpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvbi5zY2VuZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVJZCA9IHNlY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZVN0YXRlID0gdGhpcy5zdGF0ZS5zY2VuZVN0YXRlW3NjZW5lSWRdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lc1tzY2VuZUlkXS5yZXN0b3JlU3RhdGUoc2NlbmVTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3RvcmluZyBDdXJyZW50IFNjZW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGVidWcodGhpcy5zY2VuZURhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NlbmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nb3RvU3RhcnRTY2VuZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFwcFN0YXRlKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiTG9hZGluZyBBcHAgU3RhdGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLmdldEFjdGl2aXR5RGF0YSh0aGlzLmFjdGl2aXR5S2V5KTtcbiAgICB9XG5cbiAgICBzYXZlQXBwU3RhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJTYXZpbmcgQXBwIFN0YXRlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5zZXRBY3Rpdml0eURhdGEodGhpcy5hY3Rpdml0eUtleSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIC8vIHlvdSdsbCB3YW50IHRvIG92ZXJyaWRlIHRoaXMgdG8gZG8gYW55dGhpbmcgdXNlZnVsXG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJjcmVhdGVTY2VuZSgpXCIsIHNjZW5lSW5mbywgc2NlbmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiBuZXcgU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUb1NjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMubG9nU2NlbmVDaGFuZ2Uoc2NlbmUpO1xuICAgICAgICB0aGlzLmdvdG9TY2VuZShzY2VuZSk7XG4gICAgfVxuXG4gICAgZ290b1NjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmICh0aGlzLnByZXZTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUucHJlX2V4aXQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLmV4aXQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLnBvc3RfZXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnByZV9lbnRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5lbnRlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wb3N0X2VudGVyKCk7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnByZXZTY2VuZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NlbmVJZCgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlTY2VuZUlkKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uLmlubmVySFRNTCA9IHRoaXMuY3VycmVudFNjZW5lLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9va3VwU2NlbmUoc2NlbmVJZCkge1xuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLnNjZW5lc1tzY2VuZUlkXTtcbiAgICAgICAgaWYgKCFzY2VuZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRVJST1I6IG5vIHN1Y2ggc2NlbmUgJHtzY2VuZUlkfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG5cbiAgICBmb2xsb3dFZGdlKGVkZ2VOYW1lKSB7XG4gICAgICAgIGxldCBuZXdTY2VuZUlkID0gdGhpcy5jdXJyZW50U2NlbmUuZWRnZXNbZWRnZU5hbWVdO1xuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKG5ld1NjZW5lSWQpO1xuICAgICAgICB0aGlzLnN3aXRjaFRvU2NlbmUobmV3U2NlbmUpO1xuICAgIH1cblxuICAgIGxvZ1NjZW5lQ2hhbmdlKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJTQ0VORV9UUkFOU0lUSU9OXCIsXG4gICAgICAgICAgICBmcm9tOiB0aGlzLmN1cnJlbnRTY2VuZS5pZCxcbiAgICAgICAgICAgIHRvOiBzY2VuZS5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcIlVwZGF0aW5nIHN0YXRlLmV2ZW50c1wiKTtcbiAgICB9XG5cblxuICAgIGdvdG9TdGFydFNjZW5lKCkge1xuICAgICAgICAvLyBieXBhc3NlcyBzd2l0Y2hUb1NjZW5lKCkgYW5kIHRodXMgbG9nU2NlbmVDaGFuZ2UoKVxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XG4gICAgICAgIGxldCBzdGFydFNjZW5lID0gdGhpcy5jdXJyZW50U2NlbmU7XG4gICAgICAgIGlmICghc3RhcnRTY2VuZSkge1xuICAgICAgICAgICAgc3RhcnRTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUodGhpcy5zdGFydFNjZW5lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiQVBQX1NUQVJUXCIsXG4gICAgICAgICAgICBzY2VuZTogIHN0YXJ0U2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgICAgIHRoaXMuZ290b1NjZW5lKHN0YXJ0U2NlbmUpO1xuICAgIH1cblxuXG4gICAgaGlkZShlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIHNob3coZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBtYWtlSW52aXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VWaXNpYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmVCYXNlZEFwcCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xuXG5leHBvcnQge1xuICAgIFNjZW5lQmFzZWRBcHAsXG4gICAgU2NlbmVcbn07XG4iLCJleHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Gb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGZvcm1JbmZvLCBlbGVJZCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICB0aGlzLmZvcm1JbmZvID0gZm9ybUluZm87XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlkKTtcbiAgICAgICAgdGhpcy5yYWRpb3MgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtIGlzIHZhbGlkOlwiLCB2YWxpZGl0eSk7XG4gICAgICAgIHJldHVybiB2YWxpZGl0eTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAvLyBzZXQgZm9ybSB0byBkaXJ0eSBzdGF0ZSBzbyBpdCB3aWxsIGdldCBzYXZlZCBsYXRlciBvblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgICAgIHJiLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlYXJkb3duRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgICAgIHJiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ2V0Q29ycmVjdG5lc3MoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgKVxuICAgICAgICBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICAvLyBsZXQgYW5zVGV4dCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBjb3JyZWN0QW5zd2VyID0gc2ZpLmNvcnJlY3RBbnN3ZXI7XG4gICAgICAgIGxldCBpc0NvcnJlY3Q7XG5cbiAgICAgICAgaWYgKFwiTi9BXCIgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdEFuc3dlciA9PT0gdmFsKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQ29ycmVjdDtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjaygpIHtcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzQ29ycmVjdCwgc2ZpKTtcbiAgICAgICAgbGV0IGZiVGV4dCwgZmJDbGFzc05hbWUsIGZiTXNnO1xuICAgICAgICBzd2l0Y2goaXNDb3JyZWN0KSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLnBvc0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJwb3MtZmVlZGJhY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm5lZ0ZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJuZWctZmVlZGJhY2tcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKGZiVGV4dCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yoc2ZpLm50bEZiKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIChmYlRleHQpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYk1zZyA9IGA8c3BhbiBjbGFzcz1cIiR7ZmJDbGFzc05hbWV9XCI+JHtmYlRleHR9PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZiTXNnO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGxibCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVHlwZTogc2ZpLnR5cGUsXG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IHNmaS50ZXh0LFxuICAgICAgICAgICAgc2VsZWN0ZWRFbGVJZDogc2VsZWN0ZWRBbnN3ZXIuaWQsXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiB2YWwsXG4gICAgICAgICAgICBzZWxlY3RlZExhYmVsOiBsYmwsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIG5vbi1kaXJ0eSBzdGF0ZSwgc28gd2UgZG9uJ3QgcmVzdWJtaXQgdW5sZXNzIHRoZXlcbiAgICAgICAgLy8gY2hhbmdlIGFnYWluXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRJbml0aWFsaXppbmcgU2NlbmU6ICR7c2NlbmVJbmZvLmlkfWApO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgLy8gY29weSBhbGwgc2NlbmVJbmZvIHRvICd0aGlzJ1xuICAgICAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2NlbmVJbmZvKSkge1xuICAgICAgICAgICAgdGhpc1trXSA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICAvLyBiaW5kIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgdGhpcy5oYW5kbGVGb2xsb3dFZGdlQnV0dG9uID0gdGhpcy5oYW5kbGVGb2xsb3dFZGdlQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd0J0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUJ0bnMoYnRuTmFtZXMpIHtcbiAgICAgICAgZm9yIChsZXQgYnRuTmFtZSBvZiBidG5OYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuTmFtZXMuaGFzT3duUHJvcGVydHkoYnRuTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYnRuTmFtZXNbYnRuTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBoYW5kbGVGb2xsb3dFZGdlQnV0dG9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZWRnZU5hbWUgPSBlLnRhcmdldC5kYXRhc2V0LmVkZ2U7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoZWRnZU5hbWUpO1xuICAgIH1cblxuICAgIGdldEZvbGxvd0VkZ2VFbGVtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvbGxvdy1lZGdlXCIpO1xuICAgIH1cblxuICAgIHNldHVwRm9sbG93RWRnZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZ2V0Rm9sbG93RWRnZUVsZW1lbnRzKCkpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgXCJjbGlja1wiLCB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24sIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdG9yZVN0YXRlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgXFx0UmVzdG9yaW5nIFNjZW5lIFN0YXRlIGZvcjogJHt0aGlzLmlkfSBgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBfaXNCb2d1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgPT09IFwiTi9BXCIgfHwgdGhpcy5zY2VuZVR5cGUgPT09IFwiYm9ndXNcIjtcbiAgICB9XG5cbiAgICBoYW5kbGVQcmV2QnV0dG9uKCkge1xuICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKFwicHJldlwiKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0QnV0dG9uKCkge1xuICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKFwibmV4dFwiKTtcbiAgICB9XG5cbiAgICBoYXNGb3JtKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9ybUNoYW5nZWQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcmVfZW50ZXIoKSB7XG5cbiAgICB9XG5cbiAgICBlbnRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYEVudGVyaW5nIFNjZW5lOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJcXHRVcGRhdGluZyBzdGF0ZS5jdXJyZW50U2NlbmVcIik7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLmN1cnJlbnRTY2VuZSA9IHRoaXMuaWQ7XG4gICAgICAgIHRoaXMuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUVudGVyQWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0X2VudGVyKCkge1xuXG4gICAgfVxuXG4gICAgcHJlX2V4aXQoKSB7XG5cbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgRXhpdGluZyBTY2VuZTogJHt0aGlzLmlkfWApO1xuICAgICAgICB0aGlzLmRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUV4aXRBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9leGl0KCkge1xuXG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIHRoaXMuc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmltcGxlbWVudGVkIE1ldGhvZDogcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRleHRhcmVhRm9ybSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBmb3JtSW5mbywgZWxlSWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGZvcm1JbmZvO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybSk7XG4gICAgICAgIHRoaXMudGV4dGFyZWEgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbCcpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybSBpcyB2YWxpZDpcIiwgdmFsaWRpdHkpO1xuICAgICAgICByZXR1cm4gdmFsaWRpdHk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gZGlydHkgc3RhdGUgc28gaXQgd2lsbCBnZXQgc2F2ZWQgbGF0ZXIgb25cbiAgICAgICAgaWYgKHRoaXMudGV4dGFyZWEudmFsdWUudHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgIC8vICAgICByYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHRlYXJkb3duRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgLy8gICAgIHJiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnRleHRhcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgfVxuXG5cbiAgICBnZXRDb3JyZWN0bmVzcygpIHtcbiAgICAgICAgLy8gbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAvLyAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICAvLyApXG4gICAgICAgIC8vIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIC8vIC8vIGxldCBhbnNUZXh0ID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgLy8gbGV0IGNvcnJlY3RBbnN3ZXIgPSBzZmkuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgLy8gbGV0IGlzQ29ycmVjdDtcblxuICAgICAgICAvLyBpZiAoXCJOL0FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAvLyAgICAgaXNDb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChjb3JyZWN0QW5zd2VyID09PSB2YWwpIHtcbiAgICAgICAgLy8gICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gaXNDb3JyZWN0O1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjaygpIHtcbiAgICAgICAgLy8gbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGlzQ29ycmVjdCwgc2ZpKTtcbiAgICAgICAgbGV0IGZiVGV4dCwgZmJDbGFzc05hbWUsIGZiTXNnO1xuICAgICAgICAvLyBzd2l0Y2ggKGlzQ29ycmVjdCkge1xuICAgICAgICAvLyAgICAgY2FzZSB0cnVlOlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwibmVnLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgLy8gICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHR5cGVvZiAoZmJUZXh0KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIChzZmkubnRsRmIpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodHlwZW9mIChmYlRleHQpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBmYk1zZyA9IGA8c3BhbiBjbGFzcz1cIiR7ZmJDbGFzc05hbWV9XCI+JHtmYlRleHR9PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZiTXNnO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICAvLyBsZXQgc2VsZWN0ZWRBbnN3ZXIgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgLy8gICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCdcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gbGV0IGxibCA9IHNlbGVjdGVkQW5zd2VyLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLnRleHRhcmVhLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25UeXBlOiBzZmkudHlwZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogc2ZpLnRleHQsXG4gICAgICAgICAgICAvLyBzZWxlY3RlZEVsZUlkOiBzZWxlY3RlZEFuc3dlci5pZCxcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkVmFsdWU6IHZhbCxcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkTGFiZWw6IGxibCxcbiAgICAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZm9ybSB0byBub24tZGlydHkgc3RhdGUsIHNvIHdlIGRvbid0IHJlc3VibWl0IHVubGVzcyB0aGV5XG4gICAgICAgIC8vIGNoYW5nZSBhZ2FpblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIC8vIGdldEZvcm1EYXRhKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vICAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuXG4gICAgLy8gICAgICAgICBsZXQgZmJUZXh0O1xuICAgIC8vICAgICAgICAgbGV0IGZiQ2xhc3NOYW1lO1xuXG4gICAgLy8gICAgICAgICBpZiAoXCJuL2FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgIC8vICAgICAgICAgICAgIGlzQ29ycmVjdCA9IG51bGw7XG4gICAgLy8gICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgIC8vICAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAoY29ycmVjdEFuc3dlciA9PT0gdmFsKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkucG9zRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcInBvcy1mZWVkYmFja1wiO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkubmVnRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSAnbmVnLWZlZWRiYWNrJztcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgaWYgKCFmYlRleHQpIHtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSAnbnRsLWZlZWRiYWNrJztcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgdGhpcy5hcHAuc2hvd0ZlZWRiYWNrKGZiTXNnKTtcbiAgICAvLyAgICAgICAgIC8vIHdoYXQgd2Ugd2FudCB0byBzdG9yZSBpbiBmaXJlc3RvcmVcbiAgICAvLyB9XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBsZXQgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uPC9zcGFuPmA7XG4gICAgLy8gICAgICAgICB0aGlzLmFwcC5zaG93RmVlZGJhY2soZmJNc2cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5leHBvcnQgY2xhc3MgU25hY2tCYXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlEKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCB8fCBcInNuYWNrYmFyXCIpO1xuICAgIH1cblxuICAgIHNob3codGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mKHRleHQpICE9PSBcInVuZGVmaW5lZFwiICYmIG51bGwgIT09IHRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gRElWXG4gICAgICAgICAgICAvLyB0aGlzLmVsLmNsYXNzTmFtZSA9IFwic2hvd1wiO1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICAgIC8vIEFmdGVyIDMgc2Vjb25kcywgcmVtb3ZlIHRoZSBzaG93IGNsYXNzIGZyb20gRElWXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzbmFja2Jhci5jbGFzc05hbWUgPSBzbmFja2Jhci5jbGFzc05hbWUucmVwbGFjZShcInNob3dcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvbmF2YmFyXCI7XG5cbmltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuaW1wb3J0IHsgRGlUZXN0U2NlbmUsIERpVGVzdFJlc3VsdHNTY2VuZSB9IGZyb20gXCIuL3NjZW5lc1wiO1xuXG5leHBvcnQgY2xhc3MgRGlUZXN0QXBwIGV4dGVuZHMgU2NlbmVCYXNlZEFwcHtcbiAgICAvLyBjb25zdHJ1Y3RvcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSkge1xuICAgIC8vICAgICBzdXBlcihhcHBEYXRhLCBhY3Rpdml0eUNvbmZpZywgZGVmYXVsdEluaXRpYWxTdGF0ZSk7XG4gICAgLy8gfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGxldCBzY2VuZTtcbiAgICAgICAgc3dpdGNoKHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjYXJSZXN1bHRzXCI6XG4gICAgICAgICAgICBjYXNlIFwibGlicmFyeVJlc3VsdHNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vcnlSZXN1bHRzXCI6XG4gICAgICAgICAgICBjYXNlIFwicm9ja2V0c1Jlc3VsdHNcIjpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBEaVRlc3RSZXN1bHRzU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2NlbmUgPSBuZXcgRGlUZXN0U2NlbmUodGhpcywgc2NlbmVJbmZvKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY2VuZTtcbiAgICB9XG5cbiAgICAvLyBsb2dTdHVkZW50QW5zd2VyKHF1ZXN0aW9uTmFtZSwgYW5zd2VyKSB7XG4gICAgLy8gICAgIGxldCBxdWVzdGlvbiA9IHRoaXMuY3VycmVudFNjZW5lLnF1ZXN0aW9uc1txdWVzdGlvbk5hbWVdO1xuICAgIC8vICAgICBsZXQgaXNDb3JyZWN0ID0gXCJOL0FcIjtcbiAgICAvLyAgICAgaWYgKHF1ZXN0aW9uLmhhc093blByb3BlcnR5KFwiY29ycmVjdEFuc3dlclwiKSkge1xuICAgIC8vICAgICAgICAgaXNDb3JyZWN0ID0gKGFuc3dlciA9PT0gcXVlc3Rpb24uY29ycmVjdEFuc3dlcilcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgcWlkID0gYCR7dGhpcy5jdXJyZW50U2NlbmUuaWR9LiR7cXVlc3Rpb25OYW1lfWA7XG4gICAgLy8gICAgIGlmIChcIlwiICE9PSB0aGlzLnRlc3ROYW1lKSB7XG4gICAgLy8gICAgICAgICBxaWQgPSBgJHt0aGlzLnRlc3ROYW1lfS4ke3FpZH1gO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBkYXRhID0ge1xuICAgIC8vICAgICAgICAgYWN0aW9uOiBcIlNVQk1JVF9BTlNXRVJcIixcbiAgICAvLyAgICAgICAgIHF1ZXN0aW9uSWQ6IHFpZCxcbiAgICAvLyAgICAgICAgIHF1ZXN0aW9uVGV4dDogcXVlc3Rpb24udGV4dCxcbiAgICAvLyAgICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgIC8vICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgLy8gICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIH1cblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IERpVGVzdEFwcCB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9uYXZiYXJcIjtcblxuaW1wb3J0IHsgZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvYWN0aXZpdHktY29uZmlnXCI7XG5cblxuY29uc3QgREVGQVVMVF9BUFBfSU5JVElBTF9TVEFURSA9IHtcbiAgICBldmVudHM6IFtdLFxuICAgIC8vIG1hcHBpbmcgb2Ygc2NlbmVJRHMgLT4gc2NlbmUtdHlwZSBzcGVjaWZpYyBkYXRhXG4gICAgc2NlbmVTdGF0ZToge30sXG4gICAgY3VycmVudFNjZW5lOiBcInN0YXJ0XCJcbn07XG5cblxubGV0IGFjdGl2aXR5Q29uZmlnID0gZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uKCk7XG5jb25zdCBhY3Rpdml0eURhdGEgPSByZXF1aXJlKFwiLi4vZGF0YS9kaVByZVRlc3QuanNvblwiKTtcblxubGV0IG5hdmJhciA9IG5ldyBOYXZCYXIoKTtcbm5hdmJhci5kaXNwbGF5QWN0aXZpdHlUaXRsZShcIkRhdGEgSW50ZXJwcmV0YXRpb24gUHJlLVRlc3RcIik7XG5uYXZiYXIuZGlzcGxheVVzZXIoYWN0aXZpdHlDb25maWcudXNlcklEKTtcblxuLy8gY29uc29sZS5sb2coYWN0aXZpdHlDb25maWcpO1xuXG5sZXQgYXBwID0gbmV3IERpVGVzdEFwcChcbiAgICBhY3Rpdml0eURhdGEsIGFjdGl2aXR5Q29uZmlnLCBERUZBVUxUX0FQUF9JTklUSUFMX1NUQVRFXG4pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBhcHAuc2V0U3RhcnRTY2VuZShcInN0YXJ0XCIpO1xufVxuYXBwLnN0YXJ0KClcblxuIiwiaW1wb3J0IHsgRGlUZXN0U2NlbmUgfSBmcm9tIFwiLi90ZXN0U2NlbmVcIjtcbmltcG9ydCB7IERpVGVzdFJlc3VsdHNTY2VuZSB9IGZyb20gXCIuL3Rlc3RSZXN1bHRzU2NlbmVcIjtcblxuZXhwb3J0IHsgRGlUZXN0U2NlbmUsIERpVGVzdFJlc3VsdHNTY2VuZSB9OyIsImltcG9ydCB7IERpVGVzdFNjZW5lIH0gZnJvbSBcIi4vdGVzdFNjZW5lXCI7XG5cbmltcG9ydCB7IFJhZGlvQnV0dG9uRm9ybSB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlL3JhZGlvLWJ1dHRvbi1mb3JtXCI7XG5pbXBvcnQgeyBUZXh0YXJlYUZvcm0gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZS90ZXh0YXJlYS1mb3JtXCI7XG5cbmNvbnN0IEZJUlNUX1RSQU5TSVRJT04gPSAwO1xuY29uc3QgTEFTVF9UUkFOU0lUSU9OID0gMjtcblxuZXhwb3J0IGNsYXNzIERpVGVzdFJlc3VsdHNTY2VuZSBleHRlbmRzIERpVGVzdFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMucTFBbnN3ZXIgPSBudWxsO1xuICAgICAgICAvLyBkZWZhdWx0IHRvIHRoZSBmaXJzdCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb24gPSBGSVJTVF9UUkFOU0lUSU9OO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlciA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNhdmVRMVN0YXRlID0gdGhpcy5zYXZlUTFTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhdmVRMlN0YXRlID0gdGhpcy5zYXZlUTJTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNhdmVRM1N0YXRlID0gdGhpcy5zYXZlUTNTdGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd0xlZnRNZWFuICAgID0gdGhpcy5oYW5kbGVTaG93TGVmdE1lYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93UmlnaHRNZWFuICAgPSB0aGlzLmhhbmRsZVNob3dSaWdodE1lYW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTaG93U29ydGVkVGFibGUgPSB0aGlzLmhhbmRsZVNob3dTb3J0ZWRUYWJsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGxldCBzaWRlID0gXCJsZWZ0XCJcbiAgICAgICAgdGhpcy5sZWZ0TWVhbkJ0biAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcmV2ZWFsXyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLmxlZnRNZWFuVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgc2lkZSA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5CdG4gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9XyR7c2lkZX1fbWVhbmApO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Nob3dfc29ydGVkX3RhYmxlYCk7XG4gICAgICAgIHRoaXMuc29ydGVkVGFibGVUZXh0ICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fc29ydGVkX3RleHRgKTtcbiAgICAgICAgdGhpcy5zb3J0ZWRJbWcgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3NvcnRlZGApO1xuICAgICAgICB0aGlzLnVuc29ydGVkSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fdW5zb3J0ZWRgKTtcblxuICAgICAgICB0aGlzLnEyVGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl9hbnN3ZXJgKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Rm9ybSA9IG51bGw7XG4gICAgICAgIHRoaXMucTFGb3JtID0gbmV3IFJhZGlvQnV0dG9uRm9ybShcbiAgICAgICAgICAgIHRoaXMuYXBwLCBzY2VuZUluZm8ucXVlc3Rpb25zLnExLCBgJHt0aGlzLmlkfV9xMV9mb3JtYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnEyRm9ybSA9IG5ldyBUZXh0YXJlYUZvcm0oXG4gICAgICAgICAgICB0aGlzLmFwcCwgc2NlbmVJbmZvLnF1ZXN0aW9ucy5xMiwgYCR7dGhpcy5pZH1fcTJfZm9ybWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xM0Zvcm0gPSBuZXcgUmFkaW9CdXR0b25Gb3JtKFxuICAgICAgICAgICAgdGhpcy5hcHAsIHNjZW5lSW5mby5xdWVzdGlvbnMucTMsIGAke3RoaXMuaWR9X3EzX2Zvcm1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZm9ybXMgPSBbXG4gICAgICAgICAgICB0aGlzLnExRm9ybSxcbiAgICAgICAgICAgIHRoaXMucTJGb3JtLFxuICAgICAgICAgICAgdGhpcy5xM0Zvcm1cbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5xMlRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9xMl90ZXh0YCk7XG4gICAgICAgIHRoaXMucTNUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTNfdGV4dGApO1xuXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgcmVzdG9yZVN0YXRlKHNjZW5lU3RhdGUpIHtcbiAgICAgICAgc3VwZXIucmVzdG9yZVN0YXRlKHNjZW5lU3RhdGUpO1xuICAgICAgICBpZiAoc2NlbmVTdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lOjpyZXN0b3JlU3RhdGUoKVwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc2NlbmVTdGF0ZTtcblxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUuY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uID0gc2NlbmVTdGF0ZS5jdXJyZW50VHJhbnNpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLnExU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NlbmVTdGF0ZS5xMVNlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gc29tZXRoaW5nIGlzIHZlcnkgd3JvbmcgaWYgd2UgZG9uJ3QgaGF2ZSBib3RoIHExU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gYW5kIGExQW5zd2VyIHN0b3JlZFxuICAgICAgICAgICAgICAgIHRoaXMucTFBbnN3ZXIgPSBzY2VuZVN0YXRlLnExQW5zd2VyO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUTJBbmRRM1RleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLnEyQW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xMlRleHRBcmVhLnZhbHVlID0gc2NlbmVTdGF0ZS5xMkFuc3dlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLnEzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NlbmVTdGF0ZS5xM1NlbGVjdGlvbik7XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmaXhtZSwgdGhlc2UgYXJlIHRoZSBldmVudCBoYW5kbGVycywgd2hpY2ggc2hvdWxkIGJlXG4gICAgICAgICAgICAvLyB1cGRhdGluZyBzY2VuZVN0YXRlIHdoZW4gY2xpY2tlZFxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUubGVmdE1lYW5TaG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lYW4oXCJsZWZ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUucmlnaHRNZWFuU2hvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZWFuKFwicmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5zb3J0ZWRUYWJsZVNob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNjZW5lU3RhdGUoZGlmZikge1xuICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBPYmplY3QuYXNzaWduKHRoaXMuY3VycmVudFN0YXRlLCBkaWZmKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50U3RhdGUpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5zY2VuZVN0YXRlW3RoaXMuaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jdXJyZW50U3RhdGUpO1xuICAgIH1cblxuICAgIHNob3dNZWFuKHdoaWNoKSB7XG4gICAgICAgIGlmIChcImxlZnRcIiA9PT0gd2hpY2gpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5sZWZ0TWVhbkJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMubGVmdE1lYW5WYWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJyaWdodFwiID09PSB3aGljaCkge1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnJpZ2h0TWVhbkJ0bik7XG4gICAgICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucmlnaHRNZWFuVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgc2hvd01lYW4oJHt3aGljaH0pIGlzIG5laXRoZXIgJ2xlZnQnIG5vciAncmlnaHQnYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93U29ydGVkVGFibGUoKSB7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zaG93U29ydGVkVGFibGVCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMudW5zb3J0ZWRJbWcpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuc29ydGVkSW1nKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZFRhYmxlVGV4dCk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2hvd0xlZnRNZWFuKGUpIHtcbiAgICAgICAgdGhpcy5zaG93TWVhbihcImxlZnRcIik7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7XCJsZWZ0TWVhblNob3duXCI6IHRydWV9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTaG93UmlnaHRNZWFuKGUpIHtcbiAgICAgICAgdGhpcy5zaG93TWVhbihcInJpZ2h0XCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1wicmlnaHRNZWFuU2hvd25cIjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZVNob3dTb3J0ZWRUYWJsZShlKSB7XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZFRhYmxlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7XCJzb3J0ZWRUYWJsZVNob3duXCI6IHRydWV9KTtcbiAgICB9XG5cbiAgICBoaWRlQWxsRm9ybXMoKSB7XG4gICAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3Jtcykge1xuICAgICAgICAgICAgdGhpcy5hcHAuaGlkZShmLmZvcm0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUHJldkJ1dHRvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lOjpoYW5kbGVQcmV2QnV0dG9uKClcIik7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb3JtLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyKHRoaXMuY3VycmVudEZvcm0uZ2V0RGF0YSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRklSU1RfVFJBTlNJVElPTiA9PT0gdGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdCBmaXJzdCB0cmFuc2l0aW9uLiBnbyB0byBwcmV2IHNjZW5lXCIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcInByZXZcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uLS07XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZTo6aGFuZGxlTmV4dEJ1dHRvbigpXCIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9ybS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlcih0aGlzLmN1cnJlbnRGb3JtLmdldERhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKExBU1RfVFJBTlNJVElPTiA9PT0gdGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdCBsYXN0IHRyYW5zaXRpb24uIGdvIHRvIG5leHQgc2NlbmVcIik7XG4gICAgICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKFwibmV4dFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb24rKztcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoYXNGb3JtKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMubGVmdE1lYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVTaG93TGVmdE1lYW4sIHtvbmNlOiB0cnVlfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJpZ2h0TWVhbkJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLCB0aGlzLmhhbmRsZVNob3dSaWdodE1lYW4sIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsIHRoaXMuaGFuZGxlU2hvd1NvcnRlZFRhYmxlLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZVEyQW5kUTNUZXh0KCkge1xuICAgICAgICBsZXQgcGhSZXBsID0gYDxzcGFuIGNsYXNzPVwicTEtYW5zd2VyXCI+JHt0aGlzLnExQW5zd2VyfTwvc3Bhbj5gO1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0ID0gdGhpcy5xdWVzdGlvbnMucTIudGV4dC5yZXBsYWNlKFxuICAgICAgICAgICAgXCJQTEFDRUhPTERFUlwiLCBwaFJlcGxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucTMudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQucmVwbGFjZShcbiAgICAgICAgICAgIFwiUExBQ0VIT0xERVJcIiwgcGhSZXBsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucTJUZXh0LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQ7XG4gICAgICAgIHRoaXMucTNUZXh0LmlubmVySFRNTCA9IHRoaXMucXVlc3Rpb25zLnEzLnRleHQ7XG4gICAgfVxuXG4gICAgc2F2ZVExU3RhdGUoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVRMVN0YXRlKClcIik7XG4gICAgICAgIHRoaXMucTFBbnN3ZXIgPSBkYXRhLnNlbGVjdGVkVmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7XG4gICAgICAgICAgICBcInExU2VsZWN0aW9uXCI6IGRhdGEuc2VsZWN0ZWRFbGVJZCxcbiAgICAgICAgICAgIFwicTFBbnN3ZXJcIjogdGhpcy5xMUFuc3dlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlUTJBbmRRM1RleHQoKTtcbiAgICAgICAgdGhpcy5zdWJtaXRRdWVzdGlvbihcInExXCIsIGRhdGEpO1xuICAgIH1cblxuICAgIHNhdmVRMlN0YXRlKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlUTJTdGF0ZSgpXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1xuICAgICAgICAgICAgcTJBbnN3ZXI6IGRhdGEuYW5zd2VyXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLnF1ZXN0aW9uVGV4dCA9IGRhdGEucXVlc3Rpb25UZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgnPHNwYW4gY2xhc3M9XCJxMS1hbnN3ZXJcIj4nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCc8L3NwYW4+JywgJycpO1xuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXN0aW9uKFwicTJcIiwgZGF0YSk7XG4gICAgfVxuXG4gICAgc2F2ZVEzU3RhdGUoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVRM1N0YXRlKClcIik7XG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVTdGF0ZSh7XG4gICAgICAgICAgICBxM1NlbGVjdGlvbjogZGF0YS5zZWxlY3RlZEVsZUlkXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhLnF1ZXN0aW9uVGV4dCA9IGRhdGEucXVlc3Rpb25UZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgnPHNwYW4gY2xhc3M9XCJxMS1hbnN3ZXJcIj4nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCc8L3NwYW4+JywgJycpO1xuICAgICAgICB0aGlzLnN1Ym1pdFF1ZXN0aW9uKFwicTNcIiwgZGF0YSk7XG4gICAgfVxuXG5cbiAgICBzdWJtaXRRdWVzdGlvbihxTnVtLCBkYXRhKSB7XG4gICAgICAgIGxldCBsb2dEYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNVQk1JVF9BTlNXRVJcIixcbiAgICAgICAgICAgICAgICBxdWVzdGlvbklkOiBgJHt0aGlzLmFwcC5hY3Rpdml0eUtleX0uJHt0aGlzLmlkfS4ke3FOdW19YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9nRGF0YSk7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLmV2ZW50cy5wdXNoKGxvZ0RhdGEpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5sZWZ0TWVhblZhbHVlKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnJpZ2h0TWVhblZhbHVlKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnNvcnRlZFRhYmxlVGV4dCk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5sZWZ0TWVhbkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5yaWdodE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuKTtcblxuXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMucTFGb3JtLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLnEyRm9ybS5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5xM0Zvcm0uc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lLmhhbmRsZVRyYW5zaXRpb24oKVwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VHJhbnNpdGlvbik7XG4gICAgICAgIHRoaXMuaGlkZUFsbEZvcm1zKCk7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcm0gPSB0aGlzLmZvcm1zW3RoaXMuY3VycmVudFRyYW5zaXRpb25dO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuY3VycmVudEZvcm0uZm9ybSk7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50Rm9ybS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmRpc2FibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSB0aGlzLnNhdmVRMVN0YXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyID0gdGhpcy5zYXZlUTJTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnEyVGV4dEFyZWEuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlciA9IHRoaXMuc2F2ZVEzU3RhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGludmFsaWQgdHJhbnNpdGlvbjogJHt0aGlzLmN1cnJlbnRUcmFuc2l0aW9ufWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9lbnRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0UmVzdWx0c1NjZW5lLnBvc3RfZW50ZXIoKVwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3Jtcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbigpO1xuICAgICAgICBpZiAobnVsbCAhPT0gdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZVN0YXRlKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRlYXJkb3duQWxsRm9ybUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgLy8gICAgIGZvciAobGV0IGYgb2YgdGhpcy5mb3Jtcykge1xuICAgIC8vICAgICAgICAgZi50ZWFyZG93bkV2ZW50SGFuZGxlcnMoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufVxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlUZXN0U2NlbmUgZXh0ZW5kcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLmN1c3RvbUFjdGlvbnMgPSB7XG4gICAgICAgICAgICBzaG93QnRuczogdGhpcy5zaG93QnRucyxcbiAgICAgICAgICAgIGhpZGVCdG5zOiB0aGlzLmhpZGVCdG5zLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ0bk5hbWVzID0ge1xuICAgICAgICAgICAgcHJldjogdGhpcy5hcHAucHJldkJ0bixcbiAgICAgICAgICAgIG5leHQ6IHRoaXMuYXBwLm5leHRCdG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiB0aGlzLmN1c3RvbUVudGVyQWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhcmdzID0gYWN0aW9uLmFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYXBwLmhpZGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=