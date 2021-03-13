
exports.min = function min (array) {
  if (array==null || array.length==0){
  return 0;
  }
  else {
    let mini = array[0];
    for (let i=1; i<array.length; i++) {
      if(array[i] < mini){
        mini = array[i];
      }
    }
    return mini;
  }
}

exports.max = function max (array) {
  if (array==null || array.length==0){
    return 0;
    }
    else {
      let maxy= array[0];
      for (let i=1; i< array.length; i++){
        if (maxy< array[i]) {
          maxy = array[i];
        }
      }
      return maxy;
    }
   
}

exports.avg = function avg (array) {
  if (array==null || array.length==0){
    return 0;
    }
    else {
      let sum = 0;
      for (let i=0; i<array.length; i++){
        sum += array[i];
      }
      return sum/array.length;
    }
}
