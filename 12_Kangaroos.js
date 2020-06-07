// The Problem
/*
You are choreographing a circus show with various animals. For one act, 
you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
If it is possible, return YES, otherwise return NO.

For example, kangaroo 1 starts at x1=2 with a jump distance v1=1 and kangaroo 2 starts at x2=2 with a jump distance of v2=2.
After one jump, they are both at x=3, (x1+v1=2+1, x2+v2=1+2), so our answer is YES.
*/

// The Solution

function kangaroo(x1, v1, x2, v2) {
  let result;
  if(x1>=0 && x2>x1 && v1>=1 && v2>=1){ // test inputs values
    if(x1+v1 == x2+v2){
      return 'YES'
    }else{
      // get new values of x1, x2 after first iteration
      x1+=v1;
      x2+=v2;
      let diff = x2-x1; // first difference
      for(let i=0 ; i<20 ; i++){
        if(x1==x2){
          // meet at same point, end loop and return result
          return result
        }
        // increase x1, x2 after each iteration
        x1+=v1;
        x2+=v2;
        // check difference after each iteration
        if( diff <= Math.abs(x2-x1) ){
          /*  
            if the difference increase after each iteration, 
            that's mean the Kangaros will not meet
          */
          result='NO'
          diff =  Math.abs(x2-x1)
        }else{
          /*  
            if the difference decrease after each iteration, 
            that's mean the Kangaros will meet
          */
          result='YES'
          diff = Math.abs(x2-x1)
        }
      }
      return result;
    }
  }else{
    return 'Please, provide correct inputs..'
  }
}
