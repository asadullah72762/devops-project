const http = require('http');

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.APP_MESSAGE || 'Default message';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const response = {
    message: MESSAGE,
    environment: process.env.NODE_ENV,
    time: new Date().toISOString()
  };

  res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, () => {
  console.log(`App chal rahi hai port ${PORT} par!`);
});
