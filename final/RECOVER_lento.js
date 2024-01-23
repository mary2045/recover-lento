(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RECOVER_lento_atlas_1", frames: [[0,0,1075,462],[0,464,1068,455],[1070,464,623,321]]},
		{name:"RECOVER_lento_atlas_2", frames: [[1032,0,842,595],[0,0,1030,751],[0,753,1030,751],[1032,597,842,595],[1032,1194,842,595]]},
		{name:"RECOVER_lento_atlas_3", frames: [[0,0,1030,751],[0,753,1030,751]]},
		{name:"RECOVER_lento_atlas_4", frames: [[0,1026,1030,751],[0,0,1024,1024]]},
		{name:"RECOVER_lento_atlas_5", frames: [[0,0,1372,1032],[0,1034,1428,735]]},
		{name:"RECOVER_lento_atlas_6", frames: [[0,0,1399,1056]]},
		{name:"RECOVER_lento_atlas_7", frames: [[0,0,1399,1056]]},
		{name:"RECOVER_lento_atlas_8", frames: [[0,0,888,1763]]},
		{name:"RECOVER_lento_atlas_9", frames: [[931,0,1055,1589],[0,0,929,1941]]},
		{name:"RECOVER_lento_atlas_10", frames: [[0,0,1739,1282]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.adios = function() {
	this.initialize(ss["RECOVER_lento_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avanzar = function() {
	this.initialize(ss["RECOVER_lento_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia = function() {
	this.initialize(ss["RECOVER_lento_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia2 = function() {
	this.initialize(ss["RECOVER_lento_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia4 = function() {
	this.initialize(ss["RECOVER_lento_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia5 = function() {
	this.initialize(ss["RECOVER_lento_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bniña = function() {
	this.initialize(img.bniña);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1754,2207);


(lib.bocadillo1pngcopia2 = function() {
	this.initialize(ss["RECOVER_lento_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bocadillo2 = function() {
	this.initialize(ss["RECOVER_lento_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bocadillo3pngcopia = function() {
	this.initialize(ss["RECOVER_lento_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.camara = function() {
	this.initialize(ss["RECOVER_lento_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eligepngcopia = function() {
	this.initialize(ss["RECOVER_lento_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.felizzz = function() {
	this.initialize(ss["RECOVER_lento_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.genial = function() {
	this.initialize(ss["RECOVER_lento_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.movil = function() {
	this.initialize(ss["RECOVER_lento_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.niña = function() {
	this.initialize(img.niña);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1031,2118);


(lib.niñapngcopia = function() {
	this.initialize(img.niñapngcopia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1031,2118);


(lib.piscinafondo = function() {
	this.initialize(ss["RECOVER_lento_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.portada = function() {
	this.initialize(ss["RECOVER_lento_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tristepngcopia2 = function() {
	this.initialize(ss["RECOVER_lento_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.undiaenlapiscina = function() {
	this.initialize(ss["RECOVER_lento_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.upsspngcopia = function() {
	this.initialize(ss["RECOVER_lento_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.zapato = function() {
	this.initialize(ss["RECOVER_lento_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Símbolo52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.zapato();
	this.instance.setTransform(0,0,0.243,0.2929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia5();
	this.instance.setTransform(0,0,0.1105,0.1475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.8,110.8);


(lib.Símbolo50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia4();
	this.instance.setTransform(0,0,0.106,0.138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.3,103.6);


(lib.Símbolo49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.zapato();
	this.instance.setTransform(0,0,0.243,0.2929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.portada();
	this.instance.setTransform(-400,-300.45,0.9501,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(-400,-300.4,800,600.9), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia2();
	this.instance.setTransform(-48.9,-47.3,0.0949,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-48.9,-47.3,97.8,94.69999999999999), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia();
	this.instance.setTransform(51.65,46.8,0.1002,0.1246,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-51.6,-46.7,103.30000000000001,93.5), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.niñapngcopia();
	this.instance.setTransform(0,0,0.3798,0.3798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.6,804.4);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.camara();
	this.instance.setTransform(0,0,0.0847,0.0847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bniña();
	this.instance.setTransform(-63.05,-79.35,0.0719,0.0719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-63,-79.3,126.1,158.7), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.niña();
	this.instance.setTransform(0,0,0.1865,0.1865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.3,395);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzar();
	this.instance.setTransform(0,0,0.0958,0.1263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.movilb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.movil();
	this.instance.setTransform(0,0,0.0941,0.0941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo8("synched",0);
	this.instance.setTransform(195.8,402.2,1,1,0,0,0,195.8,402.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.6,804.4);


(lib.Símbolo61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_43 = new lib.Símbolo49();
	this.button_43.name = "button_43";
	this.button_43.setTransform(75.7,47,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.button_43, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_43).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_45 = new lib.Símbolo51();
	this.button_45.name = "button_45";
	this.button_45.setTransform(56.9,55.4,1,1,0,0,0,56.9,55.4);
	new cjs.ButtonHelper(this.button_45, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_45).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.8,110.8);


(lib.Símbolo58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_44 = new lib.Símbolo50();
	this.button_44.name = "button_44";
	this.button_44.setTransform(54.6,51.8,1,1,0,0,0,54.6,51.8);
	new cjs.ButtonHelper(this.button_44, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_44).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.3,103.6);


(lib.Símbolo46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_2 = new lib.Símbolo5();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(63.05,79.35);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,158.7);


(lib.Símbolo45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_6 = new lib.Símbolo6();
	this.button_6.name = "button_6";
	this.button_6.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_5 = new lib.movilb();
	this.button_5.name = "button_5";
	this.button_5.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_8 = new lib.Símbolo13();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.setTransform(48.9,47.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_7 = new lib.Símbolo12();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.setTransform(51.6,46.75);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.flecha2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_52 = new lib.Símbolo58();
	this.button_52.name = "button_52";
	this.button_52.setTransform(54.6,51.8,1,1,0,0,0,54.6,51.8);
	new cjs.ButtonHelper(this.button_52, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.3,103.6);


(lib.zapatilla = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_55 = new lib.Símbolo61();
	this.button_55.name = "button_55";
	this.button_55.setTransform(75.7,47,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.button_55, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_55).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_53 = new lib.Símbolo59();
	this.button_53.name = "button_53";
	this.button_53.setTransform(56.9,55.4,1,1,0,0,0,56.9,55.4);
	new cjs.ButtonHelper(this.button_53, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_53).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.8,110.8);


(lib.Símbolo69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.zapatilla();
	this.instance.setTransform(75.7,47,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo67("synched",0);
	this.instance.setTransform(195.8,402.2,1,1,0,0,0,195.8,402.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.6,804.4);


(lib.Símbolo60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_36 = new lib.Símbolo42();
	this.button_36.name = "button_36";
	this.button_36.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_36, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_36).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_40 = new lib.Símbolo46();
	this.button_40.name = "button_40";
	this.button_40.setTransform(63.1,79.4,1,1,0,0,0,63.1,79.4);
	new cjs.ButtonHelper(this.button_40, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,158.7);


(lib.Símbolo54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_39 = new lib.Símbolo45();
	this.button_39.name = "button_39";
	this.button_39.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_39, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_38 = new lib.Símbolo44();
	this.button_38.name = "button_38";
	this.button_38.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_38, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_38).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_18 = new lib.Símbolo14();
	this.button_18.name = "button_18";
	this.button_18.setTransform(51.6,46.8,1,1,0,0,0,51.6,46.8);
	new cjs.ButtonHelper(this.button_18, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.Símbolo47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_26 = new lib.Símbolo31();
	this.button_26.name = "button_26";
	this.button_26.setTransform(48.9,47.3,1,1,0,0,0,48.9,47.3);
	new cjs.ButtonHelper(this.button_26, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_9 = new lib.Símbolo15();
	this.button_9.name = "button_9";
	this.button_9.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.flecha3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_54 = new lib.Símbolo60();
	this.button_54.name = "button_54";
	this.button_54.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_54, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.zapa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_61 = new lib.Símbolo69();
	this.button_61.name = "button_61";
	this.button_61.setTransform(75.7,47,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.button_61, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.4,94);


(lib.Símbolo66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_42 = new lib.Símbolo48();
	this.button_42.name = "button_42";
	this.button_42.setTransform(51.6,46.8,1,1,0,0,0,51.6,46.8);
	new cjs.ButtonHelper(this.button_42, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_42).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.Símbolo64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_49 = new lib.Símbolo55();
	this.button_49.name = "button_49";
	this.button_49.setTransform(63.1,79.4,1,1,0,0,0,63.1,79.4);
	new cjs.ButtonHelper(this.button_49, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,158.7);


(lib.Símbolo63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_48 = new lib.Símbolo54();
	this.button_48.name = "button_48";
	this.button_48.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_48, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_48).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_47 = new lib.Símbolo53();
	this.button_47.name = "button_47";
	this.button_47.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_47, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_41 = new lib.Símbolo47();
	this.button_41.name = "button_41";
	this.button_41.setTransform(48.9,47.3,1,1,0,0,0,48.9,47.3);
	new cjs.ButtonHelper(this.button_41, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_41).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_19 = new lib.Símbolo24();
	this.button_19.name = "button_19";
	this.button_19.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_19, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.flecha5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_60 = new lib.Símbolo66();
	this.button_60.name = "button_60";
	this.button_60.setTransform(51.6,46.8,1,1,0,0,0,51.6,46.8);
	new cjs.ButtonHelper(this.button_60, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.Símbolo72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_58 = new lib.Símbolo64();
	this.button_58.name = "button_58";
	this.button_58.setTransform(63.1,79.4,1,1,0,0,0,63.1,79.4);
	new cjs.ButtonHelper(this.button_58, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_58).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,158.7);


(lib.Símbolo71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_57 = new lib.Símbolo63();
	this.button_57.name = "button_57";
	this.button_57.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_57, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_57).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_56 = new lib.Símbolo62();
	this.button_56.name = "button_56";
	this.button_56.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_56, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_56).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_50 = new lib.Símbolo56();
	this.button_50.name = "button_50";
	this.button_50.setTransform(48.9,47.3,1,1,0,0,0,48.9,47.3);
	new cjs.ButtonHelper(this.button_50, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_27 = new lib.Símbolo32();
	this.button_27.name = "button_27";
	this.button_27.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_27, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_27).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.movill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_62 = new lib.Símbolo70();
	this.button_62.name = "button_62";
	this.button_62.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_62, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_62).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.flecha4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_59 = new lib.Símbolo65();
	this.button_59.name = "button_59";
	this.button_59.setTransform(48.9,47.3,1,1,0,0,0,48.9,47.3);
	new cjs.ButtonHelper(this.button_59, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.camara_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_63 = new lib.Símbolo71();
	this.button_63.name = "button_63";
	this.button_63.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_63, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_63).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_35 = new lib.Símbolo41();
	this.button_35.name = "button_35";
	this.button_35.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_35, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_35).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.flecha1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_51 = new lib.Símbolo57();
	this.button_51.name = "button_51";
	this.button_51.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_51, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_51).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


// stage content:
(lib.RECOVER_lento = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [7,55,81,108,213,225,238,242];
	// timeline functions:
	this.frame_7 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(7);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_65.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_93.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_93()
		{
			this.gotoAndPlay(8);
		}
	}
	this.frame_55 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(55);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_66.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_94.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_94()
		{
			this.gotoAndPlay(56);
		}
	}
	this.frame_81 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(81);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_67.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_95.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_95()
		{
			this.gotoAndPlay(82);
		}
	}
	this.frame_108 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(108);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_68.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_96.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_96()
		{
			this.gotoAndPlay(109);
		}
	}
	this.frame_213 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(213);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_69.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_97.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_97()
		{
			this.gotoAndPlay(226);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_70.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_98.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_98()
		{
			this.gotoAndPlay(226);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_71.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_99.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_99()
		{
			this.gotoAndPlay(226);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_64.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_100.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_100()
		{
			this.gotoAndPlay(214);
		}
	}
	this.frame_225 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(225);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_72.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_101.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_101()
		{
			this.gotoAndPlay(239);
		}
	}
	this.frame_238 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(238);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_73.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_102.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_102()
		{
			this.gotoAndPlay(198);
		}
	}
	this.frame_242 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(242);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(48).call(this.frame_55).wait(26).call(this.frame_81).wait(27).call(this.frame_108).wait(105).call(this.frame_213).wait(12).call(this.frame_225).wait(13).call(this.frame_238).wait(4).call(this.frame_242).wait(1));

	// adios
	this.instance = new lib.adios();
	this.instance.setTransform(0,0,0.9526,1.0107);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({_off:false},0).wait(4));

	// Capa_3
	this.button_73 = new lib.flecha5();
	this.button_73.name = "button_73";
	this.button_73.setTransform(81.6,530.8,1,1,0,0,0,51.6,46.8);
	this.button_73._off = true;
	new cjs.ButtonHelper(this.button_73, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_73).wait(238).to({_off:false},0).to({_off:true},1).wait(4));

	// triste
	this.instance_1 = new lib.tristepngcopia2();
	this.instance_1.setTransform(88,246,0.3287,0.3287);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(226).to({_off:false},0).to({_off:true},13).wait(4));

	// Capa_8
	this.instance_2 = new lib.upsspngcopia();
	this.instance_2.setTransform(133,54,0.5788,0.5788);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(234).to({_off:false},0).to({_off:true},5).wait(4));

	// Capa_6
	this.button_72 = new lib.flecha4();
	this.button_72.name = "button_72";
	this.button_72.setTransform(728.9,529.3,1,1,0,0,0,48.9,47.3);
	this.button_72._off = true;
	new cjs.ButtonHelper(this.button_72, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_72).wait(225).to({_off:false},0).to({_off:true},1).wait(17));

	// feliz
	this.instance_3 = new lib.felizzz();
	this.instance_3.setTransform(62,258,0.3838,0.3894);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({_off:true},12).wait(17));

	// elige
	this.instance_4 = new lib.eligepngcopia();
	this.instance_4.setTransform(239,246,0.2884,0.3051);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(213).to({_off:false},0).to({_off:true},1).wait(29));

	// genial
	this.instance_5 = new lib.genial();
	this.instance_5.setTransform(174,54,0.499,0.662);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({_off:true},5).wait(17));

	// b_niña
	this.movieClip_2 = new lib.Símbolo5();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(713.05,407.35);

	this.button_64 = new lib.Símbolo72();
	this.button_64.name = "button_64";
	this.button_64.setTransform(713.1,407.4,1,1,0,0,0,63.1,79.4);
	new cjs.ButtonHelper(this.button_64, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_2}]},198).to({state:[{t:this.button_64}]},15).to({state:[]},1).wait(29));

	// camara
	this.button_6 = new lib.Símbolo6();
	this.button_6.name = "button_6";
	this.button_6.setTransform(668.7,117.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_71 = new lib.camara_1();
	this.button_71.name = "button_71";
	this.button_71.setTransform(668.7,117.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_71, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_6}]},179).to({state:[{t:this.button_71}]},34).to({state:[]},1).wait(29));

	// movil
	this.button_5 = new lib.movilb();
	this.button_5.name = "button_5";
	this.button_5.setTransform(413.6,124.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.button_70 = new lib.movill();
	this.button_70.name = "button_70";
	this.button_70.setTransform(413.6,124.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_70, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_5}]},160).to({state:[{t:this.button_70}]},53).to({state:[]},1).wait(29));

	// bañador_niño
	this.button_46 = new lib.Símbolo52();
	this.button_46.name = "button_46";
	this.button_46.setTransform(183.7,99,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.button_46, 0, 1, 1);

	this.button_69 = new lib.zapa();
	this.button_69.name = "button_69";
	this.button_69.setTransform(183.7,99,1,1,0,0,0,75.7,47);
	new cjs.ButtonHelper(this.button_69, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_46}]},141).to({state:[{t:this.button_69}]},72).to({state:[]},1).wait(29));

	// niña
	this.instance_6 = new lib.Símbolo2("synched",0);
	this.instance_6.setTransform(-148,404.15,1,1,0,0,0,96.1,197.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).wait(1).to({x:-135,y:403.2},0).wait(1).to({x:-122.05,y:402.25},0).wait(1).to({x:-109.05,y:401.3},0).wait(1).to({x:-96.1,y:400.4},0).wait(1).to({x:-83.15,y:399.45},0).wait(1).to({x:-70.15,y:398.5},0).wait(1).to({x:-57.2,y:397.55},0).wait(1).to({x:-44.2,y:396.65},0).wait(1).to({x:-31.25,y:395.7},0).wait(1).to({x:-18.3,y:394.75},0).wait(1).to({x:-5.3,y:393.85},0).wait(1).to({x:7.65,y:392.9},0).wait(1).to({x:20.65,y:391.95},0).wait(1).to({x:33.6,y:391},0).wait(1).to({x:46.55,y:390.1},0).wait(1).to({x:59.55,y:389.15},0).wait(1).to({x:72.5,y:388.2},0).wait(1).to({x:85.5,y:387.3},0).wait(1).to({x:98.4,y:386.35},0).wait(1).to({x:111.4,y:385.4},0).wait(1).to({x:124.35,y:384.45},0).wait(1).to({x:137.3,y:383.55},0).wait(1).to({x:150.3,y:382.6},0).wait(1).to({x:163.25,y:381.65},0).wait(1).to({x:176.25,y:380.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(29));

	// f_piscina
	this.instance_7 = new lib.undiaenlapiscina();
	this.instance_7.setTransform(0,0,0.7813,0.5859);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({_off:true},130).wait(4));

	// Capa_11
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(737.25,546.55,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_68 = new lib.flecha3();
	this.button_68.name = "button_68";
	this.button_68.setTransform(737.25,546.55,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_68, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_1}]},104).to({state:[{t:this.button_68}]},4).to({state:[]},1).wait(134));

	// niña
	this.instance_8 = new lib.Símbolo68("synched",0);
	this.instance_8.setTransform(0,684.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({regX:195.8,regY:402.2,x:195.8,y:1073.6},0).wait(1).to({y:1060.9},0).wait(1).to({y:1048.2},0).wait(1).to({y:1035.55},0).wait(1).to({y:1022.85},0).wait(1).to({y:1010.15},0).wait(1).to({y:997.5},0).wait(1).to({y:984.8},0).wait(1).to({y:972.1},0).wait(1).to({y:959.45},0).wait(1).to({y:946.75},0).wait(1).to({y:934.05},0).wait(1).to({y:921.4},0).wait(1).to({y:908.7},0).wait(1).to({y:896},0).wait(1).to({y:883.35},0).wait(1).to({y:870.65},0).wait(1).to({y:857.95},0).wait(1).to({y:845.3},0).wait(1).to({y:832.6},0).wait(1).to({y:819.9},0).wait(1).to({y:807.25},0).wait(1).to({y:794.55},0).wait(1).to({y:781.85},0).wait(1).to({y:769.15},0).wait(1).to({y:756.5},0).wait(1).to({y:743.8},0).wait(1).to({y:731.1},0).wait(1).to({y:718.45},0).wait(1).to({y:705.75},0).wait(1).to({y:693.05},0).wait(1).to({y:680.4},0).wait(1).to({y:667.7},0).wait(1).to({y:655},0).wait(1).to({y:642.35},0).wait(1).to({y:629.65},0).wait(1).to({y:616.95},0).wait(1).to({y:604.3},0).wait(1).to({y:591.6},0).wait(1).to({y:578.9},0).wait(1).to({y:566.25},0).wait(1).to({y:553.55},0).wait(1).to({y:540.85},0).wait(1).to({y:528.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(134));

	// Capa_9
	this.instance_9 = new lib.bocadillo3pngcopia();
	this.instance_9.setTransform(350,30,0.3279,0.3279);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({_off:true},27).wait(134));

	// lecha_2
	this.instance_10 = new lib.avanzarpngcopia5();
	this.instance_10.setTransform(612,255,0.1105,0.1475);

	this.button_67 = new lib.Símbolo73();
	this.button_67.name = "button_67";
	this.button_67.setTransform(668.9,310.4,1,1,0,0,0,56.9,55.4);
	new cjs.ButtonHelper(this.button_67, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},74).to({state:[{t:this.button_67}]},7).to({state:[]},1).wait(161));

	// explicacion
	this.instance_11 = new lib.bocadillo2();
	this.instance_11.setTransform(340,41,0.3274,0.3445);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(56).to({_off:false},0).to({_off:true},26).wait(161));

	// flecha_1
	this.button_66 = new lib.flecha2();
	this.button_66.name = "button_66";
	this.button_66.setTransform(698.6,311.8,1,1,0,0,0,54.6,51.8);
	this.button_66._off = true;
	new cjs.ButtonHelper(this.button_66, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_66).wait(55).to({_off:false},0).to({_off:true},1).wait(187));

	// saludo
	this.instance_12 = new lib.bocadillo1pngcopia2();
	this.instance_12.setTransform(330,50,0.3425,0.3425);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(38).to({_off:false},0).to({_off:true},18).wait(187));

	// entrada
	this.instance_13 = new lib.piscinafondo();
	this.instance_13.setTransform(0,0,0.9501,1.0084);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).to({_off:true},101).wait(134));

	// flecha
	this.button_65 = new lib.flecha1();
	this.button_65.name = "button_65";
	this.button_65.setTransform(726.4,534.4,1,1,0,0,0,49.4,47.4);
	this.button_65._off = true;
	new cjs.ButtonHelper(this.button_65, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_65).wait(7).to({_off:false},0).to({_off:true},1).wait(235));

	// Portada
	this.movieClip_10 = new lib.Símbolo16();
	this.movieClip_10.name = "movieClip_10";
	this.movieClip_10.setTransform(400,301.45);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_10).to({_off:true},8).wait(235));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(155.9,300,652.8000000000001,1188.5);
// library properties:
lib.properties = {
	id: '0A35B6DA732CB14F9FD7BCC85A5105D7',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bniña.png", id:"bniña"},
		{src:"images/niña.png", id:"niña"},
		{src:"images/niñapngcopia.png", id:"niñapngcopia"},
		{src:"images/RECOVER_lento_atlas_1.png", id:"RECOVER_lento_atlas_1"},
		{src:"images/RECOVER_lento_atlas_2.png", id:"RECOVER_lento_atlas_2"},
		{src:"images/RECOVER_lento_atlas_3.png", id:"RECOVER_lento_atlas_3"},
		{src:"images/RECOVER_lento_atlas_4.png", id:"RECOVER_lento_atlas_4"},
		{src:"images/RECOVER_lento_atlas_5.png", id:"RECOVER_lento_atlas_5"},
		{src:"images/RECOVER_lento_atlas_6.png", id:"RECOVER_lento_atlas_6"},
		{src:"images/RECOVER_lento_atlas_7.png", id:"RECOVER_lento_atlas_7"},
		{src:"images/RECOVER_lento_atlas_8.png", id:"RECOVER_lento_atlas_8"},
		{src:"images/RECOVER_lento_atlas_9.png", id:"RECOVER_lento_atlas_9"},
		{src:"images/RECOVER_lento_atlas_10.png", id:"RECOVER_lento_atlas_10"}
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
an.compositions['0A35B6DA732CB14F9FD7BCC85A5105D7'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;