let data = ['Python', 'PHP', 'JavaScript'];
console.log(delete data[2]);
console.log(data);
console.log(data.length);

let langs = { primary: 'Japanese', secondary: 'English' };
console.log(delete langs.primary);
console.log(langs);
console.log(delete langs.hoge);

let member = { name: '山田太郎', sex: 'male', language: langs };
console.log(delete langs.secondary);
console.log(member);
console.log(langs);

let title = 'Vue.js本格入門';
console.log(delete title);

author = '鈴木次郎';
console.log(delete author);