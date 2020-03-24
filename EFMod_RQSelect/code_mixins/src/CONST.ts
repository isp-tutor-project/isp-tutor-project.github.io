
namespace EFTut_Suppl.EFMod_RQSelect {

	export class CONST {

		public static readonly TUTORCONTAINER = "STutorContainer";

        public static readonly NAVNONE  = 0;
        public static readonly NAVBACK  = 1;
        public static readonly NAVNEXT  = 2;
        public static readonly NAVBOTH  = 3;
        
		public static readonly NEXTSCENE      = "nextbutton";
		public static readonly PREVSCENE      = "prevbutton";

		public static readonly NAVSCENE      = "SCENE";
		public static readonly NAVTUTOR      = "TUTOR";

		static readonly MOUSE_MOVE:string 		= "mousemove";			// Click event from the button 
		static readonly MOUSE_DOWN:string 		= "mousedown";			// Click event from the button 
		static readonly MOUSE_UP:string 		= "mouseup";			// Click event from the button 
		static readonly MOUSE_CLICK:string 		= "click";				// Click event from the button 
		static readonly DOUBLE_CLICK:string 	= "dblclick";			// Click event from the button 

		static readonly CLICK:string 			= "click";				// Click event from the button 
                    
        static readonly FLATSTATE               = 0;        // Single box flat
        static readonly NORMALSTATE             = 1;        // normal box
        static readonly NORMALwBUBBLE           = 2;	     // normal box and button
        static readonly SELECTEDSTATE           = 3;        // Select Box
        static readonly SELECTEDwBUBBLE         = 4;        // Select Box and Button

        static readonly NORMALnoARROW           = 5;        // Box flat no Arrow
        static readonly SELECTEDnoARROW         = 6;        // Box Select no Arrow
        static readonly SELECTED2noARROW        = 7;        // Box Select no Arrow        

        static readonly FTRS_ALL:any            = null;        // null to delete all features for an id
        static readonly VAR_FTR                 = "varsel";    // id for the selected variable feature        

        static readonly FTR_PRE:any            = "FTR_PRE";             // null to delete all features for an id
        static readonly FTR_DEV:any            = "FTR_DEV";             // null to delete all features for an id
        

	}

}