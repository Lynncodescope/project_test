// 布林值
let storeOpen = true;
console.log(storeOpen);
console.log(typeof storeOpen);

let outOfStuck = false;
console.log(outOfStuck);
console.log(typeof outOfStuck);

// undefined:某個變數尚未被賦予值
// undefined vs not defined：https://pjchender.blogspot.com/2015/12/javascript-undefinedundefined.html
let a;
a = 1;
console.log(a);         // 印出「undefined」
console.log(typeof a);  // 印出「undefined」
// 但先宣告變數但尚未賦予值，後續也能再補充賦予值(例如行12)
// 如此行13、14就會印出「1、number」


// null: 有被賦予值，但是是「空值」
// 用法：本來是有賦予值的，但基於某些原因，把該值清除，賦予null。
// 原因：「陣列、物件」功能是用組合資料的方式放大量的資料在一個變數中，若有資料已無用處卻不清除，會導致相當佔據記憶體空間。
let c = null;
console.log(c);          // 印出「null」
console.log(typeof c);   // 印出「object」