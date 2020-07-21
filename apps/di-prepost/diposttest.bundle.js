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

/***/ "./data/diPostTest.json":
/*!******************************!*\
  !*** ./data/diPostTest.json ***!
  \******************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"scenes\":{\"start\":{\"edges\":{\"next\":\"intro\"},\"customEnterActions\":[{\"name\":\"hideBtns\",\"args\":[\"prev\",\"next\"]}],\"id\":\"start\",\"sceneType\":\"standard\",\"customExitActions\":[]},\"intro\":{\"edges\":{\"prev\":\"start\",\"next\":\"carsIntro1\"},\"id\":\"intro\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro1\":{\"edges\":{\"prev\":\"intro\",\"next\":\"carsIntro2\"},\"id\":\"carsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro2\":{\"edges\":{\"prev\":\"carsIntro1\",\"next\":\"carsIntro3\"},\"id\":\"carsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsIntro3\":{\"edges\":{\"prev\":\"carsIntro2\",\"next\":\"carsResultsIntro1\"},\"id\":\"carsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro1\":{\"edges\":{\"prev\":\"carsIntro3\",\"next\":\"carsResults1\"},\"id\":\"carsResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults1\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro1\",\"next\":\"carsResultsIntro2\"},\"id\":\"carsResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro2\":{\"edges\":{\"prev\":\"carsResults1\",\"next\":\"carsResults2\"},\"id\":\"carsResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults2\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro2\",\"next\":\"carsResultsIntro3\"},\"id\":\"carsResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro3\":{\"edges\":{\"prev\":\"carsResults2\",\"next\":\"carsResults3\"},\"id\":\"carsResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults3\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro3\",\"next\":\"carsResultsIntro4\"},\"id\":\"carsResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro4\":{\"edges\":{\"prev\":\"carsResults3\",\"next\":\"carsResults4\"},\"id\":\"carsResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults4\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro4\",\"next\":\"carsResultsIntro5\"},\"id\":\"carsResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"carsResultsIntro5\":{\"edges\":{\"prev\":\"carsResults4\",\"next\":\"carsResults5\"},\"id\":\"carsResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"carsResults5\":{\"sceneType\":\"carResults\",\"edges\":{\"prev\":\"carsResultsIntro5\",\"next\":\"libraryIntro1\"},\"id\":\"carsResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Which type of wheel do these results suggest was faster?\",\"options\":[{\"value\":\"thick wheels\",\"label\":\"Thick Wheels\"},{\"value\":\"thin wheels\",\"label\":\"Thin Wheels\"},{\"value\":\"neither wheels\",\"label\":\"Neither Wheels\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that PLACEHOLDER were faster?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro1\":{\"edges\":{\"prev\":\"carsResults5\",\"next\":\"libraryIntro2\"},\"id\":\"libraryIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro2\":{\"edges\":{\"prev\":\"libraryIntro1\",\"next\":\"libraryIntro3\"},\"id\":\"libraryIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro3\":{\"edges\":{\"prev\":\"libraryIntro2\",\"next\":\"libraryIntro4\"},\"id\":\"libraryIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro4\":{\"edges\":{\"prev\":\"libraryIntro3\",\"next\":\"libraryIntro5\"},\"id\":\"libraryIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro5\":{\"edges\":{\"prev\":\"libraryIntro4\",\"next\":\"libraryIntro6\"},\"id\":\"libraryIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryIntro6\":{\"edges\":{\"prev\":\"libraryIntro5\",\"next\":\"libraryResultsIntro1\"},\"id\":\"libraryIntro6\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro1\":{\"edges\":{\"prev\":\"libraryIntro6\",\"next\":\"libraryResults1\"},\"id\":\"libraryResultsIntro1\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults1\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro1\",\"next\":\"libraryResultsIntro2\"},\"id\":\"libraryResults1\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro2\":{\"edges\":{\"prev\":\"libraryResults1\",\"next\":\"libraryResults2\"},\"id\":\"libraryResultsIntro2\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults2\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro2\",\"next\":\"libraryResultsIntro3\"},\"id\":\"libraryResults2\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro3\":{\"edges\":{\"prev\":\"libraryResults2\",\"next\":\"libraryResults3\"},\"id\":\"libraryResultsIntro3\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults3\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro3\",\"next\":\"libraryResultsIntro4\"},\"id\":\"libraryResults3\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro4\":{\"edges\":{\"prev\":\"libraryResults3\",\"next\":\"libraryResults4\"},\"id\":\"libraryResultsIntro4\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults4\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro4\",\"next\":\"libraryResultsIntro5\"},\"id\":\"libraryResults4\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResultsIntro5\":{\"edges\":{\"prev\":\"libraryResults4\",\"next\":\"libraryResults5\"},\"id\":\"libraryResultsIntro5\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]},\"libraryResults5\":{\"sceneType\":\"libraryResults\",\"edges\":{\"prev\":\"libraryResultsIntro5\",\"next\":\"completed\"},\"id\":\"libraryResults5\",\"questions\":{\"q1\":{\"type\":\"mc\",\"text\":\"Q1) Where do these results suggest that students learn more?\",\"options\":[{\"value\":\"the library\",\"label\":\"The Library\"},{\"value\":\"home\",\"label\":\"Home\"},{\"value\":\"neither location\",\"label\":\"Neither\"}]},\"q2\":{\"type\":\"textarea\",\"text\":\"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER.\"},\"q3\":{\"type\":\"survey\",\"text\":\"Q3) How sure are you that students learned more at PLACEHOLDER?\",\"options\":[{\"value\":\"a\",\"label\":\"Not at all sure\"},{\"value\":\"b\",\"label\":\"A little sure\"},{\"value\":\"c\",\"label\":\"Fairly sure\"},{\"value\":\"d\",\"label\":\"Very sure\"},{\"value\":\"e\",\"label\":\"Absolutely sure\"}]}},\"customEnterActions\":[],\"customExitActions\":[]},\"completed\":{\"edges\":{\"prev\":\"libraryResults5\"},\"id\":\"completed\",\"sceneType\":\"standard\",\"customEnterActions\":[],\"customExitActions\":[]}}}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9uYXZiYXIvaW5kZXguY3NzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL25hdmJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2Uvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zbmFja2Jhci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wb3N0dGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGVzdFJlc3VsdHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3Rlc3RTY2VuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLElBQUksT0FBTztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBTztBQUNQO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsUUFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLElBQUksT0FBTztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHVCQUF1QjtBQUM1RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pUQTtBQUFBO0FBQUE7QUFBd0Q7O0FBRWpELDBCQUEwQixxRUFBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJkaXBvc3R0ZXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3Bvc3R0ZXN0LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICBsZXQgYWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgIHVzZXJJRDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIiksXG4gICAgICAgIGNsYXNzQ29kZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGFzc0NvZGVcIiksXG4gICAgICAgIGRhdGFiYXNlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFiYXNlXCIpLFxuICAgICAgICBob21lcGFnZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKSxcbiAgICAgICAgYWN0aXZpdHlLZXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5XCIpLFxuICAgICAgICBmZWF0dXJlczogKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5RmVhdHVyZXNcIikgfHwgXCJcIilcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjpcIilcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUNvbmZpZyk7XG4gICAgcmV0dXJuIGFjdGl2aXR5Q29uZmlnO1xufSIsIi8vIGFic3RyYWN0IGNsYXNzIC0gaW50ZXJmYWNlXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvZGUgPSBjbGFzc0NvZGU7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuXG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcblxuICAgIH1cblxuICAgIGdldFJRRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcblxuICAgIH1cblxuICAgIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcblxuICAgIH1cblxuICAgIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxufTtcblxuXG4iLCJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEN3pJay04VjIwUXFKTlNzMGNBVjB1TkwzcWplcUxNZE1cIixcbiAgICBhdXRoRG9tYWluOiBcImlzcHR1dG9yLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJpc3B0dXRvclwiXG59O1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIHRoaXMudXNlclJlZiA9IHRoaXMuc3RvcmUuY29sbGVjdGlvbih0aGlzLmNsYXNzQ29kZSkuZG9jKHRoaXMudXNlcklEKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgLy8gcmV0dXJucyBwcm9taXNlIHdpdGggJ2RvYycgaWYgaXQgZXhpc3RzLCBudWxsIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLmdldCgpXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYy5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG4gIFxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTj10cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJEYXRhKClcbiAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJEYXRhW2FjdGl2aXR5S2V5XTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRlY29kZUpTT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldFJRRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcInJxdGVkXCIpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gZ2V0SW5pdGlhbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiaW5pdGlhbEh5cG9cIilcbiAgICAvLyAgICAgLnRoZW4oKHN0ckRhdGEpKVxuICAgIC8vIH1cblxuICAgIC8vIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJmaW5hbEh5cG9cIilcbiAgICAvLyB9XG5cbiAgICBzZXRWYWx1ZXMob2JqZWN0LCBvdmVyd3JpdGU9ZmFsc2UpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB7bWVyZ2U6IHRydWV9IG9wdGlvbiBmb3Igc2FmZXR5XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYuc2V0KG9iamVjdCwge21lcmdlOiAhb3ZlcndyaXRlfSk7ICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlcyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi51cGRhdGUob2JqZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKHtcbiAgICAgICAgICAgIFt2YXJOYW1lXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuZGVsZXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldCh7XG4gICAgLy8gICAgICAgICBbdmFyTmFtZV06IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfSAgIFxuICAgIFxuICAgIC8vIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG59OyIsImltcG9ydCB7IExvY2FsU3RvcmFnZURCIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlREJcIjtcbmltcG9ydCB7IEZpcmVzdG9yZURCIH0gZnJvbSBcIi4vZmlyZXN0b3JlREJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERCQ29ubmVjdGlvbihkYlR5cGUpIHtcbiAgICBsZXQgZGI7XG4gICAgc3dpdGNoKGRiVHlwZSkge1xuICAgICAgICBjYXNlIFwiZmlyZXN0b3JlXCI6XG4gICAgICAgICAgICBkYiA9IG5ldyBGaXJlc3RvcmVEQigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkYiA9IG5ldyBMb2NhbFN0b3JhZ2VEQigpO1xuICAgIH1cbiAgICByZXR1cm4gZGI7IFxufVxuIiwiXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIE5PVEU6IHRoaXMgQVBJIG11c3QgdXNlIHByb21pc2VzIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBhbnkgZGJcbi8vIHdlIG1heSBiZSB1c2luZywgd2hpY2ggbWF5IGJlIGVpdGhlciBzeW5jIG9yIGFzeW5jXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwiY2xhc3NDb2RlXCIsIGNsYXNzQ29kZSksXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwidXNlcklEXCIsIHVzZXJJRCksXG4gICAgICAgIC8vIF0pLnRoZW4oKFtyZXN1bHQxLCByZXN1bHQyXSkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5jb3VudChcImdldFVzZXJEYXRhKCkgY2FsbGVkXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJjbGFzc0NvZGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldFRleHRWYWx1ZShcInVzZXJJRFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIiksXG4gICAgICAgICAgICB0aGlzLmdldEN1cnJIeXBvVGFzaygpLFxuICAgICAgICAgICAgdGhpcy5nZXRJbnRpYWxIeXBvRGF0YSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRGaW5hbEh5cG9EYXRhKClcbiAgICAgICAgXSkudGhlbigoW2NjUmVzLCB1aWRSZXMsIHJxUmVzLCBjaHRSZXMsIGloUmVzLCBmaFJlc10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NDb2RlID0gY2NSZXM7XG4gICAgICAgICAgICBkYXRhLnVzZXJJRCA9IHVpZFJlcztcbiAgICAgICAgICAgIGRhdGEucnF0ZWQgPSBycVJlcztcbiAgICAgICAgICAgIGlmIChjaHRSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJIeXBvVGFza0lkeCA9IGNodFJlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGloUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBpaFJlcy5maXJzdFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0aWFsSHlwbyA9IGloUmVzLmluaXRpYWxIeXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZoUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gZmhSZXMuc2Vjb25kUHJlZGljdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZoUmVzLmZpbmFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT04gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShhY3Rpdml0eUtleSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmICFkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZUpTT05WYWx1ZShhY3Rpdml0eUtleSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpdml0eURhdGEoXCJycXRlZFwiKVxuICAgICAgICAudGhlbigocnF0ZWQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJxdGVkKTtcbiAgICAgICAgICAgIGlmIChycXRlZCkge1xuICAgICAgICAgICAgICAgIHJldFZhbCA9IHJxdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcnEgaXNuJ3Qgc2VsZWN0ZWQgaGFyZC1jb2RlIHRvIGNyeXN0YWwgZ3Jvd3RoXG4gICAgICAgICAgICAgICAgcmV0VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVTdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcmVhOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhYmxlOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJROiB7IGluZGV4OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW50VmFsdWUoXCJjdXJySHlwb1Rhc2tJZHhcIilcbiAgICB9XG5cbiAgICBnZXRJbnRpYWxIeXBvRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dFZhbHVlKFwiZmlyc3RQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6Zmlyc3RQcmVkaWN0aW9uICR7cHJlZDF9YCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gcHJlZDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShcImluaXRpYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChpbml0SHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRJbml0aWFsSHlwb0RhdGEoKTppbml0SHlwbyAke2luaXRIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpbml0SHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcInNlY29uZFByZWRpY3Rpb25cIilcbiAgICAgICAgICAgIC50aGVuKChwcmVkMikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6c2Vjb25kUHJlZGljdGlvbiAke3ByZWQyfWApXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IHByZWQyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJmaW5hbEh5cG9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGZpbmFsSHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6ZmluYWxIeXBvICR7ZmluYWxIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuZmluYWxIeXBvID0gZmluYWxIeXBvO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIG92ZXJ3cml0ZSBwYXJhbSBpcyBpZ25vcmVkLCBhcyBpdCBpcyBzcGVjaWZpYyB0byBmaXJlc3RvcmVcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5pdGVtcyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YXJOYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXCJ0cnVlXCIgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8vIGxldCBkYiA9IG5ldyBEYXRhYmFzZShcIkJPR1VTX0NMQVNTXCIsIFwiQk9HVVNfU1RVREVOVFwiKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2Lm5hdmJhclwiKTtcbiAgICAgICAgdGhpcy51c2VySW5mb1JlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9pbmZvX3JlZ2lvblwiKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpdml0eV90aXRsZVwiKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2aXR5X3NlY3Rpb25cIik7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbl9vdXRfYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnNpZ25JblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ25faW5fdGV4dFwiKTtcbiAgICAgICAgdGhpcy5zaWduT3V0VXNlciA9IHRoaXMuc2lnbk91dFVzZXIuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5sb2dvdXRIYW5kbGVyID0gbG9nb3V0SGFuZGxlcjtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNpZ25PdXRVc2VyKTtcbiAgICB9XG5cbiAgICBzaWduT3V0VXNlcihlKSB7XG4gICAgICAgIHRoaXMudXNlckluZm9SZWdpb24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgbGV0IGhvbWVQYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKTtcbiAgICAgICAgaWYgKG51bGwgPT09IGhvbWVQYWdlKSB7XG4gICAgICAgICAgICBob21lUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBob21lUGFnZTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWN0aXZpdHlUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZGlzcGxheUFjdGl2aXR5U2VjdGlvbihzZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlTZWN0aW9uLmlubmVyVGV4dCA9IHNlY3Rpb247XG4gICAgfVxuXG4gICAgZGlzcGxheVVzZXIodXNlck5hbWUpIHtcbiAgICAgICAgdGhpcy5zaWduSW5UZXh0LmlubmVySFRNTCA9IGBXZWxjb21lLCAke3VzZXJOYW1lfWA7XG4gICAgICAgIHRoaXMudXNlckluZm9SZWdpb24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZ2V0REJDb25uZWN0aW9uIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvaXNwLWRhdGFiYXNlXCI7XG5pbXBvcnQgeyBTbmFja0Jhcn0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc25hY2tiYXJcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lQmFzZWRBcHAge1xuICAgIGNvbnN0cnVjdG9yKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmVEYXRhID0gYXBwRGF0YS5zY2VuZXM7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlDb25maWcgPSBhY3Rpdml0eUNvbmZpZztcbiAgICAgICAgdGhpcy5kYiA9IGdldERCQ29ubmVjdGlvbihhY3Rpdml0eUNvbmZpZy5kYXRhYmFzZSk7XG4gICAgICAgIHRoaXMuZGIuc2V0Q3JlZGVudGlhbHMoYWN0aXZpdHlDb25maWcuY2xhc3NDb2RlLCBhY3Rpdml0eUNvbmZpZy51c2VySUQpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5S2V5ID0gYWN0aXZpdHlDb25maWcuYWN0aXZpdHlLZXk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0gZGVmYXVsdEluaXRpYWxTdGF0ZTtcblxuICAgICAgICB0aGlzLnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKCk7XG4gICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4gPSBudWxsO1xuICAgICAgICBsZXQgaG9tZVBhZ2VCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb19ob21lX3BhZ2VcIik7XG4gICAgICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG4gICAgICAgIHRoaXMucHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldl9idG5cIik7XG4gICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVfaWRfcmVnaW9uXCIpO1xuICAgICAgICBpZiAoaG9tZVBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4gPSBob21lUGFnZUJ0bjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UgPSB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUHJldiA9IHRoaXMuaGFuZGxlUHJldi5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5ob21lUGFnZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5ob21lUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHb0hvbWVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTmV4dCk7XG4gICAgICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQcmV2KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc2NlbmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IG51bGw7XG4gICAgICAgIC8vIGlzIHRoaXMgbmVlZGVkPz8/XG4gICAgICAgIHRoaXMuYm9ndXNTY2VuZUluZm8gPSB7XG4gICAgICAgICAgICBpZDogXCJOL0FcIixcbiAgICAgICAgICAgIHNjZW5lVHlwZTogXCJib2d1c1wiXG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hcHAgPSB0aGlzO1xuICAgIH1cblxuXG4gICAgLy8gc2V0U25hY2tiYXIoc25hY2tiYXIpIHtcbiAgICAvLyAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuICAgIC8vIH1cblxuICAgIHNob3dGZWVkYmFjayhmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnNuYWNrYmFyLnNob3coZmVlZGJhY2spO1xuICAgIH1cblxuICAgIGhhbmRsZUdvSG9tZVBhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmFjdGl2aXR5Q29uZmlnLmhvbWVwYWdlXG4gICAgfVxuXG4gICAgaGFuZGxlUHJldihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVQcmV2QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuc2F2ZUFwcFN0YXRlKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVOZXh0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuc2F2ZUFwcFN0YXRlKCk7XG4gICAgfVxuXG4gICAgc2V0U3RhcnRTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJzZXRTdGFydFNjZW5lKClcIiwgc2NlbmVJZCk7XG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IHNjZW5lSWQ7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRpbmdcIik7XG4gICAgICAgIHRoaXMuZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgICAgLnRoZW4oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gYWN0aXZpdHkgZGF0YSBpbiBkYi4gdXNpbmcgaW5pdGlhbCBkYXRhXCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIFNjZW5lc1wiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLnNjZW5lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZUlkID0gc2VjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNyZWF0aW5nIHNjZW5lIGZvciAke3NjZW5lSWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZU9iaiA9IHRoaXMuY3JlYXRlU2NlbmUodGhpcy5zY2VuZURhdGFbc2NlbmVJZF0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzY2VuZU9iaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lSWRdID0gc2NlbmVPYmo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zY2VuZVN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3RvcmluZyBBcHAgU3RhdGVcIilcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLnNjZW5lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZUlkID0gc2VjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lU3RhdGUgPSB0aGlzLnN0YXRlLnNjZW5lU3RhdGVbc2NlbmVJZF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lSWRdLnJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdG9yaW5nIEN1cnJlbnQgU2NlbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5sb29rdXBTY2VuZSh0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zyh0aGlzLnNjZW5lRGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9TdGFydFNjZW5lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXBwU3RhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJMb2FkaW5nIEFwcCBTdGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuZ2V0QWN0aXZpdHlEYXRhKHRoaXMuYWN0aXZpdHlLZXkpO1xuICAgIH1cblxuICAgIHNhdmVBcHBTdGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNhdmluZyBBcHAgU3RhdGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnNldEFjdGl2aXR5RGF0YSh0aGlzLmFjdGl2aXR5S2V5LCB0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgLy8geW91J2xsIHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnl0aGluZyB1c2VmdWxcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcImNyZWF0ZVNjZW5lKClcIiwgc2NlbmVJbmZvLCBzY2VuZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgIH1cblxuICAgIHN3aXRjaFRvU2NlbmUoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5sb2dTY2VuZUNoYW5nZShzY2VuZSk7XG4gICAgICAgIHRoaXMuZ290b1NjZW5lKHNjZW5lKTtcbiAgICB9XG5cbiAgICBnb3RvU2NlbmUoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5wcmV2U2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICAgICAgaWYgKHRoaXMucHJldlNjZW5lKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5wcmVfZXhpdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUuZXhpdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUucG9zdF9leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucHJlX2VudGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmVudGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnBvc3RfZW50ZXIoKTtcbiAgICAgICAgLy8gZGVsZXRlIHRoaXMucHJldlNjZW5lO1xuICAgICAgICB0aGlzLmRpc3BsYXlTY2VuZUlkKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVNjZW5lSWQoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24uaW5uZXJIVE1MID0gdGhpcy5jdXJyZW50U2NlbmUuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb29rdXBTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuc2NlbmVzW3NjZW5lSWRdO1xuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFUlJPUjogbm8gc3VjaCBzY2VuZSAke3NjZW5lSWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cblxuICAgIGZvbGxvd0VkZ2UoZWRnZU5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1NjZW5lSWQgPSB0aGlzLmN1cnJlbnRTY2VuZS5lZGdlc1tlZGdlTmFtZV07XG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUobmV3U2NlbmVJZCk7XG4gICAgICAgIHRoaXMuc3dpdGNoVG9TY2VuZShuZXdTY2VuZSk7XG4gICAgfVxuXG4gICAgbG9nU2NlbmVDaGFuZ2Uoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcIlNDRU5FX1RSQU5TSVRJT05cIixcbiAgICAgICAgICAgIGZyb206IHRoaXMuY3VycmVudFNjZW5lLmlkLFxuICAgICAgICAgICAgdG86IHNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKFwiVXBkYXRpbmcgc3RhdGUuZXZlbnRzXCIpO1xuICAgIH1cblxuXG4gICAgZ290b1N0YXJ0U2NlbmUoKSB7XG4gICAgICAgIC8vIGJ5cGFzc2VzIHN3aXRjaFRvU2NlbmUoKSBhbmQgdGh1cyBsb2dTY2VuZUNoYW5nZSgpXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFNjZW5lID0gbnVsbDtcbiAgICAgICAgbGV0IHN0YXJ0U2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICAgICAgaWYgKCFzdGFydFNjZW5lKSB7XG4gICAgICAgICAgICBzdGFydFNjZW5lID0gdGhpcy5sb29rdXBTY2VuZSh0aGlzLnN0YXJ0U2NlbmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJBUFBfU1RBUlRcIixcbiAgICAgICAgICAgIHNjZW5lOiAgc3RhcnRTY2VuZS5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcIlVwZGF0aW5nIHN0YXRlLmV2ZW50c1wiKTtcbiAgICAgICAgdGhpcy5nb3RvU2NlbmUoc3RhcnRTY2VuZSk7XG4gICAgfVxuXG5cbiAgICBoaWRlKGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgc2hvdyhlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIG1ha2VJbnZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZVZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZUJhc2VkQXBwIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL3NjZW5lXCI7XG5cbmV4cG9ydCB7XG4gICAgU2NlbmVCYXNlZEFwcCxcbiAgICBTY2VuZVxufTtcbiIsImV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgZm9ybUluZm8sIGVsZUlkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMuZm9ybUluZm8gPSBmb3JtSW5mbztcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSWQpO1xuICAgICAgICB0aGlzLnJhZGlvcyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm0gaXMgdmFsaWQ6XCIsIHZhbGlkaXR5KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5O1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIGRpcnR5IHN0YXRlIHNvIGl0IHdpbGwgZ2V0IHNhdmVkIGxhdGVyIG9uXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAgICAgcmIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVhcmRvd25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAgICAgcmIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRDb3JyZWN0bmVzcygpIHtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICApXG4gICAgICAgIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIC8vIGxldCBhbnNUZXh0ID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IGNvcnJlY3RBbnN3ZXIgPSBzZmkuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgbGV0IGlzQ29ycmVjdDtcblxuICAgICAgICBpZiAoXCJOL0FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0QW5zd2VyID09PSB2YWwpIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNDb3JyZWN0O1xuICAgIH1cblxuICAgIGdldEZlZWRiYWNrKCkge1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNDb3JyZWN0LCBzZmkpO1xuICAgICAgICBsZXQgZmJUZXh0LCBmYkNsYXNzTmFtZSwgZmJNc2c7XG4gICAgICAgIHN3aXRjaChpc0NvcnJlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkucG9zRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcInBvcy1mZWVkYmFja1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubmVnRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm5lZy1mZWVkYmFja1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm50bC1mZWVkYmFja1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YoZmJUZXh0KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihzZmkubnRsRmIpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGZiVGV4dCkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGZiTXNnID0gYDxzcGFuIGNsYXNzPVwiJHtmYkNsYXNzTmFtZX1cIj4ke2ZiVGV4dH08L3NwYW4+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmJNc2c7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICApO1xuICAgICAgICBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICBsZXQgbGJsID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25UeXBlOiBzZmkudHlwZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogc2ZpLnRleHQsXG4gICAgICAgICAgICBzZWxlY3RlZEVsZUlkOiBzZWxlY3RlZEFuc3dlci5pZCxcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IHZhbCxcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiZWw6IGxibCxcbiAgICAgICAgICAgIGlzQ29ycmVjdDogaXNDb3JyZWN0LFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gbm9uLWRpcnR5IHN0YXRlLCBzbyB3ZSBkb24ndCByZXN1Ym1pdCB1bmxlc3MgdGhleVxuICAgICAgICAvLyBjaGFuZ2UgYWdhaW5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdEluaXRpYWxpemluZyBTY2VuZTogJHtzY2VuZUluZm8uaWR9YCk7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICAvLyBjb3B5IGFsbCBzY2VuZUluZm8gdG8gJ3RoaXMnXG4gICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzY2VuZUluZm8pKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIC8vIGJpbmQgZXZlbnQgaGFuZGxlclxuICAgICAgICB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24gPSB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93QnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlQnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGhhbmRsZUZvbGxvd0VkZ2VCdXR0b24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBlZGdlTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuZWRnZTtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShlZGdlTmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0Rm9sbG93RWRnZUVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9sbG93LWVkZ2VcIik7XG4gICAgfVxuXG4gICAgc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRGb2xsb3dFZGdlRWxlbWVudHMoKSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiwgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlU3RhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRSZXN0b3JpbmcgU2NlbmUgU3RhdGUgZm9yOiAke3RoaXMuaWR9IGApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9pc0JvZ3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCA9PT0gXCJOL0FcIiB8fCB0aGlzLnNjZW5lVHlwZSA9PT0gXCJib2d1c1wiO1xuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJwcmV2XCIpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJuZXh0XCIpO1xuICAgIH1cblxuICAgIGhhc0Zvcm0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByZV9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgRW50ZXJpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlxcdFVwZGF0aW5nIHN0YXRlLmN1cnJlbnRTY2VuZVwiKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuY3VycmVudFNjZW5lID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRW50ZXJBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZW50ZXIoKSB7XG5cbiAgICB9XG5cbiAgICBwcmVfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFeGl0aW5nIFNjZW5lOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRXhpdEFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0X2V4aXQoKSB7XG5cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5zZXR1cEZvbGxvd0VkZ2VFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGV4dGFyZWFGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGZvcm1JbmZvLCBlbGVJZCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICB0aGlzLmZvcm1JbmZvID0gZm9ybUluZm87XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250cm9sJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkaXR5ID0gdGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmb3JtIGlzIHZhbGlkOlwiLCB2YWxpZGl0eSk7XG4gICAgICAgIHJldHVybiB2YWxpZGl0eTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAvLyBzZXQgZm9ybSB0byBkaXJ0eSBzdGF0ZSBzbyBpdCB3aWxsIGdldCBzYXZlZCBsYXRlciBvblxuICAgICAgICBpZiAodGhpcy50ZXh0YXJlYS52YWx1ZS50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgcmIgb2YgdGhpcy5yYWRpb3MpIHtcbiAgICAgICAgLy8gICAgIHJiLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgdGVhcmRvd25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAvLyBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAvLyAgICAgcmIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMudGV4dGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuaGFuZGxlQ2hhbmdlKTtcbiAgICB9XG5cblxuICAgIGdldENvcnJlY3RuZXNzKCkge1xuICAgICAgICAvLyBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgLy8gbGV0IHNlbGVjdGVkQW5zd2VyID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIC8vICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnXG4gICAgICAgIC8vIClcbiAgICAgICAgLy8gbGV0IHZhbCA9IHNlbGVjdGVkQW5zd2VyLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgLy8gLy8gbGV0IGFuc1RleHQgPSBzZWxlY3RlZEFuc3dlci5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAvLyBsZXQgY29ycmVjdEFuc3dlciA9IHNmaS5jb3JyZWN0QW5zd2VyO1xuICAgICAgICAvLyBsZXQgaXNDb3JyZWN0O1xuXG4gICAgICAgIC8vIGlmIChcIk4vQVwiID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICAgIC8vICAgICBpc0NvcnJlY3QgPSBudWxsO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGNvcnJlY3RBbnN3ZXIgPT09IHZhbCkge1xuICAgICAgICAvLyAgICAgaXNDb3JyZWN0ID0gdHJ1ZTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiBpc0NvcnJlY3Q7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldEZlZWRiYWNrKCkge1xuICAgICAgICAvLyBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaXNDb3JyZWN0LCBzZmkpO1xuICAgICAgICBsZXQgZmJUZXh0LCBmYkNsYXNzTmFtZSwgZmJNc2c7XG4gICAgICAgIC8vIHN3aXRjaCAoaXNDb3JyZWN0KSB7XG4gICAgICAgIC8vICAgICBjYXNlIHRydWU6XG4gICAgICAgIC8vICAgICAgICAgZmJUZXh0ID0gc2ZpLnBvc0ZiO1xuICAgICAgICAvLyAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJwb3MtZmVlZGJhY2tcIjtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIC8vICAgICAgICAgZmJUZXh0ID0gc2ZpLm5lZ0ZiO1xuICAgICAgICAvLyAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJuZWctZmVlZGJhY2tcIjtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAvLyAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodHlwZW9mIChmYlRleHQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHNmaS5udGxGYikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAgICAgICAgIGZiQ2xhc3NOYW1lID0gXCJudGwtZmVlZGJhY2tcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0eXBlb2YgKGZiVGV4dCkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGZiTXNnID0gYDxzcGFuIGNsYXNzPVwiJHtmYkNsYXNzTmFtZX1cIj4ke2ZiVGV4dH08L3NwYW4+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmJNc2c7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIC8vIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAvLyAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICAvLyApO1xuICAgICAgICAvLyBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICAvLyBsZXQgbGJsID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IGFuc3dlciA9IHRoaXMudGV4dGFyZWEudmFsdWUudHJpbSgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBxdWVzdGlvblR5cGU6IHNmaS50eXBlLFxuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBzZmkudGV4dCxcbiAgICAgICAgICAgIC8vIHNlbGVjdGVkRWxlSWQ6IHNlbGVjdGVkQW5zd2VyLmlkLFxuICAgICAgICAgICAgLy8gc2VsZWN0ZWRWYWx1ZTogdmFsLFxuICAgICAgICAgICAgLy8gc2VsZWN0ZWRMYWJlbDogbGJsLFxuICAgICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIG5vbi1kaXJ0eSBzdGF0ZSwgc28gd2UgZG9uJ3QgcmVzdWJtaXQgdW5sZXNzIHRoZXlcbiAgICAgICAgLy8gY2hhbmdlIGFnYWluXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG4gICAgLy8gZ2V0Rm9ybURhdGEoKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVGb3JtU3VibWl0KGUpIHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gICAgIGlmICh0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG5cbiAgICAvLyAgICAgICAgIGxldCBmYlRleHQ7XG4gICAgLy8gICAgICAgICBsZXQgZmJDbGFzc05hbWU7XG5cbiAgICAvLyAgICAgICAgIGlmIChcIm4vYVwiID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgLy8gICAgICAgICAgICAgaXNDb3JyZWN0ID0gbnVsbDtcbiAgICAvLyAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgLy8gICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm50bC1mZWVkYmFja1wiO1xuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0QW5zd2VyID09PSB2YWwpIHtcbiAgICAvLyAgICAgICAgICAgICBpc0NvcnJlY3QgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5wb3NGYjtcbiAgICAvLyAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9IFwicG9zLWZlZWRiYWNrXCI7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGlzQ29ycmVjdCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5uZWdGYjtcbiAgICAvLyAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9ICduZWctZmVlZGJhY2snO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBpZiAoIWZiVGV4dCkge1xuICAgIC8vICAgICAgICAgICAgIGZiVGV4dCA9IHNmaS5udGxGYjtcbiAgICAvLyAgICAgICAgICAgICBmYkNsYXNzTmFtZSA9ICdudGwtZmVlZGJhY2snO1xuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICB0aGlzLmFwcC5zaG93RmVlZGJhY2soZmJNc2cpO1xuICAgIC8vICAgICAgICAgLy8gd2hhdCB3ZSB3YW50IHRvIHN0b3JlIGluIGZpcmVzdG9yZVxuICAgIC8vIH1cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG5cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGxldCBmYk1zZyA9IGA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+UGxlYXNlIHNlbGVjdCBhbiBvcHRpb248L3NwYW4+YDtcbiAgICAvLyAgICAgICAgIHRoaXMuYXBwLnNob3dGZWVkYmFjayhmYk1zZyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBTbmFja0JhciB7XG4gICAgY29uc3RydWN0b3IoZWxlSUQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlEIHx8IFwic25hY2tiYXJcIik7XG4gICAgfVxuXG4gICAgc2hvdyh0ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YodGV4dCkgIT09IFwidW5kZWZpbmVkXCIgJiYgbnVsbCAhPT0gdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBcInNob3dcIiBjbGFzcyB0byBESVZcbiAgICAgICAgICAgIC8vIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJzaG93XCI7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgLy8gQWZ0ZXIgMyBzZWNvbmRzLCByZW1vdmUgdGhlIHNob3cgY2xhc3MgZnJvbSBESVZcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNuYWNrYmFyLmNsYXNzTmFtZSA9IHNuYWNrYmFyLmNsYXNzTmFtZS5yZXBsYWNlKFwic2hvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9uYXZiYXJcIjtcblxuaW1wb3J0IHsgU2NlbmVCYXNlZEFwcCB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L3NjZW5lLWFwcC1iYXNlXCI7XG5pbXBvcnQgeyBEaVRlc3RTY2VuZSwgRGlUZXN0UmVzdWx0c1NjZW5lIH0gZnJvbSBcIi4vc2NlbmVzXCI7XG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RBcHAgZXh0ZW5kcyBTY2VuZUJhc2VkQXBwe1xuICAgIC8vIGNvbnN0cnVjdG9yKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gICAgIHN1cGVyKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKTtcbiAgICAvLyB9XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgbGV0IHNjZW5lO1xuICAgICAgICBzd2l0Y2goc2NlbmVJbmZvLnNjZW5lVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImNhclJlc3VsdHNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJsaWJyYXJ5UmVzdWx0c1wiOlxuICAgICAgICAgICAgY2FzZSBcIm1lbW9yeVJlc3VsdHNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRzUmVzdWx0c1wiOlxuICAgICAgICAgICAgICAgIHNjZW5lID0gbmV3IERpVGVzdFJlc3VsdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzY2VuZSA9IG5ldyBEaVRlc3RTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cblxuICAgIC8vIGxvZ1N0dWRlbnRBbnN3ZXIocXVlc3Rpb25OYW1lLCBhbnN3ZXIpIHtcbiAgICAvLyAgICAgbGV0IHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50U2NlbmUucXVlc3Rpb25zW3F1ZXN0aW9uTmFtZV07XG4gICAgLy8gICAgIGxldCBpc0NvcnJlY3QgPSBcIk4vQVwiO1xuICAgIC8vICAgICBpZiAocXVlc3Rpb24uaGFzT3duUHJvcGVydHkoXCJjb3JyZWN0QW5zd2VyXCIpKSB7XG4gICAgLy8gICAgICAgICBpc0NvcnJlY3QgPSAoYW5zd2VyID09PSBxdWVzdGlvbi5jb3JyZWN0QW5zd2VyKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBxaWQgPSBgJHt0aGlzLmN1cnJlbnRTY2VuZS5pZH0uJHtxdWVzdGlvbk5hbWV9YDtcbiAgICAvLyAgICAgaWYgKFwiXCIgIT09IHRoaXMudGVzdE5hbWUpIHtcbiAgICAvLyAgICAgICAgIHFpZCA9IGAke3RoaXMudGVzdE5hbWV9LiR7cWlkfWA7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgLy8gICAgICAgICBhY3Rpb246IFwiU1VCTUlUX0FOU1dFUlwiLFxuICAgIC8vICAgICAgICAgcXVlc3Rpb25JZDogcWlkLFxuICAgIC8vICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVzdGlvbi50ZXh0LFxuICAgIC8vICAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgLy8gICAgICAgICBpc0NvcnJlY3Q6IGlzQ29ycmVjdCxcbiAgICAvLyAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gfVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgRGlUZXN0QXBwIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCJAaXNwdHV0b3Jwcm9qZWN0L25hdmJhclwiO1xuXG5pbXBvcnQgeyBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9hY3Rpdml0eS1jb25maWdcIjtcblxuY29uc3QgREVGQVVMVF9BUFBfSU5JVElBTF9TVEFURSA9IHtcbiAgICBldmVudHM6IFtdLFxuICAgIC8vIG1hcHBpbmcgb2Ygc2NlbmVJRHMgLT4gc2NlbmUtdHlwZSBzcGVjaWZpYyBkYXRhXG4gICAgc2NlbmVTdGF0ZToge30sXG4gICAgY3VycmVudFNjZW5lOiBcInN0YXJ0XCJcbn07XG5cblxubGV0IGFjdGl2aXR5Q29uZmlnID0gZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uKCk7XG5jb25zdCBhY3Rpdml0eURhdGEgPSByZXF1aXJlKFwiLi4vZGF0YS9kaVBvc3RUZXN0Lmpzb25cIik7XG5cbmxldCBuYXZiYXIgPSBuZXcgTmF2QmFyKCk7XG5uYXZiYXIuZGlzcGxheUFjdGl2aXR5VGl0bGUoXCJEYXRhIEludGVycHJldGF0aW9uIFBvc3QtVGVzdFwiKTtcbm5hdmJhci5kaXNwbGF5VXNlcihhY3Rpdml0eUNvbmZpZy51c2VySUQpO1xuXG5cbmxldCBhcHAgPSBuZXcgRGlUZXN0QXBwKFxuICAgIGFjdGl2aXR5RGF0YSwgYWN0aXZpdHlDb25maWcsIERFRkFVTFRfQVBQX0lOSVRJQUxfU1RBVEVcbik7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGFwcC5zZXRTdGFydFNjZW5lKFwic3RhcnRcIik7XG59XG5hcHAuc3RhcnQoKTtcbiIsImltcG9ydCB7IERpVGVzdFNjZW5lIH0gZnJvbSBcIi4vdGVzdFNjZW5lXCI7XG5pbXBvcnQgeyBEaVRlc3RSZXN1bHRzU2NlbmUgfSBmcm9tIFwiLi90ZXN0UmVzdWx0c1NjZW5lXCI7XG5cbmV4cG9ydCB7IERpVGVzdFNjZW5lLCBEaVRlc3RSZXN1bHRzU2NlbmUgfTsiLCJpbXBvcnQgeyBEaVRlc3RTY2VuZSB9IGZyb20gXCIuL3Rlc3RTY2VuZVwiO1xuXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkZvcm0gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZS9yYWRpby1idXR0b24tZm9ybVwiO1xuaW1wb3J0IHsgVGV4dGFyZWFGb3JtIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2UvdGV4dGFyZWEtZm9ybVwiO1xuXG5jb25zdCBGSVJTVF9UUkFOU0lUSU9OID0gMDtcbmNvbnN0IExBU1RfVFJBTlNJVElPTiA9IDI7XG5cbmV4cG9ydCBjbGFzcyBEaVRlc3RSZXN1bHRzU2NlbmUgZXh0ZW5kcyBEaVRlc3RTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gbnVsbDtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB0aGUgZmlyc3QgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uID0gRklSU1RfVFJBTlNJVElPTjtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zYXZlUTFTdGF0ZSA9IHRoaXMuc2F2ZVExU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlUTJTdGF0ZSA9IHRoaXMuc2F2ZVEyU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlUTNTdGF0ZSA9IHRoaXMuc2F2ZVEzU3RhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVNob3dMZWZ0TWVhbiAgICA9IHRoaXMuaGFuZGxlU2hvd0xlZnRNZWFuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd1JpZ2h0TWVhbiAgID0gdGhpcy5oYW5kbGVTaG93UmlnaHRNZWFuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd1NvcnRlZFRhYmxlID0gdGhpcy5oYW5kbGVTaG93U29ydGVkVGFibGUuYmluZCh0aGlzKTtcblxuICAgICAgICBsZXQgc2lkZSA9IFwibGVmdFwiXG4gICAgICAgIHRoaXMubGVmdE1lYW5CdG4gICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3JldmVhbF8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVhblZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fJHtzaWRlfV9tZWFuYCk7XG4gICAgICAgIHNpZGUgPSBcInJpZ2h0XCI7XG4gICAgICAgIHRoaXMucmlnaHRNZWFuQnRuICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9yZXZlYWxfJHtzaWRlfV9tZWFuYCk7XG4gICAgICAgIHRoaXMucmlnaHRNZWFuVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV8ke3NpZGV9X21lYW5gKTtcbiAgICAgICAgdGhpcy5zaG93U29ydGVkVGFibGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zaG93X3NvcnRlZF90YWJsZWApO1xuICAgICAgICB0aGlzLnNvcnRlZFRhYmxlVGV4dCAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3NvcnRlZF90ZXh0YCk7XG4gICAgICAgIHRoaXMuc29ydGVkSW1nICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLmlkfV9zb3J0ZWRgKTtcbiAgICAgICAgdGhpcy51bnNvcnRlZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3Vuc29ydGVkYCk7XG5cbiAgICAgICAgdGhpcy5xMlRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfYW5zd2VyYCk7XG4gICAgICAgIHRoaXMuY3VycmVudEZvcm0gPSBudWxsO1xuICAgICAgICB0aGlzLnExRm9ybSA9IG5ldyBSYWRpb0J1dHRvbkZvcm0oXG4gICAgICAgICAgICB0aGlzLmFwcCwgc2NlbmVJbmZvLnF1ZXN0aW9ucy5xMSwgYCR7dGhpcy5pZH1fcTFfZm9ybWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5xMkZvcm0gPSBuZXcgVGV4dGFyZWFGb3JtKFxuICAgICAgICAgICAgdGhpcy5hcHAsIHNjZW5lSW5mby5xdWVzdGlvbnMucTIsIGAke3RoaXMuaWR9X3EyX2Zvcm1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucTNGb3JtID0gbmV3IFJhZGlvQnV0dG9uRm9ybShcbiAgICAgICAgICAgIHRoaXMuYXBwLCBzY2VuZUluZm8ucXVlc3Rpb25zLnEzLCBgJHt0aGlzLmlkfV9xM19mb3JtYFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZvcm1zID0gW1xuICAgICAgICAgICAgdGhpcy5xMUZvcm0sXG4gICAgICAgICAgICB0aGlzLnEyRm9ybSxcbiAgICAgICAgICAgIHRoaXMucTNGb3JtXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMucTJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5pZH1fcTJfdGV4dGApO1xuICAgICAgICB0aGlzLnEzVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuaWR9X3EzX3RleHRgKTtcblxuICAgICAgICB0aGlzLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKSB7XG4gICAgICAgIHN1cGVyLnJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKTtcbiAgICAgICAgaWYgKHNjZW5lU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZTo6cmVzdG9yZVN0YXRlKClcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHNjZW5lU3RhdGU7XG5cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLmN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvbiA9IHNjZW5lU3RhdGUuY3VycmVudFRyYW5zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xMVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjZW5lU3RhdGUucTFTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHNvbWV0aGluZyBpcyB2ZXJ5IHdyb25nIGlmIHdlIGRvbid0IGhhdmUgYm90aCBxMVNlbGVjdGlvblxuICAgICAgICAgICAgICAgIC8vIGFuZCBhMUFuc3dlciBzdG9yZWRcbiAgICAgICAgICAgICAgICB0aGlzLnExQW5zd2VyID0gc2NlbmVTdGF0ZS5xMUFuc3dlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVEyQW5kUTNUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xMkFuc3dlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucTJUZXh0QXJlYS52YWx1ZSA9IHNjZW5lU3RhdGUucTJBbnN3ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2NlbmVTdGF0ZS5xM1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjZW5lU3RhdGUucTNTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZml4bWUsIHRoZXNlIGFyZSB0aGUgZXZlbnQgaGFuZGxlcnMsIHdoaWNoIHNob3VsZCBiZVxuICAgICAgICAgICAgLy8gdXBkYXRpbmcgc2NlbmVTdGF0ZSB3aGVuIGNsaWNrZWRcbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLmxlZnRNZWFuU2hvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZWFuKFwibGVmdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY2VuZVN0YXRlLnJpZ2h0TWVhblNob3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TWVhbihcInJpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjZW5lU3RhdGUuc29ydGVkVGFibGVTaG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvcnRlZFRhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVTY2VuZVN0YXRlKGRpZmYpIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLmN1cnJlbnRTdGF0ZSwgZGlmZik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuc2NlbmVTdGF0ZVt0aGlzLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICB9XG5cbiAgICBzaG93TWVhbih3aGljaCkge1xuICAgICAgICBpZiAoXCJsZWZ0XCIgPT09IHdoaWNoKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMubGVmdE1lYW5CdG4pO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmxlZnRNZWFuVmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKFwicmlnaHRcIiA9PT0gd2hpY2gpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5yaWdodE1lYW5CdG4pO1xuICAgICAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnJpZ2h0TWVhblZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHNob3dNZWFuKCR7d2hpY2h9KSBpcyBuZWl0aGVyICdsZWZ0JyBub3IgJ3JpZ2h0J2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1NvcnRlZFRhYmxlKCkge1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuc2hvd1NvcnRlZFRhYmxlQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuaGlkZSh0aGlzLnVuc29ydGVkSW1nKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNvcnRlZEltZyk7XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgIH1cblxuICAgIGhhbmRsZVNob3dMZWZ0TWVhbihlKSB7XG4gICAgICAgIHRoaXMuc2hvd01lYW4oXCJsZWZ0XCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1wibGVmdE1lYW5TaG93blwiOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2hvd1JpZ2h0TWVhbihlKSB7XG4gICAgICAgIHRoaXMuc2hvd01lYW4oXCJyaWdodFwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZVN0YXRlKHtcInJpZ2h0TWVhblNob3duXCI6IHRydWV9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTaG93U29ydGVkVGFibGUoZSkge1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWRUYWJsZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1wic29ydGVkVGFibGVTaG93blwiOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaGlkZUFsbEZvcm1zKCkge1xuICAgICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZm9ybXMpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUoZi5mb3JtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZTo6aGFuZGxlUHJldkJ1dHRvbigpXCIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9ybS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlcih0aGlzLmN1cnJlbnRGb3JtLmdldERhdGEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEZJUlNUX1RSQU5TSVRJT04gPT09IHRoaXMuY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXQgZmlyc3QgdHJhbnNpdGlvbi4gZ28gdG8gcHJldiBzY2VuZVwiKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJwcmV2XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvbi0tO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUcmFuc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVOZXh0QnV0dG9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RSZXN1bHRzU2NlbmU6OmhhbmRsZU5leHRCdXR0b24oKVwiKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZvcm0uY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIodGhpcy5jdXJyZW50Rm9ybS5nZXREYXRhKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChMQVNUX1RSQU5TSVRJT04gPT09IHRoaXMuY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXQgbGFzdCB0cmFuc2l0aW9uLiBnbyB0byBuZXh0IHNjZW5lXCIpO1xuICAgICAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShcIm5leHRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uKys7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmxlZnRNZWFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcImNsaWNrXCIsIHRoaXMuaGFuZGxlU2hvd0xlZnRNZWFuLCB7b25jZTogdHJ1ZX1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yaWdodE1lYW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVTaG93UmlnaHRNZWFuLCB7IG9uY2U6IHRydWUgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJjbGlja1wiLCB0aGlzLmhhbmRsZVNob3dTb3J0ZWRUYWJsZSwgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVRMkFuZFEzVGV4dCgpIHtcbiAgICAgICAgbGV0IHBoUmVwbCA9IGA8c3BhbiBjbGFzcz1cInExLWFuc3dlclwiPiR7dGhpcy5xMUFuc3dlcn08L3NwYW4+YDtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMucTIudGV4dCA9IHRoaXMucXVlc3Rpb25zLnEyLnRleHQucmVwbGFjZShcbiAgICAgICAgICAgIFwiUExBQ0VIT0xERVJcIiwgcGhSZXBsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zLnEzLnRleHQgPSB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0LnJlcGxhY2UoXG4gICAgICAgICAgICBcIlBMQUNFSE9MREVSXCIsIHBoUmVwbFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnEyVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMi50ZXh0O1xuICAgICAgICB0aGlzLnEzVGV4dC5pbm5lckhUTUwgPSB0aGlzLnF1ZXN0aW9ucy5xMy50ZXh0O1xuICAgIH1cblxuICAgIHNhdmVRMVN0YXRlKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlUTFTdGF0ZSgpXCIpO1xuICAgICAgICB0aGlzLnExQW5zd2VyID0gZGF0YS5zZWxlY3RlZFZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1xuICAgICAgICAgICAgXCJxMVNlbGVjdGlvblwiOiBkYXRhLnNlbGVjdGVkRWxlSWQsXG4gICAgICAgICAgICBcInExQW5zd2VyXCI6IHRoaXMucTFBbnN3ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVEyQW5kUTNUZXh0KCk7XG4gICAgICAgIHRoaXMuc3VibWl0UXVlc3Rpb24oXCJxMVwiLCBkYXRhKTtcbiAgICB9XG5cbiAgICBzYXZlUTJTdGF0ZShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZVEyU3RhdGUoKVwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZVN0YXRlKHtcbiAgICAgICAgICAgIHEyQW5zd2VyOiBkYXRhLmFuc3dlclxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS5xdWVzdGlvblRleHQgPSBkYXRhLnF1ZXN0aW9uVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UoJzxzcGFuIGNsYXNzPVwicTEtYW5zd2VyXCI+JywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgnPC9zcGFuPicsICcnKTtcbiAgICAgICAgdGhpcy5zdWJtaXRRdWVzdGlvbihcInEyXCIsIGRhdGEpO1xuICAgIH1cblxuICAgIHNhdmVRM1N0YXRlKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZlUTNTdGF0ZSgpXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lU3RhdGUoe1xuICAgICAgICAgICAgcTNTZWxlY3Rpb246IGRhdGEuc2VsZWN0ZWRFbGVJZFxuICAgICAgICB9KTtcbiAgICAgICAgZGF0YS5xdWVzdGlvblRleHQgPSBkYXRhLnF1ZXN0aW9uVGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UoJzxzcGFuIGNsYXNzPVwicTEtYW5zd2VyXCI+JywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgnPC9zcGFuPicsICcnKTtcbiAgICAgICAgdGhpcy5zdWJtaXRRdWVzdGlvbihcInEzXCIsIGRhdGEpO1xuICAgIH1cblxuXG4gICAgc3VibWl0UXVlc3Rpb24ocU51bSwgZGF0YSkge1xuICAgICAgICBsZXQgbG9nRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTVUJNSVRfQU5TV0VSXCIsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25JZDogYCR7dGhpcy5hcHAuYWN0aXZpdHlLZXl9LiR7dGhpcy5pZH0uJHtxTnVtfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZ0RhdGEpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5ldmVudHMucHVzaChsb2dEYXRhKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMubGVmdE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5yaWdodE1lYW5WYWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5zb3J0ZWRUYWJsZVRleHQpO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMubGVmdE1lYW5CdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMucmlnaHRNZWFuQnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLnNob3dTb3J0ZWRUYWJsZUJ0bik7XG5cblxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB0aGlzLmFwcC5lbmFibGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnExRm9ybS5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5xMkZvcm0uc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMucTNGb3JtLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGhhbmRsZVRyYW5zaXRpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZS5oYW5kbGVUcmFuc2l0aW9uKClcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRyYW5zaXRpb24pO1xuICAgICAgICB0aGlzLmhpZGVBbGxGb3JtcygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRGb3JtID0gdGhpcy5mb3Jtc1t0aGlzLmN1cnJlbnRUcmFuc2l0aW9uXTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmN1cnJlbnRGb3JtLmZvcm0pO1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudEZvcm0uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcC5kaXNhYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TdGF0ZVNhdmVyID0gdGhpcy5zYXZlUTFTdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3RhdGVTYXZlciA9IHRoaXMuc2F2ZVEyU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5xMlRleHRBcmVhLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblN0YXRlU2F2ZXIgPSB0aGlzLnNhdmVRM1N0YXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBpbnZhbGlkIHRyYW5zaXRpb246ICR7dGhpcy5jdXJyZW50VHJhbnNpdGlvbn1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZW50ZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdFJlc3VsdHNTY2VuZS5wb3N0X2VudGVyKClcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRyYW5zaXRpb24oKTtcbiAgICAgICAgaWYgKG51bGwgIT09IHRoaXMuY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVTdGF0ZSh0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0ZWFyZG93bkFsbEZvcm1FdmVudEhhbmRsZXJzKCkge1xuICAgIC8vICAgICBmb3IgKGxldCBmIG9mIHRoaXMuZm9ybXMpIHtcbiAgICAvLyAgICAgICAgIGYudGVhcmRvd25FdmVudEhhbmRsZXJzKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn1cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIERpVGVzdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIHN1cGVyKGFwcCwgc2NlbmVJbmZvKTtcbiAgICAgICAgdGhpcy5jdXN0b21BY3Rpb25zID0ge1xuICAgICAgICAgICAgc2hvd0J0bnM6IHRoaXMuc2hvd0J0bnMsXG4gICAgICAgICAgICBoaWRlQnRuczogdGhpcy5oaWRlQnRucyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idG5OYW1lcyA9IHtcbiAgICAgICAgICAgIHByZXY6IHRoaXMuYXBwLnByZXZCdG4sXG4gICAgICAgICAgICBuZXh0OiB0aGlzLmFwcC5uZXh0QnRuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5jdXN0b21FbnRlckFjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gYWN0aW9uLm5hbWU7XG4gICAgICAgICAgICBsZXQgYXJncyA9IGFjdGlvbi5hcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcC5zaG93KHRoaXMuYXBwLnByZXZCdG4pO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAubmV4dEJ0bik7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9