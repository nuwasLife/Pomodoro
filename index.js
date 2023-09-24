const btnStart = document.querySelector(".btn1");
const btnStop = document.querySelector(".btn2");
const btnReset = document.querySelector(".btn3");
const h1 = document.querySelector("h1");

let myInterval;
let count = 1500;
btnStart.addEventListener("click", function () {
  if (count <= 0) {
    clearInterval(myInterval);
    return;
  }
  myInterval = setInterval(displayTime, 1000);
});

function displayTime() {
  if (count === 0) {
    clearInterval(myInterval);
    count = 0;
  }
  h1.textContent = `${String(Math.floor(count / 60)).padStart(2, "0")}:${String(
    count % 60
  ).padStart(2, "0")}`;
  console.log(count);
  count--;
}

btnStop.addEventListener("click", function () {
  clearInterval(myInterval);
});

btnReset.addEventListener("click", function () {
  count = 1500;
  clearInterval(myInterval);
  h1.textContent = `${Math.floor(count / 60)}:${String(count % 60).padStart(
    2,
    "0"
  )}`;
});
// function stopTime() {
//   h;
// }

// displayTime();
