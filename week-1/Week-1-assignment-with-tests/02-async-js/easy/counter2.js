"use strict";

// function displayCounter() {
//   let startTime = Date.now();
//   let counter = 0;
//   console.log(counter);
//   while (true) {
//     let currentTime = Date.now();
//     if (currentTime === startTime + 1000) {
//       counter++;
//       startTime = currentTime;
//       console.log(counter);
//     }
//   }
// }

function displayCounter(counter = 0) {
  console.log(counter);
  setTimeout(() => {
    counter++;
    displayCounter(counter);
  }, 1000);
}

displayCounter();
