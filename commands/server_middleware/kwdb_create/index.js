// create a keyword database
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.post('/', (req, res, next) => {
        
            let dir_target = req.app.get('dir_target'),
            path_kwdb = path.join(dir_target, '_kwdb', req.body.dbName + '.json');
            
            let kwdb = spawn('jskey-kwdb', ['create', '-t', path_kwdb, '-n', req.body.dbName]);
             
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

