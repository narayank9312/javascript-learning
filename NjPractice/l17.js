// function statement   // function Declaration 

function a() {
    console.log("navneet in a")
}
a()

// function expression 

var b = function (params1 , params2) { // params1 , params2 -> parameter of function 
    console.log("navneet in b")

}
b(1,2) // 1,2 -> argument

// Anonymous function  :- used where function used as values 
// function () {

// }

// named function expresion

var c = function xyz() {
    console.log("navneet in c")
console.log(xyz)
}


// first class citizen 
// first class function  
var f = function(param1) {
    // console.log(param1)
    return function() {}
}

// f(function() {})

// function xyz() {}
// f(xyz)

console.log(f())
