// Get a posts content
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();


module.exports = function(opt){

    opt = opt || {};
    opt.password = opt.password || ''; // the password to be used with jskey-crypt
    opt.random = opt.random || ''; // the salt value to be used with jskey-crypt

    router.get('/', (req, res) => {
    
        let dir_target = req.app.get('dir_target'),
        dir_posts_crypt = path.join(dir_target, '_posts_crypt'),
        dir_forFile = path.join(__dirname, 'forfile-filename.js');
        
        res.send('password: ' + opt.password + '<br> random: ' + opt.random);
    
    //let posts = spawn('jskey-crypt', ['pipe', '-t', dir_posts_crypt, '-s', dir_forFile]);
    
    /*
    //let out = '';
    let fileNames = [];
    posts.stdout.on('data', (data) => {
        //out += data.toString();
        fileNames.push(data.toString());
    });
    
    posts.on('close', (code) => {
        
        // res.send('_posts_crypt path: ' + dir_posts_crypt);
        res.json({
            dir_target: dir_target,
            dir_posts_crypt: dir_posts_crypt,
            dir_forFile: dir_forFile,
            fileNames : fileNames  
        });
      
    });
*/
    
    
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

