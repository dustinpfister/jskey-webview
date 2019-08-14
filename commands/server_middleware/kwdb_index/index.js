// build index lists for posts and keywords
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(key){
    
    router.get('/', [
       
       // set up resObj
       (req, res, next) => {
        
           res.resObj = {
                success : false,
                mess: 'default message',
                mode : req.query.m || 'post', // for a post or keyword
                post: req.query.p || false,
                keyword: req.query.k || false
            };
        
            //res.json(res.resObj);
            next();
 
        },
        
        // keyword mode resObj check
        (req, res, next) => {
            let r = res.resObj;
            if(r.mode === 'keyword'){
                if(r.keyword){
                    next();
                }else{
                    r.mess = 'in keyword mode a keyword must be given';
                    res.json(r);
                }
            }else{
                next();
            }
        },
        
        // post mode resobj check
        (req, res, next) => {
            let r = res.resObj;
            if(r.mode === 'post'){
                if(r.post){
                    next();
                }else{
                    r.mess = 'in post mode a keyword is optional but must give a post';
                    res.json(r);
                }
            }else{
                next();
            }
        },
        
        // POST MODE
        (req, res, next) => {
            
            let dir_target = req.app.get('dir_target'),
            path_kwdb = path.join(dir_target, '_kwdb', req.body.dbName + '.json'),
            dir_post_crypt = path.join(dir_target, '_posts_crypt');
            
            if(res.resObj.mode === 'post'){
            
                fs.readFile(path.join(dir_post_crypt, res.resObj.post), 'utf8', (e, data)=>{
                
                    console.log(e)
                    console.log(data);
                    
                    let crypt = spawn('jskey-crypt', ['pipe', '-p', key.password, '-s', key.random]);
                    
                    let text = '';
                    crypt.stdout.on('data', (data)=>{
                         text += data.toString();
                         // !!! should not be done here
                         // but it seems to work okay for now
                         crypt.stdin.end();
                    });
        
                    // send text when
                    crypt.on('close', ()=>{
                        
                        console.log(text);
           
                        next();
            
                    });
        
                    crypt.stdin.write(data,'utf8');
                
                });
            
            }else{
                
                next();
                
            }
            
            
            
        },
        
        
        // send resObj
        (req,res) =>{
            
            res.json(res.resObj);
            
        }
        
        
    ]);

    // return the router to be used
    // in main server.js file
    return router;
    
};

