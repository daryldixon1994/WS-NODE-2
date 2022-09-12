// read files synchronously
const fs = require("fs");
const path = require("path");
//readFile synchronously
const firstPath = path.resolve("content", "first.txt");
const secondPath = path.resolve("content", "second.txt");
const thirdPath = path.resolve("content", "third.txt");

const firstText = fs.readFileSync(firstPath, "utf-8");
const secondText = fs.readFileSync(secondPath, "utf-8");
const thirdText = fs.writeFileSync(thirdPath, "hello world", { flag: "r+" });
console.log(firstText);
console.log(secondText);
// create new file synchronously
