/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    let n=x, rev=0, d=0
    
    while(n>0){
        d=n%10
        rev=rev*10+d
        n=n/10
    }

    if(rev==x) return true
    return false
};

console.log(isPalindrome(111))