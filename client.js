const net = require('net');
const { IP, PORT, NAME } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
		console.log('You are connected :)');
	});
	conn.write(`${NAME}`);
	conn.write('Say: lunch time')

	// setInterval(() => { conn.write(`${up}`); }, 200);

  return conn;
};

module.exports = connect;
