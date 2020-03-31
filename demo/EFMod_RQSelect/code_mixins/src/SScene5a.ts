

namespace EFTut_Suppl.EFMod_RQSelect {

    export class SScene5a {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $onCreateScene() { 
            this.setSceneValue("complete", false);      
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            this.$("Sarrow.").hide();
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
                case "SETCOMPLETE": 
                this.setSceneValue("complete", true);   
                break;
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1a":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                        break;

                        case "$end":
                            break;
                    }
                    break;

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow1").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;
                    
                case "track2":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow2").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track3":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow3").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track4":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow4").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track5":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow5").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track6":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow6").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track7":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow7").show();
                            break;

                        case "$end":
                            break;
                    }
                    break;

                case "track8":
                    switch(cueID) {
                        
                        case "$start":
                            this.$("Sarrow.").hide();
                            this.$("Sarrow8").show();
                            break;

                        case "$end":                            
                            break;
                    }
                    break;
            }
        }

       //***********************************************
        // Scene State methods
        //

        public $queryFinished() : boolean {             

            let result:boolean = this.getSceneValue("complete"); 

            return  result; 
        }


        public $onAction(target:string) {         
            
            switch(target) {
            }
        }


        public $onSelect(target:string) {            

            switch(target) {
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }        
    }
}