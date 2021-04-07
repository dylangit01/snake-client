const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });
  // interpret incoming data as text
	conn.setEncoding('utf8');
	
	 const up = 'Move: up';
   const right = 'Move: right';
   const down = 'Move: down';
   const left = 'Move: left';

  conn.on('data', (data) => {
    console.log('Server says: ', data);
	});
	
		setInterval(() => {
    conn.write(`${left}`);
		}, 50);


    // setInterval(() => {
    //   conn.write(`${up}`);
    // }, 500);
    // setInterval(() => {
    //   conn.write(`${right}`);
    // }, 500);
    // setInterval(() => {
    //   conn.write(`${down}`);
    // }, 500);
	


	
	
	// conn.on('connect', () => {
  //   conn.write('Move: left');
	// });
	
	// conn.on('connect', () => {
  //   conn.write('Move: down');
	// });
	
	// conn.on('connect', () => {
  //   conn.write('Move: right');
	// });
	
	// conn.on('connect', () => {
  //   conn.write('Move: right');
  // });

  return conn;
};

module.exports = {
	connect
}
