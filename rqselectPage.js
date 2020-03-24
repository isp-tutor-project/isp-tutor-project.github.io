// this is the index.js file, responsible for controlling the account registration system and launching the different modules
/* global db, AdobeAn, createjs, stage, initHypoPage, getStudentCondition */


// set to true for for hypo development
// const HYPO_DEV = false;

// convenience function so I don't have to constantly
// type document.getElementById()
function getEleById(eleID) {
    return document.getElementById(eleID);
}

let currentPage = "home-page";
// commented out as I don't, as yet have a visually pleasing
// sign-out button
// let collectionID; 
let userID; 
// if (HYPO_DEV) {
//     collectionID = localStorage.getItem("collectionID");
//     userID = localStorage.getItem("userID");
// }

let currModulePage = document.getElementById("module-page");
let newModulePage = document.getElementById("module-page").cloneNode(true);

// =============================================================================
// ========================= Useful functions ==================================
// =============================================================================

function openPage(page) {
    console.log(`openPage ${page} called`);
    document.getElementById(currentPage).style.display = "none";
    document.getElementById(page).style.display = "block";
    currentPage = page;
}

// kind of a hacky fix to make the rq and ted modules work with my home button
function cleanModulePage() {
    //if (modulePage == null) modulePage = document.getElementById("module-page");
    let parent = currModulePage.parentNode;
    parent.removeChild(currModulePage);
    parent.insertBefore(newModulePage, document.getElementById("home-page"));
    currModulePage = newModulePage;
    newModulePage = newModulePage.cloneNode(true);
    document.getElementById("home-icon").addEventListener("click", e => {
        document.getElementById("home-overlay").style.display = "block";
    });
    document.getElementById("yes-btn").addEventListener("click", e => {
        cleanModulePage();
        document.getElementById("home-overlay").style.display = "none";
        openPage("home-page");
        initHomePage();
    });
}

