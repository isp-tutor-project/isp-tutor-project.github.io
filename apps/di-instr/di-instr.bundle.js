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
        this.userInfoRegion = document.getElementById("user_info_region");
        this.activityTitle = document.getElementById("activity_title");
        // this.activitySection = document.getElementById("activity_section");
        this.signOutBtn = document.getElementById("sign_out_button");
        this.signInText = document.getElementById("sign_in_text");

        this.signOutUser = this.signOutUser.bind(this);
        // this.logoutHandler = logoutHandler;
        this.signOutBtn.addEventListener("click", this.signOutUser);
    }

    signOutUser(e) {
        // this.userInfoRegion.classList.add("invisible");
        this.signInText.innerHTML = "";
        this.signInText.classList.add("invisible");
        this.signOutBtn.classList.add("invisible");
        let homePage = localStorage.getItem("homepage");
        if (null === homePage) {
            homePage = window.location.origin + "/";
        }
        localStorage.clear();
        window.location.href = homePage;
    }

    displayActivityTitle(title) {
        this.activityTitle.innerText = title.toUpperCase();
    }

    // displayActivitySection(section) {
    //     this.activitySection.innerText = section;
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzP2M5NWMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vbmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL3NjZW5lLWFwcC1iYXNlL2FwcC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9yYWRpby1idXR0b24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3M/YTdhMiIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktaW5zdHJ1Y3Rpb24tYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaS1pbnN0cnVjdGlvbi1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktbXVsdC1jaG9pY2UtZm9ybS1zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktc3RhdHMtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz83N2NmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFDQSxjQUFjLG9FQUFnQjtBQUM5QjtBQUNBO0FBQ0EsSUFBSSxJQUFzQztBQUMxQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQSx1QyIsImZpbGUiOiJkaS1pbnN0ci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24oKSB7XG4gICAgbGV0IGFjdGl2aXR5Q29uZmlnID0ge1xuICAgICAgICB1c2VySUQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklEXCIpLFxuICAgICAgICBjbGFzc0NvZGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xhc3NDb2RlXCIpLFxuICAgICAgICBkYXRhYmFzZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhYmFzZVwiKSxcbiAgICAgICAgaG9tZXBhZ2U6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZXBhZ2VcIiksXG4gICAgICAgIGFjdGl2aXR5S2V5OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRBY3Rpdml0eVwiKSxcbiAgICAgICAgZmVhdHVyZXM6IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRBY3Rpdml0eUZlYXR1cmVzXCIpIHx8IFwiXCIpXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoXCI6XCIpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBcIlwiKVxuICAgIH07XG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlDb25maWcpO1xuICAgIHJldHVybiBhY3Rpdml0eUNvbmZpZztcbn0iLCIvLyBhYnN0cmFjdCBjbGFzcyAtIGludGVyZmFjZVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHNldENyZWRlbnRpYWxzKGNsYXNzQ29kZSwgdXNlcklEKSB7XG4gICAgICAgIHRoaXMuY2xhc3NDb2RlID0gY2xhc3NDb2RlO1xuICAgICAgICB0aGlzLnVzZXJJRCA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTiA9IHRydWUpIHtcblxuICAgIH1cblxuICAgIHNldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG5cbiAgICBnZXRJbml0aWFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBnZXRGaW5hbEh5cG9EYXRhKCkge1xuXG4gICAgfVxuXG4gICAgc2F2ZVZhbHVlKHZhck5hbWUsIHZhbHVlKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuXG4gICAgfVxuXG4gICAgZ2V0Qm9vbFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEludFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbn07XG5cblxuIiwiaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5RDd6SWstOFYyMFFxSk5TczBjQVYwdU5MM3FqZXFMTWRNXCIsXG4gICAgYXV0aERvbWFpbjogXCJpc3B0dXRvci5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiaXNwdHV0b3JcIlxufTtcblxuZXhwb3J0IGNsYXNzIEZpcmVzdG9yZURCIGV4dGVuZHMgRGF0YWJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAgICAgICB0aGlzLnN0b3JlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgc3VwZXIuc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpO1xuICAgICAgICB0aGlzLnVzZXJSZWYgPSB0aGlzLnN0b3JlLmNvbGxlY3Rpb24odGhpcy5jbGFzc0NvZGUpLmRvYyh0aGlzLnVzZXJJRCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKSB7XG4gICAgICAgIC8vIHJldHVybnMgcHJvbWlzZSB3aXRoICdkb2MnIGlmIGl0IGV4aXN0cywgbnVsbCBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi5nZXQoKVxuICAgICAgICAudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2MuZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0Q3Vyckh5cG9UYXNrKCkge1xuXG4gICAgfVxuICBcbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT049dHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VyRGF0YSgpXG4gICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRGF0YVthY3Rpdml0eUtleV07XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXRSUURhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJycXRlZFwiKTtcbiAgICAvLyB9XG5cblxuICAgIC8vIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcImluaXRpYWxIeXBvXCIpXG4gICAgLy8gICAgIC50aGVuKChzdHJEYXRhKSlcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRGaW5hbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiZmluYWxIeXBvXCIpXG4gICAgLy8gfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgdG8ge21lcmdlOiB0cnVlfSBvcHRpb24gZm9yIHNhZmV0eVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldChvYmplY3QsIHttZXJnZTogIW92ZXJ3cml0ZX0pOyAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZXMob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKG9iamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnVwZGF0ZSh7XG4gICAgICAgICAgICBbdmFyTmFtZV06IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLmRlbGV0ZSgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMudXNlclJlZi5zZXQoe1xuICAgIC8vICAgICAgICAgW3Zhck5hbWVdOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0Qm9vbFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEludFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH0gICBcbiAgICBcbiAgICAvLyBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldFRleHRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBnZXRKU09OVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxufTsiLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2VEQiB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZURCXCI7XG5pbXBvcnQgeyBGaXJlc3RvcmVEQiB9IGZyb20gXCIuL2ZpcmVzdG9yZURCXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREQkNvbm5lY3Rpb24oZGJUeXBlKSB7XG4gICAgbGV0IGRiO1xuICAgIHN3aXRjaChkYlR5cGUpIHtcbiAgICAgICAgY2FzZSBcImZpcmVzdG9yZVwiOlxuICAgICAgICAgICAgZGIgPSBuZXcgRmlyZXN0b3JlREIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGIgPSBuZXcgTG9jYWxTdG9yYWdlREIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRiOyBcbn1cbiIsIlxuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuXG4vLyBOT1RFOiB0aGlzIEFQSSBtdXN0IHVzZSBwcm9taXNlcyB0byBiZSBjb21wYXRpYmxlIHdpdGggYW55IGRiXG4vLyB3ZSBtYXkgYmUgdXNpbmcsIHdoaWNoIG1heSBiZSBlaXRoZXIgc3luYyBvciBhc3luY1xuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZURCIGV4dGVuZHMgRGF0YWJhc2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgc3VwZXIuc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpO1xuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAvLyB0aGlzLnNhdmVWYWx1ZShcImNsYXNzQ29kZVwiLCBjbGFzc0NvZGUpLFxuICAgICAgICAvLyB0aGlzLnNhdmVWYWx1ZShcInVzZXJJRFwiLCB1c2VySUQpLFxuICAgICAgICAvLyBdKS50aGVuKChbcmVzdWx0MSwgcmVzdWx0Ml0pID0+IHsgfSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckRhdGEoKSB7XG4gICAgICAgIGNvbnNvbGUuY291bnQoXCJnZXRVc2VyRGF0YSgpIGNhbGxlZFwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dFZhbHVlKFwiY2xhc3NDb2RlXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJ1c2VySURcIiksXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXR5RGF0YShcInJxdGVkXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXRDdXJySHlwb1Rhc2soKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0SW50aWFsSHlwb0RhdGEoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0RmluYWxIeXBvRGF0YSgpXG4gICAgICAgIF0pLnRoZW4oKFtjY1JlcywgdWlkUmVzLCBycVJlcywgY2h0UmVzLCBpaFJlcywgZmhSZXNdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzQ29kZSA9IGNjUmVzO1xuICAgICAgICAgICAgZGF0YS51c2VySUQgPSB1aWRSZXM7XG4gICAgICAgICAgICBkYXRhLnJxdGVkID0gcnFSZXM7XG4gICAgICAgICAgICBpZiAoY2h0UmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5jdXJySHlwb1Rhc2tJZHggPSBjaHRSZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpaFJlcykge1xuICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gaWhSZXMuZmlyc3RQcmVkaWN0aW9uO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpaFJlcy5pbml0aWFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaFJlcykge1xuICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IGZoUmVzLnNlY29uZFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5maW5hbEh5cG8gPSBmaFJlcy5maW5hbEh5cG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoYWN0aXZpdHlLZXkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiAhZGVjb2RlSlNPTikge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNhdmVKU09OVmFsdWUoYWN0aXZpdHlLZXksIG9iamVjdCk7XG4gICAgfVxuXG4gICAgZ2V0UlFEYXRhKCkge1xuICAgICAgICBsZXQgcmV0VmFsID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIilcbiAgICAgICAgLnRoZW4oKHJxdGVkKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhycXRlZCk7XG4gICAgICAgICAgICBpZiAocnF0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwgPSBycXRlZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJxIGlzbid0IHNlbGVjdGVkIGhhcmQtY29kZSB0byBjcnlzdGFsIGdyb3d0aFxuICAgICAgICAgICAgICAgIHJldFZhbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlU3RhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJlYTogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUb3BpYzogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYWJsZTogeyBpbmRleDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSUTogeyBpbmRleDogMSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmV0VmFsKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEludFZhbHVlKFwiY3Vyckh5cG9UYXNrSWR4XCIpXG4gICAgfVxuXG4gICAgZ2V0SW50aWFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcImZpcnN0UHJlZGljdGlvblwiKVxuICAgICAgICAgICAgLnRoZW4oKHByZWQxKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdldEluaXRpYWxIeXBvRGF0YSgpOmZpcnN0UHJlZGljdGlvbiAke3ByZWQxfWApO1xuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBwcmVkMSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0UHJlZGljdGlvbiA9IHByZWQxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJpbml0aWFsSHlwb1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpcnN0UHJlZGljdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoaW5pdEh5cG8pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6aW5pdEh5cG8gJHtpbml0SHlwb31gKTtcbiAgICAgICAgICAgICAgICBkYXRhLmluaXRpYWxIeXBvID0gaW5pdEh5cG87XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGaW5hbEh5cG9EYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0VmFsdWUoXCJzZWNvbmRQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDIpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0RmluYWxIeXBvRGF0YSgpOnNlY29uZFByZWRpY3Rpb24gJHtwcmVkMn1gKVxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBwcmVkMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNlY29uZFByZWRpY3Rpb24gPSBwcmVkMjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SlNPTlZhbHVlKFwiZmluYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChmaW5hbEh5cG8pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0RmluYWxIeXBvRGF0YSgpOmZpbmFsSHlwbyAke2ZpbmFsSHlwb31gKTtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZpbmFsSHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFZhbHVlcyhvYmplY3QsIG92ZXJ3cml0ZT1mYWxzZSkge1xuICAgICAgICAvLyBvdmVyd3JpdGUgcGFyYW0gaXMgaWdub3JlZCwgYXMgaXQgaXMgc3BlY2lmaWMgdG8gZmlyZXN0b3JlXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuaXRlbXMob2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZVZhbHVlKHZhck5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkob2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2FsU3RvcmFnZS5zZXRJdGVtKHZhck5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFwidHJ1ZVwiID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEludFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXRWYWwpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIGxldCByZXRWYWw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXRWYWwpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRKU09OVmFsdWUodmFyTmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vLyBsZXQgZGIgPSBuZXcgRGF0YWJhc2UoXCJCT0dVU19DTEFTU1wiLCBcIkJPR1VTX1NUVURFTlRcIik7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdi5uYXZiYXJcIik7XG4gICAgICAgIHRoaXMudXNlckluZm9SZWdpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfaW5mb19yZWdpb25cIik7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlfdGl0bGVcIik7XG4gICAgICAgIC8vIHRoaXMuYWN0aXZpdHlTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpdml0eV9zZWN0aW9uXCIpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25fb3V0X2J1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduX2luX3RleHRcIik7XG5cbiAgICAgICAgdGhpcy5zaWduT3V0VXNlciA9IHRoaXMuc2lnbk91dFVzZXIuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5sb2dvdXRIYW5kbGVyID0gbG9nb3V0SGFuZGxlcjtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNpZ25PdXRVc2VyKTtcbiAgICB9XG5cbiAgICBzaWduT3V0VXNlcihlKSB7XG4gICAgICAgIC8vIHRoaXMudXNlckluZm9SZWdpb24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2lnbkluVGV4dC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB0aGlzLnNpZ25PdXRCdG4uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKTtcbiAgICAgICAgaWYgKG51bGwgPT09IGhvbWVQYWdlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBob21lUGFnZTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWN0aXZpdHlUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGl0bGUuaW5uZXJUZXh0ID0gdGl0bGUudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5QWN0aXZpdHlTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICAvLyAgICAgdGhpcy5hY3Rpdml0eVNlY3Rpb24uaW5uZXJUZXh0ID0gc2VjdGlvbjtcbiAgICAvLyB9XG5cbiAgICBkaXNwbGF5VXNlcih1c2VyTmFtZSkge1xuICAgICAgICB0aGlzLnNpZ25JblRleHQuaW5uZXJIVE1MID0gYFdlbGNvbWUsICR7dXNlck5hbWV9YDtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBnZXREQkNvbm5lY3Rpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9pc3AtZGF0YWJhc2VcIjtcbmltcG9ydCB7IFNuYWNrQmFyfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zbmFja2JhclwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVCYXNlZEFwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSwgYWN0aXZpdHlDb25maWcsIGRlZmF1bHRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zY2VuZURhdGEgPSBhcHBEYXRhLnNjZW5lcztcbiAgICAgICAgdGhpcy5hY3Rpdml0eUNvbmZpZyA9IGFjdGl2aXR5Q29uZmlnO1xuICAgICAgICB0aGlzLmRiID0gZ2V0REJDb25uZWN0aW9uKGFjdGl2aXR5Q29uZmlnLmRhdGFiYXNlKTtcbiAgICAgICAgdGhpcy5kYi5zZXRDcmVkZW50aWFscyhhY3Rpdml0eUNvbmZpZy5jbGFzc0NvZGUsIGFjdGl2aXR5Q29uZmlnLnVzZXJJRCk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlLZXkgPSBhY3Rpdml0eUNvbmZpZy5hY3Rpdml0eUtleTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U3RhdGUgPSBkZWZhdWx0SW5pdGlhbFN0YXRlO1xuXG4gICAgICAgIHRoaXMuc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcbiAgICAgICAgdGhpcy5ob21lUGFnZUJ0biA9IG51bGw7XG4gICAgICAgIGxldCBob21lUGFnZUJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvX2hvbWVfcGFnZVwiKTtcbiAgICAgICAgdGhpcy5uZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0X2J0blwiKTtcbiAgICAgICAgdGhpcy5wcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmV2X2J0blwiKTtcbiAgICAgICAgdGhpcy5zY2VuZUlkUmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2VuZV9pZF9yZWdpb25cIik7XG4gICAgICAgIGlmIChob21lUGFnZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5ob21lUGFnZUJ0biA9IGhvbWVQYWdlQnRuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlR29Ib21lUGFnZSA9IHRoaXMuaGFuZGxlR29Ib21lUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5leHQgPSB0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQcmV2ID0gdGhpcy5oYW5kbGVQcmV2LmJpbmQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmhvbWVQYWdlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVOZXh0KTtcbiAgICAgICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVByZXYpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldlNjZW5lID0gbnVsbDtcbiAgICAgICAgLy8gaXMgdGhpcyBuZWVkZWQ/Pz9cbiAgICAgICAgdGhpcy5ib2d1c1NjZW5lSW5mbyA9IHtcbiAgICAgICAgICAgIGlkOiBcIk4vQVwiLFxuICAgICAgICAgICAgc2NlbmVUeXBlOiBcImJvZ3VzXCJcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFwcCA9IHRoaXM7XG4gICAgfVxuXG5cbiAgICAvLyBzZXRTbmFja2JhcihzbmFja2Jhcikge1xuICAgIC8vICAgICB0aGlzLnNuYWNrYmFyID0gc25hY2tiYXI7XG4gICAgLy8gfVxuXG4gICAgc2hvd0ZlZWRiYWNrKGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc25hY2tiYXIuc2hvdyhmZWVkYmFjayk7XG4gICAgfVxuXG4gICAgaGFuZGxlR29Ib21lUGFnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYWN0aXZpdHlDb25maWcuaG9tZXBhZ2VcbiAgICB9XG5cbiAgICBoYW5kbGVQcmV2KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZVByZXZCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZU5leHRCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zYXZlQXBwU3RhdGUoKTtcbiAgICB9XG5cbiAgICBzZXRTdGFydFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcInNldFN0YXJ0U2NlbmUoKVwiLCBzY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zdGFydFNjZW5lID0gc2NlbmVJZDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGluZ1wiKTtcbiAgICAgICAgdGhpcy5nZXRBcHBTdGF0ZSgpXG4gICAgICAgICAgICAudGhlbigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBhY3Rpdml0eSBkYXRhIGluIGRiLiB1c2luZyBpbml0aWFsIGRhdGFcIilcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmRlZmF1bHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgU2NlbmVzXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgc2NlbmUgZm9yICR7c2NlbmVJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lT2JqID0gdGhpcy5jcmVhdGVTY2VuZSh0aGlzLnNjZW5lRGF0YVtzY2VuZUlkXSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNjZW5lT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0gPSBzY2VuZU9iajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdG9yaW5nIEFwcCBTdGF0ZVwiKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb24uc2NlbmVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lSWQgPSBzZWN0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2NlbmVTdGF0ZSA9IHRoaXMuc3RhdGUuc2NlbmVTdGF0ZVtzY2VuZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZXNbc2NlbmVJZF0ucmVzdG9yZVN0YXRlKHNjZW5lU3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U2NlbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN0b3JpbmcgQ3VycmVudCBTY2VuZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhdGUuY3VycmVudFNjZW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKHRoaXMuc2NlbmVEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjZW5lcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0YXJ0U2NlbmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBcHBTdGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkxvYWRpbmcgQXBwIFN0YXRlXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5nZXRBY3Rpdml0eURhdGEodGhpcy5hY3Rpdml0eUtleSk7XG4gICAgfVxuXG4gICAgc2F2ZUFwcFN0YXRlKCkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2F2aW5nIEFwcCBTdGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuc2V0QWN0aXZpdHlEYXRhKHRoaXMuYWN0aXZpdHlLZXksIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICAvLyB5b3UnbGwgd2FudCB0byBvdmVycmlkZSB0aGlzIHRvIGRvIGFueXRoaW5nIHVzZWZ1bFxuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiY3JlYXRlU2NlbmUoKVwiLCBzY2VuZUluZm8sIHNjZW5lU3RhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IFNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgc3dpdGNoVG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLmxvZ1NjZW5lQ2hhbmdlKHNjZW5lKTtcbiAgICAgICAgdGhpcy5nb3RvU2NlbmUoc2NlbmUpO1xuICAgIH1cblxuICAgIGdvdG9TY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAodGhpcy5wcmV2U2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJldlNjZW5lLnByZV9leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5leGl0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5wb3N0X2V4aXQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5wcmVfZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucG9zdF9lbnRlcigpO1xuICAgICAgICAvLyBkZWxldGUgdGhpcy5wcmV2U2NlbmU7XG4gICAgICAgIHRoaXMuZGlzcGxheVNjZW5lSWQoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5U2NlbmVJZCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbi5pbm5lckhUTUwgPSB0aGlzLmN1cnJlbnRTY2VuZS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvb2t1cFNjZW5lKHNjZW5lSWQpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5zY2VuZXNbc2NlbmVJZF07XG4gICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVSUk9SOiBubyBzdWNoIHNjZW5lICR7c2NlbmVJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuXG4gICAgZm9sbG93RWRnZShlZGdlTmFtZSkge1xuICAgICAgICBsZXQgbmV3U2NlbmVJZCA9IHRoaXMuY3VycmVudFNjZW5lLmVkZ2VzW2VkZ2VOYW1lXTtcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5sb29rdXBTY2VuZShuZXdTY2VuZUlkKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUb1NjZW5lKG5ld1NjZW5lKTtcbiAgICB9XG5cbiAgICBsb2dTY2VuZUNoYW5nZShzY2VuZSkge1xuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0NFTkVfVFJBTlNJVElPTlwiLFxuICAgICAgICAgICAgZnJvbTogdGhpcy5jdXJyZW50U2NlbmUuaWQsXG4gICAgICAgICAgICB0bzogc2NlbmUuaWQsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgfVxuXG5cbiAgICBnb3RvU3RhcnRTY2VuZSgpIHtcbiAgICAgICAgLy8gYnlwYXNzZXMgc3dpdGNoVG9TY2VuZSgpIGFuZCB0aHVzIGxvZ1NjZW5lQ2hhbmdlKClcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICBsZXQgc3RhcnRTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmUpIHtcbiAgICAgICAgICAgIHN0YXJ0U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhcnRTY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcIkFQUF9TVEFSVFwiLFxuICAgICAgICAgICAgc2NlbmU6ICBzdGFydFNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiVXBkYXRpbmcgc3RhdGUuZXZlbnRzXCIpO1xuICAgICAgICB0aGlzLmdvdG9TY2VuZShzdGFydFNjZW5lKTtcbiAgICB9XG5cblxuICAgIGhpZGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7IGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7IH1cbiAgICB9XG5cbiAgICBzaG93KGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgbWFrZUludmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlVmlzaWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc2FibGluZzpcIiwgZWwpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZGlzYWJsaW5nIG5vbi1leGlzdGluYW50IGVsZW1lbnQ6XCIsIGVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcblxuZXhwb3J0IHtcbiAgICBTY2VuZUJhc2VkQXBwLFxuICAgIFNjZW5lXG59O1xuIiwiZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uRm9ybSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBmb3JtSW5mbywgZWxlSWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5mb3JtSW5mbyA9IGZvcm1JbmZvO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIHRoaXMucmFkaW9zID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB2YWxpZGl0eSA9IHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZm9ybSBpcyB2YWxpZDpcIiwgdmFsaWRpdHkpO1xuICAgICAgICByZXR1cm4gdmFsaWRpdHk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gZGlydHkgc3RhdGUgc28gaXQgd2lsbCBnZXQgc2F2ZWQgbGF0ZXIgb25cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ZWFyZG93bkV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGZvciAobGV0IHJiIG9mIHRoaXMucmFkaW9zKSB7XG4gICAgICAgICAgICByYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldENvcnJlY3RuZXNzKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgIClcbiAgICAgICAgbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gbGV0IGFuc1RleHQgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgY29ycmVjdEFuc3dlciA9IHNmaS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICBsZXQgaXNDb3JyZWN0O1xuXG4gICAgICAgIGlmIChcIk4vQVwiID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0NvcnJlY3Q7XG4gICAgfVxuXG4gICAgZ2V0RmVlZGJhY2soKSB7XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZmkgPSB0aGlzLmZvcm1JbmZvO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0NvcnJlY3QsIHNmaSk7XG4gICAgICAgIGxldCBmYlRleHQsIGZiQ2xhc3NOYW1lLCBmYk1zZztcbiAgICAgICAgc3dpdGNoKGlzQ29ycmVjdCkge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibmVnLWZlZWRiYWNrXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwibnRsLWZlZWRiYWNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZihmYlRleHQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHNmaS5udGxGYikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZmJUZXh0KSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZmJNc2cgPSBgPHNwYW4gY2xhc3M9XCIke2ZiQ2xhc3NOYW1lfVwiPiR7ZmJUZXh0fTwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYk1zZztcbiAgICB9XG5cbiAgICBnZXREYXRhKCkge1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgbGV0IGlzQ29ycmVjdCA9IHRoaXMuZ2V0Q29ycmVjdG5lc3MoKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgICk7XG4gICAgICAgIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIGxldCBsYmwgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBxdWVzdGlvblR5cGU6IHNmaS50eXBlLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBzZmkudGV4dCxcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlSWQ6IHNlbGVjdGVkQW5zd2VyLmlkLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogdmFsLFxuICAgICAgICAgICAgc2VsZWN0ZWRMYWJlbDogbGJsLFxuICAgICAgICAgICAgaXNDb3JyZWN0OiBpc0NvcnJlY3QsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgZm9ybSB0byBub24tZGlydHkgc3RhdGUsIHNvIHdlIGRvbid0IHJlc3VibWl0IHVubGVzcyB0aGV5XG4gICAgICAgIC8vIGNoYW5nZSBhZ2FpblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgXFx0SW5pdGlhbGl6aW5nIFNjZW5lOiAke3NjZW5lSW5mby5pZH1gKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIC8vIGNvcHkgYWxsIHNjZW5lSW5mbyB0byAndGhpcydcbiAgICAgICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNjZW5lSW5mbykpIHtcbiAgICAgICAgICAgIHRoaXNba10gPSB2O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgLy8gYmluZCBldmVudCBoYW5kbGVyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiA9IHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNob3dCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVCdG5zKGJ0bk5hbWVzKSB7XG4gICAgICAgIGZvciAobGV0IGJ0bk5hbWUgb2YgYnRuTmFtZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0bk5hbWVzLmhhc093blByb3BlcnR5KGJ0bk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmJ0bk5hbWVzW2J0bk5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaGFuZGxlRm9sbG93RWRnZUJ1dHRvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGVkZ2VOYW1lID0gZS50YXJnZXQuZGF0YXNldC5lZGdlO1xuICAgICAgICB0aGlzLmFwcC5mb2xsb3dFZGdlKGVkZ2VOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRGb2xsb3dFZGdlRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb2xsb3ctZWRnZVwiKTtcbiAgICB9XG5cbiAgICBzZXR1cEZvbGxvd0VkZ2VFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmdldEZvbGxvd0VkZ2VFbGVtZW50cygpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVGb2xsb3dFZGdlQnV0dG9uLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdFJlc3RvcmluZyBTY2VuZSBTdGF0ZSBmb3I6ICR7dGhpcy5pZH0gYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgX2lzQm9ndXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID09PSBcIk4vQVwiIHx8IHRoaXMuc2NlbmVUeXBlID09PSBcImJvZ3VzXCI7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJldkJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcInByZXZcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dEJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcIm5leHRcIik7XG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcm1DaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlX2VudGVyKCkge1xuXG4gICAgfVxuXG4gICAgZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFbnRlcmluZyBTY2VuZTogJHt0aGlzLmlkfWApO1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiXFx0VXBkYXRpbmcgc3RhdGUuY3VycmVudFNjZW5lXCIpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5jdXJyZW50U2NlbmUgPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FbnRlckFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdF9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIHByZV9leGl0KCkge1xuXG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQm9ndXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYEV4aXRpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21FeGl0QWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB0aGlzLnNldHVwRm9sbG93RWRnZUV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FbnRlclNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVW5pbXBsZW1lbnRlZCBNZXRob2Q6IHBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zXCIpO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVJRCkge1xuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSUQgfHwgXCJzbmFja2JhclwiKTtcbiAgICB9XG5cbiAgICBzaG93KHRleHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZih0ZXh0KSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBudWxsICE9PSB0ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIFwic2hvd1wiIGNsYXNzIHRvIERJVlxuICAgICAgICAgICAgLy8gdGhpcy5lbC5jbGFzc05hbWUgPSBcInNob3dcIjtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICAvLyBBZnRlciAzIHNlY29uZHMsIHJlbW92ZSB0aGUgc2hvdyBjbGFzcyBmcm9tIERJVlxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc25hY2tiYXIuY2xhc3NOYW1lID0gc25hY2tiYXIuY2xhc3NOYW1lLnJlcGxhY2UoXCJzaG93XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lQmFzZWRBcHAgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuaW1wb3J0IHsgRGlJbnN0cnVjdGlvblNjZW5lIH0gZnJvbSBcIi4vZGktaW5zdHJ1Y3Rpb24tc2NlbmVcIjtcbmltcG9ydCB7IERpU3RhdHNTY2VuZSB9IGZyb20gXCIuL2RpLXN0YXRzLXNjZW5lXCI7XG5pbXBvcnQgeyBEaU11bHRpcGxlQ2hvaWNlRm9ybVNjZW5lIH0gZnJvbSBcIi4vZGktbXVsdC1jaG9pY2UtZm9ybS1zY2VuZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBEaUluc3RydWN0aW9uQXBwIGV4dGVuZHMgU2NlbmVCYXNlZEFwcCB7XG4gICAgY29uc3RydWN0b3IoYXBwRGF0YSwgYWN0aXZpdHlDb25maWcsIGRlZmF1bHRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgc3VwZXIoYXBwRGF0YSwgYWN0aXZpdHlDb25maWcsIGRlZmF1bHRJbml0aWFsU3RhdGUpO1xuICAgICAgICAvLyBiaW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIHRoaXMuaGFuZGxlQmFja1RvUXVlc3Rpb24gPSB0aGlzLmhhbmRsZUJhY2tUb1F1ZXN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVhZHlUb0Fuc3dlciA9IHRoaXMuaGFuZGxlUmVhZHlUb0Fuc3dlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJhY2tUb1F1ZXN0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrX3RvX3F1ZXN0aW9uX2J0blwiKTtcbiAgICAgICAgdGhpcy5yZWFkeVRvQW5zd2VyQnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZHlfdG9fYW5zd2VyX2J0blwiKTtcbiAgICAgICAgdGhpcy5yZWFkeVRvQW5zd2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVJlYWR5VG9BbnN3ZXIpO1xuICAgICAgICB0aGlzLmJhY2tUb1F1ZXN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUJhY2tUb1F1ZXN0aW9uKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZWFkeVRvQW5zd2VyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9sbG93RWRnZShcInJlYWR5VG9BbnN3ZXJcIik7XG4gICAgfVxuXG4gICAgaGFuZGxlQmFja1RvUXVlc3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2xsb3dFZGdlKFwiYmFja1RvUXVlc3Rpb25cIik7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoc2NlbmVJbmZvKSB7XG4gICAgICAgIGxldCBuZXdTY2VuZTtcbiAgICAgICAgaWYgKFwic3RhdHNcIiA9PT0gc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgbmV3U2NlbmUgPSBuZXcgRGlTdGF0c1NjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJtdWx0aXBsZUNob2ljZUZvcm1cIiA9PT0gc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgbmV3U2NlbmUgPSBuZXcgRGlNdWx0aXBsZUNob2ljZUZvcm1TY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2NlbmUgPSBuZXcgRGlJbnN0cnVjdGlvblNjZW5lKHRoaXMsIHNjZW5lSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlJbnN0cnVjdGlvblNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpb25zID0ge1xuICAgICAgICAgICAgc2hvd0J0bnM6IHRoaXMuc2hvd0J0bnMsXG4gICAgICAgICAgICBoaWRlQnRuczogdGhpcy5oaWRlQnRucyxcbiAgICAgICAgICAgIGhpbGl0ZVRhYmxlQ2VsbHM6IHRoaXMuaGlsaWdodFRhYmxlQ2VsbHNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idG5OYW1lcyA9IHtcbiAgICAgICAgICAgIHByZXY6IHRoaXMuYXBwLnByZXZCdG4sXG4gICAgICAgICAgICBuZXh0OiB0aGlzLmFwcC5uZXh0QnRuLFxuICAgICAgICAgICAgYmFja1RvUXVlc3Rpb246IHRoaXMuYXBwLmJhY2tUb1F1ZXN0aW9uQnRuLFxuICAgICAgICAgICAgcmVhZHlUb0Fuc3dlcjogdGhpcy5hcHAucmVhZHlUb0Fuc3dlckJ0blxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhpbGl0ZVRhYmxlQ2VsbHMoYXJncykge1xuICAgICAgICBsZXQgdGFibGVJZCA9IGAke3RoaXMuaWR9XyR7YXJncy50YWJsZX1gO1xuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKTtcbiAgICAgICAgbGV0IGNvbG9yID0gYXJncy5jb2xvciB8fCBcImJsdWVcIjtcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3Igb2YgYXJncy5jZWxsU2VsZWN0b3JzKSB7XG4gICAgICAgICAgICBsZXQgc2VsID0gYHRkJHtzZWxlY3Rvcn1gO1xuICAgICAgICAgICAgbGV0IGNlbGwgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKHNlbCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoYCR7Y29sb3J9LWJnYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiB0aGlzLmN1c3RvbUVudGVyQWN0aW9ucykge1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ubmFtZTtcbiAgICAgICAgICAgIGxldCBhcmdzID0gYWN0aW9uLmFyZ3M7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BY3Rpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXShhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIC8vIHRoZXNlIGJ1dHRvbiBzdGF0ZXMgbWF5IGdldCBvdmVycmlkZW4gYnkgc2NlbmUtc3BlY2lmaWMgY3VzdG9tIGFjdGlvbnNcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5hcHAucmVhZHlUb0Fuc3dlckJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5hcHAuYmFja1RvUXVlc3Rpb25CdG4pO1xuICAgIH1cblxufTtcbiIsImltcG9ydCB7IERpSW5zdHJ1Y3Rpb25TY2VuZSB9IGZyb20gXCIuL2RpLWluc3RydWN0aW9uLXNjZW5lXCI7XG5cbmltcG9ydCB7IFJhZGlvQnV0dG9uRm9ybSB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlL3JhZGlvLWJ1dHRvbi1mb3JtXCI7XG5cbmV4cG9ydCBjbGFzcyBEaU11bHRpcGxlQ2hvaWNlRm9ybVNjZW5lIGV4dGVuZHMgRGlJbnN0cnVjdGlvblNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBSYWRpb0J1dHRvbkZvcm0oXG4gICAgICAgICAgICBhcHAsIHNjZW5lSW5mby5xdWVzdGlvbiwgYCR7dGhpcy5pZH1fcmFkaW9fZm9ybWBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXN0b3JlU3RhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHN1cGVyLnJlc3RvcmVTdGF0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBlbGVJRCA9IGAke3RoaXMuaWR9X29wdGlvbl8ke3ZhbHVlfWA7XG4gICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJRCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGVsKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFxcdFxcdFVuYWJsZSB0byBTZWxlY3QgUmFkaW8gQnV0dG9uICR7ZWxlSUR9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgXFx0XFx0U2VsZWN0ZWQgUmFkaW8gQnV0dG9uOiAke2VsZUlEfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYXNGb3JtKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybS5jaGFuZ2VkO1xuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1DaGFuZ2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZvcm1EYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuaGFuZGxlUHJldkJ1dHRvbigpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1DaGFuZ2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZvcm1EYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuaGFuZGxlTmV4dEJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNhdmVGb3JtRGF0YSgpIHtcbiAgICAgICAgdGhpcy5hcHAuc2hvd0ZlZWRiYWNrKHRoaXMuZm9ybS5nZXRGZWVkYmFjaygpKTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmZvcm0uZ2V0RGF0YSgpO1xuICAgICAgICBsZXQgbG9nRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWN0aW9uX3R5cGU6IFwiU1VCTUlUX0FOU1dFUlwiLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uSWQ6IGAke3RoaXMuYXBwLmFjdGl2aXR5S2V5fS4ke3RoaXMuaWR9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLmV2ZW50cy5wdXNoKGxvZ0RhdGEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIHN0YXRlLnNjZW5lU3RhdGVcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwLnN0YXRlKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuc2NlbmVTdGF0ZVt0aGlzLmlkXSA9IGRhdGEuc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyBwcmVfZXhpdCgpIHtcbiAgICAvLyAgICAgc3VwZXIucHJlX2V4aXQoKTtcbiAgICAvLyAgICAgaWYgKHRoaXMuZm9ybUNoYW5nZWQoKSkge1xuICAgIC8vICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGEoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5mb3JtLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHRlYXJkb3duRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5mb3JtLnRlYXJkb3duRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIGRvbid0IGxldCBzdHVkZW50IHNraXAgb3ZlciBxdWVzdGlvblxuICAgICAgICAgICAgaWYgKCEgdGhpcy5mb3JtLmlzVmFsaWQoKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMudGVhcmRvd25FdmVudEhhbmRsZXJzKCk7XG4gICAgfVxufVxuIiwiXG5pbXBvcnQgeyBEaUluc3RydWN0aW9uU2NlbmUgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgRGlTdGF0c1NjZW5lIGV4dGVuZHMgRGlJbnN0cnVjdGlvblNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBzdXBlci5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L25hdmJhclwiO1xuaW1wb3J0IHsgZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvYWN0aXZpdHktY29uZmlnXCI7XG5pbXBvcnQgeyBEaUluc3RydWN0aW9uQXBwIH0gZnJvbSBcIi4vZGktaW5zdHJ1Y3Rpb24tYXBwXCI7XG5cbmxldCBhY3Rpdml0eUNvbmZpZyA9IGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbigpO1xubGV0IGFjdGl2aXR5RGF0YSA9IHJlcXVpcmUoXCIuLi9kYXRhL2RpSW5zdHIuanNvblwiKTtcblxuY29uc3QgREVGQVVMVF9JTklUSUFMX0FQUF9TVEFURSA9IHtcbiAgICBldmVudHM6IFtdLFxuICAgIC8vIG1hcHBpbmcgb2Ygc2NlbmVpZCA9PiBzY2VuZVR5cGUtc3BlY2lmaWMgZGF0YVxuICAgIHNjZW5lU3RhdGU6IHt9LFxuICAgIGN1cnJlbnRTY2VuZTogXCJzdGFydFwiXG59O1xuXG5sZXQgbmF2YmFyID0gbmV3IE5hdkJhcigpO1xubmF2YmFyLmRpc3BsYXlBY3Rpdml0eVRpdGxlKFwiRGF0YSBJbnRlcnByZXRhdGlvbiBMZXNzb25cIik7XG5uYXZiYXIuZGlzcGxheVVzZXIoYWN0aXZpdHlDb25maWcudXNlcklEKTtcbmxldCBhcHAgPSBuZXcgRGlJbnN0cnVjdGlvbkFwcChcbiAgICBhY3Rpdml0eURhdGEsIGFjdGl2aXR5Q29uZmlnLCBERUZBVUxUX0lOSVRJQUxfQVBQX1NUQVRFXG4pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBhcHAuc2V0U3RhcnRTY2VuZShcInNjZW5lMjhcIik7XG59XG5hcHAuc3RhcnQoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=