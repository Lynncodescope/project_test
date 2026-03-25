// 1. 賦予變數的值是字串時，應如何表示。
/* (1) 宣告字串時，變數值的前後
       必須使用單引號或雙引號包住，
       且需要前後一致。
   (2) 若是字串當中本身就有單引號或者雙引號，
       那麼，包裹著字串的就必須是另外一種引號。
*/

let a = 'Hello';
let b = "Nice to meet you.";
let c = "Let's go.";

console.log(a+'~ '+b);  
// 印出「Hello~ Nice to meet you.」



// 2. 數字與字串

// 數字與字串相加：數字會自動轉型
let age = 20;
let memberName = 'Marie';
console.log(`會員姓名：${memberName}，今年${age}歲。`);
/* 以上是ES6的新寫法，稱為「樣板字面值(Template literals)」
   (1) 介紹連結：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals
   (2)「`」：在英文輸入時，按「option」+「~ (Tab上方那個按鍵)」
   (3) 字串要和變數連接時，使用「$」
   (4) {}內放變數名稱，也可在{}內做四則運算  */
// 印出「會員姓名：Marie，今年20歲。」

// NaN：可以簡單說，它是指「非數值」的意思
// NaN介紹:https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/NaN
console.log(memberName+age);   // 因為數字會自動轉型為字串的因素，因此會印出「Marie20」
console.log(memberName*age);   // 因為字串無法如同數字進行四則運算，因此會印出「NaN」   

// 將字串轉為數字
// 用途：從文字欄位取得的數字都是字串，所以必須轉型成數字後才能再繼續運用。
let layer = '20';
console.log(typeof layer);             // 印出「string」
console.log(typeof parseInt(layer));   // 印出「number」

// 將數字轉為字串
let layer2 = 30;
console.log(typeof layer2);            // 印出「number」
console.log(typeof layer2.toString());  // 印出「string」

// 字串處理：確認字元長度與刪去多餘空白
let member = ' Mark ';
member = member.trim();  
/* 對字串進行的各種處理所獲得的結果，都必須要設定一個變數將結果賦予給它，
   或者將處理結果賦予回原有的變數，如此才能將該結果取出、加以使用。
   這個例子是將字串處理完的結果賦予回原有的變數。 */
console.log(member.length);  // 印出「4」
console.log(member);         // 印出「Mark」
