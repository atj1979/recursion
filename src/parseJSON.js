// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var result; 
  //make an array that is the string separated by the delimiting character
  var sepBy = function (string, char){
    var array = string.split(char);
    return array;
  };
  //are the first and last characters of this string equal to the supplied character;
  var FL = function (string, char){
    //adjust for mirrored pairs if necessary
    var charCon = char;
    if(char ==='['){charCon=']'};
    if(char ==='{'){charCon='}'};
    if(char ==='('){charCon=')'};
    if(char ==='<'){charCon='>'};
    return string[0]===char && string[string.length-1]===charCon ? true : false;
  };
  var offTheSides = function (string){
  		var noSides = string.slice(1, string.length-1);
  		return noSides;
  };
  //if the first word is 'function' throw an error;
  if (FL(json, '[')){ 
    //console.log("array item");
    result=[];
    if (offTheSides(json)===undefined){
      return result;
    } 
    if (offTheSides(json)!==undefined) {
      //console.log("array split");
      var tempArr = offTheSides(json);
      tempArr = sepBy(tempArr, ',');
      //console.log("detected Array");
    }
  }
  if (FL(json, '{')){
    result={};
    var tempArr = offTheSides(json);
    //objects separated by commas, 
    if (sepBy(json, ',')!== undefined){tempArr = sepBy(json, ',')} 
    if (sepBy(tempArr, ':')!==undefined){tempArr = sepBy(tempArr, ':')}
    //console.log("detected Object");
  }
  // if (json/1 !== NaN){
  //   result = json/1;
  // }
  if (FL(json, '"') && offTheSides(json)===undefined){result = "";}
  if (json==="true"){result = true;}
  if (json==="false"){result = false;}
  if (json==="null"){result = null;}
  
  //last item should be a string, assuming we've addressed all other cases before this point
  if (typeof(json)==="string"){result = json};









  $//("#mocha").append('<div>'+JSON + " = "+JSON.parse(json) + '</div><br>');
  
  var display=JSON.parse(json);
  //console.log(result + " typeof " + typeof(result)+ " is array " + _.isArray(result))
  //console.log(display + " typeof " + typeof(display)+ " is array " + _.isArray(display));
  //console.log("Passed comparison " + _.isEqual(display, result));
  //if first and last are [],{} then make an array,object & get rid of the string [],{}
  //now values will be separated by colons make a new array of these smaller values
  //if value is divisible by 1, it will return the value else it will return NaN
  //last step, replace escaped characters with regular chars
  return result;
};

