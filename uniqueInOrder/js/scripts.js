var uniqueInOrder=function(iterable){
    var result = [];
    var last = '';
    
    for(var i= 0; i< iterable.length; i++){
      if(iterable[i] !== last){
        last = iterable[i]; 
        result.push(last);
      }
    }
       return result;
     //your code here - remember iterable can be a string or an array
   }