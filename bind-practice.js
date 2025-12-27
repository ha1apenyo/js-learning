// let calculator = {
//   factor: 10,
//   multiply(a, b) {
//     return (a + b) * this.factor;
//   }
// };

// function runLater(callback) {
//   setTimeout(() => {
//     console.log("Result:", callback());
//   }, 1000);
// }

// let task = calculator.multiply.bind(calculator, 5, 7);

// runLater(task);

let user = {
  name: "Daniel",
  log(action, time, details) {
    console.log(`[${time}] ${this.name}: ${action} → ${details}`);
  }
};

function eventEmitter(callback) {
  // имитация внешнего события
  setTimeout(() => {
    callback("open menu");   // событие 1
    callback("click button"); // событие 2
  }, 500);
}
let time = new Date().getHours() + ":" + new Date().getMinutes();
let logger = user.log.bind(user, 'UI event', time);

eventEmitter(logger);