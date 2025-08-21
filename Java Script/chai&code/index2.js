const change_color = (id) => {
  const span = document.getElementById(id);
  span.style.backgroundColor = `#${Math.round(Math.random() * 1000000)}`;
};

arr = ["one", "two", "three", "four", "five"];

arr.forEach(i => {
    document
  .getElementById(i)
  .addEventListener("click", () => change_color(i));
});

// document
//   .getElementById("one")
//   .addEventListener("click", () => change_color("one"));
// document
//   .getElementById("two")
//   .addEventListener("click", () => change_color("two"));
// document
//   .getElementById("three")
//   .addEventListener("click", () => change_color("three"));
// document
//   .getElementById("four")
//   .addEventListener("click", () => change_color("four"));
// document
//   .getElementById("five")
//   .addEventListener("click", () => change_color("five"));
