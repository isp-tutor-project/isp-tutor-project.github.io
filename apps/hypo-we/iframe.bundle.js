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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/iframe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/isp-captivate/index.js":
/*!**************************************************************************************!*\
  !*** /home/ckot/projects/work/isptutorproject_website/common/isp-captivate/index.js ***!
  \**************************************************************************************/
/*! exports provided: EVT_ON_VAR_CHANGE, EVT_ON_SLIDE_ENTER, EVT_ON_SLIDE_EXIT, EVT_ON_QUES_SUBMIT, ISPCaptivateActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_ON_VAR_CHANGE", function() { return EVT_ON_VAR_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_ON_SLIDE_ENTER", function() { return EVT_ON_SLIDE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_ON_SLIDE_EXIT", function() { return EVT_ON_SLIDE_EXIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVT_ON_QUES_SUBMIT", function() { return EVT_ON_QUES_SUBMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISPCaptivateActivity", function() { return ISPCaptivateActivity; });
const EVT_ON_VAR_CHANGE  = "CPAPI_VARIABLEVALUECHANGED";
const EVT_ON_SLIDE_ENTER = "CPAPI_SLIDEENTER";
const EVT_ON_SLIDE_EXIT  = "CPAPI_SLIDEEXIT";
const EVT_ON_QUES_SUBMIT = "CPAPI_QUESTIONSUBMIT";


const INITIAL_STATE = {
    transitions: [],
    answers: [],
    variableChanges: []
};

class ISPCaptivateActivity {
    constructor(cpAPI, db, variablesToTrack) {
        // bind event handlers
        this.onSlideEnter = this.onSlideEnter.bind(this);
        // this.onSlideTransition = this.onSlideTransition.bind(this);
        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.onVarChange = this.onVarChange.bind(this);
        this.cpAPI = cpAPI;
        this.cpEventEmitter = this.cpAPI.getEventEmitter();
        this.variablesToTrack = variablesToTrack;
        this.userID = localStorage.getItem("userID");
        this.classCode = localStorage.getItem("classCode");
        this.currentActivity = localStorage.getItem("currentActivity");
        this.features = (localStorage.getItem("currentActivityFeatures") || "")
                        .split(":").filter((item) => item !== "");
        this.db = db;
    }


    init() {
        this.db.setCredentials(this.classCode, this.userID);
        this.db.getActivityData(this.currentActivity)
        .then((data) => {
            if (typeof(data) === "undefined" || null === data) {
                // if no state exists in db, copy INITIAL_STATE
                this.state = { ...INITIAL_STATE };
            } else {
                this.state = data;
            }
            this.showState();
            return this.state;
        })
        .then(() => {
            // do some stuff beforehand (if necessary) prior to
            // setting up event handlers
            this.processFeatures();
            this.restoreCaptivateState();
            this.setupEventHandlers();
        });

    }

    processFeatures() {

    }

    restoreCaptivateState() {

    }

    showState() {
        console.log(this.state);
    }

    pushTransition(transition) {
        // console.log(transition);
        this.state.transitions.push(transition);
        this.showState();
    }

    pushAnswer(answer) {
        // console.log(answer);
        this.state.answers.push(answer);
        this.showState();
    }

    pushVarChange(varChange) {
        if (typeof (this.state.variableChanges) === "undefined") {
            this.state.variableChanges = [];
        }
        this.state.variableChanges.push(varChange);
        this.showState();
    }


    setupEventHandlers() {
        this.cpEventEmitter.addEventListener(EVT_ON_SLIDE_ENTER,
                                             this.onSlideEnter);
        // this.cpEventEmitter.addEventListener(EVT_ON_SLIDE_EXIT,
        //                                      this.onSlideTransition);
        this.cpEventEmitter.addEventListener(EVT_ON_QUES_SUBMIT,
                                             this.onQuestionSubmit);
        for (let varName of this.variablesToTrack) {
            this.cpEventEmitter.addEventListener(
                EVT_ON_VAR_CHANGE, this.onVarChange, varName
            );
        }
        this.setupCustomEventHandlers();
    }

    setupCustomEventHandlers() {
        // hook for initializing any custom event handlers
    }

    onSlideEnter(evt) {
        this.pushTransition({
            slide_number: evt.cpData.slideNumber,
            slide_label: evt.cpData.lb,
            timestamp: Date.now()
        });
    }

    // onSlideTransition(evt) {
    //     // console.log(evt);
    //     const transitionType = ("CPSlideEnter" === evt.cpName) ? "enter" : "exit";
    //     let label = evt.cpData.lb;
    //     const slideNumber = `${evt.cpData.slideNumber}`;
    //     if ("" === label) {
    //         label = slideNumber;
    //     }
    //     const now = Date.now();
    //     console.log(`${now}:: ${transitionType}ing slide: ${label}`);
    // }

    onQuestionSubmit(evt) {
        let data = Object.assign(evt.cpData, {timestamp: Date.now()});
        this.pushAnswer(data);
    }

    onVarChange(evt) {
        const now = Date.now();
        const varName = evt.cpData.varName;
        const newVal = evt.cpData.newVal;
        const oldVal = evt.cpData.oldVal;
        this.state[varName] = newVal;
        this.pushVarChange({
            variable: varName,
            newValue: newVal,
            oldValue: oldVal,
            timestamp: now
        });
    }

    gotoSlide(slideNumber) {
        console.log("manually navigating to slide:", slideNumber);
        this.cpAPI.gotoSlide(slideNumber);
    }

    setCaptivateVariable(varName, value) {
        this.cpAPI.setVariableValue(varName, value);
    }

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
            if (data && decodeJSON) {
                return JSON.parse(data);
            } else {
                return data;
            }
        });
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

/***/ "./src/iframe.js":
/*!***********************!*\
  !*** ./src/iframe.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isptutorproject_isp_captivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/isp-captivate */ "../../common/isp-captivate/index.js");
