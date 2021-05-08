class System {
  constructor() {}
  auth(actualCode, enteredCode) {
    textSize(50);
    fill("black");
    text(code, 300, 300);
    if (actualCode === enteredCode.toUpperCase()) return true;
    else return false;
  }
}
