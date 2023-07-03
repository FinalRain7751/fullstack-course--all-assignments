"use strict";

const printClock = (format, hours, minutes, secs) => {
  const hrs = (
    (format === 12 && hours >= 12 ? hours - 12 : hours) + ""
  ).padStart(2, "0");
  const min = (minutes + "").padStart(2, "0");
  const seconds = (secs + "").padStart(2, "0");
  console.clear();
  console.log(
    `${hrs}:${min}:${seconds} ${
      format === 12 ? (hours >= 12 ? "PM" : "AM") : ""
    }`
  );
};

const clock = (format = 24) => {
  const dateObj = new Date(Date.now());
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();

  printClock(format, hours, minutes, seconds);
  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    if (hours === 24) hours = 0;

    printClock(format, hours, minutes, seconds);
  }, 1000);
};

// clock();
clock();
