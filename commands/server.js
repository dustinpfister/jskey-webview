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
    
    // app settings
    app.set('dir_target', path.resolve(argv.t));
    
    // static paths
    app.use('/js', express.static(path.join(__dirname, 'server_public/js')));
    
    // middleware
    app.use('/posts', require(path.join( __dirname, 'server_middleware/get_post_list/index.js')));
    
    // root path
    app.get('/', (req, res) => {
        res.send('jskey-webview: ' + app.get('dir_target'));
    });
    
    // start server on port
    app.listen(argv.p, () => {
        console.log('jskey-webview is now up on port: ' + argv.p);
    });
    
};
