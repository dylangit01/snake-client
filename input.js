
// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
	connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(conn);
  return stdin;
};

const handleUserInput = (conn) => {
	const up = 'Move: up';
  const right = 'Move: right';
  const down = 'Move: down';
	const left = 'Move: left';
	
	process.stdin.on('data', (key) => {
    if (key === '\u0077') {
     	conn.write(`${up}`);
		}
		if (key === '\u0073') {
      conn.write(`${down}`);
		}
		if (key === '\u0061') {
      conn.write(`${left}`);
		}
		if (key === '\u0064') {
      conn.write(`${right}`);
		};
    if (key === '\u0003') {
      process.exit();
    }
  });
};


module.exports = {
  setupInput,
};
