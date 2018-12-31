
var primeList = [];
var nextPrime = 0;

function primeTester(num) {
  if (num < 2) return false;
  if (primeList.indexOf(num) >= 0) return true;

  for(let primeNum of primeList) {
    if (num % primeNum === 0) return false;
    if (primeNum > num)
      break;
  }

  let max = Math.sqrt(num);
  for(let i=nextPrime; i<=max; i+=2){
    if (num%i === 0) return false;
  }

  primeList.push(num);  
  return true;
  
}

console.log(primeTester(31))
