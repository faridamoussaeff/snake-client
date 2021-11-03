// const net = require("net");
// const { IP, PORT } = require("./constants");
// const { uptime } = require("process");

const net = require("net");

//Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", 
    port: 50541
  });

//interpret incoming data as text and
conn.setEncoding("utf8");

conn.on('data', (data) => {
  console.log('server says:', data);
});
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
  });
 
  return conn;

}

module.exports = { connect };