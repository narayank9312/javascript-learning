// polyfill for bind method

let name = {
  firstName: "Navneet",
  lastname: "jha",
};

let printName = function (hometown,state) {
  console.log(this.firstName + " " + this.lastname + "," + hometown+ "," + state);
};

let printMyName = printName.bind(name);
printMyName();

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    // obj.call(args[0]);
    obj.apply(args[0], [...params,...args2]);
  };
};

let printMyName2 = printName.mybind(name, "dbg");
printMyName2("bihar");
