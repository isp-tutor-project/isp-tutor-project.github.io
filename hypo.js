// this is hypo.js, responsible for the functionality of the hypo module

/*
 * This is some serious code smell if I need to tell the linter to not
 * complain about all of these variables from other <script> tags
 * FIXME: We need a build system
 */
/*global db, collectionID, userID, ontology, hypoOntology, showSnackbar */
/*global createjs */
/*global initHypoTasks */
/*global currHypoTask, prevHypoTask, nextHypoTask */

// xxs, xs, sm, med, lg, xl, xxl
// FONTS_arial = [ 12px, 14px_italic, 16px, 16px_bold, 18px, 20px, 22px, 22px_bold, 24px, 24px_bold, 28px, 32px,]
// COLORS = [
//     "#f4d041",
//     "#000",
//     "#FFFFFF",
//     "#3769C2",
//     "#5588EE",
//     "#99bbff",
//     "#2858a9",
//     "#FFa500",
//     "#4286f4",
//     "#FFFFE0"
// ];
// to launch the first page after done loading. Other pages can 
// be launched for convenient development.
function handleFileComplete(event) {
    // determines the student's next page and launches it
    // calls initHypoTasks
    loadData();
    // initHypoTasks();
    /*
    * alternatively, when in development, you can comment that out
    * and jump directly to a particular page,
    * such as:
    */
    // conceptMapPage3();
    // startPage();
    //definitionPage1();
    //instructionPage();
    //brmPage();
    //brmInstructionPage();
}

// ============================================================================
// ======================== Constants and Variables ===========================
// ============================================================================

// calculuate the pixel ratio of the screen
const PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
    let pRatio = dpr / bsr;
    return pRatio;
})();

// constants regarding canvas size
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 750;

// calculate the scaling ratio for making canvas responsive
const SCALE_RATIO = (function () {
    let iw = window.innerWidth;
    let ih = window.innerHeight;
    let xRatio = iw / CANVAS_WIDTH;
    let yRatio = ih / CANVAS_HEIGHT;
    let sRatio = Math.min(xRatio, yRatio);
    return sRatio;
})();

// for keeping track of scaling ratio in makeResponsive;
let scalingRatio = 1;

// constants regarding bubble customization
const BUBBLE_WIDTH = 120;
const BUBBLE_HEIGHT = 100;
const BUBBLE_RADIUS = 10;
const BUBBLE_INCREMENT = .5 * BUBBLE_WIDTH;

const BUTTON_WIDTH = 80;
const BUTTON_HEIGHT = 40;
const BUTTON_RADIUS = 10;
const BUTTON_COLOR = "#136bfb";

const ARROW_BACKGROUND_WIDTH = 20;
const ARROW_BACKGROUND_HEIGHT = 20;

const OPTION_MIN_WIDTH = 100;
const OPTION_HEIGHT = 40;
const OPTION_COLOR = "#f4d041";

const CONNECTOR_RADIUS = 5;

// constants regarding position of nodes,
// nodes/bubbles are centered upon the x and y positions selected
const BUBBLE_X = CANVAS_WIDTH / 4;
const BUBBLE_Y = CANVAS_HEIGHT * .75 - 1.5 * BUBBLE_HEIGHT;
// const IV_X = CANVAS_WIDTH / 4;
const IV_X = CANVAS_WIDTH * 0.1;
// const IV_Y = CANVAS_HEIGHT * 0.75;
const IV_Y = CANVAS_HEIGHT * 0.8;

// const DV_X = CANVAS_WIDTH * .75;
const DV_X = CANVAS_WIDTH * 0.9;
// const DV_Y = CANVAS_HEIGHT * .75;
const DV_Y = CANVAS_HEIGHT * 0.8;

// these are for displaying information
let stage;
let textField;
// yellow panel that shows up upon mouse click
let panel;

// related with drawing arrows
let currentArrow = null;
let connectorOver = null;
let somethingHighlighted = false;

// for error field purposes
let errorField;
// for option width purposes
let optionWidth;

// for storing steps taken by user
//    steps include an action, an object, an index, a timestamp, and possibly
//    additional text
let steps = [];

// this queue is for the preloader to contain all the image files that have
// been preloaded
let queue;
// for the loading text at start
let loadingText;

// answers for quiz questions on definitionPage6
// FIXME: couldn't I define this in defPage6???
const QUIZ_ANSWERS = [
    "Causes", "Correlation", "Definition", "Causes", "Definition"
];

// placeholder (Crystal) constants regarding values of nodes
// FIXME: we need a better way to have default values without resorting to 
// globals
const IV = "Initial water temperature"
const DV = "Amount crystal growth on string"
// there can be 1 - 8 nodes (or else it will look strange)
const NODES = [
    "Kinetic energy of water molecules",
    "Evaporation rate of water",
    "Amount of water in jar",
    "Concentration of Na+ and Cl- in water",
    "Amount of water string absorbs"
];
const CAUSES = [
    "Electric force",
    "Conservation of matter",
    "Energy to escape electric forces"
];

/*
 * Alternative placeholder values for Stefani's Concept Map Video
 */
// const IV = "Listening to songs while studying"
// const DV = "Grades in the class"
// // there can be 1 - 8 nodes (or else it will look strange)
// const NODES = [
//     "Knowledge of lyrics",
//     "Reading comprehension of material",
//     "Learning of material"
// ];
// const CAUSES = [
//     "Concentration",
//     "Familiarity",
//     "Mood"
// ];


// variable versions of iv and dv. setting them to the defaults above, and
// later if loadData() is successfull, the defaults will be overriden by what's
// in firebase
let iv = IV;
let dv = DV;
// abbreviated dv
let dvabb = DV;
let nodes = NODES;
// these two negative indices are just using while logging steps
nodes[-2] = IV;
nodes[-1] = DV;
let causes = CAUSES;

// true corresponds to "increasing" and false corresponds to "decreasing"
// FIXME: Scott's not sure this makes sense.  Basically both predictions
// end up with a value of "increasing" prior to the student doing anything
let firstPrediction; //= true;
let secondPrediction; //= true;

// The following state vars were added by Scott as we wanted to both display what
// the user previously selected when they return to the page via a back button
// and if the user had saved a subsequent concept map, no longer allow them
// to change the prediction they made beforehand.answered

// if true, will highlight the current value, but still let you change it
// if this gets set to true, you will not be able to change the first prediction
let initialHypoLocked;
let initialHypoLockedReason = "";
// ditto for the second prediction
let finalHypoLocked;
let finalHypoLockedReason = "";
// ============================================================================
// ================================= Firebase =================================
// ============================================================================

// this is old function to load rq data, uses hypoOntology.js, might not work
// anymore
//
// Scott - this is definitely working, as it's in use and the rqted
// data is indeed fetched.  My question is, does this really need to be an 
// async function?  all of the other firebase promise stuff isn't and works
// // just fine
// async function getTutorState() {
//     let jsonData = null;
//     if (userID == null) {
//         console.log("userID is null");
//         return null;
//     }
//     var docRef = db.collection(collectionID).doc(userID);
//     await docRef.get().then(function (doc) {
//         if (doc.exists) {
//             console.log("Document exists");
//             jsonData = doc.data().rqted;
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function (error) {
//         console.log("Error getting document:", error);
//     });
//     //console.log("returned data: "+ jsonData);
//     return jsonData;
// }

function loadData() {
    db.getUserData()
    .then((userData) => {
        // console.log("loadData", userData);
        firstPrediction = userData.firstPrediction;
        initialHypoLocked = userData.initialHypo !== null;
        secondPrediction = userData.secondPrediction;
        finalHypoLocked = userData.finalHypo !== null;
        
        let moduleData = userData.rqted.moduleState;
        let area = moduleData['selectedArea']['index'];
        let topic = moduleData['selectedTopic']['index'];
        let variable = moduleData['selectedVariable']['index'];
        // ontology stuff
        let ontologyTopic = ontology['_ONTOLOGY']['S']['A' + area]['T' + topic];
        iv = ontologyTopic['enumValue' + variable];
        dv = ontologyTopic['DVs'];
        dvabb = ontologyTopic['DVabb'];
        // hypoOntology stuff
        let hypoOntologyTopic = hypoOntology['A' + area]['T' + topic]['V' + variable];
        if (hypoOntologyTopic['IV'] != "") {
            iv = hypoOntologyTopic['IV'];
        }
        if (hypoOntologyTopic['DV'] != "") {
            dv = hypoOntologyTopic['DV'];
        }
        if (hypoOntologyTopic['DVabb'] != "") {
            dvabb = hypoOntologyTopic['DVabb'];
        }
        causes = hypoOntologyTopic['CAUSES'];
        nodes = hypoOntologyTopic['NODES'];
        nodes[-2] = iv;
        nodes[-1] = dvabb;

        console.log(`
        firstPrediction: ${firstPrediction}
        initialHypoLocked: ${initialHypoLocked}
        secondPrediction: ${secondPrediction}
        finalHypoLocked: ${finalHypoLocked}
        iv: ${iv}
        dv: ${dv}
        dvabb: ${dvabb}
        nodes: ${nodes}
        causes: ${causes}
        `);
        // console.log(area + "," + topic + "," + variable);
        // console.log(hypoOntologyTopic)
        
        return initHypoTasks(userData);
    })
}

// because firstPrediction and secondPrediction are bools where
// true == "increase" and false == "decrease", I need the following 2 functions
// to convert between bool <=> str.  Also, because some old firebase records
// may have saved the values as bools instead of the more descriptive string
// values, I've added backward compatability, where if it's already of that
// type, simply return the current value
function boolPredictionToString(prediction) {
    if (typeof(prediction) === "string") {
        // for backward compat
        return prediction;
    }
    return (prediction) ? "increase" : "decrease";
}

function strPredictionToBool(prediction) {
    if (typeof(prediction) === "boolean") {
        // for backward compat
        return prediction;
    }
    return ("increase" === prediction) ? true : false;
}

/*
 * saves the first/secondPrediction to firebase
 */
function logPrediction(fldName, fldValue) {
    // return db.collection(collectionID).doc(userID).update({
    //     [fldName]: boolPredictionToString(fldValue)
    // })
    return db.saveValue(fldName, fldValue)
    .then(() => {
        return true;
    })
    .catch(function (error) {
        console.error(error);
        return false;
    });
}

function getBubbleInfo(bub) {
    return {
        name: bub.name,
        label: bub.text,
        direction: bub.getChildByName("dirButton").direction,
        x: bub.x,
        y: bub.y
    };
}

function getArrowInfo(arr, fromBubble, toBubble) {
    return {
        startX: arr.x,
        startY: arr.y,
        endX: arr.endX,
        endY: arr.endY,
        from: fromBubble.text,
        to: toBubble.text,
        labelText: arr.label.text
    };
}

/*
 * saves a hypothesis (concept map) to firebase.  based on ones condition, there
 * may be more than one hypothesis, so there is a 'whichHypo' param
 */
function logData2(ivBubble, whichHypo) {
    let log = {};
    let currentPrediction;
    let currentPredictionValue;
    if ("initial" === whichHypo) {
        currentPrediction = "first";
        currentPredictionValue = boolPredictionToString(firstPrediction);
    } else if ("opposite" === whichHypo) {
        currentPrediction = "opposite(first)";
        currentPredictionValue = boolPredictionToString(!firstPrediction);
    } else {
        currentPrediction = "second";
        currentPredictionValue = boolPredictionToString(secondPrediction);
    }
    log.currentPrediction = currentPrediction;
    log.currentPredictionValue = currentPredictionValue;
    let notes = getEleById("notepad_notes");
    // let bubbles = [];
    // let arrows = [];
    let nodes = [];
    let arrowLabels = [];
    let directions = [];
    // bubbles.push(getBubbleInfo(ivBubble));
    let connector = ivBubble.outConnector;
    while (connector != null) {
        let arrow = connector.arrow;
        arrowLabels.push(arrow.label.text.replace("\n", " "));
        let nextBubble = arrow.connectorOver.parent;
        // bubbles.push(getBubbleInfo(nextBubble));
        // arrows.push(getArrowInfo(arrow, connector.parent, nextBubble));
        nodes.push(nextBubble.text);
        directions.push(nextBubble.getChildByName("dirButton").direction);
        connector = nextBubble.outConnector;
    }
    log.nodes = nodes;
    log.arrowLabels = arrowLabels;
    log.directions = directions;
    log.steps = steps;
    log.notes = notes.innerText;
    // console.log('bubbles:');
    // console.log(bubbles);
    // console.log('arrows:')
    // console.log(arrows);
    // db.collection(collectionID).doc(userID).update({
    //     [`${whichHypo}Hypo`]: JSON.stringify(log)
    // })
    db.saveJSONValue(`${whichHypo}Hypo`, log)
    .then(() => {
        console.log("Successfully logged hypothesis data");
        showSnackbar("Successfully logged hypothesis data.");
        console.log(log);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        showSnackbar("Error: Failed to log hypothesis data.");
    });
}


// ===========================================================================
// =========================== Pages =========================================
// ===========================================================================

/* simple map of page names to functions which implement them */
const pageNamesToFunctions = {
    "raiseYourHand": raiseYourHand,
    "startPage": startPage,
    "definitionPage1": definitionPage1,
    "definitionPage2": definitionPage2,
    "definitionPage3": definitionPage3,
    "definitionPage4": definitionPage4,
    "definitionPage5": definitionPage5,
    "definitionPage6": definitionPage6,
    "definitionPage7": definitionPage7,
    "definitionPage8": definitionPage8,
    "definitionPage9": definitionPage9,
    "definitionPage10": definitionPage10,
    "instructionPage": instructionPage,
    "backToYourRQ": backToYourRQ,
    "predictionPage1": predictionPage1,
    "graphPage1": graphPage1,
    "graphPage2": graphPage2,
    "initialConceptMap": initialConceptMap,
    "initialConceptMapPlaceholder": initialConceptMapPlaceholder,
    "biDirInstructionPage1": biDirInstructionPage1,
    "biDirInstructionPage2": biDirInstructionPage2,
    "biDirInstructionPage3": biDirInstructionPage3,
    "oppositeDirectionConceptMap": oppositeDirectionConceptMap,
    "brmPage": brmPage,
    "predictionPage2": predictionPage2,
    "finalConceptMap": finalConceptMap,
    "completePage": completePage
};

// init is the first function to be called
function initHypoPage() {
    // load IV and DV from firebase, if available
    // loadData();
    // used to create a higher resolution canvas
    let createHiPPICanvas = function (w, h, ratio) {
        let can = document.getElementById("hypo-canvas");
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        return can;
    }

    stage = new createjs.Stage("hypo-canvas");

    function makeResponsive(isResp, respDim, isScale, scaleType) {
        let can = document.getElementById("hypo-canvas");
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = CANVAS_WIDTH,
                h = CANVAS_HEIGHT;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = PIXEL_RATIO;
            // necessary for dom elements to look right
            pRatio *= 2;
            var xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) ||
                    (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            can.width = w * pRatio * sRatio;
            can.height = h * pRatio * sRatio;
            can.style.width = w * sRatio + 'px';
            can.style.height = h * sRatio + 'px';
            stage.scaleX = scalingRatio = pRatio * sRatio;
            stage.scaleY = scalingRatio = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }

    // create canvas with the device resolution.
    // let myCanvas = createHiPPICanvas(CANVAS_WIDTH, CANVAS_HEIGHT, PIXEL_RATIO);
    makeResponsive(true, 'both', true, 1);

    // to display loading
    loadingPage();

    // this is for preloader
    queue = new createjs.LoadQueue();
    queue.on("progress", handleFileProgress);
    queue.on("complete", handleFileComplete);
    queue.loadManifest([
        { id: "TeacherPointing", src: "HypoGraphics/slide_intro/TeacherPointing.jpg" },
        { id: "TeacherPointing2", src: "HypoGraphics/slide_intro/TeacherPointing2.jpg" },
        { id: "defGraph", src: "HypoGraphics/slide1/defGraph.png" },
        { id: "causeGraph", src: "HypoGraphics/slide1/causeGraph.png" },
        { id: "corrGraph", src: "HypoGraphics/slide1/corrGraph.png" },
        { id: "densitygraphic", src: "HypoGraphics/slide2/densitygraphic.jpg" },
        { id: "coffeegraphic", src: "HypoGraphics/slide3/coffeegraphic.jpg" },
        { id: "comic", src: "HypoGraphics/slide3/comic.jpg" },
        { id: "correlation", src: "HypoGraphics/slide4/correlation.png" },
        { id: "IceCreamSwimming", src: "HypoGraphics/slide4/IceCreamSwimming.png" },
        { id: "graph1", src: "HypoGraphics/slide4/graph1.png" },
        { id: "graph2", src: "HypoGraphics/slide4/graph2.png" },
        { id: "causation_correlation", src: "HypoGraphics/slide5/PizzaGradesStudy.png" },
        { id: "Picture_SunTempIcecream", src: "HypoGraphics/slide5/SunTempIcecream.png" },
        { id: "Crys_increases", src: "HypoGraphics/graphSlides/Crys_increases.png" },
        { id: "Crys_decreases", src: "HypoGraphics/graphSlides/Crys_decreases.png" },
        { id: "cptMapPlaceholder", src: "HypoGraphics/cptMapPlaceholder/cptMapPlaceholder.jpg" },
        { id: "defPagesCptMap", src: "HypoGraphics/defPagesCptMap.jpg" },
        { id: "ivToDvWithArrow", src: "HypoGraphics/iv2dvWithArrow.png" },
        { id: "yellowBtn", src: "HypoGraphics/buttonyellow.png" },
        { id: "orangeBtn", src: "HypoGraphics/buttonorange.png" },
    ]);

    // required to enable mouse hover events
    stage.enableMouseOver(10);
    // Ticker is primarily for mouse hover event
    createjs.Ticker.addEventListener("tick", stage);
}

// handles loading text
function handleFileProgress(event) {
    let text = "Loading: " + Math.round(queue.progress * 100) + "%";
    loadingText.text = text;
}

function loadingPage() {
    stage.removeAllChildren();
    loadingText = new createjs.Text("Loading: 0%", "32px Arial", "#000");
    loadingText.x = CANVAS_WIDTH / 2;
    loadingText.y = CANVAS_HEIGHT / 2 - 100;
    loadingText.textAlign = "center";
    stage.addChild(loadingText);
    stage.update();
}

/*
 * simple convenience function, as I'm needed to generate the student's
 * Research Question in multiple places
 */
function getRQ() {
    // "Does the initial water temperature affect the weight of the crystal growth on a string";
    return "Does " + iv.toLowerCase() + " affect the " + dv.toLowerCase() + "?"
}

function raiseYourHand() {
    stage.removeAllChildren();

    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 50, y: 50
    });

    let text1 = new createjs.Text(
        "In your notebook for this experiment", "22px Arial", "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 100, textAlign: "center"
    });

    let text2 = new createjs.Text(
        "Make sure you have written your research question ...",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 175, textAlign: "center"
    });

    let text3 = new createjs.Text(getRQ(), "bold 22px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, y: 250,
        textAlign: "center", lineHeight: 35, lineWidth: 700
    });

    let text4 = new createjs.Text(
        "on the cover page of your notebook ", "22px Arial", "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 350, textAlign: "center"
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(image1, text1, text2, text3, text4, backButton, nextButton);
    stage.update();
}

