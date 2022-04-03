// what is callback function 
setTimeout(function () {
    console.log(timer)
},1000)
function x(y) {
    console.log("x")
    y()

}
x(function y(){
    console.log(y)

})

// javascript is a synchronus and single thread