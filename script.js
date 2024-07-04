let now = new Date();
let specificDate = new Date(1991, 1, 20); 
let fromString = new Date('2020-12-25T10:00:00Z');

console.log(Date.now());
console.log(Date.parse('2020-12-25T10:00:00Z'));
console.log(Date.UTC(2020, 11, 25, 10, 0, 0)); 
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getUTCDate());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCMinutes());
console.log(now.getUTCMonth());
console.log(now.getUTCSeconds());


