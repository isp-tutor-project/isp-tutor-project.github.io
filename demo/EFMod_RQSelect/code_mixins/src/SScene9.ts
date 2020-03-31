

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene9 {

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
        }
        
        public $onCreateScene() { 
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            this.setSceneValue("RQSelected", false);     
            
            this.$("SbuttonHL.*").hide();  

            if(this.testFeatures("FTR_NOCHOICE")) {
                this.$("SclickMask.*").show();  
            } 
            else {
                this.$("SclickMask.*").hide();  
            }
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

            switch(nodeId) {
            }

        }

        public $nodePreExit(nodeId:string) {
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {

                case "!SELECTION_COMPLETE":
                    result = !this.getSceneValue("RQSelected");
                    break;
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1CHOICE":
                    switch(cueID) {
                        
                        case "$start":
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track1NOCHOICE":
                    switch(cueID) {
                        
                        case "$start":

                            this.$("{{$EFM_VariableHighlightID}}").show();  
                            this.$("{{$EFM_VariableClickMaskID}}").hide();                              
                            break;

                        case "$end":
                            break;
                    }
                    break;
            }
        }

        public $onAction(target:string, evt:string) {

            this.setSceneValue("RQSelected", true);       

            let x = this.getModuleValue("selectedArea.index");     
            let y = this.getModuleValue("selectedTopic.index");     

            switch(target) {

                case "Sbutton1":
                    this.setModuleValue("selectedVariable.ontologyKey",`S_A${x}_T${y}_V1|name`);
                    this.setModuleValue("selectedVariable.index",1);  
                    
                    this.setModuleValue("selectedRQ", {"ontologyKey":`S_A${x}_T${y}_RQ1`,"index":"1"});  
                    this.setSceneValue("Variable Index:" + 1);
                    break;
                case "Sbutton2":
                    this.setModuleValue("selectedVariable.ontologyKey",`S_A${x}_T${y}_V2|name`);
                    this.setModuleValue("selectedVariable.index",2);  
                    
                    this.setModuleValue("selectedRQ", {"ontologyKey":`S_A${x}_T${y}_RQ2`,"index":"2"});       
                    this.setSceneValue("Variable Index:" + 2);
                    break;
                case "Sbutton3":
                    this.setModuleValue("selectedVariable.ontologyKey",`S_A${x}_T${y}_V3|name`);
                    this.setModuleValue("selectedVariable.index",3);  
                    
                    this.setModuleValue("selectedRQ", {"ontologyKey":`S_A${x}_T${y}_RQ3`,"index":"3"});       
                    this.setSceneValue("Variable Index:" + 3);
                    break;
                case "Sbutton4":
                    this.setModuleValue("selectedVariable.ontologyKey",`S_A${x}_T${y}_V4|name`);
                    this.setModuleValue("selectedVariable.index",4);  
                    
                    this.setModuleValue("selectedRQ", {"ontologyKey":`S_A${x}_T${y}_RQ4`,"index":"4"});       
                    this.setSceneValue("Variable Index:" + 4);
                    break;
            }

            this.nextTrack("$onAction:" + target);
        }

        public $timedEvents(id:string) {
        }
    }
}