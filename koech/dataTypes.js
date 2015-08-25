var dataType = function(x) {
    
    if(typeof (x) == "string") {
        
        return "string";
        
    } else if (typeof(x) == "number"){
        
        if( (""+x+"").indexOf('.') >= 0 ) {
            
            return "float";
            
        } else {
            
            return "int";
            
        }
        
    } else if(typeof(x) === typeof(null)) {
        
        return "object";
        
    } else if(typeof(x) == "boolean") {
        
        return "boolean";
        
    } else if(typeof(x) === typeof(undefined)) {
        
        return "undefined";
        
    } 
    
};

console.log(dataType(Object));