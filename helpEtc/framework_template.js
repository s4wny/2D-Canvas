// You can use this file if you want to create your own framework.
// It's a template that allow this syntax:
// $2DC(...).x().y().z().x()...
// $2DC.x().y().z().x()...


//Annonymous function. This will remove all variables and functions when the function finnish.
(function() {
    $2DC = function(selector) //Name of your framework. I.e: $2DC
    {
        //Is a selector choosen?
        if(selector != null && selector != undefined && selector != "")
		{			
		    //Select what element we will draw in. Example call: $2DC.selector[0].innerHTML; Note the [0]. Sizzle can return many elmnts, but we just want to affect the first elmnt.
			$2DC.selector   = Sizzle(selector); //Note: For this you need Sizzle.js, google it! You will need to include sizzle.js before this file is included.
			
            return new function() { //This allows the use of $2DC().func1();
                return { //Return an object with many functions
                    func1 : function(x, y) {
                        
                    },
					
                    func2 : function() {
					    
                    }
                }
            }
		}
		else
		{
		    //pl0x choose an element to draw in.
		}
    }
    
    
     
    $2DC.func1 = function(x, y, opt1, opt2)
    {
	    return {
		    hi       : subFunc1,
			subFunc2 : subFunc2
		}
    }

    subFunc1 = function(x, y)
    {
		return this; // $2DC.func1().hi().subFunc2().subFunc2().hi().hi().hi().hi().subFunc2()...
    }
	
	subFunc2 = function(x, y)
    {
		return this; // $2DC.func1().hi().subFunc2().subFunc2().hi().hi().hi().hi().subFunc2()...
    }
	
    
    //We don't want $2DC to be removed so we expose it to the window object. We save it from death.
    window.$2DC = $2DC; //Now you can call $2DC from everywhere.
})();