/*
Given an array of integers, return a new array such that each element at index i 
of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// solutions:

/* --------------- 1) with division ---------------------*/

function multiply_arr(arr){
    let new_arr=[],
        multiply=1,
        zero_count=0;
    // count the number of 0, and get the result of multiply all items in arr
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]==0){
            zero_count++
        }else{
            multiply *= arr[i]
        }
    }
    // to produce the new arr
    for(let i=0 ; i<arr.length ; i++){
        if(zero_count > 1){
            // if there is 1'0 => all elements in new_arr will be 0 except the index of 0
            new_arr[i]=0
        }else if(zero_count == 1){
            // if there are 2'0 => all elements in new_arr will be 0
            if(arr[i] == 0){
                new_arr[i] = multiply
            }else{
                new_arr[i] = 0
            }
        }else if(zero_count == 0){
            // if there is no 0 => new_arr[i] in new_arr will = multiply / value of this index
            new_arr[i] = multiply / arr[i]
        }
    }
    return new_arr;
}

console.log(multiply_arr([1,2,0,4,5]))
// [0, 0, 40, 0, 0]

console.log(multiply_arr([1,2,0,4,0]))
// [0, 0, 0, 0, 0]

console.log(multiply_arr([1,2,3,4,5]))
// [120, 60, 40, 30, 24]


/* ---------------- 2) without division --------------------*/
function multiply_arr_no_div(arr) {
    let new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        let multiply = 1;
        for (var j = 0; j < arr.length; j++) {
            // multiply all items except items it self arr[i]
            if (i !== j) {
                multiply *= arr[j]
            }
        }
        new_arr[i] = multiply
    }
    return new_arr;
}

console.log(multiply_arr_no_div([1, 2, 3, 4, 5]))
// [120, 60, 40, 30, 24]

console.log(multiply_arr_no_div([1,2,0,4,5]))
// [0, 0, 40, 0, 0]

console.log(multiply_arr_no_div([1,2,0,4,0]))
// [0, 0, 0, 0, 0]
