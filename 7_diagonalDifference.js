// The Problem
/*
* Given a square matrix, calculate the absolute difference between the sums of its diagonals.
* For example, the square matrix arr is shown below:
                    1 2 3
                    4 5 6
                    9 8 9 
* The left-to-right diagonal = 1+5+9= 15 . The right to left diagonal = 3+5+9 = 17. 
  Their absolute difference is |15-17| = 2.
*/

// The Solution

function diagonalDifference(arr) {
    // Write your code here
    let result=0;
    for(let i=0 ; i<arr.length ; i++){
    // selecte index and its coordinate, ex from above arr:
    // here will select in first iteration 1,3 in second 5,5, in third 9,9
      result += arr[i][i] - arr[i][arr.length - (i+1)]
    }
    return Math.abs(result)
}