function startPage() {
    stage.removeAllChildren();
    let text = new createjs.Text(
        "Welcome to the ISP Tutor's Hypothesis module.",
        "28px Arial ", 
        "#000"
    ).set({
        x: (CANVAS_WIDTH / 2) + 20, y: 80,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });
    // "\n\n" +
    //     "Before you start working on your hypothesis for your research " +
    //     "question, we will first define some important terms.",


    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 40, y: 80
    });

    let nextButton = createLargeButton(CANVAS_WIDTH / 2, 350, "Next", "#3769C2");
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(text, image1, nextButton);
    stage.update();
}

function definitionPage1() {
    stage.removeAllChildren();
    let text = new createjs.DOMElement("start_page_overlay").set({
        x: 20 * 2 / PIXEL_RATIO, y: 10 * 2 / PIXEL_RATIO,
        scaleX: 0.6 * 2 / PIXEL_RATIO, scaleY: 0.6 * 2 / PIXEL_RATIO
    });
    text.htmlElement.style.display = "block";

    let backButton = createBackButton();
    backButton.on("click", e => {
        text.htmlElement.style.display = "none";
        prevHypoTask();
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        text.htmlElement.style.display = "none";
        nextHypoTask();
    });

    stage.addChild(text, backButton, nextButton);
    stage.update();
}

function definitionPage2() {
    stage.removeAllChildren();

    let text = new createjs.Text(
        "Many middle school students have difficulty developing a good " +
        "hypothesis for their prediction.\n\nFor example, most middle school " +
        "students have difficulty explaining how hot/room temperature water " +
        "would lead to more crystal growth.",
        "24px Arial",
        "#000"
    ).set({
        x: 80, y: 50, lineHeight: 35, lineWidth: CANVAS_WIDTH - 160
    });

    let image = new createjs.Bitmap(queue.getResult("ivToDvWithArrow")).set({
        x: 215, y: 485, scaleX: 0.55, scaleY: 0.55
    });

    let text2 = new createjs.Text("???", "bold 24px Arial", "#000").set({
        x: (CANVAS_WIDTH / 2) - 40, y: image.y - 20
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(text, image, text2, backButton, nextButton);
    stage.update();
}

function definitionPage3() {
    stage.removeAllChildren();

    let text1 = new createjs.Text(
        "To help you make a hypothesis for your prediction, we will ask you " +
        "to make a concept map (an example is shown below). The final " +
        "concept map should show step-by-step how the independent variable " +
        "(water temperature) affects the dependent variable (amount of " +
        "crystal growth).",
        "24px Arial",
        "#000"
    ).set({
        x: 60, y: 40, lineHeight: 35, lineWidth: CANVAS_WIDTH - 120
    });

    let text2 = new createjs.Text(
        "You will do this by linking concepts that are closely or directly " +
        "related. For example, as shown below, Water temperature is closely " +
        "related to 'Concept 1'. 'Concept 1' is closely related to 'Concept 2', " +
        "and 'Concept 2' is directly related to 'Weight of crystal'.",
        "24px Arial",
        "#000"
    ).set({
        x: 100, y: 175, lineHeight: 35, lineWidth: CANVAS_WIDTH - 170
    });

    let image = new createjs.Bitmap(queue.getResult("defPagesCptMap")).set({
        x: 200, y: 350
    });
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(text1, text2, image, backButton, nextButton);
    stage.update();
}

function definitionPage4() {
    stage.removeAllChildren();

    let text = new createjs.Text(
        "For each connected pair of concepts (e.g. water temperature and " +
        "Concept 1), you will be asked to indicate how the concepts are related.",
        "24px Arial",
        "#000"
    ).set({
        x: 60, y: 60, lineHeight: 35, lineWidth: CANVAS_WIDTH - 120
    });
    
    let image = new createjs.Bitmap(queue.getResult("defPagesCptMap")).set({
        x: 200, y: 350
    });
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(text, image, backButton, nextButton);
    stage.update();
}

function definitionPage5() {
    stage.removeAllChildren();
    let image1 = new createjs.Bitmap(queue.getResult("defGraph")).set({
        x: 60, y: 300, scaleX: 0.5, scaleY: 0.5
    });
    let image2 = new createjs.Bitmap(queue.getResult("causeGraph")).set({
        x: 450, y: 500, scaleX: 0.5, scaleY: 0.5
    });
    let image3 = new createjs.Bitmap(queue.getResult("corrGraph")).set({
        x: 800, y: 300, scaleX: 0.5, scaleY: 0.5
    });

    let title = new createjs.Text(
        "Types of Relationships",
        "bold 24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 100, textAlign: "center"
    });

    let text1 = new createjs.Text(
        "When you make your hypothesis, you will need to choose the type of " +
        "relationship between pairs of concepts. Here are the three types " + 
        "of relationships you can choose from when you make your hypothesis:",
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 160,
        textAlign: "center", lineWidth: 1000, lineHeight: 30
    });

    let text2 = new createjs.Text(
        '(1) Definition\n\n(2) Cause\n\n(3) Correlation',
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 280, textAlign: "center", lineHeight: 30
    });

    let text3 = new createjs.Text('', 'italic 14px Arial', "#000").set({
        x: CANVAS_WIDTH / 2, y: 370, textAlign: "center"
    });
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    let images = [image1, image2, image3];
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 3) {
            nextHypoTask();
        } else {
            console.log(images[iteration]);
            stage.addChild(images[iteration]);
            stage.update();
            iteration++;
        }
    });

    stage.addChild(title, text1, text2, text3, backButton, nextButton);
    stage.update();
}

function definitionPage6() {
    stage.removeAllChildren();
    let title = new createjs.Text(
        "Types of Relationships for Hypotheses",
        "bold 24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 80, textAlign: "center"
    });

    let text1 = new createjs.Text(
        "(1) Definition: The meaning of a concept",
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 130, textAlign: "center"
    });

    let text2 = new createjs.Text(
        "Often, an “everyday” term is defined by the behaviors of " + 
        "molecules...\n\nFor example, the concept of the “temperature” of " + 
        "an object is defined as the average kinetic energy of the " +
        "molecules that make up the object.",
        "18px Arial",
        "#000"
    ).set({
        x: 150, y: 230, lineHeight: 25, lineWidth: 300
    });

    let text3 = new createjs.Text(
        "Or, “Density” is the amount of mass of an object divided by its " + 
        "volume (or how much space it takes up).",
        "18px Arial",
        "#000"
    ).set({
        x: 150, y: 500, lineHeight: 25, lineWidth: 300,
    });

    let image1 = new createjs.DOMElement("temperature_gif_overlay");
    image1.x = 115 * 2 / PIXEL_RATIO;
    image1.y = 45 * 2 / PIXEL_RATIO;
    image1.scaleX = .15 * 2 / PIXEL_RATIO;
    image1.scaleY = .15 * 2 / PIXEL_RATIO;

    let image2 = new createjs.Bitmap(queue.getResult("densitygraphic")).set({
        x: 600, y: 440, scaleX: 0.5, scaleY: 0.5
    });

    let backButton = createBackButton();
    backButton.on("click", e => {
        image1.htmlElement.style.display = "none";
        prevHypoTask();
    });
    
    let nextButton = createNextButton();
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            image1.htmlElement.style.display = "block";
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            image1.htmlElement.style.display = "none";
            nextHypoTask();
        }
        iteration++;
    });

    stage.addChild(title, text1, backButton, nextButton);
    stage.update();
}

