// import the path module
const path = require("path");
//Provides the platform-specific path segment separator:
// console.log(path.sep);
// join paths
let myPath = path.join("/content", "file.txt");
console.log(myPath);

// basename path
// console.log(path.extname(myPath));

//resolve : creates an absolute path from the root
let secondPath = path.resolve("content", "file.txt");
console.log(secondPath);
// application will run in a different environement, so we need to use the root path of any environment
