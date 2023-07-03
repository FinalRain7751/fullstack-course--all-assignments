"use strict";

const fs = require("fs");

const cleanData = (data) => {
  const separator = /\s+/g;
  const wordList = data.split(separator);
  const spacedWordList = wordList.map((el, i, arr) => {
    let modEl;
    if (
      i === 0 ||
      (el.length === 1 && el.match(/\W/g) && !["(", "'", '"'].includes(el)) ||
      ["(", "'", '"'].includes(arr[i - 1])
    ) {
      return el;
    }

    modEl = " " + el;
    return modEl;
  });

  //   console.log(words);
  return spacedWordList.join("");
};

const fileCleaner = (filePath) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    const cleanedData = cleanData(data);
    fs.writeFile(filePath, cleanedData, "utf-8", (err) => {
      console.log(cleanedData);
    });
  });
};

fileCleaner("./test.txt");
