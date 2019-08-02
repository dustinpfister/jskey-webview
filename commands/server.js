let express = require('express'),
path = require('path');

exports.command = 'server';
exports.describe = 'server command';
exports.builder = {
    // port
    p: {
      default: process.env.PORT || 8080
    }
};
exports.handler = function (argv) {
    console.log('> jskey-webview: server command:');
    console.log(argv.p)
    
    let app = express();
    
    app.get('/', (req, res) => {
        
        res.send('jskey-webview');
        
    });
    
    app.listen(argv.p, () => {
        console.log('jskey-webview is now up on port: ' + argv.p);
    });
    
};
