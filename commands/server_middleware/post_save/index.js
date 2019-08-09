// Save a post
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(key){

    // options
    key = key || {};
    key.password = key.password || ''; // the password to be used with jskey-crypt
    key.random = key.random || ''; // the salt value to be used with jskey-crypt
    
    router.post('/', [
    
        // create state and responseObj
        (req, res, next) => {
        
            // state
            req.state = {
                key : key,
                dir_target : req.app.get('dir_target')
            };
            req.state.dir_posts_crypt = path.join(req.state.dir_target, '_posts_crypt');
            req.state.path_file = path.join(req.state.dir_posts_crypt, req.body.fileName);
            
            res.resObj = {
                success: false,
                path_file: req.state.path_file
            };
        
            next();
    
        },
        
        // crypt response body
        (req, res, next) => {
            
            let key = req.state.key;
            let crypt = spawn('jskey-crypt', ['pipe', '-c', '-p', key.password, '-s', key.random]);
             
            let text = '';
            crypt.stdout.on('data', (data)=>{
                text += data.toString();
                // !!! should not be done here
                // but it seems to work okay for now
                crypt.stdin.end();
            });
            
            // when done
            crypt.on('close', ()=>{
                
                
                // write the file
                fs.writeFile(req.state.path_file, text, 'utf8', (e)=>{
                    
                    if(e){
                        res.mess = e.message;
                        next();
                    }else{
                        res.resObj.success = true;
                        res.resObj.mess = text;
                        next();
                    }
                });
                
 
            });
            
            crypt.stdin.write(req.body.text,'utf8');
            
        },
        
        (req,res)=>{
            
            
            res.json(res.resObj);
            
        }
    ]);

    // return the router to be used
    // in main server.js file
    return router;
    
};

