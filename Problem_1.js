/*
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
*/

// The solution:

function lowerPositive(arr){
  let sortArr = arr.sort();

  if(Math.sign(sortArr[sortArr.length-1]) == -1 || sortArr[sortArr.length-1] == 0){
    // if all values in arr are negative or last index is 0
    return 1
  }

  for (let i = 0 ; i < sortArr.length ; i++){

    if (sortArr[i]+1 !== sortArr[i+1] && Math.sign(sortArr[i]) == 1){
      // missing lower positive num inside  sortArr
      return sortArr[i]+1
    }else if(i == sortArr.length-1 && Math.sign(sortArr[sortArr.length-1]) == 1){
      // when arrive to last index and it is positive
      return sortArr[sortArr.length-1]+1
    }

  }
}

var x = lowerPositive([1,8,6,2,3])
console.log(x)
// => 4

var x = lowerPositive([1, 2, 0])
console.log(x)
// => 3

var x = lowerPositive([-1, -2, 0, -5, -6, -11])
console.log(x)
// => 1

