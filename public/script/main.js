let key = document.querySelectorAll(".keyboard-button");
let screen = document.getElementsByClassName("screen");
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
      screen[0].textContent = eval(calcul);
      calcul = screen[0].textContent;
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
        //if there is already an operator and and user tip on another operator, delete the old one.
        if (operator == true) {
          screen[0].textContent = screen[0].textContent.slice(
            0,
            screen[0].textContent.length - 1
          );
          calcul = calcul.slice(0, calcul.length - 1);
        }
        operator = true;
      } else {
        operator = false;
      }
      if (element.textContent == "x") {
        calcul += "*";
      } else {
        calcul += element.textContent;
      }
      screen[0].textContent += element.textContent;
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
