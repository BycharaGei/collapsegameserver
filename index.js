const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received message: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT;

server.listen(PORT, '35.157.117.28',  () => {
  console.log('sa as' + PORT);
});
