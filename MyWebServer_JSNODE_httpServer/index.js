var server = require('ws').Server;
var s = new server({ port: 5001 });

s.on('connection', function (ws) {
    ws.on('message', function (message) { // get more data to website
        console.log("Received : " + JSON.parse(message));
        const fs = require('fs');
        fs.appendFile('std.json', (message));
    });

});
