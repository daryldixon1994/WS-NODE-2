// read files synchronously
const fs = require("fs");
const path = require("path");
// create new file synchronously
async function files() {
    console.log("task starts");
    try {
        const textOne = await fs.readFileSync("./content/file.txt", "utf8");
        const textTwo = await fs.readFileSync("./content/second.txt", "utf8");

        await fs.writeFileSync(
            "./content/third.txt",
            `${textOne} , ${textTwo}`,
            {
                flag: "a",
            }
        );
        const textThree = await fs.readFileSync("./content/third.txt", "utf-8");
        await fs.writeFileSync("./content/third.txt", "final text", {
            flag: "a",
        });
        console.log("tasks finished");
    } catch (error) {
        if (error) throw error;
    }
}
// apend text => flag object
files();
console.log("next task");
