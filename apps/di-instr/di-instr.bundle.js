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
        let data = {
            action: "ENTER_SCENE",
            from: this.currentScene.id,
            to: scene.id,
            timestamp: Date.now()
        };
        this.state.events.push(data);
        console.debug("Updating state.events");
    }


    gotoStartScene() {
        // bypasses switchToScene() and thus logSceneChange()
        // this.currentScene = null;
        let startScene = this.currentScene;
        if (!startScene) {
            startScene = this.lookupScene(this.startScene);
        }
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

    saveFormData() {
        let data = this.form.getData();
        let logData = Object.assign(
            {
                action_type: "SUBMIT_ANSWER",
                questionId: `${this.app.activityKey}.${this.id}`
            },
            data
        );
        console.log("Updating state.events");
        this.app.state.events.push(logData);
        console.log("Updating state.sceneState");
        console.log(this.app.state);
        this.app.state.sceneState[this.id] = data.selectedValue;
    }

    pre_exit() {
        super.pre_exit();
        if (this.formChanged()) {
            this.saveFormData();
        }
    }

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
/* harmony import */ var _isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/activity-config */ "../../common/activity-config/index.js");
/* harmony import */ var _di_instruction_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./di-instruction-app */ "./src/di-instruction-app.js");





let activityConfig = Object(_isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_1__["getActivityConfiguration"])();
let activityData = __webpack_require__(/*! ../data/diInstr.json */ "./data/diInstr.json");

const DEFAULT_INITIAL_APP_STATE = {
    events: [],
    // mapping of sceneid => sceneType-specific data
    sceneState: {},
    currentScene: "start"
};

