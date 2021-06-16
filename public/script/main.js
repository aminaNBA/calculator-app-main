let key = document.querySelectorAll(".keyboard-button");
let screen = document.getElementsByClassName("screen");
let themes = document.querySelectorAll("input");
//calcul is used as string and initialise at
calcul = 0;
operator = false;
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

modifyTheme = () => {
  console.log(this);
};

themes.forEach((input) =>
  input.addEventListener("click", () => {
    //first theme
    if (input.value == "one") {
      document.documentElement.style.setProperty(
        `--mainBackground`,
        "hsl(222, 26%, 31%)"
      );
      document.documentElement.style.setProperty(
        `--screenBackground`,
        "hsl(224, 36%, 15%)"
      );
      document.documentElement.style.setProperty(
        `--keypadToggleBackground`,
        "hsl(223, 31%, 20%)"
      );
      document.documentElement.style.setProperty(
        `--delResetBackground`,
        "hsl(225, 21%, 49%)"
      );
      document.documentElement.style.setProperty(
        `--delResetShadow`,
        "3px solid hsl(224, 28%, 35%)"
      );
      document.documentElement.style.setProperty(
        `--equalToggleBackground`,
        "hsl(6, 63%, 50%)"
      );
      document.documentElement.style.setProperty(
        `--equalShadow`,
        "3px solid hsl(6, 70%, 34%)"
      );
      document.documentElement.style.setProperty(
        `--numbersBackground`,
        "hsl(30, 25%, 89%)"
      );
      document.documentElement.style.setProperty(
        `--numbersShadow`,
        "3px solid hsl(28, 16%, 65%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextOne`,
        "hsl(221, 14%, 31%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextTwo`,
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextThree`,
        "hsl(0, 0%, 100%)"
      );
    }
    //second theme
    else if (input.value == "two") {
      document.documentElement.style.setProperty(
        `--mainBackground`,
        "hsl(0, 0%, 90%)"
      );
      document.documentElement.style.setProperty(
        `--screenBackground`,
        "hsl(0, 0%, 93%)"
      );
      document.documentElement.style.setProperty(
        `--keypadToggleBackground`,
        "hsl(0, 5%, 81%)"
      );
      document.documentElement.style.setProperty(
        `--delResetBackground`,
        "hsl(185, 42%, 37%)"
      );
      document.documentElement.style.setProperty(
        `--delResetShadow`,
        "3px solid hsl(185, 58%, 25%)"
      );
      document.documentElement.style.setProperty(
        `--equalToggleBackground`,
        "hsl(25, 98%, 40%)"
      );
      document.documentElement.style.setProperty(
        `--equalShadow`,
        "3px solid hsl(25, 99%, 27%)"
      );
      document.documentElement.style.setProperty(
        `--numbersBackground`,
        "hsl(45, 7%, 89%)"
      );
      document.documentElement.style.setProperty(
        `--numbersShadow`,
        "3px solid hsl(35, 11%, 61%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextOne`,
        "hsl(60, 10%, 19%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextTwo`,
        "hsl(0, 0, 100%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextThree`,
        "hsl(0, 0%, 100%)"
      );
    }
    //third theme
    else {
      document.documentElement.style.setProperty(
        `--mainBackground`,
        "hsl(268, 75%, 9%)"
      );
      document.documentElement.style.setProperty(
        `--screenBackground`,
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        `--keypadToggleBackground`,
        "hsl(268, 71%, 12%)"
      );
      document.documentElement.style.setProperty(
        `--delResetBackground`,
        "hsl(281, 89%, 26%)"
      );
      document.documentElement.style.setProperty(
        `--delResetShadow`,
        "3px solid hsl(285, 91%, 52%)"
      );
      document.documentElement.style.setProperty(
        `--equalToggleBackground`,
        "hsl(176, 100%, 44%)"
      );
      document.documentElement.style.setProperty(
        `--equalShadow`,
        "3px solid hsl(177, 92%, 70%)"
      );
      document.documentElement.style.setProperty(
        `--numbersBackground`,
        "hsl(268, 47%, 21%)"
      );
      document.documentElement.style.setProperty(
        `--numbersShadow`,
        "3px solid hsl(290, 70%, 36%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextOne`,
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextTwo`,
        "hsl(52, 100%, 62%)"
      );
      document.documentElement.style.setProperty(
        `--colorTextThree`,
        "hsl(198, 20%, 13%)"
      );
    }
  })
);
