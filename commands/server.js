let express = require('express'),
fs = require('fs'),
yaml = require('js-yaml'),
path = require('path');

// get key.yaml from target folder
let getKey = (target)=>{
    return new Promise((resolve,reject)=>{
        let path_key = path.join(target,'key.yaml');
        fs.readFile(path_key, 'utf8', (e, data)=>{
            if(e){
                reject(e);
            }else{
                let key = {};
                try{
                    key = yaml.safeLoad(data);
                    resolve(key);
                }catch(e){
                    reject(e);
                }
            }
        });
    });
};

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
    let app = express();
    // app settings
    app.set('dir_target', path.resolve(argv.t));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'server_views'));
    
    // get key
    getKey(app.get('dir_target'))
    .then((key) => {
        // static paths
        app.use('/js', express.static(path.join(__dirname, 'server_public/js')));
        // middleware
        let dir_mw = path.join(__dirname, 'server_middleware');
        app.use('/post_list', require(path.join( dir_mw, 'get_post_list/index.js')));
        app.use('/post_save', require(path.join( dir_mw, 'post_save/index.js'))(key));
        app.use('/post', require(path.join( dir_mw, 'get_post/index.js'))(key));
        // render   
        app.use(require(path.join( dir_mw, 'render/index.js') ));
        // start server on port
        app.listen(argv.p, () => {
            console.log('jskey-webview is now up on port: ' + argv.p);
        });
    })
    .catch((e)=>{
        console.warn(e.message);
    });
};
