const net = require("net");
const connect = function () {

  const conn = net.createConnection({
    host: '10.0.0.24',
    port: '50541'

  })
  conn.on("connect", () => {
    console.log("You have succesfully connected")
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.setEncoding("utf8");

  return conn;
};

const { IP, PORT } = require("./constants");

module.exports = { connect };