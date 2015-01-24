// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  //count scanned elements
  var result=[];
  var recursion = function (domThing){
    //get all class names per element
    //use that array and compare with target className
    //if an element matches push to our results
    if (domThing.classList!==undefined && domThing.classList!==null){
      var classList = domThing.classList;
      for (var thing in classList){
        if (classList[thing] == className) {
          result.push(domThing);
          // break here to account for duplicate class names
          // no items added more than once
          break;
        }
      }
    }
    //taverse the document
    //assume the sent node has no parents(top most) that need to be searched
    //get document topnode document.
    //if child, work on the child
    //if sibling, work on the sibling
    if (domThing.hasChildNodes()){
      recursion(domThing.firstChild);
    } 
    if (domThing.nextSibling !== null) {
      recursion(domThing.nextSibling);
    }
  };
  recursion(document.documentElement);
	return result;
};
