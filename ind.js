console.log('a');

console.log('b');

setTimeout(() => console.log('e'), 1000)

setTimeout(() => console.log('c'), 0)

console.log('d')