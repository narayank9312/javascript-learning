// method 1 using bind
// let multiply = function( x,y){
//     console.log(x*y)
// }

// let multiplyByTwo = function( x,y){
//     let x=2;
//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this,2) // 2 refer to x  by preseeting arguments 
// multiplyByTwo(5) // 5 refers to y  


// let multiplyByTwo = multiply.bind(this,)
// multiplyByTwo(2,5)

// let multiplyByTwo = multiply.bind(this,2,5)
// multiplyByTwo()

// let multiplyByThree = multiply.bind(this,3)
// multiplyByThree(5)

// this is what curring is we can use multiply method to create multiplyByTwo and multiplyByThree

// method 2 using closure

let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplyTwo = multiply(2)
multiplyTwo(3)

