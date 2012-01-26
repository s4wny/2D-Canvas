/**
 * 2D Canvas - Game development the easy way
 *
 *
 * @author Sony? aka Sawny @link http://4morefun.net
           Matert
 */
 
(function() {

    //------------------------------------------------------------
    //2D Canvas (2DC)
    //------------------------------------------------------------
    
    $2DC = function(selector)
    {
        
        //Selector?
        if(selector != null && selector != undefined && selector != "") {
            var selector = Sizzle(selector);
            console.log("Ej Tom");
        }
        
        console.log(selector);
        
        
        //$2DC(selector).x
        return new function() {
            return {
            
                /**
                 *
                 */
                update : function(fps) {
                
                },
                
                
                /** 
                 *
                 */
                start : function() {
                
                }
            }
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
        
        
        return { //TODO check if this work..
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
            var canvas = document.getElementById("myCanvas").getContext("2d");
           
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = "#8ED6FF";
            context.fill();
    }
    
    
    /**
     * Draw the imgObj
     */
    drawAt = function(x, y)
    {
    
    }
    
    
    
    
    
    //------------------------------------------------------------
    // Helpers
    //------------------------------------------------------------
    
    /**
     * Return the color in x (TODO: rgb?)
     */
    var getColor = function(color) {
        
        //if match
                //x = A-F0-9
            //#xxx            = hex
            //#xxxxxx         = hex
                //x = 0-255, y = 0-1
            //rgb(x, x, x)    = rgb
            //rgba(x, x, x, y)   = rgba
        //else
            //color table
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
        console     = {};
        console.log = function(){};
    }
    
    
    /**
     * Is int? true/false
     *
     * @author Matert
     */
    function isInt(i){
        return typeof i == "number";
    }
    
    
    
    //Jailbreak!
    window.$2DC = $2DC;
})();

//END OF LINE