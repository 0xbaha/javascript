var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

console.log(rgbToHex(123));       // returns 7b string
console.log(rgbToHex(2));         // returns 02 string
console.log(rgbToHex(15844367));  // returns f1c40f string
console.log(rgbToHex(3066993));   // returns 2ecc71 string
console.log(rgbToHex(16711680));  // returns ff0000 string

// NOTES:
// https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb
