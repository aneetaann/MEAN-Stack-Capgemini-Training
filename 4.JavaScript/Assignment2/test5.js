function isEven(val){
    return (val%2 == 0);
  }
  function process(arr,f1){
    /*while(arr.length>0){
      if(func(arr.slice(0,1))){
        return arr[0];
      }
      arr.shift();
    }*/
    return f1(arr.slice(0,1))?arr[0]:process(arr.shift(),f1);
  }
  const find = (arr,f1)=>process(arr,f1);
  console.log(find([1, 3, 5, 4, 2], isEven));