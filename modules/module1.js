// random number generator

function random ( low, high ) {
var randomNumber = Math.floor(Math.random() * high) + low;
return randomNumber;
}
module.exports = random;