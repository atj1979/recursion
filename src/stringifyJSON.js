// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  
  if (obj===false){return String(obj);}
  if (obj===true){return String(obj);}
  if (obj===null){return String(null);}
  if (obj===undefined){return undefined;}
  if (typeof(obj)==="number"){return String(obj);}
  if (typeof(obj)==="string"){return ('"'+ obj+ '"');} 
  //array 
  if (typeof(obj)==="object" && obj.length !== undefined){
     var result;
     if (obj.length===0){
      return '[]'
     } else {
      for (var i =0; i< obj.length; i++){
        if (i===0) {
          result = stringifyJSON(obj[i]);
        } else {
          result += ',' + stringifyJSON(obj[i]);
        }
      }
      return '['+result+']';
    }
  }
  //object 
  if (typeof(obj)==="object" && obj.length === undefined){
    var result;
    var first= true;
    //if an empty object
    if (Object.getOwnPropertyNames(obj).length===0){
      return "{}";
    } else {
    for (var key in obj){
      if (first){
          //function consideration in an object
          if (typeof(obj)==="function" || typeof(obj[key])==="function"){
            return '{}';
          }
        result = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        first = false;
      } else {
        result += ',' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
    }}
    return '{' + result + '}'; 
  }
};

