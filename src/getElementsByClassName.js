// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var jim = function(className){

  var result=[];
  var run= false;
  var numrun = 0 ;// taverse the document
		//get document topnode document.
		//if child, get child
		//if no child, get sibling,
		//if no sibling get parent sibling
		//if no parent sibling done
  
  var recursion = function (domThing){
    run=true;
    //get all class names per element
    //use that array and compare with target className
    //if an element matches push to our results
    var classList = domThing.classList;
    for (var thing in classList){
      if (classList[thing] === className) {
        console.log("pushed "+ className+ "" + domThing)
        result.push(domThing);
        // break here to account for duplicate class names
        break;
      }
    }
    if (domThing.hasChildNodes()){
      recursion(domThing.firstChild);
    } else if (domThing.nextSibling) {
      recursion(domThing.nextSibling);

    } else if (domThing.parentNode.nextSibling) {
      recursion(domThing.parentNode.nextSibling);
    }
  };
  recursion(document.documentElement);
  console.log("total " +result.length);
	return result;
	//push found search to result

};
