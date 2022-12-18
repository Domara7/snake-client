const net = require("net");
// establishes a connection with the game server
const { IP, PORT, name } = require("./constants");
const connect = function () {

  const conn = net.createConnection({
    host: IP, // 'localhost'
    port: PORT // 50541

  })
  conn.on("connect", () => {
    console.log("You have succesfully connected")
    // sending message to server to know that you have connected
    conn.write(`Name: ${name}`);
    // Name will be displayed when you join the server
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.setEncoding("utf8");
  //  makes the incoming data readable 

  return conn;
};


module.exports = { connect };
//exports the connect function so we can require it into another file