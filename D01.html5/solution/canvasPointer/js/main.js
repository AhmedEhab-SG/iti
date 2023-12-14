const box = document.createElement("div");

document.addEventListener("click", function (e) {
  const x = e.pageX;
  const y = e.pageY;
  box.classList.add("box");
  box.style.left = `${x - 25}px`;
  box.style.top = `${y - 25}px`;
  document.body.appendChild(box);
});
