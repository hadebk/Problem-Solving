/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/


function has_sum_of_k(arr, k) {
    const sort_arr = arr.sort();
    if (sort_arr[0] > k) return false; // smallest num in arr bigger than k 
    for (let i = 0; i < sort_arr.length; i++) {
        var sub_arr = sort_arr.slice(i + 1); // create new sub_arr from the rest of sort_arr
        if (sub_arr.includes(k - sort_arr[i])) return true;
    }
    return false
}

console.log(has_sum_of_k([9, 2, 6, 9, 5], 10))
// false

has_sum_of_k([5, 2, 6, 9, 5], 10)
// true

