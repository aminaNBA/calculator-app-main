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

let themeProperties = [
  "--mainBackground",
  "--screenBackground",
  "--keypadToggleBackground",
  "--delResetBackground",
  "--delResetShadow",
  "--equalToggleBackground",
  "--equalShadow",
  "--numbersBackground",
  "--numbersShadow",
  "--colorTextOne",
  "--colorTextTwo",
  "--colorTextThree",
  "--position"
];
let themevalues = [
  [
    "hsl(222, 26%, 31%)",
    "hsl(224, 36%, 15%)",
    "hsl(223, 31%, 20%)",
    "hsl(225, 21%, 49%)",
    "3px solid hsl(224, 28%, 35%)",
    "hsl(6, 63%, 50%)",
    "3px solid hsl(6, 70%, 34%)",
    "hsl(30, 25%, 89%)",
    "3px solid hsl(28, 16%, 65%)",
    "hsl(221, 14%, 31%)",
    "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 100%)",
    "2px"
  ],
  [
    "hsl(0, 0%, 90%)",
    "hsl(0, 0%, 93%)",
    "hsl(0, 5%, 81%)",
    "hsl(185, 42%, 37%)",
    "3px solid hsl(185, 58%, 25%)",
    "hsl(25, 98%, 40%)",
    "3px solid hsl(25, 99%, 27%)",
    "hsl(45, 7%, 89%)",
    "3px solid hsl(35, 11%, 61%)",
    "hsl(60, 10%, 19%)",
    "hsl(0, 0, 100%)",
    "hsl(0, 0%, 100%)",
    "26px"
  ],
  [
    "hsl(268, 75%, 9%)",
    "hsl(268, 71%, 12%)",
    "hsl(268, 71%, 12%)",
    "hsl(281, 89%, 26%)",
    "3px solid hsl(285, 91%, 52%)",
    "hsl(176, 100%, 44%)",
    "3px solid hsl(177, 92%, 70%)",
    "hsl(268, 47%, 21%)",
    "3px solid hsl(290, 70%, 36%)",
    "hsl(52, 100%, 62%)",
    "hsl(52, 100%, 62%)",
    "hsl(198, 20%, 13%)",
    "50px"
  ]
];

themes.forEach((input) =>
  input.addEventListener("click", () => {
    //first theme
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
    for (let i = 0; i < themeProperties.length; i++) {
      style.setProperty(themeProperties[i], themevalues[themeNumber][i]);
    }
  })
);
