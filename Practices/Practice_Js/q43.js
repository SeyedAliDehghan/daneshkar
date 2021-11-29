//43. Write a JavaScript program to compute the union of two arrays.


var a = [1,2,3,];
var b = [1,2,3,4,5];
var union = [...new Set([...a, ...b])];
console.log(union);