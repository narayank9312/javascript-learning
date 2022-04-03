function x() {
    // var i = 1;
    // setTimeout(console.log(i),3000)

    // for(var i=0; i<5; i++){
    //    setTimeout(function() {
    //        console.log(x)
    //    },i*1000)
    // }

    // for(let i=0; i<5; i++){
    //     setTimeout(function() {
    //         console.log(x)
    //     },i*1000)
    //  }

    for(var i=0; i<5; i++){
       function close(i){
        setTimeout(function() {
            console.log(x)
        },i*1000)
       }
       close(i);
     }
}
x()