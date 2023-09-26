const http = require('http');
const chalk = require('chalk'); 

const host = 'localhost';
const puerto = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola, mundo!');
});

server.listen(puerto, host, () => {
  console.log(chalk.green(`Servidor corriendo en http://${host}:${puerto}/`));
});
