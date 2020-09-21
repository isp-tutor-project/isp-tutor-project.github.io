!function(e){var t={};function s(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(i,r,function(t){return e[t]}.bind(null,r));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=3)}([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(0),s(1);class i{constructor(){this.el=document.querySelector("nav.navbar"),this.homeBtn=document.getElementById("navbar_home_btn"),this.activityTitle=document.getElementById("activity_title"),this.glossaryBtn=document.getElementById("navbar_glossary_btn"),this.glossaryPopup=document.querySelector(".navbar-glossary-popup"),this.signOutBtn=document.getElementById("sign_out_button"),this.signInText=document.getElementById("sign_in_text"),this.goHome=this.goHome.bind(this),this.toggleGlossary=this.toggleGlossary.bind(this),this.signOutUser=this.signOutUser.bind(this),this.homeBtn.addEventListener("click",this.goHome),this.glossaryBtn.addEventListener("click",this.toggleGlossary),this.signOutBtn.addEventListener("click",this.signOutUser)}goHome(e){let t=this.calcHomePage();this.redirectTo(t)}toggleGlossary(e){this.glossaryPopup.classList.toggle("hidden")}calcHomePage(){let e=localStorage.getItem("homepage");return null===e&&(e=window.location.origin+"/"),e}redirectTo(e,t=!1){window.location.href===e?t?window.location.reload():console.log("same url but refresh disabled"):window.location.href=e}signOutUser(e){this.signInText.innerHTML="",this.signInText.classList.add("invisible"),this.signOutBtn.classList.add("invisible");let t=this.calcHomePage();localStorage.clear(),this.redirectTo(t,!0)}displayActivityTitle(e){this.activityTitle.innerText=e.toUpperCase()}displayUser(e){this.signInText.innerHTML="Welcome, "+e,this.signInText.classList.remove("invisible"),this.signOutBtn.classList.remove("invisible")}}s(2);class r{constructor(e){this.el=document.getElementById(e||"snackbar")}show(e){null!=e&&(this.el.innerHTML=e,this.el.classList.add("show"),setTimeout(()=>{this.el.classList.remove("show")},3e3))}}const o={conditionActivities:{1:["matsPreTest","diPreTest","rqSelectBL","hypoWEoneDir","diInstrGR","diCrystalGrowthTest","diPostTest","matsPostTest"],2:["matsPreTest","diPreTest","rqSelectBL","hypoWEbiDir","diInstrGR","diCrystalGrowthTest","diPostTest","matsPostTest"]}};class n{constructor(e){this.dbType=e}setCredentials(e){this.userID=e}lookupUserID(e){}loginUser(e){}registerUser(e){}getUserData(){}getActivityData(e,t=!0){}setActivityData(e,t){}getRQData(){}getCurrHypoTask(){}getInitialHypoData(){}getFinalHypoData(){}saveValue(e,t){}saveJSONValue(e,t){}getBoolValue(e){}getIntValue(e){}getFloatValue(e){}getTextValue(e){}getJSONValue(e){}}class a extends n{constructor(){super()}setCredentials(e,t){super.setCredentials(e,t)}getUserData(){console.count("getUserData() called");let e={};return Promise.all([this.getTextValue("classCode"),this.getTextValue("userID"),this.getActivityData("rqted"),this.getCurrHypoTask(),this.getIntialHypoData(),this.getFinalHypoData()]).then(([t,s,i,r,o,n])=>(e.classCode=t,e.userID=s,e.rqted=i,r&&(e.currHypoTaskIdx=r),o&&(e.firstPrediction=o.firstPrediction,e.initialHypo=o.initialHypo),n&&(e.secondPrediction=n.secondPrediction,e.finalHypo=n.finalHypo),e))}getActivityData(e,t=!0){return this.getJSONValue(e).then(e=>e&&!t?JSON.stringify(e):e)}setActivityData(e,t){return this.saveJSONValue(e,t)}getRQData(){let e=null;return this.getActivityData("rqted").then(t=>(e=t||{moduleState:{selectedArea:{index:1},selectedTopic:{index:1},selectedVariable:{index:1},selectedRQ:{index:1}}},e)).catch(t=>(console.error(t),e))}getCurrHypoTask(){return this.getIntValue("currHypoTaskIdx")}getIntialHypoData(){let e={};return this.getTextValue("firstPrediction").then(t=>null!==t?(e.firstPrediction=t,this.getJSONValue("initialHypo")):(e.firstPrediction=null,null)).then(t=>(e.initialHypo=t,e)).catch(t=>(console.error(t),e))}getFinalHypoData(){let e={};return this.getTextValue("secondPrediction").then(t=>null!==t?(e.secondPrediction=t,this.getJSONValue("finalHypo")):(e.secondPrediction=null,null)).then(t=>(e.finalHypo=t,e)).catch(t=>(console.error(t),e))}setValues(e,t=!1){return new Promise((t,s)=>{try{for(let[t,s]of Object.items(e))localStorage.setItem(t,s);t(!0)}catch(e){s(e)}})}saveValue(e,t){return new Promise((s,i)=>{try{s(localStorage.setItem(e,t))}catch(e){i(e)}})}saveJSONValue(e,t){return new Promise((s,i)=>{try{let i=JSON.stringify(t);s(localStorage.setItem(e,i))}catch(e){i(e)}})}getBoolValue(e){return new Promise((t,s)=>{try{let s=localStorage.getItem(e);void 0===s&&t(s),t("true"===s)}catch(e){s(e)}})}getIntValue(e){let t;return new Promise((s,i)=>{try{let i=localStorage.getItem(e);i&&(t=parseInt(i,10)),s(t)}catch(e){i(e)}})}getFloatValue(e){let t;return new Promise((s,i)=>{try{let i=localStorage.getItem(e);i&&(t=parseFloat(i)),s(t)}catch(e){i(e)}})}getTextValue(e){let t;return new Promise((s,i)=>{try{let i=localStorage.getItem(e);i&&(t=i),s(i)}catch(e){i(e)}})}getJSONValue(e){return new Promise((t,s)=>{try{let s=localStorage.getItem(e);s&&(s=JSON.parse(s)),t(s)}catch(e){s(e)}})}}const l={apiKey:"AIzaSyD7zIk-8V20QqJNSs0cAV0uNL3qjeqLMdM",authDomain:"isptutor.firebaseapp.com",projectId:"isptutor"};class c extends n{constructor(){super("firestore"),firebase.initializeApp(l),this.store=firebase.firestore()}setCredentials(e){super.setCredentials(e),this.userRef=this.store.collection("STUDY_3").doc(e)}getNextUserNum(){return this.store.collection("STUDY_3").doc("study_data").update({usernum:firebase.firestore.FieldValue.increment(1)}).then(()=>this.store.collection("STUDY_3").doc("study_data").get()).then(e=>e.data().usernum).catch(e=>console.error(e))}loginUser(e){let t=this.store.collection("STUDY_3").doc(e);return t.get().then(e=>!!e.exists&&(this.userRef=t,this.getUserData()))}lookupUserID(e){return this.store.collection("STUDY_3").where("classCode","==",e.classCode).where("FN","==",e.FN).where("LN","==",e.LN).where("MON","==",e.MON).where("DAY","==",e.DAY).get().then(e=>{if(1!==e.size)return!1;{console.log("record found");let t=!1,s=e.docs[0].data();return s.userID?t=s.userID:console.log("no userID field",s),t}}).catch(e=>(console.log(e),!1))}registerUser(e){let t=!1;return console.log("registering user"),this.getNextUserNum().then(s=>{let i=s%2+1,r=""+i;t=`USER${s}_${i}`;let o=Object.assign(e,{userID:t,condition:r,completedAssignments:JSON.stringify([])});return this.store.collection("STUDY_3").doc(t).set(o)}).then(()=>t).catch(e=>(console.error(e),!1))}getUserData(){let e=!1;return this.userRef.get().then(t=>{if(t.exists){let s=t.data();e={userID:s.userID,condition:s.condition,assignments:o.conditionActivities[s.condition],completedAssignments:JSON.parse(s.completedAssignments)}}return e})}markActivityAsCompleted(e){return this.userRef.get().then(e=>{let t=e.data();return JSON.parse(t.completedAssignments)}).then(t=>(t.includes(e)||t.push(e),this.userRef.update({completedAssignments:JSON.stringify(t)})))}getCurrHypoTask(){}getActivityData(e,t=!0){return this.userRef.get().then(e=>e.data()).then(s=>{if(console.log("userData",s),!s)return null;let i=s[e];return i?i&&t?JSON.parse(i):i:null}).catch(e=>(console.error(e),null))}setActivityData(e,t){let s=JSON.stringify(t);return this.userRef.update({[e]:s}).then(()=>{console.log("app data saved successefully")}).catch(e=>{console.error(e)})}setValues(e,t=!1){return this.userRef.set(e,{merge:!t})}updateValues(e){return this.userRef.update(e)}deleteValue(e){return this.userRef.update({[e]:firebase.firestore.FieldValue.delete()})}}const u=[{id:"matsPreTest",label:'"MATS" Science Survey (pre)',phase:"pre-training",storageInfo:{id:"matsPreTest",key:"matsPre",features:"FTR_WEB:FTR_PRE"},url:"/edforge/mats.html",implemented:!0},{id:"diPreTest",label:"Data Interpretation Questions - Initial",phase:"pre-training",storageInfo:{id:"diPreTest",key:"diPreTest",features:""},url:"/apps/di-prepost/pretest.html",implemented:!0},{id:"rqSelectBL",label:"Crystal Growth Experiment Intro",phase:"rqSelect",storageInfo:{id:"rqSelectBL",key:"rqted",features:"FTR_WEB:FTR_BASELINE:FTR_NCCRYSTAL"},url:"/edforge/rq_bl.html",implemented:!0},{id:"rqSelectNC",label:"Research Question Selection (No Choice Crystal)",phase:"rqSelect",storageInfo:{id:"rqSelectNC",key:"rqted",features:"FTR_WEB:FTR_NOCHOICE:FTR_NCCRYSTAL"},url:"/edforge/rqSelect.html",implemented:!1},{id:"rqSelectC",label:"Research Question Selection (Choice)",phase:"rqSelect",storageInfo:{id:"rqSelectC",key:"rqted",features:"FTR_WEB:FTR_CHOICE"},url:"/edforge/rqSelect.html",implemented:!1},{id:"hypoDefs",label:"Hypothesis (definition pages only)",phase:"reference",storageInfo:{id:"hypoDefs",key:"hypoDefs",features:"FTR_WEB:FTR_DEFS_ONLY"},url:"/apps/hypo-gr/",implemented:!1},{id:"hypoGRinitialHypoNoCptMap",label:"Hypothesis (Initial Hypo w/o CptMap)",phase:"hypo",storageInfo:{id:"hypoGRinitialHypoNoCptMap",key:"initialHypo",features:"FTR_WEB:FTR_INITIAL_HYP:FTR_NOCPTMAP"},url:"/apps/hypo-gr/",implemented:!1},{id:"hypoGRinitialHypoCptMap",label:"Hypothesis (Initial Hypo with CptMap)",phase:"hypo",storageInfo:{id:"hypoGRinitialHypoCptMap",key:"initialHypo",features:"FTR_WEB:FTR_INITIAL_HYP"},url:"/apps/hypo-gr/",implemented:!1},{id:"hypoGRinitialHypoBiDir",label:"Hypothesis (Initial Hypo Bi-Directional)",phase:"hypo",storageInfo:{id:"hypoGRinitialHypoBiDir",key:"initialHypo",features:"FTR_WEB:FTR_INITIAL_HYP:FTR_BI_DIR"},url:"/apps/hypo-gr/",implemented:!1},{id:"hypoGRfinalHypo",label:"Hypothesis (final hypothesis)",phase:"hypo",storageInfo:{id:"hypoGRfinalHypo",key:"finalHypo",features:"FTR_WEB:FTR_FINAL_HYP:FTR_NO_DEFS"},url:"/apps/hypo-gr/",implemented:!1},{id:"hypoWEoneDir",label:"Hypothesis Lesson",phase:"hypo",storageInfo:{id:"hypoWEoneDir",key:"hypoWE",features:"FTR_ONE_DIRECTIONAL"},url:"/apps/hypo-we/",implemented:!0},{id:"hypoWEbiDir",label:"Hypothesis Lesson",phase:"hypo",storageInfo:{id:"hypoWEbiDir",key:"hypoWE",features:"FTR_BI_DIRECTIONAL"},url:"/apps/hypo-we/",implemented:!0},{id:"diInstrGR",label:"Data Interpretation Instruction",phase:"data-interpretation",storageInfo:{id:"diInstrGR",key:"diInstruction",features:""},url:"/apps/di-instr/",implemented:!0},{id:"diCrystalGrowthTest",label:"Interpret final crystal growth results",phase:"post-training",storageInfo:{id:"diCrystalGrowthTest",key:"diCrystalGrowthTest",features:""},url:"/apps/di-prepost/crystal.html",implemented:!0},{id:"diPostTest",label:"Data Interpretation Questions - Final",phase:"post-training",storageInfo:{id:"diPostTest",key:"diPostTest",features:""},url:"/apps/di-prepost/posttest.html",implemented:!0},{id:"matsPostTest",label:'"MATS" Science Survey (post)',phase:"post-training",storageInfo:{id:"matsPostTest",key:"matsPost",features:"FTR_WEB:FTR_POST"},url:"/edforge/mats.html",implemented:!0}];function d(e){return document.getElementById(e)}let p,g,h,y;const m=d("login_button"),f=d("register_button"),I=d("l-back-button"),T=d("r-back-button"),b=d("login_form"),v=d("login_submit"),S=d("registration_form"),D=d("registration_submit"),_=d("activity_btns_list");function H(e){for(let t of document.querySelectorAll(".page"))t.id===e?t.classList.add("active"):t.classList.remove("active")}function R(e){let t=e.target,s=t.dataset.target,i=document.getElementById(s);console.log(t,i),t.classList.toggle("collapsed"),i.classList.toggle("hidden")}function P(e){p=e,localStorage.setItem("userID",e)}function L(e){return{url:e.target.getAttribute("data-url"),currentActivity:JSON.parse(e.target.getAttribute("data-activity"))}}function N(e){let t=L(e);console.log(`\n    hovering over: ${e.target}\n    url: ${t.url}\n    currentActivity: ${JSON.stringify(t.currentActivity,null,4)}\n    `)}function E(e){e.preventDefault();let t=L(e);localStorage.setItem("currentActivity",JSON.stringify(t.currentActivity)),window.location.href=t.url}function O(e){e&&e.preventDefault(),H("index_page")}const w=e=>e.implemented,C=e=>Object.assign({},e,{active:!1});function A(e){let t;H("home_page"),h.displayUser(p),console.log(e),_.innerHTML="",t=function(e){let t=e.map(C),s=t.findIndex(e=>!e.completed);return-1===s?t:[...t.slice(0,s),(i=t[s],Object.assign({},i,{active:!0})),...t.slice(s+1,t.length)];var i}(u.filter(w).filter(t=>e.assignments.includes(t.id)).map(t=>Object.assign({},t,{completed:e.completedAssignments.includes(t.id)})));t.unshift({id:"histogramLesson",label:"Histogram Lesson - Please complete if you're not familiar with histograms",phase:"pre-training",storageInfo:{id:"histogramLesson",key:"histogramLesson",features:""},url:"/apps/histogram/index.html",implemented:!0,active:!0,completed:!1});for(let e of t){let t,s=document.createElement("li"),i=document.createElement("button");if(e.active||i.classList.add("disabled"),i.classList.add("activity-button"),i.classList.add("btn"),i.type="button",i.innerHTML=e.label,e.url.startsWith("http"))t=e.url;else{let s=localStorage.getItem("homepage");s=s.replace("index.html",""),s.endsWith("/")&&(s=s.slice(0,-1)),t=`${s}${e.url}`}i.setAttribute("data-activity",JSON.stringify(e.storageInfo)),i.setAttribute("data-url",t),i.addEventListener("click",E),i.addEventListener("mouseover",N),s.appendChild(i),_.appendChild(s)}}function k(e,t){let s={};["classcode","fname","lname","bmonth","bday"].forEach(t=>s[t]=`${e}_${t}`);let i=d(s.classcode).value.trim().toUpperCase();return""===i&&(i="STUDY3"),{classCode:i,FN:d(s.fname).value.trim().toUpperCase(),LN:d(s.lname).value.trim().toUpperCase(),MON:d(s.bmonth).value.toUpperCase(),DAY:d(s.bday).value}}for(let e of document.querySelectorAll("button.toggle-button"))e.addEventListener("click",R);m.addEventListener("click",(function(e){e&&e.preventDefault(),H("login_page"),b.reset()})),f.addEventListener("click",(function(e){e&&e.preventDefault(),H("registration_page"),S.reset()})),I.addEventListener("click",O),T.addEventListener("click",O),v.addEventListener("click",e=>{if(e.preventDefault(),b.reportValidity()){let e=k("login");g.lookupUserID(e).then(e=>!!e&&(console.log("account exists: "+e),P(e),g.loginUser(p))).then(e=>{e?A(e):(console.error("loginError"),y.show("login error"))})}}),D.addEventListener("click",e=>{if(e.preventDefault(),S.reportValidity()){let e=k("register");g.lookupUserID(e).then(t=>t?(y.show("Account already exists!"),console.log(`account "${t}" already exists`),!1):g.registerUser(e)).then(e=>e?(P(e),g.loginUser(p)):(y.show("error creating account"),!1)).then(e=>{e?A(e):y.show("login error")})}}),function(){h=new i,y=new r;let e="firestore",t=window.location.href;localStorage.setItem("homepage",t),localStorage.setItem("database",e),g=function(e,t){let s;switch(e){case"firestore":s=new c;break;default:s=new a}return s}(e),console.log(g),window.db=g,p=localStorage.getItem("userID"),p?g.loginUser(p).then(e=>{e?A(e):y.show("login error")}):O()}()}]);
//# sourceMappingURL=homepage.bundle.js.map