// AND：寫法「&&」，所有條件(2個以上）需要同時滿足，才會回傳「True」。
let logic1 = 1;
let logic2 = 2;
console.log(logic1==1 && logic2==2);   // 印出「True」
console.log(logic1!=1 && logic2==2);   // 印出「False」

// OR：寫法「||」，所有條件（2個以上）只要滿足任何其中一項，就會回傳「True」。
console.log(logic1!=1 || logic2==2);   // 印出「True」
console.log(logic1!=1 || logic2!=2);   // 印出「False」

// 2個以上的條件，就是繼續寫「&& + 條件」或者「|| + 條件」即可。

/* 情境範例1：顧客符合贈禮條件
1. 需購物買5000元以上
2. 該顧客需具備VIP資格 */
let pay = 6000;
let isVIP = true;
console.log(pay >= 5000 && isVIP == true);   //  印出「True」

/* 情境範例2：成為VIP的條件
1. 年度消費滿12000元
2. 單次消費滿8000元
兩者符合其中一種即可成為VIP */
let onePay = 6000;
let yearPay = 13000;
console.log(onePay >= 5000 || yearPay >= 12000);   //  印出「True」