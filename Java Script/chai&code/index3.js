const botton = document.getElementsByTagName("button")[0];

const onclick = () => {
  const Wvalue = parseInt(document.querySelector(".weight").value);
  const Hvalue = parseInt(document.querySelector(".height").value);
  const bmi = Math.round((Wvalue / (Hvalue * Hvalue)) * 10000);
  if (bmi <= 19) {
    alert(`You are under weight. your Bmi is ${bmi}`);
  } else if (bmi > 19 && bmi <= 25) {
    alert(`you are healthy . your Bmi is ${bmi}`);
  } else {
    alert(`you are overweight . your Bmi is ${bmi}`);
  }
};

botton.addEventListener("click", () => {
  onclick();
});
