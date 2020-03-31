(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EFMod_TEDInstr_atlas_", frames: [[0,390,267,353],[0,0,300,388]]}
];


// symbols:



(lib.Bitmap14 = function() {
	this.initialize(ss["EFMod_TEDInstr_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.initialize(ss["EFMod_TEDInstr_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TC_TObject__ExptSep = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(9.6,1,1).p("EAAAgrbMAAABW3");
	this.shape.setTransform(0,277.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-4.7,9.5,565.4000000000001);


(lib.TC_TVirtual__ExptRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,255,0.988)").s().dr(-475,-329.5,950,659);
	this.shape.setTransform(474.975,329.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__ExptRgn, new cjs.Rectangle(0,0,950,659), null);


(lib.TC_TObject__CondTitle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Condition #2", "bold 41px 'PT Sans'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 244;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__CondTitle2, new cjs.Rectangle(0,0,248,59.4), null);


(lib.TC_TObject__CondTitle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Condition #1", "bold 41px 'PT Sans'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__CondTitle1, new cjs.Rectangle(0,0,259,61.4), null);


(lib.TC_TObject__StudentIcon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.3937,1.3937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__StudentIcon2, new cjs.Rectangle(0,0,418.1,540.8), null);


(lib.TC_TObject__StudentIcon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.5193,1.5193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__StudentIcon1, new cjs.Rectangle(0,0,405.7,536.3), null);


(lib.TC_TObject__QuestionBorder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(3,1,1).rr(-652,-40.05,1304,80.1,10);
	this.shape.setTransform(651.975,40.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__QuestionBorder, new cjs.Rectangle(-1.5,-1.5,1307,83.1), null);


(lib.TC_TButton__S18Vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - POST", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.25,27.05);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.25,85.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.25,85.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.25,85.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.25,85.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S15VectorB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - FFocus2", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 564;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.25,27.05);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999",lineWidth:447},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.25,85.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.25,85.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.25,85.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.25,85.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S15VectorA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - FFocus1", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 564;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.25,27.05);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999",lineWidth:447},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.25,85.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.25,85.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.25,85.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.25,85.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S7VectorB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - EXP2", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.25,27.05);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999"},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.25,85.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.25,85.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.25,85.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.25,85.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S7VectorA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - EXP1", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.25,27.05);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.25,85.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.25,85.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.25,85.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.25,85.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TObject__SubmitBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s("#0000CC").ss(3,1,1).rr(-277.85,-85.35,555.7,170.7,15);
	this.shape.setTransform(277.825,85.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__SubmitBG, new cjs.Rectangle(-1.5,-1.5,558.7,173.7), null);


(lib.ef_TutorModule = function(options) {
	this._element = new $.ef.TutorModule(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.TC_TObject__ProgressState2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#454545").ss(1,1,1).dr(-35.5,-35.5,71,71);
	this.shape.setTransform(48.0439,21.3941,1.3528,0.6022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__ProgressState2, new cjs.Rectangle(-1,-1,98.1,44.8), null);


(lib.TC_TObject__ProgressState1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s("#454545").ss(1,1,1).dr(-35.5,-35.5,71,71);
	this.shape.setTransform(48.0439,21.3941,1.3528,0.6022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__ProgressState1, new cjs.Rectangle(-1,-1,98.1,44.8), null);


(lib.TC_TObject__ProgressBackGnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#454545").ss(1,1,1).dr(-35.5,-35.5,71,71);
	this.shape.setTransform(48.0439,21.3941,1.3528,0.6022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__ProgressBackGnd, new cjs.Rectangle(-1,-1,98.1,44.8), null);


(lib.TC_TObject__NavBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9FD").s("#AAAAAA").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__NavBackground, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__contentFrame3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,-113);
	this.shape.setTransform(866.5,523.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame3, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,11.4);
	this.shape.setTransform(866.5,523.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame2, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,11.4,-113);
	this.shape.setTransform(866.5,523.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame1, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rr(-866.5,-523.4,1733,1046.8,11.4);
	this.shape.setTransform(866.5,523.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame0, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.NextOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextOutline, new cjs.Rectangle(-17.8,-17.8,114.1,77.6), null);


(lib.NextButtonFocus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonFocus, new cjs.Rectangle(-15,-15,108.5,71.9), null);


(lib.NextButtonDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_2.setTransform(38.975,10.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape_3.setTransform(39,-77.05,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDisabled, new cjs.Rectangle(-52.3,-126,182.60000000000002,228.3), null);


(lib.SpinOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpinOutline, new cjs.Rectangle(-17.8,-17.8,114.1,77.6), null);


(lib.contentFrame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,11.4);
	this.shape.setTransform(866.5,523.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.contentFrame2, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextArea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.tablearea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tablearea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.listbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.listbox, new cjs.Rectangle(-1,-1,102,102), null);


(lib.TC_TTEDContainer__AllDomains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Region
	this.ScontrolRegion = new lib.TC_TVirtual__ExptRgn();
	this.ScontrolRegion.name = "ScontrolRegion";
	this.ScontrolRegion.parent = this;
	this.ScontrolRegion.setTransform(473.9,328.45,1,1,0,0,0,474.9,329.4);

	this.timeline.addTween(cjs.Tween.get(this.ScontrolRegion).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TTEDContainer__AllDomains, new cjs.Rectangle(-1,-0.9,950,658.9), null);


(lib.TC_TButton__StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("Start", "bold 85px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 112;
	this.Slabel.lineWidth = 262;
	this.Slabel.parent = this;
	this.Slabel.setTransform(277.8,30.35);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4));

	// Layer_1
	this.shape = new lib.TC_TObject__SubmitBG();
	this.shape.name = "shape";
	this.shape.parent = this;
	this.shape.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape, 0, 1, 1);

	this.shape_1 = new lib.TC_TObject__SubmitBG();
	this.shape_1.name = "shape_1";
	this.shape_1.parent = this;
	this.shape_1.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_1, 0, 1, 1);

	this.shape_2 = new lib.TC_TObject__SubmitBG();
	this.shape_2.name = "shape_2";
	this.shape_2.parent = this;
	this.shape_2.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_2, 0, 1, 1);

	this.shape_3 = new lib.TC_TObject__SubmitBG();
	this.shape_3.name = "shape_3";
	this.shape_3.parent = this;
	this.shape_3.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,558.7,173.7);


(lib.TC_TVirtual__SceneRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.instance = new lib.contentFrame2();
	this.instance.parent = this;
	this.instance.setTransform(960,595.4,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,210,210,0.047)").s("#000066").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__SceneRgn, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TProgressEl__ProgressType2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TC_TObject_ProgressState2
	this.Sstate2 = new lib.TC_TObject__ProgressState2();
	this.Sstate2.name = "Sstate2";
	this.Sstate2.parent = this;
	this.Sstate2.setTransform(32.15,10.75,0.67,0.5029,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate2).wait(1));

	// TC_TObject_ProgressState1
	this.Sstate1 = new lib.TC_TObject__ProgressState1();
	this.Sstate1.name = "Sstate1";
	this.Sstate1.parent = this;
	this.Sstate1.setTransform(32.15,10.75,0.67,0.5029,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate1).wait(1));

	// TC_TObject_ProgressBackGnd
	this.Sstate0 = new lib.TC_TObject__ProgressBackGnd();
	this.Sstate0.name = "Sstate0";
	this.Sstate0.parent = this;
	this.Sstate0.setTransform(32.15,10.75,0.67,0.5029,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate0).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TProgressEl__ProgressType2, new cjs.Rectangle(-0.3,-0.2,65,22), null);


(lib.TC_TProgressEl__ProgressType1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// TC_TObject_ProgressState2
	this.Sstate2 = new lib.TC_TObject__ProgressState2();
	this.Sstate2.name = "Sstate2";
	this.Sstate2.parent = this;
	this.Sstate2.setTransform(48,21.4,1,1,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate2).wait(1));

	// TC_TObject_ProgressState1
	this.Sstate1 = new lib.TC_TObject__ProgressState1();
	this.Sstate1.name = "Sstate1";
	this.Sstate1.parent = this;
	this.Sstate1.setTransform(48,21.4,1,1,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate1).wait(1));

	// TC_TObject_ProgressBackGnd
	this.Sstate0 = new lib.TC_TObject__ProgressBackGnd();
	this.Sstate0.name = "Sstate0";
	this.Sstate0.parent = this;
	this.Sstate0.setTransform(48,21.4,1,1,0,0,0,48,21.4);

	this.timeline.addTween(cjs.Tween.get(this.Sstate0).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TProgressEl__ProgressType1, new cjs.Rectangle(-0.5,-0.5,97.1,43.8), null);


(lib.TC_TObject__navnexthit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(149.95,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140.025,86.025,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnexthit, new cjs.Rectangle(0,-5.3,231.3,182.60000000000002), null);


(lib.TC_TObject__navnextdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NextButtonDisabled
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(149.95,86,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// NEXT
	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.alpha = 0.00000000;
	this.text.parent = this;
	this.text.setTransform(52,71.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140.025,86.025,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdisabled, new cjs.Rectangle(0,-5.3,231.3,182.8), null);


(lib.TC_TObject__navbackhit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// NextButtonFocus
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(76.05,86,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(85.975,86.025,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackhit, new cjs.Rectangle(-5.3,-5.3,228.3,182.60000000000002), null);


(lib.TC_TObject__navbackdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(76.05,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(85.975,86.025,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdisabled, new cjs.Rectangle(-5.3,-5.3,228.3,182.8), null);


(lib.NextButtonUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8000").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8000").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.NextOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonUp, new cjs.Rectangle(-17.8,-17.8,114.1,77.6), null);


(lib.NextButtonOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonOver, new cjs.Rectangle(-17.8,-17.8,114.1,77.6), null);


(lib.NextButtonDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.225,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.225,20.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDown, new cjs.Rectangle(-17.8,-17.8,114.1,77.6), null);


(lib.TC_THtmlText__Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.TextArea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;
	this.SControlContainer.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlText__Text1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_THtmlTable__Table1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.tablearea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlTable__Table1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_THtmlList1__CustomList1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.listbox();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlList1__CustomList1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_TScene__TEDQuest4B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.15,200.9,1.036,2.1985,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(955.3,363.35,15.7172,0.7944,0,0,0,49.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,200.2,13.0469,1.363,0,0,0,49.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.35,697.5,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Ssep
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960.9,792.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Ssep).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,697.5,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.95,471.35,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(535.5,472.35,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4B, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest4A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.15,200.9,1.036,2.1985,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,200.2,13.0469,1.363,0,0,0,49.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.05,361.45,9.9,0.68,0,0,0,49.3,50);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.35,697.5,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Ssep
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960.9,792.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Ssep).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,697.5,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.95,471.35,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(535.5,472.35,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4A, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(974.35,240.5,13.1209,2.2547,0,0,0,50.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.35,697.5,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Ssep
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960.9,792.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Ssep).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,697.5,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.95,471.35,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(535.5,472.35,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest1AB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,138.15,16.7845,0.9881,0,0,0,50.9,50.2);
	this.Stitle.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// QBorder
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960.9,794.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.QBorder = new lib.TC_TObject__QuestionBorder();
	this.QBorder.name = "QBorder";
	this.QBorder.parent = this;
	this.QBorder.setTransform(960.05,253.4,0.6603,1,0,0,0,652,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.QBorder},{t:this.Ssep}]}).wait(1));

	// Layer_5
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.05,253.4,0.6603,1,0,0,0,652,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.75,253.05,8.473,0.62,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(955.3,363.35,15.7172,0.7944,0,0,0,49.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.35,697.5,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Ssep
	this.Ssep_1 = new lib.TC_TObject__ExptSep();
	this.Ssep_1.name = "Ssep_1";
	this.Ssep_1.parent = this;
	this.Ssep_1.setTransform(960.9,792.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Ssep_1).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,697.5,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.95,471.35,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(535.5,472.35,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// Layer_1
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest1AB, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,138.15,16.7845,0.9881,0,0,0,50.9,50.2);
	this.Stitle.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// QBorder
	this.QBorder = new lib.TC_TObject__QuestionBorder();
	this.QBorder.name = "QBorder";
	this.QBorder.parent = this;
	this.QBorder.setTransform(960.05,253.4,0.6603,1,0,0,0,652,40.1);

	this.timeline.addTween(cjs.Tween.get(this.QBorder).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.75,253.05,8.473,0.62,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.05,344,9.9,0.68,0,0,0,49.3,50);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.35,697.5,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Ssep
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960.9,792.9,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Ssep).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,697.5,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.95,471.35,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(535.5,472.35,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest1, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQ1Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Ssep = new lib.TC_TObject__ExptSep();
	this.Ssep.name = "Ssep";
	this.Ssep.parent = this;
	this.Ssep.setTransform(960,676.25,1,1,0,0,0,0,277.9);
	new cjs.ButtonHelper(this.Ssep, 0, 1, 1);

	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1233.45,580.85,0.8443,0.8443,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sexpt2},{t:this.Ssep}]}).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(353.5,580.85,0.8443,0.8443,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,184.65,16.7845,0.9881,0,0,0,50.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// TC_TObject__CondTitle2
	this.Scond2 = new lib.TC_TObject__CondTitle2();
	this.Scond2.name = "Scond2";
	this.Scond2.parent = this;
	this.Scond2.setTransform(1419.05,355.55,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond2).wait(1));

	// TC_TObject__CondTitle1
	this.Scond1 = new lib.TC_TObject__CondTitle1();
	this.Scond1.name = "Scond1";
	this.Scond1.parent = this;
	this.Scond1.setTransform(524.6,356.55,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.Scond1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQ1Intro, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__SceneStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Sstart = new lib.TC_TButton__StartButton();
	this.Sstart.name = "Sstart";
	this.Sstart.parent = this;
	this.Sstart.setTransform(682.2,492.15);
	new cjs.ButtonHelper(this.Sstart, 0, 1, 2, false, new lib.TC_TButton__StartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sstart).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__SceneStart, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.4,601.5,15.0652,8.3431,0,0,0,49.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene21, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,450.6,8.3395,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// QBorder
	this.QBorder = new lib.TC_TObject__QuestionBorder();
	this.QBorder.name = "QBorder";
	this.QBorder.parent = this;
	this.QBorder.setTransform(960.1,200.95,0.8922,1.3513,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.QBorder).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(954.25,200.45,11.4499,0.8378,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.3,336.55,14.8257,0.68,0,0,0,49.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene20, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,524,8.3395,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.65,300.85,16.439,3.1695,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene19, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.5895,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene18, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(960.35,472.55,15.814,1.0334,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(546.4,570.6,8.3395,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.65,246.85,16.439,3.1695,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene17, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(546.4,496.8,8.3395,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(958.05,292.25,16.439,1.7004,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene16, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(960.45,676,10.5828,3.04,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(958.05,387.2,16.439,1.7004,0,0,0,50.1,50.1);

	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(958.05,192.25,16.439,1.7004,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.STextBox1},{t:this.Squestion}]}).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene15, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.5895,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene6, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.5895,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene5, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.TC_TObject__StudentIcon2();
	this.instance.parent = this;
	this.instance.setTransform(363.1,705.4,1,1,0,0,0,209.1,270.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.STextBox2 = new lib.TC_THtmlText__Text1();
	this.STextBox2.name = "STextBox2";
	this.STextBox2.parent = this;
	this.STextBox2.setTransform(1139.95,574.1,10.4195,2.6289,0,0,0,50,50.2);

	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,234.35,14.019,2.3188,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.STextBox1},{t:this.STextBox2}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene4, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.TC_TObject__StudentIcon1();
	this.instance.parent = this;
	this.instance.setTransform(954.8,698.1,1,1,0,0,0,202.8,268.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,253.85,14.019,2.3188,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene3, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(960.45,676,10.5828,3.04,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.65,300.85,16.439,3.1695,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene2, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sbutton4
	this.Sbutton5 = new lib.TC_TButton__S18Vector();
	this.Sbutton5.name = "Sbutton5";
	this.Sbutton5.parent = this;
	this.Sbutton5.setTransform(1157.05,894.75,0.8643,0.8643);
	new cjs.ButtonHelper(this.Sbutton5, 0, 1, 2, false, new lib.TC_TButton__S18Vector(), 3);

	this.Sbutton4 = new lib.TC_TButton__S15VectorB();
	this.Sbutton4.name = "Sbutton4";
	this.Sbutton4.parent = this;
	this.Sbutton4.setTransform(1157.05,707.55,0.8643,0.8643);
	new cjs.ButtonHelper(this.Sbutton4, 0, 1, 2, false, new lib.TC_TButton__S15VectorB(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sbutton4},{t:this.Sbutton5}]}).wait(1));

	// Sbutton3
	this.Sbutton3 = new lib.TC_TButton__S15VectorA();
	this.Sbutton3.name = "Sbutton3";
	this.Sbutton3.parent = this;
	this.Sbutton3.setTransform(1157.05,507.5,0.8643,0.8643);
	new cjs.ButtonHelper(this.Sbutton3, 0, 1, 2, false, new lib.TC_TButton__S15VectorA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton3).wait(1));

	// Sbutton2
	this.Sbutton2 = new lib.TC_TButton__S7VectorB();
	this.Sbutton2.name = "Sbutton2";
	this.Sbutton2.parent = this;
	this.Sbutton2.setTransform(1157.05,307.45,0.8643,0.8643);
	new cjs.ButtonHelper(this.Sbutton2, 0, 1, 2, false, new lib.TC_TButton__S7VectorB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton2).wait(1));

	// Sbutton1
	this.Sbutton1 = new lib.TC_TButton__S7VectorA();
	this.Sbutton1.name = "Sbutton1";
	this.Sbutton1.parent = this;
	this.Sbutton1.setTransform(1157.05,107.4,0.8643,0.8643);
	new cjs.ButtonHelper(this.Sbutton1, 0, 1, 2, false, new lib.TC_TButton__S7VectorA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton1).wait(1));

	// Layer_2
	this.text = new cjs.Text("Target Variable", "bold 63px 'Arial Black'");
	this.text.lineHeight = 91;
	this.text.lineWidth = 602;
	this.text.parent = this;
	this.text.setTransform(170.45,707.75);

	this.SListBox3 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox3.name = "SListBox3";
	this.SListBox3.parent = this;
	this.SListBox3.setTransform(599.9,839.75,8.6121,0.637,0,0,0,50.1,50);

	this.text_1 = new cjs.Text("Topic", "bold 63px 'Arial Black'");
	this.text_1.lineHeight = 91;
	this.text_1.lineWidth = 602;
	this.text_1.parent = this;
	this.text_1.setTransform(170.45,432.75);

	this.text_2 = new cjs.Text("Area of Science", "bold 63px 'Arial Black'");
	this.text_2.lineHeight = 91;
	this.text_2.lineWidth = 602;
	this.text_2.parent = this;
	this.text_2.setTransform(170.45,152.5);

	this.SListBox2 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox2.name = "SListBox2";
	this.SListBox2.parent = this;
	this.SListBox2.setTransform(599.9,565.05,8.6121,0.637,0,0,0,50.1,50);

	this.SListBox1 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox1.name = "SListBox1";
	this.SListBox1.parent = this;
	this.SListBox1.setTransform(599.9,290.35,8.6121,0.637,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SListBox1},{t:this.SListBox2},{t:this.text_2},{t:this.text_1},{t:this.SListBox3},{t:this.text}]}).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1a, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,524,8.3395,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.65,300.85,16.439,3.1695,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__EndCloak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.text = new cjs.Text("You are finished.\n\nThank you \nfor using TED", "bold 90px 'PT Sans'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 118;
	this.text.lineWidth = 948;
	this.text.parent = this;
	this.text.setTransform(960,350.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(56.6,1,1).dr(-960,-600,1920,1200);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__EndCloak, new cjs.Rectangle(-28.3,-28.3,1976.6,1256.6), null);


(lib.TC_TProgress__Progress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmA3QgPgLgEgRIAhgFQACAJAGAFQAHAFALAAQAMAAAHgEQAEgEAAgFQAAgEgCgCQgDgDgIgCQgngJgLgHQgPgJAAgSQAAgQANgLQANgLAbAAQAYAAANAIQAMAJAFAQIgfAGQgCgIgGgDQgFgEgKAAQgNAAgFADQgEADAAAEQAAADADADQAFADAZAGQAaAGALAJQAKAIAAAPQAAARgOANQgOAMgcAAQgZAAgPgKg");
	this.shape.setTransform(150.125,23.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA3QgPgLgEgRIAhgFQACAJAGAFQAHAFALAAQAMAAAHgEQAEgEAAgFQAAgEgCgCQgDgDgIgCQgngJgLgHQgPgJAAgSQAAgQANgLQANgLAbAAQAYAAANAIQAMAJAFAQIgfAGQgCgIgGgDQgFgEgKAAQgNAAgFADQgEADAAAEQAAADADADQAFADAZAGQAaAGALAJQAKAIAAAPQAAARgOANQgOAMgcAAQgZAAgPgKg");
	this.shape_1.setTransform(136.775,23.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_2.setTransform(123.6258,23.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBAIAAh8IAeAAIAAASQAIgNAFgEQAHgEAIAAQALAAAKAHIgKAcQgIgFgHAAQgHAAgFAEQgEAEgDAKQgCAKAAAeIAAAng");
	this.shape_3.setTransform(113.325,23.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBOQgOgKAAgRIAAgFIAmAGQABAGADADQAFADAJAAQANAAAGgEQAFgDACgFQACgEAAgMIAAgSQgPAVgWgBQgZABgOgWQgMgQAAgZQAAgfAPgQQAPgRAXAAQAWAAAPAVIAAgSIAfAAIAABuQAAAXgEALQgEAKgGAHQgHAGgLAEQgLADgRAAQgeAAgNgLgAgSg2QgIAKAAASQAAAVAIAIQAHAJALAAQAMAAAIgKQAIgIAAgTQAAgTgIgJQgIgKgMAAQgLAAgHAJg");
	this.shape_4.setTransform(100.125,26.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA5QgQgHgIgPQgIgPAAgVQAAgQAIgPQAIgQAPgIQAPgIARAAQAcAAASASQASATAAAbQAAAcgSATQgSASgcAAQgQAAgPgIgAgVgbQgIAKAAARQAAATAIAJQAJAKAMAAQANAAAJgKQAIgJAAgTQAAgRgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_5.setTransform(85.775,23.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBAIAAh8IAeAAIAAASQAIgNAFgEQAHgEAIAAQALAAAKAHIgKAcQgIgFgHAAQgHAAgFAEQgEAEgDAKQgCAKAAAeIAAAng");
	this.shape_6.setTransform(74.675,23.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhBBWIAAirIA4AAQAfAAAJADQAPADAKANQAKAOAAAUQAAAQgGALQgGAJgIAHQgJAFgKACQgMADgWAAIgXAAIAABBgAgegHIATAAQATAAAHgDQAHgDAEgFQAEgGAAgHQAAgKgFgGQgGgGgIgCIgYgBIgRAAg");
	this.shape_7.setTransform(61.375,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BVIgDgaQAIADAGAAQAMgBAFgGQAFgHAEgLIgwh8IAjAAIAdBYIAdhYIAiAAIgsB3IgHAWQgFALgEAGQgEAFgEAEQgFADgHACQgIACgJABQgKgBgJgCg");
	this.shape_8.setTransform(39.6,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBWIAAiGIgiCGIggAAIgiiGIAACGIggAAIAAirIA0AAIAeB1IAfh1IA0AAIAACrg");
	this.shape_9.setTransform(23.05,21.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#454545").ss(1,1,1).p("EgxhgCfMBjDAAAQAyAAAAAyIAADbQAAAygyAAMhjDAAAQgyAAAAgyIAAjbQAAgyAyAAg");
	this.shape_10.setTransform(85.1341,21.7628,0.2644,1.3163);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("EgxhACgQgyAAAAgyIAAjbQAAgyAyAAMBjDAAAQAyAAAAAyIAADbQAAAygyAAg");
	this.shape_11.setTransform(85.1341,21.7628,0.2644,1.3163);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAFAyIAAgUIgoAAIAAgRIAqg+IARAAIAAA+IAMAAIAAARIgMAAIAAAUgAgRANIAWAAIAAghg");
	this.shape_12.setTransform(704.15,32.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAiA0IgNgJQgKAFgLAAQgXAAgOgOQgMgOAAgXQAAgYAMgOQAOgOAWAAQAWAAAMAOQANAOAAAYQAAAMgDAKQgDAHgGAHQAIAGAJADIgIAOIgJgEgAgVgdQgHAIgBASQABAQAHAJQAIAJALAAQAEAAAEgBIgLgHIAFgLQAJADAJAHQAEgFACgGQACgHAAgHQAAgSgIgIQgIgJgLAAQgMAAgIAJg");
	this.shape_13.setTransform(695.05,32.95);

	this.Sprog7 = new lib.TC_TProgressEl__ProgressType2();
	this.Sprog7.name = "Sprog7";
	this.Sprog7.parent = this;
	this.Sprog7.setTransform(698.75,32.75,0.9169,1,0,0,0,32.2,10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgWAsQgJgIgBgNIASgDQABAIAEADQAEAFAFAAQAFAAAEgFQAEgFAAgHQAAgIgDgEQgEgEgGAAIgIABIACgPQAHABAEgEQAEgEAAgGQAAgEgDgEQgDgCgEAAQgFgBgDAEQgEADAAAHIgSgDQACgJAEgGQADgFAHgDQAHgDAIAAQANAAAJAJQAHAHAAAKQAAANgPAHQAJACAFAGQAFAGAAAKQAAAMgKAKQgJAJgOAAQgNAAgJgHg");
	this.shape_14.setTransform(645.175,32.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAiA0IgOgJQgJAFgLAAQgXAAgNgOQgNgOgBgXQABgYANgOQANgOAXAAQAUAAANAOQANAOABAYQgBAMgDAKQgDAHgFAHQAHAGAIADIgHAOIgJgEgAgVgdQgIAIAAASQAAAQAIAJQAIAJALAAQAEAAAEgBIgMgHIAGgLQAJADAJAHQAEgFACgGQACgHAAgHQAAgSgIgIQgHgJgMAAQgMAAgIAJg");
	this.shape_15.setTransform(636.05,32.95);

	this.Sprog6 = new lib.TC_TProgressEl__ProgressType2();
	this.Sprog6.name = "Sprog6";
	this.Sprog6.parent = this;
	this.Sprog6.setTransform(639.75,32.75,0.9169,1,0,0,0,32.2,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AghAyQABgKAGgJQAFgJAQgPIAPgPQAEgGAAgGQAAgHgDgDQgEgDgGAAQgFAAgDADQgEAEAAAIIgUgCQACgQAJgGQAJgHANAAQAPAAAIAIQAJAIAAAMQAAAGgDAGQgCAHgGAFIgMANIgLALIgEAFIAmAAIAAASg");
	this.shape_16.setTransform(586.025,32.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAiA0IgOgJQgJAFgLAAQgXAAgOgOQgMgOAAgXQAAgYAMgOQAOgOAWAAQAWAAANAOQAMAOAAAYQABAMgEAKQgDAHgFAHQAHAGAJADIgIAOIgJgEgAgVgdQgHAIAAASQAAAQAHAJQAIAJAMAAQADAAAEgBIgMgHIAGgLQAJADAJAHQAEgFACgGQACgHAAgHQAAgSgIgIQgIgJgLAAQgMAAgIAJg");
	this.shape_17.setTransform(577.05,32.95);

	this.Sprog5 = new lib.TC_TProgressEl__ProgressType2();
	this.Sprog5.name = "Sprog5";
	this.Sprog5.parent = this;
	this.Sprog5.setTransform(580.75,32.75,0.9169,1,0,0,0,32.2,10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AADAyIAAhHQgJAKgPAEIAAgRQAHgCAJgHQAIgHADgJIAQAAIAABjg");
	this.shape_18.setTransform(526.6,32.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAiA0IgNgJQgKAFgLAAQgXAAgOgOQgNgOABgXQgBgYANgOQAOgOAWAAQAVAAANAOQANAOABAYQgBAMgDAKQgCAHgHAHQAIAGAIADIgHAOIgJgEgAgVgdQgIAIAAASQAAAQAIAJQAIAJALAAQAEAAAEgBIgLgHIAFgLQAJADAJAHQAEgFACgGQACgHAAgHQAAgSgIgIQgHgJgMAAQgMAAgIAJg");
	this.shape_19.setTransform(518.05,32.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgWAgQgIgGgDgKIATgDQACAFADADQAEADAGAAQAHAAAEgDQADgCAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgBgCgFgBQgWgFgHgEQgIgFAAgLQAAgJAHgHQAIgGAPAAQAOAAAHAFQAIAFACAJIgSAEQgBgFgDgCQgDgCgGAAQgHAAgDACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQADACAOAEQAQADAGAFQAGAEAAAKQAAAKgIAHQgJAHgQAAQgOAAgJgGg");
	this.shape_20.setTransform(656.075,11.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgGASIgDgSIAAgRIATAAIAAARIgDASg");
	this.shape_21.setTransform(650.675,6.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgjAzIAAhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQAMAAAJAKQAKAKgBASQABARgKAKQgJAKgMAAQgFAAgFgDQgFgCgGgGIAAAlgAgLgdQgFAFAAALQAAAMAGAFQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgMgFgFQgEgGgHAAQgGAAgFAGg");
	this.shape_22.setTransform(645,12.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_23.setTransform(636.575,11.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AglAyIAAhjIBJAAIAAAQIg1AAIAAAXIAxAAIAAAQIgxAAIAAAbIA3AAIAAARg");
	this.shape_24.setTransform(628.175,9.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAOAlIAAglQAAgLgBgDQgBgDgDgCQgDgCgEAAQgEAAgEACQgEADgCAFQgBAEAAALIAAAhIgTAAIAAhIIASAAIAAALQAKgMANAAQAGAAAGACQAFACADAEQACAEABAEIABANIAAAsg");
	this.shape_25.setTransform(615.25,10.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgYAtQgIgGAAgKIAAgCIAWADQABAEACABQADACAEAAQAIAAADgCQADgCACgDQABgCAAgHIAAgLQgKAMgMAAQgOAAgIgMQgIgKABgNQgBgTAJgJQAKgKAMAAQANAAAJAMIAAgKIASAAIAABAQAAANgCAGQgDAGgEAEQgEAEgFACQgHACgKAAQgSAAgHgHgAgKgfQgEAFgBALQABAMAEAEQAFAGAFAAQAHAAAFgGQAEgEABgLQgBgLgEgGQgFgFgHAAQgGAAgEAFg");
	this.shape_26.setTransform(606.55,12.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgJAyIAAhIIATAAIAABIgAgJggIAAgRIATAAIAAARg");
	this.shape_27.setTransform(600.525,9.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgWAgQgIgGgDgKIATgDQACAFADADQAEADAGAAQAHAAAEgDQADgCAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgBgCgFgBQgWgFgHgEQgIgFAAgLQAAgJAHgHQAIgGAPAAQAOAAAHAFQAIAFACAJIgSAEQgBgFgDgCQgDgCgGAAQgHAAgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQADACAOAEQAQADAGAFQAGAEAAAKQAAAKgIAHQgJAHgQAAQgOAAgJgGg");
	this.shape_28.setTransform(594.475,11.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgaAaQgHgKAAgQQAAgRAKgKQAJgKAOAAQAPAAAKALQAJAKAAAVIgvAAQAAAJAEAFQAFAFAGAAQAEAAADgDQADgCABgGIATADQgDALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAbAAQAAgJgDgEQgFgEgFAAQgGAAgEAEg");
	this.shape_29.setTransform(586.8,11.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgpAyIAAhjIAlAAQAMAAAGABQAJAEAHAGQAGAGADAKQADAKAAANQAAAMgDAJQgDALgIAHQgFAFgJADQgGACgLAAgAgUAhIAPAAIALgBQAEgBAEgDQADgDACgGQACgIAAgLQAAgKgCgHQgCgGgDgDQgFgEgFgCQgEgBgLAAIgJAAg");
	this.shape_30.setTransform(578.05,9.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgWArQgJgIgBgMIASgCQABAHAEADQAEAEAFAAQAFABAEgFQAEgFAAgHQAAgIgDgEQgEgEgGAAIgIABIACgPQAHABAEgDQAEgEAAgGQAAgGgDgCQgDgDgEAAQgFAAgDADQgEAEAAAGIgSgDQACgJAEgGQADgFAHgDQAHgDAIAAQANAAAJAJQAHAIAAAJQAAANgPAIQAJACAFAFQAFAHAAAJQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_31.setTransform(441.975,29.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgiAzIAAhjIASAAIAAAKQADgFAGgEQAGgDAGAAQAMAAAKAKQAIAKABASQgBARgIAKQgKAKgMAAQgFAAgFgDQgFgCgGgGIAAAlgAgLgdQgEAFgBALQAAAMAGAFQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgMgFgFQgFgGgGAAQgGAAgFAGg");
	this.shape_32.setTransform(434.1,32.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_33.setTransform(425.675,31.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AglAyIAAhjIBJAAIAAAQIg1AAIAAAXIAxAAIAAAQIgxAAIAAAbIA3AAIAAARg");
	this.shape_34.setTransform(417.275,29.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgaAaQgHgKAAgQQAAgRAKgKQAJgKAOAAQAPAAAKALQAJAKAAAVIgvAAQAAAJAEAFQAFAFAGAAQAEAAADgDQADgCABgGIATADQgDALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAbAAQAAgJgDgEQgFgEgFAAQgGAAgEAEg");
	this.shape_35.setTransform(454.05,13.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgCAwQgEgCgCgCIgDgIIAAgNIAAgfIgJAAIAAgPIAJAAIAAgPIASgLIAAAaIANAAIAAAPIgNAAIAAAcIAAALIACACIADABIAIgCIACAPQgIADgIAAQgFAAgDgCg");
	this.shape_36.setTransform(447.9,12.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgaAgQgHgGAAgKQAAgGADgFQADgEAFgCQAFgCALgCQAMgDAFgCIAAgCQAAgGgCgCQgEgCgGAAQgFAAgDACQgDACgCAFIgRgDQADgLAHgFQAHgFAOAAQAMAAAHADQAGADADAFQACAEAAANIAAAVIAAAPIAEAJIgTAAIgCgFIgBgDQgEAFgGACQgEADgHAAQgLAAgGgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQADgDACgDIAAgKIAAgEIgLADg");
	this.shape_37.setTransform(441.65,13.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgVAiQgFgDgDgGQgDgGAAgKIAAgtIAUAAIAAAhQAAAOABAEQABAEACACQADACAFAAQADgBAEgCQAEgDACgEQABgEAAgOIAAgfIATAAIAABHIgRAAIAAgLQgEAHgHADQgFADgIAAQgHAAgGgDg");
	this.shape_38.setTransform(433.5,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_39.setTransform(427.325,12.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgbAgQgGgGAAgKQAAgGADgFQADgEAFgCQAGgCAJgCQANgDAFgCIAAgCQAAgGgDgCQgDgCgGAAQgFAAgDACQgDACgBAFIgSgDQADgLAHgFQAIgFANAAQANAAAFADQAHADACAFQADAEAAANIAAAVIABAPIADAJIgTAAIgBgFIgBgDQgGAFgFACQgEADgHAAQgLAAgHgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDAAgDIABgKIAAgEIgLADg");
	this.shape_40.setTransform(421.45,13.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgIAkIgchHIATAAIAOAkIADAMIACgGIACgGIAOgkIATAAIgcBHg");
	this.shape_41.setTransform(413.6,13.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AglAyIAAhjIBJAAIAAARIg1AAIAAAWIAxAAIAAAQIgxAAIAAAbIA3AAIAAARg");
	this.shape_42.setTransform(405.225,12.05);

	this.Sprog3 = new lib.TC_TProgressEl__ProgressType1();
	this.Sprog3.name = "Sprog3";
	this.Sprog3.parent = this;
	this.Sprog3.setTransform(429.2,22.1,1,1,0,0,0,48,21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AghAyQABgKAGgJQAFgJAQgPIAPgPQAEgGAAgGQAAgHgDgDQgEgDgGAAQgFAAgDADQgEAEAAAIIgUgCQACgQAJgGQAJgHANAAQAPAAAIAIQAJAIAAAMQAAAGgDAGQgCAHgGAFIgMANIgLALIgEAFIAmAAIAAASg");
	this.shape_43.setTransform(340.775,29.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgjAzIAAhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQAMAAAJAKQAKAKAAASQAAARgKAKQgJAKgMAAQgFAAgFgDQgFgCgGgGIAAAlgAgLgdQgEAFgBALQAAAMAGAFQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgMgFgFQgFgGgGAAQgGAAgFAGg");
	this.shape_44.setTransform(333.05,32.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAOAkIgOgWIgOAWIgXAAIAagkIgZgjIAYAAIAMAUIANgUIAXAAIgZAiIAbAlg");
	this.shape_45.setTransform(324.625,31.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AglAyIAAhjIBJAAIAAAQIg1AAIAAAXIAxAAIAAAQIgxAAIAAAbIA3AAIAAARg");
	this.shape_46.setTransform(316.225,29.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgaAaQgHgKAAgQQAAgRAJgKQAKgKAOAAQAPAAAKALQAJAKAAAVIgwAAQABAJAFAFQADAFAHAAQAEAAADgDQADgCABgGIATADQgDALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAbAAQAAgJgDgEQgEgEgGAAQgGAAgEAEg");
	this.shape_47.setTransform(353,13.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgCAwQgFgCgBgCIgDgIIAAgNIAAgfIgKAAIAAgPIAKAAIAAgPIARgLIAAAaIAOAAIAAAPIgOAAIAAAcIABALIACACIADABIAIgCIACAPQgIADgIAAQgFAAgDgCg");
	this.shape_48.setTransform(346.85,12.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgaAgQgHgGAAgKQAAgGADgFQADgEAFgCQAFgCAKgCQANgDAFgCIAAgCQAAgGgCgCQgDgCgHAAQgFAAgDACQgDACgCAFIgRgDQADgLAHgFQAIgFANAAQANAAAFADQAHADADAFQACAEAAANIAAAVIAAAPIAEAJIgTAAIgCgFIgBgDQgFAFgFACQgFADgGAAQgLAAgGgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQADgDABgDIABgKIAAgEIgLADg");
	this.shape_49.setTransform(340.6,13.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgVAiQgGgDgDgGQgCgGAAgKIAAgtIAUAAIAAAhQAAAOAAAEQABAEADACQADACAEAAQAEgBAEgCQAEgDACgEQABgEAAgOIAAgfIATAAIAABHIgSAAIAAgLQgDAHgHADQgFADgIAAQgHAAgGgDg");
	this.shape_50.setTransform(332.45,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_51.setTransform(326.275,12.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgbAgQgGgGAAgKQAAgGADgFQADgEAFgCQAGgCAKgCQAMgDAFgCIAAgCQAAgGgDgCQgDgCgGAAQgFAAgDACQgDACgBAFIgSgDQADgLAHgFQAHgFAOAAQAMAAAHADQAGADADAFQACAEAAANIAAAVIABAPIADAJIgTAAIgBgFIgBgDQgGAFgFACQgFADgGAAQgLAAgHgGgAAAAEIgKAEQgEACAAAEQAAAEADADQADADAFAAQAEAAAFgDQAEgDABgDIAAgKIAAgEIgLADg");
	this.shape_52.setTransform(320.4,13.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgIAkIgdhHIAUAAIAOAkIADAMIACgGIACgGIAOgkIATAAIgcBHg");
	this.shape_53.setTransform(312.55,13.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AglAyIAAhjIBJAAIAAARIg1AAIAAAWIAxAAIAAAQIgxAAIAAAbIA3AAIAAARg");
	this.shape_54.setTransform(304.175,12.05);

	this.Sprog2 = new lib.TC_TProgressEl__ProgressType1();
	this.Sprog2.name = "Sprog2";
	this.Sprog2.parent = this;
	this.Sprog2.setTransform(328.15,22.1,1,1,0,0,0,48,21.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AADgVQgKAKgOAEIAAgRQAHgCAJgHQAIgHADgJIAQgBIAABkIgTABg");
	this.shape_55.setTransform(238.375,30.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgiAzIgBhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQAMAAAJAKQAJAKABASQAAAQgJAKQgJALgNgBQgFABgFgDQgFgBgFgHIAAAlgAAAgiQgGgBgFAGQgFAGABAKQAAAMAFAFQAEAGAGAAQAHAAAFgGQAEgEAAgMQAAgMgFgGQgEgFgGAAIgBABg");
	this.shape_56.setTransform(231.075,33.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AglAlIAaglIgZgjIAXAAIANAUIAMgUIAXAAIgYAiIAbAlIgYAAIgOgWIgOAXg");
	this.shape_57.setTransform(222.675,32.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AglgxIBJAAIAAAQIg1ABIAAAWIAxAAIABAQIgyAAIAAAbIA3AAIAAARIhLAAg");
	this.shape_58.setTransform(214.25,30.725);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AggAlIAAhHIASAAIAAAKQAJgMANAAQAHAAAFACQAFACADAEQADADABAFIABANIAAAsIgTAAIAAglQAAgLgCgDQgBgEgDgCQgCgCgEABQgEAAgEACQgEADgCAFIgBAPIAAAhg");
	this.shape_59.setTransform(245.175,14.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgYAtQgIgGAAgKIABgCIAVADQABAEACABQADACAFAAQAHAAAEgDQACgBACgEQABgCAAgGIAAgLQgJAMgMAAQgPAAgIgMQgHgKAAgNQgBgTAJgJQAJgKANAAQANAAAIALIAAgKIASAAIABBAQAAANgCAHQgCAGgEADQgEAEgGACQgHACgKABQgRAAgIgHgAAAgkQgGAAgEAFQgFAFABALQAAAMAEAEQAFAGAFAAQAHgBAFgFQAFgFAAgLQgBgLgEgFQgFgFgGAAIgBAAg");
	this.shape_60.setTransform(236.4987,15.774);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgIAyIgBhHIASAAIABBHgAgJgfIAAgSIASAAIAAASg");
	this.shape_61.setTransform(230.45,13.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgWAgQgIgGgDgKIATgDQACAFADADQAEADAGAAQAHAAAEgDQADgCAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQgBgBgFgBQgWgFgHgEQgIgFgBgLQAAgJAIgHQAHgGAQAAQAOAAAHAEQAHAFADAKIgSADQgBgEgEgCQgDgCgFAAQgHAAgEACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAQADACAOAEQAQADAGAFQAGAEAAAJQAAAKgJAHQgIAHgQABQgOAAgJgGg");
	this.shape_62.setTransform(224.425,14.4725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgaAaQgHgKAAgPQAAgSAJgKQAKgKAOAAQAPAAAKAKQAJALAAAVIgvAAQAAAJAFAFQAEAFAGAAQAEAAADgDQADgDACgFIATADQgEAKgIAGQgIAFgMABQgSAAgJgMgAgJgSQgEAFAAAIIAcgBQgBgIgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_63.setTransform(216.7238,14.5239);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgpgxIAlAAQALAAAHABQAJADAGAHQAGAGAEAKQADAKAAANQAAAMgDAJQgDALgHAHQgGAFgJADQgGACgLAAIgmAAgAgUAhIAPAAIALgBQAFgBADgDQADgDACgHQACgHAAgLQAAgLgCgGQgCgGgEgEQgEgDgFgCQgEgBgMABIgJAAg");
	this.shape_64.setTransform(207.9536,13.175);

	this.Sprog1 = new lib.TC_TProgressEl__ProgressType1();
	this.Sprog1.name = "Sprog1";
	this.Sprog1.parent = this;
	this.Sprog1.setTransform(226.1,22.1,1,1,0,0,0,48,21.4);

	this.Sprog4 = new lib.TC_TProgressEl__ProgressType2();
	this.Sprog4.name = "Sprog4";
	this.Sprog4.parent = this;
	this.Sprog4.setTransform(521.75,32.75,0.9169,1,0,0,0,32.2,10.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#454545").ss(1,1,1).p("AyaheMAk1AAAIAAC9Mgk1AAAg");
	this.shape_65.setTransform(610.125,10.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AyaBfIAAi9MAk1AAAIAAC9g");
	this.shape_66.setTransform(610.125,10.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.Sprog4},{t:this.Sprog1},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.Sprog2},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.Sprog3},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.Sprog5},{t:this.shape_17},{t:this.shape_16},{t:this.Sprog6},{t:this.shape_15},{t:this.shape_14},{t:this.Sprog7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TProgress__Progress, new cjs.Rectangle(-1,-0.4,730,44.4), null);


(lib.TC_TObject__navnextup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(149.95,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140.025,86.025,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextup, new cjs.Rectangle(0,-5.3,231.3,182.60000000000002), null);


(lib.TC_TObject__navnextover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(149.95,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140.025,86.025,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextover, new cjs.Rectangle(0,-5.3,231.3,182.60000000000002), null);


(lib.TC_TObject__navnextdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(149.95,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140.025,86.025,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdown, new cjs.Rectangle(0,-5.3,231.3,182.60000000000002), null);


(lib.TC_TObject__navbackup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(76.05,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(85.975,86.025,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackup, new cjs.Rectangle(-5.3,-5.3,228.3,182.60000000000002), null);


(lib.TC_TObject__navbackover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(76.05,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(85.975,86.025,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackover, new cjs.Rectangle(-5.3,-5.3,228.3,182.60000000000002), null);


(lib.TC_TObject__navbackdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(76.05,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(85.975,86.025,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdown, new cjs.Rectangle(-5.3,-5.3,228.3,182.60000000000002), null);


(lib.TC_TButton__PrevButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navbackup();
	this.instance.parent = this;
	this.instance.setTransform(61.9,10.95,1,1,0,0,0,108.9,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navbackover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.9,10.95,1,1,0,0,0,108.9,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navbackdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.9,10.95,1,1,0,0,0,108.9,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonFocus
	this.instance_3 = new lib.TC_TObject__navbackhit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.9,10.95,1,1,0,0,0,108.9,86);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonDisabled
	this.instance_4 = new lib.TC_TObject__navbackdisabled();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.9,11.05,1,1,0,0,0,108.9,86.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-80.3,228.3,182.8);


(lib.TC_TButton__NextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navnextup();
	this.instance.parent = this;
	this.instance.setTransform(14.7,10.95,1,1,0,0,0,115.7,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navnextover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,10.95,1,1,0,0,0,115.7,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navnextdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.7,10.95,1,1,0,0,0,115.7,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonDisabled
	this.instance_3 = new lib.TC_TObject__navnextdisabled();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.7,11.05,1,1,0,0,0,115.7,86.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonFocus
	this.instance_4 = new lib.TC_TObject__navnexthit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.7,10.95,1,1,0,0,0,115.7,86);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-80.3,231.3,182.8);


(lib.TC_TNavPanel__Navigator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Progress
	this.Sprogress = new lib.TC_TProgress__Progress();
	this.Sprogress.name = "Sprogress";
	this.Sprogress.parent = this;
	this.Sprogress.setTransform(959.9,1157.9,1,1,0,0,0,364,21.9);

	this.timeline.addTween(cjs.Tween.get(this.Sprogress).wait(1));

	// DevNav
	this.SnextDev = new lib.TC_TButton__NextButton();
	this.SnextDev.name = "SnextDev";
	this.SnextDev.parent = this;
	this.SnextDev.setTransform(1848.3,48.8,0.4453,0.4451,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.SnextDev, 0, 1, 2, false, new lib.TC_TButton__NextButton(), 3);

	this.SbackDev = new lib.TC_TButton__PrevButton();
	this.SbackDev.name = "SbackDev";
	this.SbackDev.parent = this;
	this.SbackDev.setTransform(1724.8,48.8,0.4453,0.4451,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.SbackDev, 0, 1, 2, false, new lib.TC_TButton__PrevButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SbackDev},{t:this.SnextDev}]}).wait(1));

	// SbreadCrumbs
	this.SbreadCrumbs = new lib.TC_THtmlText__Text1();
	this.SbreadCrumbs.name = "SbreadCrumbs";
	this.SbreadCrumbs.parent = this;
	this.SbreadCrumbs.setTransform(520.2,27.9,8.5686,0.3804,0,0,0,49.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.SbreadCrumbs).wait(1));

	// Snext
	this.Snext = new lib.TC_TButton__NextButton();
	this.Snext.name = "Snext";
	this.Snext.parent = this;
	this.Snext.setTransform(1782.9,1092.05);
	new cjs.ButtonHelper(this.Snext, 0, 1, 2, false, new lib.TC_TButton__NextButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Snext).wait(1));

	// Sback
	this.Sback = new lib.TC_TButton__PrevButton();
	this.Sback.name = "Sback";
	this.Sback.parent = this;
	this.Sback.setTransform(59.5,1092.05);
	new cjs.ButtonHelper(this.Sback, 0, 1, 2, false, new lib.TC_TButton__PrevButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sback).wait(1));

	// Smask3
	this.Smask3 = new lib.TC_TObject__contentFrame3();
	this.Smask3.name = "Smask3";
	this.Smask3.parent = this;
	this.Smask3.setTransform(960,587.45,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask3).wait(1));

	// Smask2
	this.Smask2 = new lib.TC_TObject__contentFrame2();
	this.Smask2.name = "Smask2";
	this.Smask2.parent = this;
	this.Smask2.setTransform(960,587.45,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask2).wait(1));

	// Smask1
	this.Smask1 = new lib.TC_TObject__contentFrame1();
	this.Smask1.name = "Smask1";
	this.Smask1.parent = this;
	this.Smask1.setTransform(960,587.45,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask1).wait(1));

	// Smask0
	this.Smask0 = new lib.TC_TObject__contentFrame0();
	this.Smask0.name = "Smask0";
	this.Smask0.parent = this;
	this.Smask0.setTransform(960,587.45,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask0).wait(1));

	// Sbackground
	this.Sbackground = new lib.TC_TObject__NavBackground();
	this.Sbackground.name = "Sbackground";
	this.Sbackground.parent = this;
	this.Sbackground.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.Sbackground).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TNavPanel__Navigator, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


// stage content:
(lib.EFMod_TEDInstr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Scene Bounds
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Module Component
	this.instance_1 = new lib.ef_TutorModule({'id': 'instance_1', 'compositionID':'8927091D547A30DADEC29278A6AEC965'});

	this.instance_1.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,962.5,602.5);
// library properties:
lib.properties = {
	id: '8927091D547A30DADEC29278A6AEC965',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/EFMod_TEDInstr_atlas_.png", id:"EFMod_TEDInstr_atlas_"},
		{src:"components/EFComponents/src/ef_loadManager.js", id:"EFComponents/src/ef_loadManager.js"},
		{src:"components/EFComponents/src/ef_module.js", id:"ef.TutorModule"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8927091D547A30DADEC29278A6AEC965'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;