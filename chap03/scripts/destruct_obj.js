let book = {
  title: 'Javaポケットリファレンス',
  publisher: '技術評論社',
  price: 2680
};

let { price, title, memo = '×', publisher,a = 1} = book;
console.log(title);
console.log(price);
console.log(memo);
console.log(publisher);
console.log(a);