function definitionPage7() {
    stage.removeAllChildren();
    let text1 = new createjs.Text(
        "(2) Causes: One variable influences another variable or something " +
        "directly affects something else.",
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 80, textAlign: "center", lineWidth: 1000
    });
    
    let text2 = new createjs.Text(
        "For example, being distracted while driving causes driving mistakes " +
        "(because people’s attention is shifted away from what is happening " +
        "on the road).",
        "18px Arial",
        "#000"
    ).set({
        x: 150, y: 180, lineHeight: 25, lineWidth: 450
    });

    let text3 = new createjs.Text(
        "Or, the amount of caffeine someone drinks causes different amounts " + 
        "of alertness (because caffeine increases brain activity).",
        "18px Arial",
        "#000"
    ).set({
        x: 650, y: 180, lineHeight: 25, lineWidth: 450
    });

    let image1 = new createjs.Bitmap(queue.getResult("comic")).set({
        x: 150, y: 300, scaleX: 0.8, scaleY: 0.7,
    });

    let image2 = new createjs.Bitmap(queue.getResult("coffeegraphic")).set({
        x: 650, y: 300, scaleX: 0.7, scaleY: 0.7
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    
    stage.addChild(text1, backButton, nextButton);
    stage.update();
}

function definitionPage8() {
    stage.removeAllChildren();
    let text1 = new createjs.Text(
        "(3) Correlation: A relationship between two variables where both " +
        "variables increase together, decrease together, or one increases " +
        "as the other decreases. However, these variables may not directly " +
        "affect each other.",
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 80,
        textAlign: "center", lineWidth: 1000, lineHeight: 30
    });

    let text2 = new createjs.Text(
        "For example, let’s say you found that there is a relationship between " + 
        "how often students eat pizza and their grades in school. You don’t " +
        "know why there would be, so you can call that relationship a " +
        "“correlation” in your hypothesis.",
        "18px Arial",
        "#000"
    ).set({
        x: 130, y: 200, lineHeight: 25, lineWidth: 460
    });

    let text3 = new createjs.Text(
        "There is a correlation between the amount of ice cream people buy " +
        "and how often people go swimming. But there’s no logical reason to " +
        "think one caused the other!",
        "18px Arial",
        "#000"
    ).set({
        x: 630, y: 200, lineHeight: 25, lineWidth: 460
    });

    let image1 = new createjs.Bitmap(queue.getResult("correlation")).set({
        x: 170, y: 320, scaleX: 0.4, scaleY: 0.4,
    });

    let image2 = new createjs.Bitmap(queue.getResult("IceCreamSwimming")).set({
        x: 680, y: 320, scaleX: 0.5, scaleY: 0.5
    });

    let graph1 = new createjs.Bitmap(queue.getResult("graph1")).set({
        x: 220, y: 450, scaleX: 0.4, scaleY: 0.4
    });

    let graph2 = new createjs.Bitmap(queue.getResult("graph2")).set({
        x: 710, y: 450, scaleX: 0.4, scaleY: 0.4
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1, graph1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2, graph2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    
    stage.addChild(text1, backButton, nextButton);
    stage.update();
}

function definitionPage9() {
    stage.removeAllChildren();
    let text1 = new createjs.Text(
        "Just because two things are correlated does not mean that one caused " +
        "the other. There may be other reasons for two variables to change " +
        "together. For example, both variables may be caused by a third variable.",
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 80,
        textAlign: "center", lineWidth: 1000, lineHeight: 30
    });

    let text2 = new createjs.Text(
        "For example, the relationship between how often students eat pizza " +
        "and grades could be because both eating pizza and grades are caused " +
        "by a third variable: how often they study.",
        "18px Arial",
        "#000"
    ).set({
        x: 110, y: 230, lineHeight: 25, lineWidth: 460,
    });

    let text3 = new createjs.Text(
        "Or, the relationship between ice cream sales and how often people go " +
        "swimming could be because both ice cream sales and swimming are " +
        "caused by a third variable: temperature.",
        "18px Arial",
        "#000"
    ).set({
        x: 650, y: 230, lineHeight: 25, lineWidth: 460
    });

    let image1 = new createjs.Bitmap(queue.getResult("causation_correlation")).set({
        x: 110, y: 330, scaleX: 0.25, scaleY: 0.25
    });

    let image2 = new createjs.Bitmap(queue.getResult("Picture_SunTempIcecream")).set({
        x: 660, y: 350, scaleX: 0.25, scaleY: 0.25
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    let iteration = 0;
    nextButton.on("click", e => {
        if (iteration == 0) {
            stage.addChild(text2, image1);
            stage.update();
        } else if (iteration == 1) {
            stage.addChild(text3, image2);
            stage.update();
        } else if (iteration == 2) {
            nextHypoTask();
        }
        iteration++;
    });
    
    stage.addChild(text1, backButton, nextButton);
    stage.update();
}

function definitionPage10() {
    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    let text1 = new createjs.Text(
        "For each phrase below, as one concept (underlined) increases, the " +
        "other (underlined) concept may increase or decrease. Select the " + 
        "type of relationship that best describes the following pairs of concepts:",
        "24px Arial",
        "#000"
    ).set({
        x: 150, y: 100, lineWidth: 900, lineHeight: 30
    });

    let text3 = new createjs.Text(
        "Reminder: Correlations and causes are different types of relationships.",
        "18px Arial",
        "#000"
    ).set({
        x: 150, y: 470, lineHeight: 25, lineWidth: 800
    });

    let text4 = new createjs.Text(
        "Just because two things are strongly related does not mean that one " +
        "caused the other. There may be other reasons for this correlation. " +
        "Both things may be caused by something else.",
        "18px Arial",
        "#000"
    ).set({
        x: 230, y: 520, lineHeight: 25, lineWidth: 800
    });

    let quiz = new createjs.DOMElement("quiz_overlay").set({
        x: 50 * 2 / PIXEL_RATIO, y: 50 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO, scaleY: 0.2 * 2 / PIXEL_RATIO,
    });
    quiz.htmlElement.style.display = "block";

    let quizQuestions = new createjs.DOMElement("quiz_questions_overlay").set({
        x: 225 * 2 / PIXEL_RATIO, y: 53 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO, scaleY: 0.2 * 2 / PIXEL_RATIO
    });
    quizQuestions.htmlElement.style.display = "block";
    
    function hideDOMOverlays() {
        quiz.htmlElement.style.display = "none";
        quizQuestions.htmlElement.style.display = "none";
    }
    let backButton = createBackButton();
    backButton.on("click", e => {
        hideDOMOverlays();
        prevHypoTask();
    });

    let verifyButton = createRightButton("Check");
    verifyButton.on("click", e => {
        // checking validity info for quiz questions
        let quizSelectors = document.getElementsByClassName("quiz_questions");
        for (let i = 0; i < quizSelectors.length; i++) {
            if (quizSelectors[i].value != QUIZ_ANSWERS[i]) {
                quizSelectors[i].setCustomValidity("Wrong Answer");
            } else {
                quizSelectors[i].setCustomValidity("");
                quizSelectors[i].style.color = "green";
            }
            // resetting validity
            quizSelectors[i].onchange = (() => {
                quizSelectors[i].setCustomValidity("");
                quizSelectors[i].style.color = "";
            });
        }
        // testing if all answers are correct
        if (quizQuestions.htmlElement.reportValidity()) {
            showSnackbar("Your answers are all correct. Click Next to move on.");
            // updateErrorField ("Your answers are all correct. Click Next to move on.",
            //     "16px Arial",
            //     "green");
            stage.removeChild(verifyButton);
            stage.addChild(nextButton);
        }
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        hideDOMOverlays();
        nextHypoTask();
    });
    
    stage.addChild(
        errorField,
        text1, text3, text4,
        quiz, quizQuestions,
        backButton, verifyButton
    );
    stage.update();
}

function instructionPage() {
    stage.removeAllChildren();
    let delayStarted = false;
    let delayAchieved = false;
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    let text = new createjs.Text("Instructions", "bold 22px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, y: (CANVAS_HEIGHT / 8) - 15, textAlign: "center"
    });

    let video = new createjs.DOMElement("instruction_video_overlay").set({
        x: 50 * 2 / PIXEL_RATIO, y: 30 * 2 / PIXEL_RATIO,
        scaleX: 0.25 * 2 / PIXEL_RATIO, scaleY: 0.25 * 2 / PIXEL_RATIO
    });
    video.htmlElement.style.display = "block";

    let backButton = createBackButton();
    backButton.on("click", e => {
        let vid = document.getElementById("instruction_video_overlay");
        vid.style.display = "none";
        vid.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        prevHypoTask();
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        if (!delayStarted) {
            showSnackbar("Please watch the tutorial video.");
            // updateErrorField(
            //     "Please watch the tutorial video.", "24px Arial", "#000"
            // );
            nextButton.disable();
            delayStarted = true;
            setTimeout(() => {
                delayAchieved = true;
                nextButton.enable();
            }, 20000);
        } else if (!delayAchieved) {
            console.log("still delaying");
        } else {
            let vid = document.getElementById("instruction_video_overlay");
            vid.style.display = "none";
            vid.contentWindow.postMessage(
                '{"event": "command", "func": "stopVideo", "args": ""}', '*'
            );
            nextHypoTask();
        }
    });

    let advice = new createjs.Text(
        "Please watch the video above for a brief tutorial.\nWe recommend you " +
        "watch the video in full screen.",
        "16px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT * 0.8, textAlign: "center"
    });

    stage.addChild(errorField, text, video, backButton, nextButton, advice);
    stage.update();
}

function backToYourRQ() {
    stage.removeAllChildren();
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 50, y: 50
    });

    let text1 = new createjs.Text(
        "Now that you've seen how to set up your hypothesis by linking " +
        "concepts, let's go back to your original research question...",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 175,
        textAlign: "center", lineHeight: 35, lineWidth: 700
    });

    let text2 = new createjs.Text(getRQ(), "bold 22px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, y: 300,
        textAlign: "center", lineHeight: 35, lineWidth: 700
    });
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());

    stage.addChild(image1, text1, text2, backButton, nextButton);
    stage.update();
}

function predictionPage1() {
    stage.removeAllChildren();

    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    let title = new createjs.Text(
        "Make your prediction:", "bold 22px Arial", "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 8, textAlign: "center"
    });

    let question = new createjs.Text(
        "As " + iv.toLowerCase() + " increases, what will happen to the " + 
        dv.toLowerCase() + "?", 
        "20px Arial", 
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, textAlign: "center", lineWidth: 800, lineHeight: 30
    });
    question.y = title.y + 40;

    let chosenDVDirection;
    let choice1 = new createjs.Text("Increase", "20px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, textAlign: "center"
    });
    choice1.y = question.y + 150;

    let choice2 = new createjs.Text("Decrease", "20px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, textAlign: "center"
    });
    choice2.y = choice1.y + 30;

    if (firstPredictionLocked) {
        // display message that they cannot change the value and
        // don't setup the click handlers
        showSnackbar(firstPredictionLockedReason + " You cannot change your prediction.");
        // updateErrorField(
        //     firstPredictionLockedReason + " You cannot change your prediction.",
        //     "22px Arial",
        //     '#000'
        // );
    } else {
        generateHitAreaCenterAlignment(choice1);
        choice1.on("click", e => {
            choice1.color = "#5588EE";
            choice2.color = "#000";
            chosenDVDirection = true;
            // console.log(choice1);
        });
        generateHitAreaCenterAlignment(choice2);
        choice2.on("click", e => {
            choice1.color = "#000";
            choice2.color = "#5588EE";
            chosenDVDirection = false;
        });
    }

    if (firstPredictionSaved) {
        // set chosenDVDirection to the value of firstPrediction and
        chosenDVDirection = firstPrediction;
        // set the choices to the appropriate colors based on the saved value
        if (firstPrediction) {
            choice1.color = "#5588EE";
            choice2.color = "#000";
        } else {
            choice1.color = "#000";
            choice2.color = "#5588EE";
        }
    }

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        if (chosenDVDirection === undefined) {
            showSnackbar('Please select either "Increase" or "Decrease".');
            // updateErrorField(
            //     'Please select either "Increase" or "Decrease".',
            //     "16px Arial",
            //     "#000"
            // );
        } else {
            firstPrediction = chosenDVDirection;
            logPrediction("firstPrediction", firstPrediction)
            .then(() => {
                firstPredictionSaved = true;
                nextHypoTask();
            })
            .catch(function (error) {
                console.error(error);
            });
        }
    });

    stage.addChild(
        errorField, title, question, choice1, choice2, backButton, nextButton
    );
    stage.update();
}

function brmInstructionPage() {
    stage.removeAllChildren();
    let text = new createjs.Text(
        "Background Research", "bold 22px Arial", "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 25, textAlign: "center"
    });

    let vid = new createjs.DOMElement("brm_instruction_overlay").set({
        x: 40 * 2 / PIXEL_RATIO, y: 15 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO, scaleY: 0.2 * 2 / PIXEL_RATIO
    });
    vid.htmlElement.style.display = "block";

    let backButton = createBackButton();
    backButton.on("click", e => {
        vid.htmlElement.style.display = "none";
        predictionPage1();
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        vid.htmlElement.style.display = "none";
        brmPage();
    });

    stage.addChild(text, vid, backButton, nextButton);
    stage.update();
}

function getImageForPrediction(prediction) {
    let image;
    if ("increase" === prediction) {
        image = new createjs.Bitmap(queue.getResult("Crys_increases")).set({
            scaleX: 0.4, scaleY: 0.4
        })
    } else {
        image = new createjs.Bitmap(queue.getResult("Crys_decreases")).set({
            scaleX: 0.5, scaleY: 0.5
        });
    }
    return image;
}

function graphPage1() {
    stage.removeAllChildren();
    
    let prediction = (firstPrediction) ? "increase" : "decrease";
    
    let text1 = new createjs.Text(
        "You predicted that as the initial water temperature increases, the " +
        "amount of crystal growth on the string will " + prediction + ".",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 75,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });

    let image = getImageForPrediction(prediction);
    image.set({x: 400, y: 150});
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());

    stage.addChild(text1, image, backButton, nextButton);
    stage.update();
}

function graphPage2() {
    stage.removeAllChildren();

    let prediction = (firstPrediction) ? "increase" : "decrease";
    
    let image = getImageForPrediction(prediction);
    image.set({x: 400, y: 150});

    let text1 = new createjs.Text(
        'Your prediction is represented as: ', "22px Arial", "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 475,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });
    
    let ivBubble = createFixedBubble(
        IV_X, IV_Y, capitalizeFirstLetter(iv), "#99bbff", "increase", false
    );
    let dvBubble = createFixedBubble(
        DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", prediction, true
    );

    let arrow = createUnlabeledArrow(
        ivBubble.x + BUBBLE_WIDTH / 2,
        ivBubble.y,
        dvBubble.x - BUBBLE_WIDTH / 2,
        dvBubble.y
    );
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(
        image, text1, ivBubble, dvBubble, arrow, backButton, nextButton
    );
    stage.update();
}

function biDirInstructionPage1() {
    stage.removeAllChildren();
    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";

    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 50, y: 50
    });

    let text1 = new createjs.Text(
        "Now, let's say that another student made a prediction in the opposite " +
        "direction from your prediction...",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 150,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });

    let image2 = getImageForPrediction(oppositePrediction);
    image2.set({x: 400, y: 250});

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());

    stage.addChild(image1, text1, image2, backButton, nextButton);
    stage.update();
}

function biDirInstructionPage2() {
    stage.removeAllChildren();
    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";
    
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 50, y: 50
    });

    let text1 = new createjs.Text(
        "They predicted that as initial water temperature increases, the " +
        "amount of crystal growth would " + oppositePrediction + ".",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 150,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });
    
    let image2 = getImageForPrediction(oppositePrediction);
    image2.set({x: 400, y: 250});
    
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(image1, text1, image2, backButton, nextButton);
    stage.update();
}

