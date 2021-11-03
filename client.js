const net = require("net"); 

//Establishes a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", 
    port: 50541
  });
  conn.on('data', (data) => {
  console.log('Server says: ', data)
}); 
conn.on('connect',() => {
  console.log('Move: up');
  conn.write('Name: FMG')
});
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn; 
};
console.log("Connecting ..."); 
connect();

module.exports = { connect }