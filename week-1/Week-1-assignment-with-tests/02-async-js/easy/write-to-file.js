"use strict";

const fs = require("fs");

const writeToFile = (filePath, data) => {
  fs.writeFile(filePath, data, "utf-8", (err) => {
    console.log(data);
  });
};

writeToFile("./lorem.txt", "Hello from the async task.");
console.log("Hello from the top-level code");
// for (let i = 0; i < 10000000000; i++) {}
