const net = require('net');
const { IP, PORT, NAME }  =  require('./constants')
const connect = function() {
  //  const up = 'Move: up';
  //  const right = 'Move: right';
  //  const down = 'Move: down';
  //  const left = 'Move: left';
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

	conn.write(`${NAME}`);
	conn.write('Say: lunch time')

	// setInterval(() => { conn.write(`${up}`); }, 200);

  conn.on('connect', () => {
		console.log('You are connected :)');
	});
  return conn;
};

module.exports = connect;
