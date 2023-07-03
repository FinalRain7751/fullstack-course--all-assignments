"use strict";

function displayCounter() {
  let counter = 0;
  console.log(counter);
  setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
}

displayCounter();