function biDirInstructionPage3() {
    stage.removeAllChildren();

    let oppositePrediction = (firstPrediction) ? "decrease" : "increase";
    
    let image1 = new createjs.Bitmap(queue.getResult("TeacherPointing")).set({
        x: 50, y: 50
    });

    let text1 = new createjs.Text(
        "Think about how this prediction might be true for a minute or two.",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 150,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });

    let text2 = new createjs.Text(
        "Then, try to set up a new hypothesis for this new prediction.",
        "22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 200,
        textAlign: "center", lineWidth: 700, lineHeight: 35
    });

    let image2 = getImageForPrediction(oppositePrediction);
    image2.set({x: 400, y: 250});

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());

    stage.addChild(image1, text1, text2, image2, backButton, nextButton);
    stage.update();
}

function brmPage() {
    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    let brmBtnClicked = false;
    let text = new createjs.Text(
        'Click the "Go to Background Research website" button to go to the ' +
        'Background Research Module. The Background Research Module is where ' +
        'you will be conducting your research. There is no time limit to this ' +
        'task. When you are finished with your research, **come back to this ' +
        'page (the "ISP Tutor" tab)**. Then click "Next" below to move on to ' +
        'the next page, where you will make your final hypothesis.',
        "24px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: 100,
        textAlign: "center", lineWidth: 800, lineHeight: 30
    });

    let brmButton = createExtraLargeButton(CANVAS_WIDTH * .5,
                                           CANVAS_HEIGHT * .5 + 50,
                                           "Go to\nBackground\nResearch\nwebsite",
                                           "#3769C2",
                                           BUTTON_WIDTH * 3,
                                           BUTTON_HEIGHT * 5,
                                           "bold");
    brmButton.on("click", e => {
        // switched from https://go.isptutor.org to window.location.origin
        // so that it will work both from production website and dev environment
        // open("https://go.isptutor.org/brm/home/index.html", "_blank");
        open(window.location.origin + "/brm/home/index.html", "_blank");
        localStorage.setItem("isptutor_brmStartTime", Date.now());
        localStorage.setItem("isptutor_rq", getRQ());
        setTimeout(() => {
            brmBtnClicked = true;
            nextButton.enable();
        }, 20000); 
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        if (!brmBtnClicked) {
            showSnackbar("Please click on the 'Go to Background Research website' button");
            // updateErrorField(
            //     "Please click on the 'Go to Background Research website' button",
            //     "bold 22px Arial",
            //     "#000"
            // );
            nextButton.disable();
        } else {
            nextHypoTask();
        }
    });

    stage.addChild(errorField, text, brmButton, backButton, nextButton);
    stage.update();
}

function predictionPage2() {
    stage.removeAllChildren();
    let secondPredictionSet = secondPrediction !== null;
    // console.log(`predictionPage2:
    // secondPrediction: ${secondPrediction}
    // secondPredictionSet: ${secondPredictionSet}
    // finalHypoLocked: ${finalHypoLocked}
    // `);
    
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    let title = new createjs.Text(
        "What do you think now (that you've finished your research in the " +
        "Background Research website)?",
        "bold 22px Arial",
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 8, textAlign: "center"
    });

    let question = new createjs.Text(
        "As " + iv.toLowerCase() + " increases, what will happen to the " + 
        dv.toLowerCase() + "?", 
        "20px Arial", 
        "#000"
    ).set({
        x: CANVAS_WIDTH / 2, y: title.y + 40,
        textAlign: "center", lineWidth: 800, lineHeight: 30
    });

    let chosenDVDirection;
    let choice1 = new createjs.Text("Increase", "20px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, y: question.y + 150, textAlign: "center"
    });

    let choice2 = new createjs.Text("Decrease", "20px Arial", "#000").set({
        x: CANVAS_WIDTH / 2, y: choice1.y + 30, textAlign: "center"
    });

    function setIncreaseColors() {
        choice1.color = "#5588EE";
        choice2.color = "#000";
    }

    function setDecreaseColors() {
        choice1.color = "#000";
        choice2.color = "#5588EE";
    }

    if (finalHypoLocked) {
        // display message and don't add event listeners
        showSnackbar("You have already saved your hypothesis and cannot change your prediction.");
        // updateErrorField(
        //     "You have already saved your hypothesis and cannot change your prediction.",
        //     "22px Arial",
        //     "#000"
        // );
    } else {
        generateHitAreaCenterAlignment(choice1);
        choice1.on("click", e => {
            setIncreaseColors();
            chosenDVDirection = "increase";
        });
        generateHitAreaCenterAlignment(choice2);
        choice2.on("click", e => {
            setDecreaseColors();
            chosenDVDirection = "decrease";
        });
    }
    if (secondPredictionSet) {
        // set chosenDVDirection to the value of secondPrediction and
        chosenDVDirection = secondPrediction;
        // set the choices to the appropriate colors based on the saved value  
        if ("increase" === secondPrediction) {
            setIncreaseColors();
        } else {
            setDecreaseColors();
        }
    }
    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => {
        if (chosenDVDirection === undefined) {
            showSnackbar('Please select either "Increase" or "Decrease".');
            // updateErrorField(
            //     'Please select either "Increase" or "Decrease".',
            //     "16px Arial",
            //     "#000"
            // );
        } else {
            secondPrediction = chosenDVDirection;
            logPrediction("secondPrediction", secondPrediction)
            .then(() => {
                if (!initialHypoLocked) {
                    initialHypoLocked = true;
                    initialHypoLockedReason = "You have already saved your second prediction.";
                }
                nextHypoTask();
            })
            .catch(function(error) {
                console.error(error);
            });
        }   
    });
    
    stage.addChild(
        errorField, title, question, choice1, choice2, backButton, nextButton
    );
    stage.update();
}

function fetchPrevSavedHypo(whichHypo) {
    let hypoData = null;
    return db.getUserData()
    .then((data) => {
        let hypoData = data[`${whichHypo}Hypo`];
        return hypoData;
    })
    .catch(function (error) {
        console.log(error);
        return hypoData;
    });
}

function initialConceptMap() {
    conceptMapPage3("initial");
}

function oppositeDirectionConceptMap() {
    conceptMapPage3("opposite");
}

function finalConceptMap() {
    conceptMapPage3("final");
}

function completePage() {
    getEleById('completion-overlay').style.display = "block";
    db.saveValue("currTutorNdx", 2)
    .catch(function(error) {
        console.error(error);
    });
}

function initialConceptMapPlaceholder() {
    stage.removeAllChildren();
    let image1 = new createjs.Bitmap(queue.getResult("cptMapPlaceholder")).set({
        x: 50, y: 20, scaleX: 0.2, scaleY: 0.2
    });

    let backButton = createBackButton();
    backButton.on("click", e => prevHypoTask());
    
    let nextButton = createNextButton();
    nextButton.on("click", e => nextHypoTask());
    
    stage.addChild(image1, backButton, nextButton);
}

function conceptMapPage2(whichHypo) {
    // reset steps to empty list so:
    // 1) steps are kept in sync with nodes/arrows if the student returns from prev page
    // 2) steps for subsequent concept maps aren't merely appended
    steps = [];
    let hypoSaved = false;
    let prediction;
    if ("initial" === whichHypo) {
        prediction = firstPrediction;
    } else if ("opposite" === whichHypo) {
        prediction = !firstPrediction;
    } else if ("final" === whichHypo) {
        prediction = secondPrediction;
    } else {
        console.error("invalid concept map version: ", whichHypo);
        return;
    }
    let predictionStr = boolPredictionToString(prediction);

    stage.removeAllChildren();
    // add error field
    errorField = new createjs.Container();
    errorField.y = 10;

    // add text field
    textField = new createjs.Container();
    textField.x = CANVAS_WIDTH / 8 - 100;
    textField.y = CANVAS_HEIGHT / 16;

    let title = new createjs.Text(
        "Concepts (Note: Na+ is sodium and Cl- is chlorine, which make up salt (NaCl))",
        "bold 16px Arial",
        "#000"
    ).set({
        x: (CANVAS_WIDTH / 2) - textField.x - 100, y: 20, textAlign: "center"
    });

    let fieldBackground = new createjs.Shape();
    fieldBackground
        .graphics
        .setStrokeStyle(1)
        .beginStroke("#000")
        .drawRect(0, 0, CANVAS_WIDTH - (2 * textField.x) - 200, CANVAS_HEIGHT / 4 + 25);
    textField.addChild(title, fieldBackground);

    // increment for staggered bubbles
    let increment = 0;
    let buttonSize = 25;
    // this is to make the concepts panel
    let leftMargin = 30;
    let topMargin = 60;
    let rightMargin = 20 + buttonSize;
    let spacing = 35;
    for (let i = 0; i < nodes.length; i++) {
        let nodeText = new createjs.Text(nodes[i], "16px Arial", "#000");
        let plusButton;
        let xButton;
        if (i < 4) {
            nodeText.x = leftMargin;
            nodeText.y = topMargin + i * spacing;
            plusButton = createPlusButton(
                CANVAS_WIDTH * (3 / 8) - rightMargin - buttonSize - 1,
                nodeText.y - 5,
                buttonSize
            );
            xButton = createXButton(CANVAS_WIDTH * (3 / 8) - rightMargin,
                                    nodeText.y - 5,
                                    buttonSize);
        } else {
            nodeText.x = CANVAS_WIDTH / 2 - CANVAS_WIDTH / 8 + leftMargin;
            nodeText.y = topMargin + (i - 4) * spacing;
            plusButton = createPlusButton(
                CANVAS_WIDTH * (6 / 8) - rightMargin - buttonSize - 1,
                nodeText.y - 5,
                buttonSize
            );
            xButton = createXButton(CANVAS_WIDTH * (6 / 8) - rightMargin,
                                    nodeText.y - 5,
                                    buttonSize);
        }
        // fancy function closure trick below
        let storedBubble = null;
        plusButton.on("click", e => {
            if (storedBubble == null) {
                let bubble = createBubble(CANVAS_WIDTH / 2 + increment,
                                          CANVAS_HEIGHT / 2 + increment,
                                          nodes[i],
                                          "#4286f4",
                                          "none");
                bubble.idx = i;
                steps.push({
                    action: "NODE_CREATE",
                    object: nodes[bubble.idx],
                    index: bubble.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
                storedBubble = bubble;
                stage.addChild(bubble);
                increment += 5;
            }
        });
        xButton.on("click", e => {
            if (storedBubble != null) {
                for (let child of storedBubble.children) {
                    if (child.name == "inConnector" || child.name == "outConnector") {
                        removeArrowAndLabel(child.arrow);
                    }
                }
                stage.removeChild(storedBubble);
                steps.push({
                    action: "NODE_DELETE",
                    object: nodes[storedBubble.idx],
                    index: storedBubble.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
                storedBubble = null;
            }
        });
        textField.addChild(nodeText, plusButton, xButton);
    }

    let rewatchVideoButton = createTextWidthButton(
        CANVAS_WIDTH - 150, CANVAS_HEIGHT / 11, "Re-watch how-to video", "#2858a9"
    );
    rewatchVideoButton.on("click", e => {
        open(window.location.origin + "/cptMapInstructionalVideo.html", "_blank");
    });

    // add notebook (scrolling textarea)
    let notepad = new createjs.DOMElement("concept_map_notepad_overlay").set({
        x: (CANVAS_WIDTH / 5) * 2 / PIXEL_RATIO,
        y: 25 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO,
        scaleY: 0.2 * 2 / PIXEL_RATIO
    });
    notepad.htmlElement.style.display = "block";
    // clear any notes any previous arrivals on this page
    getEleById("notepad_notes").innerHTML = "";

    // adding IV bubble, DV bubble, and arrow
    let ivBubble = createFixedBubble(
        IV_X, IV_Y, capitalizeFirstLetter(iv), "#99bbff", "increase", false
    );
    let dvBubble = createFixedBubble(
        DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", predictionStr, true
    );
    let arrow = createUnlabeledArrow(ivBubble.x + BUBBLE_WIDTH / 2,
                                     ivBubble.y,
                                     dvBubble.x - BUBBLE_WIDTH / 2,
                                     dvBubble.y);

    // save Warning popup
    let saveWarning = new createjs.DOMElement("save_concept_map_overlay").set({
        x: 110 * 2 / PIXEL_RATIO, y: 70 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO, scaleY: 0.2 * 2 / PIXEL_RATIO
    });
    let cancelSaveBtn = getEleById("cpt_map_cancel_save");
    let saveBtn = getEleById("cpt_map_save");
    
    function cancelSaveHandler() {
        saveWarning.htmlElement.style.display = "none";
    }

    function saveHandler() {
        saveWarning.htmlElement.style.display = "none";
        logData2(ivBubble, whichHypo);
        hypoSaved = true;
        if ("initial" === whichHypo) {
            firstPredictionLocked = true;
            firstPredictionLockedReason = "You have already saved your hypothesis."
        } else if ("final" === whichHypo) {
            secondPredictionLocked = true;
            secondPredictionLockedReason = "You have already saved your hypothesis."
        }
        stage.removeChild(verifyButton);
        stage.addChild(nextButton);
        showSnackbar("Please draw your concept map in your notebook before continuing");
        // updateErrorField(
        //     "Please draw your concept map in your notebook before continuing",
        //     "bold 22px Arial",
        //     "#FFA500"
        // );
        stage.update();
    }
    
    // back button leave page warning popup
    let leavePageWarning = new createjs.DOMElement("leave_concept_map_overlay").set({
        x: 110 * 2 / PIXEL_RATIO, y: 70 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO, scaleY: 0.2 * 2 / PIXEL_RATIO
    });

    let cancelLeavePageBtn = getEleById("cpt_map_cancel_leave_page");
    let leavePageBtn = getEleById("cpt_map_leave_page");

    function cancelLeavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
    }

    function leavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
        clearDOMEventListeners();
        prevHypoTask();
    }

    cancelSaveBtn.addEventListener('click', cancelSaveHandler);
    saveBtn.addEventListener("click", saveHandler);
    cancelLeavePageBtn.addEventListener('click', cancelLeavePageHandler);
    leavePageBtn.addEventListener('click', leavePageHandler);

    function clearDOMEventListeners() {
        saveBtn.removeEventListener("click", saveHandler);
        cancelSaveBtn.removeEventListener("click", cancelSaveHandler);
        leavePageBtn.removeEventListener("click", leavePageHandler);
        cancelLeavePageBtn.removeEventListener("click", cancelLeavePageHandler);
    }

    let backButton = createBackButton();
    backButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        if (hypoSaved) {
            clearDOMEventListeners();
            prevHypoTask();
        } else {
            leavePageWarning.htmlElement.style.display = "block";
        }
    });

    // verify button
    let verifyButton = createRightButton("Check");
    verifyButton.on("click", e => {
        if (verifyConceptMap(ivBubble)) {
            // if everything is ok, show the save warning popup
            saveWarning.htmlElement.style.display = "block";
        }
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        clearDOMEventListeners();
        nextHypoTask();
    });

    stage.addChild(
        errorField, textField, rewatchVideoButton, notepad,
        ivBubble, dvBubble, arrow,
        backButton, verifyButton,
        saveWarning, leavePageWarning
    );

    // stage handlers
    stage.on("stagemouseup", removePanel);
    stage.on("stagemouseup", removeErrorField);
    stage.update();

    fetchPrevSavedHypo(whichHypo)
    .then((hypoData) => {
        if (null !== hypoData) {
            hypoSaved = true;
            stage.removeChild(verifyButton);
            stage.addChild(nextButton);
            stage.update();
            showSnackbar("Your hypothesis has already been saved. You can not make any changes.");
            // updateErrorField(
            //     "Your hypothesis has already been saved. You can not make any changes.",
            //     "22px Arial",
            //     "#000"
            // );
            // rehydrateHypothesis(hypoData, ivBubble, dvBubble);
        }
    })
    .catch(function (error) {
        console.error(error);
    });
}

