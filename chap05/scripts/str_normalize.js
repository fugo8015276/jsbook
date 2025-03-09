let type = ['NFD', 'NFC', 'NFKD', 'NFKC'];
let list = ['ギガ', 'ギガ', 'ｷﾞｶﾞ', '㌐'];

for (let t of type) {
  console.log(`■${t}`);
  for (let l of list) {
    //lはlistで、tはtypeである。normalizeメソッドは、引数に指定したtypeをもとに文字の正規化を行う。
    console.log(`${l} => ${l.normalize(t)}`);
  }
}
