// Get a posts content
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();


module.exports = function(opt){

    opt = opt || {};
    opt.password = opt.password || ''; // the password to be used with jskey-crypt
    opt.random = opt.random || ''; // the salt value to be used with jskey-crypt

    router.get(/\.md$/, (req, res) => {
    
        let dir_target = req.app.get('dir_target'),
        dir_posts_crypt = path.join(dir_target, '_posts_crypt'),
        fileName = path.basename(req.path),
        path_file = path.join(dir_posts_crypt, fileName);
        
        let info = {
            password: opt.password,
            random: opt.random,
            fileName:  fileName,
            pathFile:  path_file 
        };
        
        //res.json(info);
    
        let crypt = spawn('jskey-crypt', ['pipe', '-p', opt.password, '-s', opt.random]);
    
        let text = '';
        crypt.stdout.on('data', (data)=>{
            //console.log(data.toString());
            text += data.toString();
            
            // !!! should not be done here
            // but it seems to work okay for now
            crypt.stdin.end();
            
        });
        
        // send text when
        crypt.on('close', ()=>{
            console.log(text);
            res.set('Content-Type', 'text/plain');
            res.send(text);
            
        });
        
        //console.log(crypt.stdio);
        
        fs.readFile(path_file,'utf8', (e, data)=>{
            crypt.stdin.write(data,'utf8', ()=>{
                
                // !!! do i event need this callback for anything?
                
            });
        });
    
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