function calcBounds(ctr) {
    return {
        left: ctr.x - (CONNECTOR_RADIUS / 2) - 2,
        right: ctr.x + (CONNECTOR_RADIUS / 2) + 2,
        top: ctr.y - (CONNECTOR_RADIUS / 2) - 2,
        bottom: ctr.y + (CONNECTOR_RADIUS / 2) + 2
    };
}

function withinBounds(bounds, x, y) {
    let retVal = false;
    // console.log(`testing if ${x},${y} is within ${JSON.stringify(bounds)} `);
    if (x >= bounds.left) {
        console.log('x >= bounds.left');
        if (x <= bounds.right) {
            console.log(' x <= bounds.right');
            if (y >= bounds.top) {
                console.log('y >= bounds.top');
                if (y <= bounds.bottom) {
                    console.log('y <= bounds.bottom');
                    retVal = true;
                }
            }
        }
    }
    // return ( x >= ctr.left && x <= ctr.right && y >= ctr.top && y <= ctr.bottom);
    return retVal;
}

function dumpState(stge, stepz, nodez, bubblez) {
    // arrows: $ {
    //     JSON.stringify(arrowz, null, 4)
    // }
    let names = stge.children.map((child) => child.name);
    // console.log(names);
    let allBubbles = [];
    stge.children.forEach((child) => {
        if (child.name === "bubble" || child.name === "fixed bubble") {
            let tmp = {
                type: child.name,
                label: child.text,
                x: child.x,
                y: child.y
            };
            if (child.topConnector) {
                let connectorY = tmp.y - (BUBBLE_HEIGHT / 2);                
                if (child.inConnector) {
                    tmp.inConnector = {
                        x: tmp.x,
                        y: connectorY,
                    };
                    tmp.inConnector.bounds = calcBounds(tmp.inConnector);
                    // if (child.inConnector.arrow) {
                    //     tmp.inConnector.arrow = child.inConnector.arrow;
                    // }
                }
                if (child.outConnector) {
                    tmp.outConnector = {
                        x: tmp.x,
                        y: connectorY                    };
                    tmp.outConnector.bounds = calcBounds(tmp.outConnector);
                    // if (child.outConnector.arrow) {
                    //     tmp.outConnector.arrow = child.outConnector.arrow;
                    // }
                }
            } else {
                let inX = tmp.x - (BUBBLE_WIDTH / 2);
                let outX = tmp.x + (BUBBLE_HEIGHT/ 2);
                tmp.inConnector = {
                    x: inX,
                    y: tmp.y
                };
                tmp.inConnector.bounds = calcBounds(tmp.inConnector);
                // if (child.inConnector.arrow) {
                //     tmp.inConnector.arrow = child.inConnector.arrow;
                // }
                tmp.outConnector = {
                    x: outX,
                    y: tmp.y
                };
                tmp.outConnector.bounds = calcBounds(tmp.outConnector);
                // if (child.outConnector.arrow) {
                //     tmp.outConnector.arrow = child.outConnector.arrow;
                // }
            }
            allBubbles.push(tmp);
        }
    });
    // console.log(allBubbles);
    let arrows = [];
    stge.children.forEach((child) => {
        if (child.name === "arrow") {
            let arrow = {
                name: "arrow",
                label: child.label.text,
                start: {
                    x: child.x,
                    y: child.y
                },
                end: {
                    x: child.endX,
                    y: child.endY
                }
            };
            
            for (let i=0; i<allBubbles.length; i++) {
                let bub = allBubbles[i];
                if (bub.outConnector) {
                    if (withinBounds(bub.outConnector.bounds,
                                    arrow.start.x,
                                    arrow.start.y)) {
                        console.log(`within bounds of ${bub.label} outConnector`);                 
                        arrow["from"] = bub.label;
                    }
                }
                if (bub.inConnector) {
                    if (withinBounds(bub.inConnector.bounds,
                                    arrow.end.x,
                                    arrow.end.y)) {
                        console.log(`within bounds of ${bub.label} inConnector`);
                        arrow["to"] = bub.label;
                    }
                }
            }
            arrows.push(arrow);
        }
    });
    let bubs = bubblez.map((bub) => bub.text);
    console.log(`
    bubbles: ${JSON.stringify(allBubbles, null, 4)}
    arrows: ${JSON.stringify(arrows, null, 4)}
    `);
    // bubbles: $ {
    //     JSON.stringify(bubs, null, 0)
    // }

    // nodes: $ {
    //     JSON.stringify(nodez, null, 0)
    // }

    // steps: $ {
    //     JSON.stringify(stepz, null, 4)
    // }

    // console.log(arrows);
}

function conceptMapPage3(whichHypo)
{
    // reset steps to empty list so:
    // 1) steps are kept in sync with nodes/arrows if the student returns
    //    from prev page
    // 2) steps for subsequent concept maps aren't merely appended
    steps = [];
    let hypoSaved = false;
    let prediction;
    if ("initial" === whichHypo) {
        prediction = firstPrediction;
    } else if ("opposite" === whichHypo) {
        prediction = !firstPrediction;
    } else if ("final" === whichHypo) {
        prediction = secondPrediction;
    } else {
        console.error("invalid concept map version: ", whichHypo);
        return;
    }
    let predictionStr = boolPredictionToString(prediction);

    stage.removeAllChildren();
    errorField = createErrorField();
    errorField.y = 10;

    let currentBubbles = [];
    let remindersTxt = new createjs.Text(
        "NOTE: ONLY include the concepts which you think are MOST closely related " +
        "to each other in your concept map.\n" +
        "You may only need to add one or two concepts to explain the " +
        "relationship between the independent and dependent variables.",
        "16px Arial",
        "#000"
    ).set({
        x: 10, y: 75, textAlign: "left", lineHeight: 25 
    });
    let cptsButton = createTextWidthButton(CANVAS_WIDTH / 2,
                                           50,
                                           " Select a Concept to Add ",
                                           "#2858a9");
    function selectConceptHandler(value) {
        let bubble = createDeletableBubble(CANVAS_WIDTH / 2,
                                           CANVAS_HEIGHT / 2,
                                           value,
                                           "#4286f4",
                                           "none");
        bubble.idx = nodes.indexOf(value);
        steps.push({
            action: "NODE_CREATE",
            object: nodes[bubble.idx],
            index: bubble.idx,
            info: "N/A",
            timestamp: (new Date()).toLocaleDateString()
        });
        stage.removeChild(nextButton);
        stage.addChild(verifyButton);
        bubble.closeButton.on("click", e => {
            for (let child of bubble.children) {
                if ((child.name == "inConnector") || 
                    (child.name == "outConnector")) {
                    removeArrowAndLabel(child.arrow);
                }
            }
            stage.removeChild(bubble);
            steps.push({
                action: "NODE_DELETE",
                object: nodes[bubble.idx],
                index: bubble.idx,
                info: "N/A",
                timestamp: (new Date()).toLocaleString()
            });
            let tmp = currentBubbles.find((ele) => ele === bubble);
            if (tmp) {
                currentBubbles = currentBubbles.filter((ele) => ele !== tmp);
            }
            dumpState(stage, steps, nodes, currentBubbles);
        });
        currentBubbles.push(bubble);
        stage.addChild(bubble);
        dumpState(stage, steps, nodes, currentBubbles);
    }
    
    cptsButton.on("click", e => {
        panel = createConceptsPanel(cptsButton.x,
                                    cptsButton.y,
                                    nodes,
                                    currentBubbles,
                                    selectConceptHandler);
        stage.addChild(panel);
    });

    let rewatchVideoButton = createTextWidthButton(
        CANVAS_WIDTH - 200, 50, "Re-watch how-to video", "#2858a9"
    );
    rewatchVideoButton.on("click", e => {
        open(window.location.origin + "/cptMapInstructionalVideo.html", "_blank");
    });

    // add notebook (scrolling textarea)
    let notepad = new createjs.DOMElement("concept_map_notepad_overlay").set({
        x: 230 * (2 / PIXEL_RATIO),
        y: 20 * (2 / PIXEL_RATIO),
        scaleX: .2 * (2 / PIXEL_RATIO),
        scaleY: .2 * (2 / PIXEL_RATIO),
        name: "notepad"
    });
    notepad.htmlElement.style.display = "block";
    // clear any notes any previous arrivals on this page
    getEleById("notepad_notes").innerHTML = "";

    let ivBubble = createFixedBubble(
        IV_X, IV_Y, capitalizeFirstLetter(iv), "#99bbff", "increase", false
    );
    let dvBubble = createFixedBubble(
        DV_X, DV_Y, capitalizeFirstLetter(dvabb), "#99bbff", predictionStr, true
    );
    let arrow = createUnlabeledArrow(ivBubble.x + BUBBLE_WIDTH / 2,
                                     ivBubble.y,
                                     dvBubble.x - BUBBLE_WIDTH / 2,
                                     dvBubble.y);

    // save Warning popup
    let saveWarning = new createjs.DOMElement("save_concept_map_overlay").set({
        x: 110 * 2 / PIXEL_RATIO,
        y: 70 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO,
        scaleY: 0.2 * 2 / PIXEL_RATIO
    });
    let cancelSaveBtn = getEleById("cpt_map_cancel_save");
    let saveBtn = getEleById("cpt_map_save");

    function cancelSaveHandler() {
        saveWarning.htmlElement.style.display = "none";
    }

    function saveHandler() {
        saveWarning.htmlElement.style.display = "none";
        logData2(ivBubble, whichHypo);
        hypoSaved = true;
        if ("initial" === whichHypo) {
            firstPredictionLocked = true;
            firstPredictionLockedReason = "You have already saved your hypothesis."
        } else if ("final" === whichHypo) {
            secondPredictionLocked = true;
            secondPredictionLockedReason = "You have already saved your hypothesis."
        }
        stage.removeChild(verifyButton);
        stage.addChild(nextButton);
        showSnackbar("Please draw your concept map in your notebook before continuing");
        // updateErrorField(
        //     "Please draw your concept map in your notebook before continuing",
        //     "bold 22px Arial",
        //     "#FFA500"
        // );
        stage.update();
    }

    // back button leave page warning popup
    let leavePageWarning = new createjs.DOMElement("leave_concept_map_overlay").set({
        x: 110 * 2 / PIXEL_RATIO,
        y: 70 * 2 / PIXEL_RATIO,
        scaleX: 0.2 * 2 / PIXEL_RATIO,
        scaleY: 0.2 * 2 / PIXEL_RATIO
    });

    let cancelLeavePageBtn = getEleById("cpt_map_cancel_leave_page");
    let leavePageBtn = getEleById("cpt_map_leave_page");

    function cancelLeavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
    }

    function leavePageHandler() {
        leavePageWarning.htmlElement.style.display = "none";
        clearDOMEventListeners();
        prevHypoTask();
    }

    cancelSaveBtn.addEventListener('click', cancelSaveHandler);
    saveBtn.addEventListener("click", saveHandler);
    cancelLeavePageBtn.addEventListener('click', cancelLeavePageHandler);
    leavePageBtn.addEventListener('click', leavePageHandler);

    function clearDOMEventListeners() {
        saveBtn.removeEventListener("click", saveHandler);
        cancelSaveBtn.removeEventListener("click", cancelSaveHandler);
        leavePageBtn.removeEventListener("click", leavePageHandler);
        cancelLeavePageBtn.removeEventListener("click", cancelLeavePageHandler);
    }

    let backButton = createBackButton();
    backButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        if (hypoSaved) {
            clearDOMEventListeners();
            prevHypoTask();
        } else {
            leavePageWarning.htmlElement.style.display = "block";
        }
    });

    let verifyButton = createRightButton("Check", "#2858a9");
    verifyButton.on("click", e => {
        if (verifyConceptMap(ivBubble)) {
            // if everything is ok, show the save warning popup
            saveWarning.htmlElement.style.display = "block";
            // console.log("verified");
            // stage.removeChild(verifyButton);
            // stage.addChild(nextButton);
        } else {
            console.log("verification failed");
        }
    });

    let nextButton = createNextButton();
    nextButton.on("click", e => {
        notepad.htmlElement.style.display = "none";
        clearDOMEventListeners();
        nextHypoTask();
    });

    stage.addChild(
        errorField,
        remindersTxt,
        cptsButton, rewatchVideoButton, notepad,
        ivBubble, dvBubble, arrow,
        backButton, verifyButton,
        saveWarning, leavePageWarning
    );
    stage.on("stagemouseup", removePanel);
    stage.on("stagemouseup", removeErrorField);
    stage.update();

    fetchPrevSavedHypo(whichHypo)
    .then((hypoData) => {
        if (null !== hypoData) {
            hypoSaved = true;
            stage.removeChild(verifyButton);
            stage.addChild(nextButton);
            stage.update();
            showSnackbar("Your hypothesis has already been saved. You can not make any changes.");
            // updateErrorField(
            //     "Your hypothesis has already been saved. You can not make any changes.",
            //     "22px Arial",
            //     "#000"
            // );
            // rehydrateHypothesis(hypoData, ivBubble, dvBubble);
        }
    })
    .catch(function (error) {
        console.error(error);
    });
}


