// 比較運算子：使用在兩個「數值」作比較，會得到「布林值」的結果。
/* 變數搭配比較運算子 >、<、>＝、=<、==、!=
Variable & Comparison Operators/Relational Operators */

let a = 36.5
let b = 37.5
let c = 'hello'
let d ='hi'
let e = 8
let f = 7

console.log(a >= b)          // False
console.log(c == d)          // False
console.log((e-f) != 1)      // False
console.log(37.5 >= 37.5)    // True
console.log(true == true)    // True
console.log(false != true)   // True

let k = 2 > 1
console.log(k)
/* 因為 2 > 1 是 True
CPU計算結果的 True 會被賦予給 k 這個變數
所以將 k 變數印出來的結果就會是 True */


// =、==（!=）、===（!==）的差異
// 1. =：賦予值的意思
let temperature = 37.0
// 2. ==（!=）：比較運算子，但會先協助將字串的數字轉型為真的數字，再比較；較不嚴謹。
let bus1 = 30;
let bus2 = '30';
console.log(bus1 == bus2);  // 印出「True」
console.log(bus1 != bus2);  // 印出「False」
// 3. ===（!==）：比較運算子，先確認型別相同再比較，不會協助轉型；較嚴謹。
console.log(bus1 === bus2);  // 印出「False」
console.log(bus1 !== bus2);  // 印出「True」