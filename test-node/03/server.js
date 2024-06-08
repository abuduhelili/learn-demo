const http = require('http');
const server = http.createServer();
const fs = require('fs');
const path = require('path');

server.on('request', (req, res) => {
  if (req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
      if (err) console.log(err);
      else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data.toString());
      }
    });
  } else {
    console.log('你访问的资源不存在');
  }
});

server.listen(8080, () => {
  console.log('服务器启动成功,端口为:3000');
});
