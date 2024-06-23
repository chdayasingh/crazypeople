"use strict";

// Clock

const clock = document.getElementById("digital-clock");

setInterval(() => {
  const date = new Date();
  clock.innerText = date.toLocaleString();
}, 1000);
