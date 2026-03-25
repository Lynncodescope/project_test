/* 陣列處理方法 forEach
1. 如同要取得陣列資料長度一般，要在陣列名稱後加上「.」再加上方法名稱，最後加上「()」。
   e.g. 針對名為data的陣列，使用forEach，寫法是：
   data.forEach(function(陣列中元素值,元素的索引值,陣列本身){程式碼})
   (1) 函式中的參數1：「陣列中的元素值」，看陣列中有幾個元素，那麼這個function就會執行幾次取出資料的動作。
   (2) 函式中的參數2：「元素的索引值」，陣列中元素的索引值是從0開始的(也就是位置)，第一個元素的索引值為0，第二個元素的索引值為1，以此類推。
   (3) 函式中的參數3：「陣列本身」，就是指原始的陣列，let data = [30,20,10]，那麼原始陣列也就是[30,20,10]。
2. forEach方法會對陣列中的每一個元素執行一次提供的函式。
3. forEach方法會傳入三個參數：陣列中元素值,元素的索引值,陣列本身。
   (1) 而在寫函式的過程中，可以自行修改這三個參數的名稱，並不一定要寫成item,index,array。
   (2) 可視用途來決定要使用哪一個參數，例如：如果只需要陣列中元素值，可以只寫一個參數，其他兩個參數可以省略。
4. forEach方法不會改變原始陣列。
5. forEach方法沒有回傳值。
*/

let data = [30,20,10];

data.forEach(function(item,index,array){
    console.log (item,index,array);
})

/* 會印出
30 0 [30, 20, 10]
20 1 [30, 20, 10]
10 2 [30, 20, 10]
*/




/* 例題: 使用 forEach 方法計算陣列中所有元素的總和
1. 設定numbers陣列中有三個元素
2. 設定相加的初始值=0
3. 使用forEach對numbers陣列中的每一個元素執行相加的動作，將結果存到sum變數中
   (1) function (item){sum += item} 執行第一次，sum = 0+10 = 10
   (2) function (item){sum += item} 執行第二次，sum = 10+20 = 30
   (3) function (item){sum += item} 執行第三次，sum = 30+30 = 60
4. 最後印出sum的值，會得到60 
*/

let numbers = [10, 20, 30];
let sum = 0;       // 宣告變數放在這裡，則當要console.log(變數)時，會先在forEach方法內找是否有宣告變數，
                   // 若沒有，就會在forEach方法外部找變數。
numbers.forEach(function(item) {
//  let sum = 0;   // 如果在這裡宣告sum變數，則每次執行forEach方法時，sum都會被重新宣告為0，導致無法累加之前的值。  
                   // 且，如果sum變數賦予為0這行是放在forEach裡面，而console.log(sum)放在forEach的外部時，會出現undefined，
                   // 因為sum變數的作用域只在forEach方法內部，當forEach方法執行完畢後，sum變數就不再存在了。
    sum += item;
});

console.log(sum);   // 會印出 60



/* 例題: 使用 forEach 搭配 if 篩選陣列中有幾個偶數，並把所有偶數印出來
1. 設定nums陣列中有三個元素
2. 設定偶數數量的初始值=0
3. 設定一個空陣列準備放入判斷為偶數的數字
4. 使用forEach對nums陣列中的每一個元素執行if的程式碼
   (1) if 程式碼：判斷forEach取出來的每一個元素是否為偶數(除以2，會被整除，餘數=0)
   (2) 如果是偶數，那麼「if (value % 2 ==0)」條件為true，就會接續執行 if 內的程式碼
       even += 1 以及 evenArr.push(value)
5. 最後印出even和evenArr的值，會得到共有4個偶數，分別是[30,40,100,5596]。
*/

let nums = [30,40,100,333,5596];
let even = 0;
let evenArr = [];
nums.forEach(function(value){
    if (value % 2 ==0){
        even += 1;
        evenArr.push(value);
    }
})

console.log (even);
console.log(evenArr);


// forEach 讀取資料：使用forEach去讀取的資料若是陣列或物件，也用一般讀取陣列或物件的方式去讀取即可，forEach是用來執行每筆讀取的動作。

let group = [
    {
        memberName: 'Mary',
        sex: 'female'
    },
    {
        memberName: 'Tom',
        sex: 'male'
    }
];

group.forEach(function(member){
    console.log (member);
    console.log (member.memberName, member.sex);
})

/* 印出「
{memberName: 'Mary', sex: 'female'}
Mary female
{memberName: 'Tom', sex: 'male'}
Tom male」 

因為第一筆資料是Mary的物件，跑完兩行console.log的程式碼後，
再跑第二筆資料(Tom的物件)，再跑完兩行console.log的程式碼結束。
*/

// 範例：讀取到資料後，可再利用陣列或物件的特性，將資訊收集在一起，避免資訊混亂。

let people = {
    female:0,
    male:0
};

let group1 = [
    {
        member1: 'Mary',
        sex1: 'female'
    },
    {
        member1: 'Tom',
        sex1: 'male'
    },
        {
        member1: 'Susan',
        sex1: 'female'
    },
    {
        member1: 'Tony',
        sex1: 'male'
    },
        {
        member1: 'Amy',
        sex1: 'female'
    },
    {
        member1: 'Ana',
        sex1: 'female'
    }
];

group1.forEach(function(item){
    if (item.sex1 == 'female'){
        people.female += 1;
    }
    else{
        people.male += 1;
    }
})

console.log (`group1內的女生共有 ${people.female} 個, 男生共有 ${people.male} 個。`);