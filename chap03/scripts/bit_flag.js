const AMERICA = 1 << 0;
const RUSSIA  = 1 << 1;
const CHINA   = 1 << 2;
const INDIA = 1 << 3;
const JAPAN = 1 << 4;

let flags = AMERICA | CHINA;
console.log(flags);
console.log(flags & AMERICA);
console.log(flags & RUSSIA);
console.log(JAPAN);

// let flags = AMERICA | RUSSIA | CHINA;
// console.log((flags & (AMERICA | CHINA)) === (AMERICA | CHINA));