function showSnackbar(text) {
    // Get the snackbar DIV
    let snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = text;
    // Add the "show" class to DIV
    snackbar.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

// function isValidInput(input) {
//     let regex = /^[A-Za-z]+$/
//     if (regex.test(input)) {
//         return true;
//     }
//     else {
//         showSnackbar("Please do not enter any numbers, spaces, or special characters in your input.");
//         return false;
//     }
// }

// function ensureLength2(value, fldName) {
//     if (value.length !== 2) {
//         showSnackbar(`Please enter exactly two letters for your ${fldName}`)
//         return false;
//     }
//     return true;
// }

// // simple parameterized wrapper which handles the otherwise duplicate login and
// // registration form parsing.
// function parseUserForm(formID) {
//     const pfx = ('registration-form' === formID) ? 'r' : 's';
//     let fldNames = ['classcode', 'fname', 'lname', 'bmonth', 'bday'];
//     // create a map of fldNames to prefixed ('r-' or 's-') field names
//     let flds = fldNames.reduce((obj, key) => {
//         obj[key] = `${pfx}-${key}`;
//         return obj;
//     }, {});

//     let form = getEleById(formID);
//     if (!form.reportValidity()) {
//         return false;
//     }
//     let classCode = getEleById(flds.classcode).value.toUpperCase();
//     collectionID = classCode;
//     let firstname = getEleById(flds.fname).value;
//     let lastname = getEleById(flds.lname).value;
//     let month = getEleById(flds.bmonth).value;
//     let day = getEleById(flds.bday).value;
//     if (!ensureLength2(firstname, "first name")) {
//         return false;
//     }
//     if (!ensureLength2(lastname, "last name")) {
//         return false;
//     }
//     userID = firstname + lastname;
//     if (!isValidInput(userID)) {
//         return false;
//     }
//     userID += '_' + month + '_' + day;
//     userID = userID.toUpperCase();
//     // save collection and uid so BRM can connect to firebase
//     localStorage.setItem("collectionID", collectionID);
//     localStorage.setItem("userID", userID);
//     return true;
// }

// ==========================================================================================================
// ========================================== Page Initiations ==============================================
// ==========================================================================================================

function initHomePage() {
    //let tutors = ["rq", "hypo", "ted"];
    // the list of tutors that will be displayed on the home page
    let tutors = ["rq", "hypo"];
    // db.collection(collectionID).doc(userID).get()
    // .then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document exists");
    //         return doc.data();
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    db.getUserData()
    .then((data) => {
        return data;
    }).catch(function (error) {
        console.log("Error getting document:", error);
    })
    .then((data) => {
        let currTutorNdx = data.currTutorNdx;
        let brm = data.brm;
        // if (tutors.length === currTutorNdx) {
        //     // student is done, disable all module buttons and display message
        //     tutors.forEach((tut, idx) => {
        //         let enbld = document.getElementById(tutors[idx] + "-button");
        //         enbld.classList.add("disabled");
        //     });
        //     showSnackbar("You have finished your work with the tutor.");
        // } else {
        //     // student still working, enable/disable the appropriate module buttons
        //     let enabled = document.getElementById(tutors[currTutorNdx] + "-button");
        //     enabled.classList.remove("disabled");
        //     enabled.disabled = false;
        //     if (currTutorNdx != 0) {
        //         let former = document.getElementById(tutors[currTutorNdx - 1] + "-button");
        //         former.classList.add("disabled");
        //         former.disabled = true;
        //     }
        // }
    });

    // if (userID != null) {
    //     document.getElementById("sign-in-text").innerHTML = "Signed in as " + userID;
    //     // the following is commented out, as it looks like crap
    //     // document.getElementById("sign-out-region").innerHTML = `
    //     //     <a href="#" id="sign-out">Sign out</a>
    //     // `;
    //     // document.getElementById("sign-out").addEventListener("click", e => {
    //     //     logout();
    //     //     openPage('index-page');
    //     // });
    // }
}

let init;
let handleComplete;
var EFRootTutor, EFloginhibit, EFtutorFeatures;
var canvas, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, inited;

function initRQPage() {
    console.log("initRQPage() called");
    EFRootTutor = 'EFTED_RQSelect';
    EFloginhibit = false;

    // change this to enable rq choice
    // EFtutorFeatures = "FTR_CHOICE";
    EFtutorFeatures = "FTR_WEB:FTR_NOCHOICE:FTR_NCCRYSTAL";

    init = () => {
        // NOTE: Some chrome extensions may introduce secondary calls to the onload listener
        //       inited ensure it only fires once.
        //
        //if(!inited) {
        // inited = true;
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        var comp = AdobeAn.getComposition("52BBDDD43BDBD64499D685AAA6743D14");
        var lib = comp.getLibrary();
        createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
        // commenting out for now as this a duplicate redeclaration
        // var lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
        // }
    }
    handleComplete = (evt, comp) => {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
        }
        var preloaderDiv = document.getElementById("_preload_div_");
        preloaderDiv.style.display = 'none';
        dom_overlay_container.style.display = canvas.style.display = 'block';
        exportRoot = new lib.EFTutorLoader();
        stage = new lib.Stage(canvas);
        //Registers the "tick" event listener.
        fnStartAnimation = function () {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS = 1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = window.innerWidth, ih = window.innerHeight;
                var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                if (isResp) {
                    if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                        sRatio = lastS;
                    }
                    else if (!isScale) {
                        if (iw < w || ih < h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if (scaleType == 2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w * pRatio * sRatio;
                canvas.height = h * pRatio * sRatio;
                canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
                stage.scaleX = pRatio * sRatio;
                stage.scaleY = pRatio * sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
                stage.tickOnUpdate = false;
                stage.update();
                stage.tickOnUpdate = true;
            }
        }
        makeResponsive(true, 'both', true, 1);
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();
    }
}

// function initTEDPage() {

//     EFRootTutor = 'EFTED_Instr'
//     EFtutorFeatures = "FTR_WEB:FTR_CHOICE"
//     EFloginhibit = false;

//     init = () => {
//         // NOTE: Some chrome extensions may introduce secondary calls to the onload listener
//         //       inited ensure it only fires once.
//         //
//         //if (!inited) {
//         //  inited = true;
//         canvas = document.getElementById("canvas");
//         anim_container = document.getElementById("animation_container");
//         dom_overlay_container = document.getElementById("dom_overlay_container");
//         var comp = AdobeAn.getComposition("52BBDDD43BDBD64499D685AAA6743D14");
//         var lib = comp.getLibrary();
//         createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.WebAudioPlugin, createjs.FlashAudioPlugin]);
//         var loader = new createjs.LoadQueue(false);
//         loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
//         // commenting out for now as this a duplicate redeclaration
//         // var lib = comp.getLibrary();
//         loader.loadManifest(lib.properties.manifest);
//         //}
//     }
//     handleComplete = (evt, comp) => {
//         //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
//         var lib = comp.getLibrary();
//         var ss = comp.getSpriteSheet();
//         var queue = evt.target;
//         var ssMetadata = lib.ssMetadata;
//         for (let i = 0; i < ssMetadata.length; i++) {
//             ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
//         }
//         var preloaderDiv = document.getElementById("_preload_div_");
//         preloaderDiv.style.display = 'none';
//         dom_overlay_container.style.display = canvas.style.display = 'block';
//         exportRoot = new lib.EFTutorLoader();
//         stage = new lib.Stage(canvas);
//         //Registers the "tick" event listener.
//         fnStartAnimation = function () {
//             stage.addChild(exportRoot);
//             createjs.Ticker.setFPS(lib.properties.fps);
//             createjs.Ticker.addEventListener("tick", stage);
//         }
//         //Code to support hidpi screens and responsive scaling.
//         function makeResponsive(isResp, respDim, isScale, scaleType) {
//             var lastW, lastH, lastS = 1;
//             window.addEventListener('resize', resizeCanvas);
//             resizeCanvas();
//             function resizeCanvas() {
//                 var w = lib.properties.width, h = lib.properties.height;
//                 var iw = window.innerWidth, ih = window.innerHeight;
//                 var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
//                 if (isResp) {
//                     if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
//                         sRatio = lastS;
//                     }
//                     else if (!isScale) {
//                         if (iw < w || ih < h)
//                             sRatio = Math.min(xRatio, yRatio);
//                     }
//                     else if (scaleType == 1) {
//                         sRatio = Math.min(xRatio, yRatio);
//                     }
//                     else if (scaleType == 2) {
//                         sRatio = Math.max(xRatio, yRatio);
//                     }
//                 }
//                 canvas.width = w * pRatio * sRatio;
//                 canvas.height = h * pRatio * sRatio;
//                 canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
//                 canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
//                 stage.scaleX = pRatio * sRatio;
//                 stage.scaleY = pRatio * sRatio;
//                 lastW = iw; lastH = ih; lastS = sRatio;
//                 stage.tickOnUpdate = false;
//                 stage.update();
//                 stage.tickOnUpdate = true;
//             }
//         }
//         makeResponsive(true, 'both', true, 1);
//         AdobeAn.compositionLoaded(lib.properties.id);
//         fnStartAnimation();
//     }
// }

// function gotoHypoPage() {
//     getStudentCondition()
//     .then((condition) => {
//         if (condition) {
//             initHypoPage();
//             openPage("hypo-page");
//         } else {
//             openPage("home-page");
//             initHomePage();
//             showSnackbar('Sorry, you cannot proceed any further until your pre-test has been scored.');
//         }
//     })
//     .catch(function (error) {
//         console.error(error);
//     });
// }

// =============================================================================
// ================================= Event Listeners ===========================
// =============================================================================

// document.getElementById("rq-button").addEventListener("click", e => {
//   openPage("module-page");
//   initRQPage();
//   init();
// });

document.getElementById("completion-home-btn").addEventListener("click", e => {
    // cleanModulePage();
    document.getElementById("completion-overlay").style.display = "none";
    window.location.href = "https://www.isptutor.org/science-inquiry-lesson";
    // openPage("home-page");
    // initHomePage();
});
document.getElementById("home-icon").addEventListener("click", e => {
    document.getElementById("home-overlay").style.display = "block";
});
document.getElementById("yes-btn").addEventListener("click", e => {
    cleanModulePage();
    document.getElementById("home-overlay").style.display = "none";
    openPage("home-page");
    initHomePage();
});
document.getElementById("cancel-btn").addEventListener("click", e => {
    document.getElementById("home-overlay").style.display = "none";
});

// if (collectionID && userID) {
//     if (HYPO_DEV) {
//         gotoHypoPage();
//     } else {
//         openPage("home-page");
//         initHomePage()
//     }
// } else {
//     openPage("index-page");
// }

db.getIntValue("userID")
.then((uid) => {
    userID = uid;
    return db.saveValue("currTutorNdx", 0);
})
.then(() => { 
    openPage("module-page");
    initRQPage();
    init();
});