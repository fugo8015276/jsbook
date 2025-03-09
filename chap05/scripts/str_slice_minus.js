let str = 'WINGSプロジェクト';
//-2を0とみなす。
console.log(str.substring(5, -2));
//-2を最後尾からの文字列としてみなす。つまり5,9となる。
console.log(str.slice(5, -2));