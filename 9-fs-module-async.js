// read files asynchronously > callback function is called when we are done
const fs = require("fs");

console.log("taskt starts");
// create new file asynchronously
fs.readFile("./content/file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let firstText = data;
    fs.readFile("./content/file.txt", "utf-8", (err, data) => {
        if (err) throw err;
        let secondText = data;
        fs.writeFile(
            "./content/third.txt",
            `${firstText}, ${secondText}`,
            {
                flag: "a",
            },
            (err) => {
                if (err) throw err;
            }
        );
    });
});
console.log("next task");
// apend text => flag object
