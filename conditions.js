/*global db, collectionID, userID, showSnackbar, pageNamesToFunctions */

/*
    raiseYourHand
4.1 startPage
4.2 defPage1
4.3 defPage2
5.1 defPage3
5.2 defPage4
5.3 defPage5
6.1 defPage6
    defPage7
    defPage8
6.2 cptMapinstructPage
    backToYourRQ
6.3 predictPage1
7.1 graphPage1
8.1 graphPage2
9.1 initCptMapPage | initcptMapPlaceholder
10.1 biDirInstructPage1
10.2 biDirInstructPage2
11.1 biDirIntructPage3
11.2 oppDirCptMapPage
12.1 brmInstructionPage(Video - remove)
12.2 brmPage
12.3 brmP
13.1 predictPage2
13.2 finalConceptMapPage
14.1 completePage(home page displaying they have completed ? ? ? )

cond1              | cond2                      | cond3
-------------------+----------------------------+-----------------------
raiseYourHand      |raiseYourHand               |raiseYourHand
startPage          |startPage                   |startPage
definitionPage1    |definitionPage1             |definitionPage1
definitionPage2    |definitionPage2             |definitionPage2
definitionPage3    |definitionPage3             |definitionPage3
definitionPage4    |definitionPage4             |definitionPage4
definitionPage5    |definitionPage5             |definitionPage5
definitionPage6    |definitionPage6             |definitionPage6
definitionPage7    |definitionPage7             |definitionPage7
definitionPage8    |definitionPage8             |definitionPage8
definitionPage9    |definitionPage9             |definitionPage9
definitionPage10   |definitionPage10            |definitionPage10
instructionPage    |instructionPage             |instructionPage
backToYourRQ       |backToYourRQ                |backToYourRQ
predictionPage1    |predictionPage1             |predictionPage1
graphPage1         |graphPage1                  |graphPage1
graphPage2         |graphPage2                  |graphPage2
===================+== (above) SAME FOR ALL ====+===================
initialConceptMap  |initialConceptMap           | cptMapPlaceHolder
                   |biDirInstructionPage1       |
                   |biDirInstructionPage2       |
                   |biDirInstructionPage3       |
                   |oppositeDirectionConceptMap |
brmPage            |brmPage                     |brmPage
predictionPage2    |predictionPage2             |predictionPage2
finalConceptMap    |finalConceptMap             |finalConceptMap
completePage       |completePage                |completePage

*/

const conditionHypoTasks = {
    "demo": [
        "startPage",
        "predictionPage2",
        "graphPage1",
        "graphPage2",
        "finalConceptMap",
        "completePage"
    ],
    "cond1": [
        "raiseYourHand",
        "startPage",
        "definitionPage1",
        "definitionPage2",
        "definitionPage3",
        "definitionPage4",
        "definitionPage5",
        "definitionPage6",
        "definitionPage7",
        "definitionPage8",
        "definitionPage9",
        "definitionPage10",
        "instructionPage",
        "backToYourRQ",
        "predictionPage1",
        "graphPage1",
        "graphPage2",
        "initialConceptMap",
        "brmPage",
        "predictionPage2",
        "finalConceptMap",
        "completePage"
    ],
    "cond2": [
        "raiseYourHand",
        "startPage",
        "definitionPage1",
        "definitionPage2",
        "definitionPage3",
        "definitionPage4",
        "definitionPage5",
        "definitionPage6",
        "definitionPage7",
        "definitionPage8",
        "definitionPage9",
        "definitionPage10",
        "instructionPage",
        "backToYourRQ",
        "predictionPage1",
        "graphPage1",
        "graphPage2",
        "initialConceptMap",
        "biDirInstructionPage1",
        "biDirInstructionPage2",
        "biDirInstructionPage3",
        "oppositeDirectionConceptMap",
        "brmPage",
        "predictionPage2",
        "finalConceptMap",
        "completePage"
    ],
    "cond3": [
        "raiseYourHand",
        "startPage",
        "definitionPage1",
        "definitionPage2",
        "definitionPage3",
        "definitionPage4",
        "definitionPage5",
        "definitionPage6",
        "definitionPage7",
        "definitionPage8",
        "definitionPage9",
        "definitionPage10",
        "instructionPage",
        "backToYourRQ",
        "predictionPage1",
        "graphPage1",
        "graphPage2",
        "initialConceptMapPlaceholder",
        "brmPage",
        "predictionPage2",
        "finalConceptMap",
        "completePage"
    ]
}

let studentHypoTasks;
let studentCondition;
let currHypoTaskIdx;

function invalidTask() {
    showSnackbar("invalid task");
}

function updateCurrTaskIndex(idx) {
    currHypoTaskIdx = idx;
    return db.saveValue("currHypoTaskIdx", idx)
}

function prevHypoTask() {
    let prevTaskIdx = currHypoTaskIdx - 1;
    if (prevTaskIdx < 0) {
        console.error('invalid taskIdx: ', prevTaskIdx);
        invalidTask();
    } else {
        updateCurrTaskIndex(prevTaskIdx)
            .then(() => {
                currHypoTask();
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

function nextHypoTask() {
    let nextTaskIdx = currHypoTaskIdx + 1;
    if (nextTaskIdx >= studentHypoTasks.length) {
        console.error('invalid taskIdx: ', nextTaskIdx);
        invalidTask();
    } else {
        updateCurrTaskIndex(nextTaskIdx)
            .then(() => {
                currHypoTask();
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

function currHypoTask() {
    let task;
    console.log('currHypoTask():', currHypoTaskIdx);
    if ((null === currHypoTaskIdx) || (undefined === currHypoTaskIdx) ||
        (currHypoTaskIdx < 0) || (currHypoTaskIdx === studentHypoTasks.length)) {
        console.error('currHypoTaskIdx is invalid: ', currHypoTaskIdx);
        task = invalidTask;
    } else {
        task = studentHypoTasks[currHypoTaskIdx];
    }
    console.log(task.name);
    task();
}


function initHypoTasks(data) {
    console.log("initHypoTasks()", data);
    currHypoTaskIdx = data.currHypoTaskIdx || 0;
    studentCondition = data.condition;
    updateCurrTaskIndex(currHypoTaskIdx)
        .then(() => {
            studentHypoTasks = conditionHypoTasks[studentCondition].map(x => pageNamesToFunctions[x]);
            let taskNames = studentHypoTasks.map(x => x.name);
            console.log(taskNames);
            currHypoTask();
        });
}
