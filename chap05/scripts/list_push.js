let list = ['松', '竹', '梅'];
list.push('桜');//末尾に追加
list.unshift('桃', '杏')//先頭に追加
list.push('柳');
console.log(list);
console.log(list.pop());//末尾を取得して削除
console.log(list.shift());//先頭を取得して削除
console.log(list);

//下記の状態だと配列がそのままlistに追加される
// list.push(['杉', '桐']);
// console.log(list);

//そのため、スプレッド構文[...]を使って配列を展開して追加する
list.push(...['杉', '桐']);
console.log(list);
//2つめの配列を入れると、合体しなくなる。
console.log(list.concat(['森', '山']), (['川', '湖']));

//削除しないで取得するには、atメソッドを使う
console.log(list.at(0));
//末尾の要素を取得するには-1を指定する
console.log(list.at(-1));
console.log(list);
//また、sliceメソッドを使って取得することもできる
console.log(list.slice(0, 2));
console.log(list.slice(-2));
console.log(list);
// console.log(list.concat(['杉', '桐'], ['杏', '柿']));
