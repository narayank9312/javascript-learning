// let name = {
//   firstName: "Narayan",
//   lastName: "jha",
// };

// let name1 = {
//   firstName: "Himanshu",
//   lastName: "Gautam",
// };

// // let PrintFullname = () => {
// //   console.log(this.firstName + "------" + this.lastName + "-------");
// // };

// let PrintFullname = function (hometown, state) {
//   console.log(
//     this.firstName + "------" + this.lastName + "-------",
//     hometown + "--------" + "state-----" + state
//   );
// };
// //function  borrowing

// PrintFullname.call(name, "faridabad", "haryana");

// PrintFullname.apply(name, ["faridabad", "haryana"]);

// // bind method

// let bindMethod = PrintFullname.bind(name, "faridabad", "haryana");
// bindMethod();

//IIFE Patter

// (function (name) {
//   console.log(name);
// })("Narayan");

// const y = { x: "hello" };

// y.x = "boy";

// const s = y;

// s.x = "fruits";

// console.log(y.x);

// var compare = function (test1, tes2) {
//   return test1 === test2;
// };
// compare(3, "3");

// const animals = ["x", "y"];

// animals.unshift("z");
// console.log(animals);

// console.log(typeof 42.1);

// const obj = {
//   x: 1,
// };

// const obj2 = {
//   x: 1,
// };
// console.log(obj2.x === obj2.y);

//
// const x = () => {
//   const a = 2;
//   return () => console.log(a);
// };

// const a = 1;

// const y = x();
// y();

//

// function currying

// function add(x) {
//   return (y) => x + y;
// }

// console.log(add(10)(20));

// const a = (b = c = 1);
// console.log(typeof a, b, c);

// function func() {
//   const a = (b = c = 1);
// }
// func();

// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();
let array = [1, 2, 3, 4, 5];
let result = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    result.push([array[i], array[j]]);
  }
}

console.log("result---", result);
function combination(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      result.push([array[i], array[j]]);
    }
  }
  return result;
}
s = "CONTEST IS COMING".split(" ");
max_length = 0;
for (x in s) {
  len = s[x].length;
  max_length = Math.max(len, max_length);
}
res = [];
for (let i = 0; i < max_length; i++) {
  res.push("");
}
for (let j = 0; j < s.length; j++) {
  for (let i = 0; i < max_length; i++) {
    if (s[j].length > i) {
      res[i] += s[j][i];
    } else {
      res[i] += " ";
    }
  }
}

for (let i = 0; i < res.length; i++) {
  res[i] = res[i].trimEnd();
}

import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
const state = {
  employees: [
    {
      id: 1,
      title: "CEO",
      name: "Jane Doe I",
      subordinates: [
        {
          id: 2,
          title: "COO",
          name: "John Doe I",
          subordinates: [
            {
              id: 3,
              title: "Director of Operations",
              name: "John Doe II",
              subordinates: [],
            },
          ],
        },
        {
          id: 4,
          title: "CTO",
          name: "Jane Doe II",
          subordinates: [
            {
              id: 5,
              title: "Software Engineering Manager",
              name: "Jane Doe III",
              subordinates: [
                {
                  id: 6,
                  title: "Team lead",
                  name: "John Doe IV",
                  subordinates: [],
                },
              ],
            },
            {
              id: 7,
              title: "Quality Engineering Manager",
              name: "John Doe III",
              subordinates: [
                {
                  id: 8,
                  title: "Quality Engineer",
                  name: "John Doe V",
                  subordinates: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const EmployeeList = (props) => {
  return (
    <ul>
      {props.employees.map((employee) => {
        return (
          <li>
            {typeof employee == typeof [] ? (
              <EmployeeList employees={employee} />
            ) : (
              <>
                {employee.name} ({employee.title})<br />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const useGetEmployessQueue = () => {
  const [employees, setEmployees] = React.useState(state.employees);

  React.useEffect(() => {
    // Please assume this 'setInterval' side effect is necessary for
    //  the sake of the exercise steps 3 & 4.
    setInterval(() => {
      setEmployees((previousEmployees) => [...previousEmployees]);
    }, 1000);
  }, []);
  return [employees];
};

const Page = () => {
  const [employees] = useGetEmployessQueue();
  return <EmployeeList employees={employees} />;
};

const root = document.getElementById("root");

ReactDOM.render(<Page />, root);
