function sqInRect(lng, wdth){
  
    var array = [];
    
    if (lng === wdth){
      return null;
    }
    
    if(wdth > lng){
      var mid = wdth;
      wdth = lng;
      lng = mid;
    }
    while(lng>0 && wdth>0){
      array.push(wdth);
    
      var m = lng;
      lng = (lng - wdth) >= wdth ? (lng - wdth) : wdth;
      wdth = lng === wdth ? (m - wdth) : wdth;
    }
    return array;
    //your code here
  }