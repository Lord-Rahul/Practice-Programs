const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children[3]);
const day = parent.children[3];
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

day.style.color = "red";

const day1 = document.querySelector(".day");
console.log(day1)
console.log(day1.parentElement)

const div = document.createElement("div");

div.className = "div";
div.setAttribute("title", "teri maa ki chut ");
div.style.color = "red";

// div.innerText = "teri maa ki chut ";
const text = document.createTextNode("teri maa ki chut ");
div.appendChild(text);

parent.appendChild(div)

const add_language = (lang) => {
  const li = document.createElement("li");
  li.innerHTML = lang;
  document.querySelector(".language").appendChild(li);
};

const opt_language = (lang) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));
  document.querySelector(".language").appendChild(li);
};

opt_language("python");
opt_language("ruby");

const second = document.querySelector("li:nth-child(2)");

const newli = document.createElement("li");
newli.textContent = "mojo";
second.replaceWith(newli);

// edit
const first = document.querySelector("li:nth-child(1)");
first.outerHTML = "<li>typescript</li>";

//remove
const last = document.querySelector("li:last-child");
last.remove();
