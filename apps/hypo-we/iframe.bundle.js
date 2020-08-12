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
    let currentActivity = JSON.parse(localStorage.getItem("currentActivity"));
    let activityConfig = {
        userID: localStorage.getItem("userID"),
        database: localStorage.getItem("database"),
        homepage: localStorage.getItem("homepage"),
        activityID: currentActivity.id,
        activityKey: currentActivity.key,
        activityFeatures: currentActivity.features.split(":").filter((item) => item !== "")
    };
    console.log(activityConfig);
    return activityConfig;
}

/***/ }),

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
/* harmony import */ var _isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/isp-database */ "../../common/isp-database/index.js");


const EVT_ON_VAR_CHANGE  = "CPAPI_VARIABLEVALUECHANGED";
const EVT_ON_SLIDE_ENTER = "CPAPI_SLIDEENTER";
const EVT_ON_SLIDE_EXIT  = "CPAPI_SLIDEEXIT";
const EVT_ON_QUES_SUBMIT = "CPAPI_QUESTIONSUBMIT";


const INITIAL_STATE = {
    transitions: [],
    answers: [],
    variableChanges: []
};

// allows us to log to the parent windows console
// NOTE: the parent window needs to have some companion
// code to make this work
const _log = console.log;
// Override the console
console.log = function (...rest) {
    // window.parent is the parent frame that made this window
    window.parent.postMessage(
        {
            source: 'iframe',
            message: rest,
        },
        '*'
    );
    // Finally applying the console statements to saved instance earlier
    _log.apply(console, arguments);
};


class ISPCaptivateActivity {
    constructor(activityConfig, cpAPI, variablesToTrack) {
        console.log(activityConfig);
        this.activityConfig = activityConfig;
        this.db = Object(_isptutorproject_isp_database__WEBPACK_IMPORTED_MODULE_0__["getDBConnection"])(activityConfig.database);
        this.userID = activityConfig.userID;
        this.activityID = activityConfig.activityID;
        this.activityKey = activityConfig.activityKey;
        this.features = activityConfig.activityFeatures;
        // bind event handlers
        this.onSlideEnter = this.onSlideEnter.bind(this);
        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.onVarChange = this.onVarChange.bind(this);
        // this.onSlideTransition = this.onSlideTransition.bind(this);
        this.cpAPI = cpAPI;
        this.cpEventEmitter = this.cpAPI.getEventEmitter();
        this.variablesToTrack = variablesToTrack;
        }


