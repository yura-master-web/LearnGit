const sh = console.log.bind(console);
sh('vasya.js');
const arr = [];
for (let i = 0; i < 5; i++) {
	(x => arr.push(x))(i);
}
sh(arr[2]);
console.log('vasya.js');
for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log('initial commit');

console.log('create new branch');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');