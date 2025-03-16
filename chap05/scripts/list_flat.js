let list = ['ド', ['レ', 'ミ', ['ファ', 'ソ', ['ラ', 'シ']]]];
//一階層平坦化
console.log(list.flat());
//二階層平坦化
console.log(list.flat(2));
//全階層平坦化
console.log(list.flat(Infinity));