    init() {
        this.db.setCredentials(this.userID);
        this.getAppData()
        .then((state) => {
            console.log("getAppData() returned:", state);
            if (typeof(state) === "undefined" || null === state) {
                // if no state exists in db, copy INITIAL_STATE
                this.state = { ...INITIAL_STATE };
            } else {
                console.log("Restoring App State from database");
                this.state = state;
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

        for (let varName of this.variablesToTrack) {
            if (varName in this.state) {
                console.log(`Restoring Captivate Variable "${varName}" to ${this.state[varName]}`);
                this.setCaptivateVariable(varName, this.state[varName]);
            }
        }
        if ("currentSlide" in this.state) {
            console.log(`restoring to slide number ${this.state.currentSlide}`);
            this.gotoSlide(this.state.currentSlide);
        } else {
            console.log("skipping slide 1");
            this.gotoSlide(2);
        }
    }

    showState() {
        console.log(this.state);
    }

    pushTransition(transition) {
        // console.log(transition);
        this.state.transitions.push(transition);
        this.state.currentSlide = transition.slide_number;
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
        this.saveAppData();
    }

    getAppData() {
        console.log("looking for saved app data in database");
        return this.db.getActivityData(this.activityKey)
        .then((data) => {
            console.log(data);
            return data;
        });
    }

    saveAppData() {
        console.log("saving app data");
        this.db.setActivityData(this.activityKey, this.state)
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
        // wierd. when animate reports the slide number you are on, they
        // are one-based, but gotoSlide() is 0 based
        console.log("manually navigating to slide:", slideNumber);
        this.cpAPI.gotoSlide(slideNumber-1);
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
/*! exports provided: STUDY3, Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDY3", function() { return STUDY3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });

const STUDY3 = {
    conditionActivities: {
        1: [
            "matsPreTest",
            "diPreTest",
            "reSelectBL",
            "hypoWEoneDir",
            "diInstrGR",
            "diCrystalGrowthTest",
            "diPostTest",
            "matsPostTest"
        ],
        2: [
            "matsPreTest",
            "diPreTest",
            "reSelectBL",
            "hypoWEbiDir",
            "diInstrGR",
            "diCrystalGrowthTest",
            "diPostTest",
            "matsPostTest"
        ]
    }
};

// abstract class - interface
class Database {
    constructor(dbType) {
        this.dbType = dbType;
    }

    setCredentials(userID) {
        this.userID = userID;
    }

    lookupUserID(formData) {

    }

    loginUser(userID) {

    }

    registerUser(formData) {

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
        super("firestore");
        firebase.initializeApp(firebaseConfig);
        this.store = firebase.firestore();
    }

    setCredentials(userID) {
        super.setCredentials(userID);
        this.userRef = this.store.collection("STUDY_3").doc(userID);
    }

    getNextUserNum() {
        return this.store.collection("STUDY_3").doc("study_data").update({
            usernum: firebase.firestore.FieldValue.increment(1)
        }).then(() => this.store.collection("STUDY_3").doc("study_data").get())
        .then((doc) => {
            return doc.data().usernum;
        })
        .catch((error) => console.error(error));
    }

    // loginUser(classCode, userID) {
    //     let retVal;
    //     return this.store.collection("STUDY_3")
    //         .where("classCode", "==", classCode)
    //         .where("userID", "==", userID)
    //         .get()
    //         .then((snapshot) => {
    //             if (1 !== snapshot.size) {
    //                 return false;
    //             }
    //             this.userRef = snapshot.docs[0];
    //             return true;
    //         })
    // }

    loginUser(userID) {
        let docRef = this.store.collection("STUDY_3").doc(userID);
        return docRef.get()
        .then((doc) => {
            if (!doc.exists) {
                return false;
            } else {
                this.userRef = docRef;
                return this.getUserData()
            }
        });
    }

    lookupUserID(formData) {
        // returns userID (truthy) or false
        return this.store.collection("STUDY_3")
            .where("classCode", "==", formData.classCode)
            .where("FN",        "==", formData.FN)
            .where("LN",        "==", formData.LN)
            .where("MON",       "==", formData.MON)
            .where("DAY",       "==", formData.DAY)
            .get()
            .then((snapshot) => {
                // console.log(snapshot);
                if (1 !== snapshot.size) {
                    return false;
                } else {
                    console.log('record found');
                    let userID = false;
                    let data = snapshot.docs[0].data();
                    if (data.userID) {
                        userID = data.userID;
                    } else {
                        console.log("no userID field", data);
                    }
                    return userID;
                }
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }

    registerUser(formData) {
        let userID = false;
        console.log('registering user');
        return this.getNextUserNum()
        .then((userNum) => {
            // if even cond1 if odd cond2
            let conditionNum = (userNum % 2) + 1;
            let conditionStr = `${conditionNum}`;
            userID = `USER${userNum}_${conditionNum}`;
            let activityList = _database__WEBPACK_IMPORTED_MODULE_0__["STUDY3"].conditionActivities[conditionStr];
            let data = Object.assign(formData, {
                userID: userID,
                condition: conditionStr,
                assignments: JSON.stringify(activityList),
                completedAssignments: JSON.stringify([])
            })
            return this.store.collection("STUDY_3").doc(userID).set(data)
        })
        .then(() => {
            return userID;
        })
        .catch((error) => {
            console.error(error);
            return false;
        })
    }

    getUserData() {
        // returns promise with 'doc' if it exists, false otherwise
        let userData = false;
        return this.userRef.get()
        .then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                userData = {
                    userID: data.userID,
                    condition: data.condition,
                    assignments: JSON.parse(data.assignments),
                    completedAssignments: JSON.parse(data.completedAssignments)
                }
            }
            return userData;
        });
    }

    markActivityAsCompleted(activityId) {
        // console.log(`markActivityAsCompleted(${activityId})`);
        return this.userRef.get()
        .then((doc) => {
            let data = doc.data();
            return JSON.parse(data.completedAssignments)
        })
        .then((completedAssignments) => {
            // console.log("BEFORE:", completedAssignments);
            if (!completedAssignments.includes(activityId)) {
                completedAssignments.push(activityId);
            }
            // console.log("AFTER", completedAssignments)
            return this.userRef.update({
                completedAssignments: JSON.stringify(completedAssignments)
            });
        });
    }

    getCurrHypoTask() {

    }

    getActivityData(activityKey, decodeJSON=true) {
        return this.userRef.get()
        .then((doc) => doc.data())
        .then((userData) => {
            console.log("userData", userData);
            if (!userData) {
                return null;
            }
            let data = userData[activityKey];
            if (!data) {
                return null;
            }
            if (data && decodeJSON) {
                return JSON.parse(data);
            } else {
                return data;
            }
        }).catch((error) => {
            console.error(error);
            return null;
        });
    }

    setActivityData(activityKey, state) {
        let activityState = JSON.stringify(state);
        return this.userRef.update({
            [activityKey]: activityState
        })
        .then(() => {
            console.log("app data saved successefully")
        }).catch((error) => {
            console.error(error);
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



function getDBConnection(dbType, schema) {
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

/***/ "./src/iframe.js":
/*!***********************!*\
  !*** ./src/iframe.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isptutorproject_isp_captivate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @isptutorproject/isp-captivate */ "../../common/isp-captivate/index.js");
/* harmony import */ var _isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @isptutorproject/activity-config */ "../../common/activity-config/index.js");





const FTR_ONE_DIR = "FTR_ONE_DIRECTIONAL";
const FTR_BI_DIR  = "FTR_BI_DIRECTIONAL";
const COND_ONE_DIR = "one-directional";
const COND_BI_DIR  = "bi-directional";

const TRACKED_VARS = [
    "condition",
    "gender",
    "prediction",
    "sibling",
    "VINName",
    "VINTwinName"
];

function undefinedOrSame(currState, value) {
    return ("undefined" === typeof(currState) || currState === value)
}

class HypoWECaptivateActivity extends _isptutorproject_isp_captivate__WEBPACK_IMPORTED_MODULE_0__["ISPCaptivateActivity"] {
    constructor(activityConfig, cpAPI, varsToTrack) {
        super(activityConfig, cpAPI, varsToTrack);
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
    let activityConfig = Object(_isptutorproject_activity_config__WEBPACK_IMPORTED_MODULE_1__["getActivityConfiguration"])();

    // event.Data is the same as window.cpAPIInterface
    const cpAPI = event.Data;
    const app = new HypoWECaptivateActivity(activityConfig, cpAPI, TRACKED_VARS);
    app.init();
}


// window.addEventListener("load", initApp);
window.addEventListener("moduleReadyEvent", initApp);


/***/ })

/******/ });
//# sourceMappingURL=iframe.bundle.js.map