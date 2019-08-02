let express = require('express'),
path = require('path');

exports.command = 'server';
exports.describe = 'server command';
exports.builder = {
    // port
    p: {
      default: process.env.PORT || 8080
    },
    // target project folder to use
    t:{
      default: path.join(process.cwd(), '_posts_crypt')
    }
};
exports.handler = function (argv) {
    console.log('> jskey-webview: server command:');
    console.log(argv.p)
    
    let app = express();
    
    app.set('dir_posts_crypt', path.resolve(argv.t));
    
    app.use('/posts', require('./server_middleware/get_posts.js'));
    
    app.get('/', (req, res) => {
        
        res.send('jskey-webview: ' + app.get('dir_posts_crypt'));
        
    });
    
    app.listen(argv.p, () => {
        console.log('jskey-webview is now up on port: ' + argv.p);
    });
    
};
