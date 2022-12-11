const net = require("net");
// establishes a connection with the game server
const { IP, PORT } = require("./constants");
const connect = function () {
  
  const conn = net.createConnection({
    host:IP ,
    port: PORT
    
  })
  conn.on("connect", () => {
    console.log("You have succesfully connected")
  })
 // sending message to server to know that you have connected
  conn.on("data", (data) => {
    console.log(data);
  })

  conn.setEncoding("utf8");
  // interpret incoming data as text

  return conn;
};


module.exports = { connect };