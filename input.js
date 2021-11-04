let connection;

const setupInput = function(conn) {
  // done in was movement
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;

  if (key === "\u0003") {
    // CTRL-C character (ETX character) {
    stdout.write("Bye!");
    process.exit();
  }

  if (key === "q") {
    console.log("quit");
    process.exit();
  }
  if (key === "w") {
    console.log("up");
    connection.write("Move: up");
  }
  if (key === "s") {
    console.log("down");
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "z") {
    connection.write("Say: Hello World");
  }
  if (key === "x") {
    connection.write("Say: Hi there!");
  }
  if (key === "e") {
    connection.write("I like pizza");
  }
};

module.exports = { setupInput };