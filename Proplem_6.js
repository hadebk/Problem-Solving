/*
[TheProblem]

* Implement a simple calculator that performs the following operations on binary numbers: 
  addition, subtraction, multiplication, and division. 
* Note that division operation must be integer division only; for example, 1001/100=10, 1110/101=10 and 101/1=101.
* The result should be in Binary form.
*/

// The Solution

const res = document.getElementById('res');

function clickZero(){
    res.innerHTML += '0' 
}

function clickOne(){
    res.innerHTML += '1' 
}

function clickClr(){
    res.innerHTML = '' 
}

function clickSum(){
    res.innerHTML += '+' 
}

function clickSub(){
    res.innerHTML += '-' 
}

function clickMul(){
    res.innerHTML += '*' 
}

function clickDiv(){
    res.innerHTML += '/' 
}

function binTOdec(bin){
    return parseInt(bin,2).toString(10);
}

function decTObin(dec){
    return (dec).toString(2)
}

function clickEql(){
    let decResult='';
    let currentString = res.innerHTML;
    let splitArr = currentString.split(/([\+|\-|\*|\/])/g);
    
    for(let i=0 ; i<splitArr.length ; i+=2){
      let decNum=binTOdec(splitArr[i]);
      decResult += decNum
      if(splitArr[i+1]){
        // that mean i'm not in last index
        decResult += splitArr[i+1];    
      }
    }
    decResult = Math.floor(eval(decResult))
    res.innerHTML = decTObin(decResult)
}


// CSS
/*
  body {
  width: 50%;
}

#res {
  background-color: lightgray;
  border: solid;
  height: 48px;
  font-size: 20px;
}

#btns button {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin:0;
  float: left;
}

#btn0, #btn1 {
  background-color: lightgreen;
  color: brown;
}

#btnClr, #btnEql {
  background-color: darkgreen;
  color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv {
  background-color: black;
  color: red;
}
*/

// HTML 
/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
    </head>
    <body>
      <div id="container">
        <div id="res"></div>
        <div id="btns">
          <button id="btn0" onclick="clickZero()">0</button>
          <button id="btn1" onclick="clickOne()">1</button>
          <button id="btnClr" onclick="clickClr()">C</button>
          <button id="btnEql" onclick="clickEql()">=</button>
          <button id="btnSum" onclick="clickSum()">+</button>
          <button id="btnSub" onclick="clickSub()">-</button>
          <button id="btnMul" onclick="clickMul()">*</button>
          <button id="btnDiv" onclick="clickDiv()">/</button>
        </div>        
      </div> 
    </body>
</html>

*/
