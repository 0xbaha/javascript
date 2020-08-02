// Set static variables
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");
var passCharsArr = [];

// Set variables to check user option
var passLength;
var isUpper;
var isLower;
var isNum;
var isSym;

// Validate user options
if (passLength < 8 || passLength > 128){
  isLengthValid = false;
} else {
  isLengthValid = true;
  if (isUpper || isLower || isNum || isSym) {
    isInputValid = true;
  } else {
    isInputValid = false;
  }
}

// Create array for the range of password characters
if (isLengthValid && isInputValid) {
  isReqValid = true;  // requirement to generate password Valid
  if (isUpper) {
    Array.prototype.push.apply(passCharsArr,abcUpperArr);
  }
  if (isLower) {
    Array.prototype.push.apply(passCharsArr,abcLowerArr);
  }
  if (isNum) {
    Array.prototype.push.apply(passCharsArr,numArr);
  }
  if (isSym) {
    Array.prototype.push.apply(passCharsArr,symArr);
  }
} else {
  isReqValid = false; // requirement to generate password NOT valid
}

// Generate the password
genPass(passLength,passCharsArr);

/**************************** FUNCTIONS ****************************/
function genPass(length,charArr) {
// Generate password
  var result = "";
  for (i = 0; i < length; i++) {
    idx = Math.floor(Math.random()*charArr.length);
    result += charArr[idx];
  }
  return result;
}
