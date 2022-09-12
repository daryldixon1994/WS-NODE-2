const fs = require("fs");
const path = require("path");

//read file synchronously
const firstPath = path.resolve("content", "first.txt");
const secondPath = path.resolve("content", "second.txt");
const thirdPath = path.resolve("content", "third.txt");

fs.readFile(firstPath, "utf-8", (err, first) => {
    if (err) throw err;

    fs.readFile(secondPath, "utf-8", (err, second) => {
        if (err) throw err;
        fs.writeFile(
            thirdPath,
            `${first} ${second}`,
            { flag: "a+" },
            (err, data) => {
                if (err) throw err;
            }
        );
    });
});
// read files asynchronously > callback function is called when we are done
