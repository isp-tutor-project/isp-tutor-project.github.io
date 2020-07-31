!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=8)}([function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));s(4);class r{constructor(){this.el=document.querySelector("nav.navbar"),this.homeBtn=document.getElementById("navbar_home_btn"),this.activityTitle=document.getElementById("activity_title"),this.signOutBtn=document.getElementById("sign_out_button"),this.signInText=document.getElementById("sign_in_text"),this.goHome=this.goHome.bind(this),this.signOutUser=this.signOutUser.bind(this),this.homeBtn.addEventListener("click",this.goHome),this.signOutBtn.addEventListener("click",this.signOutUser)}goHome(e){let t=this.calcHomePage();this.redirectTo(t)}calcHomePage(){let e=localStorage.getItem("homepage");return null===e&&(e=window.location.origin+"/"),e}redirectTo(e){window.location.href!==e&&(window.location.href=e)}signOutUser(e){this.signInText.innerHTML="",this.signInText.classList.add("invisible"),this.signOutBtn.classList.add("invisible");let t=this.calcHomePage();localStorage.clear(),this.redirectTo(t)}displayActivityTitle(e){this.activityTitle.innerText=e.toUpperCase()}displayUser(e){this.signInText.innerHTML="Welcome, "+e,this.signInText.classList.remove("invisible"),this.signOutBtn.classList.remove("invisible")}}},function(e,t,s){"use strict";function r(){let e={userID:localStorage.getItem("userID"),classCode:localStorage.getItem("classCode"),database:localStorage.getItem("database"),homepage:localStorage.getItem("homepage"),activityKey:localStorage.getItem("currentActivity"),features:(localStorage.getItem("currentActivityFeatures")||"").split(":").filter(e=>""!==e)};return console.log(e),e}s.d(t,"a",(function(){return r}))},function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));s(3),s(0);class r{constructor(){}setCredentials(e,t){this.classCode=e,this.userID=t}getUserData(){}getActivityData(e,t=!0){}setActivityData(e,t){}getRQData(){}getCurrHypoTask(){}getInitialHypoData(){}getFinalHypoData(){}saveValue(e,t){}saveJSONValue(e,t){}getBoolValue(e){}getIntValue(e){}getFloatValue(e){}getTextValue(e){}getJSONValue(e){}}class a extends r{constructor(){super()}setCredentials(e,t){super.setCredentials(e,t)}getUserData(){console.count("getUserData() called");let e={};return Promise.all([this.getTextValue("classCode"),this.getTextValue("userID"),this.getActivityData("rqted"),this.getCurrHypoTask(),this.getIntialHypoData(),this.getFinalHypoData()]).then(([t,s,r,a,n,i])=>(e.classCode=t,e.userID=s,e.rqted=r,a&&(e.currHypoTaskIdx=a),n&&(e.firstPrediction=n.firstPrediction,e.initialHypo=n.initialHypo),i&&(e.secondPrediction=i.secondPrediction,e.finalHypo=i.finalHypo),e))}getActivityData(e,t=!0){return this.getJSONValue(e).then(e=>e&&!t?JSON.stringify(e):e)}setActivityData(e,t){return this.saveJSONValue(e,t)}getRQData(){let e=null;return this.getActivityData("rqted").then(t=>(e=t||{moduleState:{selectedArea:{index:1},selectedTopic:{index:1},selectedVariable:{index:1},selectedRQ:{index:1}}},e)).catch(t=>(console.error(t),e))}getCurrHypoTask(){return this.getIntValue("currHypoTaskIdx")}getIntialHypoData(){let e={};return this.getTextValue("firstPrediction").then(t=>null!==t?(e.firstPrediction=t,this.getJSONValue("initialHypo")):(e.firstPrediction=null,null)).then(t=>(e.initialHypo=t,e)).catch(t=>(console.error(t),e))}getFinalHypoData(){let e={};return this.getTextValue("secondPrediction").then(t=>null!==t?(e.secondPrediction=t,this.getJSONValue("finalHypo")):(e.secondPrediction=null,null)).then(t=>(e.finalHypo=t,e)).catch(t=>(console.error(t),e))}setValues(e,t=!1){return new Promise((t,s)=>{try{for(let[t,s]of Object.items(e))localStorage.setItem(t,s);t(!0)}catch(e){s(e)}})}saveValue(e,t){return new Promise((s,r)=>{try{s(localStorage.setItem(e,t))}catch(e){r(e)}})}saveJSONValue(e,t){return new Promise((s,r)=>{try{let r=JSON.stringify(t);s(localStorage.setItem(e,r))}catch(e){r(e)}})}getBoolValue(e){return new Promise((t,s)=>{try{let s=localStorage.getItem(e);void 0===s&&t(s),t("true"===s)}catch(e){s(e)}})}getIntValue(e){let t;return new Promise((s,r)=>{try{let r=localStorage.getItem(e);r&&(t=parseInt(r,10)),s(t)}catch(e){r(e)}})}getFloatValue(e){let t;return new Promise((s,r)=>{try{let r=localStorage.getItem(e);r&&(t=parseFloat(r)),s(t)}catch(e){r(e)}})}getTextValue(e){let t;return new Promise((s,r)=>{try{let r=localStorage.getItem(e);r&&(t=r),s(r)}catch(e){r(e)}})}getJSONValue(e){return new Promise((t,s)=>{try{let s=localStorage.getItem(e);s&&(s=JSON.parse(s)),t(s)}catch(e){s(e)}})}}const n={apiKey:"AIzaSyD7zIk-8V20QqJNSs0cAV0uNL3qjeqLMdM",authDomain:"isptutor.firebaseapp.com",projectId:"isptutor"};class i extends r{constructor(){super(),firebase.initializeApp(n),this.store=firebase.firestore()}setCredentials(e,t){super.setCredentials(e,t),this.userRef=this.store.collection(this.classCode).doc(this.userID)}getUserData(){return this.userRef.get().then(e=>e.exists?e.data:null)}getCurrHypoTask(){}getActivityData(e,t=!0){return this.getUserData().then(s=>{let r=s[e];return r&&t?JSON.parse(r):r})}setValues(e,t=!1){return this.userRef.set(e,{merge:!t})}updateValues(e){return this.userRef.update(e)}deleteValue(e){return this.userRef.update({[e]:firebase.firestore.FieldValue.delete()})}}s(5);class l{constructor(e){this.el=document.getElementById(e||"snackbar")}show(e){null!=e&&(this.el.innerHTML=e,this.el.classList.add("show"),setTimeout(()=>{this.el.classList.remove("show")},3e3))}}class o extends class{constructor(e,t){console.debug("\tInitializing Scene: "+t.id),this.app=e;for(let[e,s]of Object.entries(t))this[e]=s;this.el=document.getElementById(this.id),this.handleFollowEdgeButton=this.handleFollowEdgeButton.bind(this)}showBtns(e){for(let t of e)this.btnNames.hasOwnProperty(t)&&this.app.show(this.btnNames[t])}hideBtns(e){for(let t of e)this.btnNames.hasOwnProperty(t)&&this.app.hide(this.btnNames[t])}handleFollowEdgeButton(e){e.preventDefault();let t=e.target.dataset.edge;this.app.followEdge(t)}getFollowEdgeElements(){return this.el.getElementsByClassName("follow-edge")}setupFollowEdgeEventHandlers(){for(let e of this.getFollowEdgeElements())e.addEventListener("click",this.handleFollowEdgeButton,{once:!0})}restoreState(e){return void 0!==e&&(console.debug(`\tRestoring Scene State for: ${this.id} `),!0)}_isBogus(){return"N/A"===this.id||"bogus"===this.sceneType}handlePrevButton(){this.app.followEdge("prev")}handleNextButton(){this.app.followEdge("next")}hasForm(){return!1}formChanged(){return!1}pre_enter(){}enter(){this._isBogus()||(console.debug("Entering Scene: "+this.id),console.debug("\tUpdating state.currentScene"),this.app.state.currentScene=this.id,this.defaultEnterSceneActions(),this.customEnterActions.length&&this.performCustomEnterSceneActions())}post_enter(){}pre_exit(){}exit(){this._isBogus()||(console.debug("Exiting Scene: "+this.id),this.defaultExitSceneActions(),this.customExitActions.length&&this.performCustomExitSceneActions())}post_exit(){}defaultEnterSceneActions(){this.el.classList.add("active"),this.app.resizeContent(),this.setupFollowEdgeEventHandlers()}defaultExitSceneActions(){this.el.classList.remove("active")}performCustomEnterSceneActions(){console.warn("Unimplemented Method: performCustomEnterSceneActions")}performCustomExitSceneActions(){console.warn("Unimplemented Method: performCustomExitSceneActions")}}{constructor(e,t){super(e,t),this.customActions={showBtns:this.showBtns,hideBtns:this.hideBtns},this.btnNames={prev:this.app.prevBtn,next:this.app.nextBtn}}performCustomEnterSceneActions(){for(let e of this.customEnterActions){let t=e.name,s=e.args;this.customActions.hasOwnProperty(t)&&this[t](s)}}defaultEnterSceneActions(){super.defaultEnterSceneActions(),this.app.show(this.app.prevBtn),this.app.show(this.app.nextBtn),this.app.enable(this.app.prevBtn),this.app.enable(this.app.nextBtn)}}class u{constructor(e,t,s){this.handleChange=this.handleChange.bind(this),this.app=e,this.formInfo=t,this.form=document.getElementById(s),this.radios=this.form.querySelectorAll('input[type="radio"]'),this.changed=!1}isValid(){return this.form.checkValidity()}handleChange(e){this.changed=!0,this.isValid()&&this.app.enable(this.app.nextBtn)}setupEventHandlers(){for(let e of this.radios)e.addEventListener("change",this.handleChange)}teardownEventHandlers(){for(let e of this.radios)e.removeEventListener("change",this.handleChange)}getCorrectness(){let e,t=this.formInfo,s=this.form.querySelector('input[type="radio"]:checked').value.trim(),r=t.correctAnswer;return e="N/A"===r?null:r===s,e}getFeedback(){let e,t,s,r=this.getCorrectness(),a=this.formInfo;switch(r){case!0:e=a.posFb,t="pos-feedback";break;case!1:e=a.negFb,t="neg-feedback";break;default:e=a.ntlFb,t="ntl-feedback"}return void 0===e&&void 0!==a.ntlFb&&(e=a.ntlFb),void 0!==e&&(s=`<span class="${t}">${e}</span>`),s}getData(){let e=this.formInfo,t=this.getCorrectness(),s=this.form.querySelector('input[type="radio"]:checked'),r=s.value.trim(),a=s.labels[0].innerText,n={questionType:e.type,questionText:e.text,selectedEleId:s.id,selectedValue:r,selectedLabel:a,isCorrect:t,timestamp:Date.now()};return this.changed=!1,n}}class c{constructor(e,t,s){this.handleChange=this.handleChange.bind(this),this.app=e,this.formInfo=t,this.form=document.getElementById(s),console.log(this.form),this.textarea=this.form.querySelector(".form-control"),this.changed=!1}isValid(){return this.form.checkValidity()}handleChange(e){""!=this.textarea.value.trim()&&(this.changed=!0,this.isValid()&&this.app.enable(this.app.nextBtn))}setupEventHandlers(){this.textarea.addEventListener("input",this.handleChange)}teardownEventHandlers(){this.textarea.removeEventListener("input",this.handleChange)}getCorrectness(){return null}getFeedback(){let e,t,s,r=this.formInfo;return void 0!==r.ntlFb&&(e=r.ntlFb,t="ntl-feedback"),void 0!==e&&(s=`<span class="${t}">${e}</span>`),s}getData(){let e=this.formInfo,t=this.getCorrectness(),s=this.textarea.value.trim(),r={questionType:e.type,questionText:e.text,answer:s,isCorrect:t,timestamp:Date.now()};return this.changed=!1,r}}class h extends o{constructor(e,t){super(e,t),this.q1Answer=null,this.currentTransition=0,this.currentTransitionStateSaver=null,this.currentState=null,this.saveQ1State=this.saveQ1State.bind(this),this.saveQ2State=this.saveQ2State.bind(this),this.saveQ3State=this.saveQ3State.bind(this),this.revealStatHandler=this.revealStatHandler.bind(this),this.handleSortData=this.handleSortData.bind(this),this.showSortedDataBtn=document.getElementById(this.id+"_show_sorted_table"),this.sortedTableText=document.getElementById(this.id+"_sorted_text"),this.q2TextArea=document.getElementById(this.id+"_q2_answer"),this.currentForm=null,this.q1Form=new u(this.app,t.questions.q1,this.id+"_q1_form"),this.q2Form=new c(this.app,t.questions.q2,this.id+"_q2_form"),this.q3Form=new u(this.app,t.questions.q3,this.id+"_q3_form"),this.forms=[this.q1Form,this.q2Form,this.q3Form],this.q2Text=document.getElementById(this.id+"_q2_text"),this.q3Text=document.getElementById(this.id+"_q3_text"),this.setupEventHandlers()}restoreState(e){if(super.restoreState(e),e){if(console.log("TestResultsScene::restoreState()"),this.currentState=e,e.currentTransition&&(this.currentTransition=e.currentTransition),e.q1Selection){document.getElementById(e.q1Selection).checked=!0,this.q1Answer=e.q1Answer,this.updateQ2AndQ3Text()}if(e.q2Answer&&(this.q2TextArea.value=e.q2Answer),e.q3Selection){document.getElementById(e.q3Selection).checked=!0}for(let t of["left","right"])for(let s of["mean","median","mode","range"])e[`${t}_${s}_shown`]&&this.revealStat(t,s);e.dataSorted&&(this.showSortedData(),this.replaceSortBtnWithText())}}updateSceneState(e){null===this.currentState&&(this.currentState={}),this.currentState=Object.assign(this.currentState,e),this.app.state.sceneState[this.id]=Object.assign({},this.currentState)}revealStat(e,t){let s=document.getElementById(`${this.id}_reveal_${e}_${t}`),r=document.getElementById(`${this.id}_${e}_${t}`);this.app.hide(s),this.app.show(r)}replaceSortBtnWithText(){this.app.hide(this.showSortedDataBtn),this.app.show(this.sortedTableText)}revealStatHandler(e){let[t,s,r,a]=e.target.id.replace(this.id,"").split("_");this.revealStat(r,a),this.updateSceneState({[`${r}_${a}_shown`]:!0}),this.app.state.events.push({type:"REVEAL_STAT",side:r,stat:a,time:Date.now()})}handleSortData(e){this.showSortedData(),this.replaceSortBtnWithText(),this.app.state.events.push({type:"DATA_SORTED",time:Date.now()}),this.updateSceneState({dataSorted:!0})}hideAllForms(){for(let e of this.forms)this.app.hide(e.form)}handlePrevButton(){this.currentForm.changed&&this.currentTransitionStateSaver(this.currentForm.getData()),0===this.currentTransition?this.app.followEdge("prev"):(this.currentTransition--,this.handleTransition())}handleNextButton(){this.currentForm.changed&&this.currentTransitionStateSaver(this.currentForm.getData()),2===this.currentTransition?this.app.followEdge("next"):(this.currentTransition++,this.handleTransition())}hasForm(){return!0}setupEventHandlers(){for(let e of this.el.querySelectorAll(".reveal-stat"))e.addEventListener("click",this.revealStatHandler,{once:!0});this.showSortedDataBtn.addEventListener("click",this.handleSortData,{once:!0})}updateQ2AndQ3Text(){let e=`<span class="q1-answer">${this.q1Answer}</span>`;this.questions.q2.text=this.questions.q2.text.replace("PLACEHOLDER",e),this.questions.q3.text=this.questions.q3.text.replace("PLACEHOLDER",e),this.q2Text.innerHTML=this.questions.q2.text,this.q3Text.innerHTML=this.questions.q3.text}saveQ1State(e){this.q1Answer=e.selectedValue,this.updateSceneState({q1Selection:e.selectedEleId,q1Answer:this.q1Answer}),this.updateQ2AndQ3Text(),this.submitQuestion("q1",e)}saveQ2State(e){this.updateSceneState({q2Answer:e.answer}),e.questionText=e.questionText.replace('<span class="q1-answer">',"").replace("</span>",""),this.submitQuestion("q2",e)}saveQ3State(e){this.updateSceneState({q3Selection:e.selectedEleId}),e.questionText=e.questionText.replace('<span class="q1-answer">',"").replace("</span>",""),this.submitQuestion("q3",e)}submitQuestion(e,t){let s=Object.assign({type:"SUBMIT_ANSWER",questionId:`${this.app.activityKey}.${this.id}.${e}`},t);this.app.state.events.push(s)}defaultEnterSceneActions(){super.defaultEnterSceneActions(),this.app.show(this.app.prevBtn),this.app.show(this.app.nextBtn),this.app.enable(this.app.prevBtn),this.app.enable(this.app.nextBtn),this.q1Form.setupEventHandlers(),this.q2Form.setupEventHandlers(),this.q3Form.setupEventHandlers()}handleTransition(){switch(this.hideAllForms(),this.currentForm=this.forms[this.currentTransition],this.app.show(this.currentForm.form),this.currentForm.isValid()?this.app.enable(this.app.nextBtn):this.app.disable(this.app.nextBtn),this.currentTransition){case 0:this.currentTransitionStateSaver=this.saveQ1State;break;case 1:this.currentTransitionStateSaver=this.saveQ2State,this.q2TextArea.focus();break;case 2:this.currentTransitionStateSaver=this.saveQ3State;break;default:console.error("invalid transition: "+this.currentTransition)}}post_enter(){this.handleTransition(),null!==this.currentState&&this.restoreState(this.currentState)}}class d extends h{constructor(e,t){super(e,t),this.showSortedData=this.showSortedData.bind(this)}_compareRows(e,t){return parseFloat(e.querySelectorAll("td")[1].innerText)-parseFloat(t.querySelectorAll("td")[1].innerText)}_sortTable(e){let t=e.querySelector("tbody"),s=[...t.rows];t.innerHTML="",s.sort(this._compareRows);for(let e of s)t.appendChild(e)}showSortedData(){let e=this.el.querySelector("table.data-table.left-table"),t=this.el.querySelector("table.data-table.right-table");this._sortTable(e),this._sortTable(t)}}class p extends class{constructor(e,t,s){this.sceneData=e.scenes,this.activityConfig=t,this.db=function(e){let t;switch(e){case"firestore":t=new i;break;default:t=new a}return t}(t.database),this.db.setCredentials(t.classCode,t.userID),this.activityKey=t.activityKey,this.defaultState=s,this.snackbar=new l,this.homePageBtn=null;let r=document.getElementById("go_home_page");this.nextBtn=document.getElementById("next_btn"),this.prevBtn=document.getElementById("prev_btn"),this.sceneIdRegion=document.getElementById("scene_id_region"),r&&(this.homePageBtn=r),this.handleGoHomePage=this.handleGoHomePage.bind(this),this.handleNext=this.handleNext.bind(this),this.handlePrev=this.handlePrev.bind(this),this.homePageBtn&&this.homePageBtn.addEventListener("click",this.handleGoHomePage),this.handleResize=this.handleResize.bind(this),this.nextBtn.addEventListener("click",this.handleNext),this.prevBtn.addEventListener("click",this.handlePrev),this.state={},this.scenes={},this.startScene="start",this.currentScene=null,this.prevScene=null,this.bogusSceneInfo={id:"N/A",sceneType:"bogus"},window.app=this,window.addEventListener("resize",this.handleResize)}handleResize(e){this.resizeContent()}resizeContent(){let e,t,s,r,a,n,i;e=document.querySelector(".scene.active"),e&&(t=e.querySelector(".scene-content")),t&&(s=e.offsetWidth,r=e.offsetHeight,a=t.offsetWidth,n=t.offsetHeight,i=Math.min(s/a,r/n),t.style.transform=`translate(-50%, -50%) scale(${i})`)}showFeedback(e){this.snackbar.show(e)}handleGoHomePage(e){e.preventDefault(),window.location.href=this.activityConfig.homepage}handlePrev(e){e.preventDefault(),this.currentScene.handlePrevButton(),this.saveAppState()}handleNext(e){e.preventDefault(),this.currentScene.handleNextButton(),this.saveAppState()}setStartScene(e){console.debug("setStartScene()",e),this.startScene=e}start(){console.log("starting"),this.getAppState().then(e=>{null===e&&(console.log("no activity data in db. using initial data"),e=this.defaultState),this.state=e}).then(()=>{console.log("Initializing Scenes");for(let e of document.querySelectorAll("section.scene")){let t=e.id,s=this.createScene(this.sceneData[t]);this.scenes[t]=s}}).then(()=>{console.log(this.state),console.log(this.state.sceneState),console.log("Restoring App State");for(let e of document.querySelectorAll("section.scene")){let t=e.id,s=this.state.sceneState[t];this.scenes[t].restoreState(s)}this.state.currentScene&&(console.log("Restoring Current Scene"),this.currentScene=this.lookupScene(this.state.currentScene))}).then(()=>{}).then(()=>{this.gotoStartScene()}).catch(e=>{console.error(e)})}getAppState(){return console.debug("Loading App State"),this.db.getActivityData(this.activityKey)}saveAppState(){return console.debug("Saving App State"),this.db.setActivityData(this.activityKey,this.state)}createScene(e){return new Scene(this,e)}switchToScene(e){this.logSceneChange(e),this.gotoScene(e)}gotoScene(e){this.prevScene=this.currentScene,this.prevScene&&(this.prevScene.pre_exit(),this.prevScene.exit(),this.prevScene.post_exit()),this.currentScene=e,this.currentScene.pre_enter(),this.currentScene.enter(),this.currentScene.post_enter(),this.displaySceneId()}displaySceneId(){0}lookupScene(e){let t=this.scenes[e];return t||console.error("ERROR: no such scene "+e),t}followEdge(e){let t=this.currentScene.edges[e],s=this.lookupScene(t);this.switchToScene(s)}logSceneChange(e){this.state.events.push({type:"SCENE_TRANSITION",from:this.currentScene.id,to:e.id,timestamp:Date.now()})}gotoStartScene(){let e=this.currentScene;e||(e=this.lookupScene(this.startScene)),this.state.events.push({type:"APP_START",scene:e.id,timestamp:Date.now()}),this.gotoScene(e)}hide(e){e&&e.classList.add("hidden")}show(e){e&&e.classList.remove("hidden")}makeInvisible(e){e&&e.classList.add("invisible")}makeVisible(e){e&&e.classList.remove("invisible")}disable(e){e&&e.classList.add("disabled")}enable(e){e&&e.classList.remove("disabled")}}{createScene(e){let t;switch(e.sceneType){case"carResults":case"rocketsResults":case"libraryResults":case"memoryResults":t=new d(this,e);break;default:t=new o(this,e)}return t}}},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){"use strict";s.r(t);var r=s(2),a=s(0),n=s(1);let i=Object(n.a)();const l=s(9);let o=new a.a;o.displayActivityTitle("Data Interpretation Post-Test"),o.displayUser(i.userID),new r.a(l,i,{events:[],sceneState:{},currentScene:"start"}).start()},function(e){e.exports=JSON.parse('{"scenes":{"start":{"edges":{"next":"intro"},"customEnterActions":[{"name":"hideBtns","args":["prev","next"]}],"id":"start","sceneType":"standard","customExitActions":[]},"intro":{"edges":{"prev":"start","next":"carsIntro1"},"id":"intro","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsIntro1":{"edges":{"prev":"intro","next":"carsIntro2"},"id":"carsIntro1","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsIntro2":{"edges":{"prev":"carsIntro1","next":"carsIntro3"},"id":"carsIntro2","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsIntro3":{"edges":{"prev":"carsIntro2","next":"carsResultsIntro1"},"id":"carsIntro3","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResultsIntro1":{"edges":{"prev":"carsIntro3","next":"carsResults1"},"id":"carsResultsIntro1","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResults1":{"sceneType":"carResults","edges":{"prev":"carsResultsIntro1","next":"carsResultsIntro2"},"id":"carsResults1","questions":{"q1":{"type":"mc","text":"Q1) Which type of wheel do these results suggest was faster?","options":[{"value":"thick wheels","label":"Thick Wheels"},{"value":"thin wheels","label":"Thin Wheels"},{"value":"neither wheels","label":"Neither Wheels"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster."},"q3":{"type":"survey","text":"Q3) How sure are you these results show PLACEHOLDER were faster?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"carsResultsIntro2":{"edges":{"prev":"carsResults1","next":"carsResults2"},"id":"carsResultsIntro2","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResults2":{"sceneType":"carResults","edges":{"prev":"carsResultsIntro2","next":"carsResultsIntro3"},"id":"carsResults2","questions":{"q1":{"type":"mc","text":"Q1) Which type of wheel do these results suggest was faster?","options":[{"value":"thick wheels","label":"Thick Wheels"},{"value":"thin wheels","label":"Thin Wheels"},{"value":"neither wheels","label":"Neither Wheels"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster."},"q3":{"type":"survey","text":"Q3) How sure are you these results show PLACEHOLDER were faster?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"carsResultsIntro3":{"edges":{"prev":"carsResults2","next":"carsResults3"},"id":"carsResultsIntro3","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResults3":{"sceneType":"carResults","edges":{"prev":"carsResultsIntro3","next":"carsResultsIntro4"},"id":"carsResults3","questions":{"q1":{"type":"mc","text":"Q1) Which type of wheel do these results suggest was faster?","options":[{"value":"thick wheels","label":"Thick Wheels"},{"value":"thin wheels","label":"Thin Wheels"},{"value":"neither wheels","label":"Neither Wheels"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster."},"q3":{"type":"survey","text":"Q3) How sure are you these results show PLACEHOLDER were faster?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"carsResultsIntro4":{"edges":{"prev":"carsResults3","next":"carsResults4"},"id":"carsResultsIntro4","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResults4":{"sceneType":"carResults","edges":{"prev":"carsResultsIntro4","next":"carsResultsIntro5"},"id":"carsResults4","questions":{"q1":{"type":"mc","text":"Q1) Which type of wheel do these results suggest was faster?","options":[{"value":"thick wheels","label":"Thick Wheels"},{"value":"thin wheels","label":"Thin Wheels"},{"value":"neither wheels","label":"Neither Wheels"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster."},"q3":{"type":"survey","text":"Q3) How sure are you these results show PLACEHOLDER were faster?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"carsResultsIntro5":{"edges":{"prev":"carsResults4","next":"carsResults5"},"id":"carsResultsIntro5","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"carsResults5":{"sceneType":"carResults","edges":{"prev":"carsResultsIntro5","next":"libraryIntro1"},"id":"carsResults5","questions":{"q1":{"type":"mc","text":"Q1) Which type of wheel do these results suggest was faster?","options":[{"value":"thick wheels","label":"Thick Wheels"},{"value":"thin wheels","label":"Thin Wheels"},{"value":"neither wheels","label":"Neither Wheels"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said these results suggest that PLACEHOLDER were faster."},"q3":{"type":"survey","text":"Q3) How sure are you these results show PLACEHOLDER were faster?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"libraryIntro1":{"edges":{"prev":"carsResults5","next":"libraryIntro2"},"id":"libraryIntro1","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryIntro2":{"edges":{"prev":"libraryIntro1","next":"libraryIntro3"},"id":"libraryIntro2","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryIntro3":{"edges":{"prev":"libraryIntro2","next":"libraryIntro4"},"id":"libraryIntro3","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryIntro4":{"edges":{"prev":"libraryIntro3","next":"libraryIntro5"},"id":"libraryIntro4","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryIntro5":{"edges":{"prev":"libraryIntro4","next":"libraryIntro6"},"id":"libraryIntro5","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryIntro6":{"edges":{"prev":"libraryIntro5","next":"libraryResultsIntro1"},"id":"libraryIntro6","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResultsIntro1":{"edges":{"prev":"libraryIntro6","next":"libraryResults1"},"id":"libraryResultsIntro1","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResults1":{"sceneType":"libraryResults","edges":{"prev":"libraryResultsIntro1","next":"libraryResultsIntro2"},"id":"libraryResults1","questions":{"q1":{"type":"mc","text":"Q1) Where do these results suggest that students learn more?","options":[{"value":"the library","label":"The Library"},{"value":"home","label":"Home"},{"value":"neither location","label":"Neither"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER."},"q3":{"type":"survey","text":"Q3) How sure are you these results show students learned more at PLACEHOLDER?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"libraryResultsIntro2":{"edges":{"prev":"libraryResults1","next":"libraryResults2"},"id":"libraryResultsIntro2","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResults2":{"sceneType":"libraryResults","edges":{"prev":"libraryResultsIntro2","next":"libraryResultsIntro3"},"id":"libraryResults2","questions":{"q1":{"type":"mc","text":"Q1) Where do these results suggest that students learn more?","options":[{"value":"the library","label":"The Library"},{"value":"home","label":"Home"},{"value":"neither location","label":"Neither"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER."},"q3":{"type":"survey","text":"Q3) How sure are you these results show students learned more at PLACEHOLDER?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"libraryResultsIntro3":{"edges":{"prev":"libraryResults2","next":"libraryResults3"},"id":"libraryResultsIntro3","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResults3":{"sceneType":"libraryResults","edges":{"prev":"libraryResultsIntro3","next":"libraryResultsIntro4"},"id":"libraryResults3","questions":{"q1":{"type":"mc","text":"Q1) Where do these results suggest that students learn more?","options":[{"value":"the library","label":"The Library"},{"value":"home","label":"Home"},{"value":"neither location","label":"Neither"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER."},"q3":{"type":"survey","text":"Q3) How sure are you these results show students learned more at PLACEHOLDER?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"libraryResultsIntro4":{"edges":{"prev":"libraryResults3","next":"libraryResults4"},"id":"libraryResultsIntro4","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResults4":{"sceneType":"libraryResults","edges":{"prev":"libraryResultsIntro4","next":"libraryResultsIntro5"},"id":"libraryResults4","questions":{"q1":{"type":"mc","text":"Q1) Where do these results suggest that students learn more?","options":[{"value":"the library","label":"The Library"},{"value":"home","label":"Home"},{"value":"neither location","label":"Neither"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER."},"q3":{"type":"survey","text":"Q3) How sure are you these results show students learned more at PLACEHOLDER?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"libraryResultsIntro5":{"edges":{"prev":"libraryResults4","next":"libraryResults5"},"id":"libraryResultsIntro5","sceneType":"standard","customEnterActions":[],"customExitActions":[]},"libraryResults5":{"sceneType":"libraryResults","edges":{"prev":"libraryResultsIntro5","next":"completed"},"id":"libraryResults5","questions":{"q1":{"type":"mc","text":"Q1) Where do these results suggest that students learn more?","options":[{"value":"the library","label":"The Library"},{"value":"home","label":"Home"},{"value":"neither location","label":"Neither"}]},"q2":{"type":"textarea","text":"Q2) Please briefly explain why you said that these results suggest that students learned more at PLACEHOLDER."},"q3":{"type":"survey","text":"Q3) How sure are you these results show students learned more at PLACEHOLDER?","options":[{"value":"a","label":"Not at all sure"},{"value":"b","label":"A little sure"},{"value":"c","label":"Fairly sure"},{"value":"d","label":"Very sure"},{"value":"e","label":"Absolutely sure"}]}},"customEnterActions":[],"customExitActions":[]},"completed":{"edges":{"prev":"libraryResults5"},"id":"completed","sceneType":"standard","customEnterActions":[],"customExitActions":[]}}}')}]);
//# sourceMappingURL=diposttest.bundle.js.map