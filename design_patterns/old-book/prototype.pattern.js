/*
  The GoF (GangOfFour) refer to the prototype pattern as one which creates objects 
  based on a template of an existing object through cloning.
*/

// Prototype - regular JS prototype, best - created once in prototype - used in all "childs"

// This book offers really ... weird approach, except of JS vanilla prototype: 

// 1st - use Object.create - it is ok
// 2nd - WHAAAAT?:
var vehiclePrototype = {
  init: function ( carModel ) {
    this.model = carModel;
  },
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};

function vehicle( model ) {
  function F() {}; // eyes are bleeding here.
  F.prototype = vehiclePrototype;
 
  // so he uses "new" keyword, because "new" in step 2 will assign __proto__ to be .prototype of Function-constructor
  var f = new F(); 
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();