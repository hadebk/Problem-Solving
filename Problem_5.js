/*
[The Problem]
We want to create nine buttons enclosed in a div, 
laid out so they form a  grid.
Each button has a distinct label from  to , 
and the labels on the outer buttons must rotate 
in the clockwise direction each time we click the middle button.
*/

// Solution

var idsArr = [1,2,3,4,5,6,7,8,9]

const box = document.getElementById('box')

for(let i=1 ; i<=idsArr.length ; i++){
  let btn=document.createElement('button');
  btn.id = 'btn'+i;
  btn.innerHTML = i;
  box.appendChild(btn);
}

const btn5 = document.getElementById('btn5');

var outerNums = [1,2,3,6,9,8,7,4];
const ids = [1,2,3,6,9,8,7,4];

btn5.addEventListener("click", function() {
  outerNums.unshift(outerNums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=outerNums[i];
    }
});

// Apply this style
/*
#box{
    width: 75%;
    margin: 0 auto
}

#box > button{
    width: 30%;
    height: 48px;
    font-size: 24px;
    margin: 1px;
}
*/

// Use is HTML
/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
    </head>
    
    <body>
        <div id="box"></div>
    </body>
</html>
*/
