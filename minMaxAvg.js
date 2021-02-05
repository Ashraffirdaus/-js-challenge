function minMaxAvg(arrNum){
  
  //Initialize with 0
  var sum = 0;
  var avg = 0;
  var max = arrNum[0];
  var min = arrNum[0];
  
  // calculate for average
  for (var i = 0; i< arrNum.length; i++){
    sum+=arrNum[i];
  }
  avg = sum/arrNum.length
  
  // calculate max
  for (var i=0; i<arrNum.length; i++){
    if (arrNum[i]> max){
      max = arrNum[i]; 
    }
  }
  // calculate min
  for(var i= 0; i< arrNum.length; i++){
    if (arrNum[i]<min){
      max =arrNum[i];
    }
  }
  
  return [min,max,avg]
  
  
}

console.log(minMaxAvg([3,1,5,9,2,7,4]))
console.log(minMaxAvg([2,5,1,8,4,3]))
console.log(minMaxAvg([4,8,5,9]))
