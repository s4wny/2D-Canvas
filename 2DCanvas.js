/**
 * 2D Canvas - Game development the easy way
 *
 *
 * @author Sony? aka Sawny @link http://4morefun.net
 * @author Matert
 */
 
(function() {

    //------------------------------------------------------------
    //2D Canvas (2DC)
    //------------------------------------------------------------
    
    $2DC = function(selector)
    {
        $2DC.selector = null;
        
        //Selector?
        if(selector != null && selector != undefined && selector != "")
        {            
            $2DC.selector = (isString(selector)) ? Sizzle(selector) : selector;
            
            return new function() {
                return {
                    
                    /**
                     * Start a loop
                     *
                     * @param (int)      fps   = Frames per second
                     * @param (function) loop  = The function that will run $fps times per second.
                     */
                    update : function(fps, loop) {
                        console.log($2DC.loops); //... is set down there...........................
						
                        //Good parms?
                        fps   = (isInt(fps))   ? fps  : console.error("$2DC().update(); require parm 1 to be an integer.");
                        loop  = (isFunc(loop)) ? loop : console.error("$2DC().update(); require parm 2 to be a function.");
                        
						
						//TODO: kommentera....
						updateKey = random();
						updateKeys[updateKeys.length] = updateKey;
						
						//TODO: kommentera....
						//Fy fan vad cpe det ser ut. K?nsn buggigt ox?. Men hoppas det funkar. K?nns som om koden ?r ihop klistrad och kommer spricka ner som h?lst. /Sony? 02-05-2012
						//LOL s4wny alla ska kunna titta på kåden /matert 15/2 2012
						//LOL2 jag låter som någon sorts tant /matert
						(function bajsa() {
						    setTimeout(function() {
								
								updateKeys.forEach(function(v, k) {
									$2DC.selector = $2DC.loops.selector[v];
								    $2DC.loops.loop[v]();
								});
								
							    bajsa();
							}, 1000 / fps);
						})();
						
						
                        $2DC.loops.selector[updateKey] = $2DC.selector;
                        $2DC.loops.fps[updateKey]      = fps;
                        $2DC.loops.loop[updateKey]     = loop;
                        
                        
                        return updateKey;
                    }
                }
            }
        }
        else
        {
            console.warn("$2DC's functions:\n..."); //TODO: Quick ref of all functions
        }
    }
    
    
    
    
    
    //------------------------------------------------------------
    // Vars
    //------------------------------------------------------------
    updateKeys = new Array();
	
	$2DC.loops          = {}; //Update's setinterval ID will be the key for selector, fps and loop.
    $2DC.loops.selector = {}; //The selector
    $2DC.loops.fps      = {}; //FPS value
    $2DC.loops.loop     = {}; //The callback loop
      
	  
	//KeyDown
	keyDown = new Array(); //An array ... I.e. keyDown['a'] = true. keyDown['f5'] = false.
	
	//Keycode table from http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    keyCodes = {8   : "backspace",
                9   : "tab",
                13  : "enter",
                16  : "shift",
                17  : "ctrl",
                18  : "alt",
                19  : "pause/break",
                20  : "caps lock",
                27  : "escape",
                33  : "page up",
                34  : "page down",
                35  : "end",
                36  : "home",
                37  : "left",
                38  : "up",
                39  : "right",
                40  : "down",
                45  : "insert",
                46  : "delete",
                48  : "0",
                49  : "1",
                50  : "2",
                51  : "3",
                52  : "4",
                53  : "5",
                54  : "6",
                55  : "7",
                56  : "8",
                57  : "9",
                65  : "a",
                66  : "b",
                67  : "c",
                68  : "d",
                69  : "e",
                70  : "f",
                71  : "g",
                72  : "h",
                73  : "i",
                74  : "j",
                75  : "k",
                76  : "l",
                77  : "m",
                78  : "n",
                79  : "o",
                80  : "p",
                81  : "q",
                82  : "r",
                83  : "s",
                84  : "t",
                85  : "u",
                86  : "v",
                87  : "w",
                88  : "x",
                89  : "y",
                90  : "z",
                91  : "left window key ",
                92  : "right window key",
                93  : "select key",
                96  : "num0",
                97  : "num1",
                98  : "num2",
                99  : "num3",
                100 : "num4",
                101 : "num5",
                102 : "num6",
                103 : "num7",
                104 : "num8",
                105 : "num9",
                106 : "multiply",
                107 : "add",
                109 : "subtract",
                110 : "decimal point",
                111 : "divide",
                112 : "f1",
                113 : "f2",
                114 : "f3",
                115 : "f4",
                116 : "f5",
                117 : "f6",
                118 : "f7",
                119 : "f8",
                120 : "f9",
                121 : "f10",
                122 : "f11",
                123 : "f12",
                144 : "num lock",
                145 : "scroll lock",
                186 : "semi-colon",
                187 : "equal sign",
                188 : "comma",
                189 : "dash",
                190 : "period",
                191 : "forward slash",
                192 : "grave accent",
                219 : "open bracket",
                220 : "back slash",
                221 : "close braket",
                222 : "single quote"};
    
    
	
	
	
    //------------------------------------------------------------
    // Misc functions
    //------------------------------------------------------------
    
    
    /** 
     * @note: This function CAN'T chain. Cux this functions need to return the setInterval key.
     * @TODO: Check if the updateKey exists, else console.warn();
     */
    $2DC.start = function(updateKey) {
        (!isInt(updateKey)) ? console.warn("$2DC.start(updateKey) needs one int parm."):0;
        
        return $2DC($2DC.loops.selector[updateKey]).update($2DC.loops.fps[updateKey], $2DC.loops.loop[updateKey]);
    }
    
    
    /**
     *
     */
    $2DC.stop = function(updateKey) {
        clearInterval(updateKey);
        return this;
    }
    
	
	/**
	 * Clear screen
	 */
    $2DC.clearScreen(color) //TODO: Color, draw().clearScreen();
	{
		canvas = $2DC.selector[0].getContext("2d");
		canvas.clearRect(0, 0, canvas.width, canvas.height);		
	}
    
    
    
    //------------------------------------------------------------
    // User interactive functions, like move with keys.
    //------------------------------------------------------------
    
    
	/**
	 *
	 * @param (int) opt1 = Pixels to move when up/left/down/right arrow is pressed.
	 *     @param (1D array) opt2 = Move when these key is pressed. ['wasd' ,'ijkl']
	 *     @param (2D array) opt2 = Move when these key is pressed. [['up', 'left', 'down', 'right'], ['w', 'a', 's', 'd']]
	 *
	 * @param (1D array) opt1 = Move when these key is pressed. ['wasd' ,'ijkl']
	 * @param (2D array) opt1 = Move when these key is pressed. [['up', 'left', 'down', 'right'], ['w', 'a', 's', 'd']]
	 *     @param (int) opt2 = Pixels to move when up/left/down/right arrow is pressed.
	 *
	 * @default (int)      opt1 = 5
	 * @default (2D array) opt2 = [['up', 'left', 'down', 'right'], ['w', 'a', 's', 'd']];
	 */
    $2DC.moveOnKeyDown = function(opt1, opt2)
	{
	    //Options
		if(isInt(opt1)) {
		    if(!isArr(opt2)) {
			    opt2 = [['up', 'left', 'down', 'right'], ['w', 'a', 's', 'd']];
			}
		}
		else if(isArr(opt1))
		{
		    if(!isInt(opt2)) {
			    opt2 = 5;
			}
			
			temp = opt1;
			opt1 = opt2;
			opt2 = temp;
		}
		else {
			opt1 = 5;
		    opt2 = [['up', 'left', 'down', 'right'], ['w', 'a', 's', 'd']];
		}
		
		
		//Move
		
		
		return this;
	}
    
	

	
	//Keydown / up
	window.onkeydown = function(e) {
		console.log(e.keyCode +" = "+ keyCodes[e.keyCode]); //Debug
		
		keyDown[keyCodes[e.keyCode]] = true;
		
		
		//Anti scrolling problem
		switch(keyCodes[e.keyCode])
		{
		    case 'up':
			case 'left':
			case 'down':
			case 'right': return false;
		}
	}
	
	
	window.onkeyup = function(e) {
	    keyDown[keyCodes[e.keyCode]] = false;
	}
	
	/**
	 *
	 * @param (string) opt1 = keyDown('up') => true/false
	 *    @param (function) opt2 = Callback to run on true.
	 *
	 * @param (function) opt1(key) = callback to run if any key is down. Will send key as a param. Key = a string i.e: 'up' or 'w'.
	 */
	$2DC.keyDown = function(opt1, opt2)
	{
	    if(isString(opt1))
		{
		    if(isFunc(opt2))
			{
			    if(keyDown[opt1]) {
				    opt2(); //Run callback if opt1 is pressed.
				}
			}
			else {
			    return keyDown[opt1]; //Return true if opt1 is pressed else false.
			}
		}
		else if(isFunc(opt1))
		{
			opt1(keyDown); //TODO: Funkar detta ?ns? keyDown = null 24/7 :s
			//TODO: f?rs?k k?ra opt1 lika m?nag g?nger som det finns keyDown[x] = tru.
		}
		else {
		    consolw.warn("-.-'"); //TODO: error mess
		}

		return this;
	}
	
	
	
	
    
    //------------------------------------------------------------
    // Shape functions, i.e circle, triangle
    //------------------------------------------------------------
    
    /**
     * Make circle.
     *
     * @author
     * @param (int)        x*   = X coord
     * @param (int)        y*   = Y coord
     * @param (string|int) opt1 = If int         -> size,  If string       -> color (2DC)
     * @param (string|int) opt2 = If opt2 = size -> color, If opt2 = color -> size  (diameter)
     * @return "imgObj".
     * @example $2DC.circle(400, 200, 20, "blue");
     */
    $2DC.circle = function(x, y, opt1, opt2)
    {
        //Opts
        if(isInt(opt1) && opt1 !== undefined) {
                size  = opt1;
                color = opt2;
        }
        
        if(isInt(opt2) && opt2 !== undefined) {
                color = opt1;
                size  = opt2;
        }
        
        
        return new function() {
            return {
                x         : x,
                y         : y,
                xSpeed    : 0,
                ySpeed    : 0,
                shape     : "circle",
                size      : size,
                color     : color,
				hasBeenOn : new Array(),
                
                /* Functions */
                draw      	   : draw,
                drawAt    	   : drawAt,
				hasCollideWith : hasCollideWith
								
            }
        };
    }



    $2DC.rectangle = function(x, y, width, height, color)
    {   
        return new function() {
            return {
                x         : x,
                y         : y,
                xSpeed    : 0,
                ySpeed    : 0,
                shape     : "rectangle",
                height    : height,
                width     : width,
                color	  : color,
				hasBeenOn : new Array(),
                
                /* Functions */
                draw     	   : draw,
                drawAt  	   : drawAt,
				hasCollideWith : hasCollideWith
            }
        };
    }



     
    //------------------------------------------------------------
    // Draw functions
    //------------------------------------------------------------
    
    
    /**
     * Draw the imgObj.
     *
     * @param (int) x* = Will update imgObjs $x with $x. (imgObj.x += x)
     * @param (int) y* = Will update imgObjs $y with $y. (imgObj.y += y)
     */
    draw = function(x, y)
    {
            if(!isset($2DC.selector)) {
                console.error("Specify an element! I.e: $2DC('#myCanvas');");
            }
            else
            {
                this.x += (isInt(x)) ? x : 0;
                this.y += (isInt(y)) ? y : 0;
				
				//Fyll på med pixlar man varigt på.
				this.hasBeenOn[this.hasBeenOn.length] = [this.x, this.y]; //TODO: Platser man varigt på ska inte skrivas igen
                
                drawImgObj.call(this);
                
                return this;
            }
    }
    
    
    /**
     * Draw the imgObj
     */
    drawAt = function(x, y)
    {
        this.x = x;
        this.y = y;
        
        drawImgObj.call(this);
        return this;
    }
    
    
	
	
    //------------------------------------------------------------
    // Test functions
    //------------------------------------------------------------
    
	/**
	 *
	 * @return true / false
	 */
	hasCollideWith = function(imgObj)
	{
	//TODO: Bygga vidare på funktionen
        switch(this.shape)
        {
            case "circle":
            	if (imgObj.shape == "circle"){
            		dis = imgObj.size + this.size;
            		if (distance(this.x, this.y, imgObj.x, imgObj.y) == dis){
            			return true;
            		}
            		else{
            			return false;
            		}
            		
            	}
            	else if (imgObj == "rectangle"){
            		
            	}
            	else if (imgObj == "triangle"){
            		
            	}
            	else{
            		console.error("Undefined shape!");
            	}
            break;
            
            case "rectangle":
            	if (imgObj == "rectangle"){
            		
            	}
            	else if (imgObj == "triangle"){
            		
            	}
            	else{
            		console.error("Undefined shape!");
            	}
            break;
            
            case "triangle":
            	if (imgObj == "triangle"){
            		
            	}
            	else{
            		console.error("Undefined shape!");
            	}
            break;
            
            default: 
            
				console.error("Undefined shape!");
				return false;
            
            break;
        }	
    }
    
	
	
	
    //------------------------------------------------------------
    // Helpers
    //------------------------------------------------------------
    
    
    /**
     * Draw an image object. I.e a cirlce.
     *
     * Call this function with drawImgObj.call(this);.
     *
     * @author Sawny
     */
    drawImgObj = function()
    {
        canvas = $2DC.selector[0].getContext("2d");
        canvas.fillStyle = this.color;
        
        switch(this.shape)
        {
            case "circle":
            	canvas.beginPath();
                canvas.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
                canvas.closePath();
            	canvas.fill();
            break;
            
            case "rectangle":
            	canvas.fillRect(this.x, this.y, this.width, this.height);
            break;
            default: console.error("Undefined shape!"); break;
        }
    }
   

	
	
	/**
	 *
	 * @author http://www.tutorialspoint.com/javascript/array_foreach.htm
	 */
    if (!Array.prototype.forEach)
    {
        Array.prototype.forEach = function(fun /*, thisp*/)
        {
            var len = this.length;
			
            if (typeof fun != "function") {
			    console.error("forEach first parm need to be a function.");
                throw new TypeError();
			}
    
            var thisp = arguments[1];
			
            for (var i = 0; i < len; i++)
            {
                if (i in this)
                    fun.call(thisp, this[i], i, this);
            }
        };
    }

	/**
    *@author http://www.spelprogrammering.se/library.js
    *
    */
    function distance(x1, y1, x2, y2)
	{
		xdiff = Math.abs(x1 - x2);
	  	ydiff = Math.abs(y1 - y2);

		return Math.sqrt(xdiff * xdiff + ydiff * ydiff);
	}
    
    /**
     *
     * @todo:   Allow decimals as first and second parm to.
     * @params (int) max
     * @params (int) min
     * @params (int) dicimals = True to get decimlas. False to round. Default false.
     * @author http://stackoverflow.com/a/1527820/996028
     */
    function random(max, min, decimals) {
        max      = (isInt(max))       ? max      : 32767;
        min      = (isInt(min))       ? min      : 0;
        decimals = (isBool(decimals)) ? decimals : false;
        
        if(decimals) {
            return Math.random() * (max - min) + min
        }
        else {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
	
	
    /**
     * IE, Don't dIE, yet.
     *
     * Create console.log if it dosen't exsists.
     *
     * @author Stackoverflow.
     */
    var alertFallback = true;
    
    if (typeof console === "undefined" || typeof console.log === "undefined") {
        console       = {};
        console.log   = function(){};
        console.error = function(){};
        console.warn  = function(){};
    }
	
	
	/**
     * Is int? true/false
     *
     * @author Matert
     */
    function isInt(i){
        return (typeof i == "undefined") ? false : typeof i == "number";
    }
    
    
    /**
     * Is boolean?
     *
     * @author Sony? aka Sawny
     */
    function isBool(x) {
        return (typeof x == "undefined") ? false : typeof x == "boolean";
    }
    
    
    /**
     * Is function?
     *
     * @author Sony? aka Sawny
     */
    function isFunc(x) {
        return (typeof x == "undefined") ? false : typeof x == "function";
    }
    
	
    /**
     * Is string?
     *
     * @author Sony? aka Sawny
     */
    function isString(x) {
        return (typeof x == "undefined") ? false : typeof x == "string";
    }
    
	
    /**
     * Is null?
     *
     * @author Sony? aka Sawny
     */
    function isNull(x) {
        return (typeof x == "undefined") ? false : x == null;
    }
	
	
	/**
    * Is Array?
    *
	* @TODO: secound parm. Level/dimension. Is it a 3D array? I.e. isArr([[[1], [2], [3]], [['a'], ['b'], ['c']]], 3) => true
    * @author Sony? aka Sawny
    */
	function isArr(x) {
	    return (typeof x == "undefined") ? false : typeof x == "array";
	}
	
    
    /**
     * Is null?
     *
     * @author Sony? aka Sawny
     */
    function isset(x) {
        return typeof x != "undefined";
    }
    
    
    //Jailbreak!
    window.$2DC = $2DC;
})();

//END OF LINE
