// const box = document.createElement("div");

// document.addEventListener("click", function (e) {
//   const x = e.pageX;
//   const y = e.pageY;
//   //const box = document.createElement("div"); //canus 2
//   box.classList.add("box");
//   box.style.left = `${x - 25}px`;
//   box.style.top = `${y - 25}px`;
//   document.body.appendChild(box);
// });

/*-------------------------------------------------------*/

// let timerId;

// document.addEventListener("mousedown", function (e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   timerId = setInterval(() => {
//     document.addEventListener("mousemove", function (e) {
//       x = e.clientX;
//       y = e.clientY;
//     });
//     const box = document.createElement("div");
//     box.classList.add("hold");
//     box.style.left = `${x - 25}px`;
//     box.style.top = `${y - 25}px`;
//     document.body.appendChild(box);
//   }, 50);
// });
// document.addEventListener("mouseup", function (e) {
//   clearInterval(timerId);
// });
