const arr=[1,2,3,4,5]

// const[a,b,...rest]=arr
// console.log(a,b,rest)

const[a,,,b,...rest]=arr
console.log(a,b,rest)
