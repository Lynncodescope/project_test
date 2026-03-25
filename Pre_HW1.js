// 模擬情境1：小美買冰塊

// 1.小美錢包裡有200元
// 2.她看到冰塊一包25元
// 3.於是買了7包冰塊
// 4.付完錢後，錢包剩下多少錢？

let wallet1 = 200;
let icePrice = 25;
let iceNum = 7;
let total1 = icePrice*iceNum;
let balance1 = wallet1-total1;

//練習一個數字轉型字串
console.log('模擬情境1：小美買完冰塊後，錢包還剩 '+balance1+' 元');
console.log('模擬情境1：小美買完冰塊後，錢包還剩 '+balance1.toString()+' 元');


// 模擬情境2：小華去速食店

// 1.小華到速食店看到菜單上漢堡一顆50元、可樂一瓶30元
// 2.想買一顆漢堡、兩瓶可樂
// 3.但他只帶了180元出門吃午餐
// 4.如果付完錢後，錢包剩下多少錢？

let humPrice = 50;
let colaPrice = 30;
let humNum = 1;
let colaNum = 2;
let wallet2 = 180;
let total2 = humPrice*humNum + colaPrice*colaNum;
let balance2 = wallet2 - total2

console.log('模擬情境2：小華買完午餐後，錢包還剩 '+balance2+' 元');