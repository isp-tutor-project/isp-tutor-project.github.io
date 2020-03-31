

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene10 {

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
            this.setSceneValue("RQconfirmed", false);       
            this.setModuleValue("RQconfirmation", "UNKNOWN");       
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

            let RQconf = this.getModuleValue("RQconfirmation");       

            switch(constrainId) {

                case "!SELECTION_COMPLETE":
                    result = !this.getSceneValue("RQconfirmed");
                    break;

                case "CHANGE_RQ":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
                case "CHANGE_TOPIC":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
                case "CHANGE_AREA":
                    if(RQconf === constrainId)
                                        result = true;
                    break;
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {
            }
        }

        public $onAction(target:string, evt:string) {

            this.setSceneValue("RQconfirmed", true);       

            switch(target) {

                case "Sbutton1":
                    this.setModuleValue("RQconfirmation", "CHANGE_RQ");       
                    break;
                case "Sbutton2":
                    this.setModuleValue("RQconfirmation", "CHANGE_TOPIC");       
                    break;
                case "Sbutton3":
                    this.setModuleValue("RQconfirmation", "CHANGE_AREA");       
                    break;
                case "Sbutton4":
                    this.setModuleValue("RQconfirmation", "OK");       
                    break;
            }

            this.nextTrack("$onAction:" + target);
        }

        public $timedEvents(id:string) {
        }
    }
}