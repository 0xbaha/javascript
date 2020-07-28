// https://stackoverflow.com/questions/20169217/how-to-write-isnumber-in-javascript

var isNumber = function isNumber(value) {
   return typeof value === 'number' && isFinite(value);
}

var isNumberObject = function isNumberObject(n) {
    return (Object.prototype.toString.apply(n) === '[object Number]');
}

var isCustomNumber = function isCustomNumber(n){
    return isNumber(n) || isNumberObject(n);
}

console.log(isCustomNumber(new Number(5)));
console.log(isCustomNumber(new Number(5.2)));
console.log(isCustomNumber(new Number(5.5)));
console.log(isCustomNumber(new Number(-1)));
console.log(isCustomNumber(new Number(-1.5)));
console.log(isCustomNumber(new Number(-0.0)));
console.log(isCustomNumber(new Number(0.0)));
console.log(isCustomNumber(new Number(0)));
console.log(isCustomNumber(new Number(1e5)));

console.log(isCustomNumber(5));
console.log(isCustomNumber(5.2));
console.log(isCustomNumber(5.5));
console.log(isCustomNumber(-1));
console.log(isCustomNumber(-1.5));
console.log(isCustomNumber(-0.0));
console.log(isCustomNumber(0.0));
console.log(isCustomNumber(0));
console.log(isCustomNumber(1e5));
