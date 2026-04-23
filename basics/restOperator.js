/*const arr=[1,2,3,4,5]

const[a,b,...rest]=arr
console.log(a,b,rest)

const[a,,,b,...rest]=arr
console.log(a,b,rest)
*/

obj={name:'raju',age:20,role:'sde',places:{north:'delhi',south:'kerala',mountains:'himalaya'}}
// console.log(obj.name)
// const{name,age}=obj
const {name,age,places:{north,south}}=obj
console.log(name,north)
