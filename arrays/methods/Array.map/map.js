// const fruits = ["apple", "banana", "orange"];

// // Example 1
// const juices = fruits.map((fruit, index) => {
//   return (fruit + " juice in cup " + index)
// })

// // console.log(juices);

// // Example 2

// const arr = [5, 1, 3, 2, 6];

// function double(x) {
//   return x * 2;
// }

// const output = arr.map(double);
// console.log(output);

// sum or max

// const output = arr.reduce((acc, cur) => {
//   acc = acc < cur ? cur : acc;
//   return acc;
// }, 0);
// console.log(output);

// const users = [
//   {
//     firstName: "akshay",
//     lastName: "saini",
//     age: 26,
//   },
//   {
//     firstName: "himanshu",
//     lastName: "gautam",
//     age: 75,
//   },
//   {
//     firstName: "paras",
//     lastName: "kanwar",
//     age: 50,
//   },
//   {
//     firstName: "chandan",
//     lastName: "kumar",
//     age: 26,
//   },
// ];

// const output = users.reduce((age, cur) => {
//   const usersAge = cur.age;
//   if (!age[usersAge]) {
//     age[usersAge] = 1;
//   } else {
//     age[usersAge] += 1;
//   }

//   return age;
// }, {});
// console.log(output);

// promises

// learning promises

// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart); // orderId

// proceedToPayment(orderId);

// function () {
//   proceedToPayment(orderId)
// }

// createOrder(cart, function () {
//   // issue inversion of control
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart); // promis will return empty object or data with object {date: orderDetails}

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

//callback hell
// createOrder(cart, function (orderId) {
//   // issue inversion of control
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBallance();
//     });
//   });
// });

// const GITHUB_API = " https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

//promise chainning
// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (info) {
//     return showOrderSummary(OrderoId);
//   })
//   .then(function (info) {
//     return updateWalletballence(info);
//   });

// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((info) => showOrderSummary(OrderoId))
//   .then((info) => updateWalletballence(info));

// const map = {
//   a: {
//     b: "test",
//     c: [],
//     d: {
//       e: "test",
//       f: {
//         target1: "found me",
//       },
//     },
//   },
//   b1: [
//     {
//       c1: {
//         target2: "found me again",
//       },
//       d1: "test",
//     },
//   ],
// };
// (map) => object;
// (target2) => key;

// function findPath(someObject, key) {
//   if (typeof someObject != "object") {
//     return "";
//   } else {
//     let keys = Object.keys(someObject);
//     for (let obKey of keys) {
//       if (obKey == key) {
//         return `${key}`;
//       }
//       if (typeof someObject == "object") {
//         const val = findPath(someObject[obKey], key);
//         if (val && val != "") {
//           return `${obKey}.` + val;
//         }
//       }
//     }
//   }
// }

//  creating a promise , chaining & Error Handling

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
// console.log(promise);
promise
  .then(function (orderId) {
    // proceedToPayment(orderId);
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => proceedToPayment(orderId))
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((msg) => console.log(msg.message))
  .then(function () {
    console.log("no matter definately callled");
  });
///  Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // OrderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "123456";

    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  ///

  return new Promise(function (resolve, reject) {
    resolve("payment succesfull");
  });
}

function validateCart(cart) {
  return false;
}
