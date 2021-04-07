const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });
  // interpret incoming data as text
	conn.setEncoding('utf8');
	
	//  const up = 'Move: up';
  //  const right = 'Move: right';
  //  const down = 'Move: down';
  //  const left = 'Move: left';

  conn.on('data', (data) => {
    console.log('Server says: ', data);
	});

	conn.on('connect', () => {
    conn.write('Name: DSK');
  });

 	// setInterval(() => {
  //   conn.write(`Move: up`);
	// 	}, 100);



  return conn;
};

module.exports = {
	connect
}
