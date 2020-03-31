//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//** Imports
import { CEFTimeLine }      from "core/CEFTimeLine";

import { TObject }			from "thermite/TObject";
import { THtmlText }        from "thermite/THtmlText";

import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { CEFEvent }         from "events/CEFEvent";

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;
import Text      = createjs.Text;
import { TScene } from "thermite/TScene";




export class TIntroControl extends TObject
{
	//************ Stage Symbols
    
    protected STextBox1:THtmlText;
    protected STextBox2:THtmlText;
    protected SboxNormal:TObject;      // Float
    protected SboxSelect:TObject;      // Float Highlighted
    protected SbubbleNormal:TObject;
    protected SbubbleSelect:TObject;
    protected SboxShadow:TObject;      // Float
    protected SbubbleShadow:TObject;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				

    private FLATSTATE:number               = 0;        // Single box flat
    private NORMALSTATE:number             = 1;        // normal box
    private NORMALwBUBBLE:number           = 2;	    // normal box and button
    private SELECTEDSTATE:number           = 3;        // Select Box
    private SELECTEDwBUBBLE:number         = 4;        // Select Box and Button
    
    private NORMALnoARROW:number           = 5;        // Box flat no Arrow
    private SELECTEDnoARROW:number         = 6;        // Box Select no Arrow
    private SELECTED2noARROW:number        = 7;        // Box Select no Arrow
    
    private currState:number;                   // current state
    private _alpha:number;


	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TIntroControlInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TIntroControl:Constructor");

        this.effectTimeLine = new CEFTimeLine(null, null, {"useTicks":false, "loop":false, "paused":true }, this.tutorDoc);
        this.effectTweens   = new Array<Tween>();

        this.FLATSTATE               = 0;        // Single box flat
        this.NORMALSTATE             = 1;        // normal box
        this.NORMALwBUBBLE           = 2;	    // normal box and button
        this.SELECTEDSTATE           = 3;        // Select Box
        this.SELECTEDwBUBBLE         = 4;        // Select Box and Button
                 
        this.NORMALnoARROW           = 5;        // Box flat no Arrow
        this.SELECTEDnoARROW         = 6;        // Box Select no Arrow
        this.SELECTED2noARROW        = 7;        // Box Select no Arrow
    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public Destructor() : void
	{		
		super.Destructor();
	}


    /**
     * Provides a means to defer adding the HTML component until transition time - The control itself may be persistent
     * in which case we don't want the unused copy on stage.
     * Allow custom controls to override to init subcomponents.
     */
    public addHTMLControls() {
                
        this.STextBox1.addHTMLControls();
        this.STextBox2.addHTMLControls();

        // Start in user defined state or a neutral state if nothing 
        // defined in scripts
        // 
        this.gotoState(this.currState || this.FLATSTATE);
    }


    public set hostScene(scene:TScene) {

        this._hostScene = scene;

        // Initialize subcomponent pointers
        // required for deserialization
        // 
        this.STextBox1.hostScene = scene;
        this.STextBox2.hostScene = scene;
    }

    
    private hideall() {

        this.STextBox1.visible         = false;
        this.STextBox2.visible         = false;
        this.Sarrow.visible            = false;
        this.SboxNormal.visible        = false;
        this.SboxSelect.visible        = false;
        this.SboxShadow.visible        = false;
        this.SbubbleNormal.visible     = false;
        this.SbubbleSelect.visible     = false;
        this.SbubbleShadow.visible     = false;
    }


    public gotoState(state:number) {

        this.hideall();

        this.currState = state;

        switch(state) {
            case this.FLATSTATE:
            this.STextBox1.visible          = true;
            this.SboxNormal.visible         = true;
            this.Sarrow.visible             = true;
            break;

            case this.NORMALSTATE:
            this.STextBox1.visible          = true;
            this.SboxNormal.visible         = true;
            this.SboxShadow.visible         = true;
            this.Sarrow.visible             = true;
            break;

            case this.NORMALwBUBBLE:
            this.STextBox1.visible          = true;
            this.STextBox2.visible          = true;
            this.SboxNormal.visible         = true;
            this.SboxShadow.visible         = true;
            this.SbubbleNormal.visible      = true;
            this.SbubbleShadow.visible      = true;
            this.Sarrow.visible             = true;
            break;

            case this.SELECTEDSTATE:
            this.STextBox1.visible          = true;
            this.SboxSelect.visible         = true;
            this.SboxShadow.visible         = true;
            this.Sarrow.visible             = true;
            break;

            case this.SELECTEDwBUBBLE:
            this.STextBox1.visible          = true;
            this.STextBox2.visible          = true;
            this.SboxSelect.visible         = true;
            this.SboxShadow.visible         = true;
            this.SbubbleSelect.visible      = true;
            this.SbubbleShadow.visible      = true;
            this.Sarrow.visible             = true;
            break;

            case this.NORMALnoARROW:
            this.STextBox1.visible          = true;
            this.SboxNormal.visible         = true;
            this.SboxShadow.visible         = true;
            break;

            case this.SELECTEDnoARROW:
            this.STextBox1.visible          = true;
            this.SboxSelect.visible         = true;
            this.SboxShadow.visible         = true;
            break;

            case this.SELECTED2noARROW:
            this.STextBox1.visible          = true;
            this.SboxSelect.visible         = true;
            this.SboxShadow.visible         = true;
            break;

        }
    }


    // When you have HTML subcomponents you need to override
    // tween targets for the HTMLELements to respond to changes
    // 
    public set alpha(value:number) {

        this._alpha = value;

        if(this.STextBox1 && this.STextBox2) {

            this.STextBox1.alpha = value;
            this.STextBox2.alpha = value;
        }
    }
    
    public get alpha() : number {

        return this._alpha;
    }
    
//*************** Logging state management
	
	public captureLogState(obj:any = null) : Object
	{
		obj = super.captureLogState(obj);
					
		return obj;											   
	}						
	
	public captureXMLState() :any
	{		
		let stateVal:any   = {controller:{}};
		let controller:any = stateVal.controller;

		return stateVal;				
	}		

	public restoreXMLState(stateVal:any) : void
	{
	}		
	
	public compareXMLState(stateVal:any) :boolean
	{
		var bTest:boolean = true;

		return bTest;			
	}		
	
//*************** Logging state management
	
   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
       console.log("deserializing: TIntroControl Custom Control");

       super.deSerializeObj(objData);				

       this.STextBox1.deSerializeObj(objData.STextBox1);
       this.STextBox2.deSerializeObj(objData.STextBox2);
   }
	
}
