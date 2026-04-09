let rev=0, n=1234
  while(n>0){
    let d = n%10
    rev=rev*10+d
    n=Math.floor(n/10)
  }
  console.log(rev)