
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(number) { 
  // initializing empty string for "levels"
  var level = "";

  // Looping from 1 to input number
  for (let i = 1; i <= number; i++) {
    // concatenating # to level
    level += '#'
    // logging each level to console
    console.log(level);
  }

 
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) { 
  // looping from start to end
  for (var i = start; i <= end; i++) {
    // if number is divisible by both 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      // log fizzbuzz
      console.log("fizzbuzz");
    }
    // if number is divisible by 3
    else if (i % 3 === 0) {
      // log fizz
      console.log("fizz");
    }
    else if (i % 5 === 0) {
      // log buzz
      console.log("buzz");
    }
    // if number is not divisible by 5
    else {
      // log number
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  // initializing empty string for chessboard
  let board = "";

  // outer loop 
  for (let i = 0; i < x; i++) {
    // initialize empty string for row
    let row = "";

    // inner loop
    for (let j = 0; j < x; j++) {
      // checking whether sum is even
      if ((i + j) % 2 === 0) {
        // if even add space
        row += " ";
      } else {
        // if odd add #
        row += "#";
      }
    }
    // adding row to board with a newline char
    board += row + "\n";
  }
  // logging board
  console.log(board);
}
console.log(drawChessboard(3));

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}