// FIXME: this doesn't work
// rebuilds the concept map'a nodes, directions, arrows, and labels from what is 
// stored in firebase (hypoData).  requires ivBubble and dvBubble as these nodes aren't
// saved in the db
function rehydrateHypothesis(hypoData, ivBubble, dvBubble) {
    // showSnackbar('Changes to previously saved hypothesis will not be saved.');
    // console.log(hypoData);
    let nodeOrder = hypoData.nodes.slice(0, -1);
    // let directions = hypoData.directions.slice(0, -1);
    // let arrowLabels = hypoData.arrowLabels;
    let steps = hypoData.steps;
    let bubbles = [ivBubble, dvBubble];
    let nodez = [];
    let arrows = [];
    steps.forEach((step) => {
        let nodeText = null;
        let nd = null;
        let from_, to_;
        let index;
        let tmp;
        switch (step.action) {
            case "NODE_CREATE":
                nodez.push({
                    'text': step.object,
                    'index': step.index,
                    'direction': step.info
                });
                break;
            case "NODE_DELETE":
                // remove the node
                nodeText = step.object;
                nodez = nodez.filter(x => x.text !== nodeText);
                // delete all arrows leading in or out from this now non-existant node
                arrows = arrows.filter(x => x.from === nodeText);
                arrows = arrows.filter(x => x.to === nodeText);
                break;
            case "NODE_CHANGE_DIRECTION":
                nd = nodez.find(x => x.text === step.object);
                if (undefined !== nd) {
                    nd.direction = step.info;
                }
                break;
            case "ARROW_CREATE":
                [from_, to_] = step.object.split('::')
                index = step.index;
                arrows.push({
                    'object': step.object,
                    'from': from_,
                    'to': to_,
                    'index': index,
                    'label': null
                });
                break;
            case "ARROW_DELETE":
                arrows = arrows.filter(x => x.object !== step.object);
                break;
            case "ARROW_CHANGE_LABEL":
                [from_, to_] = step.object.split('::');
                tmp = arrows.find(x => x.from === from_ && x.to === to_);
                if (undefined !== tmp) {
                    let _label = step.info;
                    _label = _label.replace('Cause:', 'Cause:\n');
                    tmp.label = _label;
                }
                break;
            default:
                console.error('unknown step action:', step.action);
                break;
        }
    });
    // console.log(steps);
    // console.log(nodez);
    console.log(arrows);
    let sortedNodes = [];
    nodeOrder.forEach((txt) => {
        let _cn = nodez.find(x => x.text === txt);
        sortedNodes.push(_cn);
    });
    let labels = sortedNodes.map(x => x.text);
    let directions = sortedNodes.map(x => x.direction);
    let tmp = createEvenlySpacedBubbles2(
        300, CANVAS_WIDTH - 300, 400, labels, directions
    );
    tmp.forEach((bubble) => {
        bubbles.push(bubble);
    });
    let bubblesInfo = getBubblesInfo(bubbles);
    console.log(bubblesInfo);
    arrows.forEach((arrow) => {
        let _from = arrow.from;
        let _to = arrow.to;
        let label = arrow.label;
        let _start = bubblesInfo[_from].out;
        let _end = bubblesInfo[_to].in;
        let arr = createArrow(_start.x, _start.y, _end.x, _end.y, label);
        stage.addChild(arr);
    });
    stage.update();
}

function getBubblesInfo(bubbles) {
    console.log('length:', bubbles.length, ' bubbles:', bubbles);
    let info = {};
    bubbles.forEach((bubble) => {
        let tmp = {
            x: bubble.x,
            y: bubble.y,
            text: bubble.text
        }
        let haveIn = Boolean(bubble.inConnector);
        let haveOut = Boolean(bubble.outConnector);
        let sideConnectors = (haveIn && haveOut);
        let topConnectors = (!sideConnectors && (haveIn || haveOut));
        // inConnector and outConnector may not exist in iv and dv bubbles
        // also their x, y cooridates are relative to the bubbles x,y
        // so I'm adding the x,y to them
        if (haveIn) {
            if (sideConnectors) {
                // left connector
                tmp.in = {
                    x: tmp.x - (BUBBLE_WIDTH / 2),
                    y: tmp.y
                };
            } else if (topConnectors) {
                //top connector
                tmp.in = {
                    x: tmp.x,
                    y: tmp.y - (BUBBLE_HEIGHT / 2)
                };
            }
        }
        if (haveOut) {
            if (sideConnectors) {
                // right connector
                tmp.out = {
                    x: tmp.x + (BUBBLE_WIDTH / 2),
                    y: tmp.y
                };
            } else if (topConnectors) {
                // top connector
                tmp.out = {
                    x: tmp.x,
                    y: tmp.y - (BUBBLE_HEIGHT / 2)
                };
            }
        }
        info[tmp.text] = tmp;

    });
    return info;
}

// random utility function to capitalize first letter and make rest lower case
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// ============================================================================
// ============================= Handle Overs =================================
// ============================================================================

function handleMouseOver(event) {
    if (event.type == "mouseover") {
        event.target.alpha = .5;
        somethingHighlighted = true;
    } else {
        event.target.alpha = 1;
        somethingHighlighted = false;
    }
}

function handlePanelOver(event) {
    if (event.type === "mouseover") {
        event.target.alpha = .5;
    } else {
        event.target.alpha = 1;
    }

}

function handleConnectorOver(event) {
    if (event.type === "mouseover") {
        event.target.alpha = .5;
        connectorOver = event.target;
        console.log("connOver:");
        console.log(connectorOver);
    } else {
        event.target.alpha = 1;
        connectorOver = null;
    }
}

// =============================================================================
// ============================= Handle Clicks =================================
// =============================================================================

function handleClick(event) {
    alert(event.target.text);
}

function handleArrowClick(event) {
    console.log(event.target);
    panel = createDeletePanel(event.stageX / scalingRatio,
                              event.stageY / scalingRatio,
                              event.target.parent);
    stage.addChild(panel)
    stage.update();
}

function handleDirectionClick(event) {
    console.log(event.target);
    panel = createDirectionPanel(event.stageX / scalingRatio,
                                 event.stageY / scalingRatio,
                                 event.target);
    stage.addChild(panel);
    stage.update();

}

function handleExplanationClick(event) {
    panel = createExplanationPanel(event.stageX / scalingRatio,
                                   event.stageY / scalingRatio,
                                   event.target.parent.label);
    stage.addChild(panel);
    stage.update();
}

function handleCauseClick(x, y, target) {
    panel = createCausePanel(x, y, target);
    stage.addChild(panel);
    stage.update();
}


function verifyConceptMap(ivBubble) {
    let isGood = true;
    // checking everything is labeled
    for (let i = 0; i < stage.numChildren; i++) {
        let child = stage.getChildAt(i);
        // checking that a bubble has a direction if it is connected
        if (child.name === "bubble") {
            let dirButton = child.getChildByName("dirButton");
            let connected = false;
            for (let bubbleChild of child.children) {
                if ((bubbleChild.name === "inConnector" || 
                     bubbleChild.name === "outConnector") &&
                    bubbleChild.arrow != null) {
                    connected = true;
                    break;
                }
            }
            if (dirButton.children.length === 1 && connected) {
                // console.log(`dirButton.direction: ${dirButton.direction}`);
                drawDirButton(
                    dirButton, dirButton.x, dirButton.y, dirButton.direction, "red"
                );
                // console.log('dirbutton redrawn');
                isGood = false;
            }
        }
        // checking that arrows are properly labeled
        else if (child.name === "arrow") {
            child.label.color = "#000";
            if (child.label.text === "Add label") {
                child.label.color = "red";
                isGood = false;
            }
        }
    }
    if (!isGood) {
        updateErrorField("Please make sure that everything is labeled properly.",
                         "16px Arial",
                         "red");
        return isGood;
    }
    // checking connectivity
    let connector = ivBubble.outConnector;
    while (connector != null) {
        if (connector.arrow == null) {
            updateErrorField(
                "Please make sure that all of the bubbles are connected.",
                "16px Arial",
                "red"
            );
            isGood = false;
            return isGood;
        }
        let nextBubble = connector.arrow.connectorOver.parent;
        connector = nextBubble.outConnector;
    }
    // checking at least one intermediate bubble
    if (ivBubble.outConnector.arrow.connectorOver.parent.outConnector == null) {
        updateErrorField("Please add at least one intermediate bubble.",
                         "16px Arial",
                         "red");
        isGood = false;
        return isGood;
    }
    updateErrorField(
        "Everything is now labeled and connected properly. This does " +
        "not mean that your work is conceptually correct.",
        "16px Arial",
        "#000"
    );
    return isGood;
}

function createErrorField() {
    let errFld = new createjs.Container().set({
        name: "error field"
    });
    return errFld;
}

function updateErrorField(text, font, color) {
    errorField.removeAllChildren();
    let words = new createjs.Text(text, font, color);
    words.x = CANVAS_WIDTH / 2;
    words.textAlign = "center";
    errorField.addChild(words);
}

function removePanel(event) {
    //console.log(event.stageX);
    stage.removeChild(panel);
    stage.update();
}

function removeErrorField(event) {
    errorField.removeAllChildren();
    stage.update();
}


// =============================================================================
// ================================== Hit Area =================================
// =============================================================================

function generateHitArea(text) {
    let hit = new createjs.Shape();
    let bounds = text.getBounds();
    hit.graphics.beginFill("#000").drawRect(0, 0, bounds.width, bounds.height);
    text.hitArea = hit;
    text.cursor = "pointer";
    text.on("mouseover", handleMouseOver);
    text.on("mouseout", handleMouseOver);
}

function generateHitAreaCenterAlignment(text) {
    let hit = new createjs.Shape();
    let bounds = text.getBounds();
    hit.graphics.beginFill("#000").drawRect(0, 0, bounds.width, bounds.height);
    hit.x = -1 * bounds.width / 2;
    hit.y = 0;
    text.hitArea = hit;
    text.cursor = "pointer";
    text.on("mouseover", handleMouseOver);
    text.on("mouseout", handleMouseOver);
}


// =============================================================================
// ============================== Connectors ===================================
// =============================================================================

function createInConnector(x, y) {
    let connector = new createjs.Shape();
    connector
        .graphics
        .setStrokeStyle(2)
        .beginStroke("#000")
        .beginFill("#FFFFFF")
        .drawCircle(0, 0, CONNECTOR_RADIUS);
    connector.x = x;
    connector.y = y;
    connector.cursor = "pointer";
    connector.name = "inConnector";
    connector.arrow = null;

    connector.on("mouseover", handleConnectorOver);
    connector.on("mouseout", handleConnectorOver);
    connector.on("mousedown", e => {
        updateErrorField(
            "Make sure that you are dragging from a black circle to a white circle.",
            "16px Arial",
            "gray"
        );
    });

    return connector;
}


function createOutConnector(x, y) {
    let connector = new createjs.Shape();
    connector.graphics.beginFill("#000").drawCircle(0, 0, CONNECTOR_RADIUS);
    connector.x = x;
    connector.y = y;
    connector.cursor = "pointer";
    connector.name = "outConnector";
    connector.arrow = null;
    connector.on("mousedown", function (e) {
        // Create a new arrow on stage press
        currentArrow = createArrow(stage.mouseX / scalingRatio,
                                   stage.mouseY / scalingRatio,
                                   stage.mouseX / scalingRatio,
                                   stage.mouseY / scalingRatio,
                                   "Add label");
        stage.addChild(currentArrow);
        // Update the current arrow on move
        let moveListener = stage.on("stagemousemove", function (e) {
            drawArrow(currentArrow,
                      currentArrow.x,
                      currentArrow.y,
                      stage.mouseX / scalingRatio,
                      stage.mouseY / scalingRatio,
                      "Add label");
            stage.update();
        });
        // Stop the drag
        let upListener = stage.on("stagemouseup", function () {
            stage.off("stagemousemove", moveListener);
            stage.off("stagemouseup", upListener);
            if (connectorOver === null ||
                connectorOver.name != "inConnector" ||
                connectorOver.parent === connector.parent) {
                removeArrowAndLabel(currentArrow);
                console.log("failed:");
                console.log(connectorOver);
            } else {
                // attach the new arrow
                let line = currentArrow.line;
                line.on("click", handleArrowClick);
                line.on("mouseover", handleMouseOver);
                line.on("mouseout", handleMouseOver);
                line.cursor = "pointer";
                removeArrowAndLabel(connector.arrow);
                removeArrowAndLabel(connectorOver.arrow);
                currentArrow.connector = connector;
                currentArrow.connectorOver = connectorOver;
                connector.arrow = currentArrow;
                connectorOver.arrow = currentArrow;
                steps.push({
                    action: "ARROW_CREATE",
                    object: nodes[connector.parent.idx] + "::" + nodes[connectorOver.parent.idx],
                    index: connector.parent.idx + "::" + connectorOver.parent.idx,
                    info: "N/A",
                    timestamp: (new Date()).toLocaleString()
                });
            }
            currentArrow = null;
        });
    });
    connector.on("mouseover", handleConnectorOver);
    connector.on("mouseout", handleConnectorOver);
    return connector;
}


// =============================================================================
// ============================== Bubbles ======================================
// =============================================================================

