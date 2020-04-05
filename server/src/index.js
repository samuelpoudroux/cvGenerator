var http = require('http');

//creation appli express

const app = require('./app')
const port = process.env.BACK_PORT || '3000';

const server = http.createServer(app);

server.listen(port)