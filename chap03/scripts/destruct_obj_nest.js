let book = {
  title: 'Javaポケットリファレンス ',
  publish: '技術評論社',
  price: 2680,
  other: { keywd: 'Java SE 18', logo: 'logo.jpg' }
};

let { title, other, other: { keywd } ,other:{logo}} = book;
console.log(title);
console.log(other);
console.log(keywd);
console.log(logo);