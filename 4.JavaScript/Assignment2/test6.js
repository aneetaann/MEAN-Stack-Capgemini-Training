map = (fn, [head, ...tail]) =>{
    if (head === undefined){
       
    }
    console.log([fn(head), ...map(fn,tail )]);
};
