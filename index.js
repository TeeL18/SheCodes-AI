let challengeOne = document.querySelector("#one");
challengeOne.setAttribute("disabled", "disabled");

function handleClick() {
  let challengeTwo = document.querySelector("#two");
  challengeTwo.style.backgroundColor = "green";
}

let buttonElement = document.querySelector("#two");
buttonElement.addEventListener("click", handleClick);

function pressClick() {
  let challengeThree = document.querySelector("#three");
  challengeThree.classList.add("danger");
}

let buttonThreeElement = document.querySelector("#three");
buttonThreeElement.addEventListener("click", pressClick);
