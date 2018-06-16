var table = document.querySelector("#table");                      
table.addEventListener("click", doSomething, false);               
                                                                   
function invertColor(hex) {                                        
  if (hex.indexOf('#') === 0) {                                    
    hex = hex.slice(1);                                            
  }                                                                
  // convert 3-digit hex to 6-digits.                              
  if (hex.length === 3) {                                          
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];     
  }                                                                
  if (hex.length !== 6) {                                          
    throw new Error('Invalid HEX color.');                         
  }                                                                
  var r = parseInt(hex.slice(0, 2), 16),                           
      g = parseInt(hex.slice(2, 4), 16),                           
      b = parseInt(hex.slice(4, 6), 16);                           
                                                                   
  var newC = '#000000';                                            
  if (r * 0.299 + g * 0.587 + b * 0.114 < 186) {                   
    newC = '#FFFFFF';                                              
  }                                                                
    return newC;                                                   
}                                                                  
                                                                   
function doSomething(e) {                                          
  if (e.target !== e.currentTarget) {                              
    var clickedItem = e.target.id;                                 
    var hexIndex = clickedItem.indexOf("#");                       
    var hexx = clickedItem.slice(hexIndex, hexIndex+7);            
    document.getElementById("kleur").innerHTML = clickedItem;      
    document.getElementById("box").style.backgroundColor = hexx;   
    document.getElementById("box").style.color = invertColor(hexx);
  }                                                                
  e.stopPropagation();                                             
}
