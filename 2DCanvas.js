/**
 * 2D Canvas - Game development the easy way
 *
 * Blargh
 * ...
 *
 * @author Sony? aka Sawny @link http://4morefun.net
           ...
 * @licens ...
 * @example ...
 */
 
(function() {

    //------------------------------------------------------------
    //2D Canvas (2DC)
    //------------------------------------------------------------
    
    2DC = new function(selector)
    {
        //Selector?
        
        
        //------------------------------------------------------------
        // Functions
        //------------------------------------------------------------
        
        /**
         * 
         *
         * @author
         * @param (string|int) opt1 = If int         -> size,  If string       -> color (2DC)
         * @param (string|int) opt2 = If opt2 = size -> color, If opt2 = color -> size  (diameter)
         * @return "imgObj".
         * @example 2DC.circle(400, 200, 20, "blue");
         */
        this.circle = function(x    /* (req) int */,
                               y    /* (req) int */,
                               opt1 /* int = size | string = color */,
                               opt2 /* !opt1 */)
        {
            
            //Opts?
            
            return
            {
                x        : x,
                y        : y,
                xSpeed   : 0,
                ySpeed   : 0,
                shape    : "circle",
                size     : size,
                color    : color,
                
                /* Functions */
                draw     : this.draw,
                drawAt   : this.drawAt;
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
            this.draw = function(x /* int */,
                                 y /* int */)
            {
                
            };
            
            
            /**
             * Draw the imgObj
             */
            this.drawAt = function(x /* (req) int */,
                                   y /* (req) int */)
            {
            
            };
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
    
    
}();





