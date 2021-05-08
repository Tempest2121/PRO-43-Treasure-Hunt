class Security {
  constructor() {
    // Player Inputs
    this.access1 = createInput("Your Code 1");
    this.access1.position(250, 90);

    this.access2 = createInput("Your Code 2");
    this.access2.position(250, 290);

    this.access3 = createInput("Your Code 3");
    this.access3.position(250, 490);

    // Sibmit Buttons
    this.button1 = createButton("RUN CODE 1");
    this.button1.position(250, 120);
    this.button1.class("nes-btn is-warning");

    this.button2 = createButton("RUN CODE 2");
    this.button2.position(250, 320);
    this.button2.class("nes-btn is-warning");

    this.button3 = createButton("RUN CODE 3");
    this.button3.position(250, 520);
    this.button3.class("nes-btn is-warning");
  }
  display() {
    // Answer Authenitcation.
    this.button1.mousePressed(() => {
      if (system.auth(accessCode1, this.access1.value())) {
        this.button1.class("nes-btn is-success");
        this.button1.html("CORRECT");
        score++;
        progress = progress + " | | |";
      } else {
        this.button1.class("nes-btn is-error");
        this.button1.html("INCORRECT");
      }
    });

    this.button2.mousePressed(() => {
      if (system.auth(accessCode2, this.access2.value())) {
        this.button2.class("nes-btn is-success");
        this.button2.html("CORRECT");
        score++;
        progress = progress + " | | |";
      } else {
        this.button2.class("nes-btn is-error");
        this.button2.html("INCORRECT");
      }
    });

    this.button3.mousePressed(() => {
      if (system.auth(accessCode3, this.access3.value())) {
        this.button3.class("nes-btn is-success");
        this.button3.html("CORRECT");
        score++;
        progress = progress + " | | |";
      } else {
        this.button3.class("nes-btn is-error");
        this.button3.html("INCORRECT");
      }
    });
  }

  hide() {
    this.button1.hide();
    this.access1.hide();
    this.button2.hide();
    this.access2.hide();
    this.button3.hide();
    this.access3.hide();
  }
}
