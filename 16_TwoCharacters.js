// Link to the problem: https://www.hackerrank.com/challenges/two-characters/problem

// Algorithm:
// 1- extract chars from given string (without repetation)
// 2- test all choices for characters to leave:
//    take 2 chars, and delete all other chars, and check if the string after this mutation is valid or not
// 3- if this sub string not has alternating letters and it's length greater than 'max' so update 'max' to it's lsngth.
// 4- after loop is done, return 'max'.


// Solution:

function alternate(s) {
  let chars = [...new Set(s)];
  let max = 0;
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      let reg = new RegExp(`[${chars[i]}|${chars[j]}]`, "gi");
      let sub = s.match(reg);
      console.log("sub", sub);
      let isValid = false;
      for (let x = 0; x < sub.length; x++) {
        if (sub[x] !== sub[x + 1]) {
          isValid = true;
        } else {
          console.log("not valid");
          isValid = false;
          break;
        }
      }
      if (isValid) {
        console.log("valid", max);
        if (max < sub.length) {
          max = sub.length;
          console.log(max);
        }
      }
    }
  }
  return max;
}

console.log(alternate('beabeefeab')) // 5
