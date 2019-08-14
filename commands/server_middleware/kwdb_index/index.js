// build index lists for posts and keywords
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.get('/', [
       
       // set up resObj
       (req, res, next) => {
        
           let dir_target = req.app.get('dir_target'),
           path_kwdb = path.join(dir_target, '_kwdb', req.body.dbName + '.json');
        
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
        
        // check resObj
        (req, res, next) => {
            
            let r = res.resObj;
            
            if(r.keyword){
                
                if((r.mode === 'post' && r.post) || r.mode === 'keyword'){
                    
                    next();
                    
                }else{
                    
                    r.mess = 'keyword given but in post mode and no post if given';
                    res.json(r);
                    
                }
                
            }else{
            
                r.mess = 'no keyword given or no post given if in post mode';
                
                res.json(r);
                
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

