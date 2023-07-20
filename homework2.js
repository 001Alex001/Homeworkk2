//  1.  Given a string. Check whether the string is palindrome or not.

function checkString(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false
        }
    }
    return true
}


//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------


//  2.  Given a string and symbols. x

function replaceString(str, a, b) {
    for (let char of str) {
        if (char === a) {
            str += b
        } else {
            str += char
        }
    }
    return str
}
replaceString('The results are not recorded yet', 't', 'w')

// STEX 3 ARGUMENTOV EM GREL ,, BAYC XNDIRY ENA VOR VERADARDZNUMA SKZBNAKAN STRINGY + STACVAC STRINGY))

//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------


//  3.  Print the following number pattern (write a function)

function pyramid(height){
    for(let i = 1; i < height; i++){
      let row = '';
      for(let j = 1; j <= i; j++){
        row += j
      }
      console.log(row)
    }
    for(let i = height ; i > 0 ; i--){
      let row = '';
      for(let j = 1 ; j <= i; j++){
        row += j
      }
      console.log(row)
    }
  }
pyramid(5)


//-------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------


//   4.  Print following pattern (write a function)

/*
   *
     *
       */


  function pattern(x) {
    for (let i = 1; i <= x; i++) {
      let row = '';
      for (let j = 1; j <= x; j++) {
        if (j === i ) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
  }
  
  pattern(5);


//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------


//  5.  Print following pattern (write a function)

/*    *
  * *
   *
  * *
*     */

function pattern(x) {
    for (let i = 1; i <= x; i++) {
      let row = '';
      for (let j = 1; j <= x; j++) {
        if (j === i || j === x - i + 1 ) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      console.log(row);
    }
  }
  
pattern(5);


//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------


//  6.  Print following pattern (write a function)

/* * * * *
 * * * * *
 * * * * */

function pattern(height, width) {
    for (let i = 0; i < height; i++) {
      let row = '';
      for (let j = 0; j < width; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  pattern(3, 5);