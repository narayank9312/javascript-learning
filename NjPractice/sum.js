// let sum = function(a){
//     return function(b){
//         return b ? sum(a+b) : a;
//         // if(b){
//         //     return sum(a+b);
//         // }
//         // return a
//     }
// }

let sum = (a) => {
  (b) => {
    b ? sum(a + b) : a;
  };
};

console.log(sum(10)(20)(30)(40));
