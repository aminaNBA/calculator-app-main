let key = document.querySelectorAll(".keyboard-button");
let screen = document.getElementsByClassName("screen");
let themes = document.querySelectorAll("input");
let style = document.documentElement.style;

let calcul = "";
let operator = false;
let themeNumber = 0;

key.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id == "reset") {
      screen[0].textContent = "0";
      calcul = 0;
      operator = false;
    } else if (element.id == "equal") {
      if (screen[0].textContent != "0" && operator == false) {
        result = eval(calcul);
        screen[0].textContent = result.toString().slice(0, 14);
        calcul = screen[0].textContent;
      }
    } else if (element.id == "delete") {
      if (operator == true) {
        screen[0].textContent = screen[0].textContent.slice(
          0,
          screen[0].textContent.length - 1
        );
        calcul = calcul.slice(0, calcul.length - 1);
        operator = false;
      } else if (screen[0].textContent != 0) {
        lastIndex = findLastIndex() + 1;
        //equivalent to reset
        if (lastIndex == 0) {
          screen[0].textContent = "0";
          calcul = 0;
          operator = false;
        } else {
          screen[0].textContent = screen[0].textContent.slice(0, lastIndex);
          calcul = calcul.slice(0, lastIndex);
          operator = true;
        }
      }
    } else if (screen[0].textContent == "0") {
      screen[0].textContent = element.textContent;
      calcul = element.textContent;
    } else {
      if (
        element.textContent == "x" ||
        element.textContent == "-" ||
        element.textContent == "+" ||
        element.textContent == "/"
      ) {
        //if there is already an operator and user tip on another operator, delete and replace operator.
        if (operator == true) {
          screen[0].textContent = screen[0].textContent.slice(
            0,
            screen[0].textContent.length - 1
          );
          calcul = calcul.slice(0, calcul.length - 1);
        }
        if (screen[0].textContent.length < 14) {
          operator = true;
        }
      } else {
        operator = false;
      }
      //screen can accepte only 14 caracters
      if (screen[0].textContent.length < 14) {
        if (element.textContent == "x") {
          calcul += "*";
        } else {
          calcul += element.textContent;
        }
        screen[0].textContent += element.textContent;
      }
    }
  });
});

findLastIndex = () => {
  lastIndex = screen[0].textContent.lastIndexOf("+");
  if (lastIndex < screen[0].textContent.lastIndexOf("-")) {
    lastIndex = screen[0].textContent.lastIndexOf("-");
  } else if (lastIndex < screen[0].textContent.lastIndexOf("x")) {
    lastIndex = screen[0].textContent.lastIndexOf("x");
  } else if (lastIndex < screen[0].textContent.lastIndexOf("/")) {
    lastIndex = screen[0].textContent.lastIndexOf("/");
  }
  return lastIndex;
};

themes.forEach((input) =>
  input.addEventListener("click", () => {
    switch (input.value) {
      case "one":
        themeNumber = 0;
        break;
      case "two":
        themeNumber = 1;
        break;
      case "three":
        themeNumber = 2;
        break;
      default:
        themeNumber = 0;
    }
    fetch("./public/script/data.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        for (var key in response.themes[themeNumber]) {
          style.setProperty(key, response.themes[themeNumber][key]);
        }
      })
      .catch((error) => alert("Erreur : " + error));
  })
);
