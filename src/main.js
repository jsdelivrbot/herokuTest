var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

function getGreeting(){
	return "hello";
}

if (typeof window !== 'undefined') {
	console.log("fetch")
	fetch("https://supermarche-monsieur-10270.herokuapp.com/test", {mode: 'cors'})
	.then(r=>r.text())
	.then(text=>alert(text))
}

module.exports.getGreeting = getGreeting;