/*Make a function called “find” that takes an array and a test function, and returns the first element of
the array that “passes” (returns non-false for) the test. Don’t use map, filter, or reduce.
function isEven(num) { return(num%2 == 0); }
isEven(3) --> false
isEven(4) --> true
find([1, 3, 5, 4, 2], isEven); --> 4
*/

const find = (arr, f) => () => {
    for (i = 0; i < arr.length; i++) {
      if (f(arr[i])) {
        return arr[i];
      }
      continue;
    }
  };
  
  // const find = function(arr,f) {
  //     return function() {
  //         for(i=0; i<arr.length; i++){
  //             if(f(arr[i])){
  //                 return arr[i]
  //             }
  //             continue
  //         }
  //     }
  // }
  
  function isEven(num) {
    return num % 2 == 0;
  }
  const getNo = find([1, 3, 5, 4, 2], isEven);
  
  console.log(getNo());

  /* another code:
find = (arr, test) => arr[arr.findIndex(test)]
function isEven(num) { return(num%2 == 0); }
// Output
console.log(find([1, 3, 5, 4, 2], isEven));*/