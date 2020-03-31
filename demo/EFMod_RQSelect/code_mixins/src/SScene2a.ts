

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene2a {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $onCreateScene() { 
        }

        public $preCreateScene() {

            // By default disable all Navigation - Let scenes decide
            // 
            this.setNavMode(CONST.NAVNONE, CONST.NAVSCENE);
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            this.$("Sbutton.*").hide();
            this.$("Sarea.*|Sselected,SsubTitle1,SsubTitle2,Sor").show();

            this.setSceneValue("AreaSelected", false);       
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
                case "NO_SELECTION":
                    result = !this.getSceneValue("AreaSelected");           
                    break;
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarea?|Sselected").hide();
                            this.$("Sbutton.*").show();
                            this.$("Sbutton.*").enable();
                            break;

                        case "$end":
                            break;
                    }
                    break;

            }
        }

        public $onAction(target:string, evt:string) {

            this.$("Sbutton.*").disable();
            this.$("Sbutton.*").hide();

            this.setSceneValue("AreaSelected", true);       

            switch(target) {
                case "Sbutton1":
                    this.setModuleValue("selectedArea.ontologyKey","S_A1|name");
                    this.setModuleValue("selectedArea.index",1);       
                    
                    this.$("Sarea1|Sselected").show();  

                    this.setSceneValue("Area Name:" + "physical and chemical changes");
                    this.setSceneValue("Area Index:" + 1);
                    break;

                case "Sbutton2":
                    this.setModuleValue("selectedArea.ontologyKey","S_A2|name");
                    this.setModuleValue("selectedArea.index",2);       
                    
                    this.$("Sarea2|Sselected").show();

                    this.setSceneValue("Area Name:" + "heat and temperature");
                    this.setSceneValue("Area Index:" + 2);
                    break;

                case "Sbutton3":
                    this.setModuleValue("selectedArea.ontologyKey","S_A3|name");
                    this.setModuleValue("selectedArea.index",3);       
                    
                    this.$("Sarea3|Sselected").show();

                    this.setSceneValue("Area Name:" + "forces and motion");
                    this.setSceneValue("Area Index:" + 3);
                    break;

                case "Sbutton4":
                    this.setModuleValue("selectedArea.ontologyKey","S_A4|name");
                    this.setModuleValue("selectedArea.index",4);       
                    
                    this.$("Sarea4|Sselected").show();
                    
                    this.setSceneValue("Area Name:" + "plant reproduction");
                    this.setSceneValue("Area Index:" + 4);
                    break;
            }

            this.nextTrack("$onAction:" + target);
        }

    }
}