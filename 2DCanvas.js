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
			$2DC.selector   = Sizzle(selector);
			$2DC.selectorID = $2DC.selector[0].outerHTML.replace(/[^a-z]/gi, "");
			
            return new function() {
                return {
					
                    /**
					 * Start a loop
                     *
		    		 * @param (int)      fps   = Frames per second
		    		 * @param (function) loop  = The function that will run $fps times per second.
                     */
                    update : function(fps, loop) {

                        //Good parms?
		    			fps   = (isInt(fps))   ? fps  : console.error("$2DC().update(); require parm 1 to be an integer.");
		    			floop = (isFunc(loop)) ? loop : console.error("$2DC().update(); require parm 2 to be a function.");
						
						
		    			$2DC[$2DC.selectorID] = setInterval(loop, 1000 / fps);
                    },
                    
                    
                    /** 
                     *
                     */
                    start : function(selector) {
                        //TODO: 
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
    // Functions
    //------------------------------------------------------------
            
    /**
     * Make circle.
     *
     * @author
     * @param (int)        x    = X coord
     * @param (int)        y    = Y coord
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
                x        : x,
                y        : y,
                xSpeed   : 0,
                ySpeed   : 0,
                shape    : "circle",
                size     : size,
                color    : color,
                
                /* Functions */
                draw     : draw,
                drawAt   : drawAt
			}
        };
    }
     



     
    //------------------------------------------------------------
    // ImgObj sub functions
    //------------------------------------------------------------
    
    
    /**
     * Draw the imgObj.
     *
     * @param (int) x = Will update imgObjs $x with $x. (imgObj.x += x)
     * @param (int) y = Will update imgObjs $y with $y. (imgObj.y += y)
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
        canvas.beginPath();
		canvas.fillStyle = this.color;
        
		switch(this.shape)
		{
		    case "circle":
			    canvas.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
			break;
			default: console.error("Undefined shape!"); break;
		}
        
		canvas.fill();
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
	 * Is null?
	 *
	 * @author Sony? aka Sawny
	 */
	function isNull(x) {
	    return (typeof x == "undefined") ? false : x == null;
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