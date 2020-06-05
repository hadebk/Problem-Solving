// The Problem
/*
  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
  Then print the respective minimum and maximum values as a single line of two space-separated long integers.
  For example, arr=[1,3,5,7,9] . Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9 = 24 .
  We would print 16 24
*/

// The Solution

function miniMaxSum(arr) {
    let minIndex=arr[0],
        maxIndex=arr[0],
        arrSum=arr[0],
        minSum, maxSum;
    for(let i=1 ; i<arr.length ; i++){
        arrSum += arr[i];
        if(arr[i] < minIndex) minIndex=arr[i];
        if(arr[i] > maxIndex) maxIndex=arr[i];
    }
    minSum=arrSum-maxIndex;
    maxSum=arrSum-minIndex;
    console.log(minSum + ' ' + maxSum)
}
