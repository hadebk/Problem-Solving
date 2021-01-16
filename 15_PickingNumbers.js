// link to the problem description: https://www.hackerrank.com/challenges/picking-numbers/problem

// solution:

// a[]:number
function pickingNumbers(a) {
  // sort array
    a.sort(function(a, b) {
        return a - b;
    });
    let subArray = [a[0]],
        maxLength = 1,
        isAcceptable = false;
    // start logic
    for(let i=1 ; i<a.length ; i++){
        for(let j=0 ; j<subArray.length ; j++){
            if(Math.abs(a[i] - subArray[j]) <= 1){
                isAcceptable = true
            }else{
              break;
            }
        }
        if(isAcceptable){
            subArray.push(a[i])
            if(maxLength < subArray.length){
                maxLength=subArray.length
            }
          isAcceptable=false
        }else{
            subArray=[a[i]]
          isAcceptable=false
        }
    }
    return maxLength
}
