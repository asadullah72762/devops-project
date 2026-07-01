const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const response = {
    message: 'Mera pehla DevOps app chal raha hai!',
    time: new Date().toISOString()
  };

  res.end(JSON.stringify(response, null, 2));
});

server.listen(PORT, () => {
  console.log('App chal rahi hai port 3000 par!');
});
