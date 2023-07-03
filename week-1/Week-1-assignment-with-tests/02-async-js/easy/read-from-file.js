"use strict";

const fs = require("fs");

const readFromFile = (filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    console.log(data);
  });
};

readFromFile("./lorem.txt");
console.log("Hello from the top-level code");
for (let i = 0; i < 10000000000; i++) {}
