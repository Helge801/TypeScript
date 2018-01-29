// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Bryan Lund";

// Array
var ages : number [] = [33, 28, 11];

// Tuple
let player : [number, string];
player = [3, 'Corarra'];

// Enum
enum Stage {Approved, Pending, Rejected};
let Job : Stage = Stage.Pending

// Any
var apiData : any [] = [123, "Bryan Lund", false];

// Void
function printOut(msg: string) : void {
  console.log(msg);
}