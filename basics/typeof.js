function isSameType(value1, value2) {
	if(typeof value1 == typeof value2) return true
	return false
}
let value1 =1
let value2 =2n
console.log(isSameType(value1, value2));