function createDeletableBubble(x, y, text, color, direction) {
    let background = new createjs.Shape();
    background
        .graphics
        .setStrokeStyle(1)
        .beginStroke("#000")
        .beginFill(color)
        .drawRoundRect(0, 0, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_RADIUS);

    let label = new createjs.Text(text, "16px Arial", "#FFFFFF").set({
        x: BUBBLE_WIDTH / 2, lineWidth: BUBBLE_WIDTH - 10,
        textAlign: "center", textBaseline: "top",
    });
    label.y = BUBBLE_HEIGHT / 2 - label.getMeasuredHeight() / 2;

    let closeBtnSize = 25;
    let closeButton = createCloseButton(BUBBLE_WIDTH -5, 0, closeBtnSize);

    let dirButton = createDirButton(BUBBLE_WIDTH / 2,
                                    BUBBLE_HEIGHT * .78,
                                    direction,
                                    "#FFFFFF",
                                    false);

    let leftConnector = createInConnector(0, BUBBLE_HEIGHT / 2);
    let rightConnector = createOutConnector(BUBBLE_WIDTH, BUBBLE_HEIGHT / 2);

    let bubble = new createjs.Container();
    bubble.x = x;
    bubble.y = y;
    bubble.name = "bubble";
    bubble.text = text;
    // this sets the registration point
    bubble.regX = BUBBLE_WIDTH / 2;
    bubble.regY = BUBBLE_HEIGHT / 2;
    bubble.inConnector = leftConnector;
    bubble.outConnector = rightConnector;
    bubble.closeButton = closeButton;
    bubble.addChild(
        background, label, dirButton, leftConnector, rightConnector, closeButton
    );
    // so bubble can be dragged
    bubble.on("pressmove", function (event) {
        let mouseX = event.stageX / scalingRatio;
        let mouseY = event.stageY / scalingRatio;
        // if mouse is touching the very edge of the side, don't drag the bubble
        if (Math.abs(mouseX - event.currentTarget.x) > BUBBLE_WIDTH / 2 - CONNECTOR_RADIUS)
            return;
        if (Math.abs(mouseY - event.currentTarget.y) > BUBBLE_HEIGHT / 2 - CONNECTOR_RADIUS)
            return;
        // if there is an arrow being dragged around
        if (currentArrow != null)
            return;
        // check if something highlighted
        if (somethingHighlighted)
            return;
        // currentTarget will be the container that the event listener was added to:
        event.currentTarget.x = mouseX;
        event.currentTarget.y = mouseY;
        // change the arrows
        let leftArrow = leftConnector.arrow;
        let rightArrow = rightConnector.arrow;
        if (leftArrow != null) {
            drawArrow(leftArrow,
                      leftArrow.x,
                      leftArrow.y,
                      mouseX - BUBBLE_WIDTH / 2,
                      mouseY,
                      leftArrow.label.text)
        }
        if (rightArrow != null) {
            drawArrow(rightArrow,
                      mouseX + BUBBLE_WIDTH / 2,
                      mouseY,
                      rightArrow.endX,
                      rightArrow.endY,
                      rightArrow.label.text);
        }
        // make sure to redraw the stage to show the change:
        stage.update();
    });
    return bubble;
}

function createBubble(x, y, text, color, direction) {
    let background = new createjs.Shape();
    background
        .graphics
        .setStrokeStyle(1)
        .beginStroke("#000")
        .beginFill(color)
        .drawRoundRect(0, 0, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_RADIUS);

    let label = new createjs.Text(text, "16px Arial", "#FFFFFF").set({
        x: BUBBLE_WIDTH / 2, lineWidth: BUBBLE_WIDTH - 10,
        textAlign: "center", textBaseline: "top"
    });
    label.y = BUBBLE_HEIGHT / 2 - label.getMeasuredHeight() / 2;

    let dirButton = createDirButton(BUBBLE_WIDTH / 2,
                                    BUBBLE_HEIGHT * .78,
                                    direction,
                                    "#FFFFFF",
                                    false);

    let leftConnector = createInConnector(0, BUBBLE_HEIGHT / 2);
    let rightConnector = createOutConnector(BUBBLE_WIDTH, BUBBLE_HEIGHT / 2);
    //let downConnector = createInConnector(BUBBLE_WIDTH/2, BUBBLE_HEIGHT);
    //let upConnector = createOutConnector(BUBBLE_WIDTH/2, 0);

    let bubble = new createjs.Container();
    bubble.x = x;
    bubble.y = y;
    bubble.name = "bubble";
    bubble.text = text;
    // this sets the registration point
    bubble.regX = BUBBLE_WIDTH / 2;
    bubble.regY = BUBBLE_HEIGHT / 2;
    bubble.inConnector = leftConnector;
    bubble.outConnector = rightConnector;
    bubble.addChild(background, label, dirButton, leftConnector, rightConnector);
    // so bubble can be dragged
    bubble.on("pressmove", function (event) {
        let mouseX = event.stageX / scalingRatio;
        let mouseY = event.stageY / scalingRatio;
        // if mouse is touching the very edge of the side, don't drag the bubble
        if (Math.abs(mouseX - event.currentTarget.x) > BUBBLE_WIDTH / 2 - CONNECTOR_RADIUS)
            return;
        if (Math.abs(mouseY - event.currentTarget.y) > BUBBLE_HEIGHT / 2 - CONNECTOR_RADIUS)
            return;
        // if there is an arrow being dragged around
        if (currentArrow != null)
            return;
        // check if something highlighted
        if (somethingHighlighted)
            return;
        // currentTarget will be the container that the event listener was added to:
        event.currentTarget.x = mouseX;
        event.currentTarget.y = mouseY;
        // change the arrows
        let leftArrow = leftConnector.arrow;
        let rightArrow = rightConnector.arrow;
        if (leftArrow != null) {
            drawArrow(leftArrow,
                      leftArrow.x,
                      leftArrow.y,
                      mouseX - BUBBLE_WIDTH / 2,
                      mouseY,
                      leftArrow.label.text)
        }
        if (rightArrow != null) {
            drawArrow(rightArrow,
                      mouseX + BUBBLE_WIDTH / 2,
                      mouseY,
                      rightArrow.endX,
                      rightArrow.endY,
                      rightArrow.label.text);
        }

        // make sure to redraw the stage to show the change:
        stage.update();
    });

    return bubble;
}

function createFixedBubble(x, y, text, color, direction, isDV) {
    let background = new createjs.Shape();
    background
        .graphics
        .setStrokeStyle(1)
        .beginStroke("#000")
        .beginFill(color)
        .drawRoundRect(0, 0, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_RADIUS);

    let label = new createjs.Text(text, "16px Arial", "#FFFFFF").set({
        x: BUBBLE_WIDTH / 2, lineWidth: BUBBLE_WIDTH - 10,
        textAlign:"center", textBaseline: "top"
    });
    label.y = BUBBLE_HEIGHT / 2 - label.getMeasuredHeight() / 2;

    let topConnector;
    let dirButton;
    let bubble = new createjs.Container();
    if (isDV) {
        topConnector = createInConnector(BUBBLE_WIDTH / 2, 0);
        dirButton = createDirButton(BUBBLE_WIDTH / 2,
                                    BUBBLE_HEIGHT * .8,
                                    direction,
                                    "#FFFFFF",
                                    false);
        bubble.inConnector = topConnector;
        bubble.outConnector = null;
        bubble.idx = -1;
    } else {
        topConnector = createOutConnector(BUBBLE_WIDTH / 2, 0);
        dirButton = createDirButton(BUBBLE_WIDTH / 2,
                                    BUBBLE_HEIGHT * .8,
                                    direction,
                                    "#FFFFFF",
                                    true);
        bubble.inConnector = null;
        bubble.outConnector = topConnector;
        bubble.idx = -2;
    }

    bubble.x = x;
    bubble.y = y;
    bubble.name = "bubble"
    // bubble.name = "fixed bubble";
    bubble.text = text;
    // this sets the registration point
    bubble.regX = BUBBLE_WIDTH / 2;
    bubble.regY = BUBBLE_HEIGHT / 2;
    bubble.topConnector = topConnector;
    bubble.addChild(background, label, dirButton, topConnector);

    return bubble;
}

// for creating the arrow button (the direction button on bottom of bubble)
function createDirButton(x, y, direction, color, isFixed) {
    let dirButton = new createjs.Container();
    color = ("none" === direction) ? "yellow" : color;
    drawDirButton(dirButton, x, y, direction, color);
    dirButton.x = x;
    dirButton.y = y;
    dirButton.name = "dirButton";
    dirButton.mouseChildren = false;
    dirButton.direction = direction;
    if (!isFixed) {
        dirButton.cursor = "pointer";
        dirButton.on("mouseover", handleMouseOver);
        dirButton.on("mouseout", handleMouseOver);
        dirButton.on("click", handleDirectionClick);
    }
    return dirButton;
}

// for updating the arrow button
function drawDirButton(dirButton, x, y, direction, color) {
    dirButton.removeAllChildren();
    dirButton.direction = direction;
    let rectWidth = 3;
    let rectHeight = 10;
    let triSize = 5;

    if (direction === "increase") {
        let rect = new createjs.Shape();
        rect.graphics.beginFill(color).drawRect(0, 0, rectWidth, rectHeight);
        rect.x = -1 * rectWidth / 2;
        rect.y = triSize / 2;
        let tri = new createjs.Shape();
        tri.graphics.beginFill(color);
        tri.graphics.drawPolyStar(0, 0, triSize, 3);
        tri.rotation = 270;
        dirButton.addChild(rect, tri);
    } else if (direction === "decrease") {
        let rect = new createjs.Shape();
        rect.graphics.beginFill(color).drawRect(0, 0, rectWidth, rectHeight);
        rect.x = -1 * rectWidth / 2;
        rect.y = -1 * triSize / 2;
        let tri = new createjs.Shape();
        tri.graphics.beginFill(color);
        tri.graphics.drawPolyStar(0, 0, triSize, 3);
        tri.y = rectHeight;
        tri.rotation = 90;
        dirButton.addChild(rect, tri);
    } else if (direction === "none") {
        let text = new createjs.Text("Set Direction", "bold 12px Arial", color);
        generateHitAreaCenterAlignment(text);
        text.textAlign = "center";
        dirButton.addChild(text);
    } else {
        console.error("direction may only be increase, decrease, or none");
    }
}

// unused
function createEvenlySpacedBubbles(startX, endX, y, nodes) {
    let increment = (endX - startX) / (nodes.length - 1);
    for (let i = 0; i < nodes.length; i++) {
        let bubble = createBubble(startX + i * increment,
                                  y,
                                  nodes[i],
                                  "#4286f4",
                                  "none");
        stage.addChild(bubble);
    }
    stage.update();
}

function createEvenlySpacedBubbles2(startX, endX, y, nodes, directions) {
    let increment = (endX - startX) / (nodes.length - 1);
    let bubbles = [];
    for (let i = 0; i < nodes.length; i++) {
        let bubble = createBubble(startX + i * increment,
                                  y,
                                  nodes[i],
                                  "#4286f4",
                                  directions[i]);
        stage.addChild(bubble);
        bubbles.push(bubble);
    }
    stage.update();
    return bubbles;
}


// =============================================================================
// ================================ Buttons ====================================
// =============================================================================