/* harmony import */ var _isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/isp-database */ "../../common/isp-database/index.js");





const FTR_ONE_DIR = "FTR_ONE_DIRECTIONAL";
const FTR_BI_DIR  = "FTR_BI_DIRECTIONAL";
const COND_ONE_DIR = "one-directional";
const COND_BI_DIR  = "bi-directional";

const TRACKED_VARS = [
    "condition", "prediction", "gender", "VINname", "twinName"
];

function undefinedOrSame(currState, value) {
    return ("undefined" === typeof(currState) || currState === value)
}

class HypoWECaptivateActivity extends _isptutorproject_isp_captivate__WEBPACK_IMPORTED_MODULE_0__["ISPCaptivateActivity"] {
    constructor(cpAPI, db, varsToTrack) {
        super(cpAPI, db, varsToTrack);
    }

    processFeatures() {
        let feats = [...this.features];
        let hasOneDir = feats.includes(FTR_ONE_DIR);
        let hasBiDir = feats.includes(FTR_BI_DIR);
        let currentDBVal = this.state.condition;
        if (hasOneDir && hasBiDir) {
            console.error("has features for both conditions");
        } else if (!hasOneDir && !hasBiDir) {
            console.error("doesn't have feature for either condition");
        } else if (hasOneDir) {
            if (!undefinedOrSame(this.state.condition, COND_ONE_DIR)) {
                console.error(`state.condition(${this.state.condition}) !== to feature value(${COND_ONE_DIR})`);
            } else {
                this.state.condition = COND_ONE_DIR;
                feats = feats.filter((item) => item !== FTR_ONE_DIR);
                this.setCaptivateVariable("condition", COND_ONE_DIR);
            }
        } else if (hasBiDir) {
            if (!undefinedOrSame(this.state.condition, COND_BI_DIR)) {
                console.error(`state.condition(${this.state.condition}) !== to feature value(${COND_BI_DIR})`);
            } else {
                this.state.condition = COND_BI_DIR;
                feats = feats.filter((item) => item !== FTR_BI_DIR);
                this.setCaptivateVariable("condition", COND_BI_DIR);
            }
        } else {
            console.error("WTF! how did I get here?")
        }
        console.log("remaining feats:", feats);
        console.log("# remaining feats", feats.length);
    }

}

function initApp(event) {
    console.log("initApp()");
    // event.Data is the same as window.cpAPIInterface
    const cpAPI = event.Data;
    const db = Object(_isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_1__["getDBConnection"])("localstorage");
    const app = new HypoWECaptivateActivity(cpAPI, db, TRACKED_VARS);
    app.init();
}


// window.addEventListener("load", initApp);
window.addEventListener("moduleReadyEvent", initApp);


/***/ })

/******/ });
//# sourceMappingURL=iframe.bundle.js.map