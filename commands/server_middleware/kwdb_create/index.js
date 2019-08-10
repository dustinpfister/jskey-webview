// create a keyword database
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.post('/', (req, res, next) => {
            
            let kwdb = spawn('jskey-kwdb', ['create', '-t', req.body.dbName, '-n', req.body.dbName);
             
            let resObj = {
                success: true,
                mess:''
            };
            
            // when done
            crypt.on('close', ()=>{
                
                res.json(resObj);
 
            });
            
        }
    );

    // return the router to be used
    // in main server.js file
    return router;
    
};

