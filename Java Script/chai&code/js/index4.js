function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Example:

let changeColor;

document.getElementById("first").addEventListener("click", () => {
  changeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 1000);
  console.log("button clicked");
});

document.getElementById("second").addEventListener("click", () => {
  clearInterval(changeColor);
  changeColor = null;
  console.log("button clicked");
});
