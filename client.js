const net = require("net");
const { IP, PORT } = require("./constants");

//Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

//interpret incoming data as text and
conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log("server says:", data);
});

conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZAZ");
  });
 
  return conn;
};

module.exports = { connect };