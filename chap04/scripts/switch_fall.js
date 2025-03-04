let rank = 'E';

switch (rank) {
  //下の部分はor条件になる。
  case 'A' :
  case 'B' :
  case 'C':
    //rankがDだとしても、ちゃんと下のcase Dに行く。
  default :
    console.log('合格！');
    break;
  case 'D' :
    console.log('不合格...');
    break;
}
