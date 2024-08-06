let currentActiveButton = null;

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const hasil = document.getElementById("submit");
const container1 = document.getElementById("hidden");
const num = document.getElementById("num");
const container2 = document.getElementById("hidden1");

function handleButtonClick(button) {
  if (currentActiveButton) {
    currentActiveButton.classList.add("button");
    currentActiveButton.classList.remove("active");
  }

  button.classList.add("active");
  button.classList.remove("button");

  currentActiveButton = button;
  num.textContent = `You selected ${currentActiveButton.id} out of 5`;
}

function submit() {
  if (currentActiveButton) {
    container1.classList.add("hidden");
    container2.classList.remove("hidden1");
  }
}

one.addEventListener("click", () => handleButtonClick(one));
two.addEventListener("click", () => handleButtonClick(two));
three.addEventListener("click", () => handleButtonClick(three));
four.addEventListener("click", () => handleButtonClick(four));
five.addEventListener("click", () => handleButtonClick(five));

hasil.addEventListener("click", submit);
