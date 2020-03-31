

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SNavigator {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {

            // By default disable all Navigation - Let scenes decide
            // 
            this.setNavMode(CONST.NAVNONE, CONST.NAVSCENE);

            // TODO : Add a uniform way to initialize tutor variables.
            // 
            this.addFeature("FTR_PASS1");

            if(this.testFeatures("FTR_CHOICE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A1");
            }
            else if(this.testFeatures("FTR_NOCHOICE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A2");
            }
            else if(this.testFeatures("FTR_BASELINE")) {
                this.setTutorValue("experimentalGroup.ontologyKey", "EG_A3");
            }

            if(this.testFeatures("FTR_NCPLANTS")) {

                this.setModuleValue("selectedArea",     {"ontologyKey":"S_A4|name",       "index":4});
                this.setModuleValue("selectedTopic",    {"ontologyKey":"S_A4_T1|name",    "index":1});
                this.setModuleValue("selectedVariable", {"ontologyKey":"S_A4_T1_V1|name", "index":1});
                this.setModuleValue("selectedRQ",       {"ontologyKey":"S_A4_T1_RQ1"});

                this.addFeature("FTR_GRHOUSE");

                this.setModuleValue("AreaSelectedID", "Sarea4|Sselected");      // $EFM_AreaSelectedID
                this.setModuleValue("AreaButtonID",   "Sbutton4");              // $EFM_AreaButtonID

                this.setModuleValue("TopicSelectedID", "Stopic1|Sselected");    // $EFM_TopicSelectedID
                this.setModuleValue("TopicButtonID",   "Sbutton1");             // $EFM_TopicButtonID

                this.setModuleValue("VariableHighlightID", "SbuttonHL1");       // $EFM_VariableHighlightID
                this.setModuleValue("VariableClickMaskID", "SclickMask1");      // $EFM_VariableClickMaskID
            }

            else if(this.testFeatures("FTR_NCSODA")) {
                this.setModuleValue("selectedArea",     {"ontologyKey":"S_A1|name",       "index":1});
                this.setModuleValue("selectedTopic",    {"ontologyKey":"S_A1_T2|name",    "index":2});
                this.setModuleValue("selectedVariable", {"ontologyKey":"S_A1_T2_V4|name", "index":4});
                this.setModuleValue("selectedRQ",       {"ontologyKey":"S_A1_T2_RQ4"});

                this.addFeature("FTR_SODA");

                this.setModuleValue("AreaSelectedID", "Sarea1|Sselected");      // $EFM_AreaSelectedID
                this.setModuleValue("AreaButtonID",   "Sbutton1");              // $EFM_AreaButtonID

                this.setModuleValue("TopicSelectedID", "Stopic2|Sselected");    // $EFM_TopicSelectedID
                this.setModuleValue("TopicButtonID",   "Sbutton2");             // $EFM_TopicButtonID

                this.setModuleValue("VariableHighlightID", "SbuttonHL4");       // $EFM_VariableHighlightID
                this.setModuleValue("VariableClickMaskID", "SclickMask4");      // $EFM_VariableClickMaskID
            }

            else if (this.testFeatures("FTR_NCCRYSTAL")) {
                this.setModuleValue("selectedArea", { "ontologyKey": "S_A1|name", "index": 1 });
                this.setModuleValue("selectedTopic", { "ontologyKey": "S_A1_T1|name", "index": 1 });
                this.setModuleValue("selectedVariable", { "ontologyKey": "S_A1_T1_V1|name", "index": 1 });
                this.setModuleValue("selectedRQ", { "ontologyKey": "S_A1_T1_RQ1" });

                this.addFeature("FTR_CRYSTAL");

                this.setModuleValue("AreaSelectedID", "Sarea1|Sselected");      // $EFM_AreaSelectedID
                this.setModuleValue("AreaButtonID", "Sbutton1");              // $EFM_AreaButtonID

                this.setModuleValue("TopicSelectedID", "Stopic1|Sselected");    // $EFM_TopicSelectedID
                this.setModuleValue("TopicButtonID", "Sbutton1");             // $EFM_TopicButtonID

                this.setModuleValue("VariableHighlightID", "SbuttonHL1");       // $EFM_VariableHighlightID
                this.setModuleValue("VariableClickMaskID", "SclickMask1");      // $EFM_VariableClickMaskID
            }


            // DEV ONLY
            // Development only!!!!!! - define experimental group assignment
            // 
            // if(this.testFeatures("FTR_BASELINE")) {

            //     this.setTutorValue("experimentalGroup.ontologyKey", "EG_A3");

            //     this.setModuleValue("selectedArea.ontologyKey", "S_A4");
            //     this.setModuleValue("selectedTopic.ontologyKey", "S_A4_T1");
            //     this.setModuleValue("selectedVariable.ontologyKey", "STBL_A4_T1_V1|name");                
            //     this.setModuleValue("selectedRQ.ontologyKey", "S_A4_T1_RQ1");

            //     this.setModuleValue("selectedArea.index", 4);
            //     this.setModuleValue("selectedTopic.index", 1);
            //     this.setModuleValue("selectedVariable.index", 1);
                
            //     this.addFeature("FTR_GRHOUSE");

            // }
            // if(this.testFeatures("FTR_NOCHOICE")) {

            //     this.setTutorValue("experimentalGroup.ontologyKey", "EG_A2");

            //     this.setModuleValue("selectedArea.ontologyKey", "S_A4");
            //     this.setModuleValue("selectedTopic.ontologyKey", "S_A4_T1");
            //     this.setModuleValue("selectedVariable.ontologyKey", "STBL_A4_T1_V1|name");                
            //     this.setModuleValue("selectedRQ.ontologyKey", "S_A4_T1_RQ1");
                
            //     this.setModuleValue("selectedArea.index", 4);
            //     this.setModuleValue("selectedTopic.index", 1);
            //     this.setModuleValue("selectedVariable.index", 1);
                
            //     this.addFeature("FTR_GRHOUSE");
            // }

        }

        public $onEnterScene() {

        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
        }

        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) { 
        
            return this["$"+templID];
        }


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {
        }

        public $nodePreExit(nodeId:string) {
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(cueID) {
                
                case "$start":
                    console.log("executing CuePoint START");
                    break;
                case "$end":
                    console.log("executing CuePoint END");
                    break;
            }
        }

        public $timedEvents(id:string) {
        }
    }
}