const { mappings } = require("./constants");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
}
const handleUserInput = (key) => {
  // Short circuit if user does the Ctrl-C key
  if (key === "\u0003") {
    return process.exit();
  }

  // handles all other key strokes
  if (mappings[key]) {
    connection.write(mappings[key]);
  }
};

module.exports = { setupInput };