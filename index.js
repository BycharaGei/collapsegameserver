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

server.listen(443, '3.75.158.163', () => {
  console.log('sa as');
});
