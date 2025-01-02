const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data received, name ${name} with id: ${id}`);
});

customEmitter.on("request", () => {
  console.log(`Data requested`);
});

customEmitter.emit("request", 'jonh', 32);
customEmitter.emit("response", 'jonh', 32);
