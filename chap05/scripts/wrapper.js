// let flag = new Boolean(undefined);
// let flag = null;
// let flag = undefined;
let flag = false;
//なぜtrueになる？→newする場合、コンストラクタの引数がnullかundefined以外の場合はtrueになる。
if (flag) {
  console.log('flagはtrueです！');
}