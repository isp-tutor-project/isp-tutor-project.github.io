

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene3 {

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

            this.$("Stopic.|Sarea.topic.,Sarea.title.,Sselected").hide();

            let x = this.getModuleValue("selectedArea.index");     

            this.$(`Stopic1|Sarea${x}topic1,Sarea${x}title1`).show();
            this.$(`Stopic2|Sarea${x}topic2,Sarea${x}title2`).show();

            this.setSceneValue("TopicSelected", false);       

            this.delFeature("FTR_PASS1");
            this.addFeature("FTR_PASS2");
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
                    result = !this.getSceneValue("TopicSelected");           
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
                            this.$("Sbutton.*").show();
                            this.$("Sbutton.*").enable();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track1NOCHOICE":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("{{$EFM_TopicSelectedID}}").show();

                            this.$("{{$EFM_TopicButtonID}}").show();
                            this.$("{{$EFM_TopicButtonID}}").enable();
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

            this.setSceneValue("TopicSelected", true);       

            let x = this.getModuleValue("selectedArea.index");     

            this.delFeature(CONST.FTRS_ALL, CONST.VAR_FTR);

            switch(target) {

                case "Sbutton1":
                    this.setModuleValue("selectedTopic.ontologyKey",`S_A${x}_T1|name`);
                    this.setModuleValue("selectedTopic.index",1);       

                    this.addFeaturebyQuery(`S_A${x}_T1|features`, CONST.VAR_FTR);
                    
                    this.$("Stopic1|Sselected").show();                   

                    this.setSceneValue("Topic Index:" + 1);
                    break;

                case "Sbutton2":
                    this.setModuleValue("selectedTopic.ontologyKey",`S_A${x}_T2|name`);
                    this.setModuleValue("selectedTopic.index",2);       

                    this.addFeaturebyQuery(`S_A${x}_T2|features`, CONST.VAR_FTR);
                    
                    this.$("Stopic2|Sselected").show();

                    this.setSceneValue("Topic Index:" + 2);
                    break;
            }

            this.nextTrack("$onAction:" + target);
        }


        public $timedEvents(id:string) {
        }
    }
}