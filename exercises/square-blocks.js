/*
Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

const isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true
        }
    else {
      return false
    }
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(5))
console.log(isSquare(25))
console.log(isSquare(26))


/* альтернативные решения
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

у меня ветка if else лишняя
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}
*/