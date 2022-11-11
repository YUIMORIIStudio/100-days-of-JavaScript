const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    //console.log("Add");
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    //console.log("Subtract");
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    //console.log("Reset");
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "pink";
  } else if (count.innerHtml < 0) {
    count.style.color = "black";
  } else {
    count.style.color = "grey";
  }
}

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });
// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