let app = new _di_instruction_app__WEBPACK_IMPORTED_MODULE_2__["DiInstructionApp"](
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vYWN0aXZpdHktY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9pc3AtZGF0YWJhc2UvZmlyZXN0b3JlREIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vaXNwLWRhdGFiYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8vaG9tZS9ja290L3Byb2plY3RzL3dvcmsvaXNwdHV0b3Jwcm9qZWN0X3dlYnNpdGUvY29tbW9uL2lzcC1kYXRhYmFzZS9sb2NhbFN0b3JhZ2VEQi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvY2tvdC9wcm9qZWN0cy93b3JrL2lzcHR1dG9ycHJvamVjdF93ZWJzaXRlL2NvbW1vbi9zY2VuZS1hcHAtYmFzZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2UvcmFkaW8tYnV0dG9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc2NlbmUtYXBwLWJhc2Uvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguY3NzP2E3YTIiLCJ3ZWJwYWNrOi8vLy9ob21lL2Nrb3QvcHJvamVjdHMvd29yay9pc3B0dXRvcnByb2plY3Rfd2Vic2l0ZS9jb21tb24vc25hY2tiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpLWluc3RydWN0aW9uLWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGktaW5zdHJ1Y3Rpb24tc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpLW11bHQtY2hvaWNlLWZvcm0tc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpLXN0YXRzLXNjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NzdjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksS0FBcUMsRUFBRSxFQUsxQztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjREOztBQUVyRCwyQkFBMkIsd0VBQWtCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCOztBQUUrQztBQUNwQjs7QUFFeEQscUJBQXFCLGlHQUF3QjtBQUM3QyxtQkFBbUIsbUJBQU8sQ0FBQyxpREFBc0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLGNBQWMsb0VBQWdCO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLElBQXNDO0FBQzFDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLHVDIiwiZmlsZSI6ImRpLWluc3RyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2aXR5Q29uZmlndXJhdGlvbigpIHtcbiAgICBsZXQgYWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgIHVzZXJJRDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySURcIiksXG4gICAgICAgIGNsYXNzQ29kZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGFzc0NvZGVcIiksXG4gICAgICAgIGRhdGFiYXNlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFiYXNlXCIpLFxuICAgICAgICBob21lcGFnZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lcGFnZVwiKSxcbiAgICAgICAgYWN0aXZpdHlLZXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5XCIpLFxuICAgICAgICBmZWF0dXJlczogKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudEFjdGl2aXR5RmVhdHVyZXNcIikgfHwgXCJcIilcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjpcIilcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUNvbmZpZyk7XG4gICAgcmV0dXJuIGFjdGl2aXR5Q29uZmlnO1xufSIsIi8vIGFic3RyYWN0IGNsYXNzIC0gaW50ZXJmYWNlXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgc2V0Q3JlZGVudGlhbHMoY2xhc3NDb2RlLCB1c2VySUQpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvZGUgPSBjbGFzc0NvZGU7XG4gICAgICAgIHRoaXMudXNlcklEID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldFVzZXJEYXRhKCkge1xuXG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBkZWNvZGVKU09OID0gdHJ1ZSkge1xuXG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcblxuICAgIH1cblxuICAgIGdldFJRRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcblxuICAgIH1cblxuICAgIGdldEluaXRpYWxIeXBvRGF0YSgpIHtcblxuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG5cbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcblxuICAgIH1cblxuICAgIHNhdmVKU09OVmFsdWUodmFyTmFtZSwgb2JqZWN0KSB7XG5cbiAgICB9XG5cbiAgICBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0RmxvYXRWYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0SlNPTlZhbHVlKHZhck5hbWUpIHtcblxuICAgIH1cblxufTtcblxuXG4iLCJpbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lEN3pJay04VjIwUXFKTlNzMGNBVjB1TkwzcWplcUxNZE1cIixcbiAgICBhdXRoRG9tYWluOiBcImlzcHR1dG9yLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJpc3B0dXRvclwiXG59O1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIHRoaXMudXNlclJlZiA9IHRoaXMuc3RvcmUuY29sbGVjdGlvbih0aGlzLmNsYXNzQ29kZSkuZG9jKHRoaXMudXNlcklEKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgLy8gcmV0dXJucyBwcm9taXNlIHdpdGggJ2RvYycgaWYgaXQgZXhpc3RzLCBudWxsIG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVmLmdldCgpXG4gICAgICAgIC50aGVuKChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvYy5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXRDdXJySHlwb1Rhc2soKSB7XG5cbiAgICB9XG4gIFxuICAgIGdldEFjdGl2aXR5RGF0YShhY3Rpdml0eUtleSwgZGVjb2RlSlNPTj10cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJEYXRhKClcbiAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJEYXRhW2FjdGl2aXR5S2V5XTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRlY29kZUpTT04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldFJRRGF0YSgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwRGF0YShcInJxdGVkXCIpO1xuICAgIC8vIH1cblxuXG4gICAgLy8gZ2V0SW5pdGlhbEh5cG9EYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRBcHBEYXRhKFwiaW5pdGlhbEh5cG9cIilcbiAgICAvLyAgICAgLnRoZW4oKHN0ckRhdGEpKVxuICAgIC8vIH1cblxuICAgIC8vIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmdldEFwcERhdGEoXCJmaW5hbEh5cG9cIilcbiAgICAvLyB9XG5cbiAgICBzZXRWYWx1ZXMob2JqZWN0LCBvdmVyd3JpdGU9ZmFsc2UpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB7bWVyZ2U6IHRydWV9IG9wdGlvbiBmb3Igc2FmZXR5XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYuc2V0KG9iamVjdCwge21lcmdlOiAhb3ZlcndyaXRlfSk7ICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlcyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlZi51cGRhdGUob2JqZWN0KTtcbiAgICB9XG5cbiAgICBkZWxldGVWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJSZWYudXBkYXRlKHtcbiAgICAgICAgICAgIFt2YXJOYW1lXTogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuZGVsZXRlKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZUpTT05WYWx1ZSh2YXJOYW1lLCB2YWx1ZSkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy51c2VyUmVmLnNldCh7XG4gICAgLy8gICAgICAgICBbdmFyTmFtZV06IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRCb29sVmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfSAgIFxuICAgIFxuICAgIC8vIGdldEZsb2F0VmFsdWUodmFyTmFtZSkge1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0VGV4dFZhbHVlKHZhck5hbWUpIHtcblxuICAgIC8vIH1cblxuICAgIC8vIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG5cbiAgICAvLyB9XG59OyIsImltcG9ydCB7IExvY2FsU3RvcmFnZURCIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlREJcIjtcbmltcG9ydCB7IEZpcmVzdG9yZURCIH0gZnJvbSBcIi4vZmlyZXN0b3JlREJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERCQ29ubmVjdGlvbihkYlR5cGUpIHtcbiAgICBsZXQgZGI7XG4gICAgc3dpdGNoKGRiVHlwZSkge1xuICAgICAgICBjYXNlIFwiZmlyZXN0b3JlXCI6XG4gICAgICAgICAgICBkYiA9IG5ldyBGaXJlc3RvcmVEQigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkYiA9IG5ldyBMb2NhbFN0b3JhZ2VEQigpO1xuICAgIH1cbiAgICByZXR1cm4gZGI7IFxufVxuIiwiXG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5cbi8vIE5PVEU6IHRoaXMgQVBJIG11c3QgdXNlIHByb21pc2VzIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBhbnkgZGJcbi8vIHdlIG1heSBiZSB1c2luZywgd2hpY2ggbWF5IGJlIGVpdGhlciBzeW5jIG9yIGFzeW5jXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlREIgZXh0ZW5kcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCkge1xuICAgICAgICBzdXBlci5zZXRDcmVkZW50aWFscyhjbGFzc0NvZGUsIHVzZXJJRCk7XG4gICAgICAgIC8vIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwiY2xhc3NDb2RlXCIsIGNsYXNzQ29kZSksXG4gICAgICAgIC8vIHRoaXMuc2F2ZVZhbHVlKFwidXNlcklEXCIsIHVzZXJJRCksXG4gICAgICAgIC8vIF0pLnRoZW4oKFtyZXN1bHQxLCByZXN1bHQyXSkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBnZXRVc2VyRGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5jb3VudChcImdldFVzZXJEYXRhKCkgY2FsbGVkXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5nZXRUZXh0VmFsdWUoXCJjbGFzc0NvZGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldFRleHRWYWx1ZShcInVzZXJJRFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdHlEYXRhKFwicnF0ZWRcIiksXG4gICAgICAgICAgICB0aGlzLmdldEN1cnJIeXBvVGFzaygpLFxuICAgICAgICAgICAgdGhpcy5nZXRJbnRpYWxIeXBvRGF0YSgpLFxuICAgICAgICAgICAgdGhpcy5nZXRGaW5hbEh5cG9EYXRhKClcbiAgICAgICAgXSkudGhlbigoW2NjUmVzLCB1aWRSZXMsIHJxUmVzLCBjaHRSZXMsIGloUmVzLCBmaFJlc10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NDb2RlID0gY2NSZXM7XG4gICAgICAgICAgICBkYXRhLnVzZXJJRCA9IHVpZFJlcztcbiAgICAgICAgICAgIGRhdGEucnF0ZWQgPSBycVJlcztcbiAgICAgICAgICAgIGlmIChjaHRSZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmN1cnJIeXBvVGFza0lkeCA9IGNodFJlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGloUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5maXJzdFByZWRpY3Rpb24gPSBpaFJlcy5maXJzdFByZWRpY3Rpb247XG4gICAgICAgICAgICAgICAgZGF0YS5pbml0aWFsSHlwbyA9IGloUmVzLmluaXRpYWxIeXBvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZoUmVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gZmhSZXMuc2Vjb25kUHJlZGljdGlvbjtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbmFsSHlwbyA9IGZoUmVzLmZpbmFsSHlwbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpdml0eURhdGEoYWN0aXZpdHlLZXksIGRlY29kZUpTT04gPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShhY3Rpdml0eUtleSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmICFkZWNvZGVKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZpdHlEYXRhKGFjdGl2aXR5S2V5LCBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZUpTT05WYWx1ZShhY3Rpdml0eUtleSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBnZXRSUURhdGEoKSB7XG4gICAgICAgIGxldCByZXRWYWwgPSBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpdml0eURhdGEoXCJycXRlZFwiKVxuICAgICAgICAudGhlbigocnF0ZWQpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJxdGVkKTtcbiAgICAgICAgICAgIGlmIChycXRlZCkge1xuICAgICAgICAgICAgICAgIHJldFZhbCA9IHJxdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcnEgaXNuJ3Qgc2VsZWN0ZWQgaGFyZC1jb2RlIHRvIGNyeXN0YWwgZ3Jvd3RoXG4gICAgICAgICAgICAgICAgcmV0VmFsID0ge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVTdGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcmVhOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRvcGljOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhYmxlOiB7IGluZGV4OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJROiB7IGluZGV4OiAxIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXRWYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHJldFZhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJIeXBvVGFzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW50VmFsdWUoXCJjdXJySHlwb1Rhc2tJZHhcIilcbiAgICB9XG5cbiAgICBnZXRJbnRpYWxIeXBvRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dFZhbHVlKFwiZmlyc3RQcmVkaWN0aW9uXCIpXG4gICAgICAgICAgICAudGhlbigocHJlZDEpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2V0SW5pdGlhbEh5cG9EYXRhKCk6Zmlyc3RQcmVkaWN0aW9uICR7cHJlZDF9YCk7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gcHJlZDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEpTT05WYWx1ZShcImluaXRpYWxIeXBvXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlyc3RQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChpbml0SHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRJbml0aWFsSHlwb0RhdGEoKTppbml0SHlwbyAke2luaXRIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuaW5pdGlhbEh5cG8gPSBpbml0SHlwbztcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZpbmFsSHlwb0RhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge307XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRleHRWYWx1ZShcInNlY29uZFByZWRpY3Rpb25cIilcbiAgICAgICAgICAgIC50aGVuKChwcmVkMikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6c2Vjb25kUHJlZGljdGlvbiAke3ByZWQyfWApXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHByZWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2Vjb25kUHJlZGljdGlvbiA9IHByZWQyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRKU09OVmFsdWUoXCJmaW5hbEh5cG9cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zZWNvbmRQcmVkaWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGZpbmFsSHlwbykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXRGaW5hbEh5cG9EYXRhKCk6ZmluYWxIeXBvICR7ZmluYWxIeXBvfWApO1xuICAgICAgICAgICAgICAgIGRhdGEuZmluYWxIeXBvID0gZmluYWxIeXBvO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKG9iamVjdCwgb3ZlcndyaXRlPWZhbHNlKSB7XG4gICAgICAgIC8vIG92ZXJ3cml0ZSBwYXJhbSBpcyBpZ25vcmVkLCBhcyBpdCBpcyBzcGVjaWZpYyB0byBmaXJlc3RvcmVcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5pdGVtcyhvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlVmFsdWUodmFyTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YXJOYW1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlSlNPTlZhbHVlKHZhck5hbWUsIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUobG9jYWxTdG9yYWdlLnNldEl0ZW0odmFyTmFtZSwgdmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJvb2xWYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoXCJ0cnVlXCIgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW50VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWYWwgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFZhbHVlKHZhck5hbWUpIHtcbiAgICAgICAgbGV0IHJldFZhbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odmFyTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldFZhbCk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUZXh0VmFsdWUodmFyTmFtZSkge1xuICAgICAgICBsZXQgcmV0VmFsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh2YXJOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGdldEpTT05WYWx1ZSh2YXJOYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHZhck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8vIGxldCBkYiA9IG5ldyBEYXRhYmFzZShcIkJPR1VTX0NMQVNTXCIsIFwiQk9HVVNfU1RVREVOVFwiKTtcblxuIiwiaW1wb3J0IHsgZ2V0REJDb25uZWN0aW9uIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3QvaXNwLWRhdGFiYXNlXCI7XG5pbXBvcnQgeyBTbmFja0Jhcn0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc25hY2tiYXJcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lQmFzZWRBcHAge1xuICAgIGNvbnN0cnVjdG9yKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2NlbmVEYXRhID0gYXBwRGF0YS5zY2VuZXM7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlDb25maWcgPSBhY3Rpdml0eUNvbmZpZztcbiAgICAgICAgdGhpcy5kYiA9IGdldERCQ29ubmVjdGlvbihhY3Rpdml0eUNvbmZpZy5kYXRhYmFzZSk7XG4gICAgICAgIHRoaXMuZGIuc2V0Q3JlZGVudGlhbHMoYWN0aXZpdHlDb25maWcuY2xhc3NDb2RlLCBhY3Rpdml0eUNvbmZpZy51c2VySUQpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5S2V5ID0gYWN0aXZpdHlDb25maWcuYWN0aXZpdHlLZXk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFN0YXRlID0gZGVmYXVsdEluaXRpYWxTdGF0ZTtcblxuICAgICAgICB0aGlzLnNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKCk7XG4gICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4gPSBudWxsO1xuICAgICAgICBsZXQgaG9tZVBhZ2VCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb19ob21lX3BhZ2VcIik7XG4gICAgICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dF9idG5cIik7XG4gICAgICAgIHRoaXMucHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJldl9idG5cIik7XG4gICAgICAgIHRoaXMuc2NlbmVJZFJlZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NlbmVfaWRfcmVnaW9uXCIpO1xuICAgICAgICBpZiAoaG9tZVBhZ2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VCdG4gPSBob21lUGFnZUJ0bjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UgPSB0aGlzLmhhbmRsZUdvSG9tZVBhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUHJldiA9IHRoaXMuaGFuZGxlUHJldi5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5ob21lUGFnZUJ0bikge1xuICAgICAgICAgICAgdGhpcy5ob21lUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVHb0hvbWVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlTmV4dCk7XG4gICAgICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQcmV2KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc2NlbmVzID0ge307XG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZTY2VuZSA9IG51bGw7XG4gICAgICAgIC8vIGlzIHRoaXMgbmVlZGVkPz8/XG4gICAgICAgIHRoaXMuYm9ndXNTY2VuZUluZm8gPSB7XG4gICAgICAgICAgICBpZDogXCJOL0FcIixcbiAgICAgICAgICAgIHNjZW5lVHlwZTogXCJib2d1c1wiXG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hcHAgPSB0aGlzO1xuICAgIH1cblxuXG4gICAgLy8gc2V0U25hY2tiYXIoc25hY2tiYXIpIHtcbiAgICAvLyAgICAgdGhpcy5zbmFja2JhciA9IHNuYWNrYmFyO1xuICAgIC8vIH1cblxuICAgIHNob3dGZWVkYmFjayhmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnNuYWNrYmFyLnNob3coZmVlZGJhY2spO1xuICAgIH1cblxuICAgIGhhbmRsZUdvSG9tZVBhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmFjdGl2aXR5Q29uZmlnLmhvbWVwYWdlXG4gICAgfVxuXG4gICAgaGFuZGxlUHJldihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVQcmV2QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuc2F2ZUFwcFN0YXRlKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmV4dChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVOZXh0QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuc2F2ZUFwcFN0YXRlKCk7XG4gICAgfVxuXG4gICAgc2V0U3RhcnRTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJzZXRTdGFydFNjZW5lKClcIiwgc2NlbmVJZCk7XG4gICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IHNjZW5lSWQ7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRpbmdcIik7XG4gICAgICAgIHRoaXMuZ2V0QXBwU3RhdGUoKVxuICAgICAgICAgICAgLnRoZW4oKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gYWN0aXZpdHkgZGF0YSBpbiBkYi4gdXNpbmcgaW5pdGlhbCBkYXRhXCIpXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIFNjZW5lc1wiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLnNjZW5lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZUlkID0gc2VjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGNyZWF0aW5nIHNjZW5lIGZvciAke3NjZW5lSWR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZU9iaiA9IHRoaXMuY3JlYXRlU2NlbmUodGhpcy5zY2VuZURhdGFbc2NlbmVJZF0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzY2VuZU9iaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lSWRdID0gc2NlbmVPYmo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zY2VuZVN0YXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3RvcmluZyBBcHAgU3RhdGVcIilcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uLnNjZW5lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2VuZUlkID0gc2VjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjZW5lU3RhdGUgPSB0aGlzLnN0YXRlLnNjZW5lU3RhdGVbc2NlbmVJZF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVzW3NjZW5lSWRdLnJlc3RvcmVTdGF0ZShzY2VuZVN0YXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdG9yaW5nIEN1cnJlbnQgU2NlbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5sb29rdXBTY2VuZSh0aGlzLnN0YXRlLmN1cnJlbnRTY2VuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kZWJ1Zyh0aGlzLnNjZW5lRGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9TdGFydFNjZW5lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QXBwU3RhdGUoKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJMb2FkaW5nIEFwcCBTdGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIuZ2V0QWN0aXZpdHlEYXRhKHRoaXMuYWN0aXZpdHlLZXkpO1xuICAgIH1cblxuICAgIHNhdmVBcHBTdGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNhdmluZyBBcHAgU3RhdGVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnNldEFjdGl2aXR5RGF0YSh0aGlzLmFjdGl2aXR5S2V5LCB0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZShzY2VuZUluZm8pIHtcbiAgICAgICAgLy8geW91J2xsIHdhbnQgdG8gb3ZlcnJpZGUgdGhpcyB0byBkbyBhbnl0aGluZyB1c2VmdWxcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZyhcImNyZWF0ZVNjZW5lKClcIiwgc2NlbmVJbmZvLCBzY2VuZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgIH1cblxuICAgIHN3aXRjaFRvU2NlbmUoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5sb2dTY2VuZUNoYW5nZShzY2VuZSk7XG4gICAgICAgIHRoaXMuZ290b1NjZW5lKHNjZW5lKTtcbiAgICB9XG5cbiAgICBnb3RvU2NlbmUoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5wcmV2U2NlbmUgPSB0aGlzLmN1cnJlbnRTY2VuZTtcbiAgICAgICAgaWYgKHRoaXMucHJldlNjZW5lKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZTY2VuZS5wcmVfZXhpdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUuZXhpdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2U2NlbmUucG9zdF9leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucHJlX2VudGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmVudGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnBvc3RfZW50ZXIoKTtcbiAgICAgICAgLy8gZGVsZXRlIHRoaXMucHJldlNjZW5lO1xuICAgICAgICB0aGlzLmRpc3BsYXlTY2VuZUlkKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheVNjZW5lSWQoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lSWRSZWdpb24uaW5uZXJIVE1MID0gdGhpcy5jdXJyZW50U2NlbmUuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb29rdXBTY2VuZShzY2VuZUlkKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuc2NlbmVzW3NjZW5lSWRdO1xuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFUlJPUjogbm8gc3VjaCBzY2VuZSAke3NjZW5lSWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjZW5lO1xuICAgIH1cblxuICAgIGZvbGxvd0VkZ2UoZWRnZU5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1NjZW5lSWQgPSB0aGlzLmN1cnJlbnRTY2VuZS5lZGdlc1tlZGdlTmFtZV07XG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMubG9va3VwU2NlbmUobmV3U2NlbmVJZCk7XG4gICAgICAgIHRoaXMuc3dpdGNoVG9TY2VuZShuZXdTY2VuZSk7XG4gICAgfVxuXG4gICAgbG9nU2NlbmVDaGFuZ2Uoc2NlbmUpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IFwiRU5URVJfU0NFTkVcIixcbiAgICAgICAgICAgIGZyb206IHRoaXMuY3VycmVudFNjZW5lLmlkLFxuICAgICAgICAgICAgdG86IHNjZW5lLmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLnB1c2goZGF0YSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJVcGRhdGluZyBzdGF0ZS5ldmVudHNcIik7XG4gICAgfVxuXG5cbiAgICBnb3RvU3RhcnRTY2VuZSgpIHtcbiAgICAgICAgLy8gYnlwYXNzZXMgc3dpdGNoVG9TY2VuZSgpIGFuZCB0aHVzIGxvZ1NjZW5lQ2hhbmdlKClcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U2NlbmUgPSBudWxsO1xuICAgICAgICBsZXQgc3RhcnRTY2VuZSA9IHRoaXMuY3VycmVudFNjZW5lO1xuICAgICAgICBpZiAoIXN0YXJ0U2NlbmUpIHtcbiAgICAgICAgICAgIHN0YXJ0U2NlbmUgPSB0aGlzLmxvb2t1cFNjZW5lKHRoaXMuc3RhcnRTY2VuZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nb3RvU2NlbmUoc3RhcnRTY2VuZSk7XG4gICAgfVxuXG5cbiAgICBoaWRlKGVsKSB7XG4gICAgICAgIGlmIChlbCkgeyBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyB9XG4gICAgfVxuXG4gICAgc2hvdyhlbCkge1xuICAgICAgICBpZiAoZWwpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTsgfVxuICAgIH1cblxuICAgIG1ha2VJbnZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZVZpc2libGUoZWwpIHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZShlbCkge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzYWJsaW5nOlwiLCBlbCk7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBkaXNhYmxpbmcgbm9uLWV4aXN0aW5hbnQgZWxlbWVudDpcIiwgZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKGVsKSB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXNhYmxpbmc6XCIsIGVsKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGRpc2FibGluZyBub24tZXhpc3RpbmFudCBlbGVtZW50OlwiLCBlbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZUJhc2VkQXBwIH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL3NjZW5lXCI7XG5cbmV4cG9ydCB7XG4gICAgU2NlbmVCYXNlZEFwcCxcbiAgICBTY2VuZVxufTtcbiIsImV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgZm9ybUluZm8sIGVsZUlkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMuZm9ybUluZm8gPSBmb3JtSW5mbztcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSWQpO1xuICAgICAgICB0aGlzLnJhZGlvcyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgY29uc3QgdmFsaWRpdHkgPSB0aGlzLmZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZvcm0gaXMgdmFsaWQ6XCIsIHZhbGlkaXR5KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5O1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIC8vIHNldCBmb3JtIHRvIGRpcnR5IHN0YXRlIHNvIGl0IHdpbGwgZ2V0IHNhdmVkIGxhdGVyIG9uXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAgICAgcmIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVhcmRvd25FdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBmb3IgKGxldCByYiBvZiB0aGlzLnJhZGlvcykge1xuICAgICAgICAgICAgcmIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRDb3JyZWN0bmVzcygpIHtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICApXG4gICAgICAgIGxldCB2YWwgPSBzZWxlY3RlZEFuc3dlci52YWx1ZS50cmltKCk7XG4gICAgICAgIC8vIGxldCBhbnNUZXh0ID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IGNvcnJlY3RBbnN3ZXIgPSBzZmkuY29ycmVjdEFuc3dlcjtcbiAgICAgICAgbGV0IGlzQ29ycmVjdDtcblxuICAgICAgICBpZiAoXCJOL0FcIiA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgaXNDb3JyZWN0ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChjb3JyZWN0QW5zd2VyID09PSB2YWwpIHtcbiAgICAgICAgICAgIGlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0NvcnJlY3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNDb3JyZWN0O1xuICAgIH1cblxuICAgIGdldEZlZWRiYWNrKCkge1xuICAgICAgICBsZXQgaXNDb3JyZWN0ID0gdGhpcy5nZXRDb3JyZWN0bmVzcygpO1xuICAgICAgICBsZXQgc2ZpID0gdGhpcy5mb3JtSW5mbztcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNDb3JyZWN0LCBzZmkpO1xuICAgICAgICBsZXQgZmJUZXh0LCBmYkNsYXNzTmFtZSwgZmJNc2c7XG4gICAgICAgIHN3aXRjaChpc0NvcnJlY3QpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkucG9zRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcInBvcy1mZWVkYmFja1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubmVnRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm5lZy1mZWVkYmFja1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmYlRleHQgPSBzZmkubnRsRmI7XG4gICAgICAgICAgICAgICAgZmJDbGFzc05hbWUgPSBcIm50bC1mZWVkYmFja1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YoZmJUZXh0KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihzZmkubnRsRmIpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgZmJUZXh0ID0gc2ZpLm50bEZiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGZiVGV4dCkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGZiTXNnID0gYDxzcGFuIGNsYXNzPVwiJHtmYkNsYXNzTmFtZX1cIj4ke2ZiVGV4dH08L3NwYW4+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmJNc2c7XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHNmaSA9IHRoaXMuZm9ybUluZm87XG4gICAgICAgIGxldCBpc0NvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RuZXNzKCk7XG4gICAgICAgIGxldCBzZWxlY3RlZEFuc3dlciA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJ1xuICAgICAgICApO1xuICAgICAgICBsZXQgdmFsID0gc2VsZWN0ZWRBbnN3ZXIudmFsdWUudHJpbSgpO1xuICAgICAgICBsZXQgbGJsID0gc2VsZWN0ZWRBbnN3ZXIubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcXVlc3Rpb25UeXBlOiBzZmkudHlwZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogc2ZpLnRleHQsXG4gICAgICAgICAgICBzZWxlY3RlZEVsZUlkOiBzZWxlY3RlZEFuc3dlci5pZCxcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IHZhbCxcbiAgICAgICAgICAgIHNlbGVjdGVkTGFiZWw6IGxibCxcbiAgICAgICAgICAgIGlzQ29ycmVjdDogaXNDb3JyZWN0LFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGZvcm0gdG8gbm9uLWRpcnR5IHN0YXRlLCBzbyB3ZSBkb24ndCByZXN1Ym1pdCB1bmxlc3MgdGhleVxuICAgICAgICAvLyBjaGFuZ2UgYWdhaW5cbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGFwcCwgc2NlbmVJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdEluaXRpYWxpemluZyBTY2VuZTogJHtzY2VuZUluZm8uaWR9YCk7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICAvLyBjb3B5IGFsbCBzY2VuZUluZm8gdG8gJ3RoaXMnXG4gICAgICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzY2VuZUluZm8pKSB7XG4gICAgICAgICAgICB0aGlzW2tdID0gdjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIC8vIGJpbmQgZXZlbnQgaGFuZGxlclxuICAgICAgICB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24gPSB0aGlzLmhhbmRsZUZvbGxvd0VkZ2VCdXR0b24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93QnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlQnRucyhidG5OYW1lcykge1xuICAgICAgICBmb3IgKGxldCBidG5OYW1lIG9mIGJ0bk5hbWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5OYW1lcy5oYXNPd25Qcm9wZXJ0eShidG5OYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5idG5OYW1lc1tidG5OYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGhhbmRsZUZvbGxvd0VkZ2VCdXR0b24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBlZGdlTmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQuZWRnZTtcbiAgICAgICAgdGhpcy5hcHAuZm9sbG93RWRnZShlZGdlTmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0Rm9sbG93RWRnZUVsZW1lbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9sbG93LWVkZ2VcIik7XG4gICAgfVxuXG4gICAgc2V0dXBGb2xsb3dFZGdlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5nZXRGb2xsb3dFZGdlRWxlbWVudHMoKSkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsIHRoaXMuaGFuZGxlRm9sbG93RWRnZUJ1dHRvbiwgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXN0b3JlU3RhdGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBcXHRSZXN0b3JpbmcgU2NlbmUgU3RhdGUgZm9yOiAke3RoaXMuaWR9IGApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIF9pc0JvZ3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCA9PT0gXCJOL0FcIiB8fCB0aGlzLnNjZW5lVHlwZSA9PT0gXCJib2d1c1wiO1xuICAgIH1cblxuICAgIGhhbmRsZVByZXZCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJwcmV2XCIpO1xuICAgIH1cblxuICAgIGhhbmRsZU5leHRCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYXBwLmZvbGxvd0VkZ2UoXCJuZXh0XCIpO1xuICAgIH1cblxuICAgIGhhc0Zvcm0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3JtQ2hhbmdlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByZV9lbnRlcigpIHtcblxuICAgIH1cblxuICAgIGVudGVyKCkge1xuICAgICAgICBpZiAodGhpcy5faXNCb2d1cygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgRW50ZXJpbmcgU2NlbmU6ICR7dGhpcy5pZH1gKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlxcdFVwZGF0aW5nIHN0YXRlLmN1cnJlbnRTY2VuZVwiKTtcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUuY3VycmVudFNjZW5lID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5kZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRW50ZXJBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RfZW50ZXIoKSB7XG5cbiAgICB9XG5cbiAgICBwcmVfZXhpdCgpIHtcblxuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0JvZ3VzKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKGBFeGl0aW5nIFNjZW5lOiAke3RoaXMuaWR9YCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKTtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRXhpdEFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1DdXN0b21FeGl0U2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3N0X2V4aXQoKSB7XG5cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgdGhpcy5zZXR1cEZvbGxvd0VkZ2VFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgZGVmYXVsdEV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRW50ZXJTY2VuZUFjdGlvbnNcIik7XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUV4aXRTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVuaW1wbGVtZW50ZWQgTWV0aG9kOiBwZXJmb3JtQ3VzdG9tRXhpdFNjZW5lQWN0aW9uc1wiKTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBTbmFja0JhciB7XG4gICAgY29uc3RydWN0b3IoZWxlSUQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZUlEIHx8IFwic25hY2tiYXJcIik7XG4gICAgfVxuXG4gICAgc2hvdyh0ZXh0KSB7XG4gICAgICAgIGlmICh0eXBlb2YodGV4dCkgIT09IFwidW5kZWZpbmVkXCIgJiYgbnVsbCAhPT0gdGV4dCkge1xuICAgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBcInNob3dcIiBjbGFzcyB0byBESVZcbiAgICAgICAgICAgIC8vIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJzaG93XCI7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgLy8gQWZ0ZXIgMyBzZWNvbmRzLCByZW1vdmUgdGhlIHNob3cgY2xhc3MgZnJvbSBESVZcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNuYWNrYmFyLmNsYXNzTmFtZSA9IHNuYWNrYmFyLmNsYXNzTmFtZS5yZXBsYWNlKFwic2hvd1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY2VuZUJhc2VkQXBwIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2VcIjtcbmltcG9ydCB7IERpSW5zdHJ1Y3Rpb25TY2VuZSB9IGZyb20gXCIuL2RpLWluc3RydWN0aW9uLXNjZW5lXCI7XG5pbXBvcnQgeyBEaVN0YXRzU2NlbmUgfSBmcm9tIFwiLi9kaS1zdGF0cy1zY2VuZVwiO1xuaW1wb3J0IHsgRGlNdWx0aXBsZUNob2ljZUZvcm1TY2VuZSB9IGZyb20gXCIuL2RpLW11bHQtY2hvaWNlLWZvcm0tc2NlbmVcIjtcblxuXG5leHBvcnQgY2xhc3MgRGlJbnN0cnVjdGlvbkFwcCBleHRlbmRzIFNjZW5lQmFzZWRBcHAge1xuICAgIGNvbnN0cnVjdG9yKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIHN1cGVyKGFwcERhdGEsIGFjdGl2aXR5Q29uZmlnLCBkZWZhdWx0SW5pdGlhbFN0YXRlKTtcbiAgICAgICAgLy8gYmluZCBldmVudCBoYW5kbGVyc1xuICAgICAgICB0aGlzLmhhbmRsZUJhY2tUb1F1ZXN0aW9uID0gdGhpcy5oYW5kbGVCYWNrVG9RdWVzdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlYWR5VG9BbnN3ZXIgPSB0aGlzLmhhbmRsZVJlYWR5VG9BbnN3ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5iYWNrVG9RdWVzdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja190b19xdWVzdGlvbl9idG5cIik7XG4gICAgICAgIHRoaXMucmVhZHlUb0Fuc3dlckJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWR5X3RvX2Fuc3dlcl9idG5cIik7XG4gICAgICAgIHRoaXMucmVhZHlUb0Fuc3dlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVSZWFkeVRvQW5zd2VyKTtcbiAgICAgICAgdGhpcy5iYWNrVG9RdWVzdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVCYWNrVG9RdWVzdGlvbik7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVhZHlUb0Fuc3dlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvbGxvd0VkZ2UoXCJyZWFkeVRvQW5zd2VyXCIpO1xuICAgIH1cblxuICAgIGhhbmRsZUJhY2tUb1F1ZXN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9sbG93RWRnZShcImJhY2tUb1F1ZXN0aW9uXCIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjZW5lKHNjZW5lSW5mbykge1xuICAgICAgICBsZXQgbmV3U2NlbmU7XG4gICAgICAgIGlmIChcInN0YXRzXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpU3RhdHNTY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKFwibXVsdGlwbGVDaG9pY2VGb3JtXCIgPT09IHNjZW5lSW5mby5zY2VuZVR5cGUpIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpTXVsdGlwbGVDaG9pY2VGb3JtU2NlbmUodGhpcywgc2NlbmVJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NjZW5lID0gbmV3IERpSW5zdHJ1Y3Rpb25TY2VuZSh0aGlzLCBzY2VuZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIkBpc3B0dXRvcnByb2plY3Qvc2NlbmUtYXBwLWJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIERpSW5zdHJ1Y3Rpb25TY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihhcHAsIHNjZW5lSW5mbykge1xuICAgICAgICBzdXBlcihhcHAsIHNjZW5lSW5mbyk7XG4gICAgICAgIHRoaXMuY3VzdG9tQWN0aW9ucyA9IHtcbiAgICAgICAgICAgIHNob3dCdG5zOiB0aGlzLnNob3dCdG5zLFxuICAgICAgICAgICAgaGlkZUJ0bnM6IHRoaXMuaGlkZUJ0bnMsXG4gICAgICAgICAgICBoaWxpdGVUYWJsZUNlbGxzOiB0aGlzLmhpbGlnaHRUYWJsZUNlbGxzXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnRuTmFtZXMgPSB7XG4gICAgICAgICAgICBwcmV2OiB0aGlzLmFwcC5wcmV2QnRuLFxuICAgICAgICAgICAgbmV4dDogdGhpcy5hcHAubmV4dEJ0bixcbiAgICAgICAgICAgIGJhY2tUb1F1ZXN0aW9uOiB0aGlzLmFwcC5iYWNrVG9RdWVzdGlvbkJ0bixcbiAgICAgICAgICAgIHJlYWR5VG9BbnN3ZXI6IHRoaXMuYXBwLnJlYWR5VG9BbnN3ZXJCdG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoaWxpdGVUYWJsZUNlbGxzKGFyZ3MpIHtcbiAgICAgICAgbGV0IHRhYmxlSWQgPSBgJHt0aGlzLmlkfV8ke2FyZ3MudGFibGV9YDtcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFibGVJZCk7XG4gICAgICAgIGxldCBjb2xvciA9IGFyZ3MuY29sb3IgfHwgXCJibHVlXCI7XG4gICAgICAgIGZvciAobGV0IHNlbGVjdG9yIG9mIGFyZ3MuY2VsbFNlbGVjdG9ycykge1xuICAgICAgICAgICAgbGV0IHNlbCA9IGB0ZCR7c2VsZWN0b3J9YDtcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGFibGUucXVlcnlTZWxlY3RvcihzZWwpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NvbG9yfS1iZ2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGVyZm9ybUN1c3RvbUVudGVyU2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5jdXN0b21FbnRlckFjdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gYWN0aW9uLm5hbWU7XG4gICAgICAgICAgICBsZXQgYXJncyA9IGFjdGlvbi5hcmdzO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXNbbmFtZV0oYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICAvLyB0aGVzZSBidXR0b24gc3RhdGVzIG1heSBnZXQgb3ZlcnJpZGVuIGJ5IHNjZW5lLXNwZWNpZmljIGN1c3RvbSBhY3Rpb25zXG4gICAgICAgIHRoaXMuYXBwLnNob3codGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmVuYWJsZSh0aGlzLmFwcC5wcmV2QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuc2hvdyh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgdGhpcy5hcHAuZW5hYmxlKHRoaXMuYXBwLm5leHRCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLnJlYWR5VG9BbnN3ZXJCdG4pO1xuICAgICAgICB0aGlzLmFwcC5oaWRlKHRoaXMuYXBwLmJhY2tUb1F1ZXN0aW9uQnRuKTtcbiAgICB9XG5cbn07XG4iLCJpbXBvcnQgeyBEaUluc3RydWN0aW9uU2NlbmUgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1zY2VuZVwiO1xuXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkZvcm0gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9zY2VuZS1hcHAtYmFzZS9yYWRpby1idXR0b24tZm9ybVwiO1xuXG5leHBvcnQgY2xhc3MgRGlNdWx0aXBsZUNob2ljZUZvcm1TY2VuZSBleHRlbmRzIERpSW5zdHJ1Y3Rpb25TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmFkaW9CdXR0b25Gb3JtKFxuICAgICAgICAgICAgYXBwLCBzY2VuZUluZm8ucXVlc3Rpb24sIGAke3RoaXMuaWR9X3JhZGlvX2Zvcm1gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzdG9yZVN0YXRlKHZhbHVlKSB7XG4gICAgICAgIGlmIChzdXBlci5yZXN0b3JlU3RhdGUodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgZWxlSUQgPSBgJHt0aGlzLmlkfV9vcHRpb25fJHt2YWx1ZX1gO1xuICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlSUQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZihlbCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBcXHRcXHRVbmFibGUgdG8gU2VsZWN0IFJhZGlvIEJ1dHRvbiAke2VsZUlEfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFxcdFxcdFNlbGVjdGVkIFJhZGlvIEJ1dHRvbjogJHtlbGVJRH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFzRm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybUNoYW5nZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0uY2hhbmdlZDtcbiAgICB9XG5cbiAgICBzYXZlRm9ybURhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5mb3JtLmdldERhdGEoKTtcbiAgICAgICAgbGV0IGxvZ0RhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFjdGlvbl90eXBlOiBcIlNVQk1JVF9BTlNXRVJcIixcbiAgICAgICAgICAgICAgICBxdWVzdGlvbklkOiBgJHt0aGlzLmFwcC5hY3Rpdml0eUtleX0uJHt0aGlzLmlkfWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgc3RhdGUuZXZlbnRzXCIpO1xuICAgICAgICB0aGlzLmFwcC5zdGF0ZS5ldmVudHMucHVzaChsb2dEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBzdGF0ZS5zY2VuZVN0YXRlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuYXBwLnN0YXRlLnNjZW5lU3RhdGVbdGhpcy5pZF0gPSBkYXRhLnNlbGVjdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgcHJlX2V4aXQoKSB7XG4gICAgICAgIHN1cGVyLnByZV9leGl0KCk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1DaGFuZ2VkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZvcm1EYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICB0ZWFyZG93bkV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZm9ybS50ZWFyZG93bkV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0RW50ZXJTY2VuZUFjdGlvbnMoKSB7XG4gICAgICAgIHN1cGVyLmRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBsZXQgc3R1ZGVudCBza2lwIG92ZXIgcXVlc3Rpb25cbiAgICAgICAgICAgIGlmICghIHRoaXMuZm9ybS5pc1ZhbGlkKCkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzYWJsZSh0aGlzLmFwcC5uZXh0QnRuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIGRlZmF1bHRFeGl0U2NlbmVBY3Rpb25zKCkge1xuICAgICAgICBzdXBlci5kZWZhdWx0RXhpdFNjZW5lQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnRlYXJkb3duRXZlbnRIYW5kbGVycygpO1xuICAgIH1cbn1cbiIsIlxuaW1wb3J0IHsgRGlJbnN0cnVjdGlvblNjZW5lIH0gZnJvbSBcIi4vZGktaW5zdHJ1Y3Rpb24tc2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIERpU3RhdHNTY2VuZSBleHRlbmRzIERpSW5zdHJ1Y3Rpb25TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoYXBwLCBzY2VuZUluZm8pIHtcbiAgICAgICAgc3VwZXIoYXBwLCBzY2VuZUluZm8pO1xuICAgIH1cblxuICAgIGRlZmF1bHRFbnRlclNjZW5lQWN0aW9ucygpIHtcbiAgICAgICAgc3VwZXIuZGVmYXVsdEVudGVyU2NlbmVBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5hcHAucHJldkJ0bik7XG4gICAgICAgIHRoaXMuYXBwLmhpZGUodGhpcy5hcHAubmV4dEJ0bik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgeyBnZXRBY3Rpdml0eUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiQGlzcHR1dG9ycHJvamVjdC9hY3Rpdml0eS1jb25maWdcIjtcbmltcG9ydCB7IERpSW5zdHJ1Y3Rpb25BcHAgfSBmcm9tIFwiLi9kaS1pbnN0cnVjdGlvbi1hcHBcIjtcblxubGV0IGFjdGl2aXR5Q29uZmlnID0gZ2V0QWN0aXZpdHlDb25maWd1cmF0aW9uKCk7XG5sZXQgYWN0aXZpdHlEYXRhID0gcmVxdWlyZShcIi4uL2RhdGEvZGlJbnN0ci5qc29uXCIpO1xuXG5jb25zdCBERUZBVUxUX0lOSVRJQUxfQVBQX1NUQVRFID0ge1xuICAgIGV2ZW50czogW10sXG4gICAgLy8gbWFwcGluZyBvZiBzY2VuZWlkID0+IHNjZW5lVHlwZS1zcGVjaWZpYyBkYXRhXG4gICAgc2NlbmVTdGF0ZToge30sXG4gICAgY3VycmVudFNjZW5lOiBcInN0YXJ0XCJcbn07XG5cbmxldCBhcHAgPSBuZXcgRGlJbnN0cnVjdGlvbkFwcChcbiAgICBhY3Rpdml0eURhdGEsIGFjdGl2aXR5Q29uZmlnLCBERUZBVUxUX0lOSVRJQUxfQVBQX1NUQVRFXG4pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBhcHAuc2V0U3RhcnRTY2VuZShcInNjZW5lMjhcIik7XG59XG5hcHAuc3RhcnQoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=