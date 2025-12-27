const Clock = require("./clock");
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({ template: "h:m:s", precision: 5000 });
clock.start(2000);
