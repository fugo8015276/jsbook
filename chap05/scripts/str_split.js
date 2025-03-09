let str = 'みかん\tりんご\tぶどう\t';
let str3 = 'みかん　りんご　ぶどう　パイナップル';

let str2 = '𠮟られて';

console.log(str.split('\t'));
console.log(str.split('\y'));
console.log(str3.split());//何も指定していないから返さない。
console.log(str2.split(''));
console.log(str.split('\t', 2));
console.log(str.split('\t', 0));
console.log(str.split('\t', -1));