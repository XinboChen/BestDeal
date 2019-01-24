// './app' make sure server.js can find app.js. otherwise will return can't find module app error
var app = require('./app');
var debug = require('debug')('BestDeal:server');
var http = require('http');

var port = normalizePort(process.env.PORT ||  '8888');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
    var port = parseInt(val, 10);
    
    if(isNaN(port)){
       // pipe
        return val;
    }
    
    if(port >= 0){
        return port;
    }
    
    return false;
}

function onError(error){
    if(error.syscall != 'listen'){
        throw error;
    }
    
    var bind = typeof port === 'string' 
        ? 'Pipe' + port 
        : 'Port' + port;
}

function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe' + addr
        : 'port' + addr.port;
    debug('Listening on' + bind);
}

