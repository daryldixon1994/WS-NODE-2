//Modules : uses CommonJS, every file is module by default

let { userOne, userTwo, userThree } = require("./4-names");
let sayHi = require("./5-utils");
// console.log(sayHi(userOne));

console.log(sayHi(userOne));
