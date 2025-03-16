let data = [];
data.push(1);
data.push(2);
data.push(3);

//popメソッドは末尾の要素を取得して削除する
// console.log(data.pop());
// console.log(data.pop());
// console.log(data.pop());

//shiftメソッドは先頭の要素を取得して削除する
console.log(data.shift());
console.log(data.shift());
console.log(data.shift());

//spliceメソッドは指定した位置の要素を取得して削除する
let list2 = ['a', 'b', 'c', 'd', 'e'];
console.log(list2.splice(2, 1, 'f', 'g', 'h'));
console.log(list2);
