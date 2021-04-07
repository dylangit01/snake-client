const net = require('net');

const connect = function() {
  //  const up = 'Move: up';
  //  const right = 'Move: right';
  //  const down = 'Move: down';
  //  const left = 'Move: left';
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

	conn.write('Name: DSK');

	// setInterval(() => { conn.write(`${up}`); }, 200);

	conn.on('data', (data) => {
    console.log('Received: ' + data);
  });

  conn.on('connect', () => {
    console.log('You are connected :)');
  });

  return conn;
};

module.exports = {
	connect
}
