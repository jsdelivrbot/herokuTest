// Support server-side fetch for tests.
let fetch = (typeof window === 'undefined') ? require('node-fetch') : window.fetch;

var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

function getGreeting(){
	return "hello";
}
module.exports.getGreeting = getGreeting;