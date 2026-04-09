function checkPrime(n){
  if(n<=1) return false
  if(n==2) return true
  for(let i=2;i<n;i++){
    if(n%i==0) return false
    else return true
  }
}
let n=5
if(checkPrime(n)) console.log(`${n} is a prime number`)
else console.log(`${n} is not a prime number`)