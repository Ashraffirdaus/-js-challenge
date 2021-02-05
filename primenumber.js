//1) list down all the prime number between 1 until 1000


function isPrime(num){
  //1) kita assume nombor ini prime
  var answer = true;
  //2) Create test to prove our assumption wrong
  //list down all the number between 2 and itself
  for (var i =2; i<num; i++){
    // check if the number is divisible
    if (num % i == 0){
      return false;
    }
  }
  
   //3) Return our answer
   return answer;
     
}

for (var i = 1; i<1000; i++){
  if (isPrime(i)){
    console.log(i);
  }
}
