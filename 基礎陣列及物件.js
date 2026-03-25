/* 陣列 array 、物件 object 用途：
當要設定大量同性質或有類別性的變數時，可利用「陣列」存資料。
當要說明同一個東西的各種資訊（屬性）時，可利用「物件」存資料。
可減少大量變數的命名以及多筆資料轉而做其他運用時不慎遺漏。 */

// 陣列寫法：用中括號裡面直接放value，不同值之間以「,」相隔。
// 舉例:
let colors =['red','green','blue',3,true]; 
let data=[]; 
console.log(colors);  // 印出「['red','green','blue',3,true]」
console.log(data);    // 印出「[]」

/* 讀取陣列裡的某筆資料：陣列中的資料位置，第一筆是0，往右方向遞增1；
故以colors陣列舉例，由左而右位置01234的資料分別是red, green, blue, 3, true。 */
console.log(colors[1],colors[3],colors[4]);     // 印出「green 3 true」

// 讀取陣列中的資料後，亦可將其賦予值至某個變數中。
let grassColors = colors[1];
let infoColors = colors.length;    // colors陣列中共有5個值，故colors陣列長度為5。
console.log(grassColors+','+infoColors);  // 印出「green,5」

// 在空陣列中寫入值;如果要修改陣列中的某一筆資料，也是用這個方法。
let paints = [];
paints[0] = 'black';
paints[1] = 'brown';
paints[3] = 'orange';
paints[4] = 'yellow';
paints[5] = 'purple';
console.log(paints);         // 印出「['black', 'brown', empty, 'orange', 'yellow', 'purple']」
console.log(paints.length);  // 印出「6」

// 在已存在的值的陣列中使用「push」更新加入新的值，會新增在陣列的最尾（最右側）。
colors.push('gray',false,8);
console.log(colors);   // 印出「['red', 'green', 'blue', 3, true, 'gray', false, 8]」

// 使用「unshift」更新加入新值，會新增在陣列的最前面（最左側）
colors.unshift('pink');
console.log(colors);  // 印出「['pink','red', 'green', 'blue', 3, true, 'gray', false, 8]」

// 使用「pop」刪除資料，會刪除最右側的資料；使用幾次，就會刪掉幾筆。
// 使用「shift」刪除資料，會刪除最左側的資料；使用幾次，就會刪掉幾筆。
colors.pop();
colors.pop();
console.log(colors);   // 印出「['pink','red', 'green', 'blue', 3, true, 'gray']」

colors.shift();
console.log(colors);   // 印出「['red', 'green', 'blue', 3, true, 'gray']」

// 使用「splice」，可指定「位置區間」刪除資料
// （由左方開始）第一個參數：起始位置、第二個參數：結束位置
colors.splice(2,4);    // 將刪除陣列中，位置2~4的資料
console.log(colors);   // 印出「['red', 'green', 'gray']」

// 其他陣列總結：https://www.hexschool.com/2017/09/01/2017-09-01-javascript-for/



// 物件寫法：：用大括號裡面直接放「屬性：值」，不同組資料間以「,」相隔，最後一筆資料後不需再加「,」。
// 此處變數中的值，除了字串、數字、布林值外，也能直接放「陣列」。
// 舉例:
// 寫法1：設定變數、賦予值
/*
let fatherName = 'Tom';
let kids = ['John','Mary','Peter'];
let petsNum = 3;
let travelAboard = true; */
// 寫法2：物件（設定變數為home，而它的值是「物件」，即是整個大括號包含裡面的『屬性：值』。）
//          （屬性，就是這個屬於物件的各種資訊。）
// 如果屬性名稱（Key）不包含特殊字元（如空格、連字號 -），其實不需要加引號。
let home = {
'fatherName':'Tom',
'kids':['John','Mary','Peter'],
'petsNum':3,
'travelAboard':true
}
console.log(home);          // 印出上方一長串的home資料
console.log(typeof home);   // 印出「object」

// 讀取物件中某筆值：就告訴程式想要讀取的值的對應屬性，程式就會回傳該屬性的值。
// 也能將回傳的值，再賦予給一個變數，做後續使用。
let kidsFather = home.fatherName;
let children = home.kids; 
console.log(kidsFather);    // 印出「Tom」
console.log(children);      // 印出「['John','Mary','Peter']」
console.log(home.petsNum);  // 印出「3」

// 第2種讀取物件中某筆值的方式：將屬性名稱放在中括號內前後加上引號行程字串
// 這會關聯到JSON格式的讀取，可以先記住使用這個方法。
console.log(home['petsNum']);  // 印出「3」
// 也能先將「屬性名稱」用字串型別的方式賦予值給一個變數，再讓[]內放入該變數去讀取
let z = 'travelAboard';
console.log(home[z]);   // 印出「true」

// 在空物件中寫入值;如果要修改物件中的某一筆資料，也是用這個方法。
let zoo = {};
zoo.canFly = 'bird';
zoo.inWater = 'fish';
zoo.onLand = 'turtle';
zoo.category = 3;
console.log(zoo);  // 印出「{canFly: 'bird', inWater: 'fish', onLand: 'turtle', category: 3}」

// 使用delete指令刪除物件內的資料
delete zoo.inWater;
console.log(zoo); // 印出「{canFly: 'bird', onLand: 'turtle', category: 3}」
console.log(zoo.inWater);  // 印出「undefined」


// 「陣列」、「物件」可以混合應用，物件裡面可放陣列，陣列裡面可放物件。