function createButton(x, y, text, color) {
    let background = new createjs.Shape();
    background
        .graphics
        .beginFill(color)
        .drawRoundRect(0, 0, BUTTON_WIDTH, BUTTON_HEIGHT, BUTTON_RADIUS);

    let label = new createjs.Text(text, "bold 16px Arial", "#FFFFFF").set({
        x: BUTTON_WIDTH / 2, y: BUTTON_HEIGHT / 2,
        textAlign: "center", textBaseline: "middle",
    });

    let button = new createjs.Container();
    button.x = x - BUTTON_WIDTH / 2;
    button.y = y - BUTTON_HEIGHT / 2;
    button.name = `${label.text} button`;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createTextWidthButton(x, y, text, color) {
    let label = new createjs.Text(text, "bold 16px Arial", "#FFFFFF").set({
        y: BUTTON_HEIGHT / 2, textAlign: "center", textBaseline: "middle"
    });
    let buttonWidth = Math.max(BUTTON_WIDTH, label.getMeasuredWidth() + 10);
    label.x = buttonWidth / 2;
    let bg = new createjs.Shape();
    bg.graphics
        .beginFill(color)
        .drawRoundRect(0, 0, buttonWidth, BUTTON_HEIGHT, BUTTON_RADIUS);
    let button = new createjs.Container();
    button.x = x - (buttonWidth / 2);
    button.y = y - (BUTTON_HEIGHT / 2);
    button.name = 'button';
    button.addChild(bg, label);
    button.cursor = 'pointer';
    button.mouseChildren = false;
    button.on('mouseover', handleMouseOver);
    button.on('mouseout', handleMouseOver);
    return button;
}

function createLeftButton(text) {
    return createButton(CANVAS_WIDTH * 0.1,
        CANVAS_HEIGHT - BUTTON_HEIGHT - 10,
        text,
        BUTTON_COLOR);
}

function createRightButton(text, color=BUTTON_COLOR) {
    return createButton(CANVAS_WIDTH * 0.9 ,
        CANVAS_HEIGHT - BUTTON_HEIGHT - 10,
        text,
        color);
}

// perhaps a bad name. a button with an arrow image, not to be confused
// with actual arrows
function createArrowButton(x, name, direction) {
    let scaling = 0.5;
    let normal = new createjs.Bitmap(queue.getResult("orangeBtn")).set({
        scaleX: scaling, scaleY: scaling
    });
    let imgHeight = normal.image.height * scaling;
    let hover = new createjs.Bitmap(queue.getResult("yellowBtn")).set({
        scaleX: scaling, scaleY: scaling    
    });
    if ("right" === direction) {
        normal.rotation = 180;
        normal.y += imgHeight;
        hover.rotation = 180;
        hover.y += imgHeight;
    }
    let button = new createjs.Container().set({
        x: x,
        y: CANVAS_HEIGHT - imgHeight - 10,
        name: name
    });
    button.addChild(normal);
    button.cursor = 'pointer';
    button.mouseChildren = false;
    button.mouseEnabled = true;

    button.on('mouseover', e => {
        button.removeAllChildren();
        button.addChild(hover);
    });
    button.on('mouseout', e => {
        button.removeAllChildren();
        button.addChild(normal);
    });
    button.disable = () => {
        button.alpha = 0.5;
        button.mouseEnabled = false;
    };
    button.enable = () => {
        button.alpha = 1.0;
        button.mouseEnabled = true;
    }
    return button;
}

function createBackButton() {
    // return createArrowButton(CANVAS_WIDTH * (1 / 12), "back button", "left");
    return createArrowButton((CANVAS_WIDTH * 0.1) - BUTTON_WIDTH,
                             "back button",
                             "left");
}


function createNextButton() {
    // return createArrowButton(CANVAS_WIDTH * (11 / 12), 'next button', "right");
    return createArrowButton((CANVAS_WIDTH * 0.9) + BUTTON_WIDTH,
                             'next button',
                             "right");
}

function createExtraLargeButton(x, y, text, color, width, height, fontStyle) {
    let background = new createjs.Shape();
    let buttonWidth = width;
    let buttonHeight = height;
    background
        .graphics
        .beginFill(color)
        .drawRoundRect(0, 0, buttonWidth, buttonHeight, BUTTON_RADIUS);
    if ("" !== fontStyle) {
        fontStyle += " ";
    }
    let label = new createjs.Text(text, fontStyle + "32px Arial", "#FFFFFF").set({
        x: buttonWidth / 2, y: buttonHeight / 2 - 25,
        textAlign: "center", textBaseline: "bottom"
    });

    let button = new createjs.Container();
    button.x = x - buttonWidth / 2;
    button.y = y - buttonHeight / 2;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createLargeButton(x, y, text, color) {
    let background = new createjs.Shape();
    let largeButtonWidth = 300;
    let largeButtonHeight = 100;
    background
        .graphics
        .beginFill(color)
        .drawRoundRect(0, 0, largeButtonWidth, largeButtonHeight, BUTTON_RADIUS);

    let label = new createjs.Text(text, "bold 32px Arial", "#FFFFFF").set({
        x: largeButtonWidth / 2, y: largeButtonHeight / 2,
        textAlign: "center", textBaseline: "middle"
    });

    let button = new createjs.Container();
    button.x = x - largeButtonWidth / 2;
    button.y = y - largeButtonHeight / 2;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createPlusButton(x, y, buttonSize) {
    //let buttonSize = 25;
    let background = new createjs.Shape();
    background
        .graphics
        .beginFill("#4286f4")
        .drawRect(0, 0, buttonSize, buttonSize);

    // create plus
    let line1 = new createjs.Shape();
    line1
        .graphics
        .setStrokeStyle(2)
        .beginStroke("#FFFFFF")
        .moveTo(buttonSize / 2, buttonSize / 4)
        .lineTo(buttonSize / 2, buttonSize * .75);
    let line2 = new createjs.Shape();
    line2
        .graphics
        .setStrokeStyle(2)
        .beginStroke("#FFFFFF")
        .moveTo(buttonSize / 4, buttonSize / 2)
        .lineTo(buttonSize * .75, buttonSize / 2);

    let button = new createjs.Container();
    button.x = x;
    button.y = y;
    button.addChild(background, line1, line2);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

function createXButton(x, y, buttonSize) {
    let background = new createjs.Shape();
    background.graphics.beginFill("#4286f4").drawRect(0, 0, buttonSize, buttonSize);

    // create x
    let margin = (buttonSize - .5 * buttonSize / 1.414) / 2 - (buttonSize / 50)
    let line1 = new createjs.Shape();
    line1
        .graphics
        .setStrokeStyle(2)
        .beginStroke("#FFFFFF")
        .moveTo(margin, margin)
        .lineTo(buttonSize - margin, buttonSize - margin);
    let line2 = new createjs.Shape();
    line2
        .graphics
        .setStrokeStyle(2)
        .beginStroke("#FFFFFF")
        .moveTo(margin, buttonSize - margin)
        .lineTo(buttonSize - margin, margin);

    let button = new createjs.Container();
    button.x = x;
    button.y = y;
    button.addChild(background, line1, line2);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

// a round version of createXButton with a black background
function createCloseButton(x, y, buttonSize) {
    let background = new createjs.Shape();
    background.graphics.beginFill("#000").drawCircle(0, 0, 10);
    
    let label = new createjs.Text("x", "12px Arial", "#FFF").set({
        x: 0, y: 0, textAlign: "center", textBaseline: "middle"
    });

    let button = new createjs.Container();
    button.x = x;
    button.y = y;
    button.addChild(background, label);
    button.cursor = "pointer";
    button.mouseChildren = false;
    button.on("mouseover", handleMouseOver);
    button.on("mouseout", handleMouseOver);

    return button;
}

// =============================================================================
// ================================= Panels ====================================
// =============================================================================

function createOption(x, y, text, width) {
    let optionBox = new createjs.Shape();
    optionBox
        .graphics
        .beginStroke("#000")
        .beginFill(OPTION_COLOR)
        .drawRect(0, 0, width, OPTION_HEIGHT);

    let optionLabel = new createjs.Text(text, "16px Arial", "#000");
    optionLabel.x = width / 2 - optionLabel.getMeasuredWidth() / 2;
    optionLabel.y = OPTION_HEIGHT / 2 - optionLabel.getMeasuredHeight() / 2;

    let option = new createjs.Container();
    option.x = x;
    option.y = y;
    option.addChild(optionBox, optionLabel);
    option.mouseChildren = false;
    option.cursor = "pointer";

    option.on("mouseover", handlePanelOver);
    option.on("mouseout", handlePanelOver);

    return option;
}

function createDirectionPanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;

    let option1 = createOption(0, 0, "Increases", OPTION_MIN_WIDTH);
    let option2 = createOption(0, OPTION_HEIGHT, "Decreases", OPTION_MIN_WIDTH);
    option1.on("click", e => {
        drawDirButton(target, x, y, "increase", "#FFFFFF");
        steps.push({
            action: "NODE_CHANGE_DIRECTION",
            object: nodes[target.parent.idx],
            index: target.parent.idx,
            info: "increase",
            timestamp: (new Date()).toLocaleString()
        });
    });
    option2.on("click", e => {
        drawDirButton(target, x, y, "decrease", "#FFFFFF")
        steps.push({
            action: "NODE_CHANGE_DIRECTION",
            object: nodes[target.parent.idx],
            index: target.parent.idx,
            info: "decrease",
            timestamp: (new Date()).toLocaleString()
        });
    });

    panel.addChild(option1, option2);

    return panel;
}

function changeExplanation(target, text) {
    let arrow = target.arrow;
    drawArrow(arrow, arrow.x, arrow.y, arrow.endX, arrow.endY, text);
    steps.push({
        action: "ARROW_CHANGE_LABEL",
        object: nodes[arrow.connector.parent.idx] + "::" + nodes[arrow.connectorOver.parent.idx],
        index: arrow.connector.parent.idx + "::" + arrow.connectorOver.parent.idx,
        info: text.replace("\n", " "),
        timestamp: (new Date()).toLocaleString()
    });
    return;
}

function createExplanationPanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    let option1 = createOption(0, 0, "Definition", OPTION_MIN_WIDTH);
    let option2 = createOption(0, OPTION_HEIGHT, "Cause", OPTION_MIN_WIDTH);
    let option3 = createOption(0, 2 * OPTION_HEIGHT, "Correlation", OPTION_MIN_WIDTH);
    option1.on("click", e => changeExplanation(target, "Definition"));
    option2.on("click", e => handleCauseClick(x, y, target));
    option3.on("click", e => changeExplanation(target, "Correlation"));
    panel.addChild(option1, option2, option3);
    return panel;
}

function createDeletePanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    let option1 = createOption(0, 0, "Delete", OPTION_MIN_WIDTH);
    option1.on("click", e => {
        target.connector.arrow = null;
        target.connectorOver.arrow = null;
        removeArrowAndLabel(target);
        steps.push({
            action: "ARROW_DELETE",
            object: nodes[target.connector.parent.idx] + "::" + nodes[target.connectorOver.parent.idx],
            index: target.connector.parent.idx + "::" + target.connectorOver.parent.idx,
            info: "N/A",
            timestamp: (new Date()).toLocaleString()
        });
    });
    panel.addChild(option1);
    return panel;
}

function createCausePanel(x, y, target) {
    let panel = new createjs.Container();
    panel.x = x;
    panel.y = y;
    // find max length of cause text
    let optionWidth = OPTION_MIN_WIDTH;
    for (let i = 0; i < causes.length; i++) {
        let text = new createjs.Text(causes[i], "16px Arial", "#000");
        let textWidth = text.getMeasuredWidth() + 10;
        if (textWidth > optionWidth) {
            optionWidth = textWidth;
        }
    }
    for (let i = 0; i < causes.length; i++) {
        let option = createOption(0, OPTION_HEIGHT * i, causes[i], optionWidth);
        option.on("click", e => changeExplanation(target, "Cause:\n" + causes[i]));
        panel.addChild(option);
    }
    return panel;
}

function createConceptsPanel(x, y, allConcepts, conceptBubbles, clickHdlr) {
    let panel = new createjs.Container().set({
        x: x, y: y + OPTION_HEIGHT
    });
    let usedNodes = conceptBubbles.map((bub) => bub.text);
    let options = [];
    allConcepts.forEach((value) => {
        if (!usedNodes.includes(value)) {
            options.push(value);
        }
    });
    let longestOption = options.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
    let tmp = new createjs.Text(longestOption, "16px Arial", "#000");
    let optionWidth = Math.max(OPTION_MIN_WIDTH, tmp.getMeasuredWidth() + 10);
    options.forEach((opt, i) => {
        let option = createOption(0, OPTION_HEIGHT * i, opt, optionWidth);
        option.on("click", e => clickHdlr(opt));
        panel.addChild(option);
    });
    return panel;
}


// =============================================================================
// ============================= Arrows and Labels =============================
// =============================================================================

// only used for the unlabeled arrow between iv and dv
function createUnlabeledArrow(startX, startY, endX, endY) {
    let arrow = new createjs.Shape();
    arrow.x = startX;
    arrow.y = startY;
    let w = endX - startX;
    let h = endY - startY;
    let lineLength = Math.sqrt(w * w + h * h);
    // draw straight line
    arrow
        .graphics
        .setStrokeStyle(3)
        .beginStroke("#000")
        .moveTo(0, 0)
        .lineTo(lineLength, 0);
    // draw triangle
    let triangleSize = 5;
    arrow
        .graphics
        .beginFill("#000")
        .drawPolyStar(lineLength - triangleSize, 0, triangleSize, 3);
    // rotate
    arrow.rotation = Math.atan2(h, w) * 180 / Math.PI;
    return arrow;
}

// this is to create a new arrow
// first create the arrow, then update it using drawArrow
function createArrow(startX, startY, endX, endY, arrowLabel) {
    let arrow = new createjs.Container();
    arrow.name = "arrow";
    arrow.x = startX;
    arrow.y = startY;
    // just storing some end point information
    arrow.endX = endX;
    arrow.endY = endY;
    // Determine the length between the start and end point using pythagoras
    let w = endX - startX;
    let h = endY - startY;
    let length = Math.sqrt(w * w + h * h);
    // draw arrow in straight line
    let line = new createjs.Shape();
    line
        .graphics
        .clear()
        .setStrokeStyle(3)
        .beginStroke("#000")
        .moveTo(0, 0)
        .lineTo(length, 0);
    // Draw the arrow head at the end.
    if (arrowLabel.substring(0, 5) === "Cause") {
        let arrowSize = 5;
        line.graphics.beginFill("#000");
        line.graphics.drawPolyStar(length - arrowSize, 0, arrowSize, 3);
    }
    // Rotate the arrow
    line.rotation = Math.atan2(h, w) * 180 / Math.PI;
    arrow.line = line;
    arrow.addChild(line);
    // Create arrow label
    let label = new createjs.Text(arrowLabel, "12px Arial", "#000");
    label.textAlign = "center";
    label.arrow = arrow;
    arrow.label = label;
    // Create arrow label box
    let labelPadding = 5;
    let bounds = arrow.label.getBounds();
    let labelBox = new createjs.Container();
    labelBox.on("click", handleExplanationClick);
    labelBox.on("mouseover", handleMouseOver);
    labelBox.on("mouseout", handleMouseOver);
    labelBox.cursor = "pointer";
    let midX = (endX - startX) / 2;
    let midY = (endY - startY) / 2;
    labelBox.x = midX;
    labelBox.y = midY;
    let labelBg = new createjs.Shape();
    labelBg
        .graphics
        .beginStroke("#000")
        .beginFill("#FFFFE0")
        .drawRect(0,
                  0,
                  bounds.width + 2 * labelPadding,
                  bounds.height + 2 * labelPadding);
    labelBg.x = -1 * bounds.width / 2 - labelPadding;
    labelBg.y = -labelPadding;
    labelBox.mouseChildren = false;
    labelBox.name = "labelBox";
    labelBox.addChild(labelBg, label);
    arrow.addChild(labelBox);
    return arrow;
}

// for redrawing arrows that already exist on stage
function drawArrow(arrow, startX, startY, endX, endY, arrowLabel) {
    arrow.x = startX;
    arrow.y = startY;
    // just storing some end point information
    arrow.endX = endX;
    arrow.endY = endY;
    // Determine the length between the start and end point using pythagoras
    let w = endX - startX;
    let h = endY - startY;
    let length = Math.sqrt(w * w + h * h);
    // draw arrow in straight line
    let line = arrow.line;
    line
        .graphics.clear()
        .setStrokeStyle(3)
        .beginStroke("#000")
        .moveTo(0, 0)
        .lineTo(length, 0);
    // Draw the arrow head at the end.
    if (arrowLabel.substring(0, 5) === "Cause") {
        let arrowSize = 5;
        line.graphics.beginFill("#000");
        line.graphics.drawPolyStar(length - arrowSize, 0, arrowSize, 3);
    }
    // Rotate the arrow
    line.rotation = Math.atan2(h, w) * 180 / Math.PI;
    // Create arrow label
    let labelBox = arrow.getChildByName("labelBox");
    let midX = (endX - startX) / 2;
    let midY = (endY - startY) / 2;
    labelBox.x = midX;
    let labelBoxOffset = 5;
    labelBox.y = midY - labelBoxOffset;
    // change the arrow label box if the arrow label has been updated
    if (arrow.label.text != arrowLabel) {
        labelBox.removeAllChildren();
        let label = new createjs.Text(arrowLabel, "12px Arial", "#000");
        label.arrow = arrow;
        label.textAlign = "center";
        label.lineWidth = 100;
        arrow.label = label;
        let labelPadding = 5;
        let bounds = arrow.label.getBounds();
        let labelBg = new createjs.Shape();
        labelBg
            .graphics
            .beginStroke("#000")
            .beginFill("#FFFFE0")
            .drawRect(0,
                      0,
                      bounds.width + 2 * labelPadding,
                      bounds.height + 2 * labelPadding);
        labelBg.x = -1 * bounds.width / 2 - labelPadding;
        labelBg.y = -labelPadding;
        labelBox.mouseChildren = false;
        labelBox.addChild(labelBg, label);
    }
    arrow.addChild(labelBox);
}

// remove an arrow with its label
function removeArrowAndLabel(arrow) {
    if (arrow != null && arrow != undefined) {
        stage.removeChild(arrow);
        //stage.removeChild(arrow.label);
    }
}

// convert from a listener which logs user out on main tab close
// to a function we can call instead
function logout() {
    localStorage.clear();
}
