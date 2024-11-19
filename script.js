const http = require('http');

const serverSide = http.createServer((request, response)=>{
const method = request.method;
const url = request.url;
response.setHeader('Content-type', 'text/html');
response.write('<!DOCTYPE html><html lang="pt-br">');
response.write('<head><meta charset="UTF-8"><title>HTTP Request</title></head>');
response.write('<body>')
response.write('<h1>Dados da requisição</h1><br>');
response.write('<hr>');
response.write('Método da requisição: ' + method + '<br>'); response.write('URL da requisição:' + url + '<br>'); response.write('</body></html');
response.end()
});

serverSide.listen